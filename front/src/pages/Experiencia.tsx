import ExperienceCard from '../components/ExperienceCard';
import { experiencesData } from '../data/experience';

export default function Experiencia() {
  return (
    <section id="experience" className="px-6 py-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Experiencia</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1" />
      </div>

      <div className="grid gap-6">
        {experiencesData.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
