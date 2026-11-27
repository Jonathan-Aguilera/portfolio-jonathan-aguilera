export default function DeclaracionAccesibilidad() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-8 text-theme-muted">
      <header className="border-b border-theme-border pb-6">
        <h1 className="text-3xl font-bold text-theme-text tracking-tight">Declaración de Accesibilidad</h1>
        <p className="text-theme-muted mt-2 text-sm">
          Última actualización: Noviembre de 2026
        </p>
      </header>

      <div className="space-y-6 leading-relaxed text-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-theme-text">Compromiso de Accesibilidad</h2>
          <p>
            En este portafolio, me comprometo a garantizar la accesibilidad digital para personas con discapacidad. Estoy mejorando continuamente la experiencia del usuario y aplicando los estándares de accesibilidad pertinentes.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-theme-text">Estado de Cumplimiento</h2>
          <p>
            Trabajo para alinear esta plataforma con las Pautas de Accesibilidad al Contenido en la Web (WCAG) en su nivel AA, buscando hacer que el contenido sea perceptible, operable, comprensible y robusto.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-theme-text">Comentarios y Contacto</h2>
          <p>
            Agradezco tus comentarios sobre la accesibilidad de este sitio. Si encuentras barreras de accesibilidad, por favor contáctame a través de la sección de <a href="/contacto" className="text-glint underline hover:text-theme-text transition-colors">Contacto</a>.
          </p>
        </div>
      </div>
    </section>
  );
}