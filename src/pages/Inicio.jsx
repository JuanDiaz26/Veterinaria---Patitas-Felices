import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import PortadaInicio from '../components/PortadaInicio';
import VoiceflowChat from '../components/ChatBot';
import Footer from '../components/Footer';

const Inicio = () => {
  return (
    <>
      <PortadaInicio />
      <main>
        <Container className="main-content">
          {/* Sección de Planes */}
          <section className="section" id="planes">
            <h2 className="section-title">Nuestros Planes</h2>
            <div className="section-row">
              {/* Plan: Primeros Pasos */}
              <div className="section-col">
                <Card>
                  <Card.Body>
                    <Card.Title>Primeros Pasos</Card.Title>
                    <Card.Text>Servicios para mascotas de 0 a 5 años.</Card.Text>
                    <a href="/plan/primeros-pasos" className="btn btn-primary">Ver detalles</a>
                  </Card.Body>
                </Card>
              </div>
              {/* Plan: Madurando */}
              <div className="section-col">
                <Card>
                  <Card.Body>
                    <Card.Title>Madurando</Card.Title>
                    <Card.Text>Servicios para mascotas de 5 a 10 años.</Card.Text>
                    <a href="/plan/madurando" className="btn btn-primary">Ver detalles</a>
                  </Card.Body>
                </Card>
              </div>
              {/* Plan: Adultos */}
              <div className="section-col">
                <Card>
                  <Card.Body>
                    <Card.Title>Adultos</Card.Title>
                    <Card.Text>Servicios para mascotas de más de 10 años.</Card.Text>
                    <a href="/plan/adultos" className="btn btn-primary">Ver detalles</a>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <VoiceflowChat />
      <Footer />
    </>
  );
};

export default Inicio;