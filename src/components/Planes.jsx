import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import './Planes.css'; 
import { Link } from 'react-router-dom'; 

const planes = [
  {
    id: 1,
    nombre: 'Plan Primeros Pasos',
    descripcion: 'Diseñado para cachorros y mascotas jóvenes que están dando sus primeros pasos.',
    caracteristicas: [
      'Consulta veterinaria inicial',
      'Vacunación básica para cachorros',
      'Consejos de alimentación y cuidado'
    ],
    claseBoton: 'boton1', 
  },
  {
    id: 2,
    nombre: 'Plan Madurando',
    descripcion: 'Perfecto para mascotas adultas que necesitan un cuidado continuo y preventivo.',
    caracteristicas: [
      'Consultas de control y seguimiento',
      'Vacunas y desparasitaciones periódicas',
      'Chequeo nutricional y control de peso'
    ],
    claseBoton: 'boton2',
  },
  {
    id: 3,
    nombre: 'Plan Adultos',
    descripcion: 'Cuidado especializado para mascotas en su etapa adulta, asegurando bienestar y salud.',
    caracteristicas: [
      'Consultas ilimitadas',
      'Vacunación completa y desparasitaciones',
      'Atención geriátrica y chequeo preventivo'
    ],
    claseBoton: 'boton3', 
  }
];


const Planes = () => {

  return (
    <div className="planes-veterinarios">
      <div className="titulo-principal"><img width="35" height="35" className="iconoVeteTit" src="https://img.icons8.com/color/48/veterinarian.png" alt="veterinarian"/> Nuestros Planes</div>
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
                  className={`boton-elegir ${plan.claseBoton}`}
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
