import React, { useState } from "react";
import { supabase } from "../supabase";

export default function Signup({ onSwitch, onSignupSuccess }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignup = async () => {
const { error } = await supabase.auth.signUp({
email,
password,
});


if (error) {
  alert(error.message);
} else {
  alert("Account Created Successfully");
  if (onSignupSuccess) onSignupSuccess();
}


};

return ( <div style={styles.bg}> <div style={styles.card}>


    {/* TITLE */}
    <h2 style={styles.logo}>TechVerse Store</h2>

<h1 style={styles.title}>
  Create Account <span style={styles.emoji}>🚀</span>
</h1>

<p style={styles.subtitle}>
  Join TechVerse and start shopping
</p>

    {/* EMAIL */}
    <p style={styles.label}>Email</p>
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={styles.input}
    />

    {/* PASSWORD */}
    <p style={styles.label}>Password</p>
    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={styles.input}
    />

    {/* SIGN UP BUTTON */}
    <button onClick={handleSignup} style={styles.button}>
      Sign Up
    </button>

    {/* OR LINE */}
    <div style={styles.orContainer}>
      <div style={styles.line}></div>
      <span style={styles.orText}>OR</span>
      <div style={styles.line}></div>
    </div>

    {/* LOGIN LINK */}
    <p style={styles.footer}>
      Already have an account?{" "}
      <span style={styles.link} onClick={onSwitch}>
        Login
      </span>
    </p>

  </div>
</div>

);
}

const styles = {
  logo: {
  fontSize: "18px",
  fontWeight: "800",
  color: "#2563EB",
  textAlign: "center",
  margin: "0 0 16px 0",
  letterSpacing: "1px",
},
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
     background: "linear-gradient(135deg,#FFF8FB,#FDECF4,#FBE7F1)",
  },

  card: {
  width: "420px",
  padding: "45px 38px",
  borderRadius: "22px",
  background: "#FFFFFF",
  border: "1.5px solid #D6E4FF",
  boxShadow: "0 18px 45px rgba(37,99,235,0.12)",
  textAlign: "center",
},
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "6px",
  },

  emoji: {
    marginLeft: "6px",
    display: "inline-block",
  },
  
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "20px",
  },
  
  label: {
    textAlign: "left",
    fontSize: "13px",
    fontWeight: "600",
    marginTop: "12px",
    marginBottom: "6px",
    color: "#374151",
  },
  
  input: {
  width: "100%",
  padding: "13px",
  borderRadius: "10px",
  border: "1px solid #D6E4FF",
  background: "#F8FAFC",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
},
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "18px",
    borderRadius: "12px",
    border: "1px solid #4F46E5",
    background: "linear-gradient(90deg,#2563EB,#7C3AED)",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(79,70,229,0.25)",
  },
  orContainer: {
    display: "flex",
    alignItems: "center",
    margin: "18px 0",
  },
  line: {
    flex: 1,
    height: "1px",
    background: "#e5e7eb",
  },
  orText: {
    margin: "0 10px",
    fontSize: "12px",
    color: "#6b7280",
  },
  footer: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#374151",
  },
  link: {
    color:"#2563EB",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
