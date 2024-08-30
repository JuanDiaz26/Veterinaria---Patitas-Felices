import React from 'react';
import './CuponBanner.css';

const CuponBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <h2 className="promo-text">
          ¡Completá tus datos y recibí tu cupón de 15% OFF en tu primera compra!
        </h2>
        <button className="promo-button" onClick={() => console.log("Botón clickeado")}>
          ¡Quiero mi cupón!
        </button>
      </div>
    </div>
  );
};

export default CuponBanner;