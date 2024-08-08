import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HeaderInicio.css'; // Estilos específicos para el header de inicio
import Logo from '../assets/logo-veterinaria.webp';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TopBar from './TopBar.jsx';

const HeaderInicio = () => {
  return (
    <header className="inicio-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="logo-clinica" src={Logo} alt="Logo Veterinaria Patita Feliz" />
            <h1 className="titulo-veterinaria">Veterinaria Patitas Felices</h1>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Veterinaria Patitas Felices</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/"><i className="bi bi-house-fill"></i> Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/nosotros"><i className="bi bi-people-fill"></i> Nosotros</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacto"><i className="bi bi-clipboard2-pulse-fill"></i> Login Medico</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/paciente"><i className="bi bi-person-vcard"></i> Login Paciente</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="contenedorImagen">
        <div className="tituloImagen">
          <h3>Cuidando de ti, cuidando de tu familia.</h3>
        </div>
      </div>
    </header>
  );
};

export default HeaderInicio;
