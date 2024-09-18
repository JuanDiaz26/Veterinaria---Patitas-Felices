import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './SobreMi.css';

const SobreMi = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <a href="https://github.com/JuanDiaz26" target="_blank" title="Perfil de mi Github" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/juangabrieldiaz26/" target="_blank" title="Perfil de mi Linkedin" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:juanbacanp3s@gmail.com" target="_blank" title="Mi Correo" rel="noopener noreferrer">
                  <i className="bi bi-envelope-fill"></i>
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
