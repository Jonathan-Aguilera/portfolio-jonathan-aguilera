export default function Habilidades() {
  return (
    <section id="skills" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
      <h2 className="text-2xl font-semibold mb-6">Habilidades técnicas</h2>
      <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
        <p><strong className="text-slate-100">Backend:</strong> Node.js · Express · APIs REST</p>
        <p><strong className="text-slate-100">Bases de datos:</strong> PostgreSQL · Supabase · Firebase</p>
        <p><strong className="text-slate-100">Frontend:</strong> React · Angular · TypeScript · Tailwind CSS</p>
        <p><strong className="text-slate-100">Herramientas:</strong> Git · GitHub · Vite · ESLint</p>
      </div>
    </section>
  );
}
