export default function Privacidad() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-8 text-slate-300">
      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">Política de Privacidad</h1>
        <p className="text-slate-400 mt-2 text-sm">
          Última actualización: Noviembre de 2026
        </p>
      </header>

      <div className="space-y-6 leading-relaxed text-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Información General y Marco Legal</h2>
          <p>
            En cumplimiento con la normativa aplicable de protección de datos personales (incluyendo la Ley chilena Nº 19.628 sobre protección de la vida privada y la Ley argentina Nº 25.326 de protección de datos personales), este portafolio informa de manera transparente sobre el manejo de la información proporcionada por los usuarios.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Datos Recopilados a través del Formulario de Contacto</h2>
          <p>
            Cuando utilizas el formulario de contacto de este sitio web para enviarme un mensaje, recopilo datos personales básicos tales como:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Motivo de consulta y mensaje</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Uso de los Datos</h2>
          <p className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl text-cyan-300 font-medium">
            "Tus datos solo se usarán para responderte y no se compartirán con terceros bajo ninguna circunstancia."
          </p>
          <p>
            La información recopilada se utiliza exclusivamente de manera interna para gestionar la comunicación derivada de tus consultas, propuestas laborales o proyectos freelance. No comercializo ni cedo bases de datos a entidades externas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Almacenamiento Local y Preferencias</h2>
          <p>
            Este sitio utiliza almacenamiento local (<code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded">localStorage</code>) exclusivamente para recordar tus preferencias de visualización (como el modo oscuro/claro y el idioma). No utilizamos cookies de rastreo invasivas de terceros. Puedes consultar más detalles en la sección de <a href="/cookies" className="text-cyan-400 underline hover:text-cyan-300">Política de Cookies</a>.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">5. Tus Derechos</h2>
          <p>
            Como titular de tus datos, tienes derecho a solicitar el acceso, rectificación, actualización o eliminación de la información proporcionada en cualquier momento, enviando un mensaje directo a través de los canales de contacto del portafolio.
          </p>
        </div>
      </div>
    </section>
  );
}
