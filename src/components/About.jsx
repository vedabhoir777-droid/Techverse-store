function About(){
    return(
    
    <section style={styles.section}>
        <div style={styles.container}>
            <div style={styles.imageBox}>
                <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                alt="TechVerse"
                style={styles.image}/>
            </div>
            <div style={styles.content}>
                <span style={styles.tag}>
                    ABOUT TECHVERSE
                </span>
                <h1 style={styles.aboutHeading}>
                    Making Technology<br />
                    Shopping Simple & Smarter
                </h1>
                <p>
                    TechVerse is a modern e-commerce platform built to provide
                    customers with a smooth, secure and enjoyable technology shopping experience.
                </p>
                <p>
                    We offer premium laptops, smartphones,gaming products and accessories from
                    rusted brands. Our mission is to connect customers with the latest technology
                    at the right price.
                </p>
                <div style={styles.points}>
                    <div>
                        ✓ Premium Technology Products
                    </div>
                    <div>
                        ✓ Trusted Brands
                    </div>
                    <div>
                        ✓ Easy Online Shopping
                    </div>
                    <div>
                        ✓ Customer Satisfaction
                    </div>
                </div>
                <button style={styles.button}>
                    Explore Products
                </button>
            </div>
        </div>
    </section>
);
}
const styles={
    section:{
        padding:"80px 40px",
        background:"linear-gradient(135deg,#ffffff,#eff6ff)"
    },
    container:{
        display:"flex",
        alignItems:"center",
        gap:"50px",
        flexWrap:"nowrap",
        justifyContent:"space-between",
    },
    imageBox:{
        flex:"1",
    },
    image:{
        width:"100%",
        maxWidth:"520px",
        height:"460px",
        objectFit:"cover",
        borderRadius:"25px",
        boxShadow:"0 25px 50px rgba(0,0,0,.15)"
    },
    content:{
        flex:"1",
    },
    tag:{
        color:"#2563eb",
        fontWeight:"800",
        letterSpacing:"2px"
    },
    h1:{
        fontSize:"52px",
        fontWeight:"800",
        color:"#0f172a",
        lineHeight:"1.2",
        letterSpacing:"-1px",
    },
    aboutHeading:{
        fontSize:"48px",
        fontWeight:"700",
        color:"#0f172a",
        lineHeight:"1.2",
        marginBottom:"20px",
    },
    p:{
        fontSize:"18px",
        lineHeight:"1.8",
        color:"#475569"
    },
    points:{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"18px",
        margin:"30px 0",
        fontWeight:"600",
        color:"#1e293b"
    },
    button:{
        padding:"15px 35px",
        border:"none",
        borderRadius:"30px",
        background:"linear-gradient(90deg,#2563eb,#7c3aed)",
        color:"white",
        fontSize:"17px",
        fontWeight:"bold",
        cursor:"pointer"
    }
};
export default About;