import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-theme-bg text-theme-text flex flex-col justify-center items-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-sm uppercase tracking-widest text-glint font-bold mb-4">
          Error 404
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Página no encontrada
        </h1>
        <p className="text-theme-muted text-lg mb-8 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe o ha sido movida a otra dirección.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-theme-bg bg-glint hover:bg-glint/80 transition-colors cursor-pointer"
          >
            Volver al inicio
          </Link>
          <Link
            to="/#contact"
            className="inline-flex justify-center items-center px-6 py-3 border border-theme-border text-base font-medium rounded-md text-theme-text bg-theme-card hover:bg-theme-card-hover transition-colors cursor-pointer"
          >
            Reportar problema
          </Link>
        </div>
      </div>
    </main>
  );
}