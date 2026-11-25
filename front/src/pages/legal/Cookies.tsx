export default function Cookies() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-8 text-[#8BA4C0]">
      <header className="border-b border-[#3B82C4]/30 pb-6">
        <h1 className="text-3xl font-bold text-[#F0F4F8] tracking-tight">Política de Cookies y Almacenamiento Local</h1>
        <p className="text-[#8BA4C0] mt-2 text-sm">
          Última actualización: Noviembre de 2026
        </p>
      </header>

      <div className="space-y-6 leading-relaxed text-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">1. Contexto Legal y Transparencia</h2>
          <p>
            De conformidad con las normativas vigentes y las recomendaciones de protección al consumidor y datos personales (tales como las directrices del SERNAC y la evolución regulatoria regional en materia de privacidad digital, incluyendo la Ley Nº 21.719 en Chile y normativas afines en Argentina), este portafolio busca ofrecer absoluta transparencia sobre las tecnologías de almacenamiento en el navegador.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">2. Uso de Almacenamiento Local (LocalStorage)</h2>
          <p>
            Este sitio web <strong className="text-[#F0F4F8]">no utiliza cookies tradicionales de rastreo publicitario ni analíticas de terceros</strong>.
          </p>
          <p className="bg-[#1E3A5F] border border-[#3B82C4]/40 p-4 rounded-xl text-[#00D4FF] font-medium">
            "Usamos almacenamiento local para recordar tus preferencias de visualización. No utilizamos cookies de rastreo de terceros."
          </p>
          <p>
            Los únicos datos guardados en tu navegador corresponden estrictamente a configuraciones de interfaz elegidas por ti, tales como:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#8BA4C0]">
            <li>Preferencia de tema (modo oscuro / claro).</li>
            <li>Configuración de idioma y opciones de accesibilidad.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">3. Control y Eliminación de Datos Locales</h2>
          <p>
            Puedes borrar o limpiar los datos almacenados localmente en cualquier momento a través de la configuración de privacidad y almacenamiento de tu propio navegador web (Google Chrome, Firefox, Safari, Edge, etc.). Ten en cuenta que al hacerlo, tus preferencias personalizadas de visualización se restablecerán a los valores predeterminados.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#F0F4F8]">4. Contacto</h2>
          <p>
            Si tienes dudas acerca de esta política o del manejo de tus preferencias, puedes comunicarte a través de la sección de <a href="/contacto" className="text-[#00D4FF] underline hover:text-[#3B82C4]">Contacto</a>.
          </p>
        </div>
      </div>
    </section>
  );
}