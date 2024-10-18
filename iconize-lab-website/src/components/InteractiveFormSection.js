import React, { useState } from 'react';
import './InteractiveFormSection.css';

function InteractiveFormSection() {
  const [formData, setFormData] = useState({
    adjective: '',
    role: '',
    industry: '',
    challenge: '',
    growthAdjective: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="interactive-form-section">
      <div className="form-container">
        <h2>Tell us about your growth needs</h2>
        <p>We've got ideas, inspiration, and success stories that can help.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <span>I am a(n)</span>
            <select name="adjective" onChange={handleChange} required>
              <option value="">Adjective*</option>
              <option value="ambitious">Ambitious</option>
              <option value="innovative">Innovative</option>
              <option value="experienced">Experienced</option>
            </select>
            <select name="role" onChange={handleChange} required>
              <option value="">Role*</option>
              <option value="manager">Manager</option>
              <option value="executive">Executive</option>
              <option value="entrepreneur">Entrepreneur</option>
            </select>
            <span>in</span>
            <select name="industry" onChange={handleChange} required>
              <option value="">Industry*</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          <div className="form-row">
            <span>seeking</span>
            <select name="challenge" onChange={handleChange} required>
              <option value="">Challenge*</option>
              <option value="innovative">Innovative</option>
              <option value="effective">Effective</option>
              <option value="scalable">Scalable</option>
            </select>
            <span>solutions for</span>
            <select name="growthAdjective" onChange={handleChange} required>
              <option value="">Adjective*</option>
              <option value="rapid">Rapid</option>
              <option value="sustainable">Sustainable</option>
              <option value="transformative">Transformative</option>
            </select>
            <span>growth.</span>
          </div>
          <button type="submit" className="submit-button">Explore Solutions</button>
        </form>
      </div>
    </section>
  );
}

export default InteractiveFormSection;
