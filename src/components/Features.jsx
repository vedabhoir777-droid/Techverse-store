function Features(){
  
  const features=[
    {
      icon:"🚚",
      title:"Fast Delivery",
      text:"Quick and reliable delivery at your doorstep."
    },
    {
      icon:"🔒",
      title:"Secure Payment",
      text:"Safe and secure payment experience."
    },
    {
      icon:"⭐",
      title:"Premium Quality",
      text:"Trusted products from top brands."
    },
    {
      icon:"💬",
      title:"Customer Support",
      text:"We are always ready to help you."
    }
  ];

  return(
  
  <section style={styles.section}>
    <h1 style={styles.heading}>
      Why Choose TechVerse?
    </h1>
    <p style={styles.subtitle}>
      A better way to shop technology online
    </p>
    <div style={styles.container}>
      {
      features.map((item,index)=>(
      <div
      key={index}
      style={styles.card}>
        <div style={styles.icon}>
          {item.icon}
        </div>
        <h2>
          {item.title}
        </h2>
        <p>
          {item.text}
        </p>
      </div>))}
    </div>
  </section>
);
}
const styles={
  section:{
    padding:"60px 20px 50px",
    background:"#F5E6D3",
    marginBottom:"0px"
  },
  heading:{
    textAlign:"center",
    fontSize:"45px",
    fontWeight:"900",
    color:"#0f172a"
  },
  subtitle:{
    textAlign:"center",
    color:"#64748b",
    fontSize:"18px",
    marginBottom:"50px"
  },
  container:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
    gap:"30px"
  },
  card:{
    background:"white",
    padding:"35px 25px",
    borderRadius:"25px",
    textAlign:"center",
    boxShadow:"0 15px 35px rgba(0,0,0,.1)",
    transition:"0.3s"
  },
  icon:{
    fontSize:"45px",
    marginBottom:"20px"
  }
};
export default Features;