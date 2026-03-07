import { Link, useLocation } from 'react-router-dom';
import { HandHeart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <HandHeart size={32} color="var(--primary-color)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Sahayaq</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <Link to="/terms" className={`nav-link ${isActive('/terms') ? 'active' : ''}`}>Terms</Link>
          <Link to="/privacy" className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
        </div>
        <a href="#" className="btn btn-primary">Download App</a>
      </div>
    </nav>
  );
};

export default Navbar;
