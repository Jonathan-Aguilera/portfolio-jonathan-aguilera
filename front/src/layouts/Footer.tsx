export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-abyss-deep border-t border-white/5 text-slate-300 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-slate-100 font-bold text-lg">Jonathan Felipe Aguilera Tapia</h2>
            <p className="text-sm mt-1 text-slate-500">Desarrollador Fullstack</p>
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="https://github.com/Jonathan-Aguilera" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:tu-email@ejemplo.com" className="hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} TSC Project. Todos los derechos reservados.</p>
          <p>Construido con React, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
