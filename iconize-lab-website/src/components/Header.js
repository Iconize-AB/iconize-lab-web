import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../resources/iconize.png'; // Adjust the path as needed

function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'About', items: ['Leadership', 'Careers', 'Prophet Culture', 'Prophet Impact', 'News & Press'] },
    { title: 'Services', items: ['Industries'] },
    { title: 'Work', items: ['Case Studies', 'Testimonials'] },
    { title: 'Thinking', items: ['Prophet Thinking', 'Aaker on Brands', 'Brand Relevance Index®', 'CMO Community', 'Uncommon Growth Community'] },
    { title: 'Connect', items: ['Subscribe'] }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Iconize Lab Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}><Link to={`/${item.title.toLowerCase()}`}>{item.title}</Link></li>
          ))}
        </ul>
      </nav>
      <div className="right-section">
        <span className="language">English</span>
        <button className="search-btn">🔍</button>
        <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`full-screen-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          {menuItems.map((category, index) => (
            <div key={index} className="menu-category">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
