import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Conteudo from './components/Inicio/conteudo';
import Sobre_mim from './components/sobre_mim/sobre_mim';
import Habilidades from './components/habilidades/habilidades';
import Projetos from './components/projetos/projetos';
import Footer from './components/footer/footer.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Conteudo />} />
          <Route path="/sobre-mim" element={<Sobre_mim />} />
          <Route path="/Habilidades" element={<Habilidades />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Footer/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
