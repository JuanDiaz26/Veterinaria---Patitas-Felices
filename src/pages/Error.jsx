import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Error.css';  


const Error404 = () => {

  useEffect(() => {
    window.scrollTo(200, 200);
  }, []);

  return (
    <div className="container error404-container">
      <div className="row justify-content-center align-items-center min-vh-100 text-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1>404</h1>
          <h2>¡Oops! Página no encontrada</h2>
          <p>
            Lo siento, pero la página que estás buscando no existe. Puede que se haya movido o eliminado.
          </p>
          <div className="error404-botones">
            <Link to="/" className="btn btn-primary me-2">Volver al Inicio</Link>
            <Link to="/contacto" className="btn btn-secondary">Contáctanos</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
 