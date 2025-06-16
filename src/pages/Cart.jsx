import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Cart({ carrito, eliminarDelCarrito, aumentarCantidad, disminuirCantidad }) {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  const navigate = useNavigate();

  const confirmarOrden = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Debes iniciar sesión para confirmar la orden.');
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/orders/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ items: carrito })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Orden guardada con éxito ✅');
        window.location.href = '/productos'; // o redirige a /ordenes
      } else {
        alert(data.error || 'Error al guardar orden ❌');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión al guardar orden');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito aún.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {carrito.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{producto.nombre}</strong> × {producto.cantidad}
                  <br />
                  <small>
                    {new Intl.NumberFormat('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                      minimumFractionDigits: 0,
                    }).format(producto.precio * producto.cantidad)}
                  </small>
                </div>
                <div className="btn-group">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => disminuirCantidad(producto.id)}>-</button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => aumentarCantidad(producto.id)}>+</button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => eliminarDelCarrito(producto.id)}>❌</button>
                </div>
              </li>
            ))}
          </ul>

          <h5>Total:{' '}
            {new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
            }).format(total)}
          </h5>

          <button onClick={confirmarOrden} className="btn btn-success mt-3">
            Confirmar Orden
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
