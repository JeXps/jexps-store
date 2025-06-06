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
  // ⚡ Este número cambia cada vez que el usuario inicia / cierra sesión
  const [authTick, setAuthTick] = useState(0);

  // Función que pasaremos a Login para notificar que cambió la sesión
  const handleAuthChange = () => setAuthTick((n) => n + 1);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* Pasamos authTick para que el Navbar se re-renderice */}
        <Navbar authTick={authTick} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/cart" element={<Cart />} />
            {/* Pasamos handleAuthChange a Login */}
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
