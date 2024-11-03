import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Marketing.scss";

const Marketing = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { name: "SEO", icon: "🔍" },
    { name: "Content Marketing", icon: "📝" },
    { name: "Social Media", icon: "📱" },
  ];

  const seoServices = [
    "Skapa en detaljerad marknadsplan med fokus på SEO och digital närvaro",
    "Analysera konkurrenter och identifiera nyckelmarknader",
    "Utveckla en långsiktig strategi för organisk tillväxt och konvertering",
    "Teknisk SEO-optimering (sidhastighet, strukturerad data, mobilvänlighet)",
    "Nyckelordsforskning och implementering",
    "Löpande SEO-rapporter och anpassningar för att förbättra ranking",
  ];

  const faqItems = [
    {
      question: "Hur lång tid tar det att se resultat från SEO-arbete?",
      answer: "SEO är en långsiktig strategi. Vanligtvis kan man börja se förbättringar inom 3-6 månader, men betydande resultat kan ta 6-12 månader eller längre, beroende på konkurrensen i din bransch och utgångsläget för din webbplats.",
    },
    {
      question: "Hur skiljer sig er SEO-strategi från andra byråers?",
      answer: "Vi fokuserar på en holistisk approach som kombinerar teknisk SEO, innehållsoptimering och off-page-strategier. Vi anpassar vår strategi efter varje klients unika behov och mål, och använder data-driven analys för att kontinuerligt förbättra våra insatser.",
    },
    {
      question: "Kan ni hjälpa till med lokal SEO för min verksamhet?",
      answer: "Absolut! Vi har stor erfarenhet av lokal SEO och kan hjälpa till med optimering av Google My Business, lokala citeringar, och strategier för att förbättra din synlighet i lokala sökresultat.",
    },
    {
      question: "Hur ofta får jag rapporter om SEO-framsteg?",
      answer: "Vi tillhandahåller månatliga detaljerade rapporter som visar nyckeltal, rankingförändringar, trafik och konverteringar. Vi erbjuder också regelbundna möten för att diskutera resultaten och planera framåt.",
    },
    {
      question: "Arbetar ni med innehållsproduktion för SEO?",
      answer: "Ja, vi erbjuder innehållsproduktion som en del av vår SEO-tjänst. Vi kan hjälpa till med allt från nyckelordsoptimerade blogginlägg och artiklar till produktbeskrivningar och landningssidor.",
    },
  ];

  return (
    <div className="marketing-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>Marketing</span>
      </div>
      <div className="content-wrapper">
        <h1>Marketing & SEO</h1>
        <p className="intro-text">
          Vi hjälper företag att öka sin synlighet online, driva kvalificerad trafik och förbättra konverteringar genom skräddarsydda digitala marknadsföringsstrategier.
        </p>

        <section className="services">
          <h2>Våra Marknadsföringstjänster</h2>
          <div className="service-marketing-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="seo-services">
          <h2>Våra SEO-tjänster</h2>
          <ul className="seo-list">
            {seoServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="marketing-process">
          <h2>Vår Marknadsföringsprocess</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Analys & Strategi</h3>
              <p>Vi analyserar din nuvarande situation och utvecklar en skräddarsydd strategi.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Implementering</h3>
              <p>Vi implementerar optimeringar och marknadsföringsåtgärder enligt vår strategi.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Övervakning & Rapportering</h3>
              <p>Vi övervakar resultaten noggrant och ger regelbundna rapporter om framsteg.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Optimering & Anpassning</h3>
              <p>Vi optimerar kontinuerligt vår strategi baserat på data och resultat.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Vanliga frågor om SEO</h2>
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

export default Marketing;
