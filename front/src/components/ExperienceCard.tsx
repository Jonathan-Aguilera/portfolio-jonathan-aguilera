import type { Experience } from '../types';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export default function ExperienceCard({ experience, className = '' }: ExperienceCardProps) {
  return (
    <article className={`relative group ${className}`}>

      {/* Nodo (Punto) en la línea de tiempo */}
      <div className="absolute -left-[30px] md:-left-[34px] top-6 w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-glint z-10 group-hover:scale-125 group-hover:bg-glint transition-all duration-300 shadow-[0_0_10px_rgba(59,152,255,0.45)]" />

      {/* Contenido de la tarjeta */}
      <div className="bg-theme-card backdrop-blur-md border border-theme-border rounded-2xl p-6 sm:p-8 hover:border-glint/50 transition-all duration-300 shadow-lg shadow-black/10 flex flex-col gap-6">

        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-theme-text group-hover:text-glint transition-colors">
                {experience.role}
              </h3>
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-md bg-glint/10 text-glint border border-glint/25">
                {experience.type}
              </span>
            </div>

            <p className="text-lg text-theme-muted font-medium">
              {experience.company}
            </p>
          </div>

          {/* Metadatos (Fecha y Ubicación) */}
          <div className="flex flex-col md:items-end gap-1.5 shrink-0 text-xs text-theme-muted font-medium">
            <span className="flex items-center gap-1.5 bg-theme-bg/50 px-2.5 py-1 rounded-md border border-theme-border">
              <Calendar className="w-3.5 h-3.5 text-glint/80" />
              {experience.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-glint/80" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Descripción y Logros */}
        <div className="space-y-5">
          <p className="text-theme-muted leading-relaxed text-sm sm:text-base border-l-2 border-glint/40 pl-4">
            {experience.description}
          </p>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="bg-theme-bg/50 rounded-xl p-4 sm:p-5 border border-theme-border">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-glint mb-3">
                Impacto y Responsabilidades
              </h4>
              <ul className="grid gap-3">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-sm text-theme-muted">
                    <CheckCircle2 className="w-4 h-4 text-glint shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tecnologías */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="pt-4 border-t border-theme-border flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-3 py-1 bg-theme-bg/50 text-theme-text rounded-lg border border-theme-border group-hover:border-glint/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

      </div>
    </article>
  );
}