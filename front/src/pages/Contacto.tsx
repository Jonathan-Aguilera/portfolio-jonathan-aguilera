import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "Oportunidad Laboral",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos un retraso de red de 1 segundo para hacerlo realista
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        `📬 ¡Simulación de envío exitosa!\n\nEl formulario de contacto funciona correctamente.\n\nDatos recopilados:\n• Nombre: ${formData.nombre}\n• Email: ${formData.email}\n• Motivo: ${formData.asunto}\n• Mensaje: ${formData.mensaje}\n\n(En un entorno real, estos datos se enviarían a tu correo o servicio de mensajería API/MailTo)`
      );

      // Reseteamos el formulario
      setFormData({
        nombre: "",
        email: "",
        asunto: "Oportunidad Laboral",
        mensaje: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna de Información */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hablemos
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Estoy disponible para nuevas oportunidades profesionales, proyectos freelance o
              colaboraciones. Si tenés una propuesta o simplemente querés saludar, ¡completá el formulario!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="text-cyan-400 text-xl">📍</span>
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="text-cyan-400 text-xl">📧</span>
                <span>jonathan.aguilera.dev@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-slate-400 mb-3">También podés encontrarme en:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Jonathan-Aguilera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-700 transition-all text-sm font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com" // Reemplaza o simula con el link real si lo tenés
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-700 transition-all text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="text-slate-400 mb-3">¿Querés ver mi CV?</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  alert("📄 Simulación: Aquí se descargará mi CV en formato PDF.");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 transition-all text-sm font-semibold"
              >
                <span>📥</span> Descargar CV
              </button>
            </div>
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className="bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Juan Pérez"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="juan@ejemplo.com"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-slate-300 mb-2">
                Motivo del Contacto
              </label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
              >
                <option value="Oportunidad Laboral">Oportunidad Laboral (Propuesta)</option>
                <option value="Proyecto Freelance">Proyecto Freelance / Colaboración</option>
                <option value="Consulta Técnica">Consulta Técnica o Duda</option>
                <option value="Feedback">Feedback de Portafolio</option>
                <option value="Otros">Otros Motivos</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
