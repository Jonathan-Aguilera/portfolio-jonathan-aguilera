import { Link } from 'react-router-dom';
import NewsCard from '../../components/NewsCard';
import { newsPosts } from '../../data/news';

const PREVIEW_LIMIT = 3;

export default function NoticiasPreview() {
  const recent = [...newsPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, PREVIEW_LIMIT);

  if (recent.length === 0) return null;

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white">Últimas noticias</h2>
        <p className="text-slate-300 mt-2">
          Lo último del proyecto.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {recent.map((post) => (
          <NewsCard key={post.slug} post={post} />
        ))}
      </div>

      {newsPosts.length > PREVIEW_LIMIT && (
        <Link
          to="/noticias"
          className="inline-flex items-center gap-2 mt-8 text-white/90 hover:text-glint transition-colors font-medium"
        >
          Ver todas las noticias
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </section>
  );
}