import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ConnectPage.scss";

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    { icon: "📞", method: "Phone", value: "+1 (123) 456-7890" },
    { icon: "✉️", method: "Email", value: "contact@iconizelab.com" },
    { icon: "🏢", method: "Address", value: "123 Tech Street, San Francisco, CA 94105" },
  ];

  const faqItems = [
    {
      question: "What information should I include in my message?",
      answer: "Please include details about your project, timeline, budget, and any specific requirements or questions you have.",
    },
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond to inquiries within 1-2 business days. For urgent matters, please call us directly.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free 30-minute initial consultation to discuss your project and how we can help.",
    },
  ];

  return (
    <div className="contact-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <span>Contact Us</span>
      </div>
      <div className="content-wrapper">
        <h1>Contact Us</h1>
        <p className="intro-text">
          Get in touch with us for any inquiries about our services, partnership opportunities, or to discuss your next project.
        </p>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        <section className="contact-methods">
          <h2>Other Ways to Reach Us</h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-item">
                <span className="method-icon">{method.icon}</span>
                <h3>{method.method}</h3>
                <p>{method.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
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

export default ConnectPage;
