import React from 'react';
import PortadaInicio from '../components/PortadaInicio';
import VoiceflowChat from '../components/ChatBot';
import Planes from '../components/Planes';
import '../pages/Inicio.css';
import LogoBanner from '../components/LogoBanner';
import CuponBanner from '../components/CuponBanner';
import Especialistas from '../components/Especialistas';

const Inicio = () => {
  return (
    <>
      <PortadaInicio />
      <main className='ContenedorPrincipal'>
      <Planes />
      <Especialistas />
      <LogoBanner />
      <CuponBanner /> 
      <VoiceflowChat />
      </main>
    </>
  );
};

export default Inicio;