import Prints from './Product.jsx';
import './Showcase.css';

function Welcome() {
  return (
    <div id="Welcome">
      <div className="Showcase-Display">
        <div className="Display">
          <div className="Display-Text">
            <h1>Bienvenido!</h1>
            <p>Tu tienda en línea de confianza para productos de alta calidad.</p>
          </div>

          <div className="Display-Image">
            <img src="/images/paintings/cv1.png" alt="Welcome" />
          </div>
        </div>
      </div>

      {/* 👇 Add your Prints section here */}
      <Prints />
    </div>
  );
}

export default Welcome;
