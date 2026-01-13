import React, { useState } from 'react';
import axios from 'axios';
import { X, Loader2, Send } from 'lucide-react';
import ServiceInterestForm from './ServiceInterestForm';

const BetaClubForm = ({ onClose, role }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        institution: '',
        designation: '',
        location: '',
        specificNeed: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showServiceInterest, setShowServiceInterest] = useState(false);
    const [savedBetaUser, setSavedBetaUser] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/beta/join', {
                ...formData,
                role: role
            });
            setSavedBetaUser(response.data);
            setSuccess(true);
            // Show service interest form after 2 seconds
            setTimeout(() => {
                setSuccess(false);
                setShowServiceInterest(true);
            }, 2000);
        } catch (err) {
            console.error("Failed to join beta", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Field configurations based on Role
    const getFieldLabels = () => {
        switch (role) {
            case 'Student':
                return {
                    institution: 'College / University Name',
                    designation: 'Stream / Branch',
                    specificNeed: 'Year of Study (e.g. 3rd Year)'
                };
            case 'Institute':
                return {
                    institution: 'Institute Name',
                    designation: 'Your Designation (e.g. TPO, Principal)',
                    specificNeed: 'Primary Requirement (e.g. Placements, Training)'
                };
            case 'Industry':
                return {
                    institution: 'Company Name',
                    designation: 'Your Designation (e.g. HR Manager)',
                    specificNeed: 'Hiring Needs (e.g. Java Devs, Interns)'
                };
            default:
                return {
                    institution: 'Organization',
                    designation: 'Designation',
                    specificNeed: 'Specific Requirements'
                };
        }
    };

    const labels = getFieldLabels();

    if (showServiceInterest && savedBetaUser) {
        return (
            <ServiceInterestForm
                onClose={onClose}
                role={role}
                betaUserId={savedBetaUser.id}
                email={savedBetaUser.email}
            />
        );
    }

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
                        <Send size={30} />
                    </div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>Welcome Aboard!</h2>
                    <p style={{ color: 'var(--text-muted)' }}>You've successfully joined the exclusive Beta Club. We'll ask about your service interests next.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="glass-panel" style={{
                padding: '2.5rem',
                width: '100%',
                maxWidth: '500px',
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
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 className="title-gradient" style={{ marginBottom: '0.5rem', paddingRight: '2rem' }}>
                    Join the Club
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                    Get early access as a <strong>{role}</strong> user.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ex. John Doe"
                            required
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ex. john@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+91 98765..."
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>{labels.institution}</label>
                        <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            placeholder={`Enter ${labels.institution}`}
                            required
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>{labels.designation}</label>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                placeholder={role === 'Student' ? 'Ex. CSE' : 'Ex. HR Manager'}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Location (City)</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Ex. Mumbai"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>{labels.specificNeed}</label>
                        <input
                            type="text"
                            name="specificNeed"
                            value={formData.specificNeed}
                            onChange={handleChange}
                            placeholder={role === 'Student' ? 'Ex. 3rd Year' : 'Describe Briefly'}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ marginTop: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="spin" size={20} /> : 'Request Access'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BetaClubForm;
