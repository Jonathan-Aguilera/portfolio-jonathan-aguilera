import ExperienceCard from '../components/ExperienceCard';
import { experiencesData } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experiencia() {
  return (
    <section id="experience" className="px-8 lg:px-12 py-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Briefcase className="w-8 h-8 text-[#00D4FF]" />
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F4F8] tracking-tight">
          Trayectoria Profesional
        </h2>
        <div className="h-px bg-gradient-to-r from-[#00D4FF]/50 to-transparent flex-1 ml-4" />
      </div>

      {/* Contenedor de la línea de tiempo */}
      <div className="relative pl-6 md:pl-10">
        {/* Línea vertical de fondo */}
        <div className="absolute left-[11px] md:left-[19px] top-2 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 via-[#3B82C4]/30 to-transparent" />
        
        <div className="flex flex-col gap-10">
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}