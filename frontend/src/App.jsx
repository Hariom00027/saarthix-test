import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SelectRole from "./pages/SelectRole";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import BetaClubForm from "./components/BetaClubForm";
import ContactPopup from "./components/ContactPopup";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [showBetaForm, setShowBetaForm] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    // Check if role is stored in localStorage
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }

    // Listen for role selection events
    const handleRoleSelected = () => {
      const storedRole = localStorage.getItem('userRole');
      if (storedRole) {
        setUserRole(storedRole);
      }
    };

    window.addEventListener('roleSelected', handleRoleSelected);

    return () => {
      window.removeEventListener('roleSelected', handleRoleSelected);
    };
  }, []);

  return (
    <Router>
      {showBetaForm && (
        <BetaClubForm
          role={userRole}
          onClose={() => setShowBetaForm(false)}
        />
      )}

      <ContactPopup
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
      />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/select-role"
          element={<SelectRole />}
        />
        <Route
          path="/services"
          element={
            <Home
              userRole={userRole}
              onOpenBeta={() => setShowBetaForm(true)}
            />
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>

      {/* Floating Contact Us Button */}
      <button
        onClick={() => setShowContactPopup(!showContactPopup)}
        className="floating-contact-btn"
        title="Contact Us"
      >
        <style>
          {`
            .floating-contact-btn {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: ${showContactPopup 
                ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
              z-index: 1000;
              cursor: pointer;
              border: none;
              transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
            }

            .floating-contact-btn:hover {
              transform: scale(1.1);
              box-shadow: 0 6px 25px rgba(99, 102, 241, 0.6);
            }

            .floating-contact-btn:active {
              transform: scale(0.95);
            }

            /* Tablet Styles */
            @media (max-width: 768px) and (min-width: 481px) {
              .floating-contact-btn {
                width: 56px;
                height: 56px;
                bottom: 1.5rem;
                right: 1.5rem;
              }
            }

            /* Mobile Styles */
            @media (max-width: 480px) {
              .floating-contact-btn {
                width: 52px;
                height: 52px;
                bottom: 1.25rem;
                right: 1.25rem;
              }
            }

            /* Small Mobile Styles */
            @media (max-width: 360px) {
              .floating-contact-btn {
                width: 48px;
                height: 48px;
                bottom: 1rem;
                right: 1rem;
              }
            }
          `}
        </style>
        <Phone size={24} />
      </button>
    </Router>
  );
}

export default App;
