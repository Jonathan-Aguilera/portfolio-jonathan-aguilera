import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './common/layouts/MainLayout';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Experiencia from './pages/Experiencia';
import Formacion from './pages/Formacion';
import Habilidades from './pages/Habilidades';
import Contacto from './pages/Contacto';
import NotFound from './pages/errors/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<RouteWrapper><SobreMi /></RouteWrapper>} />
          <Route path="/proyectos" element={<RouteWrapper><Proyectos /></RouteWrapper>} />
          <Route path="/experiencia" element={<RouteWrapper><Experiencia /></RouteWrapper>} />
          <Route path="/formacion" element={<RouteWrapper><Formacion /></RouteWrapper>} />
          <Route path="/habilidades" element={<RouteWrapper><Habilidades /></RouteWrapper>} />
          <Route path="/contacto" element={<RouteWrapper><Contacto /></RouteWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper simple para dar padding superior/inferior en vistas individuales
function RouteWrapper({ children }: { children: React.ReactNode }) {
  return <div className="py-8">{children}</div>;
}
