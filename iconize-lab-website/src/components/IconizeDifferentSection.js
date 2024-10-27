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
    'Kreativa eldsjälar': "Vi tror på kreativ problemlösning och att testa nya vägar för att nå nya mål. På så sätt skapar vi unika lösningar som tar er dit ni vill.",
    'Ett bolag, Allt du behöver': "Vårt team har en bred erfarenhet som säkrar att ni får den hjälp ni verkligen behöver.",
    'Framgång från dag 1': "Vi siktar alltid på att våra lösningar och insikter ska leverera värde från dag 1 - samtidigt som vi tänker långsiktigt för att göra er framgångsrika imorgon. Och dagen därefter.",
    'Vi är MED dig hela vägen': "Vi jobbar nära våra kunder och blir en verklig förlängning av teamet. På så sätt säkras kunskapsutbytet och ni kan enkelt ta vid där vi slutar. Om ni nu inte vill ha med oss för evigt."
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
