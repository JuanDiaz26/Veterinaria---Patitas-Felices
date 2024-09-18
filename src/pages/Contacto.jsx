import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../style/Contacto.css'; 

const Contacto = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="contenedor-contacto mt-5">
      <Row className="mb-4">
        <Col md={6}>
          <Card className="tarjeta-formulario">
            <Card.Body>
            <div className="titulo-principal titulo-contacto"><img width="30" height="30" className="iconoVeteTit" src="https://img.icons8.com/color/48/veterinarian.png" alt="veterinarian"/> Contacta con nosotros</div>
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
          <Card>
            <Card.Body className="tarjeta-info">
            <div className="titulo-principal titulo-contacto"><img width="30" height="30" className="iconoVeteTit" src="https://img.icons8.com/color/48/veterinarian.png" alt="veterinarian"/> Información de contacto</div>
              <Card.Text>
                <strong className="strong-contacto">Dirección:</strong> General Paz 576, San Miguel de Tucumán.
              </Card.Text>
              <Card.Text>
                <strong className="strong-contacto">Teléfono:</strong> 0381 495-5080
              </Card.Text>
              <Card.Text>
                <strong className="strong-contacto">Correo Electrónico:</strong> info@patitasfelices.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-mapa">
        <Col className="col-mapa">
          <Card className="card-mapa">
            <Card.Body className="tarjeta-mapa">
            <div className="titulo-principal titulo-contacto"><img width="30" height="30" className="iconoVeteTit" src="https://img.icons8.com/color/48/veterinarian.png" alt="veterinarian"/> Encuéntranos en el mapa</div>
              <div className="contenedor-mapa">
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aNZuQjx1gJNn6qTOYhpYDu06mFsWfcM&ehbc=2E312F" width="100%" height="400px"></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
