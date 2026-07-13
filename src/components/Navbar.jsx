import { supabase } from "../supabase";
function Navbar({email,currentPage,setCurrentPage}){
  
  const logout=async()=>{
    await supabase.auth.signOut();
    window.location.reload();
  };
  const menus=[
    {
      name:"Home",
      page:"home"
    },
    {
      name:"Shop",
      page:"products"
    },
    {
      name:"Collections",
      page:"collections"
    },
    {
      name:"Add Product",
      page:"addProduct"
    },
    {
      name:"About",
      page:"about"
    }
  ];

  return(
  
  <nav style={styles.navbar}>
    <div
    style={styles.logo}
    onClick={()=>setCurrentPage("home")}>
      Tech<span>Verse</span>
    </div>
    <div style={styles.menu}>
      {
      menus.map((item,index)=>(
      <div
      key={index}
      onClick={()=>setCurrentPage(item.page)}
      style={{
        ...styles.item,
        ...(currentPage===item.page ? styles.active : {})
      }}>
        {item.name}
        {
        currentPage===item.page &&
        <div style={styles.line}></div>
        }
      </div>))
      }
    </div>
    <div style={styles.profile}>
      <div style={styles.user}>
        <div style={styles.avatar}>👤 </div>
      <div>
        <p style={styles.email}>
          {email}
        </p>
        <span style={styles.online}>
          ● Online 
        </span>
      </div>
    </div>
    <button
    onClick={logout}
    style={styles.logout}>
      Logout
    </button>
    </div>
  </nav>
);
}
const styles={
  navbar:{
    height:"80px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    padding:"0 45px",
    background:"#ffffff",
    color:"#111827",
    margin:"0",
    position:"sticky",
    top:"0",
    zIndex:"1000",
    boxShadow:"0 5px 20px rgba(0,0,0,.08)"
  },
  logo:{
    fontSize:"32px",
    fontWeight:"900",
    cursor:"pointer",
    color:"#111827"
  },
  menu:{
    display:"flex",
    gap:"25px",
    alignItems:"center"
  },
  item:{
    position:"relative",
    padding:"12px 5px",
    cursor:"pointer",
    fontWeight:"600",
    fontSize:"16px",
    color:"#475569",
    transition:"0.3s"
  },
  active:{
    color:"#a16207",
  },
  line:{
    position:"absolute",
    bottom:"-8px",
    left:"0",
    width:"100%",
    height:"3px",
    background:"#a16207",
    borderRadius:"10px"
  },
  profile:{
    display:"flex",
    alignItems:"center",
    gap:"15px"
  },
  user:{
    display:"flex",
    alignItems:"center",
    gap:"10px",
    background:"#f8fafc",
    padding:"8px 14px",
    borderRadius:"15px"
  },
  avatar:{
    fontSize:"22px"
  },
  email:{
    margin:"0",
    fontSize:"13px",
    fontWeight:"600",
    color:"#111827"
  },
  online:{  
  fontSize:"11px",
  color:"#16a34a"
},
  logout:{
    background:"#ef4444",
    color:"white",
    border:"none",
    padding:"11px 20px",
    borderRadius:"12px",
    fontWeight:"bold",
    cursor:"pointer"
  }
};
export default Navbar;