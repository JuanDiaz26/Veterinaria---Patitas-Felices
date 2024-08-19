import React from 'react';
import './PortadaInicio.css'; // Asegúrate de que los estilos específicos estén en el archivo CSS
import Button from 'react-bootstrap/Button';

const PortadaInicio = () => {
  return (
    <div className="contenedorImagen">
      <div className="tituloImagen">
        <h1>Cuidamos a tus mascotas como familia</h1>
        <p>
          En Patitas Felices, nos dedicamos a ofrecer el mejor cuidado para tus mascotas, 
          con especialistas comprometidos y servicios personalizados.
        </p>
        <Button variant="primary" href="#especialistas">
          Conoce a nuestros especialistas
        </Button>
      </div>
      <div className="contenedorImagenVete">
        <img src="../src/assets/portada-vete.png" alt="Portada Veterinaria" />
      </div>
    </div>
  );
};


export default PortadaInicio;
