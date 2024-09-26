import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const AdministrarPacientes = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [pacientes, setPacientes] = useState([]); // Estado para almacenar la lista de pacientes
  const [nuevoPaciente, setNuevoPaciente] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mascota: {
      nombre: '',
      especie: '',
      raza: ''
    }
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoPaciente({
      ...nuevoPaciente,
      [name]: value
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, nuevoPaciente]); // Agregar el nuevo paciente a la lista
    setMostrarModal(false); // Cerrar el modal
    setNuevoPaciente({ // Reiniciar el formulario
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mascota: {
        nombre: '',
        especie: '',
        raza: ''
      }
    });
  };

  return (
    <div>
      <h1>Administrar Pacientes</h1>
      <Button onClick={() => setMostrarModal(true)}>Agregar Paciente</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Nombre de Mascota</th>
            <th>Especie</th>
            <th>Raza</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente, index) => (
            <tr key={index}>
              <td>{paciente.nombre}</td>
              <td>{paciente.apellido}</td>
              <td>{paciente.email}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.mascota.nombre}</td>
              <td>{paciente.mascota.especie}</td>
              <td>{paciente.mascota.raza}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={manejarSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre" 
                value={nuevoPaciente.nombre} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control 
                type="text" 
                name="apellido" 
                value={nuevoPaciente.apellido} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={nuevoPaciente.email} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control 
                type="text" 
                name="telefono" 
                value={nuevoPaciente.telefono} 
                onChange={manejarCambio} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="nombreMascota">
              <Form.Label>Nombre de Mascota</Form.Label>
              <Form.Control 
                type="text" 
                name="nombreMascota" 
                value={nuevoPaciente.mascota.nombre} 
                onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, mascota: { ...nuevoPaciente.mascota, nombre: e.target.value }})}
                required 
              />
            </Form.Group>
            <Form.Group controlId="especie">
              <Form.Label>Especie</Form.Label>
              <Form.Control 
                type="text" 
                name="especie" 
                value={nuevoPaciente.mascota.especie} 
                onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, mascota: { ...nuevoPaciente.mascota, especie: e.target.value }})}
                required 
              />
            </Form.Group>
            <Form.Group controlId="raza">
              <Form.Label>Raza</Form.Label>
              <Form.Control 
                type="text" 
                name="raza" 
                value={nuevoPaciente.mascota.raza} 
                onChange={(e) => setNuevoPaciente({ ...nuevoPaciente, mascota: { ...nuevoPaciente.mascota, raza: e.target.value }})}
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">Agregar Paciente</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdministrarPacientes;
