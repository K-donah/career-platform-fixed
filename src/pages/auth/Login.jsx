import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) return setError("All fields are required");
    const res = await login({ email, password });
    if (!res.success) {
      setError("Invalid credentials");
      return;
    }
    const role = res.user?.role;

    if (role === "admin") nav("/admin");
    else if (role === "institute") nav("/institute");
    else if (role === "student") nav("/student/dashboard");
    else if (role === "company") nav("/company");
    else nav("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: "20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "15%",
        width: "120px",
        height: "120px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "15%",
        width: "100px",
        height: "100px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        top: "40%",
        right: "25%",
        width: "80px",
        height: "80px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%",
        animation: "float 10s ease-in-out infinite"
      }}></div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          padding: "50px 40px",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          border: "1px solid rgba(255,255,255,0.3)",
          position: "relative",
          zIndex: "2"
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div style={{
            width: "70px",
            height: "70px",
            background: "linear-gradient(135deg, #4facfe, #00f2fe)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "28px",
            boxShadow: "0 8px 20px rgba(79, 172, 254, 0.3)"
          }}>
            🔐
          </div>
          <h2 style={{ 
            fontSize: "32px", 
            fontWeight: "800", 
            color: "#1a202c",
            marginBottom: "8px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Welcome Back
          </h2>
          <p style={{ 
            color: "#718096", 
            fontSize: "15px",
            fontWeight: "500"
          }}>
            Sign in to continue your journey
          </p>
        </div>

        {error && (
          <div
            style={{
              color: "#e53e3e",
              background: "#fed7d7",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "14px",
              textAlign: "center",
              fontWeight: "500",
              border: "1px solid #feb2b2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Form Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ 
              marginBottom: "8px", 
              fontWeight: "600", 
              color: "#2d3748",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span>📧</span> Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#ffffff",
                fontWeight: "500"
              }}
              onFocus={(e) => e.target.style.borderColor = "#4facfe"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ 
              marginBottom: "8px", 
              fontWeight: "600", 
              color: "#2d3748",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span>🔒</span> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#ffffff",
                fontWeight: "500"
              }}
              onFocus={(e) => e.target.style.borderColor = "#4facfe"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>
        </div>

        {/* Forgot Password Link */}
        <div style={{ textAlign: "right" }}>
          <Link 
            to="/forgot-password"
            style={{
              color: "#4facfe",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.color = "#667eea"}
            onMouseOut={(e) => e.target.style.color = "#4facfe"}
          >
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          style={{
            padding: "18px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #4facfe, #00f2fe)",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(79, 172, 254, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(79, 172, 254, 0.4)";
          }}
        >
          <span>🚀</span>
          Sign In
          <span>→</span>
        </button>

        <div style={{ 
          textAlign: "center", 
          fontSize: "14px", 
          color: "#718096", 
          marginTop: "24px",
          paddingTop: "24px",
          borderTop: "1px solid #e2e8f0"
        }}>
          Don't have an account?{" "}
          <Link 
            to="/register" 
            style={{ 
              color: "#4facfe", 
              fontWeight: "700",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.color = "#667eea"}
            onMouseOut={(e) => e.target.style.color = "#4facfe"}
          >
            Create Account
          </Link>
        </div>

        {/* Quick Role Demo Hint */}
        <div style={{
          background: "rgba(79, 172, 254, 0.1)",
          padding: "16px",
          borderRadius: "12px",
          textAlign: "center",
          marginTop: "16px"
        }}>
          <p style={{ 
            fontSize: "12px", 
            color: "#4a5568",
            fontWeight: "500",
            margin: "0"
          }}>
            💡 <strong>Demo:</strong> Use different role accounts to explore various dashboards
          </p>
        </div>
      </form>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
}