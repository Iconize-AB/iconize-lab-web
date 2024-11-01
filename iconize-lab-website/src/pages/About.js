import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import IconizeDifferentSection from '../components/IconizeDifferentSection';
import ServicesGrid from '../components/ServicesGrid';

const About = () => {

  return (
    <div className="about-page">
      <h1>Om oss</h1>
      <IconizeDifferentSection />
      <section className="what-we-do">
        <h2>VAD VI GÖR</h2>
        <div className="services-content">
          <ServicesGrid />
        </div>
        <Link to="/services" className="view-services-btn">VÅRA TJÄNSTER →</Link>
      </section>
      {/* Add any other sections or components for the About page here */}
    </div>
  );
};

export default About;
