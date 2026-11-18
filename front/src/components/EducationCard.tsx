import type { Certificate } from '../data/education';

interface EducationCardProps {
  education: Certificate;
  className?: string;
}

export default function EducationCard({ education, className = '' }: EducationCardProps) {
  // Configuración visual basada en el nivel de importancia (1: Título, 2: IT, 3: Otros)
  const getLevelConfig = (level: Certificate['level']) => {
    switch (level) {
      case 1:
        return 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20';
      case 2:
        return 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300';
      default:
        return 'border-slate-700 bg-slate-800/20 text-slate-400';
    }
  };

  return (
    <article
      className={`group relative flex flex-col h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      {/* Header: Categoría y Año */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border transition-colors ${getLevelConfig(education.level)}`}>
          {education.category}
        </span>
        <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-400 transition-colors">
          {education.year}
        </span>
      </div>

      {/* Body: Título e Institución */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
          {education.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          <svg className="w-4 h-4 text-cyan-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-medium">{education.issuer}</span>
        </div>
      </div>

      {/* Footer: Acciones y Metadatos */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        {education.credentialUrl ? (
          <a
            href={education.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-all hover:gap-2 tracking-widest"
          >
            VERIFICAR
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            Certificado
          </div>
        )}

        {/* Nivel de prioridad visual (opcional/sutil) */}
        <div className="flex gap-1">
          {[1, 2, 3].map((lvl) => (
            <div
              key={lvl}
              className={`w-1 h-1 rounded-full ${lvl <= (4 - education.level) ? 'bg-cyan-500/40' : 'bg-slate-800'}`}
            />
          ))}
        </div>
      </div>

      {/* Efecto de brillo en el hover */}
      <div className="absolute inset-0 pointer-events-none border border-cyan-500/0 group-hover:border-cyan-500/10 rounded-2xl transition-all duration-500" />
    </article>
  );
}
