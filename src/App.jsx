import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Productos from './pages/Productos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [authTick, setAuthTick] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const handleAuthChange = () => setAuthTick((n) => n + 1);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prev) => prev.filter((p) => p.id !== productoId));
  };

  const aumentarCantidad = (productoId) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === productoId ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuirCantidad = (productoId) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          p.id === productoId ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const confirmarOrden = () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }

    console.log('Orden confirmada:', carrito);
    alert('✅ ¡Orden confirmada!');
    setCarrito([]); // limpiar carrito
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar authTick={authTick} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productos"
              element={<Productos agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  carrito={carrito}
                  eliminarDelCarrito={eliminarDelCarrito}
                  aumentarCantidad={aumentarCantidad}
                  disminuirCantidad={disminuirCantidad}
                  confirmarOrden={confirmarOrden}
                />
              }
            />
            <Route path="/login" element={<Login onAuthChange={handleAuthChange} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
