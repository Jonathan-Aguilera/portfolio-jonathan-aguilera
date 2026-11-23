import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Experiencia from './pages/Experiencia';
import Formacion from './pages/Formacion';
import Habilidades from './pages/Habilidades';
import Contacto from './pages/Contacto';
import Noticias from './pages/Noticias';
import Configuracion from './pages/Configuracion';
import Accesibilidad from './pages/legal/Accesibilidad';
import Privacidad from './pages/legal/Privacidad';
import Cookies from './pages/legal/Cookies';
import AvisoLegal from './pages/legal/AvisoLegal';
import DeclaracionAccesibilidad from './pages/legal/DeclaracionAccesibilidad';
import NotFound from './pages/errors/NotFound';
import ScrollToTop from './components/ui/ScrollToTop';
import NewsDetail from './pages/NewsDetail';
import Sitemap from './pages/Sitemap';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<RouteWrapper><SobreMi /></RouteWrapper>} />
          <Route path="/proyectos" element={<RouteWrapper><Proyectos /></RouteWrapper>} />
          <Route path="/experiencia" element={<RouteWrapper><Experiencia /></RouteWrapper>} />
          <Route path="/formacion" element={<RouteWrapper><Formacion /></RouteWrapper>} />
          <Route path="/habilidades" element={<RouteWrapper><Habilidades /></RouteWrapper>} />
          <Route path="/contacto" element={<RouteWrapper><Contacto /></RouteWrapper>} />
          <Route path="/noticias" element={<RouteWrapper><Noticias /></RouteWrapper>} />
          <Route path="/noticias/:slug" element={<RouteWrapper><NewsDetail /></RouteWrapper>} />
          <Route path="/configuracion" element={<RouteWrapper><Configuracion /></RouteWrapper>} />
          <Route path="/accesibilidad" element={<RouteWrapper><Accesibilidad /></RouteWrapper>} />
          <Route path="/privacidad" element={<RouteWrapper><Privacidad /></RouteWrapper>} />
          <Route path="/cookies" element={<RouteWrapper><Cookies /></RouteWrapper>} />
          <Route path="/declaracion-accesibilidad" element={<RouteWrapper><DeclaracionAccesibilidad /></RouteWrapper>} />
          <Route path="/aviso-legal" element={<RouteWrapper><AvisoLegal /></RouteWrapper>} />
          <Route path="/sitemap" element={<RouteWrapper><Sitemap /></RouteWrapper>} />
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
