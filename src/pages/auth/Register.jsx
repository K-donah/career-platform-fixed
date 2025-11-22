import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) return setError("All fields are required");

    const res = await register({ name, email, password, role });
    if (!res.success) {
      setError(res.message || "Registration failed");
      return;
    }

    if (role === "admin") nav("/admin");
    else if (role === "institute") nav("/institute");
    else if (role === "student") nav("/student");
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
        top: "10%",
        left: "10%",
        width: "200px",
        height: "200px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "10%",
        width: "150px",
        height: "150px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite"
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
          maxWidth: "480px",
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
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            fontSize: "24px"
          }}>
            👤
          </div>
          <h2 style={{ 
            fontSize: "28px", 
            fontWeight: "800", 
            color: "#1a202c",
            marginBottom: "8px"
          }}>
            Create Account
          </h2>
          <p style={{ 
            color: "#718096", 
            fontSize: "14px",
            fontWeight: "500"
          }}>
            Join thousands of users building their future
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
              border: "1px solid #feb2b2"
            }}
          >
            {error}
          </div>
        )}

        {/* Form Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ 
              marginBottom: "8px", 
              fontWeight: "600", 
              color: "#2d3748",
              fontSize: "14px"
            }}>
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#ffffff"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ 
              marginBottom: "8px", 
              fontWeight: "600", 
              color: "#2d3748",
              fontSize: "14px"
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#ffffff"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ 
              marginBottom: "8px", 
              fontWeight: "600", 
              color: "#2d3748",
              fontSize: "14px"
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#ffffff"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ 
              marginBottom: "8px", 
              fontWeight: "600", 
              color: "#2d3748",
              fontSize: "14px"
            }}>
              I am a
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#ffffff",
                cursor: "pointer"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            >
              <option value="student">🎓 Student</option>
              <option value="institute">🏫 Institute</option>
              <option value="company">💼 Company</option>
              <option value="admin">⚙️ Admin</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: "18px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",
            marginTop: "16px"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(255, 107, 107, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(255, 107, 107, 0.4)";
          }}
        >
          Create Account →
        </button>

        <div style={{ 
          textAlign: "center", 
          fontSize: "14px", 
          color: "#718096", 
          marginTop: "24px",
          paddingTop: "24px",
          borderTop: "1px solid #e2e8f0"
        }}>
          Already have an account?{" "}
          <Link 
            to="/login" 
            style={{ 
              color: "#667eea", 
              fontWeight: "700",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.color = "#764ba2"}
            onMouseOut={(e) => e.target.style.color = "#667eea"}
          >
            Sign In
          </Link>
        </div>
      </form>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
}