import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Archivo de estilos para el navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo y nombre de la aplicación */}
        <Link to="/" className="navbar-logo">
          <i className="fas fa-leaf"></i> AgroData Warehouse
        </Link>

        {/* Menú para dispositivos móviles */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-links" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/model" className="nav-links" onClick={toggleMenu}>
              Maqueta de Cultivos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;