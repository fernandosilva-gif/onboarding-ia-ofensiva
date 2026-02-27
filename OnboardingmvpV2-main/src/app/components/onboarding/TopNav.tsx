import svgPaths from '../../../imports/svg-mvwzc123e0';
import iconPaths from '../../../imports/svg-wksbr3ketz';

interface TopNavProps {
  progress: number;
  onBack: () => void;
  canGoBack: boolean;
}

export function TopNav({ progress, onBack, canGoBack }: TopNavProps) {
  return (
    <nav
      className="w-full bg-black h-16 max-h-16 flex items-center shrink-0 px-4 sm:px-5 border-b border-[#111111] overflow-hidden"
    >
      {/* ── Coluna esquerda — botão Voltar ── */}
      <div className="flex-1 flex items-center">
        {canGoBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-1 py-0.5 group cursor-pointer"
            aria-label="Voltar"
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path
                d={svgPaths.pb481300}
                fill="#A4A4A4"
                className="group-hover:fill-white transition-colors duration-150"
              />
            </svg>
            <span
              className="group-hover:text-white transition-colors duration-150 text-[#a4a4a4]"
              style={{ fontSize: '14px', fontWeight: 500, lineHeight: '14px', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em' }}
            >
              Voltar
            </span>
          </button>
        )}
      </div>

      {/* ── Coluna central ── */}

      {/* Mobile: ícone de anel + triângulo (Figma NavBar) */}
      <div
        className="flex sm:hidden items-center shrink-0 relative"
        style={{ width: '24px', height: '37px' }}
        aria-label="Overpass"
      >
        {/* Anel/círculo — proporção natural do viewBox (24 × 24.3px) */}
        <svg
          className="absolute top-0 left-0"
          width="24"
          height="24"
          viewBox="0 0 24 24.2857"
          fill="none"
        >
          <path d={iconPaths.pefc9480} fill="white" />
        </svg>
        {/* Triângulo — 3px de gap após o anel, centralizado */}
        <svg
          className="absolute"
          style={{ top: '27px', left: '50%', transform: 'translateX(-50%)' }}
          width="10"
          height="10"
          viewBox="0 0 9.6 9.71429"
          fill="none"
        >
          <path d={iconPaths.p30a63040} fill="white" />
        </svg>
      </div>

      {/* Desktop: wordmark textual */}
      <div className="hidden sm:flex items-center shrink-0">
        <svg width="104" height="14" viewBox="0 0 104 14" fill="none" aria-label="Overlens">
          <path d={svgPaths.p127df00} fill="white" />
          <path d={svgPaths.p354934f0} fill="white" />
          <path clipRule="evenodd" d={svgPaths.pa1df000} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p7bc7d40} fill="white" />
          <path d={svgPaths.pb4ba600} fill="white" />
          <path d={svgPaths.p100e0100} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p2a98f100} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p10d9c600} fill="white" />
          <path d={svgPaths.p8ab9600} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p2761f300} fill="white" fillRule="evenodd" />
        </svg>
      </div>

      {/* ── Coluna direita ── */}

      {/* Mobile: só a porcentagem, sem barra */}
      <div className="flex-1 flex sm:hidden items-center justify-end">
        <span
          className="tabular-nums shrink-0 text-[#a4a4a4]"
          style={{ fontSize: '14px', fontWeight: 500, lineHeight: '14px', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em' }}
        >
          {progress}%
        </span>
      </div>

      {/* Desktop: barra + porcentagem */}
      <div className="flex-1 hidden sm:flex items-center justify-end gap-2">
        <div className="w-16 h-0.5 bg-[#303030] rounded-full overflow-hidden shrink-0">
          <div
            className="h-full bg-[#d4d4d4] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          className="text-[#d4d4d4] tabular-nums shrink-0"
          style={{ fontSize: '14px', fontWeight: 500, lineHeight: '14px', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em' }}
        >
          {progress}%
        </span>
      </div>
    </nav>
  );
}