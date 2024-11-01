import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WooCommercePage.scss';
import wooCommerceLogo from '../resources/woocommerce.png';

const WooCommercePage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wooCommerceServices = [
    { name: "WooCommerce Butiksutveckling", icon: "🏪" },
    { name: "WooCommerce Migration", icon: "🚀" },
    { name: "Anpassad Pluginutveckling", icon: "🧩" },
    { name: "WooCommerce Support & Underhåll", icon: "🛠️" },
  ];

  const wooCommerceFeatures = [
    { title: 'Enkel installation', description: 'Få din onlinebutik igång snabbt med intuitiva installationsguider och konfigurationsalternativ.' },
    { title: 'Anpassningsbar', description: 'Skräddarsy din butiks utseende och funktionalitet med tusentals teman och plugins.' },
    { title: 'Skalbar', description: 'Väx ditt företag utan begränsningar, från några få produkter till tusentals.' },
    { title: 'Säker', description: 'Dra nytta av inbyggda säkerhetsfunktioner och regelbundna uppdateringar för att hålla din butik säker.' },
    { title: 'SEO-vänlig', description: 'Optimera din butik för sökmotorer med WooCommerces SEO-vänliga struktur.' },
    { title: 'Mobilanpassad', description: 'Erbjud en sömlös shoppingupplevelse på alla enheter med responsiv design.' },
  ];

  const faqItems = [
    {
      question: "Varför ska jag välja WooCommerce för min e-handelsbutik?",
      answer: "WooCommerce är en kraftfull och flexibel e-handelsplattform som erbjuder skalbarhet, anpassning och ett brett utbud av funktioner. Den är idealisk för företag i alla storlekar, från små nystartade företag till stora företag."
    },
    {
      question: "Kan ni migrera min befintliga butik till WooCommerce?",
      answer: "Ja, vi erbjuder WooCommerce-migreringstjänster. Vi kan överföra dina produkter, kunder och orderhistorik från din nuvarande plattform till WooCommerce, vilket säkerställer en smidig övergång med minimal störning för din verksamhet."
    },
    {
      question: "Hur lång tid tar det att utveckla en WooCommerce-butik?",
      answer: "Utvecklingstiden kan variera beroende på projektets komplexitet. En grundläggande WooCommerce-butik kan sättas upp på 2-4 veckor, medan mer komplexa, skräddarsydda butiker kan ta 2-3 månader. Vi kommer att ge en detaljerad tidslinje efter att ha bedömt dina specifika krav."
    },
    {
      question: "Erbjuder ni WooCommerce-hostingtjänster?",
      answer: "Även om vi inte tillhandahåller hosting direkt kan vi rekommendera och hjälpa till att sätta upp optimala hostinglösningar för din WooCommerce-butik. Vi samarbetar med pålitliga hostingpartners som specialiserar sig på WordPress och WooCommerce-hosting för att säkerställa bästa prestanda för din webbplats."
    },
    {
      question: "Kan ni integrera WooCommerce med mina befintliga system?",
      answer: "Absolut. Vi har omfattande erfarenhet av att integrera WooCommerce med olika ERP-, CRM- och andra affärssystem. Vi kan skapa anpassade integrationer för att effektivisera dina verksamheter och förbättra effektiviteten."
    },
  ];

  return (
    <div className="woocommerce-page">
      <div className="breadcrumb">
        <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>WooCommerce-utveckling</span>
      </div>
      <div className="content-wrapper">
        <div className="woocommerce-header">
          <img src={wooCommerceLogo} alt="WooCommerce Logo" className="woocommerce-logo" />
          <h1>WooCommerce-utvecklingstjänster</h1>
        </div>
        <p className="intro-text">
          Vi specialiserar oss på att skapa kraftfulla, skalbara e-handelslösningar med WooCommerce. 
          Vårt expertteam kan hjälpa dig att utnyttja den fulla potentialen i denna robusta plattform för att driva tillväxten i din onlineverksamhet.
        </p>

        <section className="woocommerce-services">
          <h2>Våra WooCommerce-tjänster</h2>
          <div className="services-grid">
            {wooCommerceServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-name">{service.name}</h3>
                <div className="service-overlay">
                  <span className="learn-more">Läs mer →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="woocommerce-features">
          <h2>Viktiga WooCommerce-funktioner</h2>
          <div className="features-grid">
            {wooCommerceFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <h3>{feature.title}</h3>
                {activeFeature === index && <p>{feature.description}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="woocommerce-process">
          <h2>Vår WooCommerce-utvecklingsprocess</h2>
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
              <p>Vi bygger din WooCommerce-butik, inklusive eventuella anpassade plugins eller integrationer.</p>
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

        <div className="cta-section">
          <h2>Redo att bygga din WooCommerce e-handelsbutik?</h2>
          <p>Låt oss diskutera hur vi kan skapa en kraftfull online-närvaro för ditt företag med WooCommerce.</p>
          <button className="cta-button">Kom igång</button>
        </div>
      </div>
    </div>
  );
};

export default WooCommercePage;
