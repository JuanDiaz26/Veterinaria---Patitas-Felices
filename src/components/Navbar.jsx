import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/logo-veterinaria.webp';
import './Navbar.css';
import InicioModal from './InicioModal';
import RegistroModal from './RegistroModal';


const Navbar = () => {

  // Estados para controlar la visibilidad de cada modal
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [mostrarInicio, setMostrarInicio] = useState(false);

  const cerrarRegistro = () => setMostrarRegistro(false);
  const cerrarInicio = () => setMostrarInicio(false);

  const offcanvasRef = useRef(null);

  // Función para cerrar el offcanvas manualmente usando Bootstrap API
  const closeOffcanvas = () => {
    const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasRef.current);
    bsOffcanvas.hide();
  };


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid d-flex justify-content-between">
    <Link className="navbar-brand" to="/">
      <img className="logo-clinica" src={Logo} alt="Logo Veterinaria Patitas Felices" />
      <h1 className="titulo-veterinaria">Patitas Felices</h1>
    </Link>
    <button
  className="navbar-toggler custom-toggler"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasNavbar"
  aria-controls="offcanvasNavbar"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Veterinaria Patitas Felices
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ">
          <div className="divnav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeOffcanvas}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-mi" onClick={closeOffcanvas}>Sobre Mi</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="/contacto" onClick={closeOffcanvas}>Contacto</Link>
          </li>
          </div> 
          <div className="d-flex ContenedorSesion">

      {/* Modales */}
      <RegistroModal mostrar={mostrarRegistro} cerrarModal={cerrarRegistro} />
      <InicioModal mostrar={mostrarInicio} cerrarModal={cerrarInicio} />
          </div>
        </ul>
      </div>
    </div>

  </div>
</nav>
  );
};

export default Navbar;
