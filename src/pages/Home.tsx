import { Download, CheckCircle2, Users, Briefcase, Star } from 'lucide-react';
import SEO from '../components/SEO';

// Category Images
import electricianImg from '../assets/categories/electrician.png';
import plumberImg from '../assets/categories/plumber.png';
import carpenterImg from '../assets/categories/carpenter.png';
import painterImg from '../assets/categories/painters.png';
import salonImg from '../assets/categories/salons.png';
import cleaningImg from '../assets/categories/cleaning_hygiene.png';
import photoImg from '../assets/categories/photographs.png';
import chefImg from '../assets/categories/food_kitchen.png';

// Decoration Images
import deco2 from '../assets/decorations/Sayayaq2.png';
import deco5 from '../assets/decorations/Sayayaq5.png';
import deco6 from '../assets/decorations/Sayayaq6.png';
import deco7 from '../assets/decorations/Sayayaq7.png';
import deco8 from '../assets/decorations/Sayayaq8.png';
import decoRemoveBg from '../assets/decorations/Sayayaq2-removebg-preview.png';

const decorations = [deco2, deco5, deco6, deco7, deco8, decoRemoveBg];

const categories = [
  { name: 'Electricians', img: electricianImg, color: '#FF9F43' },
  { name: 'Plumbers', img: plumberImg, color: '#0fbcf9' },
  { name: 'Carpenters', img: carpenterImg, color: '#f53b57' },
  { name: 'Painters', img: painterImg, color: '#3c40c6' },
  { name: 'Salon & Spa', img: salonImg, color: '#ef5777' },
  { name: 'Cleaning', img: cleaningImg, color: '#05c46b' },
  { name: 'Photography', img: photoImg, color: '#575fcf' },
  { name: 'Chefs & Cooks', img: chefImg, color: '#ffa801' },
];

const Home = () => {
  return (
    <div>
      <SEO
        title="My Sahayaq - Expert Home & Business Services"
        description="Connect with verified home and business service professionals in India. My Sahayaq (also known as My Sahayak) offers reliable services with Aadhaar-verified pros."
        keywords={['My Sahayak', 'My Sahayaq', 'Sahayak', 'Sahayaq', 'Home Services', 'Expert Services']}
      />
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <Star size={16} fill="var(--primary-dark)" />
            <span>India's Most Trusted Service Network</span>
          </div>
          <h1 className="hero-title">Your Gateway to<br />Expert Services</h1>
          <p className="hero-subtitle">
            Experience a new era of home and business services. My Sahayaq (also searched as My Sahayak) connects you with top-tier, verified professionals across 50+ categories with just a few taps.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://play.google.com/store/apps/details?id=com.sahayaq" className="btn btn-primary">
              <Download size={20} />
              Get My Sahayaq App
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.servicesapp" className="btn btn-secondary">
              <Briefcase size={20} />
              Join as Provider
            </a>
          </div>
        </div>
      </section>


      {/* Categories Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Popular Categories</h2>
          <p className="section-subtitle">Discover our wide range of professional services tailored for your unique needs.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: 'var(--radius-md)', backgroundColor: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={cat.img} alt={cat.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cat.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary-color)', fontSize: '0.8125rem', fontWeight: 600 }}>
                    <CheckCircle2 size={14} />
                    <span>Verified Professionals</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorations Marquee */}
      <section className="decoration-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <Star size={16} fill="var(--primary-dark)" />
          <span>Our Services</span>
          <Star size={16} fill="var(--primary-dark)" />
        </div>
        <div className="marquee">
          <div className="marquee-content">
            {[...decorations, ...decorations, ...decorations, ...decorations].map((img, idx) => (
              <div key={idx} className="marquee-item">
                <img src={img} alt={`Decoration ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="grid-responsive-2">
            <div>
              <h2 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '2rem', lineHeight: '1.2' }}>Why Businesses & Households Trust My Sahayaq</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}> Verified Professionals</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Security is our priority. Every pro on our platform undergoes a rigorous offline XML Aadhaar verification.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Quality Guaranteed</h4>
                    <p style={{ color: 'var(--text-muted)' }}>We stand by our services. Only the highest-rated professionals are retained in our network.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '200px', height: '200px', background: 'var(--primary-light)', borderRadius: '50%', zIndex: 0, filter: 'blur(40px)' }}></div>
              <div className="glass" style={{ position: 'relative', zIndex: 1, padding: '2rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-premium)' }}>
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Team" style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }} />
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"Sahayaq has transformed how we find reliable help. The verification process gives us complete peace of mind."</p>
                <div style={{ marginTop: '1rem', fontWeight: 700 }}>— Product Team, My Sahayaq</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding container">
        <div className="glass padding-responsive-large" style={{ background: 'linear-gradient(135deg, #078c34 0%, #4461e5 100%)', borderRadius: 'var(--radius-2xl)', textAlign: 'center', color: 'var(--white)' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Experience the Difference Today</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Download the My Sahayaq app and join the revolution in service delivery. Available now on Google Play Store.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://play.google.com/store/apps/details?id=com.sahayaq">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '64px', cursor: 'pointer' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
