import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import RolePopup from "./components/RolePopup";
import BetaClubForm from "./components/BetaClubForm";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [showBetaForm, setShowBetaForm] = useState(false);

  useEffect(() => {
    // Check if role is stored in localStorage
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const handleRoleSelect = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  return (
    <Router>
      {!userRole && <RolePopup onSelectRole={handleRoleSelect} />}

      {showBetaForm && (
        <BetaClubForm
          role={userRole}
          onClose={() => setShowBetaForm(false)}
        />
      )}

      {/* Pass props to Navbar if it needs them, or modify Navbar to accept them if needed */}
      <Navbar />

      <Routes>
        <Route
          path="/"
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
    </Router>
  );
}

export default App;
