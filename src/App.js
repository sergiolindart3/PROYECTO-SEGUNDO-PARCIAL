import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Principal from './components/principal'; // Importa el componente para la página principal
import Inicio from './components/inicio';
import Consulta from './components/consulta';
import Cuenta from './components/cuenta';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Consulta" element={<Consulta/>} />
        <Route path="/Cuenta" element={<Cuenta/>} />
      </Routes>
    </Router>
  );
}

export default App;
