import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/style.scss"

const Main = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);

    // Require user tracking consent before processing data
    _mtm.push(['requireConsent']);

    // Load the Matomo script
    var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://cdn.matomo.cloud/philtrust.matomo.cloud/container_2X8pj0Zg.js';
    s.parentNode.insertBefore(g, s);
  }, []);

  useEffect(() => {
    if (isConsentGiven) {
      // Grant consent if the user has given it
      var _mtm = (window._mtm = window._mtm || []);
      _mtm.push(['trackPageView']); // Track page views automatically
    }
  }, [isConsentGiven]);

  const handleConsent = () => {
    setIsConsentGiven(true);
  };

  const handleDecline = () => {
    // Handle user decline
  };

  // Function to log user actions and send them to Matomo
  const logUserAction = (action) => {
    if (isConsentGiven) {
      var _mtm = (window._mtm = window._mtm || []);
      _mtm.push(['trackEvent', 'User Action', action]); // Send action to Matomo
    }
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
      <App logUserAction={logUserAction} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
