import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IntegrationPage.scss';
import sapLogo from '../resources/sap.png';
import salesforceLogo from '../resources/salesforce.png';
import microsoftDynamicsLogo from '../resources/hubspot.png';

const IntegrationPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  const integrationTypes = [
    { name: "ERP Integration", icon: "🏭" },
    { name: "CRM Integration", icon: "🤝" },
    { name: "E-commerce Integration", icon: "🛒" },
    { name: "API Development", icon: "🔌" },
    { name: "Data Migration", icon: "💾" },
  ];

  const integrationFeatures = [
    { title: 'Seamless Data Flow', description: 'Ensure smooth data transfer between your ERP/CRM systems and web/e-commerce platforms.' },
    { title: 'Real-time Synchronization', description: 'Keep your inventory, orders, and customer data up-to-date across all systems.' },
    { title: 'Custom Workflows', description: 'Develop tailored workflows to match your unique business processes.' },
    { title: 'Scalable Architecture', description: 'Build integrations that can grow with your business needs.' },
    { title: 'Security & Compliance', description: 'Implement robust security measures and ensure compliance with data protection regulations.' },
    { title: 'Performance Optimization', description: 'Optimize integration performance for faster data processing and reduced latency.' },
  ];

  const platforms = [
    { name: 'SAP', logo: sapLogo },
    { name: 'Salesforce', logo: salesforceLogo },
    { name: 'Microsoft Dynamics', logo: microsoftDynamicsLogo },
  ];

  const faqItems = [
    {
      question: "How can integrating ERP/CRM with my website benefit my business?",
      answer: "Integrating ERP/CRM systems with your website can streamline operations, improve data accuracy, enhance customer experiences, and provide real-time insights for better decision-making."
    },
    {
      question: "How long does a typical integration project take?",
      answer: "The duration of an integration project can vary depending on complexity, but typically ranges from 2-6 months. We'll provide a detailed timeline after assessing your specific requirements."
    },
    {
      question: "Can you integrate custom or legacy systems?",
      answer: "Yes, we have experience integrating a wide range of systems, including custom-built and legacy solutions. We'll work with you to develop the best integration strategy for your unique setup."
    },
    {
      question: "How do you ensure data security during the integration process?",
      answer: "We implement industry-standard security measures, including encryption, secure APIs, and access controls. We also comply with relevant data protection regulations to ensure your data remains safe throughout the integration process."
    },
    {
      question: "Do you provide support after the integration is complete?",
      answer: "Absolutely. We offer ongoing support and maintenance services to ensure your integrations continue to function smoothly and adapt to any changes in your systems or business processes."
    },
  ];

  return (
    <div className="integration-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt;{" "}
        <span>Integration Services</span>
      </div>
      <div className="content-wrapper">
        <h1>Integration Services</h1>
        <p className="intro-text">
          We specialize in seamlessly integrating ERP and CRM systems with web and e-commerce platforms, 
          optimizing your business processes and enhancing customer experiences.
        </p>

        <section className="integration-types">
          <h2>Integration Solutions We Offer</h2>
          <div className="type-grid">
            {integrationTypes.map((type, index) => (
              <div key={index} className="type-item">
                <span className="type-icon">{type.icon}</span>
                <span className="type-name">{type.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="integration-features">
          <h2>Key Integration Features</h2>
          <div className="features-grid">
            {integrationFeatures.map((feature, index) => (
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

        <section className="integration-platforms">
          <h2>Platforms We Integrate With</h2>
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-item">
                <img src={platform.logo} alt={`${platform.name} logo`} />
              </div>
            ))}
          </div>
        </section>

        <section className="integration-process">
          <h2>Our Integration Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirements Analysis</h3>
              <p>We thoroughly assess your current systems and integration needs.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Solution Design</h3>
              <p>We design a tailored integration solution to meet your specific requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development & Testing</h3>
              <p>We develop the integration and conduct rigorous testing to ensure reliability.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Deployment & Support</h3>
              <p>We deploy the integration and provide ongoing support and maintenance.</p>
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
          <h2>Ready to Streamline Your Business with Seamless Integrations?</h2>
          <p>Let's discuss how we can help you integrate your systems and boost your efficiency.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage;
