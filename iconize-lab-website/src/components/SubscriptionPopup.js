import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './SubscriptionPopup.scss';

const SubscriptionPopup = ({ showSubscriptionPopup, onClose }) => {
  const [isVisible, setIsVisible] = useState(showSubscriptionPopup || false);
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const hasSubmitted = Cookies.get('subscriptionSubmitted');
    if (!hasSubmitted) {
      const timer = setTimeout(() => setIsVisible(true), 5000); // Show popup after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Fetch countries from API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data
          .map(country => ({
            code: country.cca2,
            name: country.name.common
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sortedCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted:', { email, country });
    Cookies.set('subscriptionSubmitted', 'true', { expires: 30 }); // Cookie expires in 30 days
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="subscription-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Join our mailing list</h2>
        <p>Sign up and receive our latest thinking, insights and strategies to help your business grow better.</p>
        <form onSubmit={handleSubmit}>
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Country*</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <label>
          <input type="checkbox" /> Do not show again
        </label>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
