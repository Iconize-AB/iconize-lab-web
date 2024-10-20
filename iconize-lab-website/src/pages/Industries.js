import React from "react";
import { Link } from "react-router-dom";
import "./Industries.scss";

const Industries = () => {
  const industries = [
    "Aerospace",
    "Education",
    "Financial Services",
    "Retail",
    "B2B",
    "Energy / Utilities",
    "Healthcare",
    "Technology, Media & Telecom",
    "Consumer Goods",
    "Entertainment",
    "Industrial Products",
    "Travel / Hospitality",
  ];

  const featuredIndustries = [
    {
      name: "Financial Services",
      image: "path_to_financial_services_image.jpg",
      description:
        "Innovative solutions for banks, insurers, and fintech companies.",
    },
    {
      name: "Retail",
      image: "path_to_retail_image.jpg",
      description:
        "Omnichannel experiences for modern retailers and e-commerce businesses.",
    },
    {
      name: "Technology",
      image: "path_to_tech_image.jpg",
      description: "Cutting-edge solutions for tech companies and startups.",
    },
  ];

  return (
    <div className="industries-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <span>Industries</span>
      </div>
      <div className="content-wrapper">
        <h1>Industries We Serve</h1>

        <div className="industry-content">
          <p className="description">
            At Iconize Lab, we partner with companies across various industries
            to drive digital transformation and foster innovation. Our
            multidisciplinary teams create tailored, high-impact solutions that
            help businesses stay ahead in rapidly evolving markets.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-item">
              <span>{industry}</span>
            </div>
          ))}
        </div>

        <div className="featured-industries">
          <h2>Featured Industries</h2>
          <p className="featured-description">
            We have extensive experience in sectors that are at the forefront of
            digital innovation. Explore how we're helping organizations in these
            key industries achieve extraordinary growth and digital excellence.
          </p>
          <div className="featured-grid">
            {featuredIndustries.map((industry, index) => (
              <div key={index} className="featured-item">
                <img src={industry.image} alt={industry.name} />
                <div className="featured-content">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                  <Link
                    to={`/industries/${industry.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="learn-more"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
