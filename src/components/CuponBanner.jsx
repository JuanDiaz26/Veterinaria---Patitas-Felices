import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button, Form } from 'react-bootstrap';
import './CuponBanner.css';

// Componente CuponBanner muestra un banner promocional con un formulario para obtener un cupón
const CuponBanner = () => {
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    email: '', // Email del usuario
    nombre: '', // Nombre del usuario
    nombreMascota: '', // Nombre opcional de la mascota
  });

  // Función para manejar el envío del formulario
  const enviarCuponDescuento = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página

    // Parámetros que serán enviados por correo
    const templateParams = {
      to_email: formData.email,
      to_name: formData.nombre,
    };

    // Aquí se realiza el envío del correo con EmailJS
    emailjs.send('service_3xbm9lq', 'template_05k0itk', templateParams, '0RggoBdDqegZZ0qNg')
      .then(() => {
        alert('¡Código de descuento enviado a tu correo!');
        setShowModal(false); // Cierra el modal
        setFormData({ email: '', nombre: '', nombreMascota: '' }); // Reinicia el formulario
      })
      .catch(() => {
        alert('Hubo un error al enviar el código de descuento. Intenta nuevamente.');
      });
  };

  // Maneja los cambios de los inputs del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData, // Copiar los datos actuales
      [e.target.name]: e.target.value, // Actualiza solo el campo modificado
    });
  };

  return (
    <div className="promo-banner">
      <h2>¡Completá tus datos y recibí tu cupón de 15% OFF en tu primera compra!</h2>
      <Button onClick={() => setShowModal(true)}>¡Quiero mi cupón!</Button>

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

            <Button variant="primary" type="submit">
              Enviar cupón
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CuponBanner;
