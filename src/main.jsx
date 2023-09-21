import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter, Routes e Route
import Header from './components/header/header';
import Conteudo from './components/Inicio/conteudo';
import Sobre_mim from './components/sobre_mim/sobre_mim';
import Habilidades from './components/habilidades/habilidades';
import Projetos from './components/projetos/projetos';
import Footer from './components/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Conteudo />} />
        <Route path="/sobre-mim" element={<Sobre_mim />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
