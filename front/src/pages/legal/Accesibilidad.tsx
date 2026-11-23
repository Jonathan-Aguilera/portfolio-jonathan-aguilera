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
      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">Accesibilidad</h1>
        <p className="text-slate-400 mt-2 text-sm">
          Ajusta las opciones de accesibilidad y visualización para mejorar tu experiencia de lectura y navegación. (Simulación)
        </p>
      </header>

      <div className="space-y-8">
        {/* Sección: Reducir Movimiento */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Reducir Movimiento</h2>
            <p className="text-slate-400 text-sm">Desactiva o minimiza las animaciones y transiciones de la interfaz.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={reducirMovimiento}
              onChange={(e) => setReducirMovimiento(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Alto Contraste */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Alto Contraste</h2>
            <p className="text-slate-400 text-sm">Aumenta el contraste de los colores para una mejor legibilidad.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={altoContraste}
              onChange={(e) => setAltoContraste(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Tamaño de Fuente */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm space-y-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Tamaño de Fuente</h2>
            <p className="text-slate-400 text-sm">Modifica el tamaño general del texto en todo el contenido.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['pequeño', 'mediano', 'grande'].map((tam) => (
              <button
                key={tam}
                type="button"
                onClick={() => setTamanoFuente(tam)}
                className={`py-2 px-4 rounded-lg text-sm font-medium capitalize transition-all border ${
                  tamanoFuente === tam
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tam}
              </button>
            ))}
          </div>
        </div>

        {/* Sección: Espaciado de Texto */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Espaciado de Texto (Dislexia)</h2>
            <p className="text-slate-400 text-sm">Incrementa el espacio entre líneas y letras para facilitar la lectura.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={espaciadoTexto}
              onChange={(e) => setEspaciadoTexto(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Subrayado de Enlaces */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Subrayado de Enlaces</h2>
            <p className="text-slate-400 text-sm">Mantiene todos los hipervínculos permanentemente subrayados.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={subrayadoEnlaces}
              onChange={(e) => setSubrayadoEnlaces(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Resaltado de Enlaces */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Resaltado de Enlaces</h2>
            <p className="text-slate-400 text-sm">Resalta visualmente los enlaces para identificarlos con mayor facilidad.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={resaltadoEnlaces}
              onChange={(e) => setResaltadoEnlaces(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Cursor Grande */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Cursor Grande</h2>
            <p className="text-slate-400 text-sm">Aumenta el tamaño del cursor para que sea más fácil localizarlo.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={cursorGrande}
              onChange={(e) => setCursorGrande(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Guía de Lectura */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Guía de Lectura</h2>
            <p className="text-slate-400 text-sm">Muestra una guía visual para ayudarte a seguir el texto mientras lees.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={guiaLectura}
              onChange={(e) => setGuiaLectura(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {/* Sección: Modo Oscuro Forzado */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-white font-semibold text-lg">Modo Oscuro Forzado</h2>
            <p className="text-slate-400 text-sm">Mantiene la paleta de colores oscuros sin importar el sistema operativo.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={modoOscuroForzado}
              onChange={(e) => setModoOscuroForzado(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>
      </div>
    </section>
  );
}

