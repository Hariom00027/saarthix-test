import React from 'react';

const RolePopup = ({ onSelectRole }) => {
    return (
        <>
            <style>
                {`
                    .role-popup-panel {
                        padding: 3rem;
                        max-width: 500px;
                        width: 90%;
                        text-align: center;
                    }

                    @media (max-width: 768px) {
                        .role-popup-panel {
                            padding: 2.5rem 2rem;
                            width: 85%;
                        }
                    }

                    @media (max-width: 480px) {
                        .role-popup-panel {
                            padding: 2rem 1.5rem;
                            width: 90%;
                        }
                    }

                    .role-popup-title {
                        font-size: 2.5rem;
                        margin-bottom: 1rem;
                    }

                    @media (max-width: 768px) {
                        .role-popup-title {
                            font-size: 2rem;
                        }
                    }

                    @media (max-width: 480px) {
                        .role-popup-title {
                            font-size: 1.75rem;
                        }
                    }

                    .role-popup-subtitle {
                        color: var(--text-muted);
                        margin-bottom: 2rem;
                        font-size: 1.1rem;
                    }

                    @media (max-width: 480px) {
                        .role-popup-subtitle {
                            font-size: 1rem;
                        }
                    }

                    .role-popup-buttons {
                        display: grid;
                        gap: 1rem;
                    }

                    .role-popup-btn {
                        background: var(--surface);
                        border: 1px solid var(--glass-border);
                        color: var(--text);
                        padding: 1rem;
                        border-radius: 0.5rem;
                        font-size: 1.1rem;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }

                    .role-popup-btn:hover {
                        background: var(--primary);
                        border-color: var(--primary);
                    }

                    @media (max-width: 480px) {
                        .role-popup-btn {
                            padding: 0.875rem;
                            font-size: 1rem;
                        }
                    }
                `}
            </style>
            <div className="modal-overlay">
                <div className="glass-panel role-popup-panel">
                    <h2 className="title-gradient role-popup-title">Welcome to Saarthi</h2>
                    <p className="role-popup-subtitle">
                        Please select your role to continue
                    </p>

                    <div className="role-popup-buttons">
                    {['Industry', 'Institute', 'Student'].map((role) => (
                        <button
                            key={role}
                            onClick={() => onSelectRole(role)}
                            className="role-popup-btn"
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
        </>
    );
};

export default RolePopup;
