import React, { useEffect } from 'react';
import PortadaInicio from '../components/PortadaInicio';
import VoiceflowChat from '../components/ChatBot';
import Planes from '../components/Planes';
import '../pages/Inicio.css';
import LogoBanner from '../components/LogoBanner';
import CuponBanner from '../components/CuponBanner';
import Especialistas from '../components/Especialistas';
import Comentarios from '../components/Comentarios';

const Inicio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PortadaInicio />
      <main className='ContenedorPrincipal'>
      <Planes />
      <Especialistas />
      <Comentarios />
      <LogoBanner />
      <CuponBanner /> 
      <VoiceflowChat />
      </main>
    </>
  );
};

export default Inicio;