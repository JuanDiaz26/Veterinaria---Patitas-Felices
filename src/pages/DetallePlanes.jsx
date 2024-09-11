import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './DetallePlanes.css'; 

const DetallePlanes = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
    plan: '', 
  });

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [enviando, setEnviando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Parámetros para el servicio de email
    const parametros = {
      to_name: formulario.nombre,
      to_email: formulario.correo,
      to_plan: formulario.plan, // Aquí se envía el plan seleccionado
    };

    // Ajusta con tus credenciales de EmailJS
    emailjs
      .send('service_3xbm9lq', 'template_909ubk6', parametros, '0RggoBdDqegZZ0qNg')
      .then((response) => {
        setEnviando(false);
        setMensajeAlerta('Consulta enviada correctamente. Te contactaremos pronto.');
        setMostrarAlerta(true);
        setFormulario({
          nombre: '',
          correo: '',
          telefono: '',
          mensaje: '',
          plan: '',
        });
      })
      .catch((error) => {
        setEnviando(false);
        setMensajeAlerta('Hubo un error al enviar la consulta. Inténtalo de nuevo.');
        setMostrarAlerta(true);
        console.error('Error al enviar:', error);
      });
  };

  return (
    <>
      <Container className="detalle-planes">
        <Row>
          <Col md={7} className="offset-md-3 w-100 m-auto">
            <h2 className="text-center mb-2">Detalle de Planes</h2>
            <p className="text-center">
              Completa el formulario a continuación para brindarte más información acerca del plan que elijas.
            </p>     
          <div className="cards-container">
              <div className="cardP">
                <div className="card-color-line red"></div>
                <div className="card-content">
                  <h2 className="card-title">Plan Primeros Pasos</h2>
                  <p className="card-description">Cuidado inicial para cachorros.</p>
                </div>
            </div>

            <div className="cardP">
              <div className="card-color-line blue"></div>
              <div className="card-content">
                <h2 className="card-title">Plan Madurando</h2>
                <p className="card-description">Cuidado preventivo para jovenes.</p>
              </div>
            </div>

            <div className="cardP">
              <div className="card-color-line green"></div>
              <div className="card-content">
                <h2 className="card-title">Plan Adultos</h2>
                <p className="card-description">Atención integral para adultos.</p>
              </div>
            </div>
          </div>
            {mostrarAlerta && (
              <Alert
                variant={mensajeAlerta.includes('error') ? 'danger' : 'success'}
                className="alerta-detalle"
              >
                {mensajeAlerta}
              </Alert>
            )}
            <Form onSubmit={manejarEnvio}>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCorreo">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Ingresa tu número de teléfono"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={manejarCambio}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPlan">
  <Form.Label>Selecciona un plan</Form.Label>
  <Form.Control
    as="select"
    name="plan"
    value={formulario.plan}
    onChange={manejarCambio}
    required
  >
    <option value="" disabled hidden>
      ...
    </option>
    <option value="Plan Primeros pasos">Plan Primeros pasos</option>
    <option value="Plan Madurando">Plan Madurando</option>
    <option value="Plan Adultos">Plan Adultos</option>
  </Form.Control>
</Form.Group>


              <Form.Group controlId="formMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu consulta aquí"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={enviando}
                className="boton-enviar"
              >
                {enviando ? 'Enviando...' : 'Enviar Consulta'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>    
    </>
  );
};

export default DetallePlanes;