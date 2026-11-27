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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
        <div className="flex flex-col max-w-2xl">
          <br />
          <br />
          <p className="text-ocean-text/90 text-base leading-relaxed border-l-2 border-ocean-glint/50 pl-5">
            {presentacion?.description}
          </p>
        </div>

        <div className="relative group flex justify-center lg:justify-center">
          <div className="absolute inset-0 bg-ocean-glint/20 rounded-2xl blur-2xl group-hover:bg-ocean-glint/30 transition-colors duration-500" />
          <img
            src={profileImage}
            alt="Jonathan Aguilera"
            className="relative rounded-2xl w-full max-w-[300px] object-cover border border-ocean-text/20 shadow-xl aspect-[4/5]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="bg-ocean-text/5 backdrop-blur-md border border-ocean-text/10 rounded-xl p-5 hover:bg-ocean-text/10 hover:border-ocean-text/20 transition-colors">
          <h3 className="text-lg font-bold text-ocean-text mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-ocean-glint" />
            {metodologia?.title}
          </h3>
          <p className="text-sm text-ocean-muted leading-relaxed line-clamp-4">
            {metodologia?.description}
          </p>
        </article>

        <article className="bg-ocean-text/5 backdrop-blur-md border border-ocean-text/10 rounded-xl p-5 hover:bg-ocean-text/10 hover:border-ocean-text/20 transition-colors relative overflow-hidden">
          <Quote className="absolute top-4 right-4 w-10 h-10 text-ocean-text/5" />
          <h3 className="text-lg font-bold text-ocean-text mb-3 relative z-10">
            {filosofia?.title}
          </h3>
          <p className="text-sm text-ocean-muted leading-relaxed italic relative z-10 line-clamp-4">
            "{filosofia?.description}"
          </p>
        </article>
      </div>
    </SectionPreview>
  );
}