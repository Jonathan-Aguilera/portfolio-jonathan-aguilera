import { Link, useParams } from 'react-router-dom';
import { newsPosts } from '../data/news';

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Noticia no encontrada</h1>
        <p className="text-slate-300 mb-6">
          La publicación que buscas no existe o fue movida.
        </p>
        <Link
          to="/noticias"
          className="text-glint hover:underline"
        >
          ← Volver a Noticias
        </Link>
      </section>
    );
  }

  return (
    <article className="px-6 py-16 max-w-3xl mx-auto">
      <title>{`${post.title} — TSC`}</title>

      <Link
        to="/noticias"
        className="text-sm text-slate-400 hover:text-glint transition-colors"
      >
        ← Volver a Noticias
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
          <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
          {post.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} min de lectura</span>
            </>
          )}
          {post.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        {post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-100/90 border border-white/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="text-slate-200 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}