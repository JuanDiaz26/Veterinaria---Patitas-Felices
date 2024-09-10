import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import './CuponBanner.css';

const CuponBanner = () => {
  // Estados para controlar el formulario y las alertas
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    nombreMascota: '',
  });

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [enviando, setEnviando] = useState(false);

  // Función para manejar el envío del formulario
  const enviarCuponDescuento = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Parámetros que serán enviados por correo
    const templateParams = {
      to_email: formData.email,
      to_name: formData.nombre,
    };

    // Envío del correo con EmailJS
    emailjs
      .send('service_3xbm9lq', 'template_05k0itk', templateParams, '0RggoBdDqegZZ0qNg')
      .then(() => {
        setMensajeAlerta('¡Código de descuento enviado a tu correo!');
        setMostrarAlerta(true);
        setShowModal(false);
        setFormData({ email: '', nombre: '', nombreMascota: '' });
        setEnviando(false);
      })
      .catch(() => {
        setMensajeAlerta('Hubo un error al enviar el código de descuento. Intenta nuevamente.');
        setMostrarAlerta(true);
        setEnviando(false);
      });
  };

  // Maneja los cambios de los inputs del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="promo-banner">
      <h2>¡Completá tus datos y recibí tu cupón de 15% OFF en tu primera compra!</h2>
      <Button onClick={() => setShowModal(true)}>¡Quiero mi cupón!</Button>

      {/* Mostrar alerta si hay un mensaje */}
      {mostrarAlerta && (
        <Alert
          variant={mensajeAlerta.includes('error') ? 'danger' : 'success'}
          className="alerta-cupon"
          onClose={() => setMostrarAlerta(false)}
          dismissible
        >
          {mensajeAlerta}
        </Alert>
      )}

      {/* Modal con el formulario */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Recibe tu cupón de descuento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={enviarCuponDescuento}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicMascota">
              <Form.Label>Nombre de la mascota (opcional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre de tu mascota"
                name="nombreMascota"
                value={formData.nombreMascota}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar cupón'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CuponBanner;