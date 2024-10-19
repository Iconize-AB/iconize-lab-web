import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './SubscriptionPopup.scss';

const SubscriptionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const hasSubmitted = Cookies.get('subscriptionSubmitted');
    if (!hasSubmitted) {
      const timer = setTimeout(() => setIsVisible(true), 5000); // Show popup after 5 seconds
      return () => clearTimeout(timer);
    }
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
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            {/* Add more countries as needed */}
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
