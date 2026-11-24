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
      <div className="absolute -left-[30px] md:-left-[34px] top-6 w-3.5 h-3.5 rounded-full bg-[#0A1628] border-2 border-[#00D4FF] z-10 group-hover:scale-125 group-hover:bg-[#00D4FF] transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.45)]" />

      {/* Contenido de la tarjeta */}
      <div className="bg-[#1E3A5F] border border-[#3B82C4]/40 rounded-2xl p-6 sm:p-8 hover:border-[#3B82C4] transition-all duration-300 shadow-lg shadow-black/20 flex flex-col gap-6">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F0F4F8] group-hover:text-[#00D4FF] transition-colors">
                {experience.role}
              </h3>
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-md bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/25">
                {experience.type}
              </span>
            </div>
            
            <p className="text-lg text-[#8BA4C0] font-medium">
              {experience.company}
            </p>
          </div>

          {/* Metadatos (Fecha y Ubicación) */}
          <div className="flex flex-col md:items-end gap-1.5 shrink-0 text-xs text-[#8BA4C0] font-medium">
            <span className="flex items-center gap-1.5 bg-[#0A1628]/50 px-2.5 py-1 rounded-md border border-[#3B82C4]/30">
              <Calendar className="w-3.5 h-3.5 text-[#00D4FF]/80" />
              {experience.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00D4FF]/80" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Descripción y Logros */}
        <div className="space-y-5">
          <p className="text-[#8BA4C0] leading-relaxed text-sm sm:text-base border-l-2 border-[#3B82C4]/40 pl-4">
            {experience.description}
          </p>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="bg-[#0A1628]/50 rounded-xl p-4 sm:p-5 border border-[#3B82C4]/30">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#00D4FF] mb-3">
                Impacto y Responsabilidades
              </h4>
              <ul className="grid gap-3">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-sm text-[#8BA4C0]">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tecnologías */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="pt-4 border-t border-[#3B82C4]/30 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-3 py-1 bg-[#0A1628]/50 text-[#F0F4F8] rounded-lg border border-[#3B82C4]/30 group-hover:border-[#00D4FF]/50 transition-colors"
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