import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AppDevelopment.scss";

const AppDevelopment = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: "React Native", icon: "🔵" },
    { name: "iOS (Swift)", icon: "🍎" },
    { name: "Android (Kotlin)", icon: "🤖" },
    { name: "Flutter", icon: "🦋" },
    { name: "Xamarin", icon: "📱" },
  ];

  const faqItems = [
    {
      question: "Hur kan jag börja utveckla en app för min verksamhet?",
      answer:
        "Börja med att definiera din apps syfte och målgrupp. Skissa sedan upp en grundläggande design och funktionalitet. Därefter kan du välja utvecklingsplattform och börja med en prototyp eller MVP (Minimum Viable Product).",
    },
    {
      question:
        "Vilken plattform ska jag välja för min app: iOS, Android, eller båda?",
      answer:
        "Det beror på din målgrupp och budget. Om din målgrupp främst använder iOS, börja där. Om de använder Android, börja med det. Om du har resurser och din målgrupp använder båda, överväg att utveckla för båda plattformarna samtidigt.",
    },
    {
      question:
        "Kan ni utveckla en cross-platform app som fungerar på både iOS och Android?",
      answer:
        "Ja, vi kan utveckla cross-platform appar med teknologier som React Native eller Flutter. Dessa möjliggör utveckling av appar som fungerar på både iOS och Android med en gemensam kodbas.",
    },
    {
      question: "Vad är skillnaden mellan en native app och en hybrid app?",
      answer:
        "En native app är utvecklad specifikt för en plattform (iOS eller Android) och ger bästa prestanda och användarupplevelse. En hybrid app använder webbteknologier inbäddade i en native container, vilket möjliggör utveckling för flera plattformar samtidigt men kan ha vissa prestandabegränsningar.",
    },
    {
      question: "Erbjuder ni appunderhåll och support efter lansering?",
      answer:
        "Ja, vi erbjuder kontinuerligt underhåll och support efter lansering. Detta inkluderar buggfixar, prestandaoptimering, säkerhetsuppdateringar och anpassningar för nya OS-versioner.",
    },
  ];

  return (
    <div className="app-development-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>App Development</span>
      </div>
      <div className="content-wrapper">
        <h1>App Development</h1>
        <p className="intro-text">
          We create innovative mobile applications that engage users and drive
          business growth.
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

        <section className="app-development-process">
          <h2>Our App Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>
                We analyze your requirements and create a detailed project plan.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>
                Our designers create intuitive and engaging user interfaces.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development & Testing</h3>
              <p>
                We build your app using the latest technologies and perform
                rigorous testing.
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Launch & Support</h3>
              <p>
                We help you launch your app and provide ongoing support and
                maintenance.
              </p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Frågor & svar</h2>
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
      <div className="cta-section-wrapper">
          <div className="content-wrapper-app">
            <div className="cta-section">
              <h2>Ready to Launch Your Mobile App?</h2>
              <p>Let's discuss how we can help you create an innovative mobile application that engages users and drives business growth.</p>
              <button className="cta-button">Get Started</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AppDevelopment;
