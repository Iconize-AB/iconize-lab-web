import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IntegrationPage.scss';
import sapLogo from '../resources/sap.png';
import salesforceLogo from '../resources/salesforce.png';
import microsoftDynamicsLogo from '../resources/hubspot.png';

const IntegrationsPage = () => {
  const [aktivFråga, setAktivFråga] = useState(null);
  const [aktivFunktion, setAktivFunktion] = useState(null);

  const integrationsTyper = [
    { namn: "ERP-integration", ikon: "🏭" },
    { namn: "CRM-integration", ikon: "🤝" },
    { namn: "E-handelsintegration", ikon: "🛒" },
    { namn: "API-utveckling", ikon: "🔌" },
    { namn: "Datamigrering", ikon: "💾" },
  ];

  const integrationsFunktioner = [
    { titel: 'Sömlöst dataflöde', beskrivning: 'Säkerställ smidig dataöverföring mellan dina ERP/CRM-system och webb/e-handelsplattformar.' },
    { titel: 'Realtidssynkronisering', beskrivning: 'Håll ditt lager, ordrar och kunddata uppdaterade i alla system.' },
    { titel: 'Anpassade arbetsflöden', beskrivning: 'Utveckla skräddarsydda arbetsflöden som matchar dina unika affärsprocesser.' },
    { titel: 'Skalbar arkitektur', beskrivning: 'Bygg integrationer som kan växa med dina affärsbehov.' },
    { titel: 'Säkerhet och efterlevnad', beskrivning: 'Implementera robusta säkerhetsåtgärder och säkerställ efterlevnad av dataskyddsregler.' },
    { titel: 'Prestandaoptimering', beskrivning: 'Optimera integrationsprestandaför snabbare databehandling och minskad latens.' },
  ];

  const plattformar = [
    { namn: 'SAP', logo: sapLogo },
    { namn: 'Salesforce', logo: salesforceLogo },
    { namn: 'Microsoft Dynamics', logo: microsoftDynamicsLogo },
  ];

  const vanligaFrågor = [
    {
      fråga: "Hur kan integrering av ERP/CRM med min webbplats gynna mitt företag?",
      svar: "Integrering av ERP/CRM-system med din webbplats kan effektivisera verksamheten, förbättra datanoggrannheten, förbättra kundupplevelser och ge realtidsinsikter för bättre beslutsfattande."
    },
    {
      fråga: "Hur lång tid tar ett typiskt integrationsprojekt?",
      svar: "Varaktigheten för ett integrationsprojekt kan variera beroende på komplexitet, men sträcker sig vanligtvis från 2-6 månader. Vi kommer att ge en detaljerad tidslinje efter att ha bedömt dina specifika krav."
    },
    {
      fråga: "Kan ni integrera anpassade eller äldre system?",
      svar: "Ja, vi har erfarenhet av att integrera ett brett utbud av system, inklusive skräddarsydda och äldre lösningar. Vi kommer att arbeta med dig för att utveckla den bästa integrationsstrategin för din unika uppsättning."
    },
    {
      fråga: "Hur säkerställer ni datasäkerheten under integrationsprocessen?",
      svar: "Vi implementerar branschstandardsäkerhetsåtgärder, inklusive kryptering, säkra API:er och åtkomstkontroller. Vi följer också relevanta dataskyddsregler för att säkerställa att dina data förblir säkra under hela integrationsprocessen."
    },
    {
      fråga: "Erbjuder ni support efter att integrationen är klar?",
      svar: "Absolut. Vi erbjuder löpande support- och underhållstjänster för att säkerställa att dina integrationer fortsätter att fungera smidigt och anpassar sig till eventuella förändringar i dina system eller affärsprocesser."
    },
  ];

  return (
    <div className="integration-page">
      <div className="breadcrumb">
        <Link to="/">Hem</Link> &gt; <Link to="/services">Tjänster</Link> &gt;{" "}
        <span>Integrationstjänster</span>
      </div>
      <div className="content-wrapper">
        <h1>Integrationstjänster</h1>
        <p className="intro-text">
          Vi specialiserar oss på att sömlöst integrera ERP- och CRM-system med webb- och e-handelsplattformar, 
          optimera dina affärsprocesser och förbättra kundupplevelser.
        </p>

        <section className="integration-types">
          <h2>Integrationslösningar vi erbjuder</h2>
          <div className="type-grid">
            {integrationsTyper.map((typ, index) => (
              <div key={index} className="type-item">
                <span className="type-icon">{typ.ikon}</span>
                <span className="type-name">{typ.namn}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="integration-features">
          <h2>Viktiga integrationsfunktioner</h2>
          <div className="features-grid">
            {integrationsFunktioner.map((funktion, index) => (
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

        <section className="integration-platforms">
          <h2>Plattformar vi integrerar med</h2>
          <div className="platforms-list">
            {plattformar.map((plattform, index) => (
              <div key={index} className="platform-item">
                <img src={plattform.logo} alt={`${plattform.namn} logotyp`} />
              </div>
            ))}
          </div>
        </section>

        <section className="integration-process">
          <h2>Vår integrationsprocess</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Kravanalys</h3>
              <p>Vi gör en grundlig bedömning av dina nuvarande system och integrationsbehov.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Lösningsdesign</h3>
              <p>Vi utformar en skräddarsydd integrationslösning för att möta dina specifika krav.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Utveckling & Testning</h3>
              <p>Vi utvecklar integrationen och genomför rigorös testning för att säkerställa tillförlitlighet.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Driftsättning & Support</h3>
              <p>Vi driftsätter integrationen och tillhandahåller löpande support och underhåll.</p>
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
        <h2>Redo att effektivisera din verksamhet med sömlösa integrationer?</h2>
          <p>Låt oss diskutera hur vi kan hjälpa dig att integrera dina system och öka din effektivitet.</p>
          <button className="cta-button">Kom igång</button>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;
