import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Industries.scss';

const Industries = () => {
  const [activeDots, setActiveDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDots(prev => {
        if (prev < 8) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const industries = [
    ['Aerospace', 'Education', 'Financial Services', 'Retail'],
    ['B2B', 'Energy / Utilities', 'Healthcare', 'Technology, Media & Telecom'],
    ['Consumer Goods', 'Entertainment', 'Industrial Products', 'Travel / Hospitality']
  ];

  const featuredIndustries = [
    {
      name: 'FINANCIAL SERVICES',
      image: 'path_to_financial_services_image.jpg'
    },
    {
      name: 'HEALTHCARE',
      image: 'path_to_healthcare_image.jpg'
    },
    {
      name: 'RETAIL',
      image: 'path_to_retail_image.jpg'
    },
    {
      name: 'TECHNOLOGY, MEDIA & TELECOM',
      image: 'path_to_tech_media_telecom_image.jpg'
    }
  ];

  return (
    <div className="industries-page">
      <div className="breadcrumb">
        <span>Home</span> › <span>Services</span> › <span className="current">Industries</span>
      </div>
      
      <h1>Industries We Serve</h1>
      
      <div className="industry-content">
        <div className="description">
          <p>
            Prophet helps companies from dozens of industries find uncommon growth as they fend off new
            entrants. Our multidisciplinary teams work closely with key stakeholders, creating pragmatic, high-
            impact solutions that outpace the competition.
          </p>
        </div>
        
        <div className="circle-animation">
          {[...Array(9)].map((_, index) => (
            <div key={index} className={`dot ${index <= activeDots ? 'active' : ''}`} />
          ))}
        </div>
      </div>
      
      <div className="industries-list">
        {industries.map((column, columnIndex) => (
          <div key={columnIndex} className="column">
            {column.map((industry, industryIndex) => (
              <div key={industryIndex} className="industry">{industry}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="featured-industries">
        <h2>Featured Industries</h2>
        <p>
          Healthcare, financial services, retail and technology, media & telecom are among the industries most 
          affected by recent upheavals in customer expectations, digital disruptors and government regulation. 
          Learn how we are guiding organizations to extraordinary growth.
        </p>
        <div className="featured-grid">
          {featuredIndustries.map((industry, index) => (
            <div key={index} className="featured-item">
              <img src={industry.image} alt={industry.name} />
              <Link to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}>
                {industry.name} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
