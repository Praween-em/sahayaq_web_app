import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="container section-padding">
      <SEO 
        title="Privacy Policy - My Sahayaq" 
        description="Read My Sahayaq's privacy policy to understand how we collect, use, and protect your personal information."
      />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-subtitle">Your trust is our most valuable asset.</p>
        </div>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-premium)' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>1. Information Collection</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              We collect information necessary to provide and improve our services, including contact details, location data, and identity verification documents for professionals.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>2. Data Usage</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Your data is used to facilitate service bookings, enhance platform security, and provide personalized support. We never sell your personal information to third parties.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>3. Data Security</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              We employ industry-standard encryption and security protocols to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>4. Your Rights</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              You have the right to access, correct, or request the deletion of your personal data at any time through the application settings or by contacting our support team.
            </p>
          </section>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at help.rideandhra@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
