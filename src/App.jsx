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
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const confirmarOrden = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Debes iniciar sesión para confirmar la orden');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/ordenes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productos: carrito }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert('Error al confirmar orden: ' + error.message);
        return;
      }

      setCarrito([]);
      alert('✅ Orden confirmada correctamente');
    } catch (error) {
      alert('Error al enviar orden');
    }
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar authTick={authTick} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/cart" element={<Cart carrito={carrito} confirmarOrden={confirmarOrden} />} />
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
