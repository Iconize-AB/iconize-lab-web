import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/LoadingScreen.css';
import logo from "../resources/[i]conizeLab.png";

function LoadingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate(location.pathname === '/' ? '/' : location.pathname);
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate, location]);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={logo} alt="NLYON Consulting Logo" className="animated-logo" />
      </div>
    </div>
  );
}

export default LoadingScreen;
