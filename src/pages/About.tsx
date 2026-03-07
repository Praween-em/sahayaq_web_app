const About = () => {
  return (
    <div className="container section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="section-title">About Sahayaq</h1>
        <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
            Sahayaq is built with a vision to organize India's fragmented service sector. We aim to provide every consumer with easy access to verified professionals, while helping service providers grow their businesses through technology.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            We believe in transparency, reliability, and empowerment. By bridging the gap between talent and need, we create a ecosystem where quality service is just a tap away.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Quality First</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We prioritize quality in every interaction. Our verification process ensures that only the best professionals reach you.</p>
          </div>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Community Driven</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Sahayaq is more than just an app; it's a community of service seekers and providers working together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
