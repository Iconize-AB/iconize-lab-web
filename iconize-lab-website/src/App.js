import React, { useState, useEffect } from 'react';
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
import ConnectPage from './pages/ConnectPage';
import LoadingScreen from './components/LoadingScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArticlePage from './components/ArticlePage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <SubscriptionPopup />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/marketing" element={<Marketing />} />
              <Route path="/services/ecommerce/magento" element={<MagentoPage />} />
              <Route path="/services/ecommerce" element={<EcommercePage />} />
              <Route path="/services/ecommerce/woocommerce" element={<WooCommercePage />} />
              {/* <Route path="/services/brand-building" element={<BrandBuildingPage />} /> */}
              <Route path="/services/integration" element={<IntegrationPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/company-culture" element={<CompanyCulture />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/case-studies/:slug" element={<ArticlePage />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
