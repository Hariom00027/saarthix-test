import React, { useState } from 'react';
import axios from 'axios';
import { X, Loader2, CheckCircle2, Star } from 'lucide-react';

const ServiceInterestForm = ({ onClose, role, betaUserId, email }) => {
    const [serviceInterests, setServiceInterests] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Get services for the role
    const getServicesForRole = () => {
        switch (role) {
            case 'Student':
                return [
                    { id: 'job-blueprint', title: 'Job Blueprint' },
                    { id: 'hire-me-profile', title: 'Hire Me Profile' },
                    { id: 'career-guidance', title: 'Career Guidance' },
                    { id: 'psychometric-test', title: 'Psychometric Test' },
                    { id: 'enhance-your-resume', title: 'Enhance Your Resume' },
                    { id: 'interview-preparation', title: 'Interview Preparation' },
                    { id: 'courses', title: 'Courses' },
                    { id: 'apply-jobs-internships', title: 'Apply Jobs/Internships' },
                    { id: 'role-ready-training', title: 'Role-ready Training' }
                ];
            case 'Institute':
                return [
                    { id: 'internship-placement', title: 'Internship & Placement Access' },
                    { id: 'trainings', title: 'Trainings' },
                    { id: 'workshops', title: 'Workshops' },
                    { id: 'expert-sessions', title: 'Expert Sessions' },
                    { id: 'collaboration', title: 'Collaboration' },
                    { id: 'student-training-on-demand', title: 'Student Training (On Demand)' },
                    { id: 'student-training-role-ready', title: 'Student Training (Role-Ready)' }
                ];
            case 'Industry':
                return [
                    { id: 'post-jobs', title: 'Post Jobs / Internship' },
                    { id: 'database-access', title: 'Database Access' },
                    { id: 'technical-interview', title: 'Technical Interview / Assessment' },
                    { id: 'post-hackathons', title: 'Post Hackathons' },
                    { id: 'access-to-universities', title: 'Access To Universities' },
                    { id: 'expert-session', title: 'Expert Session' }
                ];
            default:
                return [];
        }
    };

    const services = getServicesForRole();
    const interestOptions = [
        { value: 'very_interested', label: 'Very Interested', color: '#10b981' },
        { value: 'somewhat_interested', label: 'Somewhat Interested', color: '#fbbf24' },
        { value: 'not_interested', label: 'Not Interested', color: '#ef4444' }
    ];

    const handleInterestChange = (serviceId, interestLevel) => {
        setServiceInterests(prev => ({
            ...prev,
            [serviceId]: interestLevel
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if at least one service has been rated
        if (Object.keys(serviceInterests).length === 0) {
            alert('Please rate at least one service before submitting.');
            return;
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:8081/api/service-interest/submit', {
                betaUserId: betaUserId,
                email: email,
                role: role,
                serviceInterests: serviceInterests
            });
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
            }, 3000);
        } catch (err) {
            console.error("Failed to submit service interests", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="modal-overlay">
                <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '400px' }}>
                    <div style={{
                        width: '60px', height: '60px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        color: '#10b981'
                    }}>
                        <CheckCircle2 size={30} />
                    </div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>Thank You!</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Your service preferences have been saved. We'll use this to personalize your experience.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="glass-panel" style={{
                padding: '2.5rem',
                width: '100%',
                maxWidth: '700px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    <X size={24} />
                </button>

                <h2 className="title-gradient" style={{ marginBottom: '0.5rem', paddingRight: '2rem' }}>
                    Tell Us Your Interests
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                    Help us understand which services interest you most as a <strong>{role}</strong> user.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <div key={service.id || index} style={{
                            padding: '1.5rem',
                            background: 'rgba(0, 0, 0, 0.2)',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <h3 style={{ 
                                color: 'white', 
                                fontSize: '1.1rem', 
                                marginBottom: '1rem',
                                fontWeight: '600'
                            }}>
                                {service.title}
                            </h3>
                            
                            <div style={{ 
                                display: 'flex', 
                                gap: '1rem', 
                                flexWrap: 'wrap'
                            }}>
                                {interestOptions.map((option) => {
                                    const isSelected = serviceInterests[service.id] === option.value;
                                    return (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => handleInterestChange(service.id, option.value)}
                                            style={{
                                                padding: '0.6rem 1.2rem',
                                                borderRadius: '8px',
                                                border: `2px solid ${isSelected ? option.color : 'rgba(255, 255, 255, 0.2)'}`,
                                                background: isSelected 
                                                    ? `${option.color}20` 
                                                    : 'transparent',
                                                color: isSelected ? option.color : 'var(--text-muted)',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                fontSize: '0.9rem',
                                                fontWeight: isSelected ? '600' : '400',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSelected) {
                                                    e.currentTarget.style.borderColor = option.color;
                                                    e.currentTarget.style.color = option.color;
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isSelected) {
                                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                    e.currentTarget.style.color = 'var(--text-muted)';
                                                }
                                            }}
                                        >
                                            {isSelected && <Star size={16} fill={option.color} />}
                                            {option.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ 
                            marginTop: '1rem', 
                            width: '100%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '0.5rem',
                            padding: '1rem'
                        }}
                        disabled={loading || Object.keys(serviceInterests).length === 0}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="spin" size={20} />
                                Submitting...
                            </>
                        ) : (
                            'Submit Preferences'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ServiceInterestForm;



