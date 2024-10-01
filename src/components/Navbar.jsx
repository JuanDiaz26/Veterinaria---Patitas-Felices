import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/logo-veterinaria.webp';
import './Navbar.css';
import InicioModal from './InicioModal';
import RegistroModal from './RegistroModal';

const Navbar = ({ esAdmin, esPaciente, cerrarSesion }) => {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [mostrarInicio, setMostrarInicio] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const offcanvasRef = useRef(null);
  const navigate = useNavigate();

  const closeOffcanvas = () => {
    const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasRef.current);
    bsOffcanvas.hide();
  };

  const mostrarModalConfirmacion = () => {
    setMostrarConfirmacion(true);
  };

  const cerrarModalConfirmacion = () => {
    setMostrarConfirmacion(false);
  };

  const confirmarCerrarSesion = () => {
    cerrarSesion();
    cerrarModalConfirmacion();
    navigate('/'); 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex justify-content-between">
      {esAdmin || esPaciente ? (
      // Si es admin o paciente, solo muestra la imagen y el texto sin enlace
      <div className="navbar-brand">
        <img className="logo-clinica" src={Logo} alt="Logo Veterinaria Patitas Felices" />
        <h1 className="titulo-veterinaria">Patitas Felices</h1>
      </div>
    ) : (
      // Si no es admin ni paciente, se puede hacer clic para volver al inicio
      <Link className="navbar-brand" to="/">
        <img className="logo-clinica" src={Logo} alt="Logo Veterinaria Patitas Felices" />
        <h1 className="titulo-veterinaria">Patitas Felices</h1>
      </Link>
    )}

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
          ref={offcanvasRef}
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
              <div className="divnav">
              {esAdmin ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/administrar-pacientes" onClick={closeOffcanvas}>Administrar Pacientes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/administrar-turnos" onClick={closeOffcanvas}>Administrar Turnos</Link>
                    </li>
                    {/* Aquí se agrega el botón de cerrar sesión para admin */}
                    <li className="nav-item">
                      <button className="nav-link btn" onClick={mostrarModalConfirmacion}>
                        <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                      </button>
                    </li>
                  </>
                ) : esPaciente ? (
                  // Solo el botón de cerrar sesión para pacientes
                  <li className="nav-item">
                    <button className="nav-link btn" onClick={mostrarModalConfirmacion}>
                      <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/" onClick={closeOffcanvas}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sobre-mi" onClick={closeOffcanvas}>Sobre Mi</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contacto" onClick={closeOffcanvas}>Contacto</Link>
                    </li>
                  </>
                )}
              </div>
              <div className="d-flex ContenedorSesion">
                {esAdmin || esPaciente ? null : (
                  <>
                    <RegistroModal mostrar={mostrarRegistro} cerrarModal={() => setMostrarRegistro(false)} />
                    <InicioModal mostrar={mostrarInicio} cerrarModal={() => setMostrarInicio(false)} />
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* Modal de confirmación */}
      <Modal show={mostrarConfirmacion} onHide={cerrarModalConfirmacion}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Cierre de Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas cerrar la sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalConfirmacion}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarCerrarSesion}>
            Sí, cerrar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
