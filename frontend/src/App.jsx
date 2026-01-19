import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SelectRole from "./pages/SelectRole";
import Home from "./pages/Home";
import About from "./pages/About";
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
      </Routes>

      {/* Floating Contact Us Button */}
      <button
        onClick={() => setShowContactPopup(!showContactPopup)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: showContactPopup 
            ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
          zIndex: 1000,
          cursor: 'pointer',
          border: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
        }}
        title="Contact Us"
      >
        <Phone size={24} />
      </button>
    </Router>
  );
}

export default App;
