import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 3rem;
            background-color: #1a1a1a;
            border-bottom: 1px solid var(--glass-border);
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            position: relative;
            z-index: 100;
          }

          @media (max-width: 768px) {
            .navbar-container {
              padding: 1rem 2rem;
            }
          }

          @media (max-width: 480px) {
            .navbar-container {
              padding: 0.875rem 1rem;
            }
          }

          .navbar-logo {
            font-size: 1.5rem;
            font-weight: bold;
            background: var(--gradient-main);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: opacity 0.2s;
          }

          .navbar-logo:hover {
            opacity: 0.8;
          }

          @media (max-width: 480px) {
            .navbar-logo {
              font-size: 1.25rem;
              gap: 0.375rem;
            }
          }

          @media (max-width: 360px) {
            .navbar-logo {
              font-size: 1.1rem;
            }
          }

          .navbar-logo-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            transition: transform 0.3s ease;
            cursor: pointer;
          }

          .navbar-logo-circle:hover {
            transform: scale(1.1);
          }

          @media (max-width: 480px) {
            .navbar-logo-circle {
              width: 36px;
              height: 36px;
              padding: 5px;
            }
          }

          @media (max-width: 360px) {
            .navbar-logo-circle {
              width: 32px;
              height: 32px;
              padding: 4px;
            }
          }

          .navbar-logo-img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }

          .navbar-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          @media (max-width: 480px) {
            .navbar-nav {
              gap: 1rem;
            }
          }

          .navbar-link {
            color: var(--text);
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            transition: color 0.2s;
            padding: 0.5rem 0;
          }

          .navbar-link:hover {
            color: var(--primary);
          }

          @media (max-width: 480px) {
            .navbar-link {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 360px) {
            .navbar-link {
              font-size: 0.85rem;
            }
          }
        `}
      </style>
      <nav className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-circle">
            <img 
              src="/logo.png" 
              alt="SaarthiX Logo" 
              className="navbar-logo-img"
            />
          </div>
          SaarthiX
        </Link>

        {/* Center Navigation */}
        <div className="navbar-nav">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

