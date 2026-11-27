import { useState } from 'react';

export default function Accesibilidad() {
  const [reducirMovimiento, setReducirMovimiento] = useState(false);
  const [altoContraste, setAltoContraste] = useState(false);
  const [tamanoFuente, setTamanoFuente] = useState('mediano');
  const [espaciadoTexto, setEspaciadoTexto] = useState(false);
  const [subrayadoEnlaces, setSubrayadoEnlaces] = useState(false);
  const [resaltadoEnlaces, setResaltadoEnlaces] = useState(false);
  const [cursorGrande, setCursorGrande] = useState(false);
  const [guiaLectura, setGuiaLectura] = useState(false);
  const [modoOscuroForzado, setModoOscuroForzado] = useState(true);

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <header className="border-b border-theme-border pb-6">
        <h1 className="text-3xl font-bold text-theme-text tracking-tight">Accesibilidad</h1>
        <p className="text-theme-muted mt-2 text-sm">
          Ajusta las opciones de accesibilidad y visualización para mejorar tu experiencia de lectura y navegación. (Simulación)
        </p>
      </header>

      <div className="space-y-8">
        {/* Reducir Movimiento */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Reducir Movimiento</h2>
            <p className="text-theme-muted text-sm">Desactiva o minimiza las animaciones y transiciones de la interfaz.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={reducirMovimiento}
              onChange={(e) => setReducirMovimiento(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Alto Contraste */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Alto Contraste</h2>
            <p className="text-theme-muted text-sm">Aumenta el contraste de los colores para una mejor legibilidad.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={altoContraste}
              onChange={(e) => setAltoContraste(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Tamaño de Fuente */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border space-y-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Tamaño de Fuente</h2>
            <p className="text-theme-muted text-sm">Modifica el tamaño general del texto en todo el contenido.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['pequeño', 'mediano', 'grande'].map((tam) => (
              <button
                key={tam}
                type="button"
                onClick={() => setTamanoFuente(tam)}
                className={`py-2 px-4 rounded-lg text-sm font-medium capitalize transition-all border ${
                  tamanoFuente === tam
                    ? 'bg-glint/10 border-glint text-glint'
                    : 'bg-theme-bg/60 border-theme-border text-theme-muted hover:text-theme-text'
                }`}
              >
                {tam}
              </button>
            ))}
          </div>
        </div>

        {/* Espaciado de Texto */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Espaciado de Texto (Dislexia)</h2>
            <p className="text-theme-muted text-sm">Incrementa el espacio entre líneas y letras para facilitar la lectura.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={espaciadoTexto}
              onChange={(e) => setEspaciadoTexto(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Subrayado de Enlaces */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Subrayado de Enlaces</h2>
            <p className="text-theme-muted text-sm">Mantiene todos los hipervínculos permanentemente subrayados.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={subrayadoEnlaces}
              onChange={(e) => setSubrayadoEnlaces(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Resaltado de Enlaces */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Resaltado de Enlaces</h2>
            <p className="text-theme-muted text-sm">Resalta visualmente los enlaces para identificarlos con mayor facilidad.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={resaltadoEnlaces}
              onChange={(e) => setResaltadoEnlaces(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Cursor Grande */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Cursor Grande</h2>
            <p className="text-theme-muted text-sm">Aumenta el tamaño del cursor para que sea más fácil localizarlo.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={cursorGrande}
              onChange={(e) => setCursorGrande(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Guía de Lectura */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Guía de Lectura</h2>
            <p className="text-theme-muted text-sm">Muestra una guía visual para ayudarte a seguir el texto mientras lees.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={guiaLectura}
              onChange={(e) => setGuiaLectura(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>

        {/* Modo Oscuro Forzado */}
        <div className="bg-theme-card backdrop-blur-md p-6 rounded-2xl border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-theme-text font-semibold text-lg">Modo Oscuro Forzado</h2>
            <p className="text-theme-muted text-sm">Mantiene la paleta de colores oscuros sin importar el sistema operativo.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={modoOscuroForzado}
              onChange={(e) => setModoOscuroForzado(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-theme-bg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glint"></div>
          </label>
        </div>
      </div>
    </section>
  );
}