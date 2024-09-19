import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { PersonFill, KeyFill } from 'react-bootstrap-icons';

function InicioModal() {
  // Estado para controlar si el modal está abierto o cerrado
  const [mostrar, setMostrar] = useState(false);

  // Funciones para abrir y cerrar el modal
  const cerrarModal = () => setMostrar(false);
  const abrirModal = () => setMostrar(true);

  return (
    <>
    {/* Botón para abrir la ventana modal */}
    <Button onClick={abrirModal} className="btn BotonInicio">
            Iniciar Sesion
    </Button>

      {/* Ventana modal */}
      <Modal show={mostrar} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campo para el usuario */}
            <Form.Group controlId="formUsuario" className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <InputGroup>
                <InputGroup.Text><PersonFill /></InputGroup.Text>
                <Form.Control type="text" placeholder="Ingresa tu usuario" />
              </InputGroup>
            </Form.Group>

            {/* Campo para la contraseña */}
            <Form.Group controlId="formContraseña" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <InputGroup.Text><KeyFill /></InputGroup.Text>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
              </InputGroup>
            </Form.Group>

            {/* Botón para iniciar sesión */}
            <Button variant="primary" type="submit" className="w-100">
              Iniciar Sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InicioModal;
