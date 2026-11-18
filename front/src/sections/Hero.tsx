import profileImage from '../assets/profile.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-var(--header-h,64px))] flex items-center px-6 py-12"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Foto — izquierda, sobre el cielo, sin tapar el sol */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Jonathan Felipe Aguilera Tapia"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          />
        </div>

        {/* Texto — tarjeta de cristal oscuro para legibilidad sobre el atardecer */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-10 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Jonathan Felipe Aguilera Tapia
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            Desarrollador Fullstack con especialización en Backend y Bases de Datos.
            Construyo aplicaciones web completas con React, Angular, TypeScript,
            Node.js y PostgreSQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/proyectos"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white font-medium transition-colors"
            >
              Ver proyectos
            </a>
            <a
              href="/contacto"
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 rounded-lg text-white font-medium transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}