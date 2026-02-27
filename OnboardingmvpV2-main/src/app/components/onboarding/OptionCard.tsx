interface OptionCardProps {
  id: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionCard({ id, label, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-2 pl-2.5 pr-4 py-3 rounded-xl text-left
        border transition-all duration-200 cursor-pointer outline-none
        ${selected
          ? 'bg-[#181818] border-white'
          : 'bg-[#0d0d0d] border-[#242424] hover:border-[#484848] hover:bg-[#111111]'
        }
      `}
    >
      {/*
        Badge de letra — A, B, C, D…
        Dimensões segundo anotação Figma:
          padding 8px todos os lados
          conteúdo 20 × 8 → badge total 36 × 24px
          border-radius 4px (rounded)
      */}
      <div
        className={`
          shrink-0 h-6 min-w-9 px-2 rounded flex items-center justify-center
          transition-all duration-200
          ${selected ? 'bg-white text-black' : 'bg-[#1e1e1e] text-[#a4a4a4]'}
        `}
        style={{ fontSize: '12px', fontWeight: 500 }}
      >
        {id}
      </div>

      {/* Label */}
      <span
        className={`transition-colors duration-200 ${selected ? 'text-[#f2f2f2]' : 'text-[#c8c8c8]'}`}
        style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4 }}
      >
        {label}
      </span>
    </button>
  );
}
