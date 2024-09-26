import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const AdministrarTurnos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [turnos, setTurnos] = useState([]); // Estado para almacenar la lista de turnos
  const [nuevoTurno, setNuevoTurno] = useState({
    detalle: '',
    veterinario: '',
    mascota: '',
    fecha: '',
    hora: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoTurno({
      ...nuevoTurno,
      [name]: value
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    setTurnos([...turnos, nuevoTurno]); // Agregar el nuevo turno a la lista
    setMostrarModal(false); // Cerrar el modal
    setNuevoTurno({ // Reiniciar el formulario
      detalle: '',
      veterinario: '',
      mascota: '',
      fecha: '',
      hora: ''
    });
  };

  return (
    <div>
      <h1>Administrar Turnos</h1>
      <Button onClick={() => setMostrarModal(true)}>Agregar Turno</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Detalle de Cita</th>
            <th>Veterinario</th>
            <th>Mascota</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={index}>
              <td>{turno.detalle}</td>
              <td>{turno.veterinario}</td>
              <td>{turno.mascota}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={manejarSubmit}>
            <Form.Group controlId="detalle">
              <Form.Label>Detalle de Cita</Form.Label>
              <Form.Control 
                type="text" 
                name="detalle" 
                value={nuevoTurno.detalle} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="veterinario">
              <Form.Label>Veterinario</Form.Label>
              <Form.Control 
                type="text" 
                name="veterinario" 
                value={nuevoTurno.veterinario} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="mascota">
              <Form.Label>Mascota</Form.Label>
              <Form.Control 
                type="text" 
                name="mascota" 
                value={nuevoTurno.mascota} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control 
                type="date" 
                name="fecha" 
                value={nuevoTurno.fecha} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="hora">
              <Form.Label>Hora</Form.Label>
              <Form.Control 
                type="time" 
                name="hora" 
                value={nuevoTurno.hora} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">Agregar Turno</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdministrarTurnos;
