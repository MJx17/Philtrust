// src/main.jsx or src/App.jsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Main = () => {
  useEffect(() => {
    // Matomo Tag Manager
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    (function() {
      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.async = true; 
      g.src = 'http://localhost:8080/js/container_6MwLaDpK.js'; // Adjust the URL as needed
      s.parentNode.insertBefore(g, s);
    })();
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
