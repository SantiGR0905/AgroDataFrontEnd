import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard de Datos Agrícolas</h1>
        <p className="dashboard-subtitle">Visualización interactiva de datos en tiempo real</p>
      </header>
      
      <div className="powerbi-container">
        <iframe title="AgroDataDW" 
          width="600" 
          height="373.5" 
          src="https://app.powerbi.com/view?r=eyJrIjoiMzZlNWZmZmMtMzFmNi00MTRiLWEzNDMtZGNjZjc1NmE2MDhlIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9" 
          frameBorder="0" allowFullScreen="true"
          className="powerbi-iframe">
        </iframe>
      </div>
    </div>
  );
};

export default Dashboard;