import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Acerca de */}
          <div className="col-md-4">
            <h5 className="fw-bold">JeXps</h5>
            <p className="small">
              Tienda de códigos para Steam con entregas instantáneas y precios competitivos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-md-4">
            <h6 className="fw-semibold">Enlaces</h6>
            <ul className="list-unstyled small">
              <li><a href="/terminos" className="text-decoration-none text-white">Términos y condiciones</a></li>
              <li><a href="/privacidad" className="text-decoration-none text-white">Política de privacidad</a></li>
              <li><a href="/soporte" className="text-decoration-none text-white">Soporte</a></li>
            </ul>
          </div>

          {/* Redes */}
          <div className="col-md-4">
            <h6 className="fw-semibold">Síguenos</h6>
            <div className="d-flex gap-3 fs-4">
              <a href="https://github.com/" className="text-white"><FaGithub /></a>
              <a href="https://instagram.com/" className="text-white"><FaInstagram /></a>
              <a href="https://twitter.com/" className="text-white"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} JeXps. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
