import React, { useState } from 'react';
import './ProphetDifferentSection.scss';

const ProphetDifferentSection = () => {
  const [activeItem, setActiveItem] = useState('Rigor and Imagination');

  const items = [
    'Rigor and Imagination',
    'One Firm, One Interdisciplinary Approach',
    'Day-One Impact',
    'With You (Not Just for You)'
  ];

  const descriptions = {
    'Rigor and Imagination': "We blend insight and inspiration at every step, pairing a rigorous, empathetic approach to problem-solving with bold creativity to shape sound, original solutions.",
    'One Firm, One Interdisciplinary Approach': "Our integrated team of experts brings diverse perspectives and complementary skills to every engagement, ensuring holistic solutions that address all aspects of your business challenges.",
    'Day-One Impact': "We focus on delivering actionable insights and implementable strategies from the start, ensuring that our work creates immediate value while setting the foundation for long-term success.",
    'With You (Not Just for You)': "We work collaboratively with our clients, becoming an extension of your team. Our approach is hands-on, ensuring knowledge transfer and building your internal capabilities for sustained success."
  };

  return (
    <section className="prophet-different">
      <h2>PROPHET IS DIFFERENT</h2>
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

export default ProphetDifferentSection;
