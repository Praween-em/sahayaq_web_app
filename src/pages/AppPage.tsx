import { ShieldCheck, Smartphone, Search, Zap, Star, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const AppPage = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: "Aadhaar Verified Pros",
      description: "Safety first. Every professional on My Sahayaq (My Sahayak) is XML Aadhaar verified for your peace of mind."
    },
    {
      icon: <Search className="text-secondary" size={32} />,
      title: "50+ Categories",
      description: "From electricians and plumbers to salon services and chefs, find everything in one app."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Instant Connection",
      description: "Get connected with the nearest available professional in minutes, not hours."
    },
    {
      icon: <Star className="text-orange-500" size={32} />,
      title: "Rated & Reviewed",
      description: "Choose based on real reviews and ratings from other users in your community."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Download & Sign Up",
      description: "Get the My Sahayak app from the Play Store and create your account with just your phone number."
    },
    {
      number: "02",
      title: "Select Service",
      description: "Browse through categories or search for the specific service you need at home."
    },
    {
      number: "03",
      title: "Book Professional",
      description: "Select a professional based on their profile, rating, and distance from you."
    },
    {
      number: "04",
      title: "Job Completion",
      description: "Pay securely after the work is done and leave a rating for the service."
    }
  ];

  return (
    <div className="app-page">
      <SEO 
        title="My Sahayak App - Features & Process | India's Trusted Digital Sahayak"
        description="Learn about the features and simple process of the My Sahayak App. Connect with verified service professionals in India for all your home and business needs."
        keywords={['My Sahayak App', 'Sahayak Features', 'Digital Sahayak Process', 'My Sahayaq App Download', 'Verified Sahayak India', 'Home Services App India']}
      />

      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <Smartphone size={16} fill="var(--primary-dark)" />
            <span>The Digital Sahayak Revolution</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>One App for Every <br />Essential Service</h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            Experience the future of home services with My Sahayaq. Our app brings trust, speed, and quality to your doorstep with Aadhaar-verified professionals.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
             <a href="https://play.google.com/store/apps/details?id=com.sahayaq">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '70px', cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Why Use My Sahayak App?</h2>
            <p className="section-subtitle">Designed to make your life simpler and more secure.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {features.map((feature, idx) => (
              <div key={idx} className="glass padding-responsive-small" style={{ borderRadius: 'var(--radius-xl)', height: '100%', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title">Simple 4-Step Process</h2>
            <p className="section-subtitle">How to get things done with the My Sahayak App.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', position: 'relative' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}>
                  {step.number}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                   <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--primary-color)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem', fontWeight: 800, boxShadow: 'var(--shadow-md)' }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="section-padding bg-dark" style={{ color: 'white', borderRadius: 'var(--radius-3xl)', margin: '0 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>Safety You Can Trust</h2>
              <p style={{ fontSize: '1.125rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.8' }}>
                We understand that inviting someone into your home requires trust. That's why we built the most secure verification system in India.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 className="text-primary" size={24} />
                   <span>Multi-layer Aadhaar XML Verification</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 className="text-primary" size={24} />
                   <span>Police Background Check Support</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 className="text-primary" size={24} />
                   <span>Real-time In-app SOS Tracking</span>
                </li>
              </ul>
            </div>
            <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-2xl)', background: 'rgba(255,255,255,0.05)' }}>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Becoming a Sahayak Pro?</h3>
               <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Join thousands of professionals earning more with digital trust and verified identities.</p>
               <a href="https://play.google.com/store/apps/details?id=com.servicesapp" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                 Register as Provider
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
           <div className="glass padding-responsive-large" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, #4f46e5 100%)', borderRadius: 'var(--radius-3xl)', textAlign: 'center', color: 'white' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Download My Sahayak App</h2>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                Start your journey towards a more organized and secure home service experience today.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="https://play.google.com/store/apps/details?id=com.sahayaq">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '70px', cursor: 'pointer' }} />
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AppPage;
