import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

const ProductosCarousel = () => {
  const productos = [
    { id: 1, nombre: 'Comida para Perros Pedigree', descripcion: 'Nutrición completa y balanceada para perros adultos de la marca Pedigree.', foto: 'https://via.placeholder.com/300x200?text=Pedigree' },
    { id: 2, nombre: 'Comida para Gatos Whiskas', descripcion: 'Deliciosa comida para gatos, rica en nutrientes y sabores de Whiskas.', foto: 'https://via.placeholder.com/300x200?text=Whiskas' },
    { id: 3, nombre: 'Snacks para Perros Purina', descripcion: 'Snacks saludables y sabrosos para premiar a tu perro de la marca Purina.', foto: 'https://via.placeholder.com/300x200?text=Purina' },
    { id: 4, nombre: 'Camita para Mascotas Old Prince', descripcion: 'Camita cómoda y lavable para perros y gatos de Old Prince.', foto: 'https://via.placeholder.com/300x200?text=Old+Prince' },
    { id: 5, nombre: 'Rascador para Gatos', descripcion: 'Rascador para gatos con postes de sisal y plataforma.', foto: 'https://via.placeholder.com/300x200?text=Rascador' },
    { id: 6, nombre: 'Juguete para Perros', descripcion: 'Juguete interactivo para mantener a tu perro entretenido.', foto: 'https://via.placeholder.com/300x200?text=Juguete' },
    { id: 7, nombre: 'Comida para Perros Pedigree', descripcion: 'Nutrición completa y balanceada para perros adultos de la marca Pedigree.', foto: 'https://via.placeholder.com/300x200?text=Pedigree' },
    { id: 8, nombre: 'Comida para Gatos Whiskas', descripcion: 'Deliciosa comida para gatos, rica en nutrientes y sabores de Whiskas.', foto: 'https://via.placeholder.com/300x200?text=Whiskas' },
    { id: 9, nombre: 'Snacks para Perros Purina', descripcion: 'Snacks saludables y sabrosos para premiar a tu perro de la marca Purina.', foto: 'https://via.placeholder.com/300x200?text=Purina' },
    { id: 10, nombre: 'Camita para Mascotas Old Prince', descripcion: 'Camita cómoda y lavable para perros y gatos de Old Prince.', foto: 'https://via.placeholder.com/300x200?text=Old+Prince' },
  ];

  const itemsPerSlide = 3; // Número de tarjetas por diapositiva

  // Dividir productos en grupos de 'itemsPerSlide'
  const groupedProductos = [];
  for (let i = 0; i < productos.length; i += itemsPerSlide) {
    groupedProductos.push(productos.slice(i, i + itemsPerSlide));
  }

  return (
    <Container className="my-4">
      <Carousel controls={true} interval={null} indicators={false}>
        {groupedProductos.map((grupo, index) => (
          <Carousel.Item key={index}>
            <Row>
              {grupo.map((producto) => (
                <Col key={producto.id} md={4} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={producto.foto} />
                    <Card.Body>
                      <Card.Title>{producto.nombre}</Card.Title>
                      <Card.Text>{producto.descripcion}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Última actualización hace 3 mins</small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductosCarousel;
