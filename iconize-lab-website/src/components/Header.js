import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../resources/iconize.png"; // Adjust the path as needed

function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "About",
      items: ["Careers", "Iconize Lab's Culture", "Iconize Lab's impact"],
    },
    {
      title: "Services",
      items: [
        { name: "Industries", path: "/industries" },
        { name: "App Development", path: "/services/app-development" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Marketing", path: "/services/marketing" },
        { name: "Magento", path: "/services/magento" },
        { name: "WooCommerce", path: "/services/woocommerce" },
        { name: "Integrations", path: "/services/integration" },
      ],
    },
    { title: "Connect" },
    {
      title: "Areas of focus",
      items: [
        "Saleor",
        "WooCommerce",
        "Shopify",
        { name: "E-commerce", path: "/services/ecommerce" },
        { name: "App Development", path: "/services/app-development" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Marketing", path: "/services/marketing" },
        { name: "Magento", path: "/services/magento" },
        { name: "WooCommerce", path: "/services/woocommerce" },
        { name: "Integrations", path: "/services/integration" },
      ],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleMenuItemClick = (path) => {
    if (path) {
      navigate(path);
      toggleMenu();
    }
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
            <li key={index}>
              <Link to={`/${item.title.toLowerCase().replace(" ", "-")}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="right-section">
        <span className="language">English</span>
        <button
          className={`menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`full-screen-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-content">
          {menuItems.map((category, index) => (
            <div key={index} className="menu-category">
              <h3>{category.title}</h3>
              <ul>
                {category?.items?.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    onClick={() =>
                      handleMenuItemClick(
                        typeof item === "object" ? item.path : null
                      )
                    }
                  >
                    {typeof item === "object" ? item.name : item}
                  </li>
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
