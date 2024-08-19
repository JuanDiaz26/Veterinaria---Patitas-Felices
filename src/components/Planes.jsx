import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../components/Planes.css';

// const Planes = () => {
//   return (
//     <>
//     <div>
//     <h3 className='TituloPlanes'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
//         className="bi bi-record-fill PuntoColor" viewBox="0 0 20 20">
//         <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
//       </svg>Seguro para ellos</h3>
//     <CardGroup className='CardGroup'> 
//       <Card className='CardsPlanes'> 
//         <Card.Img variant="top" src="../src/assets/gatos-bebes.webp" />
//         <Card.Body>
//           <Card.Title>Primeros pasos</Card.Title>
//           <Card.Text>
//           Servicios para mascotas de 0 a 5 años.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card className='CardsPlanes'> 
//         <Card.Img variant="top" src="../src/assets/gatos-bebes.webp" />
//         <Card.Body>
//           <Card.Title>Primeros pasos</Card.Title>
//           <Card.Text>
//           Servicios para mascotas de 0 a 5 años.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card className='CardsPlanes'> 
//         <Card.Img variant="top" src="../src/assets/gatos-bebes.webp" />
//         <Card.Body>
//           <Card.Title>Primeros pasos</Card.Title>
//           <Card.Text>
//           Servicios para mascotas de 0 a 5 años.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//     </CardGroup>
//     </div>
//     </>
//   );
// }

const planes = [
  {
    title: 'Plan Básico',
    price: '$10/mes',
    features: ['Acceso a 10 cursos', 'Soporte básico', 'Certificado al finalizar'],
  },
  {
    title: 'Plan Pro',
    price: '$25/mes',
    features: ['Acceso ilimitado', 'Soporte premium', 'Certificados personalizados'],
  },
  {
    title: 'Plan Empresarial',
    price: '$50/mes',
    features: ['Acceso ilimitado para equipos', 'Soporte dedicado', 'Consultorías'],
  },
];

const Planes = () => {
  return (
    <Container className="my-5">
      <Row>
        {planes.map((plan, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="plan-title text-center mb-3">{plan.title}</Card.Title>
                <Card.Subtitle className="plan-price text-center mb-4">{plan.price}</Card.Subtitle>
                {/* Cambiar el as de Card.Text a "div" */}
                <Card.Text as="div">
                  <ul className="list-unstyled">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Button variant="primary" className="w-100">Suscribirse</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Planes;