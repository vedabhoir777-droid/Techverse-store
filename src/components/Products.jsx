import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const brandOptions = {
  Laptop:["Dell","HP","Lenovo","Asus"],
  Mobile:["Samsung","Apple","Vivo","Redmi"],
  Gaming:["MSI","ASUS","Acer"],
  Accessories:["Boat","Sony","Logitech"]
};
const styles = {
addSection:{
  minHeight:"100vh",
  padding:"60px 20px",
  background:"#fcf8fa",
},
card:{
  maxWidth:"600px",
  margin:"auto",
  background:"linear-gradient(135deg,#fff7ed,#fef3c7)",
  padding:"35px",
  borderRadius:"25px",
  boxShadow:"0 20px 50px rgba(0,0,0,.12)",
  textAlign:"left",
},
shopCard: {
  background: "#fff",
  width: "260px",
  flex: "0 0 260px",
  padding: "10px",
  overflow: "hidden",
  borderRadius: "18px",
  transition: "all 0.3s ease",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  border: "1px solid #e5e7eb",
  cursor: "pointer",
},
productGrid: {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: "30px",
},
heading:{
  fontSize:"35px",
  fontWeight:"800",
  color:"#111827",
  textAlign:"center",
  marginBottom:"5px",
  marginTop:"4px",
},
sub:{
  color:"#64748b",
  marginBottom:"30px",
  textAlign:"center",
},
label:{
  display:"block",
  marginTop:"18px",
  marginBottom:"8px",
  fontWeight:"700",
  color:"#1f2937",
  textAlign: "left"
},
input:{
  width:"100%",
  height:"45px",
  borderRadius:"12px",
  border:"1px solid #d6b98c",
  padding:"0 15px",
  boxSizing:"border-box"
},
button:{
  width:"100%",
  marginTop:"30px",
  padding:"14px",
  border:"none",
  borderRadius:"14px",
  background:"linear-gradient(90deg,#92400e,#b45309)",
  color:"#fff",
  fontWeight:"700",
  cursor:"pointer"
},
message: {
  marginBottom:"20px",
  padding:"12px 15px",
  borderRadius:"12px",
  background:"#dcfce7",
  color:"#166534",
  fontWeight:"700",
  textAlign:"left",
},
};

function Products({mode}) {
  const [products,setProducts] = useState([]);
  const [user,setUser] = useState(null);
  const [name,setName] = useState("");
  const [brand,setBrand] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const[message,setMessage] = useState("");
  const[loading,setLoading] = useState(true);
  
  useEffect(()=>{
    getUser();
  },[]);

  const getUser = async()=>{
    const {
      data:{user}
    }=await supabase.auth.getUser();
    setUser(user);
    
    if(user){
      fetchProducts(user.id);
    }
  };
// READ OPERATION
 const fetchProducts = async(id)=>{
  setLoading(true);
  
  const {data,error}=await supabase
  .from("products")
  .select("*").eq("user_id",id);
  
  if(!error){
    setProducts(data || []);
  }
  setLoading(false);
};
// CREATE OPERATION
   const addProduct = async()=>{
    if(!name || !brand || !price || !image){
      alert("Please fill all fields");
      return;
    }
    
    const {error}=await supabase
    .from("products")
    .insert([
      {
        user_id:user.id,
        name,
        brand,
        price,
        image:image
      }]);
      
      if(error){
        setMessage("product not added");
        console.log(error);
        return;
      }
      setMessage("product added successfully!");
      setName("");
      setBrand("");
      setPrice("");
      setImage("");
      
      fetchProducts(user.id);
      setTimeout(()=>{
        setMessage("");
      },3000);
    };
// DELETE

   const deleteProduct = async(id)=>{
    await supabase.from("products")
    .delete().eq("id",id);
    
    fetchProducts(user.id);
  };
  
  return (
  
  <div>
    {mode==="addProduct" && (
      <section style={styles.addSection}>
        <div style={styles.card}>
          <h1 style={styles.heading}>
            Add New Product
          </h1>
          {
          message && (
          <div style={styles.message}>{message}</div>
          )}
          <p style={styles.sub}>
            Create and manage your store products
          </p>
          <label style={styles.label}>
            Product Name
          </label>
          <select
          style={styles.input}
          value={name}
          onChange={(e)=>{
            setName(e.target.value);
            setBrand("");
          }}>
            
            <option value="">
              Select Product
            </option>
            
            <option>Laptop</option>
            <option>Mobile</option>
            <option>Gaming</option>
            <option>Accessories</option>
          </select>
          
          <label style={styles.label}>
            Brand
          </label>
          <select
          style={styles.input}
          value={brand}
          onChange={(e)=>setBrand(e.target.value)}>
            
            <option value="">
              Select Brand
            </option>
            {
            brandOptions[name]?.map((b)=>(
            <option key={b}>{b}</option>))}
          </select>
            
          <label style={styles.label}>
            Price
          </label>
            
          <input
          style={styles.input}
          placeholder="₹ Enter price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}/>
            
          <label style={styles.label}>
            Product Image URL
          </label>
            
          <input
          style={styles.input}
          placeholder="Paste image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}/>
          <button
          style={styles.button}
          onClick={addProduct}>
            🚀 Publish Product
          </button>
        </div>
      </section>
    )}
    {mode==="shop" && (
      <div style={styles.addSection}>
        <h1 style={styles.heading}>
          Shop Products
        </h1>
        <br/>
        <p style={styles.sub}>
          Explore our latest products from trusted brands
        </p>
        <div style={styles.productGrid}>
        {
        products.map((item)=>(
        <div
        key={item.id}
        style={styles.shopCard}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        }}>
          <img
          src={item.image}
          alt=""
          style={{
            width:"100%",
            height:"150px",
            objectFit:"contain",
            borderRadius:"12px"
          }}/>
          <h2>
            {item.name}
          </h2>
          <p>
            {item.brand}
          </p>
          <h3>
            ₹ {item.price}
          </h3>
          <button
          style={{
            ...styles.button,
            background:"#dc2626"}}
            onClick={()=>deleteProduct(item.id)}>
              Delete
          </button>
        </div>
      ))}
      </div>
      </div>
    )}
    
    {mode==="collections" && (
      <div style={styles.addSection}>
        <h1 style={styles.heading}>
          Collections
        </h1>
        {
        ["Laptop","Mobile","Gaming","Accessories"]
        .map((cat)=>(
        <div key={cat}>
          <h2>{cat}</h2>
          {
          products.filter((item)=>item.name===cat).
          map((item)=>(
          <div
          key={item.id}
          style={styles.card}>
            <img
            src={item.image}
            alt=""
            style={{
              width:"100%",
              height:"220px",
              objectFit:"cover",
              borderRadius:"15px"}}
            />
            <h3>{item.brand}</h3>
            <p>₹ {item.price}</p>
          </div>))}
        </div>))}
      </div>)}
    </div>
  );
}
export default Products;