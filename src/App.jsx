import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio'; 
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetallePlanes from './pages/DetallePlanes'; 
import SobreMi from './pages/SobreMi'; 
import Contacto from './pages/Contacto';
import Error from './pages/Error';  
import AdminInterfaz from './pages/AdminInterfaz';

const App = () => {
  const [esAdmin, setEsAdmin] = useState(false); // Estado para controlar si el usuario es admin
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para saber si el usuario está autenticado

  const cerrarSesion = () => {
    setIsAuthenticated(false); // Cambia el estado de autenticación
    setEsAdmin(false); // También puedes limpiar el estado de admin
  };

  const iniciarSesionComoAdmin = () => {
    setIsAuthenticated(true); // El usuario está autenticado
    setEsAdmin(true); // El usuario es un administrador
  };
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar esAdmin={esAdmin} cerrarSesion={cerrarSesion} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle-planes" element={<DetallePlanes />} /> 
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/error" element={<Error />} />  
        <Route path="/admin" element={<AdminInterfaz iniciarSesionComoAdmin={iniciarSesionComoAdmin} />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

