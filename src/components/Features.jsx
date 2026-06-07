function Features() {
  return (
    <section style={styles.container}>
      <h2>Features</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://www.91-img.com/pictures/laptops/samsung/samsung-np940xha-lg1in-167801-v1-original-1.jpg?tr=h-180,c-at_max,q-70,t-true"
            alt="Laptop"
            style={styles.image}
          />
          <h3 style={styles.tag}>Laptop</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://i5.walmartimages.com/seo/Unlocked-Cell-phones-Smartphone-3GB-RAM-64GB-ROM-6-8-HD-Face-Unlocked-Phone-for-T-Mobile-i14-Pro-Max_13d609ad-3bf5-4af6-847f-85988d5da947.857994c4a2fa7cbe15feb9053411bb9c.jpeg"
            alt="Smartphone"
            style={styles.image}
          />
          <h3 style={styles.tag}>Smartphone</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://www.portronics.com/cdn/shop/files/Portronics_Muff_M3_best_headphones_under_5000.jpg?v=1744893854"
            alt="Headphones"
            style={styles.image}
          />
          <h3 style={styles.tag}>Headphones</h3>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    width: "180px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  },

  image: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    padding: "15px",
  },

  tag: {
    margin: "0",
    padding: "12px",
    backgroundColor: "#374151",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Features;