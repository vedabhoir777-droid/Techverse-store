function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>TechVerse Store</h2>

      <div style={styles.links}>
        <span style={styles.link}>Home</span>
        <span style={styles.link}>Products</span>
        <span style={styles.link}>Categories</span>
        <span style={styles.link}>Contact</span>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#1e3a8a",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    margin: "10px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#2563eb",
    color: "white"
  }
};

export default Navbar;
