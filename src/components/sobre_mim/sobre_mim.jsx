import React from 'react'; // Certifique-se de importar o React
import './sobre_mim.scss'
import img from '../img/avatar.png'
function Sobre_mim() { 
  return (
    <section className="section-sobre-mim" id="sobre-mim">
        <div className="div-sobre-mim" >
          <h2 className="h2-sobre-mim" >Sobre mim</h2> {/* Use h2 em vez de h1 para manter a consistência */}
          <p className="texto-sobre-mim">
            Olá! Meu nome é Gabriel Rocha Ferreira, sou formado em técnico em informática
            e atualmente estou cursando Análise e Desenvolvimento de Sistemas.
            Estou em busca de refinar minhas habilidades de Back-end trabalhando como freelancer.
          </p>
        </div>
      </section>
    );
}

export default Sobre_mim;