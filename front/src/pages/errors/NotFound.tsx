export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-sm uppercase tracking-widest text-cyan-400 font-bold mb-4">
          Error 404
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Página no encontrada
        </h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe o ha sido movida a otra dirección.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
          >
            Volver al inicio
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3 border border-slate-800 text-base font-medium rounded-md text-slate-300 bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Reportar problema
          </a>
        </div>
      </div>
    </main>
  );
}
