import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const MEDICOS = [
  { id: 'medico1', nombre: 'Dr. Antonio Banderas' },
  { id: 'medico2', nombre: 'Dra. Carolina Herrera' },
];

const PacienteInterfaz = ({ iniciarSesionComoPaciente, pacienteId }) => {
  const [especialista, setEspecialista] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    iniciarSesionComoPaciente();
  }, [iniciarSesionComoPaciente]);

  const enviarTurno = async (e) => {
    e.preventDefault();

    if (!especialista || !fecha || !motivo) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    const turnoData = {
      pacienteId,
      medicoId: especialista, // Aquí usamos el ID del médico fijo
      fecha,
    };

    try {
      await axios.post('http://localhost:5000/api/turnos/crear', turnoData);
      alert('El turno fue solicitado exitosamente.');
      setEspecialista('');
      setFecha('');
      setMotivo('');
      setMensaje('');
    } catch (error) {
      console.error('Error al solicitar el turno:', error);
      alert('Hubo un error al solicitar el turno. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Pedir Turno</h2>
      <Form onSubmit={enviarTurno}>
        <div className="row">
          {MEDICOS.map(medico => (
            <div className="col-md-6" key={medico.id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{medico.nombre}</Card.Title>
                  <Form.Check 
                    type="radio" 
                    label={`Seleccionar ${medico.nombre}`} 
                    name="especialista" 
                    value={medico.id}
                    checked={especialista === medico.id}
                    onChange={(e) => setEspecialista(e.target.value)}
                  />
                </Card.Body>
              </Card>
            </div>
          ))}
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
