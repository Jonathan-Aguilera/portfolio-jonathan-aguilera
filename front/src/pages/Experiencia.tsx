export default function Experiencia() {
  return (
    <section id="experience" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
      <h2 className="text-2xl font-semibold mb-6">Experiencia</h2>
      <div className="space-y-8">
        <article className="border-l-2 border-slate-800 pl-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Coordinador Técnico</h3>
              <p className="text-sm text-cyan-400">ReducAr</p>
            </div>
            <p className="text-sm text-slate-400 font-medium">2023 - Presente</p>
          </div>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Coordinación de un equipo de 10 personas en el desarrollo de la plataforma educativa.
            Liderazgo en el diseño y despliegue del MVP, implementación de pasarela de pagos,
            chatbot y establecimiento de políticas de acceso y roles de usuario.
          </p>
        </article>
      </div>
    </section>
  );
}
