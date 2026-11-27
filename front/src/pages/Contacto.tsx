import { useState } from "react";

type ContactoVariant = 'default' | 'ocean';

interface ContactoProps {
  variant?: ContactoVariant;
}

const styles = {
  default: {
    section:      'border-theme-border',
    heading:      'text-theme-text',
    paragraph:    'text-theme-muted',
    icon:         'text-glint',
    socialBtn:    'bg-theme-card backdrop-blur-md hover:bg-theme-card-hover text-glint border border-theme-border',
    cvBtn:        'bg-glint/10 hover:bg-glint/20 text-glint border border-glint/30 hover:border-glint/50',
    formCard:     'bg-theme-card backdrop-blur-md border-theme-border',
    label:        'text-theme-text',
    input:        'bg-theme-bg/60 border-theme-border text-theme-text placeholder-theme-muted',
    submitBtn:    'bg-glint hover:bg-glint/85 text-[#0A1628]',
  },
  ocean: {
    section:      'border-ocean-border',
    heading:      'text-ocean-text',
    paragraph:    'text-ocean-muted',
    icon:         'text-sky-light',
    socialBtn:    'bg-ocean-card backdrop-blur-md hover:bg-ocean-card/80 text-sky-light border border-ocean-border',
    cvBtn:        'bg-glint/15 hover:bg-glint/25 text-sky-light border border-glint/40 hover:border-glint/60',
    formCard:     'bg-ocean-card backdrop-blur-md border-ocean-border',
    label:        'text-ocean-text',
    input:        'bg-abyss-deep/40 border-ocean-border text-ocean-text placeholder-ocean-muted/60',
    submitBtn:    'bg-glint hover:bg-glint/85 text-abyss-deep',
  },
};

export default function Contacto({ variant = 'default' }: ContactoProps) {
  const s = styles[variant];

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        `📬 ¡Simulación de envío exitosa!\n\nEl formulario de contacto funciona correctamente.\n\nDatos recopilados:\n• Nombre: ${formData.nombre}\n• Email: ${formData.email}\n• Motivo: ${formData.asunto}\n• Mensaje: ${formData.mensaje}\n\n(En un entorno real, estos datos se enviarían a tu correo o servicio de mensajería API/MailTo)`
      );
      setFormData({ nombre: "", email: "", asunto: "Oportunidad Laboral", mensaje: "" });
    }, 1000);
  };

  return (
    <section id="contact" className={`px-6 py-16 max-w-5xl mx-auto border-t ${s.section}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna de Información */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${s.heading}`}>Hablemos</h2>
            <p className={`text-lg mb-6 leading-relaxed ${s.paragraph}`}>
              Estoy disponible para nuevas oportunidades profesionales, proyectos freelance o
              colaboraciones. Si tenés una propuesta o simplemente querés saludar, ¡completá el formulario!
            </p>

            <div className="space-y-4">
              <div className={`flex items-center gap-3 ${s.paragraph}`}>
                <span className={`text-xl ${s.icon}`}>📍</span>
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className={`flex items-center gap-3 ${s.paragraph}`}>
                <span className={`text-xl ${s.icon}`}>📧</span>
                <span>jonathan.aguilera.dev@gmail.com</span>
              </div>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t ${s.section} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6`}>
            <div>
              <p className={`mb-3 ${s.paragraph}`}>También podés encontrarme en:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Jonathan-Aguilera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${s.socialBtn}`}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${s.socialBtn}`}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className={`mb-3 ${s.paragraph}`}>¿Querés ver mi CV?</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  alert("📄 Simulación: Aquí se descargará mi CV en formato PDF.");
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-semibold ${s.cvBtn}`}
              >
                <span>📥</span> Descargar CV
              </button>
            </div>
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className={`p-6 md:p-8 rounded-2xl border ${s.formCard}`}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className={`block text-sm font-medium mb-2 ${s.label}`}>
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
                className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:border-glint focus:ring-1 focus:ring-glint transition-all ${s.input}`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${s.label}`}>
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
                className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:border-glint focus:ring-1 focus:ring-glint transition-all ${s.input}`}
              />
            </div>

            <div>
              <label htmlFor="asunto" className={`block text-sm font-medium mb-2 ${s.label}`}>
                Motivo del Contacto
              </label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:border-glint focus:ring-1 focus:ring-glint transition-all cursor-pointer ${s.input}`}
              >
                <option value="Oportunidad Laboral">Oportunidad Laboral (Propuesta)</option>
                <option value="Proyecto Freelance">Proyecto Freelance / Colaboración</option>
                <option value="Consulta Técnica">Consulta Técnica o Duda</option>
                <option value="Feedback">Feedback de Portafolio</option>
                <option value="Otros">Otros Motivos</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className={`block text-sm font-medium mb-2 ${s.label}`}>
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
                className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:border-glint focus:ring-1 focus:ring-glint transition-all resize-none ${s.input}`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-glint focus:ring-offset-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              } ${s.submitBtn}`}
            >
              {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}