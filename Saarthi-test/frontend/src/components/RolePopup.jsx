import React from 'react';

const RolePopup = ({ onSelectRole }) => {
    return (
        <div className="modal-overlay">
            <div className="glass-panel" style={{
                padding: '3rem',
                maxWidth: '500px',
                width: '90%',
                textAlign: 'center'
            }}>
                <h2 className="title-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Saarthi</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Please select your role to continue
                </p>

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {['Industry', 'Institute', 'Student'].map((role) => (
                        <button
                            key={role}
                            onClick={() => onSelectRole(role)}
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text)',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'var(--primary)';
                                e.target.style.borderColor = 'var(--primary)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'var(--surface)';
                                e.target.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            {role}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RolePopup;
