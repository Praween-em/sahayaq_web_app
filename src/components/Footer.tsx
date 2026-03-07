import { Link } from 'react-router-dom';
import { HandHeart, Mail, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              <HandHeart size={24} color="var(--primary-color)" />
              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Sahayaq</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              Connecting verified service professionals with people across India.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <div>
            <h4 className="footer-title">Legal</h4>
            <Link to="/terms" className="footer-link">Terms & Conditions</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
          <div>
            <h4 className="footer-title">Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: '#9ca3af' }}>
                <Phone size={16} />
                <span>+91 8374277617</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: '#9ca3af' }}>
                <Mail size={16} />
                <span>help.rideandhra@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: '#9ca3af' }}>
              <MessageSquare size={16} />
              <span>WhatsApp Support</span>
            </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
          <p>© 2025 Ride Andhra Tech Solutions. Made with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
