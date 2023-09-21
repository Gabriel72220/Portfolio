import React from 'react';
import './sobre_mim.scss'
import img from '../img/avatar.png'
function Sobre_mim() { 
  return (
    <section className="section-sobre-mim" id="sobre-mim">
        <div className="div-sobre-mim" >
          <h2 className="h2-sobre-mim" >Sobre mim</h2>
          <p className="texto-sobre-mim">
          Olá, meu nome é Gabriel. Sou apaixonado por programação desde os 16 anos e tenho me dedicado constantemente a aprimorar minhas habilidades nessa área. Concluí um curso técnico em Informática e atualmente estou estudando Análise e Desenvolvimento de Sistemas. Meu objetivo atual é colocar em prática os conhecimentos que adquiri, buscando oportunidades de trabalho na área e sempre buscando evoluir minhas habilidades.
          </p>
        </div>
      </section>
    );
}

export default Sobre_mim;