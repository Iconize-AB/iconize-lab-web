import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdobeCommercePage.scss';
import adobeCommerceLogo from '../resources/adobe-commerce.png';
import { getAllArticles } from '../utils/contentfulClient';
import ArticleCard from '../components/ArticleCard/ArticleCard';

const AdobeCommercePage = () => {
  const [aktivFråga, setAktivFråga] = useState(null);
  const [aktivFunktion, setAktivFunktion] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const loadArticles = async () => {
      const articleData = await getAllArticles('adobe-commerce');
      setArticles(articleData);
    };
    loadArticles();
  }, []);

  const commerceTjänster = [
    { namn: "Adobe Commerce Butiksutveckling", ikon: "🏪" },
    { namn: "Adobe Commerce Migrering", ikon: "🚀" },
    { namn: "Adobe Commerce Optimering", ikon: "⚡" },
    { namn: "Adobe Commerce Support & Underhåll", ikon: "🛠️" },
  ];

  const commerceFunktioner = [
    { titel: 'Skalbar Arkitektur', beskrivning: 'Adobe Commerce robusta arkitektur låter din e-handelsbutik växa med ditt företag.' },
    { titel: 'Anpassningsbar Design', beskrivning: 'Skapa en unik shoppingupplevelse med Adobe Commerce flexibla temasystem.' },
    { titel: 'Hantering av Flera Butiker', beskrivning: 'Hantera flera butiker från en enda backend, perfekt för internationella företag.' },
    { titel: 'Avancerade SEO-verktyg', beskrivning: 'Öka din synlighet online med Adobe Commerce inbyggda SEO-funktioner.' },
    { titel: 'Omfattande Marknadsplats', beskrivning: 'Utöka funktionaliteten med tusentals tillägg från Adobe Commerce Marketplace.' },
    { titel: 'Mobilanpassad', beskrivning: 'Erbjud en sömlös shoppingupplevelse på alla enheter med responsiv design.' },
  ];

  const vanligaFrågor = [
    {
      fråga: "Varför ska jag välja Adobe Commerce för min e-handelsbutik?",
      svar: "Adobe Commerce är en kraftfull, flexibel e-handelsplattform som erbjuder skalbarhet, anpassning och ett brett utbud av funktioner. Den är idealisk för företag i alla storlekar, från små nystartade företag till stora företag."
    },
    {
      fråga: "Kan ni migrera min befintliga butik till Adobe Commerce?",
      svar: "Ja, vi erbjuder Adobe Commerce-migreringstjänster. Vi kan överföra dina produkter, kunder och orderhistorik från din nuvarande plattform till Adobe Commerce, vilket säkerställer en smidig övergång med minimal störning för din verksamhet."
    },
    {
      fråga: "Hur lång tid tar det att utveckla en Adobe Commerce-butik?",
      svar: "Utvecklingstiden kan variera beroende på projektets komplexitet. En grundläggande Adobe Commerce-butik kan sättas upp på 4-6 veckor, medan mer komplexa, skräddarsydda butiker kan ta 3-6 månader. Vi kommer att ge en detaljerad tidslinje efter att ha bedömt dina specifika krav."
    },
    {
      fråga: "Erbjuder ni Adobe Commerce-hostingtjänster?",
      svar: "Adobe Commerce är en molnbaserad e-handelsplattform som drivs på Adobe Cloud Infrastructure. Detta ger dig en skalbar, säker och högpresterande hosting-lösning direkt från Adobe. Vi hjälper dig att konfigurera och optimera din Adobe Commerce-miljö för bästa möjliga prestanda."
    },
    {
      fråga: "Kan ni integrera Adobe Commerce med mina befintliga system?",
      svar: "Absolut. Vi har omfattande erfarenhet av att integrera Adobe Commerce med olika ERP-, CRM- och andra affärssystem. Vi kan skapa anpassade integrationer för att effektivisera dina verksamhetsprocesser och förbättra effektiviteten."
    },
  ];

  return (
    <div className="adobe-commerce-page">
      <div className="breadcrumb">
        <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>Adobe Commerce-utveckling</span>
      </div>
      <div className="content-wrapper">
        <div className="adobe-commerce-header">
          <img src={adobeCommerceLogo} alt="Adobe Commerce Logo" className="adobe-commerce-logo" />
        </div>
        <p className="intro-text">
          Vi är experter inom Adobe Commerce, den ledande enterprise e-handelsplattformen. 
          Vår team hjälper stora företag att bygga skalbara, säkra och funktionsrika e-handelslösningar som uppfyller moderna B2B- och B2C-behov.
        </p>

        <section className="adobe-commerce-services">
          <h2>Våra Adobe Commerce-tjänster</h2>
          <div className="services-grid">
            {commerceTjänster.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <span className="service-icon">{service.ikon}</span>
                </div>
                <h3 className="service-name">{service.namn}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="adobe-commerce-features">
          <h2>Nyckelfunktioner i Adobe Commerce</h2>
          <div className="features-grid">
            {commerceFunktioner.map((feature, index) => (
              <div
                key={index}
                className={`feature-item ${aktivFunktion === index ? 'active' : ''}`}
                onMouseEnter={() => setAktivFunktion(index)}
                onMouseLeave={() => setAktivFunktion(null)}
              >
                <h3>{feature.titel}</h3>
                {aktivFunktion === index && <p>{feature.beskrivning}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="adobe-commerce-process">
          <h2>Vår Adobe Commerce-utvecklingsprocess</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upptäck & Planering</h3>
              <p>Vi analyserar dina krav och skapar en detaljerad projektplan.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Våra designers skapar en engagerande och användarvänlig gränssnitt för din butik.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Utveckling & Anpassning</h3>
              <p>Vi bygger din Adobe Commerce-butik, inklusive eventuella anpassade moduler eller integreringar.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testning & Läggning</h3>
              <p>Vi testar butiken noggrant och hjälper dig med lanseringen.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Vanliga Frågor</h2>
          {vanligaFrågor.map((item, index) => (
            <div key={index} className="faq-item">
              <h3
                onClick={() =>
                  setAktivFråga(aktivFråga === index ? null : index)
                }
                className={aktivFråga === index ? "active" : ""}
              >
                {item.fråga}
              </h3>
              {aktivFråga === index && <p>{item.svar}</p>}
            </div>
          ))}
        </section>
      </div>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Vill du bygga din Adobe Commerce-butik?</h2>
          <p>Låt oss diskutera hur vi kan skapa en kraftfull online-närvaro för ditt företag med Adobe Commerce.</p>
          <button className="cta-button">Kom igång</button>
        </div>
      </section>

      {articles.length > 0 && (
        <div className="adobe-commerce-case-studies">
          <div className="content-wrapper-articles">
            <h2>Artiklar om Adobe Commerce</h2>
            <div className="cases-container">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdobeCommercePage;
