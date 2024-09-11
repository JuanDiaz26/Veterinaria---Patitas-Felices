import React from 'react';
import { Card } from 'react-bootstrap';
import './SobreMi.css'; // Asegúrate de que el CSS esté vinculado correctamente

const SobreMi = () => {
  return (
    <section className="sobreMiContainer">
      <div className="sobreMiContent">
        <h1 className="sobreMiTitulo">
          <span className="sobreMiTituloSpan">Sobre</span> mí
        </h1>
        <p className="sobreMiSaludo">¡Hola! Soy Juan Díaz</p>
        <p className="sobreMiDescripcion">
        Soy estudiante de programación. Actualmente, trabajo en administración y estoy en proceso de presentar un proyecto web para mi trabajo. Además, estudio inglés y planeo ingresar a la UNT el próximo año para ampliar mis conocimientos.
        </p>

        <div className="sobreMiCards">
          <Card className="sobreMiCard">
            <Card.Img src="../src/assets/ft1.jpg" alt="Foto de Juan Díaz" className="sobreMiCardImg" />
            <Card.Body className="sobreMiCardBody">
              <Card.Title className="sobreMiCardTitulo">Juan Díaz</Card.Title>
              <Card.Text>
              Estudiante de programacion enfocado en el frontend. Apasionado por aprender y crecer mucho más. 
              </Card.Text>
              <div className="sobreMiRedes">
                <a href="https://github.com/juan-diaz" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/juan-diaz" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/juan.diaz" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
