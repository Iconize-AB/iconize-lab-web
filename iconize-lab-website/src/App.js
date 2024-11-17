import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import IntegrationPage from './pages/IntegrationPage';
import MagentoPage from './pages/MagentoPage';
import WooCommercePage from './pages/WooCommercePage';
import ConnectPage from './pages/ConnectPage';
import LoadingScreen from './components/LoadingScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArticlePage from './components/ArticlePage';
import AdobeCommercePage from './pages/AdobeCommercePage';

// URL rewrite mapping
const urlRewrites = {
  '/iconize-articles/category/Marketing': '/services/marketing',
  '/iconize-articles/category/Honest+consulting': '/about',
  '/iconize-articles/tag/Forvaltning': '/services',
  '/om-oss': '/about',
  '/iconize-articles/category/Node+JS': '/services/web-development',
  '/webbutveckling': '/services/web-development',
  '/kontakt': '/connect',
  '/iconize-articles/tag/magento': '/services/ecommerce/magento',
  '/iconize-articles/tag/b2c': '/services/ecommerce',
  '/iconize-articles/category/Software': '/services/web-development',
  '/iconize-articles/the-challenges-of-finding-honest-it-consultants-in-software-development': '/about',
  '/iconize-articles/category/It+consultants': '/about',
  '/iconize-articles/tag/Utveckling': '/services/web-development',
  '/iconize-articles/tag/adobe': '/services/ecommerce/adobe-commerce',
  '/iconize-articles/tag/b2b': '/services/ecommerce',
  '/iconize-articles/category/saleor': '/services/ecommerce',
  '/iconize-articles/tag/e-commerce': '/services/ecommerce'
};

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
              {/* URL Rewrites */}
              {Object.entries(urlRewrites).map(([oldPath, newPath]) => (
                <Route 
                  key={oldPath} 
                  path={oldPath} 
                  element={<Navigate to={newPath} replace />} 
                />
              ))}

              {/* Existing Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/marketing" element={<Marketing />} />
              <Route path="/services/ecommerce/magento" element={<MagentoPage />} />
              <Route path="/services/ecommerce/adobe-commerce" element={<AdobeCommercePage />} />
              <Route path="/services/ecommerce" element={<EcommercePage />} />
              <Route path="/services/ecommerce/woocommerce" element={<WooCommercePage />} />
              <Route path="/services/integration" element={<IntegrationPage />} />
              <Route path="/about" element={<About />} />
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
