import { aboutData } from '../../data/sobreMi';
import SectionPreview from './SectionPreview';
import profileImage from '../../assets/profile.png';
import { Briefcase, Quote } from 'lucide-react';

export default function SobreMiPreview() {
  const presentacion = aboutData.find((item) => item.id === 'presentacion');
  const metodologia = aboutData.find((item) => item.id === 'metodologia');
  const filosofia = aboutData.find((item) => item.id === 'filosofia');

  return (
    <SectionPreview title="Sobre mí" href="/sobre-mi" ctaLabel="Conocer más sobre mí">
      {/* Fila 1: Presentación + Imagen estática */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
        {/* Texto de presentación */}
        <div className="flex flex-col max-w-2xl">
          <br />
          <br />
          <p className="text-slate-200 text-base leading-relaxed border-l-2 border-glint/50 pl-5">
            {presentacion?.description}
          </p>
        </div>

        {/* Imagen de perfil estática */}
        <div className="relative group flex justify-center lg:justify-center">
          <div className="absolute inset-0 bg-glint/20 rounded-2xl blur-2xl group-hover:bg-glint/30 transition-colors duration-500" />
          <img
            src={profileImage}
            alt="Jonathan Aguilera"
            className="relative rounded-2xl w-full max-w-[300px] object-cover border border-white/20 shadow-xl aspect-[4/5]"
          />
        </div>
      </div>

      {/* Fila 2: Dos cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card: Cómo trabajo */}
        <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-colors">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-glint" />
            {metodologia?.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-4">
            {metodologia?.description}
          </p>
        </article>

        {/* Card: Mi Filosofía */}
        <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-colors relative overflow-hidden">
          <Quote className="absolute top-4 right-4 w-10 h-10 text-white/5" />
          <h3 className="text-lg font-bold text-white mb-3 relative z-10">
            {filosofia?.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed italic relative z-10 line-clamp-4">
            "{filosofia?.description}"
          </p>
        </article>
      </div>
    </SectionPreview>
  );
}