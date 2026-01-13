import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Briefcase, Building, GraduationCap, AlertCircle, ArrowRight,
  Users, Database, Cpu, Trophy, Mic2, Handshake, BookOpen,
  Map, UserCircle, Compass, FileText, MonitorPlay, Rocket,
  BrainCircuit, CheckCircle2
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [interestedCount, setInterestedCount] = useState(0);
  const [stars, setStars] = useState([]);
  const [flyingStars, setFlyingStars] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get('/api/beta/count');
        setInterestedCount(res.data);
      } catch (err) {
        console.error("Failed to fetch count", err);
      }
    };

    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  // Generate static stars (reduced by 25%: 150 -> 112)
  useEffect(() => {
    const staticStars = Array.from({ length: 112 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100, // Stars are now positioned relative to star-field container which starts below navbar
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(staticStars);
  }, []);

  // Generate flying stars
  useEffect(() => {
    const generateFlyingStar = () => {
      const xOffset = (Math.random() - 0.5) * 200; // Random horizontal movement
      return {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
        xOffset: xOffset
      };
    };

    // Create initial flying stars
    const initialFlyingStars = Array.from({ length: 20 }, () => generateFlyingStar());
    setFlyingStars(initialFlyingStars);

    // Add new flying stars periodically
    const interval = setInterval(() => {
      setFlyingStars(prev => {
        const newStar = generateFlyingStar();
        return [...prev.slice(-19), newStar];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const userGroups = [
    {
      name: 'Student',
      icon: <GraduationCap size={32} />,
      color: '#6366f1',
      problems: [
        'Unclear career paths and lack of guidance',
        'Difficulty in Creating professional resumes and profiles',
        'Clarity and Alignment to Job Opportunities',
        'Insufficient interview preparation',
        'Gap between academic learning and Skills requirements',
        'Lack of personalized career counseling'
      ],
      services: [
        { title: 'Job Blueprint', icon: <Map size={24} />, gist: 'Explore career paths based on your education' },
        { title: 'Hire Me Profile', icon: <UserCircle size={24} />, gist: 'Create a professional digital portfolio' },
        { title: 'Career Guidance', icon: <Compass size={24} />, gist: 'Get personalized guidance from experts' },
        { title: 'Psychometric Test', icon: <BrainCircuit size={24} />, gist: 'Discover your personality and aptitudes' },
        { title: 'Enhance Your Resume', icon: <FileText size={24} />, gist: 'Build ATS-friendly professional resumes' },
        { title: 'Interview Preparation', icon: <MonitorPlay size={24} />, gist: 'Practice with AI-driven mock interviews' },
        { title: 'Courses', icon: <BookOpen size={24} />, gist: 'Access industry-relevant courses and certifications' },
        { title: 'Apply Jobs/Internships', icon: <Briefcase size={24} />, gist: 'Browse and apply for exclusive opportunities' },
        { title: 'Role-ready Training', icon: <Rocket size={24} />, gist: 'Intensive training for specific job roles' }
      ]
    },
    {
      name: 'Institute',
      icon: <Building size={32} />,
      color: '#ec4899',
      problems: [
        'Low student placement rates and limited industry connections',
        'Outdated curriculum not aligned with market requirements',
        'Lack of industry-relevant training programs',
        'Difficulty organizing expert sessions and workshops',
        'Limited access to quality internship opportunities'
      ],
      services: [
        { title: 'Internship & Placement Access', icon: <Briefcase size={24} />, gist: 'Connect students with leading companies for placements' },
        { title: 'Trainings', icon: <BookOpen size={24} />, gist: 'Industry-relevant training programs for students' },
        { title: 'Workshops', icon: <MonitorPlay size={24} />, gist: 'Interactive workshops on cutting-edge technologies' },
        { title: 'Expert Sessions', icon: <Mic2 size={24} />, gist: 'Bring industry leaders to your campus' },
        { title: 'Collaboration', icon: <Handshake size={24} />, gist: 'Partner for research and curriculum development' },
        { title: 'Student Training (On Demand)', icon: <FileText size={24} />, gist: 'Customized training based on institutional needs' },
        { title: 'Student Training (Role-Ready)', icon: <Rocket size={24} />, gist: 'Intensive role-specific training with placement support' }
      ]
    },
    {
      name: 'Industry',
      icon: <Briefcase size={32} />,
      color: '#10b981',
      problems: [
        'Difficulty finding qualified candidates with verified skills',
        'Time-consuming manual screening and interview processes',
        'Limited access to fresh talent from universities',
        'Challenges in organizing effective hiring drives',
        'Lack of efficient and effective technical assessment tools'
      ],
      services: [
        { title: 'Post Jobs / Internship', icon: <Briefcase size={24} />, gist: 'Publish job openings with AI-powered candidate matching' },
        { title: 'Database Access', icon: <Database size={24} />, gist: 'Access pre-screened candidates with verified skills' },
        { title: 'Technical Interview', icon: <Cpu size={24} />, gist: 'AI-powered technical assessment and screening' },
        { title: 'Post Hackathons', icon: <Trophy size={24} />, gist: 'Host hackathons to discover top talent' },
        { title: 'Access To Universities', icon: <Building size={24} />, gist: 'Conduct campus hiring drives with logistics support' },
        { title: 'Expert Session', icon: <Mic2 size={24} />, gist: 'Share expertise and build brand presence' }
      ]
    }
  ];

  const handleShowServices = () => {
    navigate('/select-role');
  };

  return (
    <>
      {/* Star Field Background */}
      <div className="star-field">
        {/* Static twinkling stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
        {/* Flying stars */}
        {flyingStars.map(star => (
          <div
            key={star.id}
            className="flying-star"
            style={{
              left: `${star.left}%`,
              bottom: '-10px',
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              animationName: star.xOffset > 0 ? 'float-right' : star.xOffset < 0 ? 'float-left' : 'float'
            }}
          />
        ))}
      </div>
      
      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      {/* Total Interested Users - Top Right */}
      <div className="glass-panel" style={{ 
        padding: '0.8rem 1.5rem', 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '1rem',
        position: 'absolute',
        top: '2rem',
        right: '2rem'
      }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Visitors count:</span>
        <span className="title-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {interestedCount.toLocaleString()}
        </span>
      </div>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '5rem', marginTop: '2rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          marginBottom: '1.5rem', 
          letterSpacing: '-2px',
          color: '#ffffff',
          fontWeight: '700',
          textShadow: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)'
        }}>
          Welcome to SaarthiX
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
          Empowering Industries, Institutes, and Students with comprehensive solutions for career growth, talent acquisition, and institutional excellence.
        </p>

        <button
          onClick={handleShowServices}
          style={{ 
            fontSize: '1.1rem', 
            padding: '1rem 2.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
            background: 'transparent',
            color: '#ffffff',
            border: '2px solid rgba(99, 102, 241, 0.6)',
            borderRadius: '50px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 1)';
            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3)';
            const arrow = e.currentTarget.querySelector('svg');
            if (arrow) {
              arrow.style.transform = 'translateX(8px) rotate(-45deg)';
              arrow.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            const arrow = e.currentTarget.querySelector('svg');
            if (arrow) {
              arrow.style.transform = 'translateX(0) rotate(0deg)';
            }
          }}
        >
          <span>Show Services</span>
          <ArrowRight size={18} style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
        </button>
      </div>

      {/* Problems Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: 'white'
        }}>
          <span className="title-gradient">Challenges</span> We Solve
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {userGroups.map((group, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  padding: '0.8rem',
                  background: `rgba(${group.color === '#10b981' ? '16, 185, 129' : group.color === '#ec4899' ? '236, 72, 153' : '99, 102, 241'}, 0.1)`,
                  borderRadius: '12px',
                  color: group.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {group.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{group.name}</h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {group.problems.map((problem, i) => (
                  <li key={i} style={{
                    marginBottom: '1rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'start',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    <AlertCircle 
                      size={18} 
                      color={group.color} 
                      style={{ marginRight: '0.8rem', marginTop: '2px', flexShrink: 0 }} 
                    />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: 'white'
        }}>
          Our <span className="title-gradient">Services</span>
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          Comprehensive solutions tailored for each user group. Click "Show Services" to explore detailed offerings and choose your path.
        </p>

        {userGroups.map((group, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: '4rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: `2px solid ${group.color}40`
            }}>
              <div style={{
                padding: '0.6rem',
                background: `rgba(${group.color === '#10b981' ? '16, 185, 129' : group.color === '#ec4899' ? '236, 72, 153' : '99, 102, 241'}, 0.1)`,
                borderRadius: '10px',
                color: group.color
              }}>
                {group.icon}
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'white' }}>{group.name} Services</h3>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem'
            }}>
              {group.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="glass-panel" style={{
                  padding: '1.5rem',
                  transition: 'transform 0.3s ease',
                  cursor: 'default',
                  minWidth: '280px',
                  maxWidth: '320px',
                  flex: '0 1 auto'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = group.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      padding: '0.6rem',
                      background: `rgba(${group.color === '#10b981' ? '16, 185, 129' : group.color === '#ec4899' ? '236, 72, 153' : '99, 102, 241'}, 0.1)`,
                      borderRadius: '8px',
                      color: group.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {service.icon}
                    </div>
                    <h4 style={{ fontSize: '1.1rem', color: 'white', fontWeight: '600' }}>
                      {service.title}
                    </h4>
                  </div>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {service.gist}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div style={{
        textAlign: 'center',
        padding: '3rem',
        background: 'var(--gradient-main)',
        borderRadius: '1.5rem',
        marginBottom: '3rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Choose your user type and explore our comprehensive services tailored for you.
        </p>
        <button
          onClick={handleShowServices}
          style={{
            background: 'white',
            color: 'var(--primary)',
            border: 'none',
            padding: '1rem 3rem',
            borderRadius: '0.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Show Services <ArrowRight size={20} />
        </button>
      </div>
      </div>
    </>
  );
};

export default LandingPage;

