import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="cabecalho">
      <nav className="cabecalho-menu">
        <Link to="/" className="cabecalho-item">Inicio</Link>
        <Link to="/sobre-mim" className="cabecalho-item">Sobre mim</Link>
        <Link to="/Habilidades" className="cabecalho-item">Habilidades</Link>
        <Link to="/Projetos" className="cabecalho-item">Projetos</Link>
      </nav>

    </header>
    
  );
}

export default Header;
