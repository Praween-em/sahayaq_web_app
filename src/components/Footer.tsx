import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logos/Sayayaq2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: '1.5rem' }}>
              <img src={logo} alt="Sahayaq Logo" style={{ height: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--white)', fontFamily: 'var(--font-heading)' }}>Sahayaq</span>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Empowering India's service sector by connecting verified professionals with customers through cutting-edge technology and trust.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}><Facebook size={18} /></a>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}><Twitter size={18} /></a>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}><Instagram size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Platform</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">Our Story</Link>
            <Link to="/contact" className="footer-link">Support</Link>
            <Link to="#" className="footer-link">Partner with us</Link>
          </div>
          <div>
            <h4 className="footer-title">Governance</h4>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="#" className="footer-link">Cookie Policy</Link>
            <Link to="#" className="footer-link">Security</Link>
          </div>
          <div>
            <h4 className="footer-title">Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                <div style={{ color: 'var(--primary-color)' }}><Phone size={20} /></div>
                <span>+91 8374277617</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                <div style={{ color: 'var(--primary-color)' }}><Mail size={20} /></div>
                <span>help.rideandhra@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                <div style={{ color: '#25D366' }}><MessageSquare size={20} /></div>
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.875rem' }}>
          <p>© 2025 Ride Andhra Tech Solutions. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
