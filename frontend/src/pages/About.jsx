import React from 'react';
import { Users, Target, Rocket, Heart, Sparkles, MapPin, Phone, Mail, Clock, Quote, Eye, Shield, Handshake, Cpu } from 'lucide-react';

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

      {/* Who We Are Section */}
      <div className="glass-panel" style={{ 
        padding: '3rem', 
        marginBottom: '3rem',
        borderRadius: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Cpu size={32} style={{ color: 'var(--primary)' }} />
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--text)',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Who We Are?
          </h2>
        </div>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginLeft: '3rem'
        }}>
          NITTLABS is a consortium where leaders and ideas converge to innovate and build NexGen products and 
          scalable IT platforms that solve real-world problems.
        </p>
      </div>

      {/* Vision Section */}
      <div className="glass-panel" style={{ 
        padding: '3rem', 
        marginBottom: '3rem',
        borderRadius: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Eye size={32} style={{ color: 'var(--primary)' }} />
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--text)',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Vision
          </h2>
        </div>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginLeft: '3rem'
        }}>
          To empower every student to be job-ready through guided career planning, structured upskilling, and industry alignment.
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
            Mission
          </h2>
        </div>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginLeft: '3rem'
        }}>
          To create India's most trusted, AI-enabled collaborative career ecosystem, aligning education, employability, and enterprise growth.
        </p>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--text)',
          background: 'var(--gradient-main)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Our Core Values
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Handshake size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Honesty
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Commitment to transparency and truthfulness in all interactions, building trust and credibility.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Shield size={40} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Integrity
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Adherence to the highest ethical standards, ensuring fairness and accountability in all decisions.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Users size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Humanity
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Emphasis on diversity, collaboration, and respect, valuing each individual's unique contributions.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
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
            What We Do?
          </h2>
        </div>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginLeft: '3rem'
        }}>
          SaarthiX, the flagship subscription based NexGen, AI powered Digital Platform of NITTLABS, aims to assist 
          students to be job ready, empowering them and institutes for placements, internships and helping industries 
          to hire role ready talent through series of services thereby bridging the gap between academia and industry verticals.
        </p>
      </div>

      {/* The Leadership Behind Us */}
      <div className="glass-panel" style={{ 
        padding: '3rem', 
        marginBottom: '3rem',
        borderRadius: '1.5rem'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--text)',
          background: 'var(--gradient-main)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          The Leadership Behind Us
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--primary)',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)'
            }}>
              <img 
                src="/Founder-CEO.png" 
                alt="Founder & CEO" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div style={{
            padding: '2rem',
            background: 'rgba(99, 102, 241, 0.1)',
            borderRadius: '1rem',
            border: '1px solid var(--glass-border)'
          }}>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              textAlign: 'justify'
            }}>
              Arvind is a seasoned Business & Delivery leader with over three decades of dedication in the IT industry. 
              His entrepreneurial mindset has driven transformative change, from establishing businesses to orchestrating 
              transitions and transformations. Arvind's leadership extends to nurturing strong leaders, fostering motivation, 
              and championing organizational change with strategic vision.
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginTop: '1rem',
              textAlign: 'justify'
            }}>
              Throughout his career, Arvind has led global engagements, modernizing organizations through cloud enablement, 
              automation, and IT transformation programs. His expertise in organizational design and strategic vision has 
              reshaped paradigms, driving efficiencies and value.
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginTop: '1rem',
              textAlign: 'justify'
            }}>
              His global impact transcends borders, seamlessly managing diverse workforces and global delivery centers. 
              His focus on continuous training ensures teams remain adept with NexGen and Digital Skills, navigating the 
              IT landscape with agility.
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              marginTop: '1rem',
              textAlign: 'justify'
            }}>
              Arvind envisions NATTLABS as a trailblazer in learning and development, empowering individuals and organizations 
              globally. His vision aims to redefine talent development standards, fostering innovation and excellence across 
              industries. With a focus on continuous learning, Arvind aims to equip individuals from all backgrounds with 
              the tools they need to succeed in a dynamic landscape. His vision for NATTLABS is inclusive, empowering, and 
              transformative, shaping a future where talent knows no boundaries.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--text)',
          background: 'var(--gradient-main)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Testimonials
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.7 }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I've witnessed how this platform transforms potential into performance. With the right mix of mentorship, 
              structured training, and AI-driven insights, students become career-ready, institutes achieve greater placement 
              success, and industries gain skilled professionals. It's more than a program—it's a bridge to the future of talent.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                flexShrink: 0
              }}>
                <img 
                  src="/Raja C.jpg" 
                  alt="Raja C" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Raja C</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Project Director</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.7 }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I've seen how structured planning, expert guidance, and AI-powered tools accelerate outcomes. This platform 
              doesn't just prepare candidates—it ensures institutes and industries get talent that is job-ready from Day 1. 
              It's rewarding to lead projects that truly create measurable impact.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                flexShrink: 0
              }}>
                <img 
                  src="/khushi.jpg" 
                  alt="Khushi Gupta" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Khushi Gupta</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Project Director</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.7 }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I value how this platform bridges learning with real-world application. The blend of mentoring, AI-powered 
              upskilling, and hands-on projects helped me sharpen my skills and stay industry-ready. It's not just training—it's 
              building confidence to code, create, and contribute from day one.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                flexShrink: 0
              }}>
                <img 
                  src="/Priyanshu.jpg" 
                  alt="Priyanshu Pandey" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Priyanshu Pandey</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Product Engineer</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.7 }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I've experienced how this platform empowers learners to master both breadth and depth of development. With 
              mentorship, AI-driven insights, and real-world projects, it transforms students into versatile professionals ready.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                flexShrink: 0
              }}>
                <img 
                  src="/Pratistha.jpg" 
                  alt="Pratistha Singh" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Pratistha Singh</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Product Engineer</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.7 }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I've seen how this platform turns learning into real innovation. With guided mentorship, AI-powered tools, 
              and hands-on projects, it equips learners to build apps that are not just functional but future-ready.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                flexShrink: 0
              }}>
                <img 
                  src="/Hariom.jpg" 
                  alt="Hariom" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Hariom</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Product Engineer</p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <Quote size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.7 }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I've experienced how this platform bridges creativity with real-world impact. With expert guidance, AI-driven 
              insights, and hands-on projects, it helps learners craft user experiences that are both innovative and 
              industry-ready from day one.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                flexShrink: 0
              }}>
                <img 
                  src="/Meenakshi .jpg" 
                  alt="Meenakshi Tripathi" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Meenakshi Tripathi</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Product Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Address Section */}
      <div className="glass-panel" style={{ 
        padding: '3rem', 
        borderRadius: '1.5rem',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--text)',
          background: 'var(--gradient-main)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Get In Touch
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin size={24} style={{ color: 'var(--primary)' }} />
              <div>
                <h3 style={{ color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Address</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  1705, 19th Main Road, Sector 2,<br />
                  HSR Layout, Bengaluru, 560102,<br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Phone size={24} style={{ color: 'var(--primary)', marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  +91 7899257840
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Mail size={24} style={{ color: 'var(--primary)', marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  support@nattlabs.com
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Clock size={24} style={{ color: 'var(--primary)', marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Business Hours</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
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




