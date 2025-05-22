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
        <iframe 
          title="Reporte Agrícola Power BI" 
          src="https://app.powerbi.com/reportEmbed?reportId=3f4889ad-8c07-45a7-8adb-5523d4ad6389&autoAuth=true&ctid=07da67a0-1f43-4e8c-977f-5f88b6470ee6" 
          frameBorder="0" 
          allowFullScreen={true}
          className="powerbi-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;