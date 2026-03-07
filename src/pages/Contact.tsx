import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container section-padding">
      <h1 className="section-title">Contact Us</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xxl)', fontSize: '1.2rem' }}>
        Have questions? We're here to help. Our support team is available from 9 AM to 7 PM.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
        <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#25D36610', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
            <MessageSquare size={32} color="#25D366" />
          </div>
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>WhatsApp Support</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>Chat with us instantly for quick resolutions.</p>
          <a href="https://wa.me/918374277617" className="btn btn-outline" style={{ borderColor: '#25D366', color: '#25D366' }}>Message Us</a>
        </div>

        <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#FF475710', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
            <Mail size={32} color="#FF4757" />
          </div>
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Email Us</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>Send us an email and we'll get back to you within 24 hours.</p>
          <a href="mailto:help.rideandhra@gmail.com" className="btn btn-outline" style={{ borderColor: '#FF4757', color: '#FF4757' }}>Email Us</a>
        </div>

        <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#2196F310', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
            <Phone size={32} color="#2196F3" />
          </div>
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Call Us</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>Speak directly with our support representatives.</p>
          <a href="tel:+918374277617" className="btn btn-outline" style={{ borderColor: '#2196F3', color: '#2196F3' }}>Call Now</a>
        </div>
      </div>

      <div style={{ marginTop: 'var(--spacing-xxl)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--text-secondary)' }}>
          <Clock size={20} />
          <span>Support Hours: Monday - Saturday | 9:00 AM - 7:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
