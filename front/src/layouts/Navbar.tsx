import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import AvailabilityBadge from '../components/ui/AvailabilityBadge';

const navLinkClasses =
  'text-theme-text/80 hover:text-glint transition-colors text-[15px] font-medium';
const activeLinkClasses =
  'text-glint font-semibold text-[15px]';

const dropdownItemClasses =
  'px-4 py-3 hover:bg-theme-card-hover text-theme-text/90 hover:text-theme-text text-sm transition-colors';

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
            <div className="w-48 bg-theme-card-solid border border-theme-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
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
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `inline-flex items-center gap-1 ${isActive ? activeLinkClasses : navLinkClasses}`
            }
          >
            Hablemos
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            />
          </NavLink>
        </li>
      </ul>

      {/* ================= BOTÓN MÓVIL ================= */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMobileMenuOpen}
        className="lg:hidden text-theme-text p-2"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ================= MENÚ MÓVIL ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[var(--header-h,64px)] left-0 right-0 bg-theme-card-solid border-t border-theme-border shadow-2xl flex flex-col py-4 px-6 gap-4 z-40 transition-colors duration-300">
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
              className="flex items-center justify-between text-theme-text/90 text-[15px] font-medium w-full text-left"
            >
              Sobre mí
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="flex flex-col pl-4 gap-3 border-l border-theme-border mt-1">
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

          <div className="pt-4 border-t border-theme-border flex flex-col gap-4">
            <div className="flex justify-center">
              <AvailabilityBadge />
            </div>
            {/* El botón Hablemos ahora usa colores que funcionan en ambos modos */}
            <Link
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group/cta inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400/20 border border-amber-400/60 text-amber-900 dark:text-amber-50 hover:bg-amber-400/40 font-semibold text-[15px] w-full transition-all"
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