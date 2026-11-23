import { Link } from 'react-router-dom';
import type { NewsPost } from '../../types';

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
      className="group block rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 transition-colors hover:bg-white/10 hover:border-glint/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glint"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300/80 mb-3">
        <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
        {post.readTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} min de lectura</span>
          </>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-glint transition-colors">
        {post.title}
      </h3>

      <p className="text-sm text-slate-200/80 leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>

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
    </Link>
  );
}