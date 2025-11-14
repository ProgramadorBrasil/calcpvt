import { CourseModule, CourseLanding } from "../types/course.types";

// Landing page data
export const courseLanding: CourseLanding = {
  title: "Curso Completo: Leilão Judicial para Servidores TJPE",
  subtitle: "Capacitação especializada em leilões judiciais de imóveis",
  description: "Curso completo para servidores públicos do Tribunal de Justiça de Pernambuco que atuam na condução de processos de execução envolvendo leilões judiciais.",
  totalModules: 10,
  estimatedHours: 8,
  objectives: [
    "Elaborar editais de leilão juridicamente seguros",
    "Realizar notificações adequadas evitando nulidades",
    "Gerenciar avaliações e atualizar valores corretamente",
    "Garantir conformidade legal em todo procedimento",
    "Evitar prejuízos às partes e ao processo",
    "Compreender responsabilidades tributárias e condominiais",
  ],
  audience: [
    "Servidores do Poder Judiciário do TJPE",
    "Profissionais que atuam em processos de execução",
    "Gestores de vara cível e execução",
    "Leiloeiros credenciados",
  ],
  requirements: [
    "Conhecimento básico de Direito Processual Civil",
    "Familiaridade com processos judiciais",
    "Acesso a computador ou dispositivo móvel",
  ],
  outcomes: [
    "Domínio completo da legislação aplicável (CPC, CTN, Lei 9.514/97)",
    "Capacidade de elaborar editais completos e seguros",
    "Conhecimento profundo sobre débitos e sub-rogação",
    "Habilidade em evitar os 10 erros mais comuns",
    "Certificado de conclusão com 8 horas",
  ],
};

// Module 1: Fundamentos Legais do Leilão Judicial
const module01: CourseModule = {
  id: "mod-01",
  number: 1,
  title: "Fundamentos Legais do Leilão Judicial",
  description: "Compreenda a base legal que rege os leilões judiciais no Brasil",
  icon: "Book",
  estimatedMinutes: 45,
  locked: false,
  order: 1,
  lessons: [
    {
      id: "mod-01-lesson-01",
      title: "Código de Processo Civil (Arts. 879 a 903)",
      description: "Fundamentos do CPC sobre alienação judicial",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O leilão judicial é regulamentado pelos artigos 879 a 903 do Código de Processo Civil de 2015 (Lei 13.105/2015). Estes dispositivos estabelecem os procedimentos para alienação de bens penhorados em processos de execução.",
        },
        {
          type: "legal-text",
          content: "Art. 879. A alienação em hasta pública realizar-se-á por leilão, quando se tratar de bens móveis, e por praça, quando se tratar de bens imóveis.",
          metadata: {
            legalReference: "CPC, Art. 879",
          },
        },
        {
          type: "callout",
          content: "A preferência legal é pelo leilão eletrônico, conforme estabelecido pelo Conselho Nacional de Justiça na Resolução nº 236/2016.",
          metadata: {
            calloutType: "info",
            title: "Modernização do Processo",
          },
        },
        {
          type: "text",
          content: "O Art. 879 define as duas formas principais de alienação judicial:",
        },
        {
          type: "checklist",
          content: "Formas de Alienação Judicial",
          metadata: {
            items: [
              "Por iniciativa particular (Art. 880)",
              "Em leilão judicial eletrônico (preferencial)",
              "Em leilão judicial presencial",
            ],
          },
        },
        {
          type: "legal-text",
          content: "Art. 903. Assinado o auto pelo juiz, pelo arrematante e pelo leiloeiro, a arrematação será considerada perfeita, acabada e irretratável, ainda que venham a ser julgados procedentes os embargos do executado.",
          metadata: {
            legalReference: "CPC, Art. 903",
          },
        },
        {
          type: "callout",
          content: "Este dispositivo é fundamental para compreender a natureza definitiva da arrematação. Uma vez assinado o auto, a arrematação se torna irretratável.",
          metadata: {
            calloutType: "warning",
            title: "Irretratabilidade da Arrematação",
          },
        },
      ],
    },
    {
      id: "mod-01-lesson-02",
      title: "Lei 9.514/97: Alienação Fiduciária de Imóveis",
      description: "Entenda os leilões extrajudiciais e sua relação com o sistema",
      estimatedMinutes: 10,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Para leilões extrajudiciais relacionados à alienação fiduciária, aplica-se a Lei 9.514/97. Esta lei regula especificamente os procedimentos quando há inadimplemento em contratos com garantia fiduciária.",
        },
        {
          type: "text",
          content: "**Diferenças fundamentais entre leilão judicial e extrajudicial:**",
        },
        {
          type: "checklist",
          content: "Leilão Judicial (CPC)",
          metadata: {
            items: [
              "Conduzido pelo Poder Judiciário",
              "Processo de execução judicial",
              "Leiloeiro designado pelo juiz",
              "Participação de todas as partes do processo",
            ],
          },
        },
        {
          type: "checklist",
          content: "Leilão Extrajudicial (Lei 9.514/97)",
          metadata: {
            items: [
              "Promovido pelo credor fiduciário",
              "Após consolidação da propriedade",
              "Sem intervenção judicial inicial",
              "Procedimento mais ágil mas com menos garantias",
            ],
          },
        },
        {
          type: "callout",
          content: "No TJPE, a grande maioria dos leilões são judiciais, seguindo o CPC. Contudo, é essencial conhecer a Lei 9.514/97 porque muitos imóveis penhorados podem ter histórico de alienação fiduciária.",
          metadata: {
            calloutType: "tip",
            title: "Ponto Crítico para Servidores",
          },
        },
      ],
    },
    {
      id: "mod-01-lesson-03",
      title: "Código Tributário Nacional: Artigo 130",
      description: "Responsabilidade tributária em leilões judiciais",
      estimatedMinutes: 20,
      order: 3,
      sections: [
        {
          type: "text",
          content: "O artigo 130 do CTN é absolutamente fundamental para compreender a responsabilidade tributária em leilões judiciais.",
        },
        {
          type: "legal-text",
          content: "Art. 130. Os créditos tributários relativos a impostos cujo fato gerador seja a propriedade, o domínio útil ou a posse de bens imóveis, e bem assim os relativos a taxas pela prestação de serviços referentes a tais bens, ou a contribuições de melhoria, subrogam-se na pessoa dos respectivos adquirentes, salvo quando conste do título a prova de sua quitação.\n\nParágrafo único. No caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço.",
          metadata: {
            legalReference: "CTN, Art. 130",
          },
        },
        {
          type: "callout",
          content: "**Interpretação prática:** Quando o edital menciona expressamente o artigo 130 do CTN, os débitos tributários (IPTU, taxas municipais) anteriores à data do leilão NÃO são de responsabilidade do arrematante. Esses débitos são pagos com o valor da arrematação depositado em juízo (sub-rogação).",
          metadata: {
            calloutType: "success",
            title: "Proteção ao Arrematante",
          },
        },
        {
          type: "text",
          content: "**Decisão Recente do STJ (Tema 1.134/2024):**",
        },
        {
          type: "callout",
          content: "O Superior Tribunal de Justiça decidiu que é **inválida** qualquer cláusula no edital que atribua ao arrematante a responsabilidade por débitos tributários anteriores à arrematação, mesmo que prevista no edital.",
          metadata: {
            calloutType: "error",
            title: "⚠️ ATENÇÃO: Cláusula Inválida",
          },
        },
        {
          type: "case-study",
          content: "**Caso Prático:**\n\nImóvel avaliado em R$ 300.000,00 com IPTU atrasado de R$ 50.000,00.\n\n**Arrematação:** R$ 280.000,00\n\n**Distribuição do valor:**\n1. IPTU (sub-rogado): R$ 50.000,00\n2. Credor exequente: R$ 230.000,00\n3. Arrematante: Recebe imóvel livre de débitos fiscais\n\n**Resultado:** O arrematante não paga os R$ 50.000,00 de IPTU. A Prefeitura recebe do valor da arrematação.",
          metadata: {
            title: "Exemplo de Sub-rogação",
          },
        },
      ],
    },
  ],
};

// Module 2-10 Placeholders (to be filled with complete content)
const module02: CourseModule = {
  id: "mod-02",
  number: 2,
  title: "Elaboração do Edital de Leilão",
  description: "Aprenda a elaborar editais juridicamente seguros e completos",
  icon: "FileText",
  estimatedMinutes: 60,
  locked: false,
  order: 2,
  lessons: [
    {
      id: "mod-02-lesson-01",
      title: "Elementos Obrigatórios do Edital (CPC Art. 886)",
      description: "Conteúdo mínimo que deve constar no edital",
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O edital é o documento mais importante do leilão judicial. Sua elaboração inadequada pode levar à nulidade de todo o procedimento. O Art. 886 do CPC estabelece o conteúdo mínimo obrigatório.",
        },
        {
          type: "checklist",
          content: "Conteúdo Mínimo Obrigatório (Art. 886, CPC)",
          metadata: {
            items: [
              "Descrição completa e precisa do bem (endereço, área, matrícula)",
              "Número do processo judicial e vara competente",
              "Valor da avaliação oficial com data",
              "Preço mínimo para 1ª e 2ª praças",
              "Condições de pagamento (à vista ou parcelado)",
              "Data, horário e local do leilão",
              "Identificação completa do leiloeiro",
              "Comissão do leiloeiro e despesas",
              "Situação de ocupação do imóvel",
              "Ônus, gravames e débitos (IPTU, condomínio)",
              "Menção expressa ao Art. 130 do CTN",
              "Regras de participação e documentos necessários",
            ],
          },
        },
        {
          type: "callout",
          content: "A falta de qualquer elemento obrigatório pode gerar nulidade do leilão e prejuízos irreparáveis às partes.",
          metadata: {
            calloutType: "warning",
            title: "Atenção aos Elementos Obrigatórios",
          },
        },
      ],
    },
    // Additional lessons to be added...
  ],
};

const module03: CourseModule = {
  id: "mod-03",
  number: 3,
  title: "Notificações e Intimações",
  description: "Procedimentos corretos de notificação para evitar nulidades",
  icon: "Bell",
  estimatedMinutes: 40,
  locked: false,
  order: 3,
  lessons: [],
};

const module04: CourseModule = {
  id: "mod-04",
  number: 4,
  title: "Avaliação de Bens e Atualização de Valores",
  description: "Laudos de avaliação, prazos de validade e preço vil",
  icon: "Calculator",
  estimatedMinutes: 50,
  locked: false,
  order: 4,
  lessons: [],
};

const module05: CourseModule = {
  id: "mod-05",
  number: 5,
  title: "Averbação na Matrícula do Imóvel",
  description: "Registro de penhora e averbações necessárias",
  icon: "FileCheck",
  estimatedMinutes: 55,
  locked: false,
  order: 5,
  lessons: [],
};

const module06: CourseModule = {
  id: "mod-06",
  number: 6,
  title: "Débitos Fiscais e Condominiais",
  description: "Sub-rogação, responsabilidades e decisões do STJ",
  icon: "Receipt",
  estimatedMinutes: 70,
  locked: false,
  order: 6,
  lessons: [],
};

const module07: CourseModule = {
  id: "mod-07",
  number: 7,
  title: "Formas de Pagamento e Parcelamento",
  description: "Pagamento à vista, parcelamento e garantias",
  icon: "CreditCard",
  estimatedMinutes: 45,
  locked: false,
  order: 7,
  lessons: [],
};

const module08: CourseModule = {
  id: "mod-08",
  number: 8,
  title: "Publicação e Transparência",
  description: "Divulgação do edital e resolução CNJ 236/2016",
  icon: "Megaphone",
  estimatedMinutes: 35,
  locked: false,
  order: 8,
  lessons: [],
};

const module09: CourseModule = {
  id: "mod-09",
  number: 9,
  title: "Procedimentos Pós-Leilão",
  description: "Auto de arrematação, carta e imissão na posse",
  icon: "CheckCircle",
  estimatedMinutes: 65,
  locked: false,
  order: 9,
  lessons: [],
};

const module10: CourseModule = {
  id: "mod-10",
  number: 10,
  title: "Casos Práticos e Erros Comuns",
  description: "Análise de casos reais e como evitar erros",
  icon: "AlertTriangle",
  estimatedMinutes: 80,
  locked: false,
  order: 10,
  lessons: [],
};

// Export all modules
export const courseModules: CourseModule[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
  module10,
];

// Helper functions
export const getModuleById = (id: string): CourseModule | undefined => {
  return courseModules.find((module) => module.id === id);
};

export const getLessonById = (lessonId: string): { module: CourseModule; lesson: any } | undefined => {
  for (const module of courseModules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { module, lesson };
    }
  }
  return undefined;
};

export const getTotalCourseMinutes = (): number => {
  return courseModules.reduce((total, module) => total + module.estimatedMinutes, 0);
};

export const getModuleProgress = (moduleId: string, completedLessons: string[]): number => {
  const module = getModuleById(moduleId);
  if (!module || module.lessons.length === 0) return 0;

  const completed = module.lessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
  return Math.round((completed / module.lessons.length) * 100);
};
