import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Users, 
  FileText, 
  Star, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  Briefcase, 
  Calendar,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const [betaUsers, setBetaUsers] = useState([]);
  const [serviceInterests, setServiceInterests] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'beta-users', 'service-interests'

  useEffect(() => {
    fetchAllData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchAllData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [usersRes, interestsRes, countRes] = await Promise.all([
        axios.get('http://localhost:8081/api/beta/all'),
        axios.get('http://localhost:8081/api/service-interest/all'),
        axios.get('http://localhost:8081/api/beta/count')
      ]);
      
      setBetaUsers(usersRes.data);
      setServiceInterests(interestsRes.data);
      setUserCount(countRes.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const getInterestBadgeColor = (interest) => {
    switch (interest) {
      case 'very_interested':
        return { bg: 'rgba(16, 185, 129, 0.2)', color: '#10b981', text: 'Very Interested' };
      case 'somewhat_interested':
        return { bg: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24', text: 'Somewhat Interested' };
      case 'not_interested':
        return { bg: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', text: 'Not Interested' };
      default:
        return { bg: 'rgba(148, 163, 184, 0.2)', color: '#94a3b8', text: interest };
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Student':
        return '#6366f1';
      case 'Institute':
        return '#ec4899';
      case 'Industry':
        return '#10b981';
      default:
        return '#94a3b8';
    }
  };

  if (loading && betaUsers.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <RefreshCw className="spin" size={40} color="var(--primary)" />
        <p style={{ color: 'var(--text-muted)' }}>Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 className="title-gradient" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          Dashboard
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Monitor all user responses and form submissions
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(99, 102, 241, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)'
            }}>
              <Users size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Total Users</p>
              <h2 style={{ margin: 0, fontSize: '2rem', color: 'white' }}>{userCount.toLocaleString()}</h2>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(236, 72, 153, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--secondary)'
            }}>
              <FileText size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Beta Form Submissions</p>
              <h2 style={{ margin: 0, fontSize: '2rem', color: 'white' }}>{betaUsers.length}</h2>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}>
              <Star size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Service Interest Submissions</p>
              <h2 style={{ margin: 0, fontSize: '2rem', color: 'white' }}>{serviceInterests.length}</h2>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(251, 191, 36, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fbbf24'
            }}>
              <TrendingUp size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Completion Rate</p>
              <h2 style={{ margin: 0, fontSize: '2rem', color: 'white' }}>
                {betaUsers.length > 0 
                  ? Math.round((serviceInterests.length / betaUsers.length) * 100) 
                  : 0}%
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={{
            padding: '0.75rem 1.5rem',
            background: activeTab === 'overview' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'overview' ? '2px solid var(--primary)' : '2px solid transparent',
            color: activeTab === 'overview' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            fontWeight: activeTab === 'overview' ? '600' : '400',
            transition: 'all 0.2s'
          }}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('beta-users')}
          style={{
            padding: '0.75rem 1.5rem',
            background: activeTab === 'beta-users' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'beta-users' ? '2px solid var(--primary)' : '2px solid transparent',
            color: activeTab === 'beta-users' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            fontWeight: activeTab === 'beta-users' ? '600' : '400',
            transition: 'all 0.2s'
          }}
        >
          Beta Users ({betaUsers.length})
        </button>
        <button
          onClick={() => setActiveTab('service-interests')}
          style={{
            padding: '0.75rem 1.5rem',
            background: activeTab === 'service-interests' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'service-interests' ? '2px solid var(--primary)' : '2px solid transparent',
            color: activeTab === 'service-interests' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            fontWeight: activeTab === 'service-interests' ? '600' : '400',
            transition: 'all 0.2s'
          }}
        >
          Service Interests ({serviceInterests.length})
        </button>
        <button
          onClick={fetchAllData}
          style={{
            marginLeft: 'auto',
            padding: '0.75rem 1.5rem',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid var(--glass-border)',
            borderRadius: '0.5rem',
            color: 'var(--primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
          }}
        >
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Role Distribution */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem' }}>Users by Role</h3>
              {['Student', 'Institute', 'Industry'].map(role => {
                const count = betaUsers.filter(u => u.role === role).length;
                const percentage = betaUsers.length > 0 ? (count / betaUsers.length) * 100 : 0;
                return (
                  <div key={role} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{role}</span>
                      <span style={{ color: 'white', fontWeight: '600' }}>{count}</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: getRoleColor(role),
                        transition: 'width 0.3s'
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Submissions */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem' }}>Recent Beta Users</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {betaUsers.slice(-5).reverse().map((user, idx) => (
                  <div key={user.id || idx} style={{
                    padding: '0.75rem',
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <p style={{ margin: 0, color: 'white', fontWeight: '500' }}>{user.name}</p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{user.email}</p>
                    </div>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      background: `rgba(${getRoleColor(user.role) === '#6366f1' ? '99, 102, 241' : getRoleColor(user.role) === '#ec4899' ? '236, 72, 153' : '16, 185, 129'}, 0.2)`,
                      color: getRoleColor(user.role),
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {user.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Beta Users Tab */}
      {activeTab === 'beta-users' && (
        <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
          {betaUsers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              <FileText size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>No beta user submissions yet</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Email</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Phone</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Role</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Institution</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Designation</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Location</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Specific Need</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Joined At</th>
                  </tr>
                </thead>
                <tbody>
                  {betaUsers.map((user, idx) => (
                    <tr key={user.id || idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '1rem', color: 'white' }}>{user.name || 'N/A'}</td>
                      <td style={{ padding: '1rem', color: 'white' }}>{user.email || 'N/A'}</td>
                      <td style={{ padding: '1rem', color: 'white' }}>{user.phoneNumber || 'N/A'}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '999px',
                          background: `rgba(${getRoleColor(user.role) === '#6366f1' ? '99, 102, 241' : getRoleColor(user.role) === '#ec4899' ? '236, 72, 153' : '16, 185, 129'}, 0.2)`,
                          color: getRoleColor(user.role),
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}>
                          {user.role || 'N/A'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', color: 'white' }}>{user.institution || 'N/A'}</td>
                      <td style={{ padding: '1rem', color: 'white' }}>{user.designation || 'N/A'}</td>
                      <td style={{ padding: '1rem', color: 'white' }}>{user.location || 'N/A'}</td>
                      <td style={{ padding: '1rem', color: 'white', maxWidth: '200px' }}>
                        <div style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }} title={user.specificNeed || 'N/A'}>
                          {user.specificNeed || 'N/A'}
                        </div>
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {formatDate(user.joinedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Service Interests Tab */}
      {activeTab === 'service-interests' && (
        <div>
          {serviceInterests.length === 0 ? (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Star size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>No service interest submissions yet</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {serviceInterests.map((interest, idx) => {
                const badges = getInterestBadgeColor('very_interested');
                return (
                  <div key={interest.id || idx} className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                          <Mail size={18} color="var(--text-muted)" />
                          <span style={{ color: 'white', fontWeight: '600' }}>{interest.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '999px',
                            background: `rgba(${getRoleColor(interest.role) === '#6366f1' ? '99, 102, 241' : getRoleColor(interest.role) === '#ec4899' ? '236, 72, 153' : '16, 185, 129'}, 0.2)`,
                            color: getRoleColor(interest.role),
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }}>
                            {interest.role}
                          </span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            {formatDate(interest.submittedAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Service Interests:</h4>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '0.75rem'
                      }}>
                        {interest.serviceInterests && Object.entries(interest.serviceInterests).map(([serviceId, interestLevel]) => {
                          const badge = getInterestBadgeColor(interestLevel);
                          return (
                            <div key={serviceId} style={{
                              padding: '0.75rem',
                              background: 'rgba(0, 0, 0, 0.2)',
                              borderRadius: '0.5rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}>
                              <span style={{ color: 'white', fontSize: '0.9rem' }}>
                                {serviceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                              </span>
                              <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '999px',
                                background: badge.bg,
                                color: badge.color,
                                fontSize: '0.75rem',
                                fontWeight: '500'
                              }}>
                                {badge.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
