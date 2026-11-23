import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Configuracion() {
  const [idioma, setIdioma] = useState('es');
  const [ahorroBateria, setAhorroBateria] = useState(false);
  const [sensibilidad, setSensibilidad] = useState('medio');
  const [notificaciones, setNotificaciones] = useState(true);

  // Modal de Cookies
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    necesarias: true,
    analiticas: true,
    marketing: false,
  });

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">Configuración</h1>
        <p className="text-slate-400 mt-2 text-sm">
          Personaliza las preferencias generales de la aplicación y tu experiencia de navegación. (Simulación)
        </p>
      </header>

      <div className="space-y-8">
        {/* Sección: Idioma */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Idioma</h2>
            <p className="text-slate-400 text-sm">Selecciona el idioma de la interfaz del portafolio.</p>
          </div>
          <select
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-all cursor-pointer"
          >
            <option value="es">Español (ES)</option>
            <option value="en">English (EN)</option>
          </select>
        </div>

        {/* Sección: Cookies */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Privacidad y Cookies</h2>
            <p className="text-slate-400 text-sm">Gestiona tus preferencias de rastreo y almacenamiento local.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsCookieModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-all border border-slate-700"
          >
            Gestionar Preferencias
          </button>
        </div>

        {/* Sección: Ahorro de batería */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Ahorro de Batería</h2>
            <p className="text-slate-400 text-sm">Reduce animaciones pesadas y efectos visuales complejos.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={ahorroBateria}
              onChange={(e) => setAhorroBateria(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Sensibilidad / Interactividad */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm space-y-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Sensibilidad de Interacción</h2>
            <p className="text-slate-400 text-sm">Ajusta la velocidad de respuesta de las transiciones y efectos.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['bajo', 'medio', 'alto'].map((nivel) => (
              <button
                key={nivel}
                type="button"
                onClick={() => setSensibilidad(nivel)}
                className={`py-2 px-4 rounded-lg text-sm font-medium capitalize transition-all border ${
                  sensibilidad === nivel
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {nivel}
              </button>
            ))}
          </div>
        </div>

        {/* Sección: Notificaciones */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Notificaciones del Sistema</h2>
            <p className="text-slate-400 text-sm">Recibe alertas sobre actualizaciones y nuevos posts del portafolio.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificaciones}
              onChange={(e) => setNotificaciones(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Acerca de */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Acerca de la plataforma</h2>
            <p className="text-slate-400 text-sm">Conoce más sobre este portafolio o ponte en contacto.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/sobre-mi"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all border border-slate-700"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/contacto"
              className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm font-medium transition-all border border-cyan-500/30"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de Cookies simulado */}
      {isCookieModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white">Preferencias de Cookies</h3>
              <p className="text-slate-400 text-sm mt-1">
                Selecciona qué tipos de cookies deseas permitir durante tu visita.
              </p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <input
                  type="checkbox"
                  checked={cookiePrefs.necesarias}
                  disabled
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500 cursor-not-allowed"
                />
                <div>
                  <span className="text-white text-sm font-medium block">Cookies Necesarias (Obligatorias)</span>
                  <span className="text-slate-500 text-xs">Esenciales para el funcionamiento básico de la web.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 hover:border-slate-700 transition-all">
                <input
                  type="checkbox"
                  checked={cookiePrefs.analiticas}
                  onChange={(e) => setCookiePrefs({ ...cookiePrefs, analiticas: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <span className="text-white text-sm font-medium block">Cookies Analíticas</span>
                  <span className="text-slate-500 text-xs">Nos ayudan a entender cómo interactúan los usuarios.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 hover:border-slate-700 transition-all">
                <input
                  type="checkbox"
                  checked={cookiePrefs.marketing}
                  onChange={(e) => setCookiePrefs({ ...cookiePrefs, marketing: e.target.checked })}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <span className="text-white text-sm font-medium block">Cookies de Marketing</span>
                  <span className="text-slate-500 text-xs">Utilizadas para ofrecer contenido y publicidad relevante.</span>
                </div>
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsCookieModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-all"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsCookieModalOpen(false);
                  alert("¡Preferencias de cookies guardadas exitosamente!");
                }}
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold transition-all"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
