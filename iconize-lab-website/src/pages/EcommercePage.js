import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EcommercePage.scss';
import magentoLogo from '../resources/magento.png';
import wooCommerceLogo from '../resources/woocommerce.png';
import adobeCommerceLogo from '../resources/adobe-commerce.png';

function EcommercePage() {
  const [aktivFunktion, setAktivFunktion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ehandelsFunktioner = [
    { titel: 'Produktkatalog', beskrivning: 'Skapa och hantera en robust produktkatalog med anpassningsbara attribut och kategorier.' },
    { titel: 'Säker utcheckning', beskrivning: 'Implementera en säker och effektiv utcheckningsprocess med flera betalningsalternativ.' },
    { titel: 'Mobilanpassad', beskrivning: 'Säkerställ en sömlös shoppingupplevelse på alla enheter med responsiv design.' },
    { titel: 'Sök & filtrering', beskrivning: 'Implementera avancerade sök- och filtreringsmöjligheter för att hjälpa kunder att enkelt hitta produkter.' },
    { titel: 'Analys & rapportering', beskrivning: 'Få värdefulla insikter med inbyggd analys och anpassningsbara rapporteringsverktyg.' },
    { titel: 'Lagerhantering', beskrivning: 'Hantera ditt lager effektivt med realtidsuppdateringar av lagersaldo och automatiserad påfyllning.' },
  ];

  const plattformar = [
    { namn: 'Magento', logo: magentoLogo },
    { namn: 'WooCommerce', logo: wooCommerceLogo },
    { namn: 'Adobe Commerce', logo: adobeCommerceLogo },
  ];

  return (
    <div className="ecommerce-page">
      <div className="content-wrapper-ecommerce">
        <div className="breadcrumb">
          <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt; <span>E-handel</span>
        </div>
        <div className="section-content-ecommerce">
          <h1>Transformera din verksamhet med våra e-handelslösningar</h1>
          <p>Vi utvecklar robusta och skalbara e-handelsplattformar anpassade efter dina unika affärsbehov.</p>
        </div>
        <div className="ecommerce-features">
          <h2>Nyckelfunktioner</h2>
          <div className="features-grid">
            {ehandelsFunktioner.map((funktion, index) => (
              <div
                key={index}
                className={`feature-item ${aktivFunktion === index ? 'active' : ''}`}
                onClick={() => setAktivFunktion(aktivFunktion === index ? null : index)}
              >
                <h3>{funktion.titel}</h3>
                {(aktivFunktion === index || window.innerWidth > 768) && <p>{funktion.beskrivning}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ecommerce-platforms">
        <div className="content-wrapper-ecommerce">
          <h2>Plattformar vi arbetar med</h2>
          <div className="platforms-grid">
            {plattformar.map((plattform, index) => (
              <div key={index} className="platform-item">
                <img src={plattform.logo} alt={`${plattform.namn} logotyp`} className="platform-logo" />
                <h3>{plattform.namn}</h3>
                <p>Utforska möjligheterna med {plattform.namn} och förbättra din e-handelsupplevelse.</p>
                <Link to={`/services/ecommerce/${plattform.namn.toLowerCase()}`} className="platform-button">
                  Läs mer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cta-section-wrapper">
        <div className="content-wrapper-ecommerce">
          <div className="cta-section">
            <h2>Redo att lansera din e-butik?</h2>
            <p>Låt oss diskutera hur vi kan hjälpa dig att skapa en kraftfull online-närvaro och öka försäljningen.</p>
            <button className="cta-button">Kom igång</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommercePage;
