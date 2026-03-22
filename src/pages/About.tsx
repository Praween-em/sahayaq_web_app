import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="container section-padding">
      <SEO 
        title="About Us - My Sahayaq" 
        description="Learn about My Sahayaq (Sahayak)'s mission to redefine service excellence for millions of Indians and empower local professionals."
      />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Our Story</h1>
          <p className="section-subtitle">Redefining service excellence for millions of Indians.</p>
        </div>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', marginBottom: '4rem', boxShadow: 'var(--shadow-premium)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            My Sahayaq (popularly searched as Sahayak) was born out of a simple yet powerful vision: to bring order, trust, and professional standards to India's vast and fragmented service sector.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: '1.8' }}>
            We empower local professionals by giving them a digital platform to grow their business, while providing customers with a seamless, secure, and reliable way to get things done. At Ride Andhra Tech Solutions, we believe technology should work for everyone.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Integrity First</h3>
            <p style={{ color: 'var(--text-muted)' }}>We maintain the highest standards of verification. Every provider is a partner we trust with our own homes.</p>
          </div>
          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Innovation for All</h3>
            <p style={{ color: 'var(--text-muted)' }}>Our platform is designed to be inclusive, easy to use, and accessible to everyone, regardless of technical expertise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
