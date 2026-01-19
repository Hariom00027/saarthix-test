import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Map, UserCircle, Compass, FileText, MonitorPlay, BookOpen,
  BrainCircuit, Briefcase, Rocket, Sparkles, CheckCircle2,
  Users, Building, Mic2, Handshake, Database, Cpu, Trophy, Globe
} from 'lucide-react';

// --- Student Roadmap Component ---
const StudentRoadmap = () => {
  const steps = [
    { title: "Job Blueprint", icon: <Map size={20} />, number: "01", id: "job-blueprint" },
    { title: "Hire Me Profile", icon: <UserCircle size={20} />, number: "02", id: "hire-me-profile" },
    { title: "Career Guidance", icon: <Compass size={20} />, number: "03", id: "career-guidance" },
    { title: "Enhance Resume", icon: <FileText size={20} />, number: "04", id: "enhance-your-resume" },
    { title: "Interview Prep", icon: <MonitorPlay size={20} />, number: "05", id: "interview-preparation" },
    { title: "Courses", icon: <BookOpen size={20} />, number: "06", id: "courses" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div style={{ marginBottom: '5rem' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: 'white',
        textShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <span style={{ color: 'var(--primary)' }}>Start Your</span> Journey
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        position: 'relative'
      }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            cursor: 'pointer'
          }}
            onClick={() => handleScroll(step.id)}
            className="roadmap-step"
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="roadmap-line" style={{
                position: 'absolute',
                top: '25px',
                left: '60%',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, var(--primary) 0%, rgba(255,255,255,0.1) 100%)',
                zIndex: -1,
                display: window.innerWidth > 768 ? 'block' : 'none'
              }} />
            )}

            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: 'white',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              {step.icon}
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.2rem 0.8rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: 'var(--primary)',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Step {step.number}
            </div>
            <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              {step.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Institute Roadmap Component ---
const InstituteRoadmap = () => {
  const steps = [
    { title: "Placement Access", icon: <Briefcase size={20} />, number: "01", id: "internship-placement" },
    { title: "Trainings", icon: <BookOpen size={20} />, number: "02", id: "trainings" },
    { title: "Workshops", icon: <MonitorPlay size={20} />, number: "03", id: "workshops" },
    { title: "Expert Sessions", icon: <Mic2 size={20} />, number: "04", id: "expert-sessions" },
    { title: "Collaboration", icon: <Handshake size={20} />, number: "05", id: "collaboration" },
    { title: "Role-Ready", icon: <Rocket size={20} />, number: "06", id: "student-training-role-ready" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div style={{ marginBottom: '5rem' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: 'white',
        textShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <span style={{ color: 'var(--secondary)' }}>Establish</span> Excellence
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        position: 'relative'
      }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            cursor: 'pointer'
          }}
            onClick={() => handleScroll(step.id)}
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="roadmap-line" style={{
                position: 'absolute',
                top: '25px',
                left: '60%',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, var(--secondary) 0%, rgba(255,255,255,0.1) 100%)',
                zIndex: -1,
                display: window.innerWidth > 768 ? 'block' : 'none'
              }} />
            )}

            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: 'white',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = 'var(--secondary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              {step.icon}
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.2rem 0.8rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: 'var(--secondary)',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Step {step.number}
            </div>
            <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              {step.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Industry Roadmap Component ---
const IndustryRoadmap = () => {
  const steps = [
    { title: "Post Jobs", icon: <Briefcase size={20} />, number: "01", id: "post-jobs" },
    { title: "Database", icon: <Database size={20} />, number: "02", id: "database-access" },
    { title: "AI Assess", icon: <Cpu size={20} />, number: "03", id: "technical-interview" },
    { title: "Hackathons", icon: <Trophy size={20} />, number: "04", id: "post-hackathons" },
    { title: "Campus", icon: <Building size={20} />, number: "05", id: "access-to-universities" },
    { title: "Experts", icon: <Mic2 size={20} />, number: "06", id: "expert-session" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div style={{ marginBottom: '5rem' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: 'white',
        textShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <span style={{ color: '#10b981' }}>Hire</span> Smarter
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        position: 'relative'
      }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            cursor: 'pointer'
          }}
            onClick={() => handleScroll(step.id)}
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="roadmap-line" style={{
                position: 'absolute',
                top: '25px',
                left: '60%',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, #10b981 0%, rgba(255,255,255,0.1) 100%)',
                zIndex: -1,
                display: window.innerWidth > 768 ? 'block' : 'none'
              }} />
            )}

            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: 'white',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              {step.icon}
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.2rem 0.8rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              color: '#10b981',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Step {step.number}
            </div>
            <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#10b981'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              {step.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = ({ userRole, onOpenBeta }) => {
  const navigate = useNavigate();
  const [interestedCount, setInterestedCount] = useState(0);

  useEffect(() => {
    // If no role is selected, redirect to role selection
    if (!userRole) {
      const storedRole = localStorage.getItem('userRole');
      if (!storedRole) {
        navigate('/select-role');
        return;
      }
    }
  }, [userRole, navigate]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get('http://localhost:8081/api/beta/count');
        setInterestedCount(res.data);
      } catch (err) {
        console.error("Failed to fetch count", err);
      }
    };

    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const getServices = () => {
    const role = userRole || localStorage.getItem('userRole');
    switch (role) {
      case 'Industry':
        return [
          // 1. Post Jobs / Internship
          {
            id: 'post-jobs',
            title: 'Post Jobs / Internship',
            desc: 'Publish your job openings on our platform to reach a wide pool of qualified candidates. Specify your requirements and let our matching algorithm find the best fits for your positions.',
            icon: <Briefcase size={40} color="#60a5fa" />,
            flow: [
              { step: '1', title: 'Post', detail: 'Create a detailed job description.' },
              { step: '2', title: 'Match', detail: 'AI matches role with our talent pool.' },
              { step: '3', title: 'Hire', detail: 'Receive applications from top candidates.' }
            ],
            benefits: [
              'Targeted reach to qualified candidates.',
              'Automated skills matching.',
              'Streamlined application management.'
            ],
            keyPoints: ['AI Matching', 'Wide Reach', 'Verified Talent']
          },
          // 2. Database Access
          {
            id: 'database-access',
            title: 'Database Access',
            desc: 'Get access to our extensive database of pre-screened candidates with verified skills and qualifications. Search and filter based on your specific requirements and connect directly.',
            icon: <Database size={40} color="#a78bfa" />,
            flow: [
              { step: '1', title: 'Search', detail: 'Filter candidates by skills and score.' },
              { step: '2', title: 'View', detail: 'Access detailed candidate profiles.' },
              { step: '3', title: 'Connect', detail: 'Directly message potential hires.' }
            ],
            benefits: [
              'Immediate access to ready-to-work talent.',
              'Verified technical and soft skills.',
              'Reduce time-to-hire significantly.'
            ],
            keyPoints: ['Pre-Screened', 'Verified', 'Direct Access']
          },
          // 3. Technical Interview / Assessment
          {
            id: 'technical-interview',
            title: 'Technical Interview / Assessment',
            desc: 'Streamline your technical screening process with our AI-powered assessment tools. Evaluate candidates skills objectively and efficiently before the in-person interviews.',
            icon: <Cpu size={40} color="#34d399" />,
            flow: [
              { step: '1', title: 'Create', detail: 'Set up custom or standardized tests.' },
              { step: '2', title: 'Invite', detail: 'Send test links to candidates.' },
              { step: '3', title: 'Report', detail: 'Get detailed performance analytics.' }
            ],
            benefits: [
              'Unbiased, automated evaluation.',
              'Supports various coding languages.',
              'Detailed performance insights.'
            ],
            keyPoints: ['AI-Proctored', 'Code Analysis', 'Efficiency']
          },
          // 4. Post Hackathons
          {
            id: 'post-hackathons',
            title: 'Post Hackathons',
            desc: 'Host hackathons to identify top talent, solve real business challenges, and promote your brand among the tech community. We will help you organize and manage the entire event.',
            icon: <Trophy size={40} color="#f472b6" />,
            flow: [
              { step: '1', title: 'Launch', detail: 'Define challenge and launch event.' },
              { step: '2', title: 'Run', detail: 'Participants build solutions.' },
              { step: '3', title: 'Evaluate', detail: 'Judge submissions and find winners.' }
            ],
            benefits: [
              'Crowdsource innovative solutions.',
              'Identify exceptional problem solvers.',
              'Strong employer branding.'
            ],
            keyPoints: ['Innovation', 'Branding', 'Talent Discovery']
          },
          // 5. Access To Universities
          {
            id: 'access-to-universities',
            title: 'Access To Universities',
            desc: 'Conduct virtual or on-campus hiring drives at partner institutions. We will coordinate the logistics, pre-screen candidates, and ensure a smooth recruitment process.',
            icon: <Building size={40} color="#fbbf24" />,
            flow: [
              { step: '1', title: 'Select', detail: 'Choose target colleges/universities.' },
              { step: '2', title: 'Schedule', detail: 'Plan drive dates and format.' },
              { step: '3', title: 'Recruit', detail: 'Conduct drives and hire.' }
            ],
            benefits: [
              'Access to fresh campus talent.',
              'End-to-end logistics support.',
              'Volume hiring made easy.'
            ],
            keyPoints: ['Campus Hiring', 'Logistics Support', 'Fresh Talent']
          },
          // 6. Expert Session
          {
            id: 'expert-session',
            title: 'Expert Session',
            desc: 'Share your industry expertise with students and faculty through expert sessions. Build your brand presence and connect with potential future employees.',
            icon: <Mic2 size={40} color="#ef4444" />,
            flow: [
              { step: '1', title: 'Propose', detail: 'Submit a talk or workshop topic.' },
              { step: '2', title: 'Schedule', detail: 'Matched with interested institutes.' },
              { step: '3', title: 'Engage', detail: 'Deliver session and network.' }
            ],
            benefits: [
              'Thought leadership positioning.',
              'Meaningful student engagement.',
              'Long-term brand value.'
            ],
            keyPoints: ['Thought Leadership', 'Branding', 'Networking']
          }
        ];
      case 'Institute':
        return [
          // ... (Institute Data kept same)
          {
            id: 'internship-placement',
            title: 'Internship & Placement Access',
            desc: 'Connect your students with leading companies for internships and job placements. Gain access to our extensive network of industry partners looking for fresh talent.',
            icon: <Briefcase size={40} color="#60a5fa" />,
            flow: [
              { step: '1', title: 'Connect', detail: 'Join our network of premium recruiters.' },
              { step: '2', title: 'Import', detail: 'Sync your student database securely.' },
              { step: '3', title: 'Place', detail: 'Students get direct interview opportunities.' }
            ],
            benefits: [
              'Maximize student placement records.',
              'Access to paid internship opportunities.',
              'Real-time tracking of placement stats.'
            ],
            keyPoints: ['Premium Recruiters', 'Paid Internships', 'Placement Tracking']
          },
          {
            id: 'trainings',
            title: 'Trainings',
            desc: 'Offer industry-relevant training programs to your students. Our expert-led sessions cover technical skills, soft skills, and professional development topics.',
            icon: <BookOpen size={40} color="#a78bfa" />,
            flow: [
              { step: '1', title: 'Select', detail: 'Choose from technical or soft-skill modules.' },
              { step: '2', title: 'Schedule', detail: 'Book sessions fitting your academic calendar.' },
              { step: '3', title: 'Certify', detail: 'Students earn verifiable certificates.' }
            ],
            benefits: [
              'Curriculum aligned with market trends.',
              'Expert trainers from top companies.',
              'Comprehensive student performance reports.'
            ],
            keyPoints: ['Tech & Soft Skills', 'Expert-Led', 'Certifiable']
          },
          {
            id: 'workshops',
            title: 'Workshops',
            desc: 'Host interactive workshops on cutting-edge technologies and industry practices. Give your students hands-on experience with real-world projects and challenges.',
            icon: <MonitorPlay size={40} color="#34d399" />,
            flow: [
              { step: '1', title: 'Topic', detail: 'Choose a trending topic (e.g., GenAI, DevOps).' },
              { step: '2', title: 'Host', detail: 'Live interactive session with Q&A.' },
              { step: '3', title: 'Build', detail: 'Students build mini-projects during the workshop.' }
            ],
            benefits: [
              'Hands-on practical exposure.',
              'Engagement with modern tools.',
              'Immediate skill application.'
            ],
            keyPoints: ['Interactive', 'Project-Based', 'Cutting-Edge']
          },
          {
            id: 'expert-sessions',
            title: 'Expert Sessions',
            desc: 'Bring industry leaders to your campus (virtually or in-person) to share insights, trends, and career advice with your students. Inspire them with success stories.',
            icon: <Mic2 size={40} color="#f472b6" />,
            flow: [
              { step: '1', title: 'Invite', detail: 'Request speakers from specific domains.' },
              { step: '2', title: 'Host', detail: 'Facilitate a knowledge-sharing session.' },
              { step: '3', title: 'Inspire', detail: 'Q&A session for student mentorship.' }
            ],
            benefits: [
              'Industry exposure for students.',
              'Networking opportunities.',
              'Inspirational career guidance.'
            ],
            keyPoints: ['Guest Lectures', 'Industry Leaders', 'Mentorship']
          },
          {
            id: 'collaboration',
            title: 'Collaboration',
            desc: 'Partner with us for joint research projects, curriculum development, and industry-academia initiatives. Create meaningful connections that benefit your institution and students.',
            icon: <Handshake size={40} color="#fbbf24" />,
            flow: [
              { step: '1', title: 'Partner', detail: 'Sign MoU for long-term collaboration.' },
              { step: '2', title: 'Develop', detail: 'Co-create curriculum and research labs.' },
              { step: '3', title: 'Grow', detail: 'Enhance institutional ranking and brand.' }
            ],
            benefits: [
              'Enhanced institutional accreditation.',
              'Access to industry R&D.',
              'Faculty upskilling opportunities.'
            ],
            keyPoints: ['MoUs', 'Curriculum Design', 'Joint Research']
          },
          {
            id: 'student-training-on-demand',
            title: 'Student Training (On Demand)',
            desc: 'Request customized training programs based on your institution\'s specific needs. We\'ll design and deliver training that addresses your students\' skill gaps.',
            icon: <FileText size={40} color="#ef4444" />,
            flow: [
              { step: '1', title: 'Request', detail: 'Specify your unique requirements.' },
              { step: '2', title: 'Design', detail: 'We build a custom syllabus for you.' },
              { step: '3', title: 'Deliver', detail: 'Training delivered on your schedule.' }
            ],
            benefits: [
              'Highly relevant to your students needs.',
              'Flexible scheduling and duration.',
              'Targeted skill improvement.'
            ],
            keyPoints: ['Custom Syllabus', 'Flexible', 'Targeted']
          },
          {
            id: 'student-training-role-ready',
            title: 'Student Training (Role-Ready)',
            desc: 'Prepare your students for specific job roles with our intensive role-ready training programs. Equip them with the exact skills that employers are looking for.',
            icon: <Rocket size={40} color="#8b5cf6" />,
            flow: [
              { step: '1', title: 'Identify', detail: 'Select roles (e.g., Full Stack Dev).' },
              { step: '2', title: 'Train', detail: 'Intensive bootcamp-style training.' },
              { step: '3', title: 'Place', detail: 'Placement drive for certified students.' }
            ],
            benefits: [
              'High employability for students.',
              'Role-specific expertise.',
              'Direct placement support.'
            ],
            keyPoints: ['Bootcamp', 'Role-Specific', 'Placement Drive']
          }
        ];
      case 'Student':
        return [
          // ... (Student Data kept same)
          {
            id: 'job-blueprint',
            title: 'Job Blueprint',
            desc: 'Explore career opportunities based on your educational background. Discover industry requirements, skills needed, and certification roadmaps tailored to your course and specialization.',
            icon: <Map size={40} color="#60a5fa" />,
            flow: [
              { step: '1', title: 'Select Stream', detail: 'Choose your education stream (e.g., CS, Mechanical).' },
              { step: '2', title: 'View Paths', detail: 'See available career paths and roles.' },
              { step: '3', title: 'Get Roadmap', detail: 'Receive a personalized certification guide.' }
            ],
            benefits: [
              'Clear visibility of career options.',
              'Understanding of market requirements.',
              'Strategic certification planning.'
            ],
            keyPoints: ['Career Mapping', 'Skill Gap Analysis', 'Certification Guide']
          },
          {
            id: 'hire-me-profile',
            title: 'Hire Me Profile',
            desc: 'Create a professional profile that showcases your skills, experience, and achievements to potential employers. Stand out from the crowd with a personalized digital presence.',
            icon: <UserCircle size={40} color="#a78bfa" />,
            flow: [
              { step: '1', title: 'Build Profile', detail: 'Add education, skills, and projects.' },
              { step: '2', title: 'Showcase', detail: 'Highlight key achievements and portfolio.' },
              { step: '3', title: 'Share', detail: 'Share your unique profile link with recruiters.' }
            ],
            benefits: [
              'Professional digital presence.',
              'Easily shareable with recruiters.',
              ' centralized portfolio of work.'
            ],
            keyPoints: ['Digital Portfolio', 'Shareable Link', 'Showcase Projects']
          },
          {
            id: 'career-guidance',
            title: 'Career Guidance',
            desc: 'Get personalized guidance from career experts who can help you identify your strengths, explore suitable career paths, and develop a strategic plan for your professional growth.',
            icon: <Compass size={40} color="#34d399" />,
            flow: [
              { step: '1', title: 'Book Session', detail: 'Schedule a time with an industry expert.' },
              { step: '2', title: 'Discuss', detail: 'One-on-one discussion about your goals.' },
              { step: '3', title: 'Plan', detail: 'Receive a tailored action plan.' }
            ],
            benefits: [
              'Expert mentorship and advice.',
              'Clarity on career direction.',
              'Actionable growth strategies.'
            ],
            keyPoints: ['1-on-1 Sessions', 'Strategic Planning', 'Expert Advice']
          },
          {
            id: 'psychometric-test',
            title: 'Psychometric Test',
            desc: 'Discover your personality traits, work preferences, and aptitudes with our comprehensive psychometric assessments. Gain insights that help align your career choices with your natural strengths.',
            icon: <BrainCircuit size={40} color="#f472b6" />,
            flow: [
              { step: '1', title: 'Take Test', detail: 'Complete a series of scientific questions.' },
              { step: '2', title: 'Analyze', detail: 'AI analyzes your traits and aptitudes.' },
              { step: '3', title: 'Report', detail: 'Get a detailed personality report.' }
            ],
            benefits: [
              'Scientific understanding of self.',
              'Better career alignment.',
              'Identify hidden strengths.'
            ],
            keyPoints: ['Personality Test', 'Aptitude Analysis', 'Career Match']
          },
          {
            id: 'enhance-your-resume',
            title: 'Enhance Your Resume',
            desc: 'Build a professional, ATS-friendly resume with our intuitive builder. Choose from industry-specific templates and get expert tips to highlight your strengths effectively.',
            icon: <FileText size={40} color="#fbbf24" />,
            flow: [
              { step: '1', title: 'Choose Template', detail: 'Select a professional layout.' },
              { step: '2', title: 'Add Content', detail: 'Use AI suggestions to fill details.' },
              { step: '3', title: 'Download', detail: 'Get your ATS-ready resume.' }
            ],
            benefits: [
              'ATS-friendly formatting.',
              'Professional, polished look.',
              'AI-assisted content writing.'
            ],
            keyPoints: ['ATS-Friendly', 'AI Writer', 'Pro Templates']
          },
          {
            id: 'interview-preparation',
            title: 'Interview Preparation',
            desc: 'Prepare for job interviews with our comprehensive resources including mock interviews, common questions, and expert tips to help you make a great impression.',
            icon: <MonitorPlay size={40} color="#ef4444" />,
            flow: [
              { step: '1', title: 'Practice', detail: 'Take AI-driven mock interviews.' },
              { step: '2', title: 'Review', detail: 'Get instant feedback on performance.' },
              { step: '3', title: 'Refine', detail: 'Improve answers with expert tips.' }
            ],
            benefits: [
              'Realistic interview simulation.',
              'Instant performance feedback.',
              'Boosted confidence.'
            ],
            keyPoints: ['Mock Interviews', 'Real-time Feedback', 'Q&A Bank']
          },
          {
            id: 'courses',
            title: 'Courses',
            desc: 'Access a wide range of courses designed to enhance your technical and soft skills. Learn from industry experts and gain practical knowledge that employers value.',
            icon: <BookOpen size={40} color="#8b5cf6" />,
            flow: [
              { step: '1', title: 'Browse', detail: 'Find courses matching your goals.' },
              { step: '2', title: 'Learn', detail: 'Watch lessons and do assignments.' },
              { step: '3', title: 'Certify', detail: 'Earn certificates upon completion.' }
            ],
            benefits: [
              'Industry-relevant curriculum.',
              'Flexible, self-paced learning.',
              'Verified certification.'
            ],
            keyPoints: ['Tech & Soft Skills', 'Expert Instructors', 'Certifications']
          },
          {
            title: 'Apply Jobs/Internships',
            desc: 'Browse and apply for jobs, internships, and hackathons that match your skills and interests. Get exclusive access to opportunities from our partner companies.',
            icon: <Briefcase size={40} color="#10b981" />,
            flow: [
              { step: '1', title: 'Find', detail: 'Search customized job listings.' },
              { step: '2', title: 'Apply', detail: 'One-click application with profile.' },
              { step: '3', title: 'Track', detail: 'Monitor application status.' }
            ],
            benefits: [
              'Exclusive partner opportunities.',
              'Tailored recommendations.',
              'Integrated application tracking.'
            ],
            keyPoints: ['Exclusive Jobs', 'Internships', 'Hackathons']
          },
          {
            title: 'Role-ready Training',
            desc: 'Participate in intensive training programs designed to prepare you for specific job roles. Develop industry-relevant skills and gain practical experience through hands-on projects.',
            icon: <Rocket size={40} color="#f97316" />,
            flow: [
              { step: '1', title: 'Enroll', detail: 'Join a role-specific cohort.' },
              { step: '2', title: 'Train', detail: 'Intensive hands-on learning.' },
              { step: '3', title: 'Place', detail: 'Placement assistance post-training.' }
            ],
            benefits: [
              'Job-specific skill development.',
              'Hands-on project experience.',
              'Placement support.'
            ],
            keyPoints: ['Intensive', 'Role-Specific', 'Placement Support']
          }
        ];
      default:
        return [];
    }
  };

  const services = getServices();
  const isDetailedView = true; // Enabled for all roles now

  // Check for role from localStorage if not passed as prop
  const currentRole = userRole || localStorage.getItem('userRole');
  
  if (!currentRole) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Please select your role to continue
        </p>
        <button
          onClick={() => navigate('/select-role')}
          className="btn-primary"
        >
          Select Role
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Top Section */}
      <div style={{
        marginBottom: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          <button
            onClick={onOpenBeta}
            className="btn-primary"
            style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}
          >
            Join Beta Club ✨
          </button>
        </div>

        <div className="glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Visitors count:</span>
          <span className="title-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            {interestedCount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Hero Text */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="title-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-2px' }}>
          Empowering {currentRole}s
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Discover a suite of powerful tools designed to accelerate your journey. From preparation to placement, we have you covered.
        </p>
      </div>

      {/* Roadmaps based on Role */}
      {currentRole === 'Student' && <StudentRoadmap />}
      {currentRole === 'Institute' && <InstituteRoadmap />}
      {currentRole === 'Industry' && <IndustryRoadmap />}

      {/* Services Grid */}
      <div style={{
        display: isDetailedView ? 'flex' : 'grid',
        flexDirection: isDetailedView ? 'column' : 'initial',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isDetailedView ? '5rem' : '2rem'
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            id={service.id}
            className="glass-panel"
            style={{
              padding: isDetailedView ? '3.5rem' : '2.5rem',
              transition: 'transform 0.3s ease',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              scrollMarginTop: '120px'
            }}
            onMouseOver={(e) => !isDetailedView && (e.currentTarget.style.transform = 'translateY(-10px)')}
            onMouseOut={(e) => !isDetailedView && (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {/* Detailed Layout for ALL Roles */}
            {isDetailedView ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.8rem', color: 'white' }}>{service.title}</h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '800px' }}>
                      {service.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1rem' }}>
                      {service.keyPoints.map((point, i) => (
                        <span key={i} style={{
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: '#a5b4fc',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          border: '1px solid rgba(99, 102, 241, 0.2)'
                        }}>
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                  {/* Flow Section */}
                  {service.flow && (
                    <div>
                      <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Sparkles size={18} color="var(--primary)" /> How it Works
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {service.flow.map((step, i) => (
                          <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{
                              width: '24px', height: '24px',
                              borderRadius: '50%',
                              background: 'rgba(255,255,255,0.1)',
                              color: 'var(--primary)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontWeight: 'bold',
                              fontSize: '0.8rem',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}>
                              {step.step}
                            </div>
                            <div>
                              <div style={{ color: 'white', fontWeight: '500', marginBottom: '0.2rem' }}>{step.title}</div>
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.detail}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits Section */}
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={18} color="var(--secondary)" /> Values for You
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.benefits.map((benefit, i) => (
                        <li key={i} style={{
                          marginBottom: '0.8rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'start',
                          fontSize: '0.95rem',
                          lineHeight: '1.5'
                        }}>
                          <span style={{ color: 'var(--secondary)', marginRight: '0.8rem', marginTop: '3px' }}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
