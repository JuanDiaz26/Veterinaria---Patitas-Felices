import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio'; 
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetallePlanes from './pages/DetallePlanes'; 

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle-planes" element={<DetallePlanes />} /> {/* Define la ruta para DetallePlanes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;


