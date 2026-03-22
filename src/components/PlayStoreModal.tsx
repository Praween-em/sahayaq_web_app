import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import appLogo from '../assets/logos/Sayayaq2.png';

interface PlayStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlayStoreModal: React.FC<PlayStoreModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 9999 }}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()} style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <button className="modal-close" onClick={onClose} style={{ zIndex: 10, position: 'absolute', top: '15px', right: '15px' }}>
          <X size={24} />
        </button>
        
        <div style={{
          display: 'flex',
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${activeTab * 50}%)`,
          width: '200%'
        }}>
          {/* Slide 1: User App */}
          <div style={{ width: '50%', padding: '2.5rem', flexShrink: 0 }}>
            <div style={{ 
              width: '80px', height: '80px', backgroundColor: 'var(--primary-light)', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 1.5rem', overflow: 'hidden'
            }}>
              <img src={appLogo} alt="My Sahayaq App Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            </div>
            
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
              Get the My Sahayaq App
            </h2>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6', textAlign: 'center' }}>
              For the best experience and to book services instantly, download our app from the Google Play Store.
            </p>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.sahayaq" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download User App
            </a>
          </div>

          {/* Slide 2: Provider App */}
          <div style={{ width: '50%', padding: '2.5rem', flexShrink: 0 }}>
            <div style={{ 
              width: '80px', height: '80px', backgroundColor: '#e0f2fe', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 1.5rem', overflow: 'hidden'
            }}>
              <img src={appLogo} alt="My Sahayaq Provider App Logo" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            </div>
            
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
              My Sahayaq Providers
            </h2>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6', textAlign: 'center' }}>
              Join our network of verified professionals. Download the provider app to start getting leads and grow your business.
            </p>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.servicesapp" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '1rem', backgroundColor: '#0ea5e9', border: 'none', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download Provider App
            </a>
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', paddingBottom: '1.5rem' }}>
          <button 
            onClick={() => setActiveTab(0)}
            style={{ 
              width: '10px', height: '10px', borderRadius: '50%', 
              backgroundColor: activeTab === 0 ? 'var(--primary-color)' : '#cbd5e1',
              border: 'none', cursor: 'pointer', padding: 0, transition: 'background-color 0.2s'
            }}
            aria-label="Show My Sahayaq App"
          />
          <button 
            onClick={() => setActiveTab(1)}
            style={{ 
              width: '10px', height: '10px', borderRadius: '50%', 
              backgroundColor: activeTab === 1 ? '#0ea5e9' : '#cbd5e1',
              border: 'none', cursor: 'pointer', padding: 0, transition: 'background-color 0.2s'
            }}
            aria-label="Show Provider App"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayStoreModal;
