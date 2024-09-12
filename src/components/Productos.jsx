import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Productos.css'; // Importa el CSS

const productos = [
  { id: 1, title: 'Alimento para Perros', description: 'Nutrición completa para perros adultos.', price: '$25.00', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Juguete para Gatos', description: 'Juguete interactivo para mantener a tu gato entretenido.', price: '$15.00', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Cama para Mascotas', description: 'Cama cómoda y acolchada para tu mascota.', price: '$40.00', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Collar para Perro', description: 'Collar ajustable y resistente para perros.', price: '$12.00', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Arenero para Gatos', description: 'Arenero con tapa para una limpieza más fácil.', price: '$30.00', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Cuidado Dental para Perros', description: 'Pasta dental y cepillo para mantener los dientes de tu perro limpios.', price: '$20.00', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Rascador para Gatos', description: 'Rascador de sisal para que tu gato no dañe tus muebles.', price: '$18.00', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Cinturón de Seguridad para Perros', description: 'Cinturón de seguridad para mantener a tu perro seguro en el auto.', price: '$22.00', image: 'https://via.placeholder.com/150' },
];

function Productos() {
  return (
    <Container className="product-container">
      <Row xs={1} md={2} lg={3} className="g-3">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <Card>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body className="card-body-productos">
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text className="product-price">{producto.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <button className="btn btn-primary me-2">Agregar al carrito</button>
                <button className="btn btn-secondary">Comprar</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
