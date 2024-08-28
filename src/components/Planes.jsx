import React, { useState } from 'react';
import './Planes.css'; // Asegúrate de que los estilos específicos estén en el archivo CSS

const CheckIcon = () => (
  <svg className="check-icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const plans = [
  {
    name: 'Primeros pasos',
    ageRange: 'de 0 a 5 años',
    features: [
      'Vacunaciones esenciales',
      'Chequeos de crecimiento',
      'Asesoramiento nutricional',
      'Desparasitación',
    ],
    buttonColor: '#4CAF50', // Verde
  },
  {
    name: 'Madurando',
    ageRange: 'de 5 a 10 años',
    features: [
      'Chequeos anuales',
      'Control de peso',
      'Limpieza dental',
      'Análisis de sangre',
    ],
    buttonColor: '#2196F3', // Azul
  },
  {
    name: 'Adultos',
    ageRange: 'de más de 10 años',
    features: [
      'Chequeos semestrales',
      'Manejo de enfermedades crónicas',
      'Terapia física',
      'Cuidados geriátricos especializados',
    ],
    buttonColor: '#9C27B0', // Púrpura
  },
];

function Planes() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="veterinary-plans">
      <h1 className="main-title">Elige el Mejor Plan para tu Amigo de Cuatro Patas</h1>
      <div className="container">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`card ${hoveredCard === index ? 'card-hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-description">
              Servicios para mascotas<br />{plan.ageRange}
            </p>
            <ul className="feature-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature-item">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className={`choose-button ${hoveredCard === index ? 'button-hovered' : ''}`}
              style={{ 
                '--button-color': plan.buttonColor,
                '--button-hover-color': hoveredCard === index ? '#ffffff' : plan.buttonColor,
                '--text-hover-color': hoveredCard === index ? plan.buttonColor : '#ffffff'
              }}
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planes;