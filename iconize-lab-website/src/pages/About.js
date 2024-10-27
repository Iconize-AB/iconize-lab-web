import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import IconizeDifferentSection from '../components/IconizeDifferentSection';

const About = () => {
  const detailedServices = [
    { 
      icon: '🛒', 
      title: 'E-handel', 
      description: 'Vi utvecklar robusta e-handelslösningar för att hjälpa företag att blomstra på den digitala marknaden.'
    },
    { 
      icon: '📱', 
      title: 'Apputveckling', 
      description: 'Vi skapar innovativa mobilapplikationer som engagerar användare och driver företagstillväxt.'
    },
    { 
      icon: '💻', 
      title: 'Webbutveckling', 
      description: 'Vi bygger responsiva, användarvänliga webbplatser som levererar exceptionella digitala upplevelser.'
    },
    { 
      icon: '🎨', 
      title: 'Varumärke', 
      description: 'Vi hjälper företag att skapa eller förnya sin varumärkesidentitet för att förbli relevanta på föränderliga marknader.'
    },
    { 
      icon: '📈', 
      title: 'Marknadsföring', 
      description: 'Vi skapar och exekverar på digitala marknadsstrategier som får er att synas för rätt människor'
    },
    { 
      icon: '🔗', 
      title: 'Integrationer', 
      description: 'Vi integrerar era system och plattformar för att optimera er tech-stach och göra er mer effektiva.'
    }
  ];

  return (
    <div className="about-page">
      <h1>Om oss</h1>
      <IconizeDifferentSection />
      <section className="what-we-do">
        <h2>VAD VI GÖR</h2>
        <div className="services-grid">
          {detailedServices.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="view-services-btn">VÅRA TJÄNSTER →</Link>
      </section>
      {/* Add any other sections or components for the About page here */}
    </div>
  );
};

export default About;
