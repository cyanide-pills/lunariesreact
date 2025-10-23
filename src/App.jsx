import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout.jsx';
import Welcome from './pages/Welcome.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Welcome />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
