import React from 'react';
import './LandingPage.css';
import InteractiveFormSection from './InteractiveFormSection';

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="content">
          <h1>We are a growth and transformation firm.</h1>
          <p>
            Iconize Lab is dedicated to helping you unlock uncommon growth—growth that is anchored in purpose, is
            transformative and sustainable over time. We partner with you to manage disruption, bringing the rigor and
            expertise required to uncover and realize transformative opportunities.
          </p>
          <div className="cta-buttons">
            <a href="#about" className="cta-button">ABOUT ICONIZE LAB →</a>
            <a href="#services" className="cta-button">OUR SERVICES →</a>
          </div>
        </div>
        <div className="decorative-elements">
          <div className="plus blue"></div>
          <div className="plus green"></div>
          <div className="plus outline"></div>
          <div className="plus white"></div>
        </div>
      </section>
      <InteractiveFormSection />
    </main>
  );
}

export default LandingPage;
