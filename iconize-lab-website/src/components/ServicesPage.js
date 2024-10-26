import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicesGrid from './ServicesGrid';
import './ServicesPage.css';

function ServicesPage() {
  const [activeCircle, setActiveCircle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const circleServices = [
    { name: 'Consulting', description: 'Identifying growth opportunities, defining critical strategies and building plan-to-win roadmaps to drive in-market impact' },
    { name: 'Experience', description: 'Anticipating needs, solving pain points, and creating value with deeply human products, services and experiences' },
    { name: 'Creative', description: 'Crafting compelling narratives and visual identities that resonate with audiences and drive engagement' }
  ];


  return (
    <div className="services-page">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span>Tjänster</span>
        </div>
        <div className="section-content">
          <h1>We help leaders turn uncertainty into competitive advantage.</h1>
          <div className="services-diagram">
            <svg viewBox="0 0 400 400" width="400" height="400">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#FD5E53',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#26E594',stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#FD5E53',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#26E594',stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#FD5E53',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#26E594',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <circle className="animated-circle" cx="200" cy="100" r="99" stroke="url(#grad1)" strokeWidth="2" fill="transparent" />
              <circle className="animated-circle" cx="100" cy="300" r="99" stroke="url(#grad3)" strokeWidth="2" fill="transparent" />
              <circle className="animated-circle" cx="300" cy="300" r="99" stroke="url(#grad2)" strokeWidth="2" fill="transparent" />
              <circle cx="200" cy="1" r="3" fill="#00ffff" />
              <circle cx="1" cy="300" r="3" fill="#00ffff" />
              <circle cx="399" cy="300" r="3" fill="#ff00ff" />
            </svg>
            {circleServices.map((service, index) => (
              <div 
                key={service.name}
                className={`circle ${service.name.toLowerCase()} ${activeCircle === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCircle(index)}
                onMouseLeave={() => setActiveCircle(null)}
              >
                <span className="service-name">{service.name}</span>
                {activeCircle === index && (
                  <span className="service-description">{service.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div id="detailed-services" className="detailed-services">
          <h2>SERVICES</h2>
          <p>Iconize Lab brings an integrated portfolio of consulting, experience and creative expertise to every client engagement.</p>
          <ServicesGrid showCapabilities={true} />
        </div>

        <div id="industries" className="industries-section">
          <div className="industries-content">
            <h2>Industries</h2>
            <p>
              Our solutions are unique to every client, but our industry experts who know your unique set of 
              challenges and understand your situation inside and out are crucial to helping you achieve your 
              growth goals.
            </p>
            <Link to="/industries" className="industries-link">INDUSTRIES WE SERVE →</Link>
          </div>
          <div className="industries-illustration">
            <svg viewBox="0 0 200 100" width="200" height="100">
              <rect x="0" y="60" width="40" height="40" fill="#1E3A8A" />
              <rect x="50" y="40" width="40" height="60" fill="#1E3A8A" />
              <rect x="100" y="20" width="40" height="80" fill="#1E3A8A" />
              <circle cx="180" cy="50" r="20" fill="#1E3A8A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
