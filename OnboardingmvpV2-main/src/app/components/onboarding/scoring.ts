import type { ScreenId, OptionId } from './data';

// ─── Types ────────────────────────────────────────────────────────────────────
export type CognitiveLevel = 'Operante' | 'Convergente' | 'Emergente' | 'Nexialista';

interface ScoreVector {
  op:   number; // Operante
  conv: number; // Convergente
  em:   number; // Emergente
  nex:  number; // Nexialista
}

// ─────────────────────────────────────────────────────────────────────────────
// PARTE 1 — Mapeamento de Capas
//
// Chave  = título exato conforme escrito na imagem de capa (uppercase).
// Valor  = nome do arquivo original (Capa-N.png).
//
// Observações importantes (discrepâncias capa ↔ catálogo):
//   • 'GENOMA'     → catálogo usa 'Núcleo'    (Capa-17)
//   • 'GUIDELINES' → catálogo usa 'Cosmos'    (Capa-19)
//   • 'EXPLORER'   → catálogo usa 'Curso do Mateus' (Capa-6)
//
// Status de importação:
//   ✓  = figma:asset já importado em Onboarding.tsx
//   ⌛ = sem capa ainda — usando BLUE_ATMOS como placeholder
// ─────────────────────────────────────────────────────────────────────────────
export const COURSE_COVER_MAP: Record<string, string> = {
  // ── Trilha: AI ─────────────────────────────────────────────────────────────
  'AI:FIRST':         'Capa-1.png',  // ⌛ pending
  'NEXGEN':           'Capa-2.png',  // ✓  figma:asset/0506aca75d1dc88d88d0cbbf307a3820f0e3cd80.png
  'PROMPT':           'Capa-3.png',  // ⌛ pending
  'AI IMAGE GEN':     'Capa-4.png',  // ⌛ pending
  'LLMs':             'Capa-5.png',  // ✓  figma:asset/85e7bd55e3ff92aabd313585bb1bb9209ea57e1d.png
  'EXPLORER':         'Capa-6.png',  // ✓  figma:asset/7c28d0ed7d26915d244a4851735b4b64a659d315.png
  'FAZENDO DINHEIRO': 'Capa-7.png',  // ⌛ pending
  'IDENTIFICANDO':    'Capa-8.png',  // ⌛ pending

  // ── Trilha: Design & Fundamentos ───────────────────────────────────────────
  'SANDBOX':          'Capa-9.png',  // ✓  figma:asset/1f79aef32de5d2eb4b14b300dbd08f5b3f0c0075.png
  'MATRIZ':           'Capa-10.png', // ⌛ pending
  'GESTALT':          'Capa-11.png', // ✓  figma:asset/abb47ef9289f8fc41b8d9139230f22803b9fdf97.png
  'COLORFUL':         'Capa-12.png', // ✓  figma:asset/1a26e9b4670c4d820b0fe0c23cfe851c3e53abfa.png
  'LAYOUT':           'Capa-13.png', // ✓  figma:asset/2ebe06c31e068ed8934a23719fe70ebc05ddc1e9.png
  'SIGNALS':          'Capa-14.png', // ✓  figma:asset/b03cc1e7a774fd6ab9c8232e72a5a7a76baa29d8.png

  // ── Trilha: Estratégia & Branding ──────────────────────────────────────────
  'DEEP ZOOM':        'Capa-15.png', // ✓  figma:asset/37525c303db93b8ded643279ebeb55ae332fb3ab.png
  'STANDOUT':         'Capa-16.png', // ✓  figma:asset/d911ab33d34921d8479060c47ec50aa287701214.png
  'GENOMA':           'Capa-17.png', // ✓  figma:asset/1578ebd8c5b34a394823672089c0f0ece7a8a158.png  — catálogo: Núcleo
  'VERBARIUM':        'Capa-18.png', // ✓  figma:asset/c1937d19b023d93a800bc18ab3fd372db9b6aa43.png
  'GUIDELINES':       'Capa-19.png', // ✓  figma:asset/f083336b339f3abed7087391e37d692648742522.png  — catálogo: Cosmos
  'LOGOGRAM':         'Capa-20.png', // ⌛ pending

  // ── Trilha: Negócios & Mercado ─────────────────────────────────────────────
  'MIRROR':           'Capa-21.png', // ⌛ pending
  'TARGET':           'Capa-22.png', // ⌛ pending
  'LEAN MODEL':       'Capa-23.png', // ⌛ pending
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// PARTE 2 — Sistema de Pontuação Cognitiva
//
// Pesos base (aplicados sobre a soma bruta de cada nível):
//   Operante    × 1.0
//   Convergente × 1.0
//   Emergente   × 0.7
//   Nexialista  × 0.4
//
// Regra de Segurança para Nexialista (garantia dos ~5%):
//   [1] Deve ter pontuado nex > 0 em ao menos 3 blocos distintos.
//   [2] Operante NÃO pode ter sido dominante em nenhum bloco individual.
//       (se op empata pelo topo → conta como dominante, por conservadorismo)
//       Caso falhe em qualquer condição → cai para Emergente.
//
// Blocos de scoring (9 perguntas com tabela de pontuação definida):
//   q1 · q1b_ia · q1b_fundamentos · q1b_ideias · q1b_negocios
//   q3 · q4 · q6_eu_aprendo · q7_confortavel
//
// Perguntas sem pontuação (sem tabela): q2 (aquisição) · q5_meta (ritmo)
// ─────────────────────────────────────────────────────────────────────────────

// Tabela de pontuação completa — fonte: "Sistema de Pontuação do Onboarding"
const SCORING_TABLE: Partial<Record<ScreenId, Partial<Record<OptionId, ScoreVector>>>> = {

  // ── "Eu quero aprender…" ───────────────────────────────────────────────────
  q1: {
    A: { op: 3, conv: 1, em: 0, nex: 0 }, // usar IA na prática
    B: { op: 1, conv: 3, em: 1, nex: 0 }, // fundamentos de criação
    C: { op: 0, conv: 2, em: 3, nex: 1 }, // transformar ideias em valor
    D: { op: 0, conv: 1, em: 2, nex: 3 }, // estruturar negócio criativo
  },

  // ── "Criação com IA" ───────────────────────────────────────────────────────
  // Nenhuma opção gera Nexialista — por design.
  q1b_ia: {
    A: { op: 2, conv: 1, em: 0, nex: 0 }, // Texto
    B: { op: 2, conv: 1, em: 0, nex: 0 }, // Imagem
    C: { op: 2, conv: 1, em: 0, nex: 0 }, // Vídeo
    D: { op: 2, conv: 1, em: 0, nex: 0 }, // Música
    E: { op: 1, conv: 2, em: 1, nex: 0 }, // WebApps com IA
  },

  // ── "Fundamentos do Design" ────────────────────────────────────────────────
  q1b_fundamentos: {
    A: { op: 2, conv: 2, em: 0, nex: 0 }, // Princípios Básicos
    B: { op: 2, conv: 1, em: 0, nex: 0 }, // Formas
    C: { op: 2, conv: 1, em: 1, nex: 0 }, // Cores
    D: { op: 1, conv: 3, em: 1, nex: 0 }, // Composição
    E: { op: 0, conv: 2, em: 3, nex: 1 }, // Mensagem
    F: { op: 0, conv: 1, em: 3, nex: 2 }, // Filosofia da Criação
  },

  // ── "Ideias de valor" ──────────────────────────────────────────────────────
  q1b_ideias: {
    A: { op: 1, conv: 2, em: 1, nex: 0 }, // validar se faz sentido
    B: { op: 2, conv: 2, em: 0, nex: 0 }, // organizar para não me perder
    C: { op: 0, conv: 2, em: 2, nex: 0 }, // transformar em vendável
    D: { op: 0, conv: 1, em: 3, nex: 1 }, // por que ideias prosperam
    E: { op: 0, conv: 0, em: 2, nex: 3 }, // estruturar algo que funcione no tempo
  },

  // ── "Estruturação de Negócios" ─────────────────────────────────────────────
  q1b_negocios: {
    A: { op: 3, conv: 1, em: 0, nex: 0 }, // clareza do que fazer agora
    B: { op: 1, conv: 3, em: 0, nex: 0 }, // organizar processos
    C: { op: 0, conv: 2, em: 2, nex: 0 }, // aumentar resultados
    D: { op: 0, conv: 1, em: 3, nex: 1 }, // decidir em incerteza
    E: { op: 0, conv: 0, em: 2, nex: 3 }, // estruturas que não dependem de mim
  },

  // ── "Você quer aprender sobre criação para…" ──────────────────────────────
  q3: {
    A: { op: 2, conv: 2, em: 0, nex: 0 }, // tornar profissional
    B: { op: 0, conv: 1, em: 2, nex: 1 }, // desenvolver negócio próprio
    C: { op: 2, conv: 1, em: 1, nex: 0 }, // projetos reais / portfólio
    D: { op: 1, conv: 2, em: 1, nex: 0 }, // melhorar resultados no trabalho
    E: { op: 0, conv: 0, em: 3, nex: 2 }, // adaptar às mudanças do mercado
  },

  // ── "Experiência com criação" (muito importante) ───────────────────────────
  q4: {
    A: { op: 3, conv: 0, em: 0, nex: 0 }, // não sei nada
    B: { op: 1, conv: 2, em: 0, nex: 0 }, // já criei projetos
    C: { op: 0, conv: 2, em: 2, nex: 0 }, // já criei produtos
    D: { op: 0, conv: 1, em: 2, nex: 1 }, // já criei negócios
    E: { op: 0, conv: 0, em: 2, nex: 3 }, // já criei ecossistemas
  },

  // ── "Como aprende melhor" ──────────────────────────────────────────────────
  q6_eu_aprendo: {
    A: { op: 3, conv: 0, em: 0, nex: 0 }, // alguém mostra como fazer
    B: { op: 1, conv: 3, em: 0, nex: 0 }, // método claro
    C: { op: 0, conv: 2, em: 2, nex: 0 }, // casos reais
    D: { op: 0, conv: 1, em: 3, nex: 0 }, // testar hipóteses
    E: { op: 0, conv: 0, em: 2, nex: 3 }, // lidar com consequências
  },

  // ── "Conforto ao aprender" ─────────────────────────────────────────────────
  q7_confortavel: {
    A: { op: 3, conv: 0, em: 0, nex: 0 }, // próximo passo claro
    B: { op: 1, conv: 3, em: 0, nex: 0 }, // estrutura validada
    C: { op: 0, conv: 2, em: 2, nex: 0 }, // adaptar sem refazer tudo
    D: { op: 0, conv: 1, em: 3, nex: 1 }, // decidir sem todas as respostas
    E: { op: 0, conv: 0, em: 2, nex: 3 }, // resultado depende totalmente de mim
  },
};

// Pesos de raridade aplicados sobre a soma bruta de cada nível
const LEVEL_WEIGHTS: ScoreVector = {
  op:   1.0,
  conv: 1.0,
  em:   0.7,
  nex:  0.4,
};

// Mapeamento interno chave → label público
const KEY_TO_LEVEL: Record<keyof ScoreVector, CognitiveLevel> = {
  op:   'Operante',
  conv: 'Convergente',
  em:   'Emergente',
  nex:  'Nexialista',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Chave do valor máximo de um ScoreVector (empate: prioridade op > conv > em > nex). */
function dominantKey(v: ScoreVector): keyof ScoreVector {
  const order: (keyof ScoreVector)[] = ['op', 'conv', 'em', 'nex'];
  const max = Math.max(v.op, v.conv, v.em, v.nex);
  // Em caso de empate, retorna o nível mais "conservador" da lista acima.
  return order.find(k => v[k] === max)!;
}

/** Soma dois ScoreVectors. */
function addVectors(a: ScoreVector, b: ScoreVector): ScoreVector {
  return { op: a.op + b.op, conv: a.conv + b.conv, em: a.em + b.em, nex: a.nex + b.nex };
}

/** Aplica os pesos de raridade sobre um ScoreVector bruto. */
function applyWeights(v: ScoreVector): ScoreVector {
  return {
    op:   v.op   * LEVEL_WEIGHTS.op,
    conv: v.conv * LEVEL_WEIGHTS.conv,
    em:   v.em   * LEVEL_WEIGHTS.em,
    nex:  v.nex  * LEVEL_WEIGHTS.nex,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// calculateDominantLevel
//
// Recebe o dicionário de respostas do useOnboarding e retorna o nível cognitivo
// dominante após aplicar pesos e regra de segurança do Nexialista.
//
// Exemplo de uso:
//   const level = calculateDominantLevel(answers);
//   // → 'Operante' | 'Convergente' | 'Emergente' | 'Nexialista'
// ─────────────────────────────────────────────────────────────────────────────
export function calculateDominantLevel(
  answers: Partial<Record<ScreenId, OptionId>>,
): CognitiveLevel {

  let totalRaw: ScoreVector = { op: 0, conv: 0, em: 0, nex: 0 };

  // Metadados por bloco para a regra de segurança do Nexialista
  const blockMeta: Array<{
    nexScore: number;           // pontuação bruta de Nexialista neste bloco
    blockDominant: keyof ScoreVector; // nível com maior pontuação bruta neste bloco
  }> = [];

  // ── Passo 1: Acumular vetores por bloco ──────────────────────────────────
  for (const [screenId, optionMap] of Object.entries(SCORING_TABLE) as [
    ScreenId,
    Partial<Record<OptionId, ScoreVector>>,
  ][]) {
    const answer = answers[screenId];
    if (!answer) continue; // pergunta pulada ou não respondida

    const vec = optionMap[answer];
    if (!vec) continue; // opção fora da tabela (ex: G/H em q2 não tem tabela)

    totalRaw = addVectors(totalRaw, vec);

    blockMeta.push({
      nexScore:      vec.nex,
      blockDominant: dominantKey(vec),
    });
  }

  // ── Passo 2: Aplicar pesos e encontrar nível dominante ───────────────────
  const weighted      = applyWeights(totalRaw);
  const topKey        = dominantKey(weighted);
  const rawDominant   = KEY_TO_LEVEL[topKey];

  // ── Passo 3: Regra de Segurança — Nexialista (~5% da distribuição) ────────
  if (rawDominant === 'Nexialista') {
    // Condição [1]: pontuou nex > 0 em pelo menos 3 blocos distintos
    const blocksWithNex = blockMeta.filter(b => b.nexScore > 0).length;

    // Condição [2]: Operante NÃO pode ter sido dominante em nenhum bloco
    //   (empates com op também contam como op-dominante, por conservadorismo)
    const hadOperanteDominantBlock = blockMeta.some(b => b.blockDominant === 'op');

    const passedSafetyRule = blocksWithNex >= 3 && !hadOperanteDominantBlock;

    if (!passedSafetyRule) {
      return 'Emergente'; // fallback — regra de raridade não atingida
    }
  }

  return rawDominant;
}

// ─── Utilidade extra: pontuação detalhada por nível (debug / analytics) ──────
export interface ScoringDetail {
  raw:      ScoreVector;  // soma bruta antes dos pesos
  weighted: ScoreVector;  // após aplicar pesos de raridade
  dominant: CognitiveLevel;
  nexBlockCount: number;  // blocos com nex > 0 (referência para regra de seg.)
  blocksAnalyzed: number; // total de blocos respondidos
}

export function calculateScoringDetail(
  answers: Partial<Record<ScreenId, OptionId>>,
): ScoringDetail {
  let totalRaw: ScoreVector = { op: 0, conv: 0, em: 0, nex: 0 };
  const blockMeta: Array<{ nexScore: number; blockDominant: keyof ScoreVector }> = [];

  for (const [screenId, optionMap] of Object.entries(SCORING_TABLE) as [
    ScreenId,
    Partial<Record<OptionId, ScoreVector>>,
  ][]) {
    const answer = answers[screenId];
    if (!answer) continue;
    const vec = optionMap[answer];
    if (!vec) continue;
    totalRaw = addVectors(totalRaw, vec);
    blockMeta.push({ nexScore: vec.nex, blockDominant: dominantKey(vec) });
  }

  const weighted    = applyWeights(totalRaw);
  const dominant    = calculateDominantLevel(answers);
  const nexBlockCount = blockMeta.filter(b => b.nexScore > 0).length;

  return {
    raw:            totalRaw,
    weighted,
    dominant,
    nexBlockCount,
    blocksAnalyzed: blockMeta.length,
  };
}

// ─── PARTE 3 — Recomendações por Nível × Intenção ────────────────────────────
//
// Fonte: "Documento Interno — Recomendações por Nível"
//
// Intenção é definida pela resposta a q1:
//   A → ia           (Criação com IA)
//   B → design       (Fundamentos do Design)
//   C → monetizacao  (Transformar ideias em valor)
//   D → negocio      (Estruturar negócio criativo)
//
// Cada lista está em ordem de prioridade.
// Os 3 primeiros itens são os slots iniciais exibidos na tela de recomendações.
// O usuário pode trocar qualquer slot dentro da mesma trilha (SwapModal).
// ─────────────────────────────────────────────────────────────────────────────

export type IntentionKey = 'ia' | 'design' | 'monetizacao' | 'negocio';

// Mapeamento q1 answer → intenção
const INTENTION_FROM_Q1: Partial<Record<OptionId, IntentionKey>> = {
  A: 'ia',
  B: 'design',
  C: 'monetizacao',
  D: 'negocio',
};

// Tabela completa de recomendações — nível × intenção → lista ordenada de course IDs
const RECOMMENDATION_LISTS: Record<CognitiveLevel, Record<IntentionKey, string[]>> = {

  // ── Operante: clareza, execução guiada e fundamentos ─────────────────────
  Operante: {
    ia:          ['protocolo_321', 'nexgen', 'syntax', 'ai_image_gen', 'cinematic', 'maestro', 'codexia', 'prompt'],
    design:      ['protocolo_321', 'sandbox', 'matriz', 'gestalt', 'colorful', 'layout', 'signals', 'idea'],
    monetizacao: ['protocolo_321', 'nexgen', 'profit', 'fit', 'curso_mateus', 'expedicao_global', 'search'],
    negocio:     ['protocolo_321', 'nexgen', 'atlas_replay', 'search', 'fit', 'profit', 'expedicao_global', 'deep_zoom'],
  },

  // ── Convergente: método, estrutura e previsibilidade ─────────────────────
  Convergente: {
    ia:          ['protocolo_321', 'nexgen', 'prompt', 'syntax', 'ai_image_gen', 'cinematic', 'maestro', 'codexia'],
    design:      ['protocolo_321', 'idea', 'matriz', 'signals', 'nexgen', 'gestalt', 'colorful', 'layout'],
    monetizacao: ['protocolo_321', 'nexgen', 'profit', 'fit', 'curso_mateus', 'expedicao_global', 'search'],
    negocio:     ['protocolo_321', 'nexgen', 'atlas_replay', 'search', 'fit', 'profit', 'expedicao_global', 'deep_zoom'],
  },

  // ── Emergente: adaptação, contexto e criação própria ─────────────────────
  Emergente: {
    ia:          ['protocolo_321', 'nexgen', 'idea', 'prompt', 'ai_first', 'codexia', 'syntax', 'ai_image_gen', 'search'],
    design:      ['protocolo_321', 'idea', 'matriz', 'signals', 'nexgen', 'gestalt', 'colorful', 'layout'],
    monetizacao: ['protocolo_321', 'nexgen', 'profit', 'fit', 'curso_mateus', 'expedicao_global', 'search'],
    negocio:     ['protocolo_321', 'nexgen', 'atlas_replay', 'search', 'fit', 'profit', 'expedicao_global', 'deep_zoom'],
  },

  // ── Nexialista: integração, sistemas vivos e impacto real ────────────────
  Nexialista: {
    ia:          ['protocolo_321', 'idea', 'nexgen', 'prompt', 'ai_first', 'codexia', 'syntax', 'ai_image_gen', 'search'],
    design:      ['protocolo_321', 'idea', 'matriz', 'signals', 'nexgen', 'gestalt', 'colorful', 'layout'],
    monetizacao: ['protocolo_321', 'nexgen', 'profit', 'fit', 'curso_mateus', 'expedicao_global', 'search'],
    negocio:     ['protocolo_321', 'nexgen', 'atlas_replay', 'search', 'fit', 'profit', 'expedicao_global', 'deep_zoom'],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// getRecommendedIds
//
// Recebe o dicionário completo de respostas e retorna os 3 IDs de cursos a
// exibir nos slots iniciais da tela de recomendações.
//
// Lógica:
//   1. Calcula o nível cognitivo dominante via calculateDominantLevel()
//   2. Mapeia a resposta de q1 para a intenção declarada
//   3. Retorna os primeiros 3 itens da lista correspondente
// ─────────────────────────────────────────────────────────────────────────────
export function getRecommendedIds(
  answers: Partial<Record<ScreenId, OptionId>>,
): string[] {
  const level     = calculateDominantLevel(answers);
  const q1Answer  = answers['q1'];
  const intention = INTENTION_FROM_Q1[q1Answer as OptionId] ?? 'ia';

  return RECOMMENDATION_LISTS[level][intention].slice(0, 3);
}