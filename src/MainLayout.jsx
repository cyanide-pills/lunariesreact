import { useState } from 'react'
import './MainLayout.css'
import Header from './Banners.jsx'

function MainLayout() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Header />
    </div>
  )
}

export default MainLayout
