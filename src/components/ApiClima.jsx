import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config'; // Importa la configuración

const Clima = () => {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=-26.83&lon=-65.22&units=metric&appid=${config.weatherApiKey}`
        );
        setClima(response.data);
      } catch (error) {
        console.error('Error al obtener el clima', error);
      }
    };

    fetchClima();
  }, []);

  return (
    <div>
      {clima ? (
        <div>
          <h2>Clima Actual</h2>
          <p>Temperatura: {clima.current.temp}°C</p>
        </div>
      ) : (
        <p>Cargando clima...</p>
      )}
    </div>
  );
};

export default Clima;
