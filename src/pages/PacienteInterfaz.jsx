import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const PacienteInterfaz = ({ iniciarSesionComoPaciente }) => {
  const [especialista, setEspecialista] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Llama a iniciarSesionComoPaciente al montar el componente
  useEffect(() => {
    iniciarSesionComoPaciente();
  }, [iniciarSesionComoPaciente]);

  const enviarTurno = (e) => {
    e.preventDefault();

    if (!especialista || !fecha || !motivo) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    const templateParams = {
      especialista,
      fecha,
      motivo,
      mensaje,
      to_email: 'email-del-paciente@ejemplo.com' // Debes colocar el email del paciente real
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('El turno fue solicitado exitosamente. Te llegará un correo de confirmación.');
        // Resetear el formulario después de enviar
        setEspecialista('');
        setFecha('');
        setMotivo('');
        setMensaje('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Hubo un error al solicitar el turno. Inténtalo de nuevo.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Pedir Turno</h2>
      <Form onSubmit={enviarTurno}>
        <div className="row">
          <div className="col-md-6">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Dr. Antonio Banderas</Card.Title>
                <Form.Check 
                  type="radio" 
                  label="Seleccionar Dr. Antonio Banderas" 
                  name="especialista" 
                  value="Dr. Antonio Banderas"
                  checked={especialista === 'Dr. Antonio Banderas'}
                  onChange={(e) => setEspecialista(e.target.value)}
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Dra. Carolina Herrera</Card.Title>
                <Form.Check 
                  type="radio" 
                  label="Seleccionar Dra. Carolina Herrera" 
                  name="especialista" 
                  value="Dra. Carolina Herrera"
                  checked={especialista === 'Dra. Carolina Herrera'}
                  onChange={(e) => setEspecialista(e.target.value)}
                />
              </Card.Body>
            </Card>
          </div>
        </div>

        <Form.Group controlId="fecha">
          <Form.Label>Selecciona la fecha y hora del turno</Form.Label>
          <Form.Control 
            type="datetime-local" 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="motivo">
          <Form.Label>Motivo de la consulta o trámite</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Describe el motivo del turno" 
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="mensaje">
          <Form.Label>Mensaje adicional (opcional)</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Escribe un mensaje adicional (opcional)" 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Solicitar Turno
        </Button>
      </Form>
    </div>
  );
};

export default PacienteInterfaz;
