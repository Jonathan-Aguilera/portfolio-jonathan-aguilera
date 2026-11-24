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
      className="group block rounded-2xl bg-[#1E3A5F] border border-[#3B82C4]/30 p-6 transition-all duration-200 hover:border-[#3B82C4]/60 hover:bg-[#1E3A5F]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
    >
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-[#8BA4C0] mb-3">
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
      <h3 className="text-xl sm:text-2xl font-semibold text-[#F0F4F8] mb-2 group-hover:text-[#00D4FF] transition-colors">
        {post.title}
      </h3>

      {/* Extracto */}
      <p className="text-sm text-[#8BA4C0] leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-[#0A1628]/50 text-[#F0F4F8] border border-[#3B82C4]/30"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}