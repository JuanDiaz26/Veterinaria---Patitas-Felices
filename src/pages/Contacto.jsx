import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Container className="contenedor-contacto mt-5">
      <Row className="mb-4">
        <Col md={6}>
          <Card className="tarjeta-formulario">
            <Card.Body>
              <Card.Title>Contacta con Nosotros</Card.Title>
              <Card.Text>
                Si tienes alguna pregunta o deseas más información, no dudes en contactarnos.
              </Card.Text>
              <Form>
                <Form.Group controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                </Form.Group>

                <Form.Group controlId="formMensaje" className="mt-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Enviar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="tarjeta-info">
            <Card.Body>
              <Card.Title>Información de Contacto</Card.Title>
              <Card.Text>
                <strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País
              </Card.Text>
              <Card.Text>
                <strong>Teléfono:</strong> +123 456 7890
              </Card.Text>
              <Card.Text>
                <strong>Correo Electrónico:</strong> contacto@veterinariapatitasfelices.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="tarjeta-mapa">
            <Card.Body>
              <Card.Title>Encuéntranos en el Mapa</Card.Title>
              <div className="contenedor-mapa">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=RollingCode%20General%20Paz%20al%20500,%20Tucum%C3%A1n&key=YOUR_GOOGLE_MAPS_API_KEY"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ubicación en el Mapa"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
