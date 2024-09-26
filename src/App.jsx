import React from 'react';
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
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle-planes" element={<DetallePlanes />} /> 
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/error" element={<Error />} />  
        <Route path="/admin" element={<AdminInterfaz />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

