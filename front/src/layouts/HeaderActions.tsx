import { useEffect, useRef, useState } from 'react';
import { Settings, Accessibility } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type IconProps = { className?: string };

function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function SunIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export default function HeaderActions() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchOpen) return;
    function onClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  return (
    <div className="flex items-center gap-4 sm:border-l sm:border-white/20 sm:pl-6">
      <div ref={searchRef} className="flex items-center">
        <button
          type="button"
          aria-label={searchOpen ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
          aria-expanded={searchOpen}
          aria-controls="header-search"
          onClick={() => setSearchOpen((open) => !open)}
          className="p-2 rounded-md text-white/90 hover:text-glint hover:bg-white/10 transition-colors"
        >
          <SearchIcon className="h-5 w-5" />
        </button>

        <input
          id="header-search"
          ref={inputRef}
          type="search"
          placeholder="Buscar…"
          tabIndex={searchOpen ? 0 : -1}
          className={`bg-white/10 text-sm rounded-md outline-none focus:ring-2 focus:ring-glint transition-all duration-300 ${
            searchOpen
              ? 'w-40 ml-2 px-3 py-1.5 opacity-100'
              : 'w-0 ml-0 px-0 py-1.5 opacity-0 pointer-events-none'
          }`}
        />
      </div>

      <button
        type="button"
        aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        onClick={() => setDarkMode((on) => !on)}
        className="p-2 rounded-md text-white/90 hover:text-glint hover:bg-white/10 transition-colors"
      >
        {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </button>

      <button
        type="button"
        aria-label="Configuración"
        onClick={() => navigate('/configuracion')}
        className="p-2 rounded-md text-white/90 hover:text-glint hover:bg-white/10 transition-colors"
      >
        <Settings className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Accesibilidad"
        onClick={() => navigate('/accesibilidad')}
        className="p-2 rounded-md text-white/90 hover:text-glint hover:bg-white/10 transition-colors"
      >
        <Accessibility className="h-5 w-5" />
      </button>
    </div>
  );
}