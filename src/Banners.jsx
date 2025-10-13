import { useState } from 'react'
import './Banners.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Banner">
        <header>
          <div className="title-logo">
            <button onClick={() => window.location.href = 'index.html'}>
              <img src="assets/images/icons/lunaries.png" alt="Logo" />
              <h1>lunaries prints</h1>
            </button>

            <nav className="user-options">
              <a href="sign_in.html">registrate</a>
              <a href="log_in.html">inicia sesión</a>
              <button onClick={() => window.location.href = 'cart.html'}>
                <img src="assets/images/icons/cart.png" alt="Cart" />
              </button>
            </nav>
          </div>

          <nav className="nav-menu">
            <a href="index.html">inicio</a>
            <a href="all_products.html">productos</a>
            <a href="blogs.html">blogs</a>
            <a href="about.html">sobre nosotros</a>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Header
