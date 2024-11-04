import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MagentoPage.scss';
import magentoLogo from '../resources/Magento-Logo-PNG.png';
import { getAllArticles } from '../utils/contentfulClient';
import ArticleCard from '../components/ArticleCard/ArticleCard';

const MagentoPage = () => {
  const [aktivFråga, setAktivFråga] = useState(null);
  const [aktivFunktion, setAktivFunktion] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch articles with magento tag
    const loadArticles = async () => {
      const articleData = await getAllArticles('magento');
      setArticles(articleData);
    };
    loadArticles();
  }, []);

  const magentoTjänster = [
    { namn: "Magento Butiksutveckling", ikon: "🏪" },
    { namn: "Magento Migrering", ikon: "🚀" },
    { namn: "Magento Optimering", ikon: "⚡" },
    { namn: "Magento Support & Underhåll", ikon: "🛠️" },
  ];

  const magentoFunktioner = [
    { titel: 'Skalbar Arkitektur', beskrivning: 'Magentos robusta arkitektur låter din e-handelsbutik växa med ditt företag.' },
    { titel: 'Anpassningsbar Design', beskrivning: 'Skapa en unik shoppingupplevelse med Magentos flexibla temasystem.' },
    { titel: 'Hantering av Flera Butiker', beskrivning: 'Hantera flera butiker från en enda backend, perfekt för internationella företag.' },
    { titel: 'Avancerade SEO-verktyg', beskrivning: 'Öka din synlighet online med Magentos inbyggda SEO-funktioner.' },
    { titel: 'Omfattande Marknadsplats', beskrivning: 'Utöka funktionaliteten med tusentals tillägg från Magento Marketplace.' },
    { titel: 'Mobilanpassad', beskrivning: 'Erbjud en sömlös shoppingupplevelse på alla enheter med responsiv design.' },
  ];

  const vanligaFrågor = [
    {
      fråga: "Varför ska jag välja Magento för min e-handelsbutik?",
      svar: "Magento är en kraftfull, flexibel e-handelsplattform som erbjuder skalbarhet, anpassning och ett brett utbud av funktioner. Den är idealisk för företag i alla storlekar, från små nystartade företag till stora företag."
    },
    {
      fråga: "Kan ni migrera min befintliga butik till Magento?",
      svar: "Ja, vi erbjuder Magento-migreringstjänster. Vi kan överföra dina produkter, kunder och orderhistorik från din nuvarande plattform till Magento, vilket säkerställer en smidig övergång med minimal störning för din verksamhet."
    },
    {
      fråga: "Hur lång tid tar det att utveckla en Magento-butik?",
      svar: "Utvecklingstiden kan variera beroende på projektets komplexitet. En grundläggande Magento-butik kan sättas upp på 4-6 veckor, medan mer komplexa, skräddarsydda butiker kan ta 3-6 månader. Vi kommer att ge en detaljerad tidslinje efter att ha bedömt dina specifika krav."
    },
    {
      fråga: "Erbjuder ni Magento-hostingtjänster?",
      svar: "Även om vi inte tillhandahåller hosting direkt, kan vi rekommendera och hjälpa till att sätta upp optimala hostinglösningar för din Magento-butik. Vi samarbetar med pålitliga hostingpartners som specialiserar sig på Magento-hosting för att säkerställa bästa prestanda för din webbplats."
    },
    {
      fråga: "Kan ni integrera Magento med mina befintliga system?",
      svar: "Absolut. Vi har omfattande erfarenhet av att integrera Magento med olika ERP-, CRM- och andra affärssystem. Vi kan skapa anpassade integrationer för att effektivisera dina verksamhetsprocesser och förbättra effektiviteten."
    },
  ];

  return (
    <div className="magento-page">
      <div className="breadcrumb">
        <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>Magento-utveckling</span>
      </div>
      <div className="content-wrapper">
        <div className="magento-header">
          <img src={magentoLogo} alt="Magento Logotyp" className="magento-logo" />
        </div>
        <p className="intro-text">
          Vi specialiserar oss på att skapa kraftfulla, skalbara e-handelslösningar med Magento. 
          Vårt expertteam kan hjälpa dig att utnyttja den här robusta plattformens fulla potential för att driva tillväxten i din onlineverksamhet.
        </p>

        <section className="magento-services">
          <h2>Våra Magento-tjänster</h2>
          <div className="services-grid">
            {magentoTjänster.map((tjänst, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <span className="service-icon">{tjänst.ikon}</span>
                </div>
                <h3 className="service-name">{tjänst.namn}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="magento-features">
          <h2>Viktiga Magento-funktioner</h2>
          <div className="features-grid">
            {magentoFunktioner.map((funktion, index) => (
              <div
                key={index}
                className={`feature-item ${aktivFunktion === index ? 'active' : ''}`}
                onMouseEnter={() => setAktivFunktion(index)}
                onMouseLeave={() => setAktivFunktion(null)}
              >
                <h3>{funktion.titel}</h3>
                {aktivFunktion === index && <p>{funktion.beskrivning}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="magento-process">
          <h2>Vår Magento-utvecklingsprocess</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upptäckt & Planering</h3>
              <p>Vi analyserar dina krav och skapar en detaljerad projektplan.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Våra designers skapar ett engagerande och användarvänligt gränssnitt för din butik.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Utveckling & Anpassning</h3>
              <p>Vi bygger din Magento-butik, inklusive eventuella anpassade moduler eller integrationer.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testning & Lansering</h3>
              <p>Vi testar din butik noggrant och hjälper till med lanseringsprocessen.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Vanliga frågor</h2>
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
            <h2>Redo att bygga din Magento e-handelsbutik?</h2>
            <p>Låt oss diskutera hur vi kan skapa en kraftfull online-närvaro för ditt företag med Magento.</p>
            <button className="cta-button">Kom igång</button>
          </div>
        </section>

      {articles.length > 0 && (
        <div className="magento-case-studies">
          <div className="content-wrapper-articles">
            <h2>Artiklar om Magento</h2>
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

export default MagentoPage;
