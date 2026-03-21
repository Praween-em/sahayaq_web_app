import { Trash2, ShieldAlert, Clock, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const DeleteAccount = () => {
  return (
    <div className="container section-padding">
      <SEO 
        title="Delete Account - My Sahayaq" 
        description="Manage your My Sahayaq account deletion request process securely."
      />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Delete Account</h1>
          <p className="section-subtitle">We're sorry to see you go. Here's how to manage your account deletion.</p>
        </div>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-premium)' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: '#EF444410', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trash2 size={24} color="#EF4444" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: 'var(--primary-color)' }}>Request Process</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>
              To ensure the security of your data and prevent unauthorized deletions, account removal requests are handled manually by our security team. You can initiate this process directly from the **Profile Settings** within the My Sahayaq App or by contacting our support team.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem', backgroundColor: '#FFF5F5', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid #FED7D7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ShieldAlert size={28} color="#C53030" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#C53030' }}>Important Disclaimer</h3>
            </div>
            <p style={{ color: '#742A2A', lineHeight: '1.7', fontWeight: 600 }}>
              Once a deletion request is submitted, our team will verify the request. Please note that permanent data deletion from our database may take up to **45 working days** for security, auditing, and compliance reasons.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--primary-light)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={24} color="var(--primary-color)" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>What Happens Next?</h2>
            </div>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Your profile will be deactivated within 48 hours of verification.</li>
              <li>You will no longer receive notifications or marketing communications.</li>
              <li>All personal identifiers, including Aadhaar verification records, will be purged after the 45-day retention period.</li>
              <li>Active service history may be retained in an anonymized format for business records as per local laws.</li>
            </ul>
          </section>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem', marginTop: '2.5rem', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Need assistance?</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                <Mail size={18} color="var(--primary-color)" />
                <span>help.rideandhra@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
