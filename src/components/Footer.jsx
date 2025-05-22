import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <i className="fas fa-leaf"></i> AgroData Warehouse
          </Link>
        </div>

        {/* Enlaces */}
        <nav className="footer-nav">
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/model">Mapa</Link></li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} AgroData Warehouse</p>
      </div>
    </footer>
  );
};

export default Footer;