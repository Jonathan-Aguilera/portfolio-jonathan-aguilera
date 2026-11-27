import { Link } from 'react-router-dom';
import type { NewsPost } from '../types';

interface NewsCardProps {
  post: NewsPost;
}

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <Link
      to={`/noticias/${post.slug}`}
      className="group block rounded-2xl bg-theme-card backdrop-blur-md border border-theme-border p-6 transition-all duration-200 hover:border-glint/50 hover:bg-theme-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glint"
    >
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-theme-muted mb-3">
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

      {/* Título */}
      <h3 className="text-xl sm:text-2xl font-semibold text-theme-text mb-2 group-hover:text-glint transition-colors">
        {post.title}
      </h3>

      {/* Extracto */}
      <p className="text-sm text-theme-muted leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-theme-bg/50 text-theme-text border border-theme-border"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}