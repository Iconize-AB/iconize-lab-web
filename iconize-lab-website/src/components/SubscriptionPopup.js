import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './SubscriptionPopup.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionPopup = ({ showSubscriptionPopup, onClose }) => {
  const [isVisible, setIsVisible] = useState(showSubscriptionPopup || false);
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasSubmitted = Cookies.get('subscriptionSubmitted');
    const hasDismissed = Cookies.get('popupDismissed');
    
    if (!hasSubmitted && !hasDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 5000);
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
      const response = await fetch('https://formspree.io/f/mvgogrno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          country: country,
        })
      });

      if (response.ok) {
        toast.success('Tack för din prenumeration!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        Cookies.set('subscriptionSubmitted', 'true', { expires: 30 });
        setIsVisible(false);
        setEmail('');
        setCountry('');
      } else {
        throw new Error('Prenumerationen misslyckades');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel vid prenumerationen. Vänligen försök igen.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Save preference if "don't show again" is checked
    if (dontShowAgain) {
      Cookies.set('popupDismissed', 'true', { expires: 365 }); // Cookie expires in 1 year
    }
  };

  if (!isVisible) return null;

  return (
    <div className="subscription-popup">
      <ToastContainer />
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
          <input 
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
          /> Visa inte igen
        </label>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
