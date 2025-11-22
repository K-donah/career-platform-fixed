// src/pages/student/Profile.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    if (!name.trim()) return alert("Name cannot be empty");
    setSaving(true);
    updateUser({ ...user, name: name.trim() });
    setSaving(false);
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />
      <main style={{ 
        padding: 32, 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', 'Segoe UI', sans-serif"
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Header Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "32px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              marginBottom: "32px",
              border: "1px solid rgba(255,255,255,0.3)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "150px",
              height: "150px",
              background: "rgba(79, 172, 254, 0.1)",
              borderRadius: "50%"
            }}></div>
            <div style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #4facfe, #00f2fe)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "32px",
              boxShadow: "0 8px 20px rgba(79, 172, 254, 0.3)"
            }}>
              👤
            </div>
            <h2 style={{ 
              fontSize: "32px", 
              fontWeight: 800,
              marginBottom: "12px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Profile Settings
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Manage your personal information and account details
            </p>
          </div>

          {/* Profile Form Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Background Decorations */}
            <div style={{
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: "100px",
              height: "100px",
              background: "rgba(255, 107, 107, 0.1)",
              borderRadius: "50%"
            }}></div>
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "80px",
              height: "80px",
              background: "rgba(74, 222, 128, 0.1)",
              borderRadius: "50%"
            }}></div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: "2" }}>
              {/* Name Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ 
                  fontWeight: "700", 
                  color: "#1e293b",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span>📝</span> Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    border: "2px solid #e2e8f0",
                    fontSize: "16px",
                    backgroundColor: "white",
                    transition: "all 0.3s ease",
                    fontWeight: "500"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#4facfe"}
                  onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ 
                  fontWeight: "700", 
                  color: "#1e293b",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span>📧</span> Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    border: "2px solid #e2e8f0",
                    fontSize: "16px",
                    backgroundColor: "#f8fafc",
                    color: "#64748b",
                    fontWeight: "500",
                    cursor: "not-allowed"
                  }}
                  placeholder="Your email address"
                />
                <p style={{ 
                  fontSize: "14px", 
                  color: "#94a3b8",
                  fontWeight: "500",
                  margin: "4px 0 0 0"
                }}>
                  Email cannot be changed for security reasons
                </p>
              </div>

              {/* Role Display */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ 
                  fontWeight: "700", 
                  color: "#1e293b",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span>🎯</span> Account Role
                </label>
                <div style={{
                  padding: "16px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  backgroundColor: "#f8fafc",
                  color: "#64748b",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span>{
                    user?.role === 'student' ? '🎓' :
                    user?.role === 'admin' ? '⚙️' :
                    user?.role === 'institute' ? '🏫' :
                    user?.role === 'company' ? '💼' : '👤'
                  }</span>
                  {user?.role}
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={saving || !name.trim()}
                style={{
                  padding: "18px 32px",
                  borderRadius: "16px",
                  background: saving || !name.trim() ? 
                    "linear-gradient(135deg, #cbd5e1, #94a3b8)" : 
                    "linear-gradient(135deg, #4facfe, #00f2fe)",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "16px",
                  border: "none",
                  cursor: saving || !name.trim() ? "not-allowed" : "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: saving || !name.trim() ? "none" : "0 4px 15px rgba(79, 172, 254, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "16px"
                }}
                onMouseOver={e => !saving && name.trim() && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseOut={e => !saving && name.trim() && (e.currentTarget.style.transform = "translateY(0)")}
              >
                {saving ? (
                  <>
                    <span>⏳</span>
                    Saving Changes...
                  </>
                ) : (
                  <>
                    <span>💾</span>
                    Save Profile
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Additional Info Card */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            marginTop: "24px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "white"
              }}>
                💡
              </div>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1e293b",
                margin: "0"
              }}>
                Profile Tips
              </h3>
            </div>
            <ul style={{
              color: "#64748b",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "1.6",
              margin: "0",
              paddingLeft: "20px"
            }}>
              <li>Keep your name updated for accurate application processing</li>
              <li>Contact support if you need to change your email address</li>
              <li>Your role determines available features and access levels</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}