import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';

const Main = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    // Check if consent has been given before loading Google Analytics
    if (isConsentGiven) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HK65HWZG8F';
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-HK65HWZG8F'); // Initialize Google Analytics
    }
  }, [isConsentGiven]);

  const handleConsent = () => {
    setIsConsentGiven(true);
  };

  const handleDecline = () => {
    // Handle user decline (e.g., close modal, show message)
  };

  return (
    <>
      {!isConsentGiven && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cookie Consent</h2>
            <p>
              We use cookies to improve your experience. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="modal-buttons">
              <button onClick={handleConsent}>Accept</button>
              <button onClick={handleDecline}>Decline</button>
            </div>
          </div>
        </div>
      )}
      <App />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
