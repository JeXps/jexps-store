import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import Benefits from '../components/Benefits';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* HERO CON FONDO */}
      <section
        className="hero text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/steam-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative'
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        ></div>

        <div className="content" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Bienvenido a JeXps</h1>
          <p className="lead">Tu tienda de códigos para juegos de Steam</p>
          <a href="/productos" className="btn btn-lg btn-warning mt-3 shadow">
            Comprar ahora
          </a>
        </div>
      </section>

      {/* SECCIONES */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-semibold">🔥 Más vendidos</h2>
        <FeaturedProducts />

        <hr className="my-5" />

        <h2 className="text-center mb-4 fw-semibold">🎮 ¿Por qué elegirnos?</h2>
        <Benefits />
      </div>
    </div>
  );
}

export default Home;
