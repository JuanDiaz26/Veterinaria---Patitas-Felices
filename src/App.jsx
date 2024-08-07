import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HeaderInicio from './components/HeaderInicio';
import VoiceflowChat from './components/ChatBot';
// import HeaderOtras from './components/HeaderOtras';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
// import Nosotros from './pages/Nosotros';
// import Contacto from './pages/Contacto';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <HeaderInicio />
              <Inicio />
              <VoiceflowChat />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

