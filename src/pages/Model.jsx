import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Model.css';

const Model = () => {
  return (
    <div className="model-container">
      <h1 className="model-title">Maqueta de Cultivos Inteligentes</h1>
      <p className="model-description">
        Visualiza nuestro modelo de cultivos optimizados mediante análisis de datos en tiempo real.
      </p>

      <div className="model-grid">
        {/* Primera imagen con descripción */}
        <div className="model-card">
          <div className="image-container">
            <img 
              src="/images/Maqueta.png" 
              alt="Modelo de cultivos - Vista general" 
              className="model-image"
            />
          </div>
          <div className="model-content">
            <h2>Vista General del Sistema</h2>
            <p>
              Este mapa muestra las ubicaciones de las granjas en las que se implementa el sistema de cultivos.
            </p>
            <div className="model-features">
              <span className="feature-tag">Sensores de suelo</span>
              <span className="feature-tag">Monitoreo en tiempo real</span>
              <span className="feature-tag">Optimización de recursos</span>
            </div>
          </div>
        </div>

        {/* Segunda imagen con descripción (tamaño reducido) */}
        <div className="model-card reverse">
          <div className="image-container reverse-image">
            <img 
              src="/images/Maqueta Cultivo.png" 
              alt="Modelo de cultivos - Detalle técnico" 
              className="model-image reduced-size"
            />
          </div>
          <div className="model-content">
            <h2>Detalle Técnico</h2>
            <p>
              Esta maqueta muestra la integración de sensores IoT en los cultivos para monitoreo
              de humedad, temperatura y pH del suelo en tiempo real.
            </p>
            <div className="model-features">
              <span className="feature-tag">Data Warehouse</span>
              <span className="feature-tag">Análisis predictivo</span>
              <span className="feature-tag">Visualización de datos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;