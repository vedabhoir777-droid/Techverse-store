function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.heading}>
            Discover Premium
            <br />
            <span style={styles.highlight}>Technology</span>
          </h1>

          <p style={styles.description}>
            Shop premium laptops, smartphones, gaming devices and
            accessories from trusted brands. Experience modern
            technology with style, quality and trusted service.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primary}>
              Shop Now
            </button>

            <button style={styles.secondary}>
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {

  hero: {
    width: "100%",
    height: "92vh",

    backgroundImage:
      "url('https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb')",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    inset: 0,

    background:
      "linear-gradient(to right, rgba(0,0,0,.72), rgba(0,0,0,.18))",

    display: "flex",
    alignItems: "center",

    paddingLeft: "90px",
  },

  content: {
    maxWidth: "620px",
  },

  heading: {
    fontSize: "68px",
    fontWeight: "900",
    lineHeight: "1.1",
    color: "#ffffff",
    marginBottom: "25px",
  },

  highlight: {
    color: "#C28B36",
  },

  description: {
    color: "#E5E7EB",
    fontSize: "20px",
    lineHeight: "1.8",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
  },

  primary: {
    background: "#A16207",
    color: "#ffffff",
    border: "none",
    padding: "16px 40px",
    borderRadius: "35px",
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
  },

  secondary: {
    background: "transparent",
    color: "#ffffff",
    border: "2px solid white",
    padding: "16px 40px",
    borderRadius: "35px",
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
  },
};

export default Hero;