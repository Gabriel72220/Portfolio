import React from 'react'; 
import './conteudo.scss'
import img from '../img/avatar.png'

function Conteudo() { 
  return (
    <main className="conteudo" id="inicio">
      <section className="conteudo-principal"> 
        <div className="conteudo-principal-escrito"> 
          <h2 className="conteudo-principal-escrito-subtitulo">Olá, me chamo</h2> 
          <h1 className="conteudo-principal-escrito-titulo">Gabriel</h1> 
          <h2 className="conteudo-principal-escrito-subtitulo">Desenvolvedor Back-end</h2> 
          <a href="https://www.linkedin.com/in/gabriel-rocha-002814242/" title="Link para o LinkedIn" target="_blank">
            <button className="conteudo-principal-escrito-botao">Linkedin</button>
          </a>
        </div>
        <div className="desenho">
          <img className="conteudo-principal-img" src={img} alt="" />
        </div>

      </section>

      

    </main>
  );
}

export default Conteudo;
