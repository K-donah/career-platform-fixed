import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CompanyDashboard() {
  const { user } = useAuth();
  
  const links = [
    { to: "/company/post-job", label: "Post Job", icon: "📝", color: "#4facfe" },
    { to: "/company/applicants", label: "View Applicants", icon: "👥", color: "#ff6b6b" },
    { to: "/company/profile", label: "Update Profile", icon: "🏢", color: "#4ade80" },
    { to: "/company/settings", label: "Settings", icon: "⚙️", color: "#a78bfa" },
  ];

  const stats = [
    { label: "Active Jobs", value: "12", icon: "💼", color: "#4facfe" },
    { label: "New Applicants", value: "45", icon: "📨", color: "#ff6b6b" },
    { label: "Interviews", value: "8", icon: "🤝", color: "#4ade80" },
    { label: "Hired", value: "15", icon: "🎉", color: "#a78bfa" }
  ];

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
        <Sidebar links={links} />

        <main
          style={{
            flex: 1,
            padding: "32px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Welcome Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "32px",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              color: "white",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: "150px",
              height: "150px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "50%"
            }}></div>
            
            <h1 style={{ 
              fontSize: "32px", 
              fontWeight: "800", 
              marginBottom: "12px",
              position: "relative",
              zIndex: "2"
            }}>
              Welcome back, {user?.name}! 🚀
            </h1>
            <p style={{ 
              fontSize: "18px", 
              opacity: "0.9",
              fontWeight: "500",
              position: "relative",
              zIndex: "2"
            }}>
              Manage your job postings, filter qualified applicants, and grow your team with top talent.
            </p>
          </div>

          {/* Stats Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "16px"
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  border: "1px solid #e2e8f0",
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
                  marginBottom: "12px"
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

          {/* Main Feature Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "white",
                  padding: "24px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: `linear-gradient(135deg, ${link.color}20, ${link.color}40)`,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  border: `2px solid ${link.color}30`
                }}>
                  {link.icon}
                </div>
                <div style={{ flex: "1" }}>
                  <h3 style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "4px"
                  }}>
                    {link.label}
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    color: "#64748b",
                    fontWeight: "500"
                  }}>
                    {link.label === "Post Job" && "Create new job postings with qualifications and requirements"}
                    {link.label === "View Applicants" && "View automatically filtered qualified applicants"}
                    {link.label === "Update Profile" && "Update company information and hiring preferences"}
                    {link.label === "Settings" && "Manage security and notification preferences"}
                  </p>
                </div>
                <div style={{
                  fontSize: "20px",
                  color: link.color,
                  fontWeight: "700",
                  opacity: "0.7"
                }}>
                  →
                </div>
                
                {/* Hover effect overlay */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  background: `linear-gradient(135deg, ${link.color}10, ${link.color}05)`,
                  opacity: "0",
                  transition: "opacity 0.3s ease"
                }}></div>
              </Link>
            ))}
          </div>

          {/* Quick Actions Footer */}
          <div style={{
            background: "rgba(255,255,255,0.8)",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            marginTop: "auto",
            border: "1px solid #e2e8f0"
          }}>
            <p style={{
              fontSize: "14px",
              color: "#64748b",
              fontWeight: "500",
              margin: "0"
            }}>
              💼 Company Management Portal • Last login: {new Date().toLocaleDateString()} • 
              Need assistance? Contact our support team
            </p>
          </div>
        </main>
      </div>
    </>
  );
}