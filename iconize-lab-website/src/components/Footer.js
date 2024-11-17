import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.scss';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mvgogrno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, type: 'newsletter-subscription' })
      });

      if (response.ok) {
        toast.success('Tack för din prenumeration!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Vänligen försök igen.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <footer className="footer">
      <ToastContainer />
      <div className="footer-content">
        <div className="social-media">
          <h3>SOCIALA MEDIER</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.linkedin.com/company/iconize-lab" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>

        <div className="connect">
          <div className="connect-columns">
            <div className="newsletter">
              <h4>Nyhetsbrev</h4>
              <p>Håll dig uppdaterad. Få de senaste insikterna om tillväxt och transformation.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Din e-postadress"
                  required
                />
                <button type="submit">PRENUMERERA →</button>
              </form>
            </div>
            <div className="contact-us">
              <h4>Kontakta oss</h4>
              <p>Behöver du hjälp med ett projekt, har du en fråga om anställning eller om vårt arbete? Vi finns här.</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <Link to="/services">Tjänster</Link>
            <Link to="/services">Arbete</Link>
            <Link to="/thinking">Tänkande</Link>
          </div>
          <div className="link-column">
            <Link to="/about">Om oss</Link>
          </div>
          <div className="link-column">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.cookieconsent.openPreferencesCenter();
            }}>Uppdatera cookieinställningar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
