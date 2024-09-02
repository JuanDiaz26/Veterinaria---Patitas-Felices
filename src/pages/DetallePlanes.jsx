import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const DetallePlanes = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Parámetros que coinciden con las variables del template de EmailJS
    const templateParams = {
      name: formData.name, // Nombre del usuario ingresado en el formulario
      to_email: formData.email, // Email ingresado por el usuario
      phone: formData.phone, // Teléfono si se necesita enviar
      message: formData.message, // Mensaje escrito por el usuario
    };

    // Ajusta con tus credenciales de EmailJS
    emailjs
      .send('service_3xbm9lq', 'template_909ubk6', templateParams, '0RggoBdDqegZZ0qNg')
      .then((response) => {
        setIsSending(false);
        setAlertMessage(
          'Consulta enviada correctamente. Te contactaremos pronto.'
        );
        setShowAlert(true);
        // Reiniciar formulario después de enviar
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        setIsSending(false);
        setAlertMessage('Hubo un error al enviar la consulta. Inténtalo de nuevo.');
        setShowAlert(true);
        console.error('Error sending email:', error);
      });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <h2 className="text-center mb-4">Detalle de Planes</h2>
          <p className="text-center">
            Aquí encontrarás información detallada sobre nuestros planes para el
            cuidado de tus mascotas. Completa el formulario a continuación para
            más información.
          </p>
          {showAlert && (
            <Alert
              variant={alertMessage.includes('error') ? 'danger' : 'success'}
            >
              {alertMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingresa tu número de teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu consulta aquí"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar Consulta'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DetallePlanes;
