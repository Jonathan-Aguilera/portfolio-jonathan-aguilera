export default function HorizonLine() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden h-[200px] sm:h-[260px]"
    >
      {/* Tres capas de ola: trasera (lejana) → media → delantera (cresta) */}
      <div
        className="absolute inset-x-0"
        style={{ bottom: '55%', height: '120px' }}
      >
        {/* Capa 1 — trasera, translúcida, swell lejano */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C60,27 120,27 180,45 S300,63 360,45 S480,27 540,45 S660,63 720,45 S840,27 900,45 S1020,63 1080,45 S1200,27 1260,45 S1380,63 1440,45 L1440,120 L0,120 Z"
            fill="rgba(95,168,232,0.45)"
            stroke="rgba(255,255,255,0.50)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Capa 2 — intermedia */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,62 C60,44 120,44 180,62 S300,80 360,62 S480,44 540,62 S660,80 720,62 S840,44 900,62 S1020,80 1080,62 S1200,44 1260,62 S1380,80 1440,62 L1440,120 L0,120 Z"
            fill="rgba(70,137,199,0.75)"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Capa 3 — delantera, sólida, define la cresta del nivel del mar */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C60,62 120,62 180,80 S300,98 360,80 S480,62 540,80 S660,98 720,80 S840,62 900,80 S1020,98 1080,80 S1200,62 1260,80 S1380,98 1440,80 L1440,120 L0,120 Z"
            fill="var(--color-sea-surface)"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.5"
          />
          {/* Espuma sobre la cresta */}
          <circle cx="120" cy="72" r="2"   fill="rgba(255,255,255,0.90)" />
          <circle cx="180" cy="80" r="1.5" fill="rgba(255,255,255,0.85)" />
          <circle cx="300" cy="88" r="2"   fill="rgba(255,255,255,0.90)" />
          <circle cx="420" cy="70" r="1.5" fill="rgba(255,255,255,0.85)" />
          <circle cx="540" cy="80" r="2.5" fill="rgba(255,255,255,0.90)" />
          <circle cx="680" cy="90" r="1.5" fill="rgba(255,255,255,0.85)" />
          <circle cx="800" cy="70" r="2"   fill="rgba(255,255,255,0.90)" />
          <circle cx="950" cy="82" r="1.5" fill="rgba(255,255,255,0.85)" />
          <circle cx="1080" cy="72" r="2"  fill="rgba(255,255,255,0.90)" />
          <circle cx="1230" cy="88" r="1.5" fill="rgba(255,255,255,0.85)" />
          <circle cx="1370" cy="74" r="2"  fill="rgba(255,255,255,0.90)" />
        </svg>
      </div>

      {/* Franja de agua — costura exacta con el inicio de .zone-upper-sea */}
      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[var(--color-sea-surface)] to-[var(--color-sea-top)]"
        style={{ height: '55%' }}
      >
        {/* Burbujas estáticas en el agua */}
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '8%',  bottom: '20%', width: 6, height: 6 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '18%', bottom: '40%', width: 4, height: 4 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '28%', bottom: '15%', width: 8, height: 8 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '40%', bottom: '55%', width: 3, height: 3 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '52%', bottom: '30%', width: 7, height: 7 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '63%', bottom: '50%', width: 4, height: 4 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '74%', bottom: '25%', width: 6, height: 6 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '85%', bottom: '45%', width: 5, height: 5 }} />
        <span className="absolute rounded-full bg-white/50 border border-white/30" style={{ left: '93%', bottom: '18%', width: 3, height: 3 }} />
      </div>
    </div>
  );
}