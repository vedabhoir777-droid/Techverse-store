function Categories() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Shop by Categories</h2>

      <div style={styles.row}>
        <div style={styles.item}>Laptops</div>
        <div style={styles.item}>Mobiles</div>
        <div style={styles.item}>Accessories</div>
        <div style={styles.item}>Gaming</div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px 20px",
  },

  title: {
    marginBottom: "15px",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  item: {
    padding: "12px 20px",
    borderRadius: "10px",
    backgroundColor: "#14b8a6",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
};

export default Categories;