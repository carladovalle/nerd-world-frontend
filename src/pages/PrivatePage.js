import { Navbar } from '../components/NavBar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { Navigate } from 'react-router-dom';

function renderError() {
  localStorage.clear();

  if (window.confirm('Faça login para continuar!')) {
    return <Navigate to="/launch" />;
  } else {
    return <Navigate to="/home" />;
  }
  
}

export function PrivatePage({ children }) {

  const auth = JSON.parse(localStorage.getItem('dashboard') || 'false');

  if (!auth) {
    return renderError();
  }

  return (
    <>
      <Navbar />
      <>
        {children}
      </>
      <Footer />
    </>
  );
    
}
