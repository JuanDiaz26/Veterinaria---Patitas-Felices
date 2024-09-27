import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const AdminInterfaz = ({ iniciarSesionComoAdmin }) => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    // Marcar al usuario como administrador al entrar en la interfaz de administración
    iniciarSesionComoAdmin();

    const fetchTurnos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:5000/api/turnos'); // Asegúrate de que esta sea la ruta correcta
        setTurnos(respuesta.data); // Suponiendo que la respuesta contiene un arreglo de turnos
      } catch (error) {
        console.error('Error al obtener los turnos:', error);
      }
    };

    fetchTurnos();
  }, [iniciarSesionComoAdmin]);

  return (
    <div className="container mt-5">
      <Card>
        <Card.Header>Bienvenido, Administrador</Card.Header>
        <Card.Body>
          <h5>Información del Sistema</h5>
          <p>Versión del sistema: 1.0.0</p>
          <p>Aquí puedes gestionar los turnos y los pacientes.</p>
          
          <h6>Turnos Asignados</h6>
          <ListGroup>
            {turnos.length > 0 ? (
              turnos.map(turno => (
                <ListGroup.Item key={turno._id}>
                  <strong>Paciente:</strong> {turno.pacienteNombre} | <strong>Fecha:</strong> {new Date(turno.fecha).toLocaleString()} 
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No hay turnos asignados en este momento.</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminInterfaz;
