import React from 'react';
import { Facebook, Whatsapp, Instagram, TelephoneFill, EnvelopeAtFill, GeoAltFill, HeartFill, Scissors, PeopleFill, CartFill, PersonCircle } from 'react-bootstrap-icons';
import './Footer.css';
import Logo from '../assets/logo-veterinaria.webp';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <NavLink to="/" className="footer-logo-link">
        <div className="footer-content-logo">
          <img className="footer-logo" src={Logo} alt="Logo Veterinaria Patitas Felices" />
          <h4>Veterinaria <br /> Patitas Felices</h4>
        </div>
      </NavLink> 
        <div className="footer-links">
          <div className="footer-section">
            <h4>Nosotros</h4>
            <ul>
            <li>
          <PersonCircle className="icono-footer not-right" />
          <NavLink to="/sobre-mi">
            Sobre Mi
          </NavLink>
        </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><HeartFill className="icono-footer not-right"/> <a href="#">Veterinaria</a></li>
              <li><Scissors className="icono-footer not-right"/> <a href="#">Peluquería</a></li>
              <li><PeopleFill className="icono-footer not-right"/> <a href="#">Adopciones</a></li>
              <li><CartFill className="icono-footer not-right"/> <a href="#">Nuestra tienda</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contáctanos</h4>
            <ul>
              <li>
                <TelephoneFill className="icono-footer" />
                <span className="text-footer">Teléfono: </span>
                <a href="tel:03814955080">0381 495-5080</a>
              </li> 
              <li>      
                <EnvelopeAtFill className="icono-footer" />
                <span className="text-footer">Correo: </span>
                <a href="mailto:juanbacanp3s@gmail.com">info@patitasfelices.com</a>
              </li>
              <li>
                <GeoAltFill className="icono-footer" />
                <span className="text-footer">Dirección:</span> 
                <span> General Paz 576, San Miguel de Tucumán.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="copyright">&copy; Patitas Felices 2024</div>
        <div className="footer-socials">
          <a href="https://facebook.com" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="https://wa.me/543814955080" aria-label="Whatsapp">
            <Whatsapp />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;