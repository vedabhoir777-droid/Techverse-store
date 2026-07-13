import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

function App(){
  
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const [authPage,setAuthPage]=useState("login");
  const [page,setPage]=useState("home");
  
  useEffect(()=>{
    getUser();
    const {
      data:{subscription}
    }=supabase.auth.onAuthStateChange(
      (event,session)=>{
        setUser(session?.user || null);
      }
    );
    
    return()=>{
      subscription.unsubscribe();
    };
  },[]);

const getUser=async()=>{
const {

data:{session}

}=await supabase.auth.getSession();


setUser(session?.user || null);

setLoading(false);


};







if(loading){


return(

<h2 style={{

textAlign:"center",

marginTop:"50px"

}}>

Loading...

</h2>

);


}







if(!user){


return(

authPage==="login"

?

<Login

onSwitch={()=>setAuthPage("signup")}

/>


:

<Signup

onSwitch={()=>setAuthPage("login")}

/>


);


}







return(


<>


<Navbar

email={user.email}

currentPage={page}

setCurrentPage={setPage}

/>









{/* HOME PAGE */}


{

page==="home" &&

<>


<Hero/>


<Categories/>


<Features/>


<Products mode="products"/>


</>


}









{/* SHOP */}


{

page==="products" &&

<Products

mode="shop"

/>

}









{/* ADD PRODUCT */}


{

page==="addProduct" &&

<Products

mode="addProduct"

/>

}









{/* COLLECTION */}


{

page==="collections" &&

<Categories/>

}









{/* ABOUT */}


{

page==="about" &&

<About/>

}







<Footer/>




</>


);


}



export default App;