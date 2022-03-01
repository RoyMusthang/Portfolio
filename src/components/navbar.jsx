import '../components/style.css'
import { _Collapse } from 'bootstrap';
function Navbar() {

  return (
    <nav className="corSecundaria navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand textoBranco" href="#">Josué Lobo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link textoBranco" href="#projetos">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link textoBranco" href="#sobre-mim">Sobre mim</a>
          </li>
          <li className="nav-item">
            <a className="nav-link textoBranco" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
