import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';          // icono de carrito
import { FaSteamSymbol } from 'react-icons/fa';   // icono de Steam

/**
 * Recibe opcionalmente cartCount (nº de ítems) vía props o contexto
 */
function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
      <div className="container">
        {/* Logo / Marca */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaSteamSymbol className="me-2 fs-3" />
          <span className="fw-bold">JeXps</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Inicio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">Productos</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link position-relative">
                <BsCart3 className="fs-5" />
                {/* Badge con número de ítems */}
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
