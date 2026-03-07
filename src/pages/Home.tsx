import { ShieldCheck, Timer, IndianRupee, Download } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Connecting Services,<br />Empowering People</h1>
          <p className="hero-subtitle">
            Find verified professionals for all your needs. From home repairs to personal services, Sahayaq brings the experts to your doorstep.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
            <a href="#" className="btn btn-primary btn-lg">
              <Download size={20} />
              Sahaya App
            </a>
            <a href="#" className="btn btn-secondary btn-lg">
              <Download size={20} />
              Services App
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <h2 className="section-title">Why Choose Sahayaq?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
          <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#FF475710', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
              <ShieldCheck size={32} color="#FF4757" />
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Verified Professionals</h3>
            <p style={{ color: 'var(--text-secondary)' }}>All professionals are verified with Aadhaar Offline XML for your safety and peace of mind.</p>
          </div>

          <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#27AE6010', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
              <IndianRupee size={32} color="#27AE60" />
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Fair Pricing</h3>
            <p style={{ color: 'var(--text-secondary)' }}>No hidden charges. Negotiate directly with providers and pay for the value you receive.</p>
          </div>

          <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#1E90FF10', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)' }}>
              <Timer size={32} color="#1E90FF" />
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Instant Connections</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Post your requirement and get responses from nearby experts in minutes.</p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to get started?</h2>
          <p style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
            Download the app now and experience the future of service booking.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '60px', cursor: 'pointer' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
