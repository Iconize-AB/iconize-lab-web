import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesGrid.scss';

function ServicesGrid({ showCapabilities = true, limit = null }) {
  const [activeCapabilities, setActiveCapabilities] = useState(null);

  const detailedServices = [
    { 
      icon: '&#128722;', // Shopping cart
      title: 'E-handel',
      description: 'Vi utvecklar robusta e-handelslösningar för att hjälpa företag att blomstra på den digitala marknaden.',
      capabilities: ['Magento', 'Adobe Commerce', 'Saleor', 'PWA Studio', 'Shopify', 'WooCommerce'],
      link: '/services/ecommerce'
    },
    { 
      icon: '&#128241;', // Mobile phone
      title: 'Apputveckling',
      description: 'Vi skapar innovativa mobilapplikationer som engagerar användare och driver företagstillväxt.',
      capabilities: ['iOS', 'Android', 'React Native'],
      link: '/services/app-development'
    },
    { 
      icon: '&#128187;', // Laptop
      title: 'Webbutveckling',
      description: 'Vi bygger responsiva, användarvänliga webbplatser som levererar exceptionella digitala upplevelser.',
      capabilities: ['Node.js', 'React', 'Vue.js', 'Squarespace', 'Wordpress'],
      link: '/services/web-development'
    },
    // { 
    //   icon: '🎨', 
    //   title: 'Varumärke', 
    //   description: 'Vi hjälper företag att förnya sin varumärkesidentitet för att förbli relevanta och slagkraftiga på föränderliga marknader.',
    //   capabilities: ['Varumärkesstrategi', 'Visuell Identitet', 'Varumärkesriktlinjer'],
    //   link: '/services/brand-reimagination'
    // },
    { 
      icon: '&#128200;', // Chart
      title: 'Marknadsföring',
      description: 'Vi utvecklar omfattande marknadsföringsstrategier för att öka synligheten och driva kundförvärv.',
      capabilities: ['Digital Marknadsföring', 'Innehållsstrategi', 'SEO/SEM'],
      link: '/services/marketing'
    },
    // { 
    //   icon: '&#128279;', // Link
    //   title: 'Integrationer',
    //   description: 'Vi integrerar sömlöst olika system och plattformar för att optimera affärsverksamheten och effektiviteten.',
    //   capabilities: ['API-utveckling', 'Mellanlösningar', 'Datamigrering'],
    //   link: '/services/integrations'
    // }
  ];

  const toggleCapabilities = (index) => {
    setActiveCapabilities(activeCapabilities === index ? null : index);
  };

  const servicesToShow = limit ? detailedServices.slice(0, limit) : detailedServices;

  return (
    <div className="services-grid">
      {servicesToShow.map((service, index) => (
        <div key={index} className="service-item">
          <Link to={service.link} className="service-content-wrap">
            <div 
              className="service-icon" 
              dangerouslySetInnerHTML={{ __html: service.icon }}
            />
            <h3>{service.title} →</h3>
            <p>{service.description}</p>
            {showCapabilities && (
              <>
                <button 
                  className="capabilities-btn" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCapabilities(index);
                  }}
                >
                  Kompetenser {activeCapabilities === index ? '▲' : '▼'}
                </button>
                {activeCapabilities === index && (
                  <div className="capabilities-tags">
                    {service.capabilities.map((capability, capIndex) => (
                      <Link 
                        key={capIndex} 
                        to={`${service.link}?capability=${encodeURIComponent(capability)}`} 
                        className="capability-tag"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {capability}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ServicesGrid;
