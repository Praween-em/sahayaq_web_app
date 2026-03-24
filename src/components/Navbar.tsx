import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logos/Untitled design.gif';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <img src={logo} alt="Sahayaq Logo" style={{ height: '50px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
            My Sahayaq <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>(My Sahayak)</span>
          </span>
        </Link>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/" onClick={closeMenu} className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" onClick={closeMenu} className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <Link to="/terms" onClick={closeMenu} className={`nav-link ${isActive('/terms') ? 'active' : ''}`}>Terms</Link>
          <Link to="/privacy" onClick={closeMenu} className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}>Privacy</Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="https://play.google.com/store/apps/details?id=com.sahayaq" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Download App</a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
