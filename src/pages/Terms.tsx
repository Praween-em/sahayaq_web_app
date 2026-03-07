const Terms = () => {
  return (
    <div className="container section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="section-title">Terms & Conditions</h1>
        <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)' }}>
          <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Last Updated: March 2025</p>
          
          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>1. Acceptance of Terms</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            By downloading or using the Sahayaq app or website, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>2. Use of Service</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            Sahayaq provides a platform where users can post service requirements and professionals can respond. We are not responsible for the actual services performed by the providers.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>3. User Obligations</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            Users must provide accurate information when posting requests or registering as providers. Misuse of the platform may lead to account suspension.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>4. Privacy</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            Your use of the service is also governed by our Privacy Policy. We collect and use data as described therein.
          </p>

          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>5. Contact Us</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at help.rideandhra@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
