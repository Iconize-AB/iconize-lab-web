import React, { useState } from 'react';
import './IconizeDifferentSection.scss';

const IconizeDifferentSection = () => {
  const [activeItem, setActiveItem] = useState('Kreativa eldsjälar');

  const items = [
    'Kreativa eldsjälar',
    'Ett bolag, Allt du behöver',
    'Framgång från dag 1',
    'Vi är MED dig hela vägen'
  ];

  const descriptions = {
    'Kreativa eldsjälar': "Vi tror starkt på kraften i kreativ problemlösning och vågar alltid utforska nya och innovativa vägar för att nå ännu högre mål. Genom att tänka utanför ramarna och ständigt utmana traditionella metoder skapar vi lösningar som är skräddarsydda för att passa just era behov och visioner. Med en kombination av erfarenhet, nytänkande och anpassningsförmåga hjälper vi er att förverkliga era mål och ta er dit ni verkligen vill nå.",
    'Ett bolag, Allt du behöver': "Vårt team besitter en bred och djup erfarenhet som garanterar att ni får exakt den support och expertis ni behöver. Med kompetens inom flera områden och en förståelse för de utmaningar ni möter, ser vi till att leverera lösningar som är anpassade till era specifika behov. Ni kan känna er trygga i att vi står vid er sida genom hela processen, med fokus på att skapa verkligt värde och långsiktig framgång.",
    'Framgång från dag 1': "Vi strävar alltid efter att våra lösningar och insikter ska ge er omedelbart värde redan från dag ett. Samtidigt har vi en tydlig långsiktig vision för att säkerställa er framgång både i morgon och långt in i framtiden. Genom att kombinera snabb leverans med strategisk hållbarhet hjälper vi er att bygga en stark grund för kontinuerlig tillväxt och bestående framgång – idag, i morgon och varje dag framöver.",
    'Vi är MED dig hela vägen': "Vi arbetar tätt tillsammans med våra kunder och blir en naturlig förlängning av ert team. Genom detta nära samarbete säkerställer vi ett effektivt kunskapsutbyte och en smidig överlämning, vilket gör att ni enkelt kan fortsätta på egen hand när vårt uppdrag är slutfört. Självklart finns vi alltid här för att stötta er vidare, om ni skulle vilja behålla oss som en långsiktig partner."
  };

  // Split the items into shorter display names for mobile
  const itemDisplayNames = {
    'Kreativa eldsjälar': 'Kreativa',
    'Ett bolag, Allt du behöver': 'Ett bolag',
    'Framgång från dag 1': 'Framgång',
    'Vi är MED dig hela vägen': 'Med dig'
  };

  return (
    <section className="iconize-lab-different">
      <div className="content">
        <div className="tab-container">
          <div className="tabs">
            {items.map((item, index) => (
              <button 
                key={index} 
                className={`tab ${activeItem === item ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}
              >
                <span className="desktop-text">{item}</span>
                <span className="mobile-text">{itemDisplayNames[item]}</span>
              </button>
            ))}
          </div>
          <div className="tab-content">
            <p>{descriptions[activeItem]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconizeDifferentSection;
