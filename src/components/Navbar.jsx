import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { FaSteamSymbol } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';

function Navbar({ cartCount = 0, authTick }) {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const nombre = decoded.username || decoded.email || 'Usuario';
        setUsername(nombre);
      } catch {
        localStorage.removeItem('token');
        setUsername(null);
      }
    } else {
      setUsername(null);
    }
  }, [authTick]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
    navigate('/'); // redirige al home
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaSteamSymbol className="me-2 fs-3" />
          <span className="fw-bold">JeXps</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Inicio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">Productos</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link position-relative">
                <BsCart3 className="fs-5" />
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>

            {!username ? (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">Registro</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item nav-link text-warning">Hola, {username}</li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-link nav-link">Cerrar sesión</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
