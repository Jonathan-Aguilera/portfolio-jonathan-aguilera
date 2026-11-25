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
      className="group relative flex flex-col h-full min-h-[340px] rounded-2xl bg-[#1E3A5F] border border-[#3B82C4]/40 p-7 transition-all duration-300 hover:border-[#3B82C4]/70 hover:bg-[#1E3A5F]/95 overflow-hidden"
    >
      {/* Glow sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#8BA4C0] mb-4">
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

        {/* Título grande */}
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8] mb-4 leading-tight group-hover:text-[#00D4FF] transition-colors">
          {post.title}
        </h3>

        {/* Extracto */}
        <p className="text-[#8BA4C0] text-base leading-relaxed line-clamp-4 mb-6 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-auto">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-[#0A1628]/60 text-[#F0F4F8] border border-[#3B82C4]/30"
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
      className="group flex flex-col rounded-xl bg-[#1E3A5F] border border-[#3B82C4]/30 p-4 transition-all duration-200 hover:border-[#3B82C4]/60 hover:bg-[#1E3A5F]/90"
    >
      <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#8BA4C0] mb-2">
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

      <h3 className="text-base font-semibold text-[#F0F4F8] mb-1.5 line-clamp-2 group-hover:text-[#00D4FF] transition-colors">
        {post.title}
      </h3>

      <p className="text-xs text-[#8BA4C0] leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
}

function EmptySlot({ index }: { index: number }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#3B82C4]/25 bg-[#0A1628]/30 p-4 min-h-[110px] text-center">
      <p className="text-xs text-[#8BA4C0]/70">
        {index === 0 ? 'Próximamente más noticias' : 'Espacio disponible'}
      </p>
    </div>
  );
}

export default function NoticiasPreview() {
  // Ordenar de más reciente a más antigua
  const sorted = [...newsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0] ?? null;
  const rest = sorted.slice(1, PREVIEW_LIMIT); // máximo 3 más
  const emptySlots = Math.max(0, 3 - rest.length);

  // Si no hay ninguna noticia, no mostramos la sección
  if (!featured) return null;

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white">Últimas noticias</h2>
        <p className="text-slate-300 mt-2">
          Lo último del proyecto y de Time Storm Creations.
        </p>
      </header>

      {/* Layout: Featured grande + columna de 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Columna izquierda: noticia destacada (ocupa 3 de 5) */}
        <div className="lg:col-span-3">
          <FeaturedCard post={featured} />
        </div>

        {/* Columna derecha: 3 slots */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {rest.map((post) => (
            <SmallCard key={post.slug} post={post} />
          ))}

          {/* Placeholders cuando faltan noticias */}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptySlot key={`empty-${i}`} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      {newsPosts.length > 1 && (
        <div className="mt-8">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#00D4FF] transition-colors font-medium"
          >
            Ver todas las noticias
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}