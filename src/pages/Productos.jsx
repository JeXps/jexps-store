import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Productos({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error cargando productos:', err));
  }, []);

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="mb-4">Productos disponibles</h1>
      <p>Encuentra códigos para juegos de Steam con entrega instantánea y precios competitivos.</p>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div className="row">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">
                  💵 {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                  }).format(producto.precio)}
                </p>
                <button className="btn btn-primary mt-auto" onClick={() => agregarAlCarrito(producto)}>
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
