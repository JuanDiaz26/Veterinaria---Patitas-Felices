import React from 'react';
import PortadaInicio from '../components/PortadaInicio';
import VoiceflowChat from '../components/ChatBot';
import Planes from '../components/Planes';
import '../pages/Inicio.css';
import LogoBanner from '../components/LogoBanner';
import CuponBanner from '../components/CuponBanner';
import Especialistas from '../components/Especialistas';
import Productos from '../components/Productos';

const Inicio = () => {
  return (
    <>
      <PortadaInicio />
      <main className='ContenedorPrincipal'>
      <Planes />
      <Especialistas />
      <LogoBanner />
      <CuponBanner /> 
      <Productos />
      <VoiceflowChat />
      </main>
    </>
  );
};

export default Inicio;