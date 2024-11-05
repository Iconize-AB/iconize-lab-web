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
    { name: 'Kreativitet', description: 'Nya utmaningar kräver kreativa lösningar. Det är vi bra på.' },
    { name: 'Kompetens', description: 'Vi delar vår kunskap med dig, så att du inte ska behöva oss en längre period.' },
    { name: 'Konsulting', description: 'Hjälpen du behöver. När du behöver den. ' }
  ];


  return (
    <div className="services-page">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span>Tjänster</span>
        </div>
        <div className="section-content">
          <h1>Vi hjälper ledare gå från osäkerhet till säker framgång</h1>
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
              <rect className="animated-circle" x="110" y="10" width="180" height="180" stroke="url(#grad1)" strokeWidth="2" fill="transparent" />
              <rect className="animated-circle" x="10" y="210" width="180" height="180" stroke="url(#grad3)" strokeWidth="2" fill="transparent" />
              <rect className="animated-circle" x="210" y="210" width="180" height="180" stroke="url(#grad2)" strokeWidth="2" fill="transparent" />
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
                <div className="service-content">
                  <span className="service-name">{service.name}</span>
                  <span className="service-description">{service.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="detailed-services" className="detailed-services">
          <h2>Tjänster</h2>
          <p>[i]conize lab erbjuder en bred portfolio av tjänster som hjälper dig nå dina mål</p>
          <ServicesGrid showCapabilities={true} />
        </div>
      </div>

      <div id="industries" className="industries-section">
        <div className="industries-content">
          <h2>Industries</h2>
          <p>[i]conize lab erbjuder en bred portfolio av kompetenser som hjälper er nå dit ni vill.</p>
          <Link to="/industries" className="industries-link">INDUSTRIES WE SERVE →</Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
