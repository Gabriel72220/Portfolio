import React from 'react';
import linkerdin from '../img/Linkerdin.png'
import github from '../img/github.png'
import gmail from '../img/gmail.png'
import frelas from '../img/99frelas.png'
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="linha-marrom"></div>
      <div className='redes_sociais_footer'>
        <a href="https://www.linkedin.com/in/gabriel-rocha-002814242/" target="_blank" rel="noopener noreferrer"><img src={linkerdin} alt="linkerdin" /></a>
        <a href="https://github.com/Gabriel72220" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
        <a href="mailto:gabrielrocha7220@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="gmail" /></a>
        <a href="https://www.99freelas.com.br/user/gabriel-rocha-ferreira" target="_blank" rel="noopener noreferrer"><img src={frelas} alt="frelas"  style={{ height: '19px',width: '19px' }}/></a>
      </div>
    </footer>
  );
}

export default Footer;
