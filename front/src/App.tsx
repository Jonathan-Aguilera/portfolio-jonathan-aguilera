import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import PageLayout from './layouts/PageLayout';

// Páginas principales
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Experiencia from './pages/Experiencia';
import Formacion from './pages/Formacion';
import Habilidades from './pages/Habilidades';
import Contacto from './pages/Contacto';

// Noticias
import Noticias from './pages/Noticias';
import NewsDetail from './pages/NewsDetail';

// Configuración y utilidades
import Configuracion from './pages/Configuracion';
import Sitemap from './pages/Sitemap';

// Páginas legales
import Accesibilidad from './pages/legal/Accesibilidad';
import Privacidad from './pages/legal/Privacidad';
import Cookies from './pages/legal/Cookies';
import AvisoLegal from './pages/legal/AvisoLegal';
import DeclaracionAccesibilidad from './pages/legal/DeclaracionAccesibilidad';

// Errores
import NotFound from './pages/errors/NotFound';

// Componentes de utilidad
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* =====================================================
            HOME - Layout principal (diseño específico)
        ===================================================== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* =====================================================
            RESTO DE LA APLICACIÓN - Layout de páginas
        ===================================================== */}
        <Route element={<PageLayout />}>
          {/* ---------- Vistas dedicadas ---------- */}
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* ---------- Noticias ---------- */}
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NewsDetail />} />

          {/* ---------- Configuración y utilidades ---------- */}
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* ---------- Vistas legales ---------- */}
          <Route path="/accesibilidad" element={<Accesibilidad />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/declaracion-accesibilidad" element={<DeclaracionAccesibilidad />} />

          {/* ---------- Página no encontrada ---------- */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}