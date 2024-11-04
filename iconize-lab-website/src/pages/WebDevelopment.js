import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WebDevelopment.scss";
import { getAllArticles } from '../utils/contentfulClient';
import ArticleCard from '../components/ArticleCard/ArticleCard';

const WebDevelopment = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch articles with web tag
    const loadArticles = async () => {
      const articleData = await getAllArticles('web');
      setArticles(articleData);
    };
    loadArticles();
  }, []);

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
      question: "Vilka typer av webbapplikationer kan ni utveckla?",
      answer: "Vi utvecklar ett brett utbud av webbapplikationer, inklusive e-handelsplattformar, innehållshanteringssystem, progressiva webbappar, single-page applications och skräddarsydda företagslösningar.",
    },
    {
      question: "Hur säkerställer ni säkerheten i webbapplikationer?",
      answer: "Vi implementerar bästa praxis för webbsäkerhet, inklusive datakryptering, säkra autentiseringsmetoder, regelbundna säkerhetsgranskningar och skydd mot vanliga sårbarheter som SQL-injektion och cross-site scripting (XSS).",
    },
    {
      question: "Kan ni integrera tredjepartstjänster och API:er i min webbapplikation?",
      answer: "Ja, vi har omfattande erfarenhet av att integrera olika tredjepartstjänster och API:er, såsom betalningslösningar, sociala medieplattformar, analysverktyg och andra externa tjänster för att förbättra funktionaliteten i din webbapplikation.",
    },
    {
      question: "Erbjuder ni löpande underhåll och support för webbapplikationer?",
      answer: "Absolut. Vi erbjuder omfattande underhålls- och supporttjänster, inklusive buggfixar, säkerhetsuppdateringar, prestandaoptimering och funktionsförbättringar för att hålla din webbapplikation i toppskick och uppdaterad.",
    },
    {
      question: "Hur arbetar ni med responsiv design och mobiloptimering?",
      answer: "Vi använder en mobile-first-approach och responsiva designtekniker för att säkerställa att din webbapplikation ser bra ut och fungerar väl på alla enheter, från smartphones till stationära datorer. Vi optimerar även för prestanda för att ge en smidig användarupplevelse på alla plattformar.",
    },
  ];

  return (
    <div className="web-development-page">
      <div className="breadcrumb">
        <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>Webbutveckling</span>
      </div>
      <div className="content-wrapper">
        <h1>Webbutveckling</h1>
        <p className="intro-text">
          Vi bygger responsiva, användarvänliga webbplatser och webbapplikationer som levererar exceptionella digitala upplevelser och driver affärstillväxt.
        </p>

        <section className="technologies">
          <h2>Teknologier Vi Använder</h2>
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
          <h2>Vår Webbutvecklingsprocess</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Kravanalys</h3>
              <p>Vi arbetar nära dig för att förstå dina mål och definiera projektkraven.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyper</h3>
              <p>Våra designers skapar intuitiva och visuellt tilltalande användargränssnitt och upplevelser.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Utveckling & Testning</h3>
              <p>Vi bygger din webbapplikation med moderna teknologier och utför grundlig testning.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Driftsättning & Optimering</h3>
              <p>Vi driftsätter din applikation och optimerar den för prestanda och sökmotorer.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Vanliga Frågor</h2>
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
            <h2>Redo att Starta Ditt Webbprojekt?</h2>
            <p>Låt oss diskutera hur vi kan hjälpa dig att skapa en modern och effektiv webbapplikation som driver din verksamhet framåt.</p>
            <button className="cta-button">Kom Igång</button>
          </div>
        </div>
      </div>

      {articles.length > 0 && (
        <div className="articles-content-wrapper">
          <section className="web-development-case-studies">
            <h2>Utvecklingsartiklar</h2>
            <div className="cases-container">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default WebDevelopment;
