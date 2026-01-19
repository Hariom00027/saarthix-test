import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 3rem',
      backgroundColor: '#1a1a1a', // 10% lighter than black background
      borderBottom: '1px solid var(--glass-border)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      position: 'relative',
      zIndex: 100
    }}>
      {/* Logo */}
      <Link to="/" style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'var(--gradient-main)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'opacity 0.2s'
      }}
      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
      onMouseLeave={(e) => e.target.style.opacity = '1'}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src="/logo.png" 
            alt="SaarthiX Logo" 
            style={{ 
              height: '100%', 
              width: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        SaarthiX
      </Link>

      {/* Center Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link to="/about" style={{
          color: 'var(--text)',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'color 0.2s',
          padding: '0.5rem 0'
        }}
        onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text)'}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

