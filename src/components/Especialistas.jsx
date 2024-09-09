import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Facebook, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import '../style/Especialistas.css';

const Especialistas = () => {
  const especialistas = [
    {
      id: 1,
      nombre: 'Dr. Antonio Banderas',
      profesion: 'Veterinario Especialista en Cirugía',
      descripcion:
        'Con más de 10 años de experiencia en cirugía veterinaria, el Dr. Banderas es conocido por su dedicación y atención al detalle en cada procedimiento.',
      foto: 'https://via.placeholder.com/150',
      redes: {
        email: 'antonio.banderas@gmail.com',
        facebook: 'https://www.facebook.com/drantoniobanderas',
        telefono: '+54 9 381 4955080',
      },
    },
    {
      id: 2,
      nombre: 'Dra. Carolina Herrera',
      profesion: 'Especialista en Dermatología Veterinaria',
      descripcion:
        'La Dra. Herrera se especializa en el cuidado de la piel y el pelaje de mascotas, ofreciendo tratamientos avanzados para diversas afecciones dermatológicas.',
      foto: 'https://via.placeholder.com/150', 
      redes: {
        email: 'maria.gomez@gmail.com',
        facebook: 'https://www.facebook.com/dracarolinaherrera',
        telefono: '+54 9 381 5287653',
      },
    },
  ];

  return (
    <Container className="my-4 container-especialistas">
      <h2 className="text-center mb-4">Nuestros Especialistas</h2>
      <Row>
        {especialistas.map((especialista) => (
          <Col key={especialista.id} md={6} className="mb-4">
            <Card>
              <Card.Img className="img-especialistas" variant="top" src={especialista.foto} alt={`Foto de ${especialista.nombre}`} />
              <Card.Body>
                <Card.Title>{especialista.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{especialista.profesion}</Card.Subtitle>
                <Card.Text>{especialista.descripcion}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-around">
                <Button
                  variant="link"
                  href={`mailto:${especialista.redes.email}`}
                  title="Enviar correo"
                >
                  <EnvelopeFill size={20} />
                </Button>
                <Button
                  variant="link"
                  href={especialista.redes.facebook}
                  target="_blank"
                  title="Facebook"
                >
                  <Facebook size={20} />
                </Button>
                <Button
                  variant="link"
                  href={`tel:${especialista.redes.telefono}`}
                  title="Llamar"
                >
                  <TelephoneFill size={20} />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Especialistas;