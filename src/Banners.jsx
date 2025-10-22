import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banners.css';

function Header() {
  return (
    <div className="Banner">
      <header>
        <div className="title-logo">
          <button onClick={() => (window.location.href = 'index.html')}>
            <h1>lunaries prints</h1>
          </button>
        </div>

        <nav className="nav-menu">
          <a href="index.html">inicio</a>
          <a href="all_products.html">productos</a>
          <a href="blogs.html">blogs</a>
          <a href="about.html">sobre nosotros</a>
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
