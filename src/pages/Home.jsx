import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🎯</span>
            <span className="logo-text">CareerPathLS</span>
          </div>
          <div className="nav-links">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Launch Your Future</span>
          </div>
          <h1>
            <span className="gradient-text">Career Path</span>
            <br />
            <span className="highlight-text">Lesotho</span>
          </h1>
          <p className="hero-subtitle">
            Your ultimate platform for education and career growth in Lesotho. 
            Find institutions, explore programs, and build your future.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">
              <span className="btn-icon">✨</span>
              Start Your Journey
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/login" className="btn btn-outline">
              <span className="btn-icon">🔑</span>
              Existing Account
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Institutions</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Programs</div>
            </div>
            <div className="stat">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Help You Succeed</h2>
            <p className="section-subtitle">Everything you need to build your career in one place</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">🎯</span>
                </div>
                <div className="feature-number">01</div>
              </div>
              <h3>Discover Programs</h3>
              <p>Browse courses from various educational institutions throughout Lesotho</p>
              <div className="feature-footer">
                <span className="feature-link">Explore →</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">📝</span>
                </div>
                <div className="feature-number">02</div>
              </div>
              <h3>Streamlined Applications</h3>
              <p>Apply to multiple institutions through one simple platform</p>
              <div className="feature-footer">
                <span className="feature-link">Apply Now →</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">🌟</span>
                </div>
                <div className="feature-number">03</div>
              </div>
              <h3>Career Opportunities</h3>
              <p>Connect with potential employers after your education</p>
              <div className="feature-footer">
                <span className="feature-link">Find Jobs →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students building their future with Career Path Lesotho</p>
          <Link to="/register" className="btn btn-cta">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;