import { Link } from 'react-router-dom';
import { newsPosts } from '../../data/news';
import type { NewsPost } from '../../types';

const PREVIEW_LIMIT = 4;

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

function FeaturedCard({ post }: { post: NewsPost }) {
  return (
    <Link
      to={`/noticias/${post.slug}`}
      className="group relative flex flex-col h-full min-h-[340px] rounded-2xl bg-ocean-card border border-ocean-border p-7 transition-all duration-300 hover:border-ocean-border-hover hover:bg-ocean-card/95 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-glint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ocean-muted mb-4">
          <time dateTime={post.date}>
            {dateFormatter.format(new Date(post.date))}
          </time>
          {post.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} min de lectura</span>
            </>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-ocean-text mb-4 leading-tight group-hover:text-glint transition-colors">
          {post.title}
        </h3>

        <p className="text-ocean-muted text-base leading-relaxed line-clamp-4 mb-6 flex-1">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-auto">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-abyss-deep/60 text-ocean-text border border-ocean-border"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}

function SmallCard({ post }: { post: NewsPost }) {
  return (
    <Link
      to={`/noticias/${post.slug}`}
      className="group flex flex-col rounded-xl bg-ocean-card border border-ocean-border/75 p-4 transition-all duration-200 hover:border-ocean-border-hover hover:bg-ocean-card/90"
    >
      <div className="flex flex-wrap items-center gap-2 text-[11px] text-ocean-muted mb-2">
        <time dateTime={post.date}>
          {dateFormatter.format(new Date(post.date))}
        </time>
        {post.readTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} min</span>
          </>
        )}
      </div>

      <h3 className="text-base font-semibold text-ocean-text mb-1.5 line-clamp-2 group-hover:text-glint transition-colors">
        {post.title}
      </h3>

      <p className="text-xs text-ocean-muted leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
}

function EmptySlot({ index }: { index: number }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-ocean-border/60 bg-abyss-deep/30 p-4 min-h-[110px] text-center">
      <p className="text-xs text-ocean-muted/70">
        {index === 0 ? 'Próximamente más noticias' : 'Espacio disponible'}
      </p>
    </div>
  );
}

export default function NoticiasPreview() {
  const sorted = [...newsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0] ?? null;
  const rest = sorted.slice(1, PREVIEW_LIMIT);
  const emptySlots = Math.max(0, 3 - rest.length);

  if (!featured) return null;

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-ocean-text">Últimas noticias</h2>
        <p className="text-ocean-muted mt-2">
          Lo último del proyecto y de Time Storm Creations.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <FeaturedCard post={featured} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {rest.map((post) => (
            <SmallCard key={post.slug} post={post} />
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptySlot key={`empty-${i}`} index={i} />
          ))}
        </div>
      </div>

      {newsPosts.length > 1 && (
        <div className="mt-8">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-ocean-text/90 hover:text-ocean-glint transition-colors font-medium"
          >
            Ver todas las noticias
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}