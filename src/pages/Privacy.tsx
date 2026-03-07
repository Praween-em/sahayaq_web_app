const Privacy = () => {
  return (
    <div className="container section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)' }}>
          <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Last Updated: March 2025</p>
          
          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>1. Information Collection</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            We collect personal information such as name, phone number, and location to provide and improve our services.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>2. How We Use Data</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            The data we collect is used to connect service seekers with providers, verify identities, and facilitate communication.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>3. Data Security</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            We implement security measures to protect your information. Your contact details are only shared with a limited number of verified providers.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>4. Third-Party Services</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            We may use third-party services for analytics and verification purposes. These services have their own privacy policies.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>5. Your Rights</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            You have the right to access, correct, or delete your personal data. Contact us for any privacy-related requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
