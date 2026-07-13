function Footer(){
    return(
    <footer style={styles.footer}>
        <div style={styles.container}>
            {/* Brand */}
            <div>
                <h2 style={styles.logo}>
                    🚀 TechVerse
                </h2>
                <p style={styles.text}>
                    Your trusted destination for
                    premium technology products.
                </p>
                <div style={styles.social}>
                    <span>📘</span>
                    <span>📸</span>
                    <span>🐦</span>
                </div>
            </div>
            {/* Links */}
            <div>
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>Shop</p>
                <p>Collection</p>
                <p>About</p>
            </div>
            {/* Products */}
            <div>
                <h3>Categories</h3>
                <p>Laptops</p>
                <p>Mobiles</p>
                <p>Gaming</p>
                <p>Accessories</p>
            </div>
            {/* Support */}
            <div>
                <h3>Support</h3>
                <p>Help Center</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
        <div style={styles.bottom}>
            © 2026 TechVerse. All Rights Reserved.
        </div>
    </footer>
);
}
const styles={
    footer:{
        background:"#0F172A",
        color:"white",
        padding:"20px 20px 50px",
        marginTop:"0px"
    },
    container:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"40px"
    },
    logo:{
        fontSize:"30px",
        color:"#60a5fa",
        fontWeight:"900"
    },
    text:{
        color:"#94a3b8",
        lineHeight:"1.7"
    },
    social:{
        display:"flex",
        gap:"15px",
        fontSize:"25px",
        marginTop:"20px"
    },
    bottom:{
        borderTop:"1px solid #334155",
        marginTop:"45px",
        paddingTop:"20px",
        textAlign:"center",
        color:"#94a3b8",
        fontSize:"14px"
    }
};
export default Footer;