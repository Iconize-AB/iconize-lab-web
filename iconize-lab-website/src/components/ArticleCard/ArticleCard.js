import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ArticleCard.scss';

const ArticleCard = ({ article }) => {
  const { title, description, slug, image } = article;
  
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
    image: PropTypes.string
  }).isRequired
};

export default ArticleCard; 