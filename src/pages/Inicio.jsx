import React from 'react';
import PortadaInicio from '../components/PortadaInicio';
import VoiceflowChat from '../components/ChatBot';
import Footer from '../components/Footer';
import Planes from '../components/Planes';
import '../pages/Inicio.css';

const Inicio = () => {
  return (
    <>
      <PortadaInicio />
      <main className='ContenedorPrincipal'>
      <Planes />
      </main>
      <VoiceflowChat />
      <Footer />
    </>
  );
};

export default Inicio;