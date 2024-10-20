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
          <h3>SOCIAL MEDIA</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.linkedin.com/company/iconize-lab" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>

        <div className="connect">
          <h3>CONNECT</h3>
          <div className="connect-columns">
            <div className="newsletter">
              <h4>Newsletter</h4>
              <p>Stay in the loop. Get the latest insights on growth and transformation.</p>
              <button className="subscribe-btn" onClick={handleSubscribeClick}>SUBSCRIBE</button>
            </div>
            <div className="contact-us">
              <h4>Contact Us</h4>
              <p>Need help with a project, have a question about employment or our work with nonprofits? We're here.</p>
              <button className="connect-btn">CONNECT</button>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/thinking">Thinking</Link>
          </div>
          <div className="link-column">
            <Link to="/about">About</Link>
            <Link to="/aaker">Aaker</Link>
            <Link to="/careers">Careers</Link>
          </div>
          <div className="link-column">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <a href="#" id="open_preferences_center">Update cookies preferences</a>
          </div>
        </div>
      </div>
      {showSubscriptionPopup && <SubscriptionPopup showSubscriptionPopup={showSubscriptionPopup} onClose={() => setShowSubscriptionPopup(false)} />}
    </footer>
  );
}

export default Footer;
