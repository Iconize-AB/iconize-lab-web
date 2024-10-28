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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://api.buttondown.email/v1/subscribers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token YOUR_BUTTONDOWN_API_KEY'
          },
          body: JSON.stringify({
            email: email,
            metadata: {
              country: country,
            },
          }),
        }
      );

      if (response.ok) {
        console.log('Subscribed successfully');
        Cookies.set('subscriptionSubmitted', 'true', { expires: 30 });
        setIsVisible(false);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="subscription-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Gå med i vårt nyhetsbrev</h2>
        <p>Registrera dig och ta del av våra senaste tankar, insikter och strategier för att hjälpa ditt företag att växa bättre.</p>
        <form onSubmit={handleSubmit}>
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Land*</option>
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
            placeholder="E-post*"
            required
          />
          <button type="submit">Prenumerera</button>
        </form>
        <label>
          <input type="checkbox" /> Visa inte igen
        </label>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
