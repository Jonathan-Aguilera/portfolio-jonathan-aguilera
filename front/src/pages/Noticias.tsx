import NewsCard from '../components/NewsCard';
import { newsPosts } from '../data/news';

export default function Noticias() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#F0F4F8]">Noticias</h1>
        <p className="text-[#8BA4C0] mt-2">
          Avances, decisiones técnicas y aprendizajes del proyecto.
        </p>
      </header>

      {newsPosts.length === 0 ? (
        <p className="text-[#8BA4C0]">Todavía no hay publicaciones.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {newsPosts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}