import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import './Planes.css'; // Asegúrate de tener los estilos en este archivo
import { Link } from 'react-router-dom'; 

const planes = [
  {
    id: 1,
    nombre: 'Plan Básico',
    descripcion: 'Ideal para el cuidado general de tu mascota.',
    caracteristicas: [
      'Consulta veterinaria básica',
      'Vacunas anuales',
      'Control de peso'
    ],
    claseBoton: 'btn-primary', // Clase de color para el botón
  },
  {
    id: 2,
    nombre: 'Plan Avanzado',
    descripcion: 'Para un cuidado más completo y especializado.',
    caracteristicas: [
      'Consulta veterinaria avanzada',
      'Vacunas y desparasitaciones',
      'Chequeo dental'
    ],
    claseBoton: 'btn-success', // Clase de color para el botón
  },
  {
    id: 3,
    nombre: 'Plan Premium',
    descripcion: 'Todo lo que tu mascota necesita para estar saludable.',
    caracteristicas: [
      'Consultas ilimitadas',
      'Vacunas, desparasitaciones y chequeos completos',
      'Atención de emergencia 24/7'
    ],
    claseBoton: 'btn-danger', 
  }
];

const Planes = () => {

  return (
    <div className="planes-veterinarios">
      <div className="titulo-principal">Nuestros Planes</div>
      <Container>
        <Row>
          {planes.map((plan) => (
            <Col md={4} sm={6} key={plan.id} className="mb-4">
              <Card className="card">
                <Card.Body className="card-body">
                  <Card.Title className="nombre-plan">{plan.nombre}</Card.Title>
                  <Card.Text className="descripcion-plan">{plan.descripcion}</Card.Text>
                  <ul className="lista-caracteristicas">
                    {plan.caracteristicas.map((caracteristica, index) => (
                      <li className="item-caracteristica" key={index}>
                        <FaCheck className="icono-check" /> {caracteristica}
                      </li>
                    ))}
                  </ul>
                  <Link 
                  to="/detalle-planes" 
                  className="boton-elegir btn-primary" // Cambia la clase según tu diseño
                >
                  Elegir Plan
                </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Planes;
