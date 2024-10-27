import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesGrid.scss';

function ServicesGrid({ showCapabilities = true, limit = null }) {
  const [activeCapabilities, setActiveCapabilities] = useState(null);

  const detailedServices = [
    { 
      icon: '🛒', 
      title: 'E-handel', 
      description: 'Vi utvecklar robusta e-handelslösningar för att hjälpa företag att blomstra på den digitala marknaden.',
      capabilities: ['Magento', 'Adobe Commerce', 'Saleor', 'PWA Studio', 'Shopify', 'WooCommerce'],
      link: '/services/ecommerce'
    },
    { 
      icon: '📱', 
      title: 'Apputveckling', 
      description: 'Vi skapar innovativa mobilapplikationer som engagerar användare och driver företagstillväxt.',
      capabilities: ['iOS', 'Android', 'React Native'],
      link: '/services/app-development'
    },
    { 
      icon: '💻', 
      title: 'Webbutveckling', 
      description: 'Vi bygger responsiva, användarvänliga webbplatser som levererar exceptionella digitala upplevelser.',
      capabilities: ['Node.js', 'Python', 'React', 'Vue.js', 'Next.js', 'Laravel', 'Squarespace', 'Wordpress', 'Shopify'],
      link: '/services/web-development'
    },
    { 
      icon: '🎨', 
      title: 'Varumärke', 
      description: 'Vi hjälper företag att förnya sin varumärkesidentitet för att förbli relevanta och slagkraftiga på föränderliga marknader.',
      capabilities: ['Varumärkesstrategi', 'Visuell Identitet', 'Varumärkesriktlinjer'],
      link: '/services/brand-reimagination'
    },
    { 
      icon: '📈', 
      title: 'Marknadsföring', 
      description: 'Vi utvecklar omfattande marknadsföringsstrategier för att öka synligheten och driva kundförvärv.',
      capabilities: ['Digital Marknadsföring', 'Innehållsstrategi', 'SEO/SEM'],
      link: '/services/marketing'
    },
    { 
      icon: '🔗', 
      title: 'Integrationer', 
      description: 'Vi integrerar sömlöst olika system och plattformar för att optimera affärsverksamheten och effektiviteten.',
      capabilities: ['API-utveckling', 'Mellanlösningar', 'Datamigrering'],
      link: '/services/integrations'
    }
  ];

  const toggleCapabilities = (index) => {
    setActiveCapabilities(activeCapabilities === index ? null : index);
  };

  const servicesToShow = limit ? detailedServices.slice(0, limit) : detailedServices;

  return (
    <div className="services-grid">
      {servicesToShow.map((service, index) => (
        <div key={index} className="service-item">
          <div className="service-icon">{service.icon}</div>
          <Link to={service.link}>
            <h3>{service.title} →</h3>
          </Link>
          <p>{service.description}</p>
          {showCapabilities && (
            <>
              <button 
                className="capabilities-btn" 
                onClick={() => toggleCapabilities(index)}
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
                    >
                      {capability}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ServicesGrid;
