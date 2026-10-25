export default function Proyectos() {
  return (
    <section id="projects" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
      <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="p-6 rounded-lg bg-slate-900 border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-100">ReducAr</h3>
          <p className="mt-2 text-sm text-slate-400">
            Plataforma educativa que reúne ofertas de estudios gratuitos en IT.
            MVP con pasarela de pagos, chatbot y control de acceso por políticas.
          </p>
        </article>
        <article className="p-6 rounded-lg bg-slate-900 border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-100">CodeCraft</h3>
          <p className="mt-2 text-sm text-slate-400">
            Bolsa IT con curva de aprendizaje adaptativa al usuario. Beta
            lanzada y en evolución continua.
          </p>
        </article>
      </div>
    </section>
  );
}
