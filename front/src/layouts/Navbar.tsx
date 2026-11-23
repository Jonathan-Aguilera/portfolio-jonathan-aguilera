import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import AvailabilityBadge from '../components/ui/AvailabilityBadge';

const navLinkClasses =
  'text-white/90 hover:text-glint transition-colors text-[15px] font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]';
const activeLinkClasses =
  'text-glint font-semibold text-[15px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]';

const dropdownItemClasses =
  'px-4 py-3 hover:bg-white/5 text-white/80 hover:text-white text-sm transition-colors';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="ml-auto lg:ml-0">
      {/* ================= DESKTOP ================= */}
      <ul className="hidden lg:flex items-center gap-x-7 gap-y-2">
        <li>
          <NavLink
            to="/proyectos"
            className={({ isActive }) => (isActive ? activeLinkClasses : navLinkClasses)}
          >
            Proyectos
          </NavLink>
        </li>

        <li className="relative group">
          <button
            type="button"
            className={`flex items-center gap-1 ${navLinkClasses}`}
          >
            Sobre mí
            <ChevronDown
              size={14}
              className="transition-transform duration-200 group-hover:rotate-180"
            />
          </button>

          <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="w-48 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden">
              <NavLink to="/sobre-mi" className={dropdownItemClasses}>Mi Historia</NavLink>
              <NavLink to="/experiencia" className={dropdownItemClasses}>Experiencia</NavLink>
              <NavLink to="/formacion" className={dropdownItemClasses}>Formación</NavLink>
              <NavLink to="/habilidades" className={dropdownItemClasses}>Habilidades</NavLink>
            </div>
          </div>
        </li>

        <li>
          <NavLink
            to="/noticias"
            className={({ isActive }) => (isActive ? activeLinkClasses : navLinkClasses)}
          >
            Noticias
          </NavLink>
        </li>

        <li>
          <Link
            to="/contacto"
            className="group/cta inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/30 backdrop-blur-sm border border-amber-400/60 hover:border-amber-300 text-amber-50 hover:text-white font-semibold text-[15px] transition-all duration-200"
          >
            Hablemos
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            />
          </Link>
        </li>
      </ul>

      {/* ================= BOTÓN MÓVIL ================= */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMobileMenuOpen}
        className="lg:hidden text-white p-2"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ================= MENÚ MÓVIL ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[var(--header-h,64px)] left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl flex flex-col py-4 px-6 gap-4 z-40">
          <NavLink
            to="/proyectos"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLinkClasses : navLinkClasses)}
          >
            Proyectos
          </NavLink>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between text-white/90 text-[15px] font-medium w-full text-left"
            >
              Sobre mí
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="flex flex-col pl-4 gap-3 border-l border-white/20 mt-1">
                <NavLink to="/sobre-mi" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClasses}>Mi Historia</NavLink>
                <NavLink to="/experiencia" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClasses}>Experiencia</NavLink>
                <NavLink to="/formacion" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClasses}>Formación</NavLink>
                <NavLink to="/habilidades" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClasses}>Habilidades</NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/noticias"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeLinkClasses : navLinkClasses)}
          >
            Noticias
          </NavLink>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
            <div className="flex justify-center">
              <AvailabilityBadge />
            </div>
            <Link
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group/cta inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400/20 border border-amber-400/60 text-amber-50 hover:bg-amber-400/30 hover:text-white font-semibold text-[15px] w-full transition-all"
            >
              Hablemos
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}