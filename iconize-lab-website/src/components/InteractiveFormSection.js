import React, { useState } from 'react';
import './InteractiveFormSection.scss';

function InteractiveFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [],
    message: ''
  });

  const services = [
    'Magento Development',
    'Saleor Development',
    'WooCommerce Development',
    'Application Development',
    'Web Development',
    'Copywriting',
    'Marketing'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        services: checked
          ? [...prevState.services, value]
          : prevState.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend or email service
  };

  return (
    <section className="interactive-form-section">
      <div className="form-container">
        <h2>How can we help you grow?</h2>
        <p>Tell us about your project and we'll get back to you with solutions.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Services you're interested in:</label>
            <div className="checkbox-group">
              {services.map((service, index) => (
                <label key={index} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Tell us more about your project:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Get in Touch</button>
        </form>
      </div>
    </section>
  );
}

export default InteractiveFormSection;
