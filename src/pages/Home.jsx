import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>AgroData Warehouse</h1>
        <p className="subtitle">
          Plataforma inteligente para optimizar la producción agrícola mediante análisis centralizado de datos.
        </p>
      </header>

      <main className="main-content">
        <section className="section">
          <h2>El Problema</h2>
          <p>
            La agricultura enfrenta desafíos críticos debido a la fragmentación de datos (clima, suelo, mercado) 
            en sistemas desconectados. Esto genera:
          </p>
          <ul>
            <li>Uso ineficiente de agua y fertilizantes.</li>
            <li>Pérdidas poscosecha por planificación deficiente.</li>
            <li>Desbalance entre oferta y demanda en los mercados.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Nuestra Solución</h2>
          <p>
            Implementamos un Data Warehouse que integra y analiza datos agrícolas en tiempo real, permitiendo:
          </p>
          <ul>
            <li>Obtener un gran volumen de datos recolectados mediante el uso de sensores agroclimaticos.</li>
            <li>Análisis de los datos agroclimaticos recolectados para una mejor comprensión</li>
            <li>Visualización mediante tablas dinamicas los diferentes análisis.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Objetivos</h2>
          <h3>General</h3>
          <p>
            Implementar un Data Warehouse para sistemas de producción agrícola que permita el análisis y visualización de datos agroclimáticos, rendimiento y de mercado.
          </p>
          <h3>Específicos</h3>
          <ul>
            <li>Extraer datos sobre el rendimiento y mercado nacional de productos agricolas.</li>
            <li>Limpiar los datos recolectados, para cargarlos en la plataforma.</li>
            <li>Centralizar datos agrícolas en una plataforma unificada.</li>
            <li>Permitir la visualización de datos agroclimativos, de rendimiento y de mercado.</li>
          </ul>
        </section>

        <section className="section ods">
          <h2>Alineación con los ODS</h2>
          <p>
            Contribuimos al <strong>Objetivo de Desarrollo Sostenible 12</strong> (Producción y consumo responsables): 
          </p>
          <ul>
            <li>Meta 12.2: Uso sostenible de recursos naturales.</li>
            <li>Meta 12.3: Reducción del desperdicio alimentario.</li>
          </ul>
        </section>

        <section className="section team">
          <h2>Equipo</h2>
          <div className="team-members">
            <p>Julian Santiago Gutierrez Rodriguez</p>
            <p>Diego Alexander Pinzon Camargo</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;