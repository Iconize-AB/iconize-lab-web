import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../resources/[i]conizeLab.png";

function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Om oss",
      items: ["Karriär", "Iconize Lab's Kultur", "Iconize Lab's påverkan"],
    },
    // {
    //   title: "Tjänster",
    //   items: [
    //     { name: "Industrier", path: "/industries" },
    //     { name: "App Development", path: "/services/app-development" },
    //     { name: "Web Development", path: "/services/web-development" },
    //     { name: "Marketing", path: "/services/marketing" },
    //     { name: "Magento", path: "/services/magento" },
    //     { name: "WooCommerce", path: "/services/woocommerce" },
    //     { name: "Integrationer", path: "/services/integration" },
    //   ],
    // },
    { title: "Connect" },
    {
      title: "Våra fokusområden",
      items: [
        { name: "E-commerce", path: "/services/ecommerce" },
        { name: "App Development", path: "/services/app-development" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Marketing", path: "/services/marketing" },
        { name: "Magento", path: "/services/ecommerce?capability=Magento" },
        { name: "WooCommerce", path: "/services/ecommerce?capability=WooCommerce" },
        { name: "Adobe Commerce", path: "/services/ecommerce?capability=AdobeCommerce" },
        { name: "Integrationer", path: "/services/integration" },
      ],
    },
  ];

  const mainMenuItems = menuItems.filter(item => item.title !== "Areas of focus" && item.title !== "Connect");

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
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Iconize Lab Logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          {mainMenuItems.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.title.toLowerCase().replace(" ", "-")}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="right-section">
        {/* <span className="language">English</span> */}
        <button
          className={`menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`full-screen-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-content">
          {menuItems
            .filter((category) => category.title !== "Connect")
            .map((category, index) => (
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
