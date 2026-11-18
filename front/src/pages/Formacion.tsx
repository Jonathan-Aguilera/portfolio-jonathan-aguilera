import EducationCard from '../components/EducationCard';
import { certificatesData } from '../data/education';

export default function Formacion() {
  return (
    <section id="education" className="px-6 py-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Formación</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {certificatesData.map((cert) => (
          <EducationCard key={cert.id} education={cert} />
        ))}
      </div>
    </section>
  );
}
