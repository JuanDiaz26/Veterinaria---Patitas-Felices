import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import { PersonFill, KeyFill } from 'react-bootstrap-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InicioModal() {
  const [mostrar, setMostrar] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  
  
  const navigate = useNavigate();


  const cerrarModal = () => {
    setMostrar(false);
    setMensaje(''); // Limpiar mensaje al cerrar modal
  };
  
  const abrirModal = () => setMostrar(true);

  const manejarSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const respuesta = await axios.post('http://localhost:5000/api/pacientes/login', {
        correo,
        contraseña,
      });
  
      // Verificar si el usuario es admin
      if (respuesta.data.tipo === 'admin') {
        setMensaje('Has ingresado como administrador');
      } else {
        setMensaje('Has iniciado sesión como paciente');
      }
      setTipoMensaje('success');
  
      // Mostrar el mensaje y esperar 6 segundos antes de cerrar el modal y redirigir
      setTimeout(() => {
        cerrarModal(); // Cerrar el modal después de mostrar el mensaje
  
        if (respuesta.data.tipo === 'admin') {
          navigate('/admin'); // Redirigir a la interfaz del administrador
        } else {
          navigate('/paciente'); // Redirigir a la interfaz del paciente
        }
      }, 1500);
  
    } catch (error) {
      setMensaje(error.response.data.msg || 'Error en el inicio de sesión');
      setTipoMensaje('danger');
    }
  };

  return (
    <>
      <Button onClick={abrirModal} className="btn BotonInicio">
        Iniciar Sesión
      </Button>

      <Modal show={mostrar} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mensaje && (
            <Alert variant={tipoMensaje} onClose={() => setMensaje('')} dismissible>
              {mensaje}
            </Alert>
          )}
          <Form onSubmit={manejarSubmit}>
            <Form.Group controlId="formUsuario" className="mb-3">
              <Form.Label>Correo</Form.Label>
              <InputGroup>
                <InputGroup.Text><PersonFill /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formContraseña" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <InputGroup.Text><KeyFill /></InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InicioModal;
