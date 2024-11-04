import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ArticleCard.scss';

const ArticleCard = ({ article }) => {
  const { title, description, slug, image, tags } = article;
  
  // Map tag IDs to more readable display names
  const getTagDisplay = (tag) => {
    const tagMap = {
      'web': 'Webbutveckling',
      'software': 'Apputveckling',
      'app': 'App',
      'ecommerce': 'E-handel',
      'developments': 'Utveckling',
      'woocommerce': 'WooCommerce',
      'marketing': 'Marknadsföring',
      'magento': 'Magento'
    };
    return tagMap[tag] || tag;
  };
  
  return (
    <div className="article-card">
      <div className="article-card__image-container">
        {image && (
          <img 
            src={`https:${image}`} 
            alt={title} 
            className="article-card__image" 
          />
        )}
      </div>
      <div className="article-card__content">
        {tags && tags.length > 0 && (
          <div className="article-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="article-card__tag">
                {getTagDisplay(tag)}
              </span>
            ))}
          </div>
        )}
        <h3 className="article-card__title">{title}</h3>
        <p className="article-card__description">{description}</p>
        <Link 
          to={`/case-studies/${slug}`} 
          className="article-card__button"
        >
          Läs mer
        </Link>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default ArticleCard; 