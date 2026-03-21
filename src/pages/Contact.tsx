import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="container section-padding">
      <SEO 
        title="Contact Us - My Sahayaq Support" 
        description="Get in touch with My Sahayaq's dedicated support team for any inquiries or feedback via WhatsApp, Email, or Phone."
      />
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">Our dedicated support team is here to assist you with any inquiries or feedback.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
          <div style={{ backgroundColor: '#25D36610', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <MessageSquare size={32} color="#25D366" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>WhatsApp</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>For immediate assistance and real-time support.</p>
          <a href="https://wa.me/918374277617" className="btn btn-outline" style={{ borderColor: '#25D366', color: '#25D366', width: '100%' }}>Message Now</a>
        </div>

        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
          <div style={{ backgroundColor: '#EF444410', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <Mail size={32} color="#EF4444" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Email Support</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Official inquiries and detailed support requests.</p>
          <a href="mailto:help.rideandhra@gmail.com" className="btn btn-outline" style={{ borderColor: '#EF4444', color: '#EF4444', width: '100%' }}>Send Email</a>
        </div>

        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
          <div style={{ backgroundColor: '#3B82F610', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <Phone size={32} color="#3B82F6" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Call Us</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Direct line to our customer success representatives.</p>
          <a href="tel:+918374277617" className="btn btn-outline" style={{ borderColor: '#3B82F6', color: '#3B82F6', width: '100%' }}>Call Support</a>
        </div>
      </div>

      <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          <Clock size={20} color="var(--primary-color)" />
          <span>Operational Hours: Mon - Sat, 9:00 AM — 7:00 PM (IST)</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
