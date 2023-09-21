import React from 'react'; 
import './habilidades.scss'
import c from '../img/c.png'
import python from '../img/python.png'
import js from '../img/js.png'
import html from '../img/html.png'
import css from '../img/css.png'
import node from '../img/node.png'
import react from '../img/react.png'
import php from '../img/php.png'

function Habilidades() { 
  return (
    
<section className="habilidades">
  <div className="div-habilidades" id="Habilidades">
    <h2 className="texto-habilidades">habilidades</h2>
  </div>
  <div className="imagens-habilidades">
    <img className="img" src={c} alt="C" style={{ height: '160px',width: '160px' }} />
    <img className="img" src={python} alt="Python" style={{ height: '160px',width: '160px' }}/>
    <img className="img" src={js} alt="Java script" style={{ height: '160px',width: '160px' }} />
    <img className="img" src={node} alt="node.js" style={{ height: '160px',width: '160px' }}/>
    <img className="img" src={react} alt="react.js" style={{ height: '160px',width: '160px' }}/>
    <img className="img" src={php} alt="PHP" style={{ height: '160px',width: '160px' }}/>
    <img className="img" src={html} alt="HTML" style={{ height: '160px',width: '160px' }}/>
    <img className="img" src={css} alt="CSS" style={{ height: '160px',width: '160px' }}/>
    
  </div>
</section>

    );
}

export default Habilidades;