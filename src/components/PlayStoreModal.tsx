import React from 'react';
import { X, Smartphone, Download } from 'lucide-react';

interface PlayStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlayStoreModal: React.FC<PlayStoreModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div style={{ 
          width: '80px', 
          height: '80px', 
          backgroundColor: 'var(--primary-light)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1.5rem',
          color: 'var(--primary-color)'
        }}>
          <Smartphone size={40} />
        </div>
        
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
          Get the My Sahayaq App
        </h2>
        
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
          For the best experience and to book services instantly, download our app from the Google Play Store.
        </p>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.sahayaq" 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '1rem' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={20} />
          Download from Play Store
        </a>
        
        <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-light)' }}>
          Scan QR code or click build for Android
        </p>
      </div>
    </div>
  );
};

export default PlayStoreModal;
