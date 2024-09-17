import React from 'react';
import { StarFill } from 'react-bootstrap-icons';
import '../style/Comentarios.css';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <StarFill key={i} className={`star ${i <= rating ? 'filled' : ''}`} />
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const Comentarios = () => {
  const comentarios = [
    {
      nombre: 'Leo Messi',
      rating: 4,
      comentario: 'El lugar está bien, pero tuve un malentendido con la recepción.',
      img: '../src/assets/messi.webp'
    },
    {
      nombre: 'Dibu Martinez',
      rating: 3,
      comentario: 'Buen servicio, pero los tiempos de espera podrían mejorar.',
      img: '../src/assets/dibu.webp'
    },
    {
      nombre: 'Tony Stark',
      rating: 5,
      comentario: 'Esta veterinaria es el Ferrari de los centros de cuidado para mascotas. ¡Altamente recomendada!',
      img: '../src/assets/tony.webp'
    },
    {
      nombre: 'Chayanne',
      rating: 5,
      comentario: 'Muy buen lugar, comodo y muy profesionales ante todo. Aprobado por Chayanne!',
      img: '../src/assets/chayanne.webp'
    }
  ];

  return (
    <div className="comentarios-container">
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario-card">
          <div className="comentario-color-line"></div>
          <div className="comentario-content"> 
            <h2 className="comentario-title">{comentario.nombre}</h2>
            <StarRating rating={comentario.rating} />
            <p className="comentario-description">{comentario.comentario}</p>
          </div>
          <div className="comentario-img">
            <img src={comentario.img} alt={`${comentario.nombre} perfil`} className="comentario-img-circle" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comentarios;
