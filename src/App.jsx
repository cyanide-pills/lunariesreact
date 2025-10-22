import { useState } from 'react'
import './App.css'
import Header from './Banners.jsx'
import MainLayout from './MainLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout />
    </>
  )
}

export default App
