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
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
