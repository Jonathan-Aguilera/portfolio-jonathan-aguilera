import { Link } from 'react-router-dom';
import SobreMiCard from '../components/SobreMiCard';
import { aboutData } from '../data/sobreMi';

interface SobreMiProps {
  variant?: 'preview' | 'full';
}

const PREVIEW_IDS = new Set(['presentacion', 'metodologia']);

export default function SobreMi({ variant = 'full' }: SobreMiProps) {
  const isPreview = variant === 'preview';
  const items = isPreview
    ? aboutData.filter((item) => PREVIEW_IDS.has(item.id))
    : aboutData;

  return (
    <section
      id="about"
      className={`px-6 max-w-5xl mx-auto ${isPreview ? 'py-12' : 'py-20'}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
        Sobre mí
      </h2>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <SobreMiCard key={item.id} title={item.title}>
            <p>{item.description}</p>
          </SobreMiCard>
        ))}
      </div>

      {isPreview && (
        <Link
          to="/sobre-mi"
          className="inline-flex items-center gap-2 mt-8 text-white/90 hover:text-glint transition-colors font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]"
        >
          Leer más sobre mí
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </section>
  );
}