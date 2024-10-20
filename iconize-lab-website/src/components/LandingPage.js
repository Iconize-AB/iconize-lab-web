import React, { useEffect, useState } from 'react';
import './LandingPage.scss';
import InteractiveFormSection from './InteractiveFormSection';
import Bostrom from '../resources/bostrom.png';
import Gift from '../resources/gif-t.gif';
import CtFood from '../resources/ctfood.jpg';

function LandingPage() {
  const [activeElements, setActiveElements] = useState(0);

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

  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="content">
          <h1>Iconize Lab</h1>
          <p>
            En digital byrå som erbjuder expertis inom UX-design, webb- och applikationsutveckling, integrationer, varumärkesstrategi och e-handel. Våra erfarna konsulter har lång erfarenhet av att stötta små och medelstora företag i deras digitala utveckling.
          </p>
          <div className="cta-buttons">
            <a href="/about" className="cta-button">ABOUT ICONIZE LAB →</a>
            <a href="/services" className="cta-button">OUR SERVICES →</a>
          </div>
        </div>
        <div className="decorative-elements">
          {decorativeElements.map((type, index) => (
            <div 
              key={index} 
              className={`element ${type} ${index < activeElements ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>
      <InteractiveFormSection />
      <section className="case-study-section">
        <div className="case-study-content">
          <div className="case-study-text">
            <h2>BOSTRÖM ACCOUNTING</h2>
            <h3>150 % fler kunder - på 6 månader</h3>
            <a href="#learn-more" className="learn-more-link">LEARN MORE</a>
          </div>
          <div className="case-study-image">
            <img src={Bostrom} alt="JetBlue airplane on runway" loading="lazy" />
          </div>
        </div>
      </section>
      
      <section className="additional-cases">
        <div className="case-item">
          <img src={Gift} alt="The North Face" loading="lazy" />
          <div className="case-item-content">
            <h4>GIF-T</h4>
            <p>Gif-t is a way to quickly create a compressed and shareable gif from any public, online web page, presentation or video.</p>
          </div>
        </div>
        <div className="case-item">
          <img src={CtFood} alt="AB InBev" loading="lazy" />
          <div className="case-item-content">
            <h4>CT FOOD AB</h4>
            <p>CT Food is a market-leading import & distribution company in Sweden which brings the authentic flavours of South-East Asia to Scandinavia.</p>
          </div>
        </div>
        <a href="#view-all-cases" className="view-all-link">VIEW ALL CASES →</a>
      </section>
      
      <section className="testimonial">
        <div className="testimonial-content">
          <div className="client-info">
            <p>Daisy</p>
            <p>Chief Operating Officer</p>
          </div>
          <blockquote>
            "Iconize Lab is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking."
          </blockquote>
          <a href="#client-testimonials" className="testimonial-link">CLIENT TESTIMONIALS →</a>
        </div>
      </section>

      <section className="contact-us">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Let's grow together</h2>
            <p>Have questions about your next growth move? Prophet has answers.</p>
            <a href="/connect" className="contact-button">CONTACT US →</a>
          </div>
          <div className="decorative-plant">
            <svg viewBox="0 0 100 100" width="200" height="200">
              <rect x="45" y="0" width="10" height="100" fill="#000000" />
              <path d="M50 20 Q 60 10, 70 20" stroke="#4169E1" strokeWidth="10" fill="none" />
              <path d="M50 40 Q 60 30, 70 40" stroke="#4169E1" strokeWidth="10" fill="none" />
              <path d="M50 60 Q 60 50, 70 60" stroke="#4169E1" strokeWidth="10" fill="none" />
              <path d="M50 20 Q 40 10, 30 20" stroke="#6495ED" strokeWidth="10" fill="none" />
              <path d="M50 40 Q 40 30, 30 40" stroke="#6495ED" strokeWidth="10" fill="none" />
              <path d="M50 60 Q 40 50, 30 60" stroke="#6495ED" strokeWidth="10" fill="none" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
