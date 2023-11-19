import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import { Container } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

import { AuthProvider } from "./context/authContext";

import IniciarSesion from './Login/IniciarSesion';
import Inicio from './Inicio';

const Navegacion = () => {
  const Location = useLocation();
  return (
    <Container maxWidth='xl' sx={{ mb: 12}}>
      <AnimatePresence>
        <AuthProvider>
          <Routes location={Location} key={Location.pathname}>
            <Route path='/' element={<IniciarSesion/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
          </Routes> 
        </AuthProvider>
      </AnimatePresence>
    </Container>
  )
}

export default Navegacion
