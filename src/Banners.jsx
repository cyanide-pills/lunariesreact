
import { useState } from 'react'
import './Banners.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Banner">
        <div className="logo">
            <img src="assets/lunaries_logo.png" id= "logo-icon"/>
            <h1>lunaries prints</h1>
        </div>

        <nav>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
        </nav>       

      </div>
    </>
  )
}

export default App
