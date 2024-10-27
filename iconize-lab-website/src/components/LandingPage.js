import React, { useEffect, useState } from 'react';
import './LandingPage.scss';
import InteractiveFormSection from './InteractiveFormSection';
import ServicesGrid from './ServicesGrid';
import Bostrom from '../resources/bostrom.png';
import Gift from '../resources/gif-t.gif';
import CtFood from '../resources/ctfood.jpg';
import IconizeLogo from '../resources/iconize-new.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [activeElements, setActiveElements] = useState(0);
  const [clickedElements, setClickedElements] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElements(prev => {
        if (prev < 16) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const decorativeElements = [
    'blue', 'green', 'outline', 'white',
    'white', 'blue', 'green', 'outline',
    'outline', 'white', 'blue', 'green',
    'green', 'outline', 'white', 'blue'
  ];

  const handleElementClick = (index) => {
    setClickedElements(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="content">
          <h1>Iconize Lab</h1>
          <p>
            En digital byrå som erbjuder expertis inom UX-design, webb- och applikationsutveckling, integrationer, varumärkesstrategi och e-handel. Våra erfarna konsulter har lång erfarenhet av att stötta små och medelstora företag i deras digitala utveckling.
          </p>
          <div className="cta-buttons">
            <a href="/about" className="cta-button">OM ICONIZE LAB →</a>
            <a href="/services" className="cta-button">VÅRA TJÄNSTER →</a>
          </div>
        </div>
        <div className="decorative-elements">
          {decorativeElements.map((type, index) => (
            <div 
              key={index} 
              className={`element ${type} ${index < activeElements ? 'active' : ''} ${clickedElements[index] ? 'clicked' : ''}`}
              onClick={() => handleElementClick(index)}
            />
          ))}
        </div>
      </section>
      <InteractiveFormSection />
      <section className="case-study-section">
        <div className="case-study-content">
          <div className="case-study-text">
            <h2>BOSTROM ACCOUNTING</h2>
            <h3>150 % fler kunder - på 6 månader</h3>
            <a href="#learn-more" className="learn-more-link">LÄS MER</a>
          </div>
          <div className="case-study-image">
            <img src={Bostrom} alt="JetBlue-flygplan på landningsbanan" loading="lazy" />
          </div>
        </div>
      </section>
      
      <section className="client-cases">
        <h2>Our Client Cases</h2>
        <div className="cases-container">
          <div className="case-item">
            <div className="case-header">
              <img src={IconizeLogo} alt="Iconize Lab logo" className="iconize-logo" />
              <span className="logo-separator">×</span>
              <span className="client-name">GIF-T</span>
            </div>
            <div className="case-content">
              <img src={Gift} alt="GIF-T case study" className="case-image" />
              <h3>GIF-T</h3>
              <p>Snabb och komprimerad GIF-skapare för webbsidor, presentationer och videos.</p>
              <div className="tags">
                <span className="tag">Webdevelopment</span>
                <span className="tag">UX Design</span>
              </div>
            </div>
            <Link to="/case-studies/gif-t" className="case-link">Läs mer</Link>
          </div>
          <div className="case-item">
            <div className="case-header">
              <img src={IconizeLogo} alt="Iconize Lab logo" className="iconize-logo" />
              <span className="logo-separator">×</span>
              <span className="client-name">CT FOOD AB</span>
            </div>
            <div className="case-content">
              <img src={CtFood} alt="CT Food case study" className="case-image" />
              <h3>CT FOOD AB</h3>
              <p>Marknadsledande import och distribution av autentiska smaker från Sydostasien.</p>
              <div className="tags">
                <span className="tag">E-commerce</span>
                <span className="tag">ERP</span>
              </div>
            </div>
            <Link to="/case-studies/ct-food" className="case-link">Läs mer</Link>
          </div>
          <div className="case-item">
            <div className="case-header">
              <img src={IconizeLogo} alt="Iconize Lab logo" className="iconize-logo" />
              <span className="logo-separator">×</span>
              <span className="client-name">BOSTROM ACCOUNTING</span>
            </div>
            <div className="case-content">
              <img src={Bostrom} alt="Bostrom Accounting case study" className="case-image" />
              <h3>BOSTROM ACCOUNTING</h3>
              <p>150% kundökning på bara 6 månader.</p>
              <div className="tags">
                <span className="tag">Webdevelopment</span>
                <span className="tag">Digital Marketing</span>
              </div>
            </div>
            <Link to="/case-studies/bostrom" className="case-link">Läs mer</Link>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial-content">
          <div className="client-info">
            <p>Daisy</p>
            <p>Operativ chef</p>
          </div>
          <blockquote>
            "Iconize Lab hjälpte oss med vår digitala resa. De var professionella, flexibla och hjälpsamma. De var till stor hjälp med vårt skifte av affärssystem och e-handel, samt integrationen mellan systemen. Vi rekommenderar starkt Iconize Lab!"
          </blockquote>
          <a href="#client-testimonials" className="testimonial-link">KUNDRECENSIONER →</a>
        </div>
      </section>
      <section className="contact-us">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Låt oss växa tillsammans</h2>
            <p>Har du frågor om ditt nästa tillväxtsteg? Iconize Lab har svaren.</p>
            <a href="/connect" className="contact-button">KONTAKTA OSS →</a>
          </div>
          <div className="decorative-plant">
            <svg viewBox="0 0 100 100" width="200" height="200">
              <rect x="45" y="0" width="10" height="100" fill="#000000" />
              <path d="M50 20 Q 60 10, 70 20" stroke="#6200ea" strokeWidth="10" fill="none" />
              <path d="M50 40 Q 60 30, 70 40" stroke="#6200ea" strokeWidth="10" fill="none" />
              <path d="M50 60 Q 60 50, 70 60" stroke="#6200ea" strokeWidth="10" fill="none" />
              <path d="M50 20 Q 40 10, 30 20" stroke="#6200ea" strokeWidth="10" fill="none" />
              <path d="M50 40 Q 40 30, 30 40" stroke="#6200ea" strokeWidth="10" fill="none" />
              <path d="M50 60 Q 40 50, 30 60" stroke="#6200ea" strokeWidth="10" fill="none" />
            </svg>
          </div>
        </div>
      </section>
      
      <section className="services-section">
        <div className="services-content">
          <h2>Our Services</h2>
          <p>Iconize Lab brings an integrated portfolio of consulting, experience and creative expertise to every client engagement.</p>
          <ServicesGrid showCapabilities={false} limit={4} />
          <Link to="/services" className="cta-button">UTFORSKA VÅRA TJÄNSTER →</Link>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
