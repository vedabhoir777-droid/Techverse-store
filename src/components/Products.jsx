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

    if (error) {
      console.log("READ ERROR:", error);
      return;
    }

    setProducts(data || []);
  };

  const addProduct = async () => {
    if (!name || !brand || !price) {
      alert("Fill all fields");
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
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("DELETE ERROR:", error);
      return;
    }

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

      {/* PRODUCT NAME */}
      <input
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      {/* BRAND DROPDOWN */}
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      >
        <option value="">Select Brand</option>

        {Object.values(brandOptions)
          .flat()
          .map((b, i) => (
            <option key={i} value={b}>
              {b}
            </option>
          ))}
      </select>

      <br /><br />

      {/* PRICE */}
      <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <button onClick={addProduct}>
        Add Product
      </button>

      <hr style={{ width: "80%" }} />

      <h2>Product List</h2>

      {/* PRODUCT LIST */}
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "2px solid black",
              padding: "20px",
              margin: "15px",
              width: "350px",
              borderRadius: "10px",
              textAlign: "center"
            }}
          >
            <p><b>Name:</b> {item.name}</p>
            <p><b>Brand:</b> {item.brand}</p>
            <p><b>Price:</b> ₹{item.price}</p>

            <button onClick={() => deleteProduct(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default Products;