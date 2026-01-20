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
    <>
      <style>
        {`
          .select-role-wrapper {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          @media (max-width: 768px) {
            .select-role-wrapper {
              padding: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .select-role-wrapper {
              padding: 1rem;
              min-height: auto;
            }
          }

          .select-role-panel {
            padding: 3rem;
            max-width: 900px;
            width: 100%;
            text-align: center;
          }

          @media (max-width: 768px) {
            .select-role-panel {
              padding: 2.5rem 2rem;
            }
          }

          @media (max-width: 480px) {
            .select-role-panel {
              padding: 2rem 1.5rem;
            }
          }

          .select-role-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .select-role-title {
              font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .select-role-title {
              font-size: 1.75rem;
            }
          }

          .select-role-subtitle {
            color: var(--text-muted);
            margin-bottom: 3rem;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .select-role-subtitle {
              font-size: 1rem;
              margin-bottom: 2rem;
            }
          }

          @media (max-width: 480px) {
            .select-role-subtitle {
              font-size: 0.95rem;
            }
          }

          .select-role-student-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 3rem;
          }

          @media (max-width: 768px) {
            .select-role-student-wrapper {
              margin-top: 1.5rem;
              margin-bottom: 2rem;
            }
          }

          .select-role-others-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 700px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .select-role-others-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .select-role-others-grid {
              gap: 1rem;
            }
          }

          .select-role-card {
            background: var(--surface);
            border: 2px solid var(--glass-border);
            color: var(--text);
            padding: 2rem;
            border-radius: 1rem;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
          }

          @media (max-width: 480px) {
            .select-role-card {
              padding: 1.5rem;
              font-size: 1rem;
            }
          }
        `}
      </style>
      <div className="select-role-wrapper">
        <div className="glass-panel select-role-panel">
          <h2 className="title-gradient select-role-title">
            Choose Your Path
          </h2>
          <p className="select-role-subtitle">
            Select your user type to explore our tailored services
          </p>

        {/* Student Button - Top */}
        <div className="select-role-student-wrapper">
          <button
            onClick={() => handleRoleSelect(studentRole.name)}
            className="select-role-card"
            style={{ maxWidth: '300px' }}
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
        <div className="select-role-others-grid">
          {otherRoles.map((role) => (
            <button
              key={role.name}
              onClick={() => handleRoleSelect(role.name)}
              className="select-role-card"
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
    </>
  );
};

export default SelectRole;

