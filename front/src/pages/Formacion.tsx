import { useState, useCallback, useEffect, useRef } from 'react';
import { GraduationCap, X, Award, BookOpen, ZoomIn, ZoomOut } from 'lucide-react';
import EducationCard from '../components/EducationCard';
import { certificatesData } from '../data/education';
import type { Certificate } from '../types';

export default function Formacion() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [modalImgError, setModalImgError] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const closeTimer = useRef<number | null>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });

  // Separación de datos
  const academicCertificates = certificatesData.filter((cert) => cert.level === 1);
  const technicalCertificates = certificatesData.filter((cert) => cert.level === 2);

  const closeModal = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setSelectedCert(null);
      setIsClosing(false);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }, 200);
  }, [isClosing]);

  useEffect(() => {
    setModalImgError(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [selectedCert]);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  useEffect(() => {
    if (!selectedCert || isClosing) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, isClosing, closeModal]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    setPosition({ x: 0, y: 0 });
  }, [zoom]);

  const hasValidImage =
    selectedCert?.imageUrl &&
    selectedCert.imageUrl.trim() !== '' &&
    !modalImgError;

  const handleViewImage = (cert: Certificate) => {
    if (cert.level === 1) {
      setSelectedCert(cert);
      setIsClosing(false);
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 1));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    positionStart.current = { ...position };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || zoom <= 1) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    setPosition({
      x: positionStart.current.x + deltaX,
      y: positionStart.current.y + deltaY,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="education" className="px-8 lg:px-12 py-20 max-w-6xl mx-auto space-y-16">
      
      {/* ===================== SECCIÓN 1: CERTIFICADOS ACADÉMICOS ===================== */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <GraduationCap className="w-8 h-8 text-[#00D4FF]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F4F8] tracking-tight">
            Certificados Académicos
          </h2>
          <div className="h-px bg-gradient-to-r from-[#00D4FF]/50 to-transparent flex-1 ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {academicCertificates.map((cert) => (
            <EducationCard
              key={cert.id}
              education={cert}
              onViewImage={() => handleViewImage(cert)}
            />
          ))}
        </div>
      </div>

      {/* ===================== SECCIÓN 2: CERTIFICACIONES TÉCNICAS ===================== */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <BookOpen className="w-7 h-7 text-[#00D4FF]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8] tracking-tight">
            Certificaciones Técnicas
          </h2>
          <div className="h-px bg-gradient-to-r from-[#00D4FF]/40 to-transparent flex-1 ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {technicalCertificates.map((cert) => (
            <EducationCard
              key={cert.id}
              education={cert}
              onViewImage={() => handleViewImage(cert)}
            />
          ))}
        </div>
      </div>

      {/* ===================== MODAL (solo Level 1) ===================== */}
      {selectedCert && selectedCert.level === 1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <div
            className={`absolute inset-0 bg-[#0A1628]/80 backdrop-blur-sm modal-overlay ${
              isClosing ? 'closing' : ''
            }`}
            onClick={closeModal}
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#1E3A5F] border border-[#3B82C4]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col modal-content ${
              isClosing ? 'closing' : ''
            }`}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 border-b border-[#3B82C4]/30 bg-[#1E3A5F]/80 backdrop-blur-md">
              <div className="min-w-0 flex-1 pr-4">
                <h3 className="text-lg font-bold text-[#F0F4F8] truncate">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-[#8BA4C0]">
                  {selectedCert.issuer} · {selectedCert.year}
                </p>
              </div>

              {/* Controles de zoom + botón cerrar */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 1}
                  className="p-2 bg-[#0A1628]/50 hover:bg-[#3B82C4]/30 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg text-[#F0F4F8] transition-colors cursor-pointer"
                  aria-label="Alejar"
                  title="Alejar"
                >
                  <ZoomOut size={18} />
                </button>

                <span className="text-xs font-mono text-[#8BA4C0] w-12 text-center">
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  className="p-2 bg-[#0A1628]/50 hover:bg-[#3B82C4]/30 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg text-[#F0F4F8] transition-colors cursor-pointer"
                  aria-label="Acercar"
                  title="Acercar"
                >
                  <ZoomIn size={18} />
                </button>

                <div className="w-px h-6 bg-[#3B82C4]/30 mx-1" />

                <button
                  onClick={closeModal}
                  className="p-2 bg-[#0A1628]/50 hover:bg-[#3B82C4]/30 rounded-lg text-[#F0F4F8] transition-colors cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Área de la imagen con zoom + arrastre */}
            <div className="relative flex-1 bg-[#0A1628]/60 overflow-hidden p-4 flex items-center justify-center">
              {hasValidImage ? (
                <div
                  className={`select-none touch-none ${
                    zoom > 1
                      ? isDragging
                        ? 'cursor-grabbing'
                        : 'cursor-grab'
                      : 'cursor-default'
                  }`}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                    transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                    transformOrigin: 'center center',
                  }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    onError={() => setModalImgError(true)}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg pointer-events-none"
                    draggable={false}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-[#8BA4C0] gap-4 p-12 w-full h-[50vh] bg-[#0A1628]/40 rounded-xl border border-dashed border-[#3B82C4]/30">
                  <Award className="w-24 h-24 opacity-30" />
                  <span className="text-sm font-bold uppercase tracking-widest opacity-50 text-center">
                    Imagen del certificado no disponible
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}