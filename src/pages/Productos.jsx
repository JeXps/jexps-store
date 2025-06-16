import React, { useState } from 'react';

function Productos({ agregarAlCarrito }) {
  const [filtro, setFiltro] = useState('');

  const productos = [
    { id: 1, nombre: 'Elden Ring', precio: 129000 },
    { id: 2, nombre: 'Red Dead Redemption 2', precio: 89900 },
    { id: 3, nombre: 'Grand Theft Auto V', precio: 90000 },
    { id: 4, nombre: 'Cyberpunk 2077', precio: 99900 },
    { id: 5, nombre: 'Hogwarts Legacy', precio: 140000 },
    { id: 6, nombre: 'Resident Evil 4 Remake', precio: 110000 },
    { id: 7, nombre: 'God of War (2018)', precio: 100000 },
    { id: 8, nombre: 'The Witcher 3: Wild Hunt', precio: 80000 },
    { id: 9, nombre: 'FIFA 24', precio: 130000 },
    { id: 10, nombre: 'Assassin’s Creed Valhalla', precio: 125000 },
    { id: 11, nombre: 'Call of Duty: Modern Warfare II', precio: 150000 },
    { id: 12, nombre: 'Stray', precio: 65000 },
  ];

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="mb-4">Productos disponibles</h1>
      <p>Encuentra códigos para juegos de Steam con entrega instantánea y precios competitivos.</p>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar juego..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div className="row">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">
                  💵{' '}
                  {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(producto.precio)}
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
