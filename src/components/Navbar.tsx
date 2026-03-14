import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/Untitled design.gif';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <img src={logo} alt="Sahayaq Logo" style={{ height: '50px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Sahayaq</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <Link to="/terms" className={`nav-link ${isActive('/terms') ? 'active' : ''}`}>Terms</Link>
          <Link to="/privacy" className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.sahayaq" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Download App</a>
      </div>
    </nav>
  );
};

export default Navbar;
