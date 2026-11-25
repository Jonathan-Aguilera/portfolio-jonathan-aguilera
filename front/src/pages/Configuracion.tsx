import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Configuracion() {
  const [idioma, setIdioma] = useState('es');
  const [ahorroBateria, setAhorroBateria] = useState(false);
  const [sensibilidad, setSensibilidad] = useState('medio');
  const [notificaciones, setNotificaciones] = useState(true);

  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    necesarias: true,
    analiticas: true,
    marketing: false,
  });

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <header className="border-b border-[#3B82C4]/30 pb-6">
        <h1 className="text-3xl font-bold text-[#F0F4F8] tracking-tight">Configuración</h1>
        <p className="text-[#8BA4C0] mt-2 text-sm">
          Personaliza las preferencias generales de la aplicación y tu experiencia de navegación. (Simulación)
        </p>
      </header>

      <div className="space-y-8">
        {/* Idioma */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Idioma</h2>
            <p className="text-[#8BA4C0] text-sm">Selecciona el idioma de la interfaz del portafolio.</p>
          </div>
          <select
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#0A1628]/60 border border-[#3B82C4]/40 text-[#F0F4F8] text-sm focus:outline-none focus:border-[#00D4FF] transition-all cursor-pointer"
          >
            <option value="es">Español (ES)</option>
            <option value="en">English (EN)</option>
          </select>
        </div>

        {/* Cookies */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Privacidad y Cookies</h2>
            <p className="text-[#8BA4C0] text-sm">Gestiona tus preferencias de rastreo y almacenamiento local.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsCookieModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-[#0A1628]/50 hover:bg-[#3B82C4]/30 text-[#00D4FF] font-medium text-sm transition-all border border-[#3B82C4]/40"
          >
            Gestionar Preferencias
          </button>
        </div>

        {/* Ahorro de batería */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Ahorro de Batería</h2>
            <p className="text-[#8BA4C0] text-sm">Reduce animaciones pesadas y efectos visuales complejos.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={ahorroBateria}
              onChange={(e) => setAhorroBateria(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Sensibilidad */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 space-y-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Sensibilidad de Interacción</h2>
            <p className="text-[#8BA4C0] text-sm">Ajusta la velocidad de respuesta de las transiciones y efectos.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['bajo', 'medio', 'alto'].map((nivel) => (
              <button
                key={nivel}
                type="button"
                onClick={() => setSensibilidad(nivel)}
                className={`py-2 px-4 rounded-lg text-sm font-medium capitalize transition-all border ${
                  sensibilidad === nivel
                    ? 'bg-[#00D4FF]/10 border-[#00D4FF] text-[#00D4FF]'
                    : 'bg-[#0A1628]/60 border-[#3B82C4]/40 text-[#8BA4C0] hover:text-[#F0F4F8]'
                }`}
              >
                {nivel}
              </button>
            ))}
          </div>
        </div>

        {/* Notificaciones */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Notificaciones del Sistema</h2>
            <p className="text-[#8BA4C0] text-sm">Recibe alertas sobre actualizaciones y nuevos posts del portafolio.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificaciones}
              onChange={(e) => setNotificaciones(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Acerca de */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Acerca de la plataforma</h2>
            <p className="text-[#8BA4C0] text-sm">Conoce más sobre este portafolio o ponte en contacto.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/sobre-mi"
              className="px-4 py-2 rounded-lg bg-[#0A1628]/50 hover:bg-[#3B82C4]/30 text-[#F0F4F8] text-sm font-medium transition-all border border-[#3B82C4]/40"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/contacto"
              className="px-4 py-2 rounded-lg bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-medium transition-all border border-[#00D4FF]/30"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de Cookies */}
      {isCookieModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1628]/80 backdrop-blur-sm p-4">
          <div className="bg-[#1E3A5F] border border-[#3B82C4]/50 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-[#F0F4F8]">Preferencias de Cookies</h3>
              <p className="text-[#8BA4C0] text-sm mt-1">
                Selecciona qué tipos de cookies deseas permitir durante tu visita.
              </p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg bg-[#0A1628]/40 border border-[#3B82C4]/30">
                <input
                  type="checkbox"
                  checked={cookiePrefs.necesarias}
                  disabled
                  className="mt-1 rounded border-[#3B82C4] text-[#00D4FF] focus:ring-[#00D4FF] cursor-not-allowed"
                />
                <div>
                  <span className="text-[#F0F4F8] text-sm font-medium block">Cookies Necesarias (Obligatorias)</span>
                  <span className="text-[#8BA4C0] text-xs">Esenciales para el funcionamiento básico de la web.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg bg-[#0A1628]/40 border border-[#3B82C4]/30 hover:border-[#3B82C4] transition-all">
                <input
                  type="checkbox"
                  checked={cookiePrefs.analiticas}
                  onChange={(e) => setCookiePrefs({ ...cookiePrefs, analiticas: e.target.checked })}
                  className="mt-1 rounded border-[#3B82C4] text-[#00D4FF] focus:ring-[#00D4FF]"
                />
                <div>
                  <span className="text-[#F0F4F8] text-sm font-medium block">Cookies Analíticas</span>
                  <span className="text-[#8BA4C0] text-xs">Nos ayudan a entender cómo interactúan los usuarios.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg bg-[#0A1628]/40 border border-[#3B82C4]/30 hover:border-[#3B82C4] transition-all">
                <input
                  type="checkbox"
                  checked={cookiePrefs.marketing}
                  onChange={(e) => setCookiePrefs({ ...cookiePrefs, marketing: e.target.checked })}
                  className="mt-1 rounded border-[#3B82C4] text-[#00D4FF] focus:ring-[#00D4FF]"
                />
                <div>
                  <span className="text-[#F0F4F8] text-sm font-medium block">Cookies de Marketing</span>
                  <span className="text-[#8BA4C0] text-xs">Utilizadas para ofrecer contenido y publicidad relevante.</span>
                </div>
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsCookieModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#0A1628]/50 hover:bg-[#3B82C4]/30 text-[#8BA4C0] text-sm font-medium transition-all"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsCookieModalOpen(false);
                  alert("¡Preferencias de cookies guardadas exitosamente!");
                }}
                className="px-4 py-2 rounded-lg bg-[#00D4FF] hover:bg-[#3B82C4] text-[#0A1628] text-sm font-semibold transition-all"
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