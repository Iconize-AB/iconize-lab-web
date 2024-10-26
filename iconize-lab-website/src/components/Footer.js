import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faWeixin } from '@fortawesome/free-brands-svg-icons';
import SubscriptionPopup from './SubscriptionPopup';
import './Footer.scss';

function Footer() {
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);

  const handleSubscribeClick = () => {
    setShowSubscriptionPopup(true);
  };

  return (
    <footer className="footer">
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
          <h3>ANSLUT</h3>
          <div className="connect-columns">
            <div className="newsletter">
              <h4>Nyhetsbrev</h4>
              <p>Håll dig uppdaterad. Få de senaste insikterna om tillväxt och transformation.</p>
              <button className="subscribe-btn" onClick={handleSubscribeClick}>PRENUMERERA</button>
            </div>
            <div className="contact-us">
              <h4>Kontakta oss</h4>
              <p>Behöver du hjälp med ett projekt, har du en fråga om anställning eller vårt arbete med ideella organisationer? Vi finns här.</p>
              <button className="connect-btn">ANSLUT</button>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <Link to="/services">Tjänster</Link>
            <Link to="/work">Arbete</Link>
            <Link to="/thinking">Tänkande</Link>
          </div>
          <div className="link-column">
            <Link to="/about">Om oss</Link>
            <Link to="/aaker">Aaker</Link>
            <Link to="/careers">Karriärer</Link>
          </div>
          <div className="link-column">
            <Link to="/privacy-policy">Integritetspolicy</Link>
            <Link to="/terms-of-use">Användarvillkor</Link>
            <a href="#" id="open_preferences_center">Uppdatera cookieinställningar</a>
          </div>
        </div>
      </div>
      {showSubscriptionPopup && <SubscriptionPopup showSubscriptionPopup={showSubscriptionPopup} onClose={() => setShowSubscriptionPopup(false)} />}
    </footer>
  );
}

export default Footer;
