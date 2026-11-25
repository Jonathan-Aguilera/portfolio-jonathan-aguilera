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
      <header className="border-b border-[#3B82C4]/30 pb-6">
        <h1 className="text-3xl font-bold text-[#F0F4F8] tracking-tight">Accesibilidad</h1>
        <p className="text-[#8BA4C0] mt-2 text-sm">
          Ajusta las opciones de accesibilidad y visualización para mejorar tu experiencia de lectura y navegación. (Simulación)
        </p>
      </header>

      <div className="space-y-8">
        {/* Reducir Movimiento */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Reducir Movimiento</h2>
            <p className="text-[#8BA4C0] text-sm">Desactiva o minimiza las animaciones y transiciones de la interfaz.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={reducirMovimiento}
              onChange={(e) => setReducirMovimiento(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Alto Contraste */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Alto Contraste</h2>
            <p className="text-[#8BA4C0] text-sm">Aumenta el contraste de los colores para una mejor legibilidad.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={altoContraste}
              onChange={(e) => setAltoContraste(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Tamaño de Fuente */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 space-y-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Tamaño de Fuente</h2>
            <p className="text-[#8BA4C0] text-sm">Modifica el tamaño general del texto en todo el contenido.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['pequeño', 'mediano', 'grande'].map((tam) => (
              <button
                key={tam}
                type="button"
                onClick={() => setTamanoFuente(tam)}
                className={`py-2 px-4 rounded-lg text-sm font-medium capitalize transition-all border ${
                  tamanoFuente === tam
                    ? 'bg-[#00D4FF]/10 border-[#00D4FF] text-[#00D4FF]'
                    : 'bg-[#0A1628]/60 border-[#3B82C4]/40 text-[#8BA4C0] hover:text-[#F0F4F8]'
                }`}
              >
                {tam}
              </button>
            ))}
          </div>
        </div>

        {/* Espaciado de Texto */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Espaciado de Texto (Dislexia)</h2>
            <p className="text-[#8BA4C0] text-sm">Incrementa el espacio entre líneas y letras para facilitar la lectura.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={espaciadoTexto}
              onChange={(e) => setEspaciadoTexto(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Subrayado de Enlaces */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Subrayado de Enlaces</h2>
            <p className="text-[#8BA4C0] text-sm">Mantiene todos los hipervínculos permanentemente subrayados.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={subrayadoEnlaces}
              onChange={(e) => setSubrayadoEnlaces(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Resaltado de Enlaces */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Resaltado de Enlaces</h2>
            <p className="text-[#8BA4C0] text-sm">Resalta visualmente los enlaces para identificarlos con mayor facilidad.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={resaltadoEnlaces}
              onChange={(e) => setResaltadoEnlaces(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Cursor Grande */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Cursor Grande</h2>
            <p className="text-[#8BA4C0] text-sm">Aumenta el tamaño del cursor para que sea más fácil localizarlo.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={cursorGrande}
              onChange={(e) => setCursorGrande(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Guía de Lectura */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Guía de Lectura</h2>
            <p className="text-[#8BA4C0] text-sm">Muestra una guía visual para ayudarte a seguir el texto mientras lees.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={guiaLectura}
              onChange={(e) => setGuiaLectura(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>

        {/* Modo Oscuro Forzado */}
        <div className="bg-[#1E3A5F] p-6 rounded-2xl border border-[#3B82C4]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[#F0F4F8] font-semibold text-lg">Modo Oscuro Forzado</h2>
            <p className="text-[#8BA4C0] text-sm">Mantiene la paleta de colores oscuros sin importar el sistema operativo.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={modoOscuroForzado}
              onChange={(e) => setModoOscuroForzado(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#0A1628] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D4FF]"></div>
          </label>
        </div>
      </div>
    </section>
  );
}