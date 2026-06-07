function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#0f766e",
        color: "white",
        borderRadius: "15px",
        margin: "20px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Welcome to TechNova</h1>

      <p>Discover the latest gadgets at best prices</p>

      <button
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;