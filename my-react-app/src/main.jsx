// src/main.jsx or src/App.jsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Main = () => {
  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/philtrust.matomo.cloud/container_2X8pj0Zg.js'; s.parentNode.insertBefore(g,s);
   }, [])

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
