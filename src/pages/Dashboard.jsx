import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const dashboardCards = [
    { icon: "📚", title: "Courses", description: "Browse and apply to courses", color: "#4facfe" },
    { icon: "🏫", title: "Institutions", description: "View available institutions", color: "#ff6b6b" },
    { icon: "💼", title: "Jobs", description: "Find employment opportunities", color: "#4ade80" },
    { icon: "👤", title: "Profile", description: "Manage your account", color: "#a78bfa" }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "32px",
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Header Section */}
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          marginBottom: "32px",
          border: "1px solid rgba(255,255,255,0.3)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "300px",
            height: "300px",
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
          
          <h1 style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#1a202c",
            marginBottom: "12px",
            position: "relative",
            zIndex: "2"
          }}>
            Welcome back, {user?.name}! 🎉
          </h1>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            padding: "8px 20px",
            borderRadius: "50px",
            fontSize: "16px",
            fontWeight: "600",
            position: "relative",
            zIndex: "2"
          }}>
            👤 You are logged in as {user?.role}
          </div>
        </div>

        {/* Main Dashboard Card */}
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,255,255,0.3)",
          marginBottom: "32px"
        }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "16px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Your Dashboard
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#64748b",
            fontWeight: "500",
            lineHeight: "1.6",
            marginBottom: "40px"
          }}>
            This is your personalized dashboard. More features will be available based on your role and preferences.
          </p>

          {/* Dashboard Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {dashboardCards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "32px 24px",
                  borderRadius: "20px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                  textAlign: "center",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                {/* Background Accent */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "4px",
                  background: `linear-gradient(135deg, ${card.color}, ${card.color}80)`
                }}></div>
                
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: `linear-gradient(135deg, ${card.color}20, ${card.color}40)`,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "32px",
                  border: `2px solid ${card.color}30`
                }}>
                  {card.icon}
                </div>
                
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "12px"
                }}>
                  {card.title}
                </h3>
                
                <p style={{
                  fontSize: "14px",
                  color: "#64748b",
                  fontWeight: "500",
                  lineHeight: "1.5"
                }}>
                  {card.description}
                </p>
                
                {/* Hover Arrow */}
                <div style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "32px",
                  height: "32px",
                  background: `linear-gradient(135deg, ${card.color}, ${card.color}80)`,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "700",
                  transition: "all 0.3s ease",
                  opacity: "0",
                  transform: "translateX(10px)"
                }}>
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {[
            { label: "Active Applications", value: "5", trend: "+2" },
            { label: "Messages", value: "12", trend: "+3" },
            { label: "Notifications", value: "8", trend: "+1" },
            { label: "Saved Items", value: "15", trend: "+5" }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                padding: "24px",
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
              }}
            >
              <div style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#667eea",
                marginBottom: "8px"
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#64748b",
                fontWeight: "600",
                marginBottom: "8px"
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: "12px",
                color: "#4ade80",
                fontWeight: "700",
                background: "rgba(74, 222, 128, 0.1)",
                padding: "4px 8px",
                borderRadius: "6px",
                display: "inline-block"
              }}>
                {stat.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;