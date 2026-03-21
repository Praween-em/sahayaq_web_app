import SEO from '../components/SEO';

const Providers = () => {
  return (
    <div className="container section-padding">
      <SEO 
        title="My Sahayaq Providers" 
        description="Join My Sahayaq as a service provider. Grow your business and reach more customers with our platform."
      />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">My Sahayaq Providers</h1>
          <p className="section-subtitle">Grow your business with India's most trusted service platform.</p>
        </div>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', marginBottom: '4rem', boxShadow: 'var(--shadow-premium)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Why Join Us?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            As a My Sahayaq provider, you get direct access to thousands of customers looking for your expertise. We handle the marketing, scheduling, and payments, so you can focus on what you do best—delivering exceptional service.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Consistent Demand</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Get regular service requests in your area directly through our app.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Guaranteed Payments</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Secure and timely payouts deposited directly to your bank account.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Flexible Schedule</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Be your own boss. Choose when and where you want to work.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Professional Support</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Dedicated assistance and resources to help you grow your business.</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to get started?</h3>
          <a href="https://play.google.com/store/apps/details?id=com.servicesapp" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: 'var(--primary-color)', color: 'white', padding: '1rem 2.5rem', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '1.125rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Providers;
