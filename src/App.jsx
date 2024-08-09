import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio'; // Importa la página de Inicio
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Inicio />} />
        {/* Aquí puedes agregar más rutas para otras páginas */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


