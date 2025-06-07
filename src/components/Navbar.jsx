import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { FaSteamSymbol } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import './Navbar.css';

function Navbar({ cartCount = 0, authTick }) {
  const [username, setUsername] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.username || decoded.email || decoded.id);
      } catch {
        localStorage.removeItem('token');
        setUsername(null);
      }
    } else {
      setUsername(null);
    }
  }, [authTick]);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 80);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    document.body.classList.toggle('light-theme');
  };

  return (
    <nav className={`navbar-modern ${theme} ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="navbar-container">
        <Link className="logo" to="/">
          <FaSteamSymbol className="me-2 fs-3" />
          <span>JeXps</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" end className="nav-item">Inicio</NavLink></li>
          <li><NavLink to="/productos" className="nav-item">Productos</NavLink></li>
          <li>
            <NavLink to="/cart" className="nav-item cart-icon">
              <BsCart3 />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>
          </li>

          {!username ? (
            <>
              <li><NavLink to="/login" className="nav-item">Login</NavLink></li>
              <li><NavLink to="/register" className="nav-item">Registro</NavLink></li>
            </>
          ) : (
            <>
              <li className="nav-item text-accent">Hola, {username}</li>
              <li><button onClick={handleLogout} className="nav-item btn-logout">Cerrar sesión</button></li>
            </>
          )}
        </ul>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
