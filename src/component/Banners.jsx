import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banners.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="Banner">
      <header>
        <div className="title-logo">
          <button onClick={() => (window.location.href = 'index.html')}>
            <h1>lunaries</h1>
          </button>
        </div>

        <nav className="nav-menu">
          <Link to="/">inicio</Link>
          <p>|</p>
          <Link to="/products">productos</Link>
          <p>|</p>
          <Link to="/blogs">blogs</Link>
          <p>|</p>
          <Link to="/about">sobre nosotros</Link>
        </nav>
        
        <nav className="user-options">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Opciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Iniciar Sesión</Dropdown.Item>
              <Dropdown.Item href="#">Registrarse</Dropdown.Item>
              <Dropdown.Item href="#">Perfil</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>

      </header>
    </div>
  );
}

export default Header;
