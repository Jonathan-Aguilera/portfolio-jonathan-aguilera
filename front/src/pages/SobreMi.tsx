import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/sobreMi';
import { Quote, Compass, Briefcase, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import profileImage from '../assets/profile.png';

interface SobreMiProps {
  variant?: 'preview' | 'full';
}

const carouselImages = [
  profileImage,
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
];

export default function SobreMi({ variant = 'full' }: SobreMiProps) {
  const isPreview = variant === 'preview';
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, [nextImage, currentIndex]);

  const presentacion = aboutData.find((item) => item.id === 'presentacion');
  const filosofia = aboutData.find((item) => item.id === 'filosofia');
  const trayectoria = aboutData.find((item) => item.id === 'trayectoria');
  const metodologia = aboutData.find((item) => item.id === 'metodologia');
  const vision = aboutData.find((item) => item.id === 'vision');

  return (
    <section id="about" className={`px-8 lg:px-12 max-w-6xl mx-auto ${isPreview ? 'py-12' : 'py-16'}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
        Sobre mí
      </h2>

      {/* ================= FILA 1: PRESENTACIÓN + CARRUSEL ================= */}
      {/* items-start permite que la imagen suba independientemente del texto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

        {/* Columna de texto */}
        <div className="flex flex-col max-w-prose">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-glint">
              {presentacion?.title}
            </h3>
            <p className="text-slate-200 text-lg leading-relaxed border-l-2 border-glint/50 pl-6">
              {presentacion?.description}
            </p>
            {isPreview && (
              <Link
                to="/sobre-mi"
                className="inline-flex items-center gap-2 mt-4 text-white hover:text-glint transition-colors font-medium"
              >
                Leer más sobre mí <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          {/* Controles del carrusel (debajo del texto) */}
          <div className="mt-6 flex flex-col gap-4 w-full">

            {/* Miniaturas (con padding para que no se corten los bordes) */}
            <div className="flex gap-3 overflow-x-auto p-2 [scrollbar-width:none]">
              {carouselImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out shrink-0 ${index === currentIndex
                      ? 'w-20 h-14 ring-2 ring-glint opacity-100 scale-105 shadow-lg'
                      : 'w-16 h-12 opacity-50 hover:opacity-80'
                    }`}
                  aria-label={`Ver miniatura ${index + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </button>
              ))}
            </div>

            {/* Flechas y Dots (centrados bajo las miniaturas) */}
            <div className="flex items-center justify-between w-full mt-2">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:text-glint text-white transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Contenedor de dots centrado */}
              <div className="flex items-center gap-2 flex-1 justify-center">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-glint' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:text-glint text-white transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

        {/* Columna de la Foto Principal (subida sutilmente con lg:-mt-6) */}
        <div className="relative group flex justify-center lg:justify-end lg:-mt-6">
          <div className="absolute inset-0 bg-glint/20 rounded-3xl blur-3xl group-hover:bg-glint/30 transition-colors duration-500" />
          <img
            src={carouselImages[currentIndex]}
            alt="Galería de Jonathan Aguilera"
            className="relative rounded-3xl w-full max-w-xs sm:max-w-sm object-cover border border-white/20 shadow-2xl aspect-[4/5] transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* ================= FILA 2: EL RESTO (Solo en vista FULL) ================= */}
      {!isPreview && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Filosofía */}
          <div className="md:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-white/20 transition-colors">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 group-hover:text-white/10 transition-colors duration-500" />
            <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
              {filosofia?.title}
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed italic relative z-10">
              "{filosofia?.description}"
            </p>
          </div>

          {/* 2. Metodología */}
          <div className="md:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-glint" />
              {metodologia?.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {metodologia?.description}
            </p>
          </div>

          {/* 3. Trayectoria */}
          <div className="md:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-glint" />
              {trayectoria?.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {trayectoria?.description}
            </p>
          </div>

          {/* 4. Visión */}
          <div className="md:col-span-7 bg-gradient-to-br from-glint/10 to-sea-surface/10 border border-glint/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <Compass className="w-5 h-5 text-glint" />
              {vision?.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {vision?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}