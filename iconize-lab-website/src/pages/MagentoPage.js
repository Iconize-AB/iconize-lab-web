import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MagentoPage.scss';
import magentoLogo from '../resources/magento.png';

const MagentoPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  const magentoServices = [
    { name: "Magento Store Development", icon: "🏪" },
    { name: "Magento Migration", icon: "🚀" },
    { name: "Custom Module Development", icon: "🧩" },
    { name: "Magento Optimization", icon: "⚡" },
    { name: "Magento Support & Maintenance", icon: "🛠️" },
  ];

  const magentoFeatures = [
    { title: 'Scalable Architecture', description: 'Magento\'s robust architecture allows your e-commerce store to grow with your business.' },
    { title: 'Customizable Design', description: 'Create a unique shopping experience with Magento\'s flexible theming system.' },
    { title: 'Multi-Store Management', description: 'Manage multiple stores from a single backend, perfect for international businesses.' },
    { title: 'Advanced SEO Tools', description: 'Boost your online visibility with Magento\'s built-in SEO features.' },
    { title: 'Extensive Marketplace', description: 'Extend functionality with thousands of extensions from the Magento Marketplace.' },
    { title: 'Mobile-Friendly', description: 'Provide a seamless shopping experience across all devices with responsive design.' },
  ];

  const faqItems = [
    {
      question: "Why should I choose Magento for my e-commerce store?",
      answer: "Magento is a powerful, flexible e-commerce platform that offers scalability, customization, and a wide range of features. It's ideal for businesses of all sizes, from small startups to large enterprises."
    },
    {
      question: "Can you migrate my existing store to Magento?",
      answer: "Yes, we offer Magento migration services. We can transfer your products, customers, and order history from your current platform to Magento, ensuring a smooth transition with minimal disruption to your business."
    },
    {
      question: "How long does it take to develop a Magento store?",
      answer: "The development time can vary depending on the complexity of your project. A basic Magento store can be set up in 4-6 weeks, while more complex, custom-built stores may take 3-6 months. We'll provide a detailed timeline after assessing your specific requirements."
    },
    {
      question: "Do you provide Magento hosting services?",
      answer: "While we don't provide hosting directly, we can recommend and help set up optimal hosting solutions for your Magento store. We work with reliable hosting partners that specialize in Magento hosting to ensure the best performance for your site."
    },
    {
      question: "Can you integrate Magento with my existing systems?",
      answer: "Absolutely. We have extensive experience integrating Magento with various ERP, CRM, and other business systems. We can create custom integrations to streamline your operations and improve efficiency."
    },
  ];

  return (
    <div className="magento-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt;{" "}
        <span>Magento Development</span>
      </div>
      <div className="content-wrapper">
        <div className="magento-header">
          <img src={magentoLogo} alt="Magento Logo" className="magento-logo" />
          <h1>Magento Development Services</h1>
        </div>
        <p className="intro-text">
          We specialize in creating powerful, scalable e-commerce solutions using Magento. 
          Our expert team can help you harness the full potential of this robust platform to drive your online business growth.
        </p>

        <section className="magento-services">
          <h2>Our Magento Services</h2>
          <div className="services-grid">
            {magentoServices.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="magento-features">
          <h2>Key Magento Features</h2>
          <div className="features-grid">
            {magentoFeatures.map((feature, index) => (
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

        <section className="magento-process">
          <h2>Our Magento Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>We analyze your requirements and create a detailed project roadmap.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Our designers create an engaging and user-friendly interface for your store.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development & Customization</h3>
              <p>We build your Magento store, including any custom modules or integrations.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing & Launch</h3>
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
          <h2>Ready to Build Your Magento E-commerce Store?</h2>
          <p>Let's discuss how we can create a powerful online presence for your business with Magento.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MagentoPage;
