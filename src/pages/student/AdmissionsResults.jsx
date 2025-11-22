// src/pages/student/AdmissionsResults.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import { useAppData } from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";

export default function AdmissionsResults() {
  const { applications } = useAppData();
  const { user } = useAuth();

  const studentApps = applications.filter(a => a.studentId === user.id.toString());

  const getStatusConfig = (status) => {
    switch (status) {
      case "admitted":
        return { color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)", icon: "✅", label: "Admitted" };
      case "rejected":
        return { color: "#ef4444", bgColor: "rgba(239, 68, 68, 0.1)", icon: "❌", label: "Rejected" };
      default:
        return { color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)", icon: "⏳", label: "Pending" };
    }
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
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
              🎓
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                marginBottom: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Admissions Results
            </h2>
            <p style={{ 
              fontSize: "16px", 
              color: "#64748b",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Track your course applications and admission status
            </p>
          </div>

          {/* Stats Overview */}
          {studentApps.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "32px"
              }}
            >
              {[
                { 
                  status: "pending", 
                  count: studentApps.filter(a => a.status === "pending").length,
                  icon: "⏳",
                  color: "#f59e0b"
                },
                { 
                  status: "admitted", 
                  count: studentApps.filter(a => a.status === "admitted").length,
                  icon: "✅",
                  color: "#10b981"
                },
                { 
                  status: "rejected", 
                  count: studentApps.filter(a => a.status === "rejected").length,
                  icon: "❌",
                  color: "#ef4444"
                },
                { 
                  status: "total", 
                  count: studentApps.length,
                  icon: "📊",
                  color: "#4facfe"
                }
              ].map((stat, index) => (
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
                    {stat.count}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "#64748b",
                    fontWeight: "600",
                    textTransform: "capitalize"
                  }}>
                    {stat.status} Applications
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Applications List */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              overflow: "hidden"
            }}
          >
            {studentApps.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px 32px",
                color: "#64748b"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.5" }}>📭</div>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#1e293b",
                  marginBottom: "12px"
                }}>
                  No Applications Yet
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "#64748b",
                  fontWeight: "500"
                }}>
                  Start by applying to courses to see your admission results here
                </p>
              </div>
            ) : (
              <div style={{ padding: "8px" }}>
                {studentApps.map((app, index) => {
                  const statusConfig = getStatusConfig(app.status);
                  return (
                    <div
                      key={app.id}
                      style={{
                        background: "white",
                        padding: "24px",
                        borderRadius: "16px",
                        margin: "8px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                      }}
                    >
                      {/* Status Indicator */}
                      <div style={{
                        width: "60px",
                        height: "60px",
                        background: statusConfig.bgColor,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        color: statusConfig.color,
                        border: `2px solid ${statusConfig.color}30`,
                        flexShrink: "0"
                      }}>
                        {statusConfig.icon}
                      </div>

                      {/* Application Details */}
                      <div style={{ flex: "1" }}>
                        <h3 style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1e293b",
                          marginBottom: "8px"
                        }}>
                          {app.courseTitle}
                        </h3>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          flexWrap: "wrap"
                        }}>
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "14px",
                            color: "#64748b",
                            fontWeight: "500"
                          }}>
                            <span>🏫</span>
                            {app.institutionName}
                          </div>
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "14px",
                            color: "#64748b",
                            fontWeight: "500"
                          }}>
                            <span>📅</span>
                            Applied {new Date(app.appliedDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div style={{
                        background: statusConfig.bgColor,
                        color: statusConfig.color,
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "700",
                        textTransform: "capitalize",
                        border: `1px solid ${statusConfig.color}30`,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        flexShrink: "0"
                      }}>
                        {statusConfig.icon}
                        {statusConfig.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Help Section */}
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
                Understanding Your Status
              </h3>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px"
            }}>
              {[
                { status: "⏳ Pending", desc: "Your application is under review" },
                { status: "✅ Admitted", desc: "Congratulations! You've been accepted" },
                { status: "❌ Rejected", desc: "Application was not successful" }
              ].map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "16px", flexShrink: "0" }}>{item.status.split(' ')[0]}</span>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#1e293b" }}>
                      {item.status.split(' ')[1]}
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "500" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}