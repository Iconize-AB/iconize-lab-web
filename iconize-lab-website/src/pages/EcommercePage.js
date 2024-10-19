import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EcommercePage.scss';
import magentoLogo from '../resources/magento.png';
import wooCommerceLogo from '../resources/woocommerce.png';
import adobeCommerceLogo from '../resources/adobe-commerce.png';

function EcommercePage() {
  const [activeFeature, setActiveFeature] = useState(null);

  const ecommerceFeatures = [
    { title: 'Product Catalog', description: 'Create and manage a robust product catalog with customizable attributes and categories.' },
    { title: 'Secure Checkout', description: 'Implement a secure and streamlined checkout process with multiple payment options.' },
    { title: 'Mobile Responsive', description: 'Ensure a seamless shopping experience across all devices with responsive design.' },
    { title: 'Search & Filtering', description: 'Implement advanced search and filtering capabilities to help customers find products easily.' },
    { title: 'Analytics & Reporting', description: 'Gain valuable insights with built-in analytics and customizable reporting tools.' },
    { title: 'Inventory Management', description: 'Efficiently manage your inventory with real-time stock updates and automated reordering.' },
  ];

  const platforms = [
    { name: 'Magento', logo: magentoLogo },
    { name: 'WooCommerce', logo: wooCommerceLogo },
    { name: 'Adobe Commerce', logo: adobeCommerceLogo },
  ];

  return (
    <div className="ecommerce-page">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt; <span>E-commerce</span>
        </div>
        <div className="section-content">
          <h1>Transform Your Business with Our E-commerce Solutions</h1>
          <p>We develop robust and scalable e-commerce platforms tailored to your unique business needs.</p>
        </div>
        <div className="ecommerce-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            {ecommerceFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <h3>{feature.title}</h3>
                {activeFeature === index && <p>{feature.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="ecommerce-platforms">
          <h2>Platforms We Work With</h2>
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-item">
                <img src={platform.logo} alt={`${platform.name} logo`} />
              </div>
            ))}
          </div>
        </div>
        <div className="cta-section">
          <h2>Ready to Launch Your E-commerce Store?</h2>
          <p>Let's discuss how we can help you create a powerful online presence and drive sales.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default EcommercePage;
