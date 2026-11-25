export default function AvisoLegal() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-8 text-[#8BA4C0]">
      <header className="border-b border-[#3B82C4]/30 pb-6">
        <h1 className="text-3xl font-bold text-[#F0F4F8] tracking-tight">Aviso Legal</h1>
        <p className="text-[#8BA4C0] mt-2 text-sm">
          Última actualización: Noviembre de 2026
        </p>
      </header>

      <div className="space-y-6 leading-relaxed text-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">1. Titularidad del Sitio</h2>
          <p>
            Este portafolio es un proyecto personal desarrollado con fines educativos y profesionales. La titularidad del mismo corresponde a Jonathan Felipe Aguilera Tapia.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">2. Uso del Contenido</h2>
          <p>
            El contenido compartido en este sitio (incluyendo textos, imágenes y estructura de código) tiene carácter informativo. Queda prohibida la reproducción, distribución o modificación total o parcial de los materiales sin autorización expresa.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">3. Limitación de Responsabilidad</h2>
          <p>
            El autor no se hace responsable por daños o perjuicios que pudieran derivarse del uso de la información contenida en este sitio web. Se han tomado las medidas necesarias para asegurar la integridad de la plataforma, pero no se garantiza la ausencia de errores técnicos ocasionales.
          </p>
        </div>
      </div>
    </section>
  );
}