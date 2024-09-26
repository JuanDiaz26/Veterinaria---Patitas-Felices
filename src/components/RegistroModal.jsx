import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { PersonFill, EnvelopeFill, TelephoneFill, LockFill } from 'react-bootstrap-icons';
import axios from 'axios';

function RegistroModal() {
  const [mostrar, setMostrar] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [colorMensaje, setColorMensaje] = useState(''); // Para manejar el color de los mensajes
  const [errores, setErrores] = useState({});

  const abrirModal = () => setMostrar(true);
  const cerrarModal = () => setMostrar(false);

  const validarFormulario = () => {
    const errores = {};

    // Validación de nombre y apellido (solo letras)
    const soloLetras = /^[A-Za-z]+$/;
    if (!soloLetras.test(nombre)) {
      errores.nombre = 'El nombre solo debe contener letras.';
    }
    if (!soloLetras.test(apellido)) {
      errores.apellido = 'El apellido solo debe contener letras.';
    }

    // Validación de correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
      errores.correo = 'El correo electrónico no tiene un formato válido.';
    }

    // Validación de contraseña (entre 8 y 16 caracteres, con al menos un número y un carácter especial)
    const formatoContraseña = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    if (!formatoContraseña.test(contraseña)) {
      errores.contraseña = 'La contraseña debe tener entre 8 y 16 caracteres, con al menos un número y un carácter especial.';
    }

    // Validación de confirmación de contraseña (debe coincidir)
    if (contraseña !== confirmarContraseña) {
      errores.confirmarContraseña = 'Las contraseñas no coinciden.';
    }

    return errores;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const erroresValidacion = validarFormulario();
  
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }
  
    setErrores({});
    
    const pacienteData = {
      nombre,
      apellido,
      correo,
      telefono,
      contraseña,
      confirmarContraseña // Asegúrate de enviar este campo también
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/pacientes/registro', pacienteData);
      setMensaje(response.data.msg); // Muestra mensaje de éxito
      // Limpiar campos si es necesario
      setTimeout(() => {
        cerrarModal();
        setMensaje('');
        setNombre('');
        setApellido('');
        setCorreo('');
        setTelefono('');
        setContraseña('');
        setConfirmarContraseña('');
      }, 3000);
    
    } catch (error) {
      console.error(error); // Agrega esto para ver el error completo en la consola
      if (error.response) {
        const { errores, msg } = error.response.data;
        if (errores && Array.isArray(errores)) {
          setMensaje(errores.map(err => err.msg).join(', '));
        } else if (msg) {
          setMensaje(msg);
        } else {
          setMensaje('Error en el registro. Intenta nuevamente.');
        }
      } else if (error.request) {
        setMensaje('No se pudo conectar con el servidor. Verifica tu conexión.');
      } else {
        setMensaje('Ocurrió un error desconocido. Intenta nuevamente.');
      }
    }
};


  return (
    <>
      <Button onClick={abrirModal} className="btn BotonRegistro">
        Registro
      </Button>

      <Modal show={mostrar} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mensaje && <Alert variant="light" style={{ color: colorMensaje }}>{mensaje}</Alert>}
          {Object.keys(errores).length > 0 && (
            <Alert variant="danger">
              {Object.values(errores).map((error, idx) => (
                <div key={idx}>{error}</div>
              ))}
            </Alert>
          )}
          <Form onSubmit={manejarEnvio}>
            {/* Campo Nombre */}
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

            {/* Campo Apellido */}
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

            {/* Campo Correo */}
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

            {/* Campo Teléfono */}
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

            {/* Campo Contraseña */}
            <Form.Group controlId="formBasicContraseña">
              <Form.Label>Contraseña</Form.Label>
              <div className="d-flex align-items-center">
                <LockFill className="icono" />
                <Form.Control
                  type="password"
                  placeholder="Ingresa una contraseña segura"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            {/* Campo Confirmar Contraseña */}
            <Form.Group controlId="formBasicConfirmarContraseña">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <div className="d-flex align-items-center">
                <LockFill className="icono" />
                <Form.Control
                  type="password"
                  placeholder="Repite la contraseña"
                  value={confirmarContraseña}
                  onChange={(e) => setConfirmarContraseña(e.target.value)}
                  required
                />
              </div>
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
