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
import PacienteInterfaz from './pages/PacienteInterfaz';

const App = () => {
  const [esAdmin, setEsAdmin] = useState(false);
  const [esPaciente, setEsPaciente] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setEsAdmin(false);
    setEsPaciente(false);
  };

  const iniciarSesionComoAdmin = () => {
    setIsAuthenticated(true);
    setEsAdmin(true);
  };

  const iniciarSesionComoPaciente = () => {
    setIsAuthenticated(true);
    setEsPaciente(true);
  };

  return (
    <BrowserRouter>
      <TopBar />
      <Navbar esAdmin={esAdmin} esPaciente={esPaciente} cerrarSesion={cerrarSesion} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle-planes" element={<DetallePlanes />} /> 
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/error" element={<Error />} />  
        <Route path="/admin" element={<AdminInterfaz iniciarSesionComoAdmin={iniciarSesionComoAdmin} />} />
        <Route path="/paciente" element={<PacienteInterfaz iniciarSesionComoPaciente={iniciarSesionComoPaciente} />} />
      </Routes>
      {window.location.pathname !== '/admin' && window.location.pathname !== '/paciente' && <Footer />}
    </BrowserRouter>
  );
};

export default App;
