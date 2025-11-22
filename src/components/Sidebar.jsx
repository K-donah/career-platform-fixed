import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ links = [] }) {
  const location = useLocation();

  return (
    <aside
      style={{
        width: 280,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "32px 16px",
        minHeight: "100vh",
        boxSizing: "border-box",
        boxShadow: "4px 0 20px rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Decorations */}
      <div style={{
        position: "absolute",
        top: "-50px",
        right: "-50px",
        width: "150px",
        height: "150px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-80px",
        left: "-80px",
        width: "200px",
        height: "200px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%"
      }}></div>

      {/* Header */}
      <div style={{ 
        padding: "0 16px 24px 16px", 
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        marginBottom: "24px",
        position: "relative",
        zIndex: "2"
      }}>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: "800", 
          color: "white",
          marginBottom: "8px"
        }}>
          Navigation
        </h2>
        <p style={{ 
          fontSize: "14px", 
          color: "rgba(255,255,255,0.8)",
          fontWeight: "500"
        }}>
          Manage your account
        </p>
      </div>

      {/* Navigation Links */}
      <ul style={{ 
        listStyle: "none", 
        padding: 0, 
        margin: 0, 
        display: "flex", 
        flexDirection: "column", 
        gap: "12px",
        position: "relative",
        zIndex: "2"
      }}>
        {links.map((l) => {
          const isActive = location.pathname === l.to;

          return (
            <li key={l.to}>
              <Link
                to={l.to}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  fontWeight: "600",
                  color: isActive ? "#667eea" : "rgba(255,255,255,0.9)",
                  backgroundColor: isActive ? "white" : "transparent",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: isActive ? "none" : "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: isActive ? "none" : "blur(10px)",
                  boxShadow: isActive ? "0 8px 25px rgba(0,0,0,0.15)" : "none",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateX(0)";
                  }
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  opacity: isActive ? "1" : "0.8"
                }}>
                  {l.icon}
                </div>
                
                {/* Label */}
                <span style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  flex: "1"
                }}>
                  {l.label}
                </span>
                
                {/* Active Indicator */}
                {isActive && (
                  <div style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#667eea",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite"
                  }}></div>
                )}
                
                {/* Hover Arrow */}
                {!isActive && (
                  <div style={{
                    fontSize: "14px",
                    opacity: "0",
                    transform: "translateX(-10px)",
                    transition: "all 0.3s ease",
                    fontWeight: "700"
                  }}>
                    →
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "16px",
        right: "16px",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <p style={{ 
          fontSize: "12px", 
          color: "rgba(255,255,255,0.8)",
          fontWeight: "500",
          margin: "0",
          textAlign: "center"
        }}>
          🚀 Career Path Lesotho
        </p>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </aside>
  );
}