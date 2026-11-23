import { Link } from 'react-router-dom';
import { GitBranch, BriefcaseBusiness, Mail, Camera, Download, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-abyss-deep border-t border-white/5 text-slate-300 py-16 px-8 md:px-16 lg:px-24 w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Columna 1: Perfil, Lema, Conectemos y CV */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-slate-100 font-bold text-lg">Jonathan Felipe Aguilera Tapia</h2>
              <p className="text-xs text-cyan-400 font-medium tracking-wide uppercase whitespace-nowrap">
                Técnico en desarrollo de aplicaciones multiplataforma
              </p>
              <p className="text-slate-400 text-sm italic leading-relaxed border-l-2 border-cyan-500/30 pl-3">
                "Tecnología para todos por igual"
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">Conectemos</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
                <a href="https://github.com/Jonathan-Aguilera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <GitBranch size={16} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <BriefcaseBusiness size={16} />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:jonathan.aguilera.dev@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Mail size={16} />
                  <span>Email</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Camera size={16} />
                  <span>Instagram</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Play size={16} />
                  <span>YouTube</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("📄 Simulación: Aquí se descargará mi CV en formato PDF.");
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 transition-all text-xs font-semibold cursor-pointer"
                >
                  <Download size={14} />
                  Descargar CV
                </button>
              </div>
            </div>
          </div>

          {/* Columna 2: Identidad, Navegación Principal e Información */}
          <div className="md:pl-12 space-y-6">
            <div>
              <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-wider mb-3">Identidad y Navegación Principal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/sobre-mi" className="hover:text-cyan-400 transition-colors">Sobre mí</Link>
                </li>
                <li>
                  <Link to="/proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</Link>
                </li>
                <li>
                  <Link to="/noticias" className="hover:text-cyan-400 transition-colors">Noticias</Link>
                </li>
                <li>
                  <Link to="/experiencia" className="hover:text-cyan-400 transition-colors">Experiencia</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-wider mb-3">Información y Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/formacion" className="hover:text-cyan-400 transition-colors">Formación</Link>
                </li>
                <li>
                  <Link to="/habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 3: Legal, Accesibilidad y Recursos */}
          <div className="md:pl-12 space-y-6">
            <div>
              <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-wider mb-3">Legal y Accesibilidad</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/aviso-legal" className="hover:text-cyan-400 transition-colors">Aviso Legal</Link>
                </li>
                <li>
                  <Link to="/privacidad" className="hover:text-cyan-400 transition-colors">Privacidad</Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookies</Link>
                </li>
                <li>
                  <Link to="/configuracion" className="hover:text-cyan-400 transition-colors">Configuración</Link>
                </li>
                <li>
                  <Link to="/accesibilidad" className="hover:text-cyan-400 transition-colors">Accesibilidad</Link>
                </li>
                <li>
                  <Link to="/declaracion-accesibilidad" className="hover:text-cyan-400 transition-colors">Declaración de Accesibilidad</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-wider mb-3">Recursos</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Mapa del Sitio</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea final */}
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Jonathan Aguilera.</p>
          <p>Construido con React, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
