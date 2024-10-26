import React, { useEffect, useState } from 'react';
import './LandingPage.scss';
import InteractiveFormSection from './InteractiveFormSection';
import ServicesGrid from './ServicesGrid';
import Bostrom from '../resources/bostrom.png';
import Gift from '../resources/gif-t.gif';
import CtFood from '../resources/ctfood.jpg';
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
            <h2>BOSTRÖM REDOVISNING</h2>
            <h3>150 % fler kunder - på 6 månader</h3>
            <a href="#learn-more" className="learn-more-link">LÄS MER</a>
          </div>
          <div className="case-study-image">
            <img src={Bostrom} alt="JetBlue-flygplan på landningsbanan" loading="lazy" />
          </div>
        </div>
      </section>
      
      <section className="additional-cases">
        <div className="case-item">
          <img src={Gift} alt="The North Face" loading="lazy" />
          <div className="case-item-content">
            <h4>GIF-T</h4>
            <p>Gif-t är ett sätt att snabbt skapa en komprimerad och delbar gif från vilken offentlig webbsida, presentation eller video som helst.</p>
          </div>
        </div>
        <div className="case-item">
          <img src={CtFood} alt="AB InBev" loading="lazy" />
          <div className="case-item-content">
            <h4>CT FOOD AB</h4>
            <p>CT Food är ett marknadsledande import- och distributionsföretag i Sverige som för de autentiska smakerna från Sydostasien till Skandinavien.</p>
          </div>
        </div>
        <a href="#view-all-cases" className="view-all-link">SE ALLA CASE →</a>
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
