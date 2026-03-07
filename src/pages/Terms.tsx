const Terms = () => {
  return (
    <div className="container section-padding">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Terms of Service</h1>
          <p className="section-subtitle">Last Updated: March 2025</p>
        </div>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-premium)' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>1. Acceptance of Terms</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              By accessing and using the Sahayaq application and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>2. Description of Service</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Sahayaq is a platform that connects customers with independent service professionals. We provide the technology to facilitate these connections but do not directly provide the services ourselves.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>3. User Verification</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              We implement rigorous verification processes, including Aadhaar Offline XML, for service providers. However, users are encouraged to exercise their own judgement when engaging with professionals.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-color)' }}>4. Liability</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Ride Andhra Tech Solutions shall not be liable for any direct, indirect, or incidental damages resulting from the use or inability to use our platform or services.
            </p>
          </section>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              If you have any questions or suggestions about our Terms of Service, do not hesitate to contact us at help.rideandhra@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
