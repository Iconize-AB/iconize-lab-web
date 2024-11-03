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

  return (
    <section className="prophet-different">
      <h2>Vi bygger det du behöver - och ditt varumärke</h2>
      <div className="content">
        <div className="items">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`item ${activeItem === item ? 'active' : ''}`}
              onClick={() => setActiveItem(item)}
            >
              {item}
              {activeItem === item && <span className="arrow">›</span>}
            </div>
          ))}
        </div>
        <div className="description">
          <p>{descriptions[activeItem]}</p>
        </div>
      </div>
    </section>
  );
};

export default IconizeDifferentSection;
