import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AppDevelopment.scss";
import { getAllArticles } from '../utils/contentfulClient';
import ArticleCard from '../components/ArticleCard/ArticleCard';

const AppDevelopment = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch articles with software tag
    const loadArticles = async () => {
      const articleData = await getAllArticles('software');
      setArticles(articleData);
    };
    loadArticles();
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
          Vi skapar innovativa mobilapplikationer som engagerar användare och driver affärstillväxt.
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

        <section className="app-development-process">
          <h2>Vår Apputvecklingsprocess</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upptäckt & Planering</h3>
              <p>
                Vi analyserar dina krav och skapar en detaljerad projektplan.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyp</h3>
              <p>
                Våra designers skapar intuitiva och engagerande användargränssnitt.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Utveckling & Testning</h3>
              <p>
                Vi bygger din app med den senaste tekniken och utför noggrann testning.
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Lansering & Support</h3>
              <p>
                Vi hjälper dig att lansera din app och erbjuder kontinuerligt support och underhåll.
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
            <h2>Redo att Lansera Din Mobilapp?</h2>
            <p>Låt oss diskutera hur vi kan hjälpa dig att skapa en innovativ mobilapplikation som engagerar användare och driver affärstillväxt.</p>
            <button className="cta-button">Kom Igång</button>
          </div>
        </div>
      </div>

      {articles.length > 0 && (
        <div className="articles-content-wrapper">
          <section className="app-development-case-studies">
            <h2>Våra Appprojekt</h2>
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

export default AppDevelopment;
