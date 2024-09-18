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
      foto: '../src/assets/drvete1.webp',
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
      foto: '../src/assets/drvete2.webp', 
      redes: {
        email: 'caro.herrera@gmail.com',
        facebook: 'https://www.facebook.com/dracarolinaherrera',
        telefono: '+54 9 381 5287653',
      },
    },
  ];

  return (
    <div className="planes-veterinarios" id="especialistas">
      <div className="titulo-principal"><img width="35" height="35" className="iconoVeteTit" src="https://img.icons8.com/color/48/veterinarian.png" alt="veterinarian"/> Nuestros Especialistas</div>
    <Container className="my-4 container-especialistas">
      <Row className="container-row-esp">
        {especialistas.map((especialista) => (
          <Col key={especialista.id} md={5} className="mb-4">
            <Card>  
              <Card.Img className="img-especialistas" variant="top" src={especialista.foto} alt={`Foto de ${especialista.nombre}`} />
              <Card.Body>
                <Card.Title>{especialista.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{especialista.profesion}</Card.Subtitle>
                <Card.Text>{especialista.descripcion}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-around card-footer">
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
    </div>
  );
};

export default Especialistas;
