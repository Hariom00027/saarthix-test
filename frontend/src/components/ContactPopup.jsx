import React from 'react';
import { X, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          backdropFilter: 'blur(4px)',
        }}
        onClick={onClose}
      />

      {/* Chat Popup */}
      <div
        className="contact-popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <style>
          {`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUpMobile {
              from {
                opacity: 0;
                transform: translateY(100%);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .contact-popup-container {
              position: fixed;
              bottom: 5.5rem;
              right: 2rem;
              width: 380px;
              max-height: 600px;
              backgroundColor: var(--surface);
              border-radius: 1.5rem;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
              z-index: 1000;
              display: flex;
              flex-direction: column;
              border: 1px solid var(--glass-border);
              overflow: hidden;
              animation: slideUp 0.3s ease-out;
            }

            /* Tablet Styles (481px - 768px) */
            @media (max-width: 768px) and (min-width: 481px) {
              .contact-popup-container {
                width: 90%;
                max-width: 420px;
                right: 50%;
                transform: translateX(50%);
                bottom: 1rem;
                max-height: 70vh;
                border-radius: 1.25rem;
              }
            }

            /* Mobile Styles (up to 480px) */
            @media (max-width: 480px) {
              .contact-popup-container {
                width: 100%;
                max-width: 100%;
                right: 0;
                left: 0;
                bottom: 0;
                max-height: 85vh;
                border-radius: 1.5rem 1.5rem 0 0;
                animation: slideUpMobile 0.3s ease-out;
              }
            }

            /* Small Mobile Styles (up to 360px) */
            @media (max-width: 360px) {
              .contact-popup-container {
                max-height: 90vh;
              }
            }
          `}
        </style>

        {/* Chat Header */}
        <div className="contact-popup-header">
          <style>
            {`
              .contact-popup-header {
                background: var(--gradient-main);
                padding: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
              }

              @media (max-width: 480px) {
                .contact-popup-header {
                  padding: 1.25rem 1rem;
                }
              }

              .contact-popup-header-content {
                display: flex;
                align-items: center;
                gap: 1rem;
              }

              @media (max-width: 360px) {
                .contact-popup-header-content {
                  gap: 0.75rem;
                }
              }

              .contact-popup-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
              }

              @media (max-width: 360px) {
                .contact-popup-icon {
                  width: 36px;
                  height: 36px;
                }
              }

              .contact-popup-title {
                margin: 0;
                font-size: 1.1rem;
                font-weight: 600;
              }

              @media (max-width: 480px) {
                .contact-popup-title {
                  font-size: 1rem;
                }
              }

              .contact-popup-subtitle {
                margin: 0;
                font-size: 0.85rem;
                opacity: 0.9;
              }

              @media (max-width: 480px) {
                .contact-popup-subtitle {
                  font-size: 0.8rem;
                }
              }

              .contact-popup-close-btn {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: white;
                transition: background 0.2s;
              }

              .contact-popup-close-btn:hover {
                background: rgba(255, 255, 255, 0.3);
              }

              @media (max-width: 360px) {
                .contact-popup-close-btn {
                  width: 28px;
                  height: 28px;
                }
              }
            `}
          </style>
          <div className="contact-popup-header-content">
            <div className="contact-popup-icon">
              <MessageCircle size={20} />
            </div>
            <div>
              <h3 className="contact-popup-title">
                Contact Us
              </h3>
              <p className="contact-popup-subtitle">
                We're here to help!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="contact-popup-close-btn"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="contact-popup-body">
          <style>
            {`
              .contact-popup-body {
                padding: 1.5rem;
                overflow-y: auto;
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 1rem;
              }

              @media (max-width: 480px) {
                .contact-popup-body {
                  padding: 1.25rem 1rem;
                  gap: 0.875rem;
                }
              }

              .contact-popup-welcome {
                padding: 1rem;
                background: rgba(99, 102, 241, 0.1);
                border-radius: 1rem;
                border: 1px solid var(--glass-border);
              }

              @media (max-width: 480px) {
                .contact-popup-welcome {
                  padding: 0.875rem;
                  border-radius: 0.875rem;
                }
              }

              .contact-popup-welcome p {
                margin: 0;
                color: var(--text);
                line-height: 1.6;
                font-size: 0.95rem;
              }

              @media (max-width: 480px) {
                .contact-popup-welcome p {
                  font-size: 0.875rem;
                  line-height: 1.5;
                }
              }

              .contact-cards-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;
              }

              @media (max-width: 480px) {
                .contact-cards-container {
                  gap: 0.875rem;
                }
              }
            `}
          </style>
          {/* Welcome Message */}
          <div className="contact-popup-welcome">
            <p>
              Hi! 👋 How can we help you today? Feel free to reach out using any of the contact methods below.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="contact-cards-container">
            <style>
              {`
                .contact-card {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  padding: 1rem;
                  background: var(--glass);
                  border-radius: 0.75rem;
                  border: 1px solid var(--glass-border);
                  text-decoration: none;
                  color: var(--text);
                  transition: all 0.2s;
                  cursor: pointer;
                }

                @media (max-width: 480px) {
                  .contact-card {
                    padding: 0.875rem;
                    gap: 0.875rem;
                  }
                }

                .contact-card:hover {
                  background: rgba(99, 102, 241, 0.1);
                  transform: translateX(4px);
                }

                @media (max-width: 480px) {
                  .contact-card:hover {
                    transform: translateX(2px);
                  }
                }

                .contact-card:active {
                  transform: scale(0.98);
                }

                .contact-card-icon {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  background: var(--gradient-main);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  flex-shrink: 0;
                }

                @media (max-width: 480px) {
                  .contact-card-icon {
                    width: 36px;
                    height: 36px;
                  }
                }

                .contact-card-content {
                  flex: 1;
                  min-width: 0;
                }

                .contact-card-title {
                  margin: 0;
                  font-size: 0.95rem;
                  color: var(--text);
                  font-weight: 600;
                }

                @media (max-width: 480px) {
                  .contact-card-title {
                    font-size: 0.875rem;
                  }
                }

                .contact-card-text {
                  margin: 0.25rem 0 0 0;
                  font-size: 0.85rem;
                  color: var(--text-muted);
                  line-height: 1.5;
                  word-break: break-word;
                }

                @media (max-width: 480px) {
                  .contact-card-text {
                    font-size: 0.8rem;
                  }
                }

                .contact-card-static {
                  cursor: default;
                }

                .contact-card-static:hover {
                  background: var(--glass);
                  transform: none;
                }
              `}
            </style>
            {/* Phone */}
            <a
              href="tel:+917899257840"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Phone size={18} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">
                  Phone
                </h4>
                <p className="contact-card-text">
                  +91 7899257840
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:support@nattlabs.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Mail size={18} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">
                  Email
                </h4>
                <p className="contact-card-text">
                  support@nattlabs.com
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="contact-card contact-card-static">
              <div className="contact-card-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">
                  Address
                </h4>
                <p className="contact-card-text">
                  1705, 19th Main Road, Sector 2,<br />
                  HSR Layout, Bengaluru, 560102,<br />
                  India
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-card contact-card-static">
              <div className="contact-card-icon">
                <Clock size={18} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">
                  Business Hours
                </h4>
                <p className="contact-card-text">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
