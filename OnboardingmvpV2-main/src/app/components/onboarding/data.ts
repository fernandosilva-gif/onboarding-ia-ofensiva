// ─── Types ───────────────────────────────────────────────────────────────────
export type OptionId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type ScreenId =
  | 'welcome'
  | 'q1'
  | 'q1b_ia' | 'q1b_fundamentos' | 'q1b_ideias' | 'q1b_negocios'
  | 'q2' | 'q3' | 'q4'
  | 'capabilities_list'
  | 'q5_meta'
  | 'notification_permission'
  | 'q6_eu_aprendo'
  | 'q7_confortavel'
  | 'summary'
  | 'loading'
  | 'recommendations'
  | 'ofensiva'
  | 'fractais'
  | 'criar_perfil_intro'
  | 'idade'
  | 'criar_conta'
  | 'completion';

export interface Option {
  id: OptionId;
  label: string;
}

export interface QuestionDef {
  type: 'question';
  id: ScreenId;
  step: number;
  title: string;
  subtitle?: string;
  options: Option[];
  branching?: boolean;
  skipAllowed?: boolean;
}

export interface InfoDef {
  type: 'info';
  id: ScreenId;
  step: number;
  variant:
    | 'welcome'
    | 'capabilities_list'
    | 'notification_permission'
    | 'summary'
    | 'loading'
    | 'recommendations'
    | 'ofensiva'
    | 'fractais'
    | 'criar_perfil_intro'
    | 'idade'
    | 'criar_conta'
    | 'completion';
}

export type ScreenDef = QuestionDef | InfoDef;

// ─── Constants ────────────────────────────────────────────────────────────────
export const TOTAL_STEPS = 12;

// ─── Screen Definitions ───────────────────────────────────────────────────────
export const SCREENS: Record<ScreenId, ScreenDef> = {
  welcome: { type: 'info', id: 'welcome', step: 0, variant: 'welcome' },

  // ── Q1: Objetivo principal ──────────────────────────────────────────────────
  q1: {
    type: 'question', id: 'q1', step: 1,
    title: 'Eu quero aprender…',
    subtitle: 'Sua resposta define a direção da sua jornada na Overlens.',
    branching: true,
    options: [
      { id: 'A', label: 'a usar IA para criar coisas na prática' },
      { id: 'B', label: 'os fundamentos que sustentam uma boa criação' },
      { id: 'C', label: 'a transformar ideias em valor no mundo real' },
      { id: 'D', label: 'a estruturar um negócio criativo em crescimento' },
    ],
  },

  // ── Q1b: Sub-perguntas condicionais ────────────────────────────────────────
  q1b_ia: {
    type: 'question', id: 'q1b_ia', step: 2,
    title: 'Dentro da criação com IA, seu foco principal é:',
    options: [
      { id: 'A', label: 'Criação de Texto com IA' },
      { id: 'B', label: 'Criação de Imagens com IA' },
      { id: 'C', label: 'Criação de Vídeos com IA' },
      { id: 'D', label: 'Criação de Músicas com IA' },
      { id: 'E', label: 'Criação de WebApps com IA' },
    ],
  },

  q1b_fundamentos: {
    type: 'question', id: 'q1b_fundamentos', step: 2,
    title: 'Dentro dos Fundamentos da Criação, seu foco do momento é:',
    options: [
      { id: 'A', label: 'Princípios Básicos do Design' },
      { id: 'B', label: 'Fundamentos das Formas' },
      { id: 'C', label: 'Fundamentos das Cores' },
      { id: 'D', label: 'Fundamentos da Composição' },
      { id: 'E', label: 'Fundamentos da Mensagem' },
      { id: 'F', label: 'Filosofia da Criação' },
    ],
  },

  q1b_ideias: {
    type: 'question', id: 'q1b_ideias', step: 2,
    title: 'Dentro desse tema, o que mais te interessa agora é:',
    options: [
      { id: 'A', label: 'validar se uma ideia faz sentido' },
      { id: 'B', label: 'organizar um projeto para não me perder' },
      { id: 'C', label: 'transformar criação em algo vendável' },
      { id: 'D', label: 'entender por que algumas ideias prosperam e outras não' },
      { id: 'E', label: 'estruturar algo que continue funcionando ao longo do tempo' },
    ],
  },

  q1b_negocios: {
    type: 'question', id: 'q1b_negocios', step: 2,
    title: 'Dentro da Estruturação de Negócios, sua prioridade é:',
    options: [
      { id: 'A', label: 'ganhar mais clareza do que fazer agora' },
      { id: 'B', label: 'organizar melhor processos e rotinas' },
      { id: 'C', label: 'aumentar resultados sem perder controle' },
      { id: 'D', label: 'tomar decisões melhores em cenários incertos' },
      { id: 'E', label: 'construir estruturas que não dependam só de mim' },
    ],
  },

  // ── Q2: Canal de aquisição ──────────────────────────────────────────────────
  q2: {
    type: 'question', id: 'q2', step: 3,
    title: 'Como você soube da Overlens?',
    options: [
      { id: 'A', label: 'Busca no Google' },
      { id: 'B', label: 'Facebook ou Instagram' },
      { id: 'C', label: 'Notícia, artigo ou blog' },
      { id: 'D', label: 'Youtube' },
      { id: 'E', label: 'Linkedin' },
      { id: 'F', label: 'Whatsapp' },
      { id: 'G', label: 'Amigos' },
      { id: 'H', label: 'Outros' },
    ],
  },

  // ── Q3: Motivação ───────────────────────────────────────────────────────────
  q3: {
    type: 'question', id: 'q3', step: 4,
    title: 'Você quer aprender sobre criação para…',
    options: [
      { id: 'A', label: 'Me tornar profissional na área' },
      { id: 'B', label: 'Desenvolver meu próprio negócio' },
      { id: 'C', label: 'Criar projetos reais / melhorar portfólio' },
      { id: 'D', label: 'Melhorar resultados no trabalho' },
      { id: 'E', label: 'Me adaptar às mudanças do mercado' },
    ],
  },

  // ── Q4: Experiência ─────────────────────────────────────────────────────────
  q4: {
    type: 'question', id: 'q4', step: 5,
    title: 'Qual é a sua experiência com criação?',
    options: [
      { id: 'A', label: 'Não sei nada sobre criação' },
      { id: 'B', label: 'Já criei ao menos um projeto' },
      { id: 'C', label: 'Já criei ao menos um produto' },
      { id: 'D', label: 'Já criei ao menos um negócio' },
      { id: 'E', label: 'Já criei ao menos um ecossistema' },
    ],
  },

  // ── Info: Capacidades ───────────────────────────────────────────────────────
  capabilities_list: { type: 'info', id: 'capabilities_list', step: 6, variant: 'capabilities_list' },

  // ── Q5: Meta semanal ────────────────────────────────────────────────────────
  q5_meta: {
    type: 'question', id: 'q5_meta', step: 7,
    title: 'Qual vai ser a sua meta semanal?',
    subtitle: 'Você pode ajustar isso depois. Escolha um ritmo real para o seu dia a dia.',
    options: [
      { id: 'A', label: '1 hora / semana  —  Casual' },
      { id: 'B', label: '2 horas / semana  —  Regular' },
      { id: 'C', label: '6 horas / semana  —  Intensa' },
      { id: 'D', label: '12 horas / semana  —  Puxada' },
    ],
  },

  // ── Info: Notificação ───────────────────────────────────────────────────────
  notification_permission: { type: 'info', id: 'notification_permission', step: 8, variant: 'notification_permission' },

  // ── Q6: Estilo de aprendizado ───────────────────────────────────────────────
  q6_eu_aprendo: {
    type: 'question', id: 'q6_eu_aprendo', step: 9,
    title: 'Eu aprendo melhor quando…',
    options: [
      { id: 'A', label: 'alguém mostra exatamente como fazer' },
      { id: 'B', label: 'existe um método claro para seguir' },
      { id: 'C', label: 'posso analisar casos reais' },
      { id: 'D', label: 'preciso testar várias hipóteses' },
      { id: 'E', label: 'preciso lidar com as consequências' },
    ],
  },

  // ── Q7: Conforto no aprendizado ─────────────────────────────────────────────
  q7_confortavel: {
    type: 'question', id: 'q7_confortavel', step: 10,
    title: 'Ao aprender, me sinto mais confortável quando…',
    options: [
      { id: 'A', label: 'fica muito claro qual é o próximo passo' },
      { id: 'B', label: 'existe uma estrutura validada para seguir' },
      { id: 'C', label: 'posso adaptar sem precisar refazer tudo' },
      { id: 'D', label: 'preciso decidir mesmo sem todas as respostas' },
      { id: 'E', label: 'o resultado depende totalmente de mim' },
    ],
  },

  // ── Info: pós-quiz ──────────────────────────────────────────────────────────
  summary:          { type: 'info', id: 'summary',          step: 11, variant: 'summary' },
  loading:          { type: 'info', id: 'loading',          step: 12, variant: 'loading' },
  recommendations:  { type: 'info', id: 'recommendations',  step: 12, variant: 'recommendations' },
  ofensiva:         { type: 'info', id: 'ofensiva',         step: 12, variant: 'ofensiva' },
  fractais:         { type: 'info', id: 'fractais',         step: 12, variant: 'fractais' },
  criar_perfil_intro: { type: 'info', id: 'criar_perfil_intro', step: 12, variant: 'criar_perfil_intro' },
  idade:            { type: 'info', id: 'idade',            step: 12, variant: 'idade' },
  criar_conta:      { type: 'info', id: 'criar_conta',      step: 12, variant: 'criar_conta' },
  completion:       { type: 'info', id: 'completion',       step: 12, variant: 'completion' },
};

// ─── Navigation Logic ─────────────────────────────────────────────────────────
export function getNextScreen(currentId: ScreenId, answer?: OptionId): ScreenId {
  switch (currentId) {
    case 'welcome': return 'q1';

    case 'q1':
      if (answer === 'A') return 'q1b_ia';
      if (answer === 'B') return 'q1b_fundamentos';
      if (answer === 'C') return 'q1b_ideias';
      return 'q1b_negocios';

    case 'q1b_ia':
    case 'q1b_fundamentos':
    case 'q1b_ideias':
    case 'q1b_negocios':
      return 'q2';

    case 'q2':                   return 'q3';
    case 'q3':                   return 'q4';
    case 'q4':                   return 'capabilities_list';
    case 'capabilities_list':    return 'q5_meta';
    case 'q5_meta':              return 'notification_permission';
    case 'notification_permission': return 'q6_eu_aprendo';
    case 'q6_eu_aprendo':        return 'q7_confortavel';
    case 'q7_confortavel':       return 'summary';
    case 'summary':              return 'loading';
    case 'loading':              return 'recommendations';
    case 'recommendations':      return 'ofensiva';
    case 'ofensiva':             return 'fractais';
    case 'fractais':             return 'criar_perfil_intro';
    case 'criar_perfil_intro':   return 'idade';
    case 'idade':                return 'criar_conta';
    case 'criar_conta':          return 'completion';
    default:                     return 'welcome';
  }
}
