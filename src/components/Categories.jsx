import { useState } from "react";

function Categories(){
  
  const [liked,setLiked]=useState(null);
  const collections=[
    {
      title:"Laptops",
      image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      price:"Starting ₹39999"
    },
    {
      title:"Smartphones",
      image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      price:"Starting ₹9999"
    },
    {
      title:"Gaming Setup",
      image:"https://images.unsplash.com/photo-1593305841991-05c297ba4575",
      price:"Premium Gaming"
    },
    {
      title:"Accessories",
      image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      price:"Latest Collection"
    }
  ];

return(
  
  <section style={styles.section}>
    <h1 style={styles.heading}>
      Featured Collections
    </h1>
    <p style={styles.sub}>
      Explore our premium technology collections
    </p>
    <div style={styles.grid}>
      {
      collections.map((item,index)=>(
      <div
      key={index}
      style={styles.card}>
        <img
        src={item.image}
        alt={item.title}
        style={styles.image}/>
        <button
        style={styles.heart}
        onClick={()=>setLiked(index)}
        >
          {
          liked===index ?"❤️":"🤍"}
        </button>
        <div style={styles.content}>
          <h2>
            {item.title}
          </h2>
          <p>
            {item.price}
          </p>
          <button style={styles.cart}>
            Add To Cart
          </button>
        </div>
      </div>))}
    </div>
  </section>
);
}
const styles={
  section:{
    padding:"90px 60px",
    background:"#FFF8F0"
  },
  heading:{
    textAlign:"center",
    fontSize:"48px",
    fontWeight:"900",
    color:"#0f172a"
  },
  sub:{
    textAlign:"center",
    color:"#64748b",
    fontSize:"18px",
    marginBottom:"50px"
  },
  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
    gap:"35px"
  },
  card:{
    height:"430px",
    borderRadius:"30px",
    overflow:"hidden",
    position:"relative",
    background:"white",
    boxShadow:"0 20px 40px rgba(0,0,0,.15)"
  },
  image:{
    width:"100%",
    height:"100%",
    objectFit:"cover"
  },
  heart:{
    position:"absolute",
    right:"20px",
    top:"20px",
    border:"none",
    background:"white",
    width:"45px",
    height:"45px",
    borderRadius:"50%",
    fontSize:"22px",
    cursor:"pointer"
  },
  content:{
    position:"absolute",
    bottom:"0",
    width:"100%",
    padding:"30px",
    boxSizing:"border-box",
    color:"white",
    background:"linear-gradient(transparent,rgba(0,0,0,.85))"
  },
  cart: {
  background: "#171A2B",
  color: "#fff",
  border: "none",
  width: "90%",
  height: "42px",
  borderRadius: "5px",
  fontSize: "13px",
  fontWeight: "800",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  cursor: "pointer",
  margin: "16px auto 12px",
  display: "block",
  fontFamily: "Arial, sans-serif",
}
};
export default Categories;