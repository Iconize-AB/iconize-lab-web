import React, { useEffect, useState } from 'react';
import './LandingPage.scss';
import InteractiveFormSection from './InteractiveFormSection';
import ServicesGrid from './ServicesGrid';
import { Link } from 'react-router-dom';
import RubiksCube from './RubiksCube';
import Promo from '../resources/promo.png';
import { getAllArticles } from '../utils/contentfulClient';

function LandingPage() {
  const [activeElements, setActiveElements] = useState(0);
  const [clickedElements, setClickedElements] = useState({});
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const [articles, setArticles] = useState([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const testimonialSection = document.querySelector('.testimonials-section');
    if (testimonialSection) {
      observer.observe(testimonialSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      const articleData = await getAllArticles();
      setArticles(articleData);
    };
    loadArticles();
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
          {/* {decorativeElements.map((type, index) => (
            <div 
              key={index} 
              className={`element ${type} ${index < activeElements ? 'active' : ''} ${clickedElements[index] ? 'clicked' : ''}`}
              onClick={() => handleElementClick(index)}
            />
          ))} */}
          <RubiksCube size={200} />
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
            <img src={Promo} alt="Digitala lösningar och varumärkesstrategi" loading="lazy" />
          </div>
        </div>
      </section>
      
      <section className="services-section">
        <div className="services-content">
          <h2>Våra tjänster</h2>
          <p>[i]conize lab erbjuder en bred portfolio av tjänster som hjälper dig nå dina mål</p>
          <ServicesGrid showCapabilities={false} limit={4} />
          <Link to="/services" className="cta-button">UTFORSKA VÅRA TJÄNSTER →</Link>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2>Vad våra kunder säger</h2>
            <p>Vi har hjälpt en mängd kunder transformera deras organisationer och ta sin digitala närvaro till nästa nivå. Läs vad några av våra kunder har att säga om oss.</p>
          </div>
          
          <div className={`testimonials-grid ${isTestimonialVisible ? 'visible' : ''}`}>
            <div className={`testimonial-card green ${isTestimonialVisible ? 'visible' : ''}`}>
              <h3>Daisy</h3>
              <p className="role">Operativ Chef</p>
            </div>
            
            <div className={`testimonial-card coral ${isTestimonialVisible ? 'visible' : ''}`}>
              <p className="quote">"Iconize Lab hjälpte oss med vår digitala resa. De var professionella, flexibla och hjälpsamma. De var till stor hjälp med vårt skifte av affärssystem och e-handel, samt integrationen mellan systemen. Vi rekommenderar starkt Iconize Lab!"</p>
            </div>
            
            <div className={`testimonial-card purple ${isTestimonialVisible ? 'visible' : ''}`}>
              <h3>Anna</h3>
              <p className="role">VD & Grundare</p>
            </div>
            
            <div className={`testimonial-card navy ${isTestimonialVisible ? 'visible' : ''}`}>
              <p className="quote">"Iconize Lab skapade hela vårt varumärke från scratch. Inte nog med det så hanterar de även vår digitala närvaro och social media och har hjälpt oss växa vår kundbas med 150%."</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
