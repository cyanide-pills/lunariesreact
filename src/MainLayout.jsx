import { Outlet } from 'react-router-dom';
import Header from './Banners.jsx';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="main">
      <Header />
      <main className="content">
        <Outlet /> 
      </main>
    </div>
  );
}

export default MainLayout;
