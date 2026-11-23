import { useState } from 'react';
import type { Certificate, CertificateLevel } from '../types';
import { ExternalLink, Eye, Award } from 'lucide-react';

interface EducationCardProps {
  education: Certificate;
  onViewImage: () => void;
  className?: string;
}

const categoryColors: Record<string, string> = {
  'Título Técnico': 'bg-glint/20 text-glint border-glint/40',
  'Base de Datos': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Frontend': 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  'Arquitectura de Software': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'Herramientas': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  'Inteligencia Artificial': 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
};

export default function EducationCard({ education, onViewImage, className = '' }: EducationCardProps) {
  const [hasError, setHasError] = useState(false);

  const isLevel1 = education.level === 1;
  const isValidUrl = education.imageUrl && education.imageUrl.trim() !== '';
  const showImage = isLevel1 && isValidUrl && !hasError;

  const getLevelConfig = (level: CertificateLevel) => {
    switch (level) {
      case 1:
        return {
          border: 'border-glint/50 shadow-[0_0_15px_rgba(59,152,255,0.15)]',
          badgeExtra: 'font-bold',
          icon: <Award className="w-3.5 h-3.5" />,
        };
      case 2:
        return {
          border: 'border-white/10 hover:border-white/25',
          badgeExtra: '',
          icon: null,
        };
      default:
        return {
          border: 'border-white/5 opacity-80 hover:opacity-100',
          badgeExtra: '',
          icon: null,
        };
    }
  };

  const config = getLevelConfig(education.level);
  const categoryStyle = categoryColors[education.category] || 'bg-white/10 text-slate-300 border-white/20';

  // ========== LEVEL 2: Card compacta (sin zona de imagen) ==========
  if (!isLevel1) {
    return (
      <article
        className={`group flex flex-col bg-white/5 backdrop-blur-md border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-white/8 ${config.border} ${className}`}
      >
        <div className="p-4 flex flex-col flex-1 gap-3">
          {/* Badge de categoría con color */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded border flex items-center gap-1 ${categoryStyle} ${config.badgeExtra}`}
            >
              {config.icon}
              {education.category}
            </span>
            <span className="text-[10px] font-mono text-slate-500">{education.year}</span>
          </div>

          <div>
            <h3
              className="text-sm font-bold text-white leading-snug mb-1 line-clamp-2"
              title={education.title}
            >
              {education.title}
            </h3>
            <p className="text-xs text-slate-400">{education.issuer}</p>
          </div>

          {/* Solo link de verificación si existe (sin botón "Ver") */}
          {education.credentialUrl && (
            <div className="mt-auto pt-3 border-t border-white/5">
              <a
                href={education.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-glint transition-colors"
              >
                Verificar <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>
      </article>
    );
  }

  // ========== LEVEL 1: Card completa con imagen + modal ==========
  return (
    <article
      className={`group flex flex-col bg-white/5 backdrop-blur-md border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/10 ${config.border} ${className}`}
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800/50 cursor-pointer"
        onClick={onViewImage}
      >
        {showImage ? (
          <img
            src={education.imageUrl}
            alt={education.title}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-2 bg-slate-900/40">
            <Award className="w-12 h-12 opacity-30" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
              Sin imagen
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <Eye className="w-8 h-8 text-white drop-shadow-lg" />
        </div>

        <span className="absolute top-2 right-2 px-2 py-1 text-[10px] font-mono font-bold bg-slate-900/80 backdrop-blur-md text-white rounded-md border border-white/10">
          {education.year}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2 flex items-center gap-2">
          <span
            className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded border flex items-center gap-1 ${categoryStyle} ${config.badgeExtra}`}
          >
            {config.icon}
            {education.category}
          </span>
        </div>

        <h3
          className="text-sm font-bold text-white leading-tight mb-1 line-clamp-2"
          title={education.title}
        >
          {education.title}
        </h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-1">{education.issuer}</p>

        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          <button
            onClick={onViewImage}
            className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-glint transition-colors cursor-pointer"
          >
            <Eye size={14} /> Ver
          </button>

          {education.credentialUrl && (
            <a
              href={education.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-glint transition-colors"
            >
              Verificar <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}