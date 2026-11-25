export default function DeclaracionAccesibilidad() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-8 text-[#8BA4C0]">
      <header className="border-b border-[#3B82C4]/30 pb-6">
        <h1 className="text-3xl font-bold text-[#F0F4F8] tracking-tight">Declaración de Accesibilidad</h1>
        <p className="text-[#8BA4C0] mt-2 text-sm">
          Última actualización: Noviembre de 2026
        </p>
      </header>

      <div className="space-y-6 leading-relaxed text-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">Compromiso de Accesibilidad</h2>
          <p>
            En este portafolio, me comprometo a garantizar la accesibilidad digital para personas con discapacidad. Estoy mejorando continuamente la experiencia del usuario y aplicando los estándares de accesibilidad pertinentes.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">Estado de Cumplimiento</h2>
          <p>
            Trabajo para alinear esta plataforma con las Pautas de Accesibilidad al Contenido en la Web (WCAG) en su nivel AA, buscando hacer que el contenido sea perceptible, operable, comprensible y robusto.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">Comentarios y Contacto</h2>
          <p>
            Agradezco tus comentarios sobre la accesibilidad de este sitio. Si encuentras barreras de accesibilidad, por favor contáctame a través de la sección de <a href="/contacto" className="text-[#00D4FF] underline hover:text-[#3B82C4]">Contacto</a>.
          </p>
        </div>
      </div>
    </section>
  );
}