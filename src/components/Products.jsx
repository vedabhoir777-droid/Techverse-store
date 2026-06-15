import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const brandOptions = {
  laptop: ["Dell", "HP", "Lenovo"],
  mobile: ["Samsung", "Vivo", "Redmi"],
  gaming: ["ASUS", "MSI"],
  accessories: ["Sony", "Boat", "Logitech"],
  headphones: ["Sony", "Boat", "JBL"]
};

function Products() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (!error) {
      setProducts(data || []);
    }
  };

  const addProduct = async () => {
    if (!name || !brand || !price) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          brand,
          price
        }
      ]);

    if (error) {
      console.log("INSERT ERROR:", error);
      return;
    }

    setName("");
    setBrand("");
    setPrice("");

    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await supabase
      .from("products")
      .delete()
      .eq("id", id);

    fetchProducts();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <h2>Add Product</h2>

      {/* Product Name Dropdown */}
      <select
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setBrand("");
        }}
        style={{
          padding: "10px",
          width: "350px"
        }}
      >
        <option value="">Select Product Name</option>
        <option value="laptop">Laptop</option>
        <option value="mobile">Mobile</option>
        <option value="gaming">Gaming</option>
        <option value="accessories">Accessories</option>
        <option value="headphones">Headphones</option>
      </select>

      <br />
      <br />

      {/* Brand Dropdown */}
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        style={{
          padding: "10px",
          width: "350px"
        }}
      >
        <option value="">Select Brand</option>

        {name &&
          brandOptions[name]?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>

      <br />
      <br />

      {/* Price */}
      <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          padding: "10px",
          width: "350px"
        }}
      />

      <br />
      <br />

      <button onClick={addProduct}>
        Add Product
      </button>

      <hr style={{ width: "80%", marginTop: "20px" }} />

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "2px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              margin: "10px",
              width: "350px",
              textAlign: "center"
            }}
          >
            <p>
              <b>Name:</b> {item.name}
            </p>

            <p>
              <b>Brand:</b> {item.brand}
            </p>

            <p>
              <b>Price:</b> ₹{item.price}
            </p>

            <button
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;