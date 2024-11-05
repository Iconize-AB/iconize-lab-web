import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Header.scss";
import logo from "../resources/[i]conizeLab.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { title: "Om oss", path: "/about" },
    { title: "Tjänster", path: "/services" },
    { title: "Kontakta oss", path: "/connect", isButton: true }
  ];

  const menuItems = [
    {
      title: "Om oss",
      path: "/about",
    },
    { title: "Kontakt", path: "/connect" },
    {
      title: "Våra fokusområden",
      path: "/services",
      items: [
        { name: "E-commerce", path: "/services/ecommerce" },
        { name: "Appliktionsutveckling", path: "/services/app-development" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Marketing", path: "/services/marketing" },
        { name: "Magento", path: "/services/ecommerce/magento" },
        { name: "WooCommerce", path: "/services/ecommerce/woocommerce" },
        { name: "Adobe Commerce", path: "/services/ecommerce/adobe-commerce" },
        { name: "Integrationer", path: "/services/integration" },
      ],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Iconize Lab Logo" />
          </Link>
        </div>

        <div className="nav-container">
          {/* Main Navigation */}
          <nav className="main-nav">
            <ul>
              {mainNavItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className={item.isButton ? 'nav-button' : ''}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          
        </div>
        <button
            className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ backgroundColor: '#000000' }}  // Add inline style
          >
            <RxHamburgerMenu color="white" size={24} />
          </button>
      </div>

      <div className={`full-screen-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* Add close button */}
          <button
            className="close-menu-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span></span>
            <span></span>
          </button>

          <div className="menu-left">
            <h1>TILLSAMMANS</h1>
            <p>Varje kund är en innovationsledare inom sin bransch - eller vill bli en.</p>
            <p>Vi vill bidra till framsteg och göra livet bättre. Om du också vill det - då vill vi gärna jobba med dig!</p>
          </div>
          
          <div className="menu-right">
            <h2>MED VÅRA KUNDER</h2>
            <div className="pills-container">
              {/* Main menu items */}
              {menuItems.map((item, index) => (
                <Link 
                  key={`main-${index}`}
                  to={item.path || '#'}
                  className="menu-pill"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Sub-items from "Våra fokusområden" */}
              {menuItems[2].items.map((item, index) => (
                <Link 
                  key={`services-${index}`}
                  to={item.path}
                  className="menu-pill"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
