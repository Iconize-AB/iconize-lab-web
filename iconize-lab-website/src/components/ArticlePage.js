import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getArticleBySlug } from '../utils/contentfulClient';
import './ArticlePage.scss';

function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="article-paragraph">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="article-list">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="article-list">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  useEffect(() => {
    async function loadArticle() {
      const articleData = await getArticleBySlug(slug);
      if (!articleData) {
        navigate('/404');
        return;
      }
      setArticle(articleData);
      setLoading(false);
    }
    loadArticle();
  }, [slug, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <h1>{article.title}</h1>
        {article.subtitle && <h2>{article.subtitle}</h2>}
        {article.image && (
          <img 
            src={`https:${article.image}`} 
            alt={article.title} 
            className="article-image"
          />
        )}
        <div className="article-content">
          {article.content && documentToReactComponents(article.content, renderOptions)}
        </div>
      </div>
    </div>
  );
}

export default ArticlePage; 