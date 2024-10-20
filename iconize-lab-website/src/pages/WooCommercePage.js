import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WooCommercePage.scss';
import wooCommerceLogo from '../resources/woocommerce.png';

const WooCommercePage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  const wooCommerceServices = [
    { name: "WooCommerce Store Setup", icon: "🛒" },
    { name: "Custom Theme Development", icon: "🎨" },
    { name: "Plugin Development", icon: "🔌" },
    { name: "WooCommerce Optimization", icon: "🚀" },
    { name: "WooCommerce Support & Maintenance", icon: "🛠️" },
  ];

  const wooCommerceFeatures = [
    { title: 'WordPress Integration', description: 'Seamlessly integrate e-commerce functionality into your WordPress site.' },
    { title: 'Customizable Design', description: 'Create a unique store design that matches your brand identity.' },
    { title: 'Extensive Plugin Ecosystem', description: 'Extend functionality with thousands of free and premium plugins.' },
    { title: 'SEO-Friendly', description: "Benefit from WordPress's excellent SEO capabilities for better visibility." },
    { title: 'Scalable Solution', description: 'Grow your online store from a small business to a large enterprise.' },
    { title: 'Mobile-Responsive', description: 'Provide a seamless shopping experience across all devices.' },
  ];

  const faqItems = [
    {
      question: "Why should I choose WooCommerce for my online store?",
      answer: "WooCommerce is a flexible, open-source e-commerce platform built on WordPress. It's ideal for businesses of all sizes due to its ease of use, customizability, and scalability. Plus, it's free to use with affordable extensions available."
    },
    {
      question: "Can you migrate my existing store to WooCommerce?",
      answer: "Yes, we offer migration services to WooCommerce. We can transfer your products, customers, and order history from your current platform to WooCommerce, ensuring a smooth transition with minimal disruption to your business."
    },
    {
      question: "How long does it take to develop a WooCommerce store?",
      answer: "The development time varies depending on the complexity of your project. A basic WooCommerce store can be set up in 2-4 weeks, while more complex, custom-built stores may take 6-12 weeks. We'll provide a detailed timeline after assessing your specific requirements."
    },
    {
      question: "Do I need to purchase hosting separately for WooCommerce?",
      answer: "Yes, you'll need to purchase WordPress hosting for your WooCommerce store. We can recommend reliable hosting providers optimized for WooCommerce and assist with the setup process to ensure optimal performance."
    },
    {
      question: "Can you integrate WooCommerce with other business systems?",
      answer: "Absolutely. We have experience integrating WooCommerce with various ERP, CRM, and other business systems. We can create custom integrations or use existing plugins to streamline your operations and improve efficiency."
    },
  ];

  return (
    <div className="woocommerce-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt;{" "}
        <span>WooCommerce Development</span>
      </div>
      <div className="content-wrapper">
        <div className="woocommerce-header">
          <img src={wooCommerceLogo} alt="WooCommerce Logo" className="woocommerce-logo" />
          <h1>WooCommerce Development Services</h1>
        </div>
        <p className="intro-text">
          We specialize in creating powerful, customizable e-commerce solutions using WooCommerce. 
          Our expert team can help you leverage this versatile platform to build a successful online store that grows with your business.
        </p>

        <section className="woocommerce-services">
          <h2>Our WooCommerce Services</h2>
          <div className="services-grid">
            {wooCommerceServices.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="woocommerce-features">
          <h2>Key WooCommerce Features</h2>
          <div className="features-grid">
            {wooCommerceFeatures.map((feature, index) => (
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
        </section>

        <section className="woocommerce-process">
          <h2>Our WooCommerce Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirements Gathering</h3>
              <p>We analyze your needs and create a detailed project plan.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Our designers create an attractive and user-friendly interface for your store.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development & Customization</h3>
              <p>We build your WooCommerce store, including any custom functionality or integrations.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing & Deployment</h3>
              <p>We thoroughly test your store and assist with the launch process.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
                className={activeQuestion === index ? "active" : ""}
              >
                {item.question}
              </h3>
              {activeQuestion === index && <p>{item.answer}</p>}
            </div>
          ))}
        </section>

        <div className="cta-section">
          <h2>Ready to Launch Your WooCommerce Store?</h2>
          <p>Let's discuss how we can create a powerful online presence for your business with WooCommerce.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WooCommercePage;
