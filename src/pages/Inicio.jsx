import React from 'react';
import PortadaInicio from '../components/PortadaInicio';
import VoiceflowChat from '../components/ChatBot';
import Planes from '../components/Planes';
import '../pages/Inicio.css';
import LogoBanner from '../components/LogoBanner';
import CuponBanner from '../components/CuponBanner';

const Inicio = () => {
  return (
    <>
      <PortadaInicio />
      <main className='ContenedorPrincipal'>
      <Planes />
      <LogoBanner />
      <CuponBanner /> 
      <VoiceflowChat />
      </main>
    </>
  );
};

export default Inicio;