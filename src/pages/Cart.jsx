function Cart({ carrito, confirmarOrden }) {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

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
                {producto.nombre} × {producto.cantidad}
                <span>
                  {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                  }).format(producto.precio * producto.cantidad)}
                </span>
              </li>
            ))}
          </ul>

          <h5>Total: {' '}
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
