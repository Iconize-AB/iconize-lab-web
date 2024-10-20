import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import About from './pages/About';
import Industries from './pages/Industries';
import SubscriptionPopup from './components/SubscriptionPopup';
import AppDevelopment from './pages/AppDevelopment';
import EcommercePage from './pages/EcommercePage';
import WebDevelopment from './pages/WebDevelopment';
import Marketing from './pages/Marketing';
import CompanyCulture from './pages/CompanyCulture';
import IntegrationPage from './pages/IntegrationPage';
import MagentoPage from './pages/MagentoPage';
import WooCommercePage from './pages/WooCommercePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SubscriptionPopup />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/magento" element={<MagentoPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/woocommerce" element={<WooCommercePage />} />
          <Route path="/services/integration" element={<IntegrationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/company-culture" element={<CompanyCulture />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
