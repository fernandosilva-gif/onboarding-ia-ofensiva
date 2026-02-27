import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useOnboarding } from './useOnboarding';
import { TopNav } from './TopNav';
import { OptionCard } from './OptionCard';
import { Button } from './Button';
import type { QuestionDef, OptionId, ScreenId } from './data';
import { SCREENS } from './data';
import { getRecommendedIds } from './scoring';

// ─── Assets ───────────────────────────────────────────────────────────────────
import imgBabel    from '../../../assets/5a22b06b599f8814df73ca655de9994548664898.png';
// ─── Course covers ────────────────────────────────────────────────────────────
import imgSandbox  from '../../../assets/1f79aef32de5d2eb4b14b300dbd08f5b3f0c0075.png';
import imgNexgen   from '../../../assets/0506aca75d1dc88d88d0cbbf307a3820f0e3cd80.png';
import imgDeepZoom    from '../../../assets/37525c303db93b8ded643279ebeb55ae332fb3ab.png';
import imgStandout    from '../../../assets/d911ab33d34921d8479060c47ec50aa287701214.png';
import imgChrome      from '../../../assets/1a26e9b4670c4d820b0fe0c23cfe851c3e53abfa.png';
import imgGestalt     from '../../../assets/abb47ef9289f8fc41b8d9139230f22803b9fdf97.png';
import imgLlms        from '../../../assets/85e7bd55e3ff92aabd313585bb1bb9209ea57e1d.png';
import imgSignals     from '../../../assets/b03cc1e7a774fd6ab9c8232e72a5a7a76baa29d8.png';
import imgCosmos      from '../../../assets/f083336b339f3abed7087391e37d692648742522.png';
import imgVerbarium   from '../../../assets/c1937d19b023d93a800bc18ab3fd372db9b6aa43.png';
import imgNucleo      from '../../../assets/1578ebd8c5b34a394823672089c0f0ece7a8a158.png';
import imgCursoMateus from '../../../assets/7c28d0ed7d26915d244a4851735b4b64a659d315.png';
import imgLayout      from '../../../assets/2ebe06c31e068ed8934a23719fe70ebc05ddc1e9.png';

// ─── Blue-atmos placeholder (SVG data URL) — cursos sem capa específica ───────
const BLUE_ATMOS = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="217" height="327">` +
  `<defs><linearGradient id="g" x1="0.2" y1="0" x2="0.8" y2="1">` +
  `<stop offset="0%" stop-color="#0b1e3a"/>` +
  `<stop offset="55%" stop-color="#163354"/>` +
  `<stop offset="100%" stop-color="#091629"/>` +
  `</linearGradient></defs>` +
  `<rect width="217" height="327" fill="url(#g)"/>` +
  `<rect x="0" y="81" width="217" height="1" fill="rgba(255,255,255,0.04)"/>` +
  `<rect x="0" y="163" width="217" height="1" fill="rgba(255,255,255,0.04)"/>` +
  `<rect x="0" y="245" width="217" height="1" fill="rgba(255,255,255,0.04)"/>` +
  `<rect x="72" y="0" width="1" height="327" fill="rgba(255,255,255,0.04)"/>` +
  `<rect x="144" y="0" width="1" height="327" fill="rgba(255,255,255,0.04)"/>` +
  `<circle cx="108" cy="145" r="52" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>` +
  `<circle cx="108" cy="145" r="28" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>` +
  `</svg>`
);

// ─── Course catalog ───────────────────────────────────────────────────────────
// 'trail' define a categoria do curso.
// O SwapModal filtra por trail do slot: AI=8 · Design=6 · Estratégia=6 · Negócios=3
export type Trail = 'ai' | 'design' | 'estrategia' | 'negocios';
export type Course = { id: string; name: string; img: string; description?: string; trail: Trail };

export const TRAIL_LABELS: Record<Trail, string> = {
  ai:         'IA & Tecnologia',
  design:     'Design & Fundamentos',
  estrategia: 'Estratégia & Branding',
  negocios:   'Negócios & Mercado',
};

export const ALL_COURSES: Course[] = [
  // ─── Trilha: AI (8 cursos) ───────────────────────────────────────────────
  { id: 'ai_first',      name: 'AI:FIRST',         img: BLUE_ATMOS,     trail: 'ai',         description: 'A História das IAs' },
  { id: 'nexgen',        name: 'NEXGEN',            img: imgNexgen,      trail: 'ai',         description: 'Habilidades Nexialistas' },
  { id: 'prompt',        name: 'PROMPT',            img: BLUE_ATMOS,     trail: 'ai',         description: 'Como conversar com IAs' },
  { id: 'ai_image_gen',  name: 'AI Image Gen',      img: BLUE_ATMOS,     trail: 'ai',         description: 'Geração de Imagens' },
  { id: 'llms',          name: 'LLMs',              img: imgLlms,        trail: 'ai',         description: 'Guia para Iniciantes' },
  { id: 'curso_mateus',  name: 'Curso do Mateus',   img: imgCursoMateus, trail: 'ai',         description: 'Explorer' },
  { id: 'dinheiro_ia',   name: 'Fazendo Dinheiro',  img: BLUE_ATMOS,     trail: 'ai',         description: 'Fazendo Dinheiro com IA' },
  { id: 'identificando', name: 'Identificando',     img: BLUE_ATMOS,     trail: 'ai',         description: 'Identificando Demandas' },

  // ─── Trilha: Design & Fundamentos (6 cursos) ────────────────────────────
  { id: 'sandbox',       name: 'Sandbox',           img: imgSandbox,     trail: 'design',     description: 'O Básico do Design' },
  { id: 'matriz',        name: 'Matriz',            img: BLUE_ATMOS,     trail: 'design',     description: 'A Essência do Design' },
  { id: 'gestalt',       name: 'Gestalt',           img: imgGestalt,     trail: 'design',     description: 'Fundamentos das Formas' },
  { id: 'colorful',      name: 'Colorful',          img: imgChrome,      trail: 'design',     description: 'Fundamentos das Cores' },
  { id: 'layout',        name: 'Layout',            img: imgLayout,      trail: 'design',     description: 'Fundamentos da Composição' },
  { id: 'signals',       name: 'Signals',           img: imgSignals,     trail: 'design',     description: 'Fundamentos da mensagem' },

  // ─── Trilha: Estratégia & Branding (6 cursos) ───────────────────────────
  { id: 'deep_zoom',     name: 'Deep Zoom',         img: imgDeepZoom,    trail: 'estrategia', description: 'Investigação do Projeto' },
  { id: 'standout',      name: 'Standout',          img: imgStandout,    trail: 'estrategia', description: 'Estratégia da Marca' },
  { id: 'nucleo',        name: 'Núcleo',            img: imgNucleo,      trail: 'estrategia', description: 'Essência da Marca' },
  { id: 'verbarium',     name: 'Verbarium',         img: imgVerbarium,   trail: 'estrategia', description: 'Universo verbal' },
  { id: 'cosmos',        name: 'Cosmos',            img: imgCosmos,      trail: 'estrategia', description: 'Universo visual' },
  { id: 'logogram',      name: 'Logogram',          img: BLUE_ATMOS,     trail: 'estrategia', description: 'Identidade Visual' },

  // ─── Trilha: Negócios & Mercado (6 cursos) ──────────────────────────────
  { id: 'mirror',           name: 'Mirror',            img: BLUE_ATMOS, trail: 'negocios',   description: 'Trabalhando sua Persona' },
  { id: 'target',           name: 'Target',            img: BLUE_ATMOS, trail: 'negocios',   description: 'Desenvolvendo sua Demanda' },
  { id: 'lean_model',       name: 'Lean Model',        img: BLUE_ATMOS, trail: 'negocios',   description: 'Gestão do Negócio' },
  { id: 'profit',           name: 'Profit',            img: BLUE_ATMOS, trail: 'negocios',   description: 'Monetização Criativa' },
  { id: 'fit',              name: 'Fit',               img: BLUE_ATMOS, trail: 'negocios',   description: 'Product Market Fit' },
  { id: 'expedicao_global', name: 'Expedição Global',  img: BLUE_ATMOS, trail: 'negocios',   description: 'Expansão de Negócio' },

  // ─── Trilha: AI — cursos novos ───────────────────────────────────────────
  { id: 'protocolo_321', name: 'Protocolo 3-2-1', img: BLUE_ATMOS, trail: 'ai', description: 'Fundamentos da Criação com IA' },
  { id: 'syntax',        name: 'Syntax',          img: BLUE_ATMOS, trail: 'ai', description: 'Criação de Texto com IA' },
  { id: 'cinematic',     name: 'Cinematic',       img: BLUE_ATMOS, trail: 'ai', description: 'Criação de Vídeos com IA' },
  { id: 'maestro',       name: 'Maestro',         img: BLUE_ATMOS, trail: 'ai', description: 'Criação de Músicas com IA' },
  { id: 'codexia',       name: 'Codexia',         img: BLUE_ATMOS, trail: 'ai', description: 'WebApps com IA' },

  // ─── Trilha: Design — cursos novos ──────────────────────────────────────
  { id: 'idea',          name: 'Idea',            img: BLUE_ATMOS, trail: 'design',     description: 'Geração e Seleção de Ideias' },

  // ─── Trilha: Estratégia — cursos novos ──────────────────────────────────
  { id: 'search',        name: 'Search',          img: BLUE_ATMOS, trail: 'estrategia', description: 'Posicionamento de Marca' },
  { id: 'arquivo_aberto',name: 'Arquivo Aberto',  img: BLUE_ATMOS, trail: 'estrategia', description: 'Criação Editorial' },
  { id: 'atlas_replay',  name: 'Atlas Replay',    img: BLUE_ATMOS, trail: 'estrategia', description: 'Estratégia de Conteúdo' },
];

// Defaults: 1 por trilha (AI · Design · Estratégia)
const DEFAULT_IDS = ['ai_first', 'sandbox', 'standout'];
// Fallback preserva o id original — evita chaves duplicadas quando múltiplos
// ids inválidos cairiam todos em ALL_COURSES[0] (mesmo id → React warning).
function getCourse(id: string): Course {
  return ALL_COURSES.find(c => c.id === id) ?? { id, name: id, img: '', description: '', trail: 'ai' };
}

// ─── Inline SVG path data (from Figma exports) ────────────────────────────────
const P = {
  calS_frame: "M23.4844 1.90088H20.985V2.93213H22.9688V6.11864H1.03125V2.93213H2.95322V1.90088H0.515625C0.230859 1.90088 0 2.13174 0 2.4165V23.3776C0 23.6624 0.230859 23.8932 0.515625 23.8932H23.4844C23.7691 23.8932 24 23.6624 24 23.3776V2.4165C24 2.13169 23.7691 1.90088 23.4844 1.90088ZM22.9688 22.8619H1.03125V7.14985H22.9688V22.8619Z",
  calS_h1:    "M11.4181 1.8999H3.98438V2.93115H11.4181V1.8999Z",
  calS_h2:    "M19.9541 1.90088H12.4497V2.93213H19.9541V1.90088Z",
  calS_r1:    "M3.46875 4.45758C3.18398 4.45758 2.95312 4.22672 2.95312 3.94195V0.533203C2.95312 0.248438 3.18398 0.0175781 3.46875 0.0175781C3.75352 0.0175781 3.98438 0.248438 3.98438 0.533203V3.94195C3.98438 4.22677 3.75352 4.45758 3.46875 4.45758Z",
  calS_r2:    "M11.9341 4.45758C11.6493 4.45758 11.4185 4.22672 11.4185 3.94195V0.533203C11.4185 0.248438 11.6493 0.0175781 11.9341 0.0175781C12.2188 0.0175781 12.4497 0.248438 12.4497 0.533203V3.94195C12.4497 4.22677 12.2188 4.45758 11.9341 4.45758Z",
  calS_r3:    "M20.4697 4.43991C20.185 4.43991 19.9541 4.20905 19.9541 3.92428V0.515625C19.9541 0.230859 20.185 0 20.4697 0C20.7545 0 20.9854 0.230859 20.9854 0.515625V3.92433C20.9854 4.20905 20.7545 4.43991 20.4697 4.43991Z",
  calS_grid:  "M19.5609 9.74268H4.36816C4.0834 9.74268 3.85254 9.97354 3.85254 10.2583V19.5695C3.85254 19.8542 4.0834 20.0851 4.36816 20.0851H19.5609C19.8456 20.0851 20.0765 19.8542 20.0765 19.5695V10.2583C20.0765 9.97349 19.8457 9.74268 19.5609 9.74268ZM4.88379 13.8776H7.65073V15.9501H4.88379V13.8776ZM8.68198 13.8776H11.4489V15.9501H8.68198V13.8776ZM11.4489 12.8464H8.68198V10.7739H11.4489V12.8464ZM12.4802 10.7739H15.2471V12.8464H12.4802V10.7739ZM11.4489 16.9813V19.0538H8.68198V16.9813H11.4489ZM12.4802 16.9813H15.2471V19.0538H12.4802V16.9813ZM12.4802 15.9501V13.8776H15.2471V15.9501H12.4802ZM16.2784 13.8776H19.0453V15.9501H16.2784V13.8776ZM19.0453 12.8464H16.2784V10.7739H19.0453V12.8464ZM7.65073 10.7739V12.8464H4.88379V10.7739H7.65073ZM4.88379 16.9813H7.65073V19.0538H4.88379V16.9813ZM16.2784 19.0538V16.9813H19.0453V19.0538H16.2784Z",
  calL_frame: "M31.3125 2.53369H27.9801V3.90869H30.625V8.15738H1.375V3.90869H3.93762V2.53369H0.6875C0.307813 2.53369 0 2.8415 0 3.22119V31.1693C0 31.549 0.307813 31.8568 0.6875 31.8568H31.3125C31.6922 31.8568 32 31.549 32 31.1693V3.22119C32 2.84144 31.6922 2.53369 31.3125 2.53369ZM30.625 30.4818H1.375V9.53231H30.625V30.4818Z",
  calL_h1:    "M15.2243 2.53369H5.31263V3.90869H15.2243V2.53369Z",
  calL_h2:    "M26.6051 2.53369H16.5993V3.90869H26.6051V2.53369Z",
  calL_r1:    "M4.62513 5.94294C4.24544 5.94294 3.93763 5.63513 3.93763 5.25544V0.710437C3.93763 0.33075 4.24544 0.0229375 4.62513 0.0229375C5.00481 0.0229375 5.31263 0.33075 5.31263 0.710437V5.25544C5.31263 5.63519 5.00481 5.94294 4.62513 5.94294Z",
  calL_r2:    "M15.9117 5.94294C15.5321 5.94294 15.2242 5.63513 15.2242 5.25544V0.710437C15.2242 0.33075 15.5321 0.0229375 15.9117 0.0229375C16.2914 0.0229375 16.5993 0.33075 16.5993 0.710437V5.25544C16.5993 5.63519 16.2914 5.94294 15.9117 5.94294Z",
  calL_r3:    "M27.2926 5.91987C26.9129 5.91987 26.6051 5.61206 26.6051 5.23237V0.6875C26.6051 0.307813 26.9129 0 27.2926 0C27.6722 0 27.9801 0.307813 27.9801 0.6875V5.23244C27.9801 5.61206 27.6722 5.91987 27.2926 5.91987Z",
  calL_grid:  "M26.0803 12.9895H5.82331C5.44362 12.9895 5.13581 13.2973 5.13581 13.677V26.0919C5.13581 26.4716 5.44362 26.7794 5.82331 26.7794H26.0802C26.4599 26.7794 26.7677 26.4716 26.7677 26.0919V13.677C26.7678 13.2973 26.46 12.9895 26.0803 12.9895ZM6.51081 18.5028H10.2001V21.266H6.51081V18.5028ZM11.5751 18.5028H15.2643V21.266H11.5751V18.5028ZM15.2643 17.1278H11.5751V14.3644H15.2643V17.1278ZM16.6393 14.3645H20.3286V17.1278H16.6393V14.3645ZM15.2643 22.641V25.4043H11.5751V22.641H15.2643ZM16.6393 22.641H20.3286V25.4043H16.6393V22.641ZM16.6393 21.266V18.5028H20.3286V21.266H16.6393ZM21.7036 18.5028H25.3928V21.266H21.7036V18.5028ZM25.3928 17.1278H21.7036V14.3644H25.3928V17.1278ZM10.2001 14.3645V17.1278H6.51081V14.3645H10.2001ZM6.51081 22.641H10.2001V25.4043H6.51081V22.641ZM21.7036 25.4043V22.641H25.3928V25.4043H21.7036Z",
  check:      "M3.68333 7.80833L0 4.125L0.891667 3.23333L3.68333 6.025L9.70833 0L10.6 0.891667L3.68333 7.80833Z",
  fractal:    "M24 84C20.7 84 17.875 82.825 15.525 80.475C13.175 78.125 12 75.3 12 72C12 68.7 13.175 65.875 15.525 63.525C17.875 61.175 20.7 60 24 60C27.3 60 30.125 61.175 32.475 63.525C34.825 65.875 36 68.7 36 72C36 75.3 34.825 78.125 32.475 80.475C30.125 82.825 27.3 84 24 84ZM33.9 118.2L25.5 109.8L51.6 83.7L60 92.1L33.9 118.2ZM51.9 60L25.8 33.9L34.2 25.5L60.3 51.6L51.9 60ZM72 132C68.7 132 65.875 130.825 63.525 128.475C61.175 126.125 60 123.3 60 120C60 116.7 61.175 113.875 63.525 111.525C65.875 109.175 68.7 108 72 108C75.3 108 78.125 109.175 80.475 111.525C82.825 113.875 84 116.7 84 120C84 123.3 82.825 126.125 80.475 128.475C78.125 130.825 75.3 132 72 132ZM72 36C68.7 36 65.875 34.825 63.525 32.475C61.175 30.125 60 27.3 60 24C60 20.7 61.175 17.875 63.525 15.525C65.875 13.175 68.7 12 72 12C75.3 12 78.125 13.175 80.475 15.525C82.825 17.875 84 20.7 84 24C84 27.3 82.825 30.125 80.475 32.475C78.125 34.825 75.3 36 72 36ZM92.1 60.3L83.7 51.6L110.1 25.5L118.5 33.9L92.1 60.3ZM110.1 118.2L84 92.1L92.4 83.7L118.5 109.8L110.1 118.2ZM120 84C116.7 84 113.875 82.825 111.525 80.475C109.175 78.125 108 75.3 108 72C108 68.7 109.175 65.875 111.525 63.525C113.875 61.175 116.7 60 120 60C123.3 60 126.125 61.175 128.475 63.525C130.825 65.875 132 68.7 132 72C132 75.3 130.825 78.125 128.475 80.475C126.125 82.825 123.3 84 120 84Z",
  google:     "M8.32 7.28V9.46667H13.5467C13.3867 10.6933 12.978 11.5913 12.3553 12.222C11.5907 12.9867 10.4 13.822 8.32 13.822C5.102 13.822 2.58667 11.2267 2.58667 8.00867C2.58667 4.79067 5.102 2.19533 8.32 2.19533C10.0533 2.19533 11.3247 2.88 12.258 3.76L13.796 2.222C12.498 0.96 10.7553 0 8.32 0C3.91133 0 0.204667 3.59133 0.204667 8C0.204667 12.4087 3.91133 16 8.32 16C10.702 16 12.498 15.218 13.902 13.76C15.342 12.32 15.7953 10.2847 15.7953 8.64867C15.7953 8.142 15.76 7.67067 15.68 7.28H8.32Z",
  notifBell:  "M1.33333 6.66663C1.33333 5.55552 1.58056 4.53608 2.075 3.6083C2.56944 2.68052 3.23333 1.91108 4.06667 1.29997L4.85 2.36663C4.18333 2.85552 3.65278 3.47219 3.25833 4.21663C2.86389 4.96108 2.66667 5.77775 2.66667 6.66663H1.33333ZM13.3333 6.66663C13.3333 5.77775 13.1361 4.96108 12.7417 4.21663C12.3472 3.47219 11.8167 2.85552 11.15 2.36663L11.9333 1.29997C12.7667 1.91108 13.4306 2.68052 13.925 3.6083C14.4194 4.53608 14.6667 5.55552 14.6667 6.66663H13.3333ZM2.66667 12.6666V11.3333H4V6.66663C4 5.74441 4.27778 4.92497 4.83333 4.2083C5.38889 3.49163 6.11111 3.02219 7 2.79997V2.3333C7 2.05552 7.09722 1.81941 7.29167 1.62497C7.48611 1.43052 7.72222 1.3333 8 1.3333C8.27778 1.3333 8.51389 1.43052 8.70833 1.62497C8.90278 1.81941 9 2.05552 9 2.3333V2.79997C9.88889 3.02219 10.6111 3.49163 11.1667 4.2083C11.7222 4.92497 12 5.74441 12 6.66663V11.3333H13.3333V12.6666H2.66667ZM8 14.6666C7.63333 14.6666 7.31944 14.5361 7.05833 14.275C6.79722 14.0139 6.66667 13.7 6.66667 13.3333H9.33333C9.33333 13.7 9.20278 14.0139 8.94167 14.275C8.68056 14.5361 8.36667 14.6666 8 14.6666ZM5.33333 11.3333H10.6667V6.66663C10.6667 5.9333 10.4056 5.30552 9.88333 4.7833C9.36111 4.26108 8.73333 3.99997 8 3.99997C7.26667 3.99997 6.63889 4.26108 6.11667 4.7833C5.59444 5.30552 5.33333 5.9333 5.33333 6.66663V11.3333Z",
};

// ─── Animation variants ───────────────────────────────────────────────────────
const forwardVariants  = { initial: { opacity: 0, y: 20  }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };
const backwardVariants = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20  } };
const transition = { duration: 0.26, ease: [0.4, 0, 0.2, 1] as const };

// ─── QuestionHeader ──�����───�����───────────��──�����─────────────────────────────────────
function QuestionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-[clamp(6px,1.2dvh,12px)] w-full">
      {/* Ajuste 2 — títulos sempre font-medium (500) */}
      <h1 className="text-[#f2f2f2]" style={{ fontSize: 'clamp(20px,3dvh,32px)', fontWeight: 500, lineHeight: 1.3 }}>{title}</h1>
      {subtitle && <p className="text-[#a4a4a4]" style={{ fontSize: 'clamp(13px,1.8dvh,16px)', fontWeight: 400, lineHeight: 1.5 }}>{subtitle}</p>}
    </div>
  );
}

// ─── ActionButtons ────────────────────────────────────────────────────────────
function ActionButtons({ onContinue, onSkip, continueDisabled, continueLabel = 'Continuar', showSkip = false }: {
  onContinue: () => void; onSkip?: () => void; continueDisabled?: boolean; continueLabel?: string; showSkip?: boolean;
}) {
  return (
    <div className="flex items-center justify-start gap-3 w-full pt-2">
      {showSkip && (
        <Button variant="ghost-plain" size="sm" onClick={onSkip}>Pular</Button>
      )}
      <Button variant="primary" size="md" onClick={onContinue} disabled={continueDisabled}>
        {continueLabel}
      </Button>
    </div>
  );
}

// ─── Welcome ──────────────────────────────────────────────────────────────────
function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 py-[clamp(20px,5dvh,64px)] gap-[clamp(20px,6dvh,64px)]">
      <div className="rounded-full overflow-hidden shrink-0" style={{ width: 'min(min(204px,55vw),28dvh)', height: 'min(min(204px,55vw),28dvh)', border: '2px solid #303030' }}>
        <img src={imgBabel} alt="Overlens" className="w-full h-full object-cover" style={{ transform: 'scale(1.1)' }} />
      </div>
      <div className="flex flex-col items-center gap-10 text-center max-w-[376px] w-full">
        <p className="text-white" style={{ fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 500, lineHeight: 1.4 }}>
          Antes de criar sua conta, vamos montar sua jornada na Overlens.
        </p>
        <div className="w-full flex justify-center">
          <Button variant="primary" size="md" onClick={onStart}>Começar</Button>
        </div>
      </div>
    </div>
  );
}

// ─── Question ─────────────────────────────────────────────────────────────────
function QuestionScreen({ screen, answer, onSelect, onContinue, onSkip }: {
  screen: QuestionDef; answer?: OptionId; onSelect: (o: OptionId) => void; onContinue: () => void; onSkip: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 py-[clamp(12px,3dvh,40px)] w-full">
      <div className="w-full flex flex-col gap-[clamp(12px,3dvh,32px)]">
        <QuestionHeader title={screen.title} subtitle={screen.subtitle} />
        <div className="flex flex-col gap-[clamp(6px,1.5dvh,12px)]">
          {screen.options.map(o => (
            <OptionCard
              key={o.id}
              id={o.id}
              label={o.label}
              selected={answer === o.id}
              onClick={() => onSelect(o.id)}
            />
          ))}
        </div>
        <ActionButtons onContinue={onContinue} onSkip={onSkip} continueDisabled={!answer} showSkip={screen.skipAllowed} />
      </div>
    </div>
  );
}

// ─── Loading ──────────────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div className="flex-1 flex flex-col items-center gap-[clamp(12px,4dvh,32px)] pt-[clamp(24px,6dvh,64px)]">
      <div className="flex gap-2 items-center">
        {[0,1,2].map(i => (
          <motion.div key={i} className="w-2 h-2 bg-[#d4d4d4] rounded-full"
            animate={{ opacity: [0.2,1,0.2], scale: [0.8,1,0.8] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-[#d4d4d4]" style={{ fontSize: '18px', fontWeight: 500 }}>Montando sua trilha personalizada</p>
        <p className="text-[#606060]" style={{ fontSize: '14px', fontWeight: 400 }}>Analisando suas respostas...</p>
      </div>
    </div>
  );
}

// ─── Summary ──────────────────────────────────────────────────────────────────
function SummaryScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 py-[clamp(12px,3dvh,40px)] w-full">
      <div className="w-full flex flex-col gap-[clamp(12px,3dvh,32px)]">
        <div className="flex flex-col gap-[clamp(8px,2dvh,20px)]">
          <h1 className="text-[#f2f2f2]" style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 500, lineHeight: 1.4 }}>Pronto para começar?</h1>
          <p className="text-[#f2f2f2]" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
            Com base nas suas respostas, entendemos como você aprende melhor hoje, o tipo de resultado que você busca e o ritmo mais saudável para sua evolução.
          </p>
        </div>
        <div className="w-full rounded-lg overflow-hidden bg-[#202020]" style={{ height: 'clamp(200px, 65vw, 280px)' }}>
          <img src={imgBabel} alt="Trilha personalizada" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2">
          <p className="text-[#a4a4a4]" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>Vamos montar sua trilha inicial.</p>
          <Button variant="primary" size="md" onClick={onStart} className="self-start shrink-0">
            Começar
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Course Card ──────────────────────────────────────────────────────────────
function CourseCard({ course, onSwap, disabled }: { course: Course; onSwap: () => void; disabled?: boolean }) {
  return (
    <div
      className={`group flex flex-col gap-2 w-full transition-transform duration-150 ease-out select-none ${disabled ? 'opacity-40 pointer-events-none cursor-not-allowed' : 'cursor-pointer active:scale-[0.96]'}`}
      onClick={disabled ? undefined : onSwap}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onKeyDown={e => !disabled && e.key === 'Enter' && onSwap()}
    >
      {/* Capa */}
      <div className="relative rounded-lg overflow-hidden w-full transition-[border-color] duration-150 group-hover:border-white/20 group-active:border-white/60" style={{ aspectRatio: '217 / 327', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="absolute inset-0 bg-[#202020]" />
        <img src={course.img} alt={course.name} className="absolute inset-0 w-full h-full object-cover transition-[filter] duration-200 group-hover:brightness-[1.07] group-active:brightness-90" />

        {/* Fade preto na base */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />

        {/* Mobile — nome + pill "Substituir" na mesma linha */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex flex-col items-start gap-1.5 sm:hidden pointer-events-none">
          <span className="text-[#c0c0c0] uppercase tracking-wide truncate pl-1" style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.09em' }}>{course.name}</span>
          <span className="shrink-0 flex items-center gap-1 px-2.5 rounded-full text-[#a4a4a4] border border-white/10" style={{ fontSize: '11px', fontWeight: 500, height: '22px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M1.5 4H10M8 1.5 10.5 4 8 6.5M10.5 8H2M4.5 5.5 2 8l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Substituir
          </span>
        </div>

        {/* Desktop — overlay button secundário */}
        <button
          onClick={e => { e.stopPropagation(); onSwap(); }}
          className="hidden sm:flex items-center gap-1 absolute bottom-2.5 right-2.5 z-10 px-3 rounded-full text-[#a4a4a4] hover:text-white border border-white/10 hover:border-white/25 transition-colors"
          style={{ fontSize: '11px', fontWeight: 500, height: '26px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M1.5 4H10M8 1.5 10.5 4 8 6.5M10.5 8H2M4.5 5.5 2 8l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Substituir
        </button>
      </div>

      {/* Desktop — nome + descrição */}
      <div className="hidden sm:flex flex-col items-center gap-0.5 text-center w-full">
        <span className="text-[#a4a4a4] uppercase tracking-wide whitespace-nowrap" style={{ fontSize: '12px', fontWeight: 500 }}>{course.name}</span>
        {course.description ? (
          <span className="text-[#484848] leading-tight" style={{ fontSize: '11px', fontWeight: 400 }}>{course.description}</span>
        ) : null}
      </div>
    </div>
  );
}

// ─── Recommendations ──────────────────────────────────────────────────────────
function RecommendationsScreen({ recommendedIds, onAdvance, onOpenModal }: {
  recommendedIds: string[]; onAdvance: () => void; onOpenModal: (slotIndex: number) => void;
}) {
  const courses = recommendedIds.map(getCourse);
  return (
    <div className="flex-1 flex flex-col items-center w-full py-[clamp(12px,3dvh,40px)]">
      <div className="flex flex-col items-start text-left gap-[clamp(4px,1dvh,10px)] pb-[clamp(12px,3dvh,32px)] w-full sm:items-center sm:text-center px-[8px] pt-[0px] pb-[23px]">
        <p className="text-[#505050] uppercase tracking-widest sm:hidden" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em' }}>Suas trilhas</p>
        <h1 className="text-white" style={{ fontSize: 'clamp(20px,3.5vw,32px)', fontWeight: 500, lineHeight: 1.25, letterSpacing: '-0.3px', maxWidth: '724px' }}>
          Recomendadas para você
        </h1>
        <p className="text-[#505050]" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5, maxWidth: '498px' }}>
          Baseado no seu perfil. Você pode afinar depois.
        </p>
      </div>
      {/*
        Mobile  → carrossel horizontal, alinhado à esquerda, drag-to-scroll
        Desktop → row centralizado sem overflow (os 3 cards cabem na tela)
      */}
      <div
        className="flex gap-2 items-start w-full self-stretch overflow-x-auto pb-3
                   justify-start pl-2
                   sm:justify-center sm:pl-0 sm:overflow-hidden sm:max-w-[560px] sm:mx-auto
                   [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType:          'x mandatory',
          scrollPaddingLeft:       '8px',
          scrollBehavior:          'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth:          'none',
          msOverflowStyle:         'none',
          cursor:                  'grab',
        }}
        ref={el => {
          if (!el || (el as any)._dragInit) return;
          (el as any)._dragInit = true;
          let down = false, startX = 0, scrollLeft = 0;
          el.addEventListener('mousedown', e => {
            down = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft;
            el.style.cursor = 'grabbing'; e.preventDefault();
          });
          el.addEventListener('mouseup',    () => { down = false; el.style.cursor = 'grab'; });
          el.addEventListener('mouseleave', () => { down = false; el.style.cursor = 'grab'; });
          el.addEventListener('mousemove',  e => {
            if (!down) return;
            e.preventDefault();
            el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX);
          });
        }}
      >
        {courses.map((c, idx) => (
          <div
            key={c.id}
            className="sm:flex-1 sm:min-w-0"
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              /* Mobile: ~50% vw cada card, 3 cards overflow naturally para scroll */
              width: 'clamp(120px, calc(50vw - 16px), 210px)',
            }}
          >
            <CourseCard course={c} onSwap={() => onOpenModal(idx)} />
          </div>
        ))}
        {/* Spacer: 8px à direita no mobile; oculto no desktop */}
        <div aria-hidden className="sm:hidden" style={{ flexShrink: 0, width: '8px' }} />
      </div>
      <div className="flex flex-col items-start gap-2 mt-[clamp(12px,3dvh,32px)] w-full px-2 sm:px-0 sm:items-center">
        <Button
          variant="primary"
          size="md"
          onClick={onAdvance}
          rightIcon={
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        >
          Avançar
        </Button>
        {/* Regra 3 — text-xs (12px) */}
        <p className="text-[#555555] text-xs">Você pode afinar suas trilhas depois</p>
      </div>
    </div>
  );
}

// ─── Lock Icon ────────────────────────────────────────────────────────────────
function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="6.5" width="10" height="7" rx="1.5" fill="white" fillOpacity="0.8" />
      <path d="M4 6.5V4.5a3 3 0 0 1 6 0v2" stroke="white" strokeOpacity="0.8" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ─── Swap Modal ───────���──���────────────────────────────────────────────────────
// slotIndex = qual dos 3 slots o usuário clicou (0, 1 ou 2).
// Seleção unitária (radio): substitui APENAS aquele slot; outros permanecem intocados.
function SwapModal({ recommendedIds, slotIndex, onClose, onApply }: {
  recommendedIds: string[];
  slotIndex: number;
  onClose: () => void;
  onApply: (slotIndex: number, newCourseId: string) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);

  // Curso que está no slot sendo trocado agora
  const currentCourse = getCourse(recommendedIds[slotIndex]);

  // Apenas cursos da MESMA TRILHA do slot → filtro por trail
  // AI=8 · Design=6 · Estratégia=6 · Negócios=3
  const trailCourses = ALL_COURSES.filter(c => c.trail === currentCourse.trail);
  const trailLabel   = TRAIL_LABELS[currentCourse.trail];

  // Os outros dois slots — bloqueados (já em uso em posição diferente)
  const otherIds = recommendedIds.filter((_, i) => i !== slotIndex);

  const toggle = (id: string) => {
    if (otherIds.includes(id)) return; // não pode selecionar cursos de outros slots
    setPicked(prev => prev === id ? null : id); // radio: um de cada vez
  };

  const apply = () => {
    if (!picked) return;
    onApply(slotIndex, picked); // pai substitui APENAS o slot correto
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/85" onClick={onClose} aria-hidden />
      <motion.div
        className="absolute inset-0 sm:relative sm:inset-auto w-full sm:max-w-[680px] sm:rounded-[12px] sm:max-h-[90vh] flex flex-col gap-5 overflow-y-auto [&::-webkit-scrollbar]:hidden"
        style={{ background: '#1e1e1e', padding: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        initial={{ scale: 0.96, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 16 }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-white" style={{ fontSize: '20px', fontWeight: 500 }}>Substituir trilha</h2>
            <button onClick={onClose} className="text-[#666] hover:text-white transition-colors cursor-pointer p-2">
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {/* Regra 3 — text-xs; mostra trilha e curso atual */}
          <p className="text-[#888] text-xs" style={{ lineHeight: 1.4 }}>
            <span className="text-[#555]">{trailLabel}</span>
            {' · '}
            Substituindo <span className="text-[#d4d4d4]">{currentCourse.name}</span>
          </p>
        </div>

        {/* Grid — máx 8 cursos da trilha; 1 SEMPRE é o atual; Regra 4: sem ring */}
        {/* Colunas: ≤3 → 3 cols; 4–8 → 2 cols mobile / 4 cols sm+ */}
        {(() => {
          const MAX = 8;
          // Exclui cursos já em uso em outros slots — evita redundância "Atual + Em uso"
          const available = trailCourses.filter(c => !otherIds.includes(c.id));
          // Dos disponíveis, pega até 8 garantindo que o atual sempre apareça
          let visible = available;
          if (available.length > MAX) {
            const first8 = available.slice(0, MAX);
            if (first8.some(c => c.id === currentCourse.id)) {
              visible = first8;
            } else {
              visible = [...first8.slice(0, MAX - 1), currentCourse];
            }
          }
          return (
        <div className={`grid gap-2 ${visible.length <= 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
          {visible.map(course => {
            const selected  = picked === course.id;
            const isCurrent = course.id === currentCourse.id && !selected;

            return (
              <button
                key={course.id}
                onClick={() => toggle(course.id)}
                className={`relative overflow-hidden rounded-lg transition-all duration-150
                  ${selected  ? 'cursor-pointer opacity-100'
                  : isCurrent ? 'cursor-pointer opacity-60'
                  :             'cursor-pointer hover:opacity-90 opacity-80'}`}
                style={{
                  aspectRatio: '204 / 307',
                  background: '#2a2a2a',
                  border: selected  ? '2px solid #ffffff'
                        : isCurrent ? '2px solid #555'
                        : '2px solid transparent',
                }}
              >
                <img src={course.img} alt={course.name} className="absolute inset-0 w-full h-full object-cover" />

                {/* Badge "Atual" para o curso que está sendo substituído */}
                {isCurrent && (
                  <div className="absolute inset-x-0 bottom-0 pb-2 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent pt-4">
                    <span className="text-white/60 text-xs text-[#ffffff]" style={{ fontWeight: 500 }}>Atual</span>
                  </div>
                )}

                {/* Check de seleção — Regra 5: cápsula rounded-full, sem número */}
                {selected && (
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.15, ease: 'backOut' }}
                    className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center"
                  >
                    <svg width="10" height="8" viewBox="0 0 10.6 7.808" fill="none">
                      <path d={P.check} fill="#111" />
                    </svg>
                  </motion.div>
                )}

                {/* Nome sobreposto no topo */}
                <div className="absolute inset-x-0 top-0 px-1.5 pt-1.5">
                  <span
                    className="block text-white/70 uppercase leading-tight"
                    style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.06em' }}
                  >
                    {course.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
          ); // fim do return do IIFE
        })()} {/* fim do IIFE */}

        {/* Footer — feedback limpo, sem "X de 3" */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-[#888] text-xs">
            {picked
              ? <><span className="text-[#686868]">Selecionado: </span><span className="text-[#d4d4d4]">{getCourse(picked).name}</span></>
              : 'Nenhuma trilha selecionada'}
          </span>
          <Button variant="primary" size="md" onClick={apply} disabled={!picked}>
            Aplicar
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Small calendar SVG ───────────────────────────────────────────────────────
function CalSmall() {
  return (
    <svg viewBox="0 0 24 23.8932" width="24" height="24" fill="none">
      <path d={P.calS_frame} fill="#5E5E5E" /><path d={P.calS_h1} fill="#A4A4A4" /><path d={P.calS_h2} fill="#A4A4A4" />
      <path d={P.calS_r1} fill="#A4A4A4" /><path d={P.calS_r2} fill="#A4A4A4" /><path d={P.calS_r3} fill="#A4A4A4" />
      <path d={P.calS_grid} fill="#5E5E5E" />
    </svg>
  );
}

// ─── Large calendar SVG ───────────────────────────────────────────────────────
function CalLarge() {
  return (
    <svg viewBox="0 0 32 31.8568" width="32" height="32" fill="none">
      <path d={P.calL_frame} fill="#5E5E5E" /><path d={P.calL_h1} fill="#A4A4A4" /><path d={P.calL_h2} fill="#A4A4A4" />
      <path d={P.calL_r1} fill="#A4A4A4" /><path d={P.calL_r2} fill="#A4A4A4" /><path d={P.calL_r3} fill="#A4A4A4" />
      <path d={P.calL_grid} fill="#5E5E5E" />
    </svg>
  );
}

// ─── Shared UI atoms ──────────────────────────────────────���───────────────────
function GoogleBtn() {
  return (
    <div className="w-full h-10 bg-[#202020] rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-[#2a2a2a] transition-colors">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none"><path d={P.google} fill="white" /></svg>
      <span className="text-[#d4d4d4]" style={{ fontSize: '14px', fontWeight: 500 }}>Google</span>
    </div>
  );
}

function OrDivider() {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 h-px bg-[#202020]" />
      <span className="text-[#a4a4a4] shrink-0" style={{ fontSize: '14px' }}>ou</span>
      <div className="flex-1 h-px bg-[#202020]" />
    </div>
  );
}

function Terms() {
  return (
    <div className="flex flex-col gap-3 text-center text-[#a4a4a4] text-xs" style={{ lineHeight: 1.5 }}>
      <p>Ao entrar na Overlens, você concorda com os nossos Termos e política de Privacidade.</p>
      <p>Este site é protegido pela reCAPTCHA Enterprise. Aplicam-se a Política de Privacidade e os Termos de Uso do Google.</p>
    </div>
  );
}

function DarkInput({ placeholder, type = 'text', value, onChange }: { placeholder: string; type?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative w-full" style={{ maxWidth: '320px', height: '60px' }}>
      <div className="absolute inset-0 bg-[#101010] rounded-[4px] border border-[#303030]" />
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="relative z-10 w-full h-full bg-transparent px-6 text-[#a4a4a4] placeholder-[#a4a4a4] outline-none"
        style={{ fontSize: '16px', fontWeight: 400 }}
      />
    </div>
  );
}

// ─── Capabilities List Screen ─────────────────────────────────────────────────
// Regra 4: ícones monocromáticos (#a4a4a4), sem verde; Regra 5: ícones line 400
const CAPABILITIES = [
  {
    title: 'Criar com clareza',
    desc: 'Transformar ideias confusas em conceitos criativos bem definidos.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5a5.25 5.25 0 0 1 3.44 9.22c-.48.43-.69.97-.69 1.53V13.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.25c0-.56-.21-1.1-.69-1.53A5.25 5.25 0 0 1 9 1.5Z" stroke="#a4a4a4" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7 15.75h4" stroke="#a4a4a4" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Usar ferramentas de IA com propósito',
    desc: 'Não só gerar, mas direcionar, refinar e decidir melhor.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#a4a4a4" strokeWidth="1.3"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="#a4a4a4" strokeWidth="1.3"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="#a4a4a4" strokeWidth="1.3"/>
        <path d="M13 10v6M10 13h6" stroke="#a4a4a4" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Pensar como profissional',
    desc: 'Entender contexto, objetivo e impacto antes de criar.',
    icon: (
      /* Alvo — foco, clareza de objetivo */
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="#a4a4a4" strokeWidth="1.3"/>
        <circle cx="9" cy="9" r="4" stroke="#a4a4a4" strokeWidth="1.3"/>
        <circle cx="9" cy="9" r="1.2" fill="#a4a4a4"/>
      </svg>
    ),
  },
  {
    title: 'Construir projetos reais',
    desc: 'Aplicar o aprendizado em desafios práticos desde o início.',
    icon: (
      /* Camadas empilhadas — construção com profundidade e estrutura */
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2L16 6L9 10L2 6Z" stroke="#a4a4a4" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M2 9.5L9 13.5L16 9.5" stroke="#a4a4a4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 13L9 17L16 13" stroke="#a4a4a4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Criar o hábito de aprender e evoluir',
    desc: 'Com metas semanais, desafios e progressão visível.',
    icon: (
      /* Tendência crescente — progressão, evolução contínua */
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2.5 13.5L6.5 10L10 12L15 5.5" stroke="#a4a4a4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5 5.5L15 5.5L15 9" stroke="#a4a4a4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function CapabilitiesListScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 py-[clamp(12px,3dvh,40px)] w-full">
      <div className="w-full max-w-[600px] flex flex-col gap-[clamp(12px,3.5dvh,40px)]">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Regra 4: badge sem verde — cinza neutro | Ajuste 1: whitespace-nowrap */}
          <div className="inline-flex">
            <span
              className="px-3 py-1 rounded-full whitespace-nowrap"
              style={{ background: '#181818', border: '1px solid #282828', fontSize: '11px', fontWeight: 500, color: '#a4a4a4', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}
            >
              Personalizado para você
            </span>
          </div>
          {/* Ajuste 2 — font-medium (500) */}
          <h1 className="text-white" style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.5px' }}>
            Veja o que você será<br />capaz de fazer
          </h1>
          <p className="text-[#606060]" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
            Com base nas suas respostas, esses são seus próximos marcos.
          </p>
        </motion.div>

        {/* Cards — Regra 4: sem glow, borda sólida, fundo sólido */}
        <ul className="flex flex-col divide-y divide-[#1a1a1a]">
          {CAPABILITIES.map((item, idx) => (
            <motion.li
              key={item.title}
              className="flex gap-4 items-start py-[clamp(6px,1.2dvh,16px)]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.15 + idx * 0.07, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Ícone — aria-hidden, pois o texto adjacente já descreve o item */}
              <div
                className="shrink-0 flex items-center justify-center rounded-full"
                style={{ width: '36px', height: '36px', background: '#1e1e1e', border: '1px solid #383838' }}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="text-[#f2f2f2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.2px' }}>
                  {item.title}
                </p>
                <p className="text-[#606060] text-xs" style={{ lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* CTA — Regra 2: h-10 */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Button variant="primary" size="md" onClick={onAdvance}>
            Quero isso
          </Button>
        </motion.div>

      </div>
    </div>
  );
}

// ─── Notification Permission Screen ───────────────────────────────────────────
const NOTIF_PERKS = [
  'Lembretes no ritmo que você escolheu',
  'Avisos de novos desafios e conquistas',
  'Você pode desativar quando quiser',
];

function NotificationPermissionScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 py-[clamp(12px,3dvh,40px)] w-full">
      <div className="w-full max-w-[420px] flex flex-col gap-[clamp(12px,3.5dvh,40px)]">

        {/* ── Icon + Heading ── */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          

          <div className="flex flex-col gap-2">
            <h1 className="text-[#f2f2f2]" style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.5px' }}>
              Pratique hoje. Avance amanhã.
            </h1>
            <p className="text-[#a4a4a4]" style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.6 }}>
              Um lembrete simples pode ser o que separa quem começa de quem realmente avança.
            </p>
          </div>
        </motion.div>

        {/* ── Dialog ilustrativo — dark mode, não interativo ── */}
        <motion.div
          className="rounded-xl overflow-hidden w-full"
          style={{ background: '#1a1a1a', border: '1px solid #2e2e2e' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Barra de endereço */}
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{ background: '#141414', borderBottom: '1px solid #2e2e2e' }}
          >
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
              <rect x="1" y="6" width="9" height="6.5" rx="1" fill="#505050" />
              <path d="M3 6V3.8a2.5 2.5 0 0 1 5 0V6" stroke="#505050" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
            <span className="text-xs" style={{ color: '#606060', fontWeight: 400, letterSpacing: '0.01em' }}>
              overpass.com.br
            </span>
          </div>

          {/* Corpo do prompt */}
          <div className="flex flex-col gap-4 px-4 pt-4 pb-4">
            <div className="flex items-start gap-3">
              {/* App icon */}
              <div
                className="shrink-0 flex items-center justify-center rounded-lg"
                style={{ width: '32px', height: '32px', background: '#242424', border: '1px solid #333333' }}
              >
                <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
                  <path d={P.notifBell} fill="#606060" />
                </svg>
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-0.5 pt-0.5 min-w-0">
                <span className="text-xs" style={{ color: '#f2f2f2', fontWeight: 500, lineHeight: 1.4 }}>
                  overpass.com.br quer
                </span>
                <span className="text-xs" style={{ color: '#606060', fontWeight: 400, lineHeight: 1.4 }}>
                  Mostrar notificações
                </span>
              </div>
            </div>

            {/* Botões ilustrativos — pill, sem onClick */}
            <div className="flex items-center justify-end gap-2" aria-hidden="true">
              <span
                className="flex items-center justify-center rounded-full text-xs select-none"
                style={{ height: '28px', paddingLeft: '14px', paddingRight: '14px', color: '#a4a4a4', background: 'transparent', border: '1px solid #383838', fontWeight: 500 }}
              >
                Bloquear
              </span>
              <span
                className="flex items-center justify-center rounded-full text-xs select-none"
                style={{ height: '28px', paddingLeft: '14px', paddingRight: '14px', color: '#f2f2f2', background: '#2a2a2a', border: '1px solid #404040', fontWeight: 500 }}
              >
                Permitir
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Perks ── */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.36 }}
        >
          {NOTIF_PERKS.map((perk, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className="shrink-0 rounded-full flex items-center justify-center"
                style={{ width: '20px', height: '20px', background: '#1e1e1e', border: '1px solid #383838' }}
              >
                <svg viewBox="0 0 10.6 7.80833" width="8" height="7" fill="none">
                  <path d={P.check} fill="#a4a4a4" />
                </svg>
              </div>
              <span className="text-[#a4a4a4] text-xs">{perk}</span>
            </div>
          ))}
        </motion.div>

        {/* ── CTAs ── */}
        <motion.div
          className="flex items-center justify-start gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {/* Agora não — outline */}
          <Button variant="outline" size="md" onClick={onAdvance}>
            Hoje não
          </Button>

          {/* Ativar — primário */}
          <Button variant="primary" size="md" onClick={onAdvance}>
            Ativar
          </Button>
        </motion.div>

      </div>
    </div>
  );
}

// ─── Ofensiva Screen ──────────────────────────────────────────────────────────
function OfensivaScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 gap-[clamp(16px,5dvh,64px)] pt-[clamp(12px,3dvh,40px)]">
      {/* ── Animated carousel: 7 day-cards × 2 = seamless infinite loop ── */}
      <div className="relative overflow-hidden w-full shrink-0" style={{ height: 'clamp(140px, 26dvh, 200px)', maxWidth: '393.5px', margin: '0 auto' }}>
        {/* Estático — hoje no centro; dias adjacentes cortados pelo overflow-hidden do pai */}
        {(() => {
          const DAYS_PT = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
          const todayIdx  = new Date().getDay(); // 0=Dom … 6=Sáb
          const todayName = DAYS_PT[todayIdx];
          // Coloca hoje na posição central (índice 3 de 7), dias anteriores/posteriores ao redor
          const ordered = Array.from({ length: 7 }, (_, i) =>
            DAYS_PT[(todayIdx + (i - 3) + 7) % 7]
          );
          return (
            <div className="flex items-center gap-2 shrink-0 absolute inset-0 justify-center">
              {ordered.map((day, i) => {
                const isToday = i === 3; // posição central = hoje sempre
                return isToday ? (
                  <div key={i} className="bg-[#202020] rounded-sm shrink-0 flex items-center justify-center" style={{ width: 'clamp(105px,20dvh,151px)', height: 'clamp(128px,24dvh,183px)', border: '1px solid #303030' }}>
                    <div className="flex flex-col items-center gap-[clamp(8px,1.8dvh,20px)]">
                      <div className="relative bg-[#303030] rounded-full flex items-center justify-center" style={{ width: 'clamp(56px,11dvh,80px)', height: 'clamp(56px,11dvh,80px)', border: '1px solid #484848' }}>
                        <CalLarge />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-[#484848] rounded-full flex items-center justify-center" style={{ width: '22px', height: '22px', bottom: '-11px', border: '1px solid #5e5e5e' }}>
                          <svg viewBox="0 0 12 9" width="11" height="8" fill="none" overflow="visible">
                            <motion.path
                              d="M1 4.5 L4.3 7.5 L11 1"
                              stroke="#D4D4D4"
                              strokeWidth="1.9"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ pathLength: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 } }}
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-center">
                        <span className="text-[#d4d4d4] uppercase" style={{ fontSize: '12px', fontWeight: 400, lineHeight: 1.3 }}>{todayName}</span>
                        <span className="text-[#a4a4a4] uppercase text-[10px]" style={{ lineHeight: 1.3 }}>missão completa</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="bg-[#202020] rounded-sm shrink-0 flex items-center justify-center" style={{ width: 'clamp(79px,15dvh,113px)', height: 'clamp(96px,18dvh,137px)' }}>
                    <div className="flex flex-col items-center gap-[clamp(6px,1.5dvh,16px)]">
                      <div className="bg-[#303030] rounded-full flex items-center justify-center" style={{ width: 'clamp(42px,8dvh,60px)', height: 'clamp(42px,8dvh,60px)', border: '0.75px solid #484848' }}>
                        <CalSmall />
                      </div>
                      <span className="text-[#a4a4a4] uppercase text-center text-xs" style={{ lineHeight: 1.3 }}>{day}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
        <div className="absolute inset-y-0 left-0 pointer-events-none z-10" style={{ width: '110px', background: 'linear-gradient(to right, #000000 35%, rgba(0,0,0,0.6) 65%, transparent 100%)' }} />
        <div className="absolute inset-y-0 right-0 pointer-events-none z-10" style={{ width: '110px', background: 'linear-gradient(to left, #000000 35%, rgba(0,0,0,0.6) 65%, transparent 100%)' }} />
      </div>

      {/* Text + button */}
      <div className="flex flex-col items-center gap-[clamp(12px,3dvh,32px)] text-center max-w-[560px]">
        <h1 className="text-white" style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 500, lineHeight: 1.2 }}>Primeiro dia de Ofensiva</h1>
        <p className="text-[#a4a4a4]" style={{ fontSize: 'clamp(14px,2dvh,20px)', fontWeight: 400, lineHeight: 1.5 }}>
          Mas sua ofensiva vai zerar se não praticar amanhã. Fique de olho! Complete as missões do dia e mantenha sua ofensiva.
        </p>
        {/* Regra 2: h-10 */}
        <button onClick={onAdvance} className="bg-[#f2f2f2] text-black px-6 h-10 rounded-full hover:bg-white active:scale-95 transition-all cursor-pointer" style={{ fontSize: '14px', fontWeight: 500 }}>
          Avançar
        </button>
      </div>
    </div>
  );
}

// ─── Fractais Screen ──────────────────────────────────────────────────────────
function FractaisScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 gap-[clamp(16px,4dvh,64px)] pt-[clamp(12px,3dvh,40px)]">
      <motion.div
        className="bg-[#101010] rounded-full flex items-center justify-center shrink-0"
        style={{ width: 'clamp(120px,26dvh,204px)', height: 'clamp(120px,26dvh,204px)' }}
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <svg viewBox="0 0 32 32" width="144" height="144" fill="none">
          <path d="M17.1062 3.82206V13.3133L17.1492 13.2713L23.8348 6.59159L25.3992 8.15604L18.6619 14.8933H28.1785V17.1219H18.7117L18.7547 17.1648L25.4002 23.8172L23.8426 25.3748L17.1492 18.6873L17.1062 18.6453V28.1785H14.8855V18.6707L14.8426 18.7127L8.17362 25.3748L6.61698 23.8182L13.2713 17.1648L13.3133 17.1219H3.82206V14.8933H13.3631L6.62479 8.15507L8.17362 6.59257L14.8426 13.2537L14.8855 13.2967V3.82206H17.1062Z" fill="white" />
        </svg>
      </motion.div>
      <div className="flex flex-col items-center gap-[clamp(12px,3dvh,24px)] text-center max-w-[520px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-white" style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 500, lineHeight: 1.2 }}>Voce ganhou 5 fractais!</h1>
          <p className="text-[#a4a4a4]" style={{ fontSize: 'clamp(14px,2dvh,20px)', fontWeight: 400, lineHeight: 1.3 }}>Parabéns por bater a sua meta diária!</p>
        </div>
        <button onClick={onAdvance} className="bg-[#f2f2f2] text-black px-6 h-10 rounded-full hover:bg-white active:scale-95 transition-all cursor-pointer" style={{ fontSize: '14px', fontWeight: 500 }}>
          Avançar
        </button>
      </div>
    </div>
  );
}

// ─── Criar Perfil Intro ───────────────────────────────────────────────────────
function CriarPerfilIntroScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center px-5 gap-[clamp(16px,4dvh,64px)] pt-[clamp(12px,3dvh,40px)]">
      <motion.div
        className="rounded-full overflow-hidden bg-white shrink-0"
        style={{ width: 'clamp(110px,24dvh,188px)', height: 'clamp(110px,24dvh,188px)', border: '2px solid #303030' }}
        initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <img src={imgBabel} alt="Perfil" className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col items-center gap-[clamp(12px,3dvh,32px)] text-center max-w-[560px]">
        <div className="flex flex-col gap-[clamp(8px,2dvh,16px)]">
          <h1 className="text-white" style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 500, lineHeight: 1.2 }}>Hora de criar seu perfil!</h1>
          <p className="text-[#a4a4a4]" style={{ fontSize: 'clamp(14px,2dvh,20px)', fontWeight: 400, lineHeight: 1.3 }}>Crie um perfil para salvar o seu progresso e continue aprendendo.</p>
        </div>
        <button onClick={onAdvance} className="bg-[#f2f2f2] text-black px-6 h-10 rounded-full hover:bg-white active:scale-95 transition-all cursor-pointer" style={{ fontSize: '14px', fontWeight: 500 }}>
          Avançar
        </button>
      </div>
    </div>
  );
}

// ─── Shared: ícone de check inline ───────────────────────────────────────────
function CheckIcon() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="flex items-center justify-center rounded-full shrink-0"
      style={{ width: '20px', height: '20px', background: '#0e1f1a', border: '1px solid #3E695C' }}
    >
      <svg viewBox="0 0 10.6 7.80833" width="8" height="6" fill="none">
        <path d={P.check} fill="#3E695C" />
      </svg>
    </motion.div>
  );
}

function ErrorIcon() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="flex items-center justify-center rounded-full shrink-0"
      style={{ width: '20px', height: '20px', background: '#1f0f0f', border: '1px solid #e05252' }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#e05252" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

// ─── Idade Screen ─────────────────────────────────────────────────────────────
function IdadeScreen({ onAdvance }: { onAdvance: () => void }) {
  const [val, setVal]         = useState('');
  const [touched, setTouched] = useState(false);

  const num      = parseInt(val, 10);
  const isEmpty  = val.trim() === '';
  const isValid  = !isEmpty && !isNaN(num) && num >= 13 && num <= 99;
  const tooYoung = touched && !isEmpty && !isNaN(num) && num < 13;
  const tooOld   = touched && !isEmpty && !isNaN(num) && num > 99;
  const hasError = tooYoung || tooOld;

  const errorMsg = tooYoung
    ? 'A Overlens é para maiores de 13 anos.'
    : tooOld
    ? 'Por favor, insira uma idade válida.'
    : '';

  const handleChange = (raw: string) => {
    const cleaned = raw.replace(/\D/g, '').slice(0, 2);
    setVal(cleaned);
    if (!touched && cleaned.length > 0) setTouched(true);
  };

  const borderColor = hasError ? '#e05252' : isValid ? '#3E695C' : '#1e1e1e';

  return (
    <div className="flex-1 flex flex-col items-center px-5 pt-[clamp(12px,3dvh,40px)] w-full">
      <div className="flex flex-col gap-[clamp(16px,4dvh,40px)] w-full" style={{ maxWidth: '344px' }}>
        <motion.div
          className="flex flex-col gap-[clamp(12px,3dvh,24px)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-white" style={{ fontSize: 'clamp(17px,2.5dvh,20px)', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.3px' }}>
              Quantos anos você tem?
            </h2>
            {/* Regra 3 — 12px (text-xs) */}
            <p className="text-[#505050] text-xs" style={{ lineHeight: 1.5 }}>
              Isso garante a experiência certa para o seu perfil.
            </p>
          </div>

          {/* ── Age input ── */}
          <div className="flex flex-col gap-2">
            <div
              className="relative flex items-center w-full"
              style={{
                height: '56px',
                background: '#0d0d0d',
                borderRadius: '10px',
                border: `1.5px solid ${borderColor}`,
                transition: 'border-color 0.2s ease',
              }}
            >
              <input
                type="text"
                inputMode="numeric"
                value={val}
                onChange={e => handleChange(e.target.value)}
                onBlur={() => val.length > 0 && setTouched(true)}
                placeholder="Ex: 28"
                maxLength={2}
                className="flex-1 h-full bg-transparent outline-none text-white placeholder-[#383838] px-4"
                style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '0.04em' }}
              />
              <div className="pr-4 shrink-0">
                {isValid && <CheckIcon />}
                {hasError && <ErrorIcon />}
              </div>
            </div>

            {/* Animated feedback */}
            <div style={{ minHeight: '18px' }}>
              {hasError ? (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                  style={{ color: '#a05050', lineHeight: 1.4 }}
                >
                  {errorMsg}
                </motion.p>
              ) : (
                <p className="text-xs" style={{ color: '#383838', lineHeight: 1.4 }}>
                  {isValid ? 'Tudo certo! Pode avançar.' : 'Entre 13 e 99 anos.'}
                </p>
              )}
            </div>
          </div>

          {/* ── Privacy note ── */}
          <p className="text-[#383838] text-xs" style={{ lineHeight: 1.5 }}>
            Para saber mais sobre como usamos sua idade, acesse a nossa{' '}
            <span className="text-[#505050] underline cursor-pointer hover:text-[#707070] transition-colors">
              Política de Privacidade.
            </span>
          </p>

          {/* ── CTA — Regra 2: h-10 ── */}
          <motion.button
            onClick={isValid ? onAdvance : undefined}
            disabled={!isValid}
            className="self-start flex items-center gap-2 rounded-full"
            animate={{
              background: isValid ? '#f2f2f2' : '#141414',
              color: isValid ? '#000000' : '#383838',
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: '14px',
              fontWeight: 500,
              height: '40px',
              paddingLeft: '20px',
              paddingRight: '20px',
              border: isValid ? 'none' : '1px solid #1e1e1e',
              cursor: isValid ? 'pointer' : 'not-allowed',
            }}
          >
            {!isValid ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="#383838" strokeWidth="1.2" />
                <path d="M4 5V3.5a2 2 0 1 1 4 0V5" stroke="#383838" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            ) : null}
            Avançar
            {isValid ? (
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3L11.5 6.5 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </motion.button>
        </motion.div>

        <div className="flex flex-col gap-2 w-full">
          <OrDivider />
          <GoogleBtn />
        </div>
        <Terms />
      </div>
    </div>
  );
}

// ─── Criar Conta Screen ───────────────────────────────────────────────────────
function CriarContaScreen({ onAdvance }: { onAdvance: () => void }) {
  const [nome,      setNome]      = useState('');
  const [email,     setEmail]     = useState('');
  const [senha,     setSenha]     = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [touched,   setTouched]   = useState({ nome: false, email: false, senha: false });

  const touch = (field: 'nome' | 'email' | 'senha') =>
    setTouched(t => ({ ...t, [field]: true }));

  const nomeValid  = nome.trim().length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const senhaValid = senha.length >= 8;
  const allValid   = nomeValid && emailValid && senhaValid;

  const hasUpper   = /[A-Z]/.test(senha);
  const hasNumber  = /[0-9]/.test(senha);
  const hasSpecial = /[^A-Za-z0-9]/.test(senha);
  const strengthScore =
    senha.length === 0 ? 0 :
    senha.length < 8   ? 1 :
    (hasUpper ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSpecial ? 1 : 0) >= 2 ? 3 : 2;

  const strengthLabel = ['', 'Fraca', 'Média', 'Forte'][strengthScore];
  const strengthColor = ['', '#e05252', '#d4a017', '#3E695C'][strengthScore];

  const fieldBorder = (key: 'nome' | 'email' | 'senha', valid: boolean) => {
    if (!touched[key]) return '#1e1e1e';
    return valid ? '#3E695C' : '#e05252';
  };

  const FieldIcon = ({ fieldKey, valid }: { fieldKey: 'nome' | 'email' | 'senha'; valid: boolean }) => {
    if (!touched[fieldKey] || (fieldKey === 'senha' && senha.length === 0)) return null;
    return valid ? <CheckIcon /> : <ErrorIcon />;
  };

  const ErrMsg = ({ show, msg }: { show: boolean; msg: string }) =>
    show ? (
      <motion.p
        key={msg}
        initial={{ opacity: 0, y: -3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="text-xs"
        style={{ color: '#a05050', lineHeight: 1.4 }}
      >
        {msg}
      </motion.p>
    ) : null;

  return (
    <div className="flex-1 flex flex-col items-center px-5 pt-[clamp(12px,3dvh,40px)] w-full">
      <div className="flex flex-col gap-[clamp(16px,4dvh,40px)] w-full" style={{ maxWidth: '344px' }}>
        <motion.div
          className="flex flex-col gap-[clamp(12px,3dvh,24px)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h2 className="text-white" style={{ fontSize: 'clamp(17px,2.5dvh,20px)', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.3px' }}>
              Crie sua conta
            </h2>
            {/* Regra 3 — 12px */}
            <p className="text-[#505050] text-xs" style={{ lineHeight: 1.5 }}>
              Salve seu progresso e acesse suas trilhas.
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-4">

            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label className="text-[#505050] text-xs" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>Nome</label>
              <div className="flex items-center px-4 gap-3"
                style={{ height: '52px', background: '#0d0d0d', borderRadius: '10px', border: `1.5px solid ${fieldBorder('nome', nomeValid)}`, transition: 'border-color 0.2s ease' }}
              >
                <input
                  type="text" value={nome}
                  onChange={e => setNome(e.target.value)}
                  onBlur={() => touch('nome')}
                  placeholder="Seu nome"
                  className="flex-1 h-full bg-transparent outline-none text-white placeholder-[#2e2e2e]"
                  style={{ fontSize: '15px' }}
                />
                <FieldIcon fieldKey="nome" valid={nomeValid} />
              </div>
              <div style={{ minHeight: '14px' }}>
                <ErrMsg show={touched.nome && !nomeValid} msg="Nome muito curto." />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-2">
              <label className="text-[#505050] text-xs" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>E-mail</label>
              <div className="flex items-center px-4 gap-3"
                style={{ height: '52px', background: '#0d0d0d', borderRadius: '10px', border: `1.5px solid ${fieldBorder('email', emailValid)}`, transition: 'border-color 0.2s ease' }}
              >
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  onBlur={() => touch('email')}
                  placeholder="voce@email.com"
                  className="flex-1 h-full bg-transparent outline-none text-white placeholder-[#2e2e2e]"
                  style={{ fontSize: '15px' }}
                />
                <FieldIcon fieldKey="email" valid={emailValid} />
              </div>
              <div style={{ minHeight: '14px' }}>
                <ErrMsg show={touched.email && !emailValid} msg="Digite um e-mail válido." />
              </div>
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-2">
              <label className="text-[#505050] text-xs" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>Senha</label>
              <div className="flex items-center px-4 gap-3"
                style={{ height: '52px', background: '#0d0d0d', borderRadius: '10px', border: `1.5px solid ${fieldBorder('senha', senhaValid)}`, transition: 'border-color 0.2s ease' }}
              >
                <input
                  type={showSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={e => { setSenha(e.target.value); if (!touched.senha && e.target.value.length > 0) touch('senha'); }}
                  onBlur={() => touch('senha')}
                  placeholder="Mínimo 8 caracteres"
                  className="flex-1 h-full bg-transparent outline-none text-white placeholder-[#2e2e2e]"
                  style={{ fontSize: '15px' }}
                />
                <button type="button" onClick={() => setShowSenha(s => !s)}
                  className="shrink-0 text-[#383838] hover:text-[#606060] transition-colors cursor-pointer"
                >
                  {showSenha ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M2 2l12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                  )}
                </button>
              </div>

              {senha.length > 0 ? (
                <motion.div className="flex flex-col gap-2" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                  {/* Regra 1: gap-2 (8px) */}
                  <div className="flex gap-2">
                    {[1, 2, 3].map(level => (
                      <div key={level} className="flex-1 rounded-full"
                        style={{ height: '3px', background: strengthScore >= level ? strengthColor : '#1e1e1e', transition: 'background 0.25s ease' }}
                      />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: strengthColor, transition: 'color 0.25s ease' }}>
                    Senha {strengthLabel}{strengthScore < 3 ? ' — adicione maiúsculas, números ou símbolos' : ''}
                  </p>
                </motion.div>
              ) : (
                <div style={{ minHeight: '14px' }}>
                  <ErrMsg show={touched.senha && !senhaValid} msg="Mínimo de 8 caracteres." />
                </div>
              )}
            </div>
          </div>

          {/* CTA — Regra 2: h-10 */}
          <motion.button
            onClick={allValid ? onAdvance : undefined}
            disabled={!allValid}
            className="self-start flex items-center gap-2 rounded-full"
            animate={{ background: allValid ? '#f2f2f2' : '#141414', color: allValid ? '#000000' : '#383838' }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: '14px', fontWeight: 500, height: '40px', paddingLeft: '20px', paddingRight: '20px', border: allValid ? 'none' : '1px solid #1e1e1e', cursor: allValid ? 'pointer' : 'not-allowed' }}
          >
            {!allValid && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="#383838" strokeWidth="1.2" />
                <path d="M4 5V3.5a2 2 0 1 1 4 0V5" stroke="#383838" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            )}
            Criar conta
            {allValid && (
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3L11.5 6.5 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </motion.button>
        </motion.div>

        <div className="flex flex-col gap-2 w-full">
          <OrDivider />
          <GoogleBtn />
        </div>
        <Terms />
      </div>
    </div>
  );
}

// ─── Completion ───────────────────────────────────────────────────────────────
function CompletionScreen() {
  return (
    <div className="flex-1 flex flex-col items-center px-5 py-[clamp(20px,4dvh,48px)] text-center">
      <div className="max-w-[480px] flex flex-col items-center gap-[clamp(16px,4dvh,40px)]">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-white" style={{ fontSize: 'clamp(28px,4vw,36px)', fontWeight: 500, lineHeight: 1.2 }}>Conta criada com sucesso!</h1>
          <p className="text-[#a4a4a4]" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>Bem-vindo à Overlens. Suas trilhas estão prontas para começar.</p>
        </div>
        <button className="bg-[#f2f2f2] text-black px-8 h-12 rounded-full hover:bg-white active:scale-95 transition-all cursor-pointer" style={{ fontSize: '16px', fontWeight: 500 }} onClick={() => window.location.reload()}>
          ENTRAR
        </button>
      </div>
    </div>
  );
}

// ─── Scroll Hint Arrow ────────────────────────────────────────────────────────
function ScrollHintArrow({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-7 left-1/2 -translate-x-1/2 sm:hidden z-40 pointer-events-none flex flex-col items-center"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden>
              <path
                d="M3 3.5L9 9.5L15 3.5"
                stroke="#A4A4A4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
              <path
                d="M3 10L9 16L15 10"
                stroke="#A4A4A4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Orchestrator ────────────────────────────────────────────────────────
export function Onboarding() {
  const { currentScreenId, progress, direction, canGoBack, goNext, goBack, selectAnswer, getAnswer, answers } = useOnboarding();

  // ── Calcula os 3 slots ao entrar na tela de recomendações ─────────────────
  // Usa answers congeladas no momento da transição (não recomputa se o usuário
  // trocar um slot depois, pois setRecommendedIds cuida das trocas manuais).
  const [recommendedIds, setRecommendedIds] = useState<string[]>(DEFAULT_IDS);
  const prevScreenRef = useRef<ScreenId | null>(null);
  useEffect(() => {
    const wasLoading = prevScreenRef.current === 'loading';
    prevScreenRef.current = currentScreenId;
    if (currentScreenId === 'recommendations' && wasLoading) {
      setRecommendedIds(getRecommendedIds(answers));
    }
  }, [currentScreenId, answers]);
  // swapSlot = índice do slot (0|1|2) aberto no modal; null = modal fechado
  const [swapSlot, setSwapSlot] = useState<number | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentScreen = SCREENS[currentScreenId];
  const variants = direction === 'forward' ? forwardVariants : backwardVariants;

  // ── Scroll hint: apenas em telas de pergunta, só quando CTA está fora da view ─
  const isQuestionScreen = currentScreen.type === 'question';

  const checkScroll = useCallback(() => {
    const el = contentRef.current;
    if (!el || !isQuestionScreen) { setShowScrollHint(false); return; }
    const scrollable = el.scrollHeight > el.clientHeight + 8;
    const atBottom   = el.scrollHeight - el.scrollTop - el.clientHeight < 32;
    setShowScrollHint(scrollable && !atBottom);
  }, [isQuestionScreen]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Re-check after scroll-to-top animation settles (~300ms) + content renders
    const t = setTimeout(checkScroll, 320);
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    return () => {
      clearTimeout(t);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [currentScreenId, checkScroll]);

  // Auto-advance loading screen
  useEffect(() => {
    if (currentScreenId === 'loading') {
      const t = setTimeout(() => goNext(), 2500);
      return () => clearTimeout(t);
    }
  }, [currentScreenId, goNext]);

  // Scroll-to-top suave a cada mudança de tela
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentScreenId]);

  const handleContinue = () => { const a = getAnswer(currentScreenId as ScreenId); goNext(a); };
  // Substitui apenas o slot específico; os outros dois permanecem na posição
  const handleApply = (slotIndex: number, newCourseId: string) => {
    setRecommendedIds(prev => {
      const next = [...prev];
      next[slotIndex] = newCourseId;
      return next;
    });
    setSwapSlot(null);
  };
  const showBack = canGoBack && !['completion', 'loading'].includes(currentScreenId);

  return (
    <div className="h-dvh overflow-hidden bg-black flex flex-col items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* TopNav full-width, fora da coluna centralizada */}
      <TopNav progress={progress} onBack={goBack} canGoBack={showBack} />
      {/* Scroll hint — mobile only, posicionada sobre tudo */}
      <ScrollHintArrow visible={showScrollHint} />
      {/* Coluna centralizada — mobile full-width, desktop max 480px */}
      <div ref={contentRef} className="w-full max-w-[480px] flex flex-col flex-1 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden">

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={currentScreenId} initial={variants.initial} animate={variants.animate} exit={variants.exit} transition={transition} className="flex-1 flex flex-col min-h-0">

            {currentScreenId === 'welcome'           && <WelcomeScreen onStart={() => goNext()} />}
            {/* Ajuste 4 — ícones pill para as 3 últimas opções de Fundamentos do Design */}
            {currentScreen.type === 'question'       && (
              <QuestionScreen
                screen={currentScreen}
                answer={getAnswer(currentScreenId as ScreenId)}
                onSelect={o => selectAnswer(currentScreenId as ScreenId, o)}
                onContinue={handleContinue}
                onSkip={() => goNext(undefined)}
              />
            )}
            {currentScreenId === 'capabilities_list' && <CapabilitiesListScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'notification_permission' && <NotificationPermissionScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'loading'           && <LoadingScreen />}
            {currentScreenId === 'summary'           && <SummaryScreen onStart={() => goNext()} />}
            {currentScreenId === 'recommendations'   && <RecommendationsScreen recommendedIds={recommendedIds} onAdvance={() => goNext()} onOpenModal={(slot) => setSwapSlot(slot)} />}
            {currentScreenId === 'ofensiva'          && <OfensivaScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'fractais'          && <FractaisScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'criar_perfil_intro' && <CriarPerfilIntroScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'idade'             && <IdadeScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'criar_conta'       && <CriarContaScreen onAdvance={() => goNext()} />}
            {currentScreenId === 'completion'        && <CompletionScreen />}

          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {swapSlot !== null && (
            <SwapModal
              key="modal"
              recommendedIds={recommendedIds}
              slotIndex={swapSlot}
              onClose={() => setSwapSlot(null)}
              onApply={handleApply}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
