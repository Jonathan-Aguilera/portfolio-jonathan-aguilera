import { Link } from 'react-router-dom';
import EducationCard from '../../components/EducationCard';
import { certificatesData } from '../../data/education';
import SectionPreview from './SectionPreview';

export default function FormacionPreview() {
  // Solo los de nivel 1 (los más importantes) y máximo 3
  const topLevel = certificatesData
    .filter((cert) => cert.level === 1)
    .slice(0, 3);

  return (
    <SectionPreview
      title="Formación"
      href="/formacion"
      ctaLabel="Ver toda la formación"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topLevel.map((cert) => (
          <Link
            key={cert.id}
            to="/formacion"
            className="block group"
          >
            <EducationCard
              education={cert}
              onViewImage={() => {}} // No abrimos modal en el preview
              className="h-full scale-[0.92] origin-top transition-transform duration-300 group-hover:scale-[0.95]"
            />
          </Link>
        ))}
      </div>
    </SectionPreview>
  );
}