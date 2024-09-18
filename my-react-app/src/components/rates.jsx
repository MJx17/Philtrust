import React, { useEffect, useState } from 'react';
import '../styles/home.scss'; // Import the CSS file for styling

const Ticker = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key if needed
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; 

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setRates([
          { currency: 'USD', rate: data.rates.USD },
          { currency: 'EUR', rate: data.rates.EUR },
          { currency: 'JPY', rate: data.rates.JPY },
          { currency: 'GBP', rate: data.rates.GBP },
          { currency: 'PHP', rate: data.rates.PHP },
        ]);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch currency rates');
        setLoading(false);
      });
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const duplicatedRates = [...rates, ...rates, ...rates, ...rates, ...rates, ...rates]; // Duplicate rates for seamless scrolling

  return (
    <div className="ticker-wrapper">
      <div className="ticker-header">
        <h2>Currency Rates</h2>
        <span>{currentDate}</span>
      </div>
      <div className="ticker-container">
        <div className="ticker">
          {loading && <div>Loading rates...</div>}
          {error && <div>{error}</div>}
          {!loading && !error && duplicatedRates.map((rate, index) => (
            <div key={index} className="ticker-item">
              {rate.currency}: {rate.rate.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
