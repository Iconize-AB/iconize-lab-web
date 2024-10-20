import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CompanyCulture.scss";

const CompanyCulture = () => {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      icon: "🚀",
      title: "Create With Courage",
      description: "When something could be better, we don't settle—we create. Pushing boundaries. Tackling the biggest challenges that grow our clients and move society. We put our heart into our work while applying our intellect, creativity and rigor to execute."
    },
    {
      icon: "🌱",
      title: "Give & Grow",
      description: "There's no shortage of generosity here. We invest in the personal and professional growth of our people and our clients, by being a coach, a sounding board or a cheering section. We all have unique needs and goals, but we're in this together—and by offering our time, empathy and brainpower to support the collective potential of our teams, clients and communities, we all flourish together."
    },
    {
      icon: "😊",
      title: "Share Joy",
      description: "Joy is vital—to our relationships, our work and our well-being. We don't take ourselves too seriously, enjoying the ride, while making time for what brings us joy. Protecting it. Sharing it. It feeds our spirits, and keeps us connected to what, and who, really matters to us. By building in more space for rest, community and fun, our humanity shines a little brighter."
    }
  ];

  const faqItems = [
    {
      question: "How do you promote work-life balance?",
      answer: "We believe in flexible working hours, remote work options, and encouraging our team to take regular breaks and vacations. We also organize team-building activities and wellness programs to ensure our employees maintain a healthy work-life balance."
    },
    {
      question: "What opportunities for professional growth do you offer?",
      answer: "We provide ongoing training, mentorship programs, and opportunities to work on diverse projects. We also support our employees in attending conferences, workshops, and pursuing relevant certifications to enhance their skills and advance their careers."
    },
    {
      question: "How do you foster innovation and creativity in the workplace?",
      answer: "We encourage open communication, brainstorming sessions, and dedicated time for personal projects. We also have an innovation lab where team members can experiment with new technologies and ideas without the pressure of immediate results."
    },
    {
      question: "What kind of team-building activities do you organize?",
      answer: "We regularly organize team lunches, off-site retreats, hackathons, and volunteer opportunities. We also have interest-based clubs where employees can connect over shared hobbies and passions outside of work."
    },
    {
      question: "How do you ensure diversity and inclusion in your workplace?",
      answer: "We have a dedicated diversity and inclusion committee that oversees our hiring practices, workplace policies, and cultural initiatives. We provide unconscious bias training, celebrate diverse cultural events, and actively seek out diverse perspectives in our decision-making processes."
    }
  ];

  return (
    <div className="company-culture-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <span>Company Culture</span>
      </div>
      <div className="content-wrapper">
        <h1>Our Company Culture</h1>
        <p className="intro-text">
          At Iconize Lab, we believe that a strong company culture is the foundation of our success. Our values guide everything we do, from how we work with our clients to how we support our team members.
        </p>

        <section className="our-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="culture-highlights">
          <h2>Culture Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>Collaborative Environment</h3>
              <p>We foster a culture of open communication and teamwork, where every voice is heard and valued.</p>
            </div>
            <div className="highlight-item">
              <h3>Continuous Learning</h3>
              <p>We encourage and support ongoing professional development and skill-building opportunities.</p>
            </div>
            <div className="highlight-item">
              <h3>Work-Life Balance</h3>
              <p>We prioritize the well-being of our team members, promoting flexibility and personal time.</p>
            </div>
            <div className="highlight-item">
              <h3>Innovation-Driven</h3>
              <p>We embrace creativity and forward-thinking, always striving to push the boundaries of what's possible.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3
                onClick={() =>
                  setActiveValue(activeValue === index ? null : index)
                }
                className={activeValue === index ? "active" : ""}
              >
                {item.question}
              </h3>
              {activeValue === index && <p>{item.answer}</p>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CompanyCulture;
