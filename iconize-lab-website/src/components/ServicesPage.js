import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

function ServicesPage() {
  const [activeCircle, setActiveCircle] = useState(null);
  const [activeCapabilities, setActiveCapabilities] = useState(null);

  const circleServices = [
    { name: 'Consulting', description: 'Identifying growth opportunities, defining critical strategies and building plan-to-win roadmaps to drive in-market impact' },
    { name: 'Experience', description: 'Anticipating needs, solving pain points, and creating value with deeply human products, services and experiences' },
    { name: 'Creative', description: 'Crafting compelling narratives and visual identities that resonate with audiences and drive engagement' }
  ];

  const detailedServices = [
    { 
      icon: '🛒', 
      title: 'E-commerce', 
      description: 'We develop robust e-commerce solutions to help businesses thrive in the digital marketplace.',
      capabilities: ['Magento', 'Adobe Commerce', 'Saleor'],
      link: '/services/ecommerce'
    },
    { 
      icon: '📱', 
      title: 'App Development', 
      description: 'We create innovative mobile applications that engage users and drive business growth.',
      capabilities: ['iOS', 'Android', 'React Native'],
      link: '/services/app-development'
    },
    { 
      icon: '💻', 
      title: 'Web Development', 
      description: 'We build responsive, user-friendly websites that deliver exceptional digital experiences.',
      capabilities: ['Node.js', 'Python', 'React', 'Vue.js'],
      link: '/services/web-development'
    },
    { 
      icon: '🎨', 
      title: 'Reimagine Brands', 
      description: 'We help businesses reinvent their brand identity to stay relevant and impactful in evolving markets.',
      capabilities: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
      link: '/services/brand-reimagination'
    },
    { 
      icon: '📈', 
      title: 'Marketing', 
      description: 'We develop comprehensive marketing strategies to boost visibility and drive customer acquisition.',
      capabilities: ['Digital Marketing', 'Content Strategy', 'SEO/SEM'],
      link: '/services/marketing'
    },
    { 
      icon: '🔗', 
      title: 'Integrations', 
      description: 'We seamlessly integrate various systems and platforms to optimize business operations and efficiency.',
      capabilities: ['API Development', 'Middleware Solutions', 'Data Migration'],
      link: '/services/integrations'
    }
  ];

  const toggleCapabilities = (index) => {
    setActiveCapabilities(activeCapabilities === index ? null : index);
  };

  return (
    <div className="services-page">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span>Services</span>
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
          <div className="services-grid">
            {detailedServices.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <Link to={service.link}>
                  <h3>{service.title} →</h3>
                </Link>
                <p>{service.description}</p>
                <button 
                  className="capabilities-btn" 
                  onClick={() => toggleCapabilities(index)}
                >
                  Capabilities {activeCapabilities === index ? '▲' : '▼'}
                </button>
                {activeCapabilities === index && (
                  <ul className="capabilities-list">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex}>{capability}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
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
