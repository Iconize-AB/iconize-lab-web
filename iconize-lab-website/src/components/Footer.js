import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <h3>SOCIAL MEDIA</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Threads"><i className="fab fa-threads"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="WeChat"><i className="fab fa-weixin"></i></a>
          </div>
        </div>

        <div className="connect">
          <h3>CONNECT</h3>
          <div className="connect-columns">
            <div className="newsletter">
              <h4>Newsletter</h4>
              <p>Stay in the loop. Get the latest insights on growth and transformation.</p>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
            <div className="contact-us">
              <h4>Contact Us</h4>
              <p>Need help with a project, have a question about employment or our work with nonprofits? We're here.</p>
              <button className="connect-btn">CONNECT</button>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© PROPHET 2024</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
