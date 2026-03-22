import { useParams } from 'react-router-dom';
import { Download, CheckCircle2, Star, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

// Category Images (reusing from Home or importing as needed)
import electricianImg from '../assets/categories/electrician.png';
import plumberImg from '../assets/categories/plumber.png';
import carpenterImg from '../assets/categories/carpenter.png';
import painterImg from '../assets/categories/painters.png';
import salonImg from '../assets/categories/salons.png';
import cleaningImg from '../assets/categories/cleaning_hygiene.png';
import photoImg from '../assets/categories/photographs.png';
import chefImg from '../assets/categories/food_kitchen.png';

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

const Location = () => {
  const { city } = useParams<{ city: string }>();
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : 'Your City';

  return (
    <div>
      <SEO
        title={`Best Home & Business Services in ${cityName} - My Sahayaq`}
        description={`Connect with verified home and business service professionals in ${cityName}. My Sahayaq (popularly searched as My Sahayak) offers reliable electricians, plumbers, and more in ${cityName}.`}
        keywords={[
          `Home Services in ${cityName}`,
          `Electricians in ${cityName}`,
          `Plumbers in ${cityName}`,
          `My Sahayaq ${cityName}`,
          `My Sahayak ${cityName}`,
          'My Sahayaq',
          'My Sahayak',
          'Sahayaq',
          'Sahayak'
        ]}
      />

      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <MapPin size={16} />
            <span>Serving {cityName}</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Expert Services at Your <br /> Doorstep in {cityName}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            Experience top-tier home and business services in {cityName}. From expert electricians to professional plumbers, My Sahayaq (Sahayak) brings verified pros to you.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://play.google.com/store/apps/details?id=com.sahayaq" className="btn btn-primary">
              <Download size={20} />
              Book in {cityName}
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Popular Services in {cityName}</h2>
          <p className="section-subtitle">Trusted by thousands of households and businesses in {cityName}.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: 'var(--radius-md)', backgroundColor: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={cat.img} alt={`${cat.name} in ${cityName}`} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cat.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary-color)', fontSize: '0.8125rem', fontWeight: 600 }}>
                    <CheckCircle2 size={14} />
                    <span>Verified Pros in {cityName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Why {cityName} Trusts My Sahayaq</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
              We are committed to providing the safest and most reliable service network in {cityName}.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}><Star size={32} fill="var(--primary-color)" /></div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Local Experts</h4>
              <p style={{ color: 'var(--text-muted)' }}>We partner with the best professionals in {cityName} who know your local needs inside out.</p>
            </div>
            <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}><CheckCircle2 size={32} /></div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Verified in {cityName}</h4>
              <p style={{ color: 'var(--text-muted)' }}>Every professional in {cityName} undergoes Aadhaar and background verification for your safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding container">
        <div className="glass" style={{ background: 'linear-gradient(135deg, #078c34 0%, #4461e5 100%)', padding: '5rem', borderRadius: 'var(--radius-2xl)', textAlign: 'center', color: 'var(--white)' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Get Started in {cityName}</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto' }}>
            Join the thousands of happy customers in {cityName} who rely on My Sahayaq for their daily needs.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://play.google.com/store/apps/details?id=com.sahayaq">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt={`My Sahayaq App in ${cityName}`} style={{ height: '64px' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
