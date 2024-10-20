import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WebDevelopment.scss";

const WebDevelopment = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "🖖" },
    { name: "Angular", icon: "🅰️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Ruby on Rails", icon: "💎" },
    { name: "PHP", icon: "🐘" },
    { name: "GraphQL", icon: "◼️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ];

  const faqItems = [
    {
      question: "What types of web applications can you develop?",
      answer: "We develop a wide range of web applications, including e-commerce platforms, content management systems, progressive web apps, single-page applications, and custom enterprise solutions.",
    },
    {
      question: "How do you ensure the security of web applications?",
      answer: "We implement best practices for web security, including data encryption, secure authentication methods, regular security audits, and protection against common vulnerabilities like SQL injection and cross-site scripting (XSS).",
    },
    {
      question: "Can you integrate third-party services and APIs into my web application?",
      answer: "Yes, we have extensive experience integrating various third-party services and APIs, such as payment gateways, social media platforms, analytics tools, and other external services to enhance the functionality of your web application.",
    },
    {
      question: "Do you provide ongoing maintenance and support for web applications?",
      answer: "Absolutely. We offer comprehensive maintenance and support services, including bug fixes, security updates, performance optimization, and feature enhancements to keep your web application running smoothly and up-to-date.",
    },
    {
      question: "How do you approach responsive design and mobile optimization?",
      answer: "We use a mobile-first approach and responsive design techniques to ensure that your web application looks and functions great on all devices, from smartphones to desktop computers. We also optimize for performance to provide a smooth user experience across all platforms.",
    },
  ];

  return (
    <div className="web-development-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt;{" "}
        <span>Web Development</span>
      </div>
      <div className="content-wrapper">
        <h1>Web Development</h1>
        <p className="intro-text">
          We build responsive, user-friendly websites and web applications that deliver exceptional digital experiences and drive business growth.
        </p>

        <section className="technologies">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="web-development-process">
          <h2>Our Web Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirements Analysis</h3>
              <p>We work closely with you to understand your goals and define project requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Our designers create intuitive and visually appealing user interfaces and experiences.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development & Testing</h3>
              <p>We build your web application using modern technologies and perform thorough testing.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Deployment & Optimization</h3>
              <p>We deploy your application and optimize it for performance and search engines.</p>
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
      </div>
    </div>
  );
};

export default WebDevelopment;

