import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const sections = [
    { 
      title: "Manage Institutions", 
      path: "/admin/institutions", 
      icon: "🏫", 
      color: "#4facfe",
      description: "Manage educational institutions and their profiles"
    },
    { 
      title: "Manage Faculties", 
      path: "/admin/faculties", 
      icon: "🏛️", 
      color: "#ff6b6b",
      description: "Oversee faculty departments and academic structures"
    },
    { 
      title: "Manage Courses", 
      path: "/admin/courses", 
      icon: "📚", 
      color: "#4ade80",
      description: "Monitor and manage course offerings across institutions"
    },
    { 
      title: "Manage Companies", 
      path: "/admin/companies", 
      icon: "💼", 
      color: "#a78bfa",
      description: "Manage registered companies and their job postings"
    },
    { 
      title: "Reports & Analytics", 
      path: "/admin/reports", 
      icon: "📊", 
      color: "#f59e0b",
      description: "View system analytics and generate reports"
    },
    { 
      title: "Publish Admissions", 
      path: "/admin/admissions", 
      icon: "🎓", 
      color: "#06b6d4",
      description: "Oversee admission processes and results"
    },
    { 
      title: "Monitor Registered Users", 
      path: "/admin/users", 
      icon: "👥", 
      color: "#ec4899",
      description: "Monitor user activity and manage accounts"
    },
  ];

  const stats = [
    { label: "Total Institutions", value: "15", icon: "🏫", color: "#4facfe" },
    { label: "Active Courses", value: "245", icon: "📚", color: "#ff6b6b" },
    { label: "Registered Companies", value: "42", icon: "💼", color: "#4ade80" },
    { label: "System Users", value: "1,234", icon: "👤", color: "#a78bfa" }
  ];

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "32px",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          fontFamily: "'Inter', 'Segoe UI', sans-serif"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
              ⚙️
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
              Admin Dashboard
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              System administration and management portal for Career Path Lesotho
            </p>
          </div>

          {/* Stats Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "32px"
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                  color: stat.color
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: stat.color,
                  marginBottom: "8px"
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#64748b",
                  fontWeight: "600"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Management Sections Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "32px"
            }}
          >
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(20px)",
                    padding: "28px",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Background Accent */}
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: `linear-gradient(135deg, ${section.color}, ${section.color}80)`
                  }}></div>

                  {/* Section Content */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      border: `2px solid ${section.color}30`,
                      flexShrink: "0"
                    }}>
                      {section.icon}
                    </div>
                    <div style={{ flex: "1" }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#1e293b",
                          marginBottom: "8px",
                          lineHeight: "1.3"
                        }}
                      >
                        {section.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#64748b",
                          fontWeight: "500",
                          lineHeight: "1.5",
                          margin: "0"
                        }}
                      >
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto",
                    paddingTop: "16px",
                    borderTop: "1px solid #e2e8f0"
                  }}>
                    <span style={{
                      fontSize: "14px",
                      color: section.color,
                      fontWeight: "600"
                    }}>
                      Manage Section
                    </span>
                    <div style={{
                      width: "32px",
                      height: "32px",
                      background: `linear-gradient(135deg, ${section.color}, ${section.color}80)`,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      color: "white",
                      fontWeight: "700",
                      transition: "all 0.3s ease"
                    }}>
                      →
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: `linear-gradient(135deg, ${section.color}08, ${section.color}04)`,
                    opacity: "0",
                    transition: "opacity 0.3s ease"
                  }}></div>
                </div>
              </Link>
            ))}
          </div>

          {/* System Status Footer */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            textAlign: "center"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "8px"
            }}>
              <div style={{
                width: "12px",
                height: "12px",
                background: "#10b981",
                borderRadius: "50%",
                animation: "pulse 2s infinite"
              }}></div>
              <p style={{ 
                fontSize: "14px", 
                color: "#64748b",
                fontWeight: "600",
                margin: "0"
              }}>
                System Status: <span style={{ color: "#10b981" }}>All Systems Operational</span>
              </p>
            </div>
            <p style={{ 
              fontSize: "12px", 
              color: "#94a3b8",
              fontWeight: "500",
              margin: "0"
            }}>
              Last updated: {new Date().toLocaleDateString()} • Version 1.0.0
            </p>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}
        </style>
      </main>
    </>
  );
}