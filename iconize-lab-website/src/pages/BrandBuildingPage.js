import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BrandBuildingPage.scss';

const BrandBuildingPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { name: "Varumärkesstrategi", icon: "🎯" },
    { name: "Visuell Identitet", icon: "🎨" },
    { name: "Storytelling", icon: "📖" },
    { name: "Digital Närvaro", icon: "💻" },
    { name: "Kommunikation", icon: "🗣️" },
    { name: "Analys", icon: "📊" },
  ];

  const brandServices = [
    "Utveckling av varumärkesstrategi och positionering",
    "Design av visuell identitet och grafisk profil",
    "Skapande av varumärkesberättelse och tonalitet",
    "Implementering av varumärkesstrategi i alla kanaler",
    "Utveckling av kommunikationsplattform och budskap",
    "Kontinuerlig varumärkesanalys och optimering",
  ];

  const faqItems = [
    {
      question: "Hur lång tid tar det att bygga ett starkt varumärke?",
      answer: "Varumärkesbyggande är en kontinuerlig process. De första grundläggande elementen kan etableras inom 3-6 månader, men att bygga ett starkt varumärke tar tid och kräver konsekvent arbete över längre tid.",
    },
    {
      question: "Hur mäter ni framgången i varumärkesbyggandet?",
      answer: "Vi använder olika mätpunkter som varumärkeskännedom, kundnöjdhet, engagemang i sociala medier, marknadsandel och kundlojalitet för att utvärdera framgången i varumärkesbyggandet.",
    },
    {
      question: "Vad ingår i en varumärkesstrategi?",
      answer: "En varumärkesstrategi omfattar varumärkets kärnvärden, positionering, målgruppsanalys, visuell identitet, kommunikationsstrategi och implementeringsplan. Vi skräddarsyr strategin efter dina specifika behov och mål.",
    },
    {
      question: "Hur ofta bör man uppdatera sin varumärkesidentitet?",
      answer: "Ett varumärke bör utvecklas organiskt över tid. Vi rekommenderar en större översyn vart 3-5 år, men mindre justeringar kan göras löpande baserat på marknadsförändringar och företagets utveckling.",
    },
  ];

  return (
    <div className="marketing-page">
      <div className="breadcrumb">
        <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>Varumärkesbyggande</span>
      </div>
      <div className="content-wrapper">
        <h1>Varumärkesbyggande</h1>
        <p className="intro-text">
          Vi hjälper företag att utveckla och stärka sina varumärken genom strategisk positionering, 
          distinkt visuell identitet och engagerande kommunikation som skapar långsiktiga relationer med målgruppen.
        </p>

        <section className="services">
          <h2>Våra Varumärkestjänster</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="seo-services">
          <h2>Vårt Erbjudande</h2>
          <ul className="seo-list">
            {brandServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="marketing-process">
          <h2>Vår Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Analys & Research</h3>
              <p>Vi analyserar nuvarande position, målgrupp och marknad.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Strategiutveckling</h3>
              <p>Vi utvecklar en skräddarsydd varumärkesstrategi.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Vi implementerar strategin genom alla relevanta kanaler.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Utvärdering & Utveckling</h3>
              <p>Vi mäter, utvärderar och utvecklar kontinuerligt.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Vanliga frågor om Varumärkesbyggande</h2>
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

export default BrandBuildingPage;
