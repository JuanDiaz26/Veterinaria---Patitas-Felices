import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button, Form } from 'react-bootstrap';
import './CuponBanner.css';

const CuponBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    nombreMascota: '',
  });

  const enviarCuponDescuento = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: formData.email,
      to_name: formData.nombre,
    };

    emailjs.send(
      'service_3xbm9lq', 
      'template_05k0itk', 
      templateParams,
      '0RggoBdDqegZZ0qNg'
    ).then(
      (result) => {
        console.log('Correo enviado exitosamente', result.text);
        alert('¡Código de descuento enviado a tu correo!');
        setShowModal(false);
        setFormData({ email: '', nombre: '', nombreMascota: '' }); 
      },
      (error) => {
        console.error('Error al enviar el correo', error.text);
        alert('Hubo un error al enviar el código de descuento. Intenta nuevamente.');
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="promo-banner">
      <div className="promo-contenido">
        <h2 className="promo-descripcion">
          ¡Completá tus datos y recibí tu cupón de 15% OFF en tu primera compra!
        </h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ¡Quiero mi cupón!
        </Button>

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
    </div>
  );
};

export default CuponBanner;
