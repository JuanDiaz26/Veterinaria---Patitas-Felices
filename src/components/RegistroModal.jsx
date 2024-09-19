import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { PersonFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

function RegistroModal() {
  // Estado para controlar si el modal está abierto o cerrado
  const [mostrar, setMostrar] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipo, setTipo] = useState('cliente');
  const [mensaje, setMensaje] = useState('');

  // Funciones para abrir y cerrar el modal
  const abrirModal = () => setMostrar(true);
  const cerrarModal = () => setMostrar(false);

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Aquí es donde manejarías el envío del formulario y el correo electrónico
    // Por ahora solo mostraremos un mensaje de alerta
    setMensaje('En breve te contactaremos para aprobar tu registro. ¡Gracias!');

    // Cerrar el modal después del envío (opcional)
    setTimeout(() => {
      cerrarModal();
      setMensaje('');
      setNombre('');
      setApellido('');
      setCorreo('');
      setTelefono('');
      setTipo('cliente');
    }, 3000);
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <Button onClick={abrirModal} className="btn BotonRegistro">
        Registro
      </Button>

      {/* Modal para registro */}
      <Modal show={mostrar} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mensaje && <Alert variant="success">{mensaje}</Alert>}
          <Form onSubmit={manejarEnvio}>
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <div className="d-flex align-items-center">
                <PersonFill className="icono" />
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicApellido">
              <Form.Label>Apellido</Form.Label>
              <div className="d-flex align-items-center">
                <PersonFill className="icono" />
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <div className="d-flex align-items-center">
                <EnvelopeFill className="icono" />
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicTelefono">
              <Form.Label>Teléfono</Form.Label>
              <div className="d-flex align-items-center">
                <TelephoneFill className="icono" />
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu número de teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicTipo">
              <Form.Label>Me registro como:</Form.Label>
              <Form.Control
                as="select"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              >
                <option value="cliente">Cliente/Paciente</option>
                <option value="medico">Médico</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegistroModal;
