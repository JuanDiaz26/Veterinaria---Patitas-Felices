import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/logo-veterinaria.webp';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid d-flex justify-content-between">
    <NavLink className="navbar-brand" to="/">
      <img className="logo-clinica" src={Logo} alt="Logo Veterinaria Patitas Felices" />
      <h1 className="titulo-veterinaria">Patitas Felices</h1>
    </NavLink>
    <button
      className="navbar-toggler"
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
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">Login Medico</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/paciente">Login Paciente</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="d-flex">
      <NavLink className="btn BotonRegistro me-2" to="/registrarse">
        Registrarse
      </NavLink>
      <NavLink className="btn BotonInicio" to="/iniciar-sesion">
        Iniciar Sesión
      </NavLink>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
