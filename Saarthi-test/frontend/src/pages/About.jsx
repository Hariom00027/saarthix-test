import React from 'react';
import { Users, Target, Rocket, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: 'calc(100vh - 100px)'
    }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="title-gradient" style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem', 
          letterSpacing: '-2px' 
        }}>
          About SaarthiX
        </h1>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.2rem', 
          maxWidth: '700px', 
          margin: '0 auto', 
          lineHeight: '1.6' 
        }}>
          Empowering students, institutes, and industry professionals with cutting-edge tools for career success.
        </p>
      </div>

      {/* Mission Section */}
      <div className="glass-panel" style={{ 
        padding: '3rem', 
        marginBottom: '3rem',
        borderRadius: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Target size={32} style={{ color: 'var(--primary)' }} />
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--text)',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Mission
          </h2>
        </div>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginLeft: '3rem'
        }}>
          At SaarthiX, we believe that every individual deserves access to the tools and resources needed to 
          build a successful career. Our mission is to bridge the gap between education and industry by providing 
          comprehensive solutions for students, educational institutes, and companies alike.
        </p>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--text)'
        }}>
          Our Core Values
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Users size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Empowerment
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We empower individuals with the knowledge and tools they need to achieve their career goals.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Rocket size={40} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Innovation
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We continuously innovate to provide cutting-edge solutions that stay ahead of industry trends.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Heart size={40} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Excellence
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We are committed to delivering excellence in every product and service we offer.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="glass-panel" style={{ 
        padding: '3rem', 
        borderRadius: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Sparkles size={32} style={{ color: 'var(--primary)' }} />
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--text)',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            What We Offer
          </h2>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginLeft: '3rem'
        }}>
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              For Students
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Career guidance, resume building, interview preparation, and job placement assistance.
            </p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              For Institutes
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Training programs, placement support, and comprehensive student development tools.
            </p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              For Industry
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Access to skilled talent, AI-powered interviews, and streamlined hiring processes.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem',
        background: 'var(--gradient-main)',
        borderRadius: '1.5rem',
        marginTop: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          color: 'white', 
          marginBottom: '1rem' 
        }}>
          Join Us on This Journey
        </h2>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.9)', 
          fontSize: '1.1rem', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Be part of a community that's transforming careers and shaping the future of education and employment.
        </p>
      </div>
    </div>
  );
};

export default About;

