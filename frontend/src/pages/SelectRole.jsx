import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Building, GraduationCap } from 'lucide-react';

const SelectRole = () => {
  const navigate = useNavigate();

  const studentRole = {
    name: 'Student',
    icon: <GraduationCap size={40} />,
    color: '#6366f1',
    description: 'Accelerate your career journey from preparation to placement'
  };

  const otherRoles = [
    {
      name: 'Industry',
      icon: <Briefcase size={40} />,
      color: '#10b981',
      description: 'Hire smarter with our comprehensive recruitment solutions'
    },
    {
      name: 'Institute',
      icon: <Building size={40} />,
      color: '#ec4899',
      description: 'Empower your students with industry-relevant training and placements'
    }
  ];

  const handleRoleSelect = (role) => {
    localStorage.setItem('userRole', role);
    // Trigger a custom event to notify App.jsx
    window.dispatchEvent(new Event('roleSelected'));
    navigate('/services');
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-panel" style={{
        padding: '3rem',
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 className="title-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Choose Your Path
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Select your user type to explore our tailored services
        </p>

        {/* Student Button - Top */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => handleRoleSelect(studentRole.name)}
            style={{
              background: 'var(--surface)',
              border: '2px solid var(--glass-border)',
              color: 'var(--text)',
              padding: '2rem',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
              maxWidth: '300px',
              width: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = studentRole.color;
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 30px ${studentRole.color}40`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              padding: '1.5rem',
              background: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '50%',
              color: studentRole.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {studentRole.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>
              {studentRole.name}
            </h3>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              margin: 0,
              lineHeight: '1.5'
            }}>
              {studentRole.description}
            </p>
          </button>
        </div>

        {/* Industry and Institute Buttons - Bottom */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          {otherRoles.map((role) => (
            <button
              key={role.name}
              onClick={() => handleRoleSelect(role.name)}
              style={{
                background: 'var(--surface)',
                border: '2px solid var(--glass-border)',
                color: 'var(--text)',
                padding: '2rem',
                borderRadius: '1rem',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = role.color;
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${role.color}40`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                padding: '1.5rem',
                background: `rgba(${role.color === '#10b981' ? '16, 185, 129' : '236, 72, 153'}, 0.1)`,
                borderRadius: '50%',
                color: role.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {role.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>
                {role.name}
              </h3>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                margin: 0,
                lineHeight: '1.5'
              }}>
                {role.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectRole;

