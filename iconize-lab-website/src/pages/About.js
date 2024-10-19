import React from 'react';
import ProphetDifferentSection from '../components/ProphetDifferentSection';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
  const detailedServices = [
    { 
      icon: '🛒', 
      title: 'E-commerce', 
      description: 'We develop robust e-commerce solutions to help businesses thrive in the digital marketplace.'
    },
    { 
      icon: '📱', 
      title: 'App Development', 
      description: 'We create innovative mobile applications that engage users and drive business growth.'
    },
    { 
      icon: '💻', 
      title: 'Web Development', 
      description: 'We build responsive, user-friendly websites that deliver exceptional digital experiences.'
    },
    { 
      icon: '🎨', 
      title: 'Reimagine Brands', 
      description: 'We help businesses reinvent their brand identity to stay relevant and impactful in evolving markets.'
    },
    { 
      icon: '📈', 
      title: 'Marketing', 
      description: 'We develop comprehensive marketing strategies to boost visibility and drive customer acquisition.'
    },
    { 
      icon: '🔗', 
      title: 'Integrations', 
      description: 'We seamlessly integrate various systems and platforms to optimize business operations and efficiency.'
    }
  ];

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <ProphetDifferentSection />
      <section className="what-we-do">
        <h2>WHAT WE DO</h2>
        <div className="services-grid">
          {detailedServices.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="view-services-btn">VIEW OUR SERVICES →</Link>
      </section>
      {/* Add any other sections or components for the About page here */}
    </div>
  );
};

export default About;
