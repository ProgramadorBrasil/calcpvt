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

// Module 2: Elaboração do Edital de Leilão
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
      title: "Elementos Obrigatórios do Edital (Art. 886 CPC)",
      description: "Conteúdo mínimo que deve constar no edital",
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O edital é o documento mais importante do leilão judicial. Sua elaboração inadequada pode levar à nulidade de todo o procedimento.",
        },
        {
          type: "checklist",
          content: "Conteúdo Mínimo Obrigatório (Art. 886, CPC)",
          metadata: {
            items: [
              "Descrição completa e precisa do bem (tipo, localização, área, matrícula)",
              "Número do processo judicial, vara e comarca",
              "Valor da avaliação oficial com data",
              "Preço mínimo para 1ª e 2ª praças",
              "Condições de pagamento (à vista ou parcelado)",
              "Data, horário e local do leilão",
              "Identificação completa do leiloeiro",
              "Comissão do leiloeiro e despesas",
              "Situação de ocupação do imóvel",
              "Ônus, gravames e débitos (IPTU, condomínio)",
              "Menção expressa ao Art. 130 do CTN",
              "Regras de participação e impedimentos legais",
              "Regras de lances e prorrogação automática",
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
    {
      id: "mod-02-lesson-02",
      title: "Como Fazer o Edital - Passo a Passo Prático",
      description: "Guia prático para elaboração correta do edital",
      estimatedMinutes: 25,
      order: 2,
      sections: [
        {
          type: "text",
          content: "A elaboração do edital deve seguir um procedimento metódico para garantir que todos os requisitos legais sejam atendidos.",
        },
        {
          type: "checklist",
          content: "Passo a Passo da Elaboração",
          metadata: {
            items: [
              "PASSO 1: Reunir documentação (matrícula atualizada, laudo, certidões, fotos)",
              "PASSO 2: Definir valores (avaliação atualizada, preço mínimo 1ª e 2ª praças)",
              "PASSO 3: Definir condições de pagamento (à vista ou parcelado Art. 895 CPC)",
              "PASSO 4: Informar débitos (incluir Art. 130 CTN, IPTU, condomínio)",
              "PASSO 5: Designar leiloeiro credenciado no TJPE",
              "PASSO 6: Estabelecer datas (mínimo 5 dias entre publicação e leilão)",
              "PASSO 7: Revisão jurídica completa",
            ],
          },
        },
        {
          type: "callout",
          content: "SEMPRE incluir menção expressa ao Art. 130, parágrafo único, do CTN para garantir que débitos fiscais anteriores sejam sub-rogados no preço da arrematação.",
          metadata: {
            calloutType: "tip",
            title: "Menção ao Art. 130 CTN é Crítica",
          },
        },
        {
          type: "text",
          content: "Condições de parcelamento (quando permitido): entrada mínima de 25%, prazo máximo de 30 meses, garantia por hipoteca do próprio bem (Art. 895 CPC).",
        },
      ],
    },
    {
      id: "mod-02-lesson-03",
      title: "Preço Vil - Como Evitar",
      description: "Entenda o conceito de preço vil e como evitá-lo",
      estimatedMinutes: 15,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Preço vil é o valor excessivamente baixo, que não corresponde ao valor real do bem, causando prejuízo ao executado.",
        },
        {
          type: "legal-text",
          content: "Art. 891. Considera-se vil o preço inferior a 50% (cinquenta por cento) do valor da avaliação.",
          metadata: {
            legalReference: "CPC, Art. 891",
          },
        },
        {
          type: "checklist",
          content: "Como Evitar Preço Vil",
          metadata: {
            items: [
              "Manter avaliações atualizadas (máximo 6 meses a 2 anos)",
              "Na 2ª praça, fixar preço mínimo razoável (nunca inferior a 50%)",
              "Atualizar monetariamente valor da avaliação se houver decurso de tempo",
              "Determinar nova avaliação se passaram mais de 2 anos",
            ],
          },
        },
        {
          type: "callout",
          content: "O STJ entende que decurso de tempo superior a 2 anos entre avaliação e leilão pode caracterizar preço vil, ensejando anulação do procedimento.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência do STJ",
          },
        },
      ],
    },
  ],
};

// Module 3: Notificações e Intimações
const module03: CourseModule = {
  id: "mod-03",
  number: 3,
  title: "Notificações e Intimações",
  description: "Procedimentos corretos de notificação para evitar nulidades",
  icon: "Bell",
  estimatedMinutes: 40,
  locked: false,
  order: 3,
  lessons: [
    {
      id: "mod-03-lesson-01",
      title: "Quem Deve Ser Notificado Antes do Leilão",
      description: "Lista completa de pessoas e entidades que devem ser intimadas",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "text",
          content: "Esta é uma das maiores fontes de erros e nulidades em leilões judiciais. A falta de notificação adequada pode anular todo o procedimento.",
        },
        {
          type: "checklist",
          content: "Lista de Notificações Obrigatórias",
          metadata: {
            items: [
              "Executado (devedor) - por meio de seu advogado ou Defensor Público",
              "Cônjuge do executado - fundamental para evitar nulidade",
              "Exequente (credor)",
              "Credores com garantia real (hipotecários, penhora anterior)",
              "Fazenda Pública (Prefeitura, Estado ou União) se houver débitos",
              "Condomínio se houver débitos condominiais",
              "Ocupantes do imóvel a qualquer título",
              "Promitentes compradores com contrato registrado",
            ],
          },
        },
        {
          type: "callout",
          content: "A ausência de qualquer intimação obrigatória pode levar à anulação completa do leilão, causando prejuízos irreparáveis ao processo.",
          metadata: {
            calloutType: "warning",
            title: "Falta de Intimação Gera Nulidade",
          },
        },
      ],
    },
    {
      id: "mod-03-lesson-02",
      title: "Prazos e Formas de Notificação",
      description: "Procedimentos corretos para cada tipo de intimação",
      estimatedMinutes: 10,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Cada parte deve ser intimada pela forma apropriada, respeitando os prazos legais.",
        },
        {
          type: "checklist",
          content: "Formas de Intimação",
          metadata: {
            items: [
              "Advogado constituído: Intimação pelo Diário da Justiça Eletrônico (DJE)",
              "Defensor Público: Intimação pelo DJE",
              "Sem advogado: Intimação pessoal por oficial de justiça, correio AR ou edital",
              "Fazenda Pública: Carta com AR para endereço oficial",
            ],
          },
        },
        {
          type: "callout",
          content: "A intimação deve ocorrer ANTES da publicação do edital. O edital deve ser publicado com antecedência mínima de 5 dias da data do leilão.",
          metadata: {
            calloutType: "info",
            title: "Prazo Mínimo",
          },
        },
      ],
    },
    {
      id: "mod-03-lesson-03",
      title: "Notificação da Prefeitura - Ponto Crítico",
      description: "Por que é fundamental notificar a Fazenda Pública",
      estimatedMinutes: 10,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Se o imóvel tiver débitos de IPTU e a Prefeitura não for intimada do leilão, os débitos não serão sub-rogados no preço e a Prefeitura poderá cobrar diretamente do arrematante.",
        },
        {
          type: "checklist",
          content: "Procedimento Correto de Notificação da Prefeitura",
          metadata: {
            items: [
              "Verificar na matrícula se há débitos fiscais",
              "Obter certidão de débitos junto à Prefeitura",
              "Intimar formalmente a Prefeitura por carta AR",
              "Aguardar prazo legal para manifestação",
              "Incluir no edital informação sobre débitos e sub-rogação (Art. 130 CTN)",
            ],
          },
        },
        {
          type: "callout",
          content: "Arrematante pode tentar anular a arrematação se for cobrado por débitos fiscais que deveriam ter sido sub-rogados. Todo trabalho do leilão pode ser perdido.",
          metadata: {
            calloutType: "error",
            title: "Risco de Perda do Bem",
          },
        },
      ],
    },
    {
      id: "mod-03-lesson-04",
      title: "Consequências da Falta de Notificação",
      description: "Prejuízos causados por notificações inadequadas",
      estimatedMinutes: 5,
      order: 4,
      sections: [
        {
          type: "text",
          content: "A falta de notificação adequada gera graves consequências para o processo e para as partes.",
        },
        {
          type: "checklist",
          content: "Consequências da Falta de Notificação",
          metadata: {
            items: [
              "Nulidade do leilão (embargos de terceiro, ação anulatória)",
              "Impugnação à arrematação",
              "Perda do bem arrematado",
              "Devolução do valor pago ao arrematante",
              "Impossibilidade de imissão na posse",
              "Atraso na satisfação do crédito",
              "Necessidade de novo leilão com custos adicionais",
            ],
          },
        },
      ],
    },
  ],
};

// Module 4: Avaliação de Bens e Atualização de Valores
const module04: CourseModule = {
  id: "mod-04",
  number: 4,
  title: "Avaliação de Bens e Atualização de Valores",
  description: "Laudos de avaliação, prazos de validade e preço vil",
  icon: "Calculator",
  estimatedMinutes: 50,
  locked: false,
  order: 4,
  lessons: [
    {
      id: "mod-04-lesson-01",
      title: "Validade da Avaliação",
      description: "Prazos de validade de laudos de avaliação",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "text",
          content: "A legislação não estabelece prazo fixo de validade para laudos de avaliação. Contudo, a jurisprudência consolidou parâmetros claros.",
        },
        {
          type: "checklist",
          content: "Prazos de Validade da Avaliação",
          metadata: {
            items: [
              "Ideal: Avaliação realizada até 6 meses antes do leilão",
              "Aceitável: Avaliação realizada até 1 ano antes do leilão",
              "Problemático: Avaliação realizada há mais de 2 anos",
            ],
          },
        },
        {
          type: "callout",
          content: "O decurso de tempo superior a dois anos entre a avaliação e a data marcada para alienação judicial é capaz de alterar substancialmente o valor do bem, impondo prejuízos ao executado.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência do STJ",
          },
        },
      ],
    },
    {
      id: "mod-04-lesson-02",
      title: "Quando É Necessário Atualizar a Avaliação",
      description: "Situações que exigem nova avaliação",
      estimatedMinutes: 15,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Determinadas situações exigem obrigatoriamente a realização de nova avaliação do bem.",
        },
        {
          type: "checklist",
          content: "Situações que Exigem Nova Avaliação",
          metadata: {
            items: [
              "Decurso de tempo significativo (mais de 2 anos)",
              "Alterações substanciais no mercado imobiliário da região",
              "Benfeitorias realizadas ou deterioração do bem",
              "Obras de infraestrutura na região (metrô, viadutos, etc.)",
              "Impugnação fundamentada da avaliação pela parte",
            ],
          },
        },
        {
          type: "callout",
          content: "O juiz pode determinar nova avaliação de ofício se verificar que a anterior está desatualizada, mesmo sem provocação das partes.",
          metadata: {
            calloutType: "info",
            title: "Poder do Juiz",
          },
        },
      ],
    },
    {
      id: "mod-04-lesson-03",
      title: "Como Atualizar a Avaliação",
      description: "Três formas de atualização de valores",
      estimatedMinutes: 20,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Existem três formas principais de atualizar a avaliação de um bem penhorado.",
        },
        {
          type: "checklist",
          content: "Formas de Atualização",
          metadata: {
            items: [
              "Atualização monetária simples: Aplicação de índice (IPCA, INPC, IGP-M) - até 1 ano",
              "Nova avaliação completa: Novo laudo técnico com vistoria - mais de 2 anos",
              "Atualização pelo avaliador: Mesmo profissional atualiza valores sem nova vistoria",
            ],
          },
        },
        {
          type: "checklist",
          content: "Procedimento Prático para Servidores",
          metadata: {
            items: [
              "Verificar data da última avaliação nos autos",
              "Se passou mais de 6 meses: considerar atualização monetária",
              "Se passou mais de 2 anos: solicitar nova avaliação ao juiz",
              "Incluir no edital a data da avaliação utilizada",
            ],
          },
        },
        {
          type: "callout",
          content: "A mera correção monetária não reflete mudanças reais no mercado imobiliário. Para períodos longos, é indispensável nova avaliação técnica.",
          metadata: {
            calloutType: "warning",
            title: "Atualização Monetária Não Reflete Mercado",
          },
        },
      ],
    },
  ],
};

// Module 5: Averbação na Matrícula do Imóvel
const module05: CourseModule = {
  id: "mod-05",
  number: 5,
  title: "Averbação na Matrícula do Imóvel",
  description: "Registro de penhora e averbações necessárias",
  icon: "FileCheck",
  estimatedMinutes: 55,
  locked: false,
  order: 5,
  lessons: [
    {
      id: "mod-05-lesson-01",
      title: "O Que É Averbação e Por Que É Necessária",
      description: "Conceito e importância da averbação",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "text",
          content: "Averbação é o registro de um ato ou fato que modifica ou esclarece a situação jurídica do imóvel na matrícula do Cartório de Registro de Imóveis.",
        },
        {
          type: "checklist",
          content: "Tipos de Averbação Relevantes para Leilão",
          metadata: {
            items: [
              "Averbação da penhora: Registra que imóvel está penhorado em processo",
              "Averbação da consolidação da propriedade fiduciária",
              "Averbação da arrematação: Transfere propriedade ao arrematante",
            ],
          },
        },
        {
          type: "text",
          content: "A averbação da penhora impede alienação do bem pelo devedor e garante a prioridade do credor.",
        },
      ],
    },
    {
      id: "mod-05-lesson-02",
      title: "Averbação da Penhora É Obrigatória?",
      description: "Importância legal da averbação",
      estimatedMinutes: 20,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Sim, é altamente recomendável e, em muitos casos, obrigatória para garantir a eficácia da penhora contra terceiros.",
        },
        {
          type: "legal-text",
          content: "Art. 844. Para presunção absoluta de conhecimento por terceiros, cabe ao exequente averbar a penhora no registro competente.",
          metadata: {
            legalReference: "CPC, Art. 844",
          },
        },
        {
          type: "checklist",
          content: "Consequências da Falta de Averbação",
          metadata: {
            items: [
              "Terceiros de boa-fé podem adquirir o imóvel",
              "Arrematante perde garantia de propriedade",
              "Impossibilidade de opor a penhora contra terceiros",
              "Fraude à execução pode não ser caracterizada",
            ],
          },
        },
        {
          type: "case-study",
          content: "Arrematante não providenciou averbação da penhora nem expedição da carta de arrematação. O executado vendeu imóvel a terceiros de boa-fé. Tribunal decidiu que arrematante perdeu a propriedade, pois não havia averbação e não poderia opor direito contra terceiros compradores.",
          metadata: {
            title: "Caso TJPB (2012)",
          },
        },
      ],
    },
    {
      id: "mod-05-lesson-03",
      title: "Procedimento Prático para Servidores",
      description: "Passo a passo da averbação",
      estimatedMinutes: 20,
      order: 3,
      sections: [
        {
          type: "checklist",
          content: "Antes do Leilão",
          metadata: {
            items: [
              "Verificar se penhora está averbada na matrícula",
              "Se não estiver, providenciar averbação antes da publicação do edital",
              "Obter certidão de matrícula atualizada (máximo 30 dias)",
            ],
          },
        },
        {
          type: "checklist",
          content: "Após o Leilão",
          metadata: {
            items: [
              "Elaborar Auto de Arrematação",
              "Aguardar prazo de 10 dias para impugnações (Art. 903, §2º CPC)",
              "Expedir Carta de Arrematação",
              "Arrematante deve levar Carta ao Cartório para registro",
            ],
          },
        },
        {
          type: "callout",
          content: "A averbação da penhora deve SEMPRE ser providenciada antes da realização do leilão para evitar fraudes e garantir segurança jurídica.",
          metadata: {
            calloutType: "warning",
            title: "Averbar Sempre Antes do Leilão",
          },
        },
      ],
    },
  ],
};

// Module 6: Débitos Fiscais e Condominiais
const module06: CourseModule = {
  id: "mod-06",
  number: 6,
  title: "Débitos Fiscais e Condominiais",
  description: "Sub-rogação, responsabilidades e decisões do STJ",
  icon: "Receipt",
  estimatedMinutes: 70,
  locked: false,
  order: 6,
  lessons: [
    {
      id: "mod-06-lesson-01",
      title: "Artigo 130 do CTN - Sub-rogação de Débitos Fiscais",
      description: "Fundamento legal da sub-rogação tributária",
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "legal-text",
          content: "Art. 130. Os créditos tributários relativos a impostos cujo fato gerador seja a propriedade, o domínio útil ou a posse de bens imóveis, e bem assim os relativos a taxas pela prestação de serviços referentes a tais bens, ou a contribuições de melhoria, subrogam-se na pessoa dos respectivos adquirentes, salvo quando conste do título a prova de sua quitação. Parágrafo único. No caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço.",
          metadata: {
            legalReference: "CTN, Art. 130",
          },
        },
        {
          type: "text",
          content: "O que significa na prática:",
        },
        {
          type: "checklist",
          content: "Sub-rogação na Prática",
          metadata: {
            items: [
              "Compra e venda comum: comprador assume os débitos fiscais do imóvel",
              "Arrematação judicial: débitos fiscais são pagos com valor da arrematação",
              "Arrematante recebe imóvel livre de débitos fiscais anteriores",
            ],
          },
        },
        {
          type: "checklist",
          content: "Tributos Abrangidos",
          metadata: {
            items: [
              "IPTU (Imposto Predial e Territorial Urbano)",
              "Taxas municipais (coleta de lixo, iluminação pública)",
              "Contribuições de melhoria",
            ],
          },
        },
        {
          type: "callout",
          content: "Esta regra se aplica independentemente de haver ou não previsão no edital. É lei federal e prevalece sobre qualquer disposição contratual.",
          metadata: {
            calloutType: "info",
            title: "Independe de Previsão no Edital",
          },
        },
      ],
    },
    {
      id: "mod-06-lesson-02",
      title: "Decisão do STJ (Tema 1.134/2024)",
      description: "Tese vinculante do Superior Tribunal de Justiça",
      estimatedMinutes: 15,
      order: 2,
      sections: [
        {
          type: "callout",
          content: "Diante do disposto no artigo 130, parágrafo único, do Código Tributário Nacional (CTN), é inválida a previsão em edital de leilão atribuindo responsabilidade ao arrematante pelos débitos tributários que já incidiam sobre o imóvel na data de sua alienação.",
          metadata: {
            calloutType: "success",
            title: "Tese Fixada pelo STJ em 2024",
          },
        },
        {
          type: "text",
          content: "Modulação dos efeitos da decisão:",
        },
        {
          type: "checklist",
          content: "Aplicação da Tese",
          metadata: {
            items: [
              "Leilões cujos editais sejam divulgados após publicação da decisão (2024)",
              "Pedidos administrativos e ações judiciais pendentes",
              "Editais anteriores com cláusula contrária podem ser questionados judicialmente",
            ],
          },
        },
        {
          type: "checklist",
          content: "Impacto Prático para Servidores",
          metadata: {
            items: [
              "FAZER: Incluir no edital menção expressa ao Art. 130, parágrafo único, CTN",
              "NÃO FAZER: Incluir cláusula atribuindo débitos fiscais anteriores ao arrematante",
            ],
          },
        },
      ],
    },
    {
      id: "mod-06-lesson-03",
      title: "Débitos Condominiais",
      description: "Regra específica para condomínios",
      estimatedMinutes: 15,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Os débitos condominiais não seguem a mesma regra dos débitos fiscais. Eles podem ser sub-rogados ou não, dependendo do que constar no edital.",
        },
        {
          type: "checklist",
          content: "Opções no Edital",
          metadata: {
            items: [
              "Débitos sub-rogados: Valor da arrematação paga débitos, arrematante recebe imóvel livre",
              "Débitos de responsabilidade do arrematante: Edital informa que arrematante assume",
            ],
          },
        },
        {
          type: "callout",
          content: "Sempre informar claramente no edital quem será responsável pelos débitos condominiais para evitar disputas posteriores.",
          metadata: {
            calloutType: "tip",
            title: "Recomendação",
          },
        },
      ],
    },
    {
      id: "mod-06-lesson-04",
      title: "Procedimento para Evitar Problemas com Débitos",
      description: "Checklist completo de verificação",
      estimatedMinutes: 10,
      order: 4,
      sections: [
        {
          type: "checklist",
          content: "Checklist de Débitos",
          metadata: {
            items: [
              "Solicitar certidão de débitos fiscais junto à Prefeitura",
              "Solicitar informação de débitos condominiais ao síndico/administradora",
              "Intimar formalmente a Fazenda Pública sobre o leilão",
              "Incluir no edital: Os débitos fiscais anteriores à data da arrematação serão sub-rogados no preço, nos termos do Art. 130, parágrafo único, do CTN",
              "Especificar no edital a situação dos débitos condominiais",
              "Se houver débitos elevados, destacar essa informação no edital",
            ],
          },
        },
      ],
    },
  ],
};

// Module 7: Formas de Pagamento e Parcelamento
const module07: CourseModule = {
  id: "mod-07",
  number: 7,
  title: "Formas de Pagamento e Parcelamento",
  description: "Pagamento à vista, parcelamento e garantias",
  icon: "CreditCard",
  estimatedMinutes: 45,
  locked: false,
  order: 7,
  lessons: [
    {
      id: "mod-07-lesson-01",
      title: "Pagamento à Vista",
      description: "Procedimento padrão de pagamento",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O pagamento à vista é a forma mais comum de quitação em leilões judiciais.",
        },
        {
          type: "checklist",
          content: "Formas de Pagamento à Vista",
          metadata: {
            items: [
              "Depósito judicial em conta vinculada ao processo",
              "Transferência bancária para conta indicada no edital",
              "Prazo: geralmente 24 a 72 horas após arrematação",
            ],
          },
        },
        {
          type: "callout",
          content: "O arrematante também deve pagar: comissão do leiloeiro (geralmente 5%), eventuais despesas administrativas e ITBI (2% a 4% sobre o valor da arrematação).",
          metadata: {
            calloutType: "warning",
            title: "Atenção aos Custos Adicionais",
          },
        },
      ],
    },
    {
      id: "mod-07-lesson-02",
      title: "Parcelamento em Leilão Judicial (Art. 895 CPC)",
      description: "Requisitos legais do parcelamento",
      estimatedMinutes: 20,
      order: 2,
      sections: [
        {
          type: "text",
          content: "O Art. 895 do CPC permite o parcelamento de arrematações em leilões judiciais, desde que cumpridas condições específicas.",
        },
        {
          type: "legal-text",
          content: "Art. 895. Não havendo licitante, serão admitidos até a assinatura do auto de arrematação, lanço com pagamento parcelado de até 30 (trinta) meses, com correção monetária, juros e garantia.",
          metadata: {
            legalReference: "CPC, Art. 895",
          },
        },
        {
          type: "checklist",
          content: "Requisitos Obrigatórios do Parcelamento",
          metadata: {
            items: [
              "Entrada mínima: 25% do valor do lance à vista",
              "Prazo máximo: 30 parcelas mensais",
              "Garantia: Hipoteca do próprio imóvel arrematado",
              "Correção monetária e juros: Conforme definido no edital",
            ],
          },
        },
        {
          type: "text",
          content: "Quando pode ser apresentada a proposta:",
        },
        {
          type: "checklist",
          content: "Momentos de Apresentação",
          metadata: {
            items: [
              "Até o início do 1º leilão: Proposta por valor não inferior ao da avaliação",
              "Até o início do 2º leilão: Proposta por valor que não seja vil (mínimo 50%)",
              "Jurisprudência flexibiliza: Aceita propostas até final do leilão",
            ],
          },
        },
        {
          type: "callout",
          content: "O artigo 895 do CPC não obriga o juiz a aceitar parcelamento. Ele apenas permite que o interessado apresente proposta, que será analisada pelo juiz.",
          metadata: {
            calloutType: "info",
            title: "Não É Obrigatório Aceitar",
          },
        },
      ],
    },
    {
      id: "mod-07-lesson-03",
      title: "Pode Fazer Leilão Somente à Vista?",
      description: "Opção de vedação ao parcelamento",
      estimatedMinutes: 10,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Sim, é possível exigir apenas pagamento à vista.",
        },
        {
          type: "checklist",
          content: "Quando Recomendar Apenas à Vista",
          metadata: {
            items: [
              "Bens de valor elevado onde parcelamento prolongaria excessivamente a execução",
              "Situações com urgência na satisfação do crédito",
              "Casos onde hipoteca do bem pode não ser garantia suficiente",
            ],
          },
        },
        {
          type: "text",
          content: "Se o juiz autorizar apenas pagamento à vista, incluir no edital: 'Não será aceito parcelamento, apenas pagamento à vista'.",
        },
        {
          type: "callout",
          content: "Regras especiais: Prazo máximo de 60 parcelas (diferente do CPC), valor mínimo da parcela R$ 500,00, inadimplência gera multa de 50% sobre saldo devedor e rescisão do parcelamento.",
          metadata: {
            calloutType: "tip",
            title: "Leilões da Fazenda Nacional (PGFN)",
          },
        },
      ],
    },
  ],
};

// Module 8: Publicação e Transparência
const module08: CourseModule = {
  id: "mod-08",
  number: 8,
  title: "Publicação e Transparência",
  description: "Divulgação do edital e resolução CNJ 236/2016",
  icon: "Megaphone",
  estimatedMinutes: 35,
  locked: false,
  order: 8,
  lessons: [
    {
      id: "mod-08-lesson-01",
      title: "Publicação Obrigatória do Edital",
      description: "Onde e como publicar o edital",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "text",
          content: "A publicação adequada do edital garante ampla divulgação e transparência do procedimento.",
        },
        {
          type: "checklist",
          content: "Onde Deve Ser Publicado (Leilão Judicial)",
          metadata: {
            items: [
              "Diário da Justiça Eletrônico (DJE) - Obrigatório",
              "Site do Tribunal (TJPE) - Recomendado",
              "Site do leiloeiro - Obrigatório",
              "Átrio dos Fóruns - Fixação física",
            ],
          },
        },
        {
          type: "checklist",
          content: "Leilões Extrajudiciais (Alienação Fiduciária)",
          metadata: {
            items: [
              "Jornal eletrônico ou impresso de grande circulação",
              "Três publicações obrigatórias",
            ],
          },
        },
      ],
    },
    {
      id: "mod-08-lesson-02",
      title: "Prazo Mínimo de Publicação",
      description: "Antecedência necessária da publicação",
      estimatedMinutes: 10,
      order: 2,
      sections: [
        {
          type: "text",
          content: "O edital deve ser publicado com antecedência mínima de 5 dias da data designada para o leilão.",
        },
        {
          type: "callout",
          content: "Apenas dias úteis são contados. Publicação tardia pode gerar nulidade do leilão.",
          metadata: {
            calloutType: "warning",
            title: "Contagem em Dias Úteis",
          },
        },
        {
          type: "text",
          content: "Por que esse prazo é importante:",
        },
        {
          type: "checklist",
          content: "Importância do Prazo",
          metadata: {
            items: [
              "Garante ampla divulgação e participação",
              "Permite que interessados analisem o bem e o edital",
              "Assegura transparência e competitividade",
            ],
          },
        },
      ],
    },
    {
      id: "mod-08-lesson-03",
      title: "Prorrogação Automática (Extra-Time)",
      description: "Regra dos 3 minutos em leilões eletrônicos",
      estimatedMinutes: 10,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Em leilões eletrônicos, se um lance for dado nos últimos 3 minutos antes do encerramento, o prazo é automaticamente prorrogado por mais 3 minutos.",
        },
        {
          type: "callout",
          content: "Garantir igualdade de oportunidade a todos os participantes e evitar lances de última hora sem possibilidade de resposta.",
          metadata: {
            calloutType: "info",
            title: "Objetivo da Prorrogação",
          },
        },
        {
          type: "text",
          content: "Incluir no edital: 'Havendo lance nos 3 (três) minutos finais, o leilão será prorrogado automaticamente por mais 3 (três) minutos'.",
        },
      ],
    },
  ],
};

// Module 9: Procedimentos Pós-Leilão
const module09: CourseModule = {
  id: "mod-09",
  number: 9,
  title: "Procedimentos Pós-Leilão",
  description: "Auto de arrematação, carta e imissão na posse",
  icon: "CheckCircle",
  estimatedMinutes: 65,
  locked: false,
  order: 9,
  lessons: [
    {
      id: "mod-09-lesson-01",
      title: "Auto de Arrematação",
      description: "Documento que formaliza a arrematação",
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O Auto de Arrematação é o documento lavrado pelo juiz que formaliza a conclusão do leilão.",
        },
        {
          type: "checklist",
          content: "Conteúdo do Auto",
          metadata: {
            items: [
              "Identificação do processo",
              "Identificação do bem arrematado",
              "Valor da arrematação",
              "Identificação do arrematante",
              "Data e assinaturas (juiz, arrematante, leiloeiro)",
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
          content: "Uma vez assinado o auto, a arrematação se torna perfeita, acabada e irretratável.",
          metadata: {
            calloutType: "success",
            title: "Efeito Jurídico",
          },
        },
      ],
    },
    {
      id: "mod-09-lesson-02",
      title: "Prazo de Impugnação",
      description: "10 dias para contestar a arrematação",
      estimatedMinutes: 15,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Após a assinatura do auto de arrematação, há prazo de 10 dias para que terceiros prejudicados ou as partes impugnem a arrematação.",
        },
        {
          type: "legal-text",
          content: "§ 1º A arrematação poderá, no prazo de 10 (dez) dias, ser tornada sem efeito por circunstância superveniente.",
          metadata: {
            legalReference: "CPC, Art. 903, §1º",
          },
        },
        {
          type: "checklist",
          content: "Hipóteses de Ineficácia",
          metadata: {
            items: [
              "Valor irrisório ou preço vil",
              "Pagamento não realizado",
              "Vício no procedimento",
            ],
          },
        },
        {
          type: "text",
          content: "Após esse prazo sem impugnação:",
        },
        {
          type: "checklist",
          content: "Próximos Passos",
          metadata: {
            items: [
              "Expede-se a Carta de Arrematação",
              "Ordem de entrega ou mandado de imissão na posse",
            ],
          },
        },
      ],
    },
    {
      id: "mod-09-lesson-03",
      title: "Carta de Arrematação",
      description: "Título para registro da propriedade",
      estimatedMinutes: 20,
      order: 3,
      sections: [
        {
          type: "text",
          content: "A Carta de Arrematação é o documento expedido pelo juiz que serve como título hábil para registro da propriedade no Cartório de Registro de Imóveis.",
        },
        {
          type: "callout",
          content: "Leilão judicial: Carta de Arrematação substitui a escritura pública. Leilão extrajudicial: Necessária escritura pública no Cartório de Notas.",
          metadata: {
            calloutType: "info",
            title: "Diferença Importante",
          },
        },
        {
          type: "checklist",
          content: "Procedimento de Registro",
          metadata: {
            items: [
              "Juiz expede a Carta de Arrematação (após 10 dias do auto)",
              "Arrematante leva a Carta ao Cartório de Registro de Imóveis",
              "Cartório registra transferência de propriedade na matrícula",
              "Arrematante torna-se proprietário registral",
            ],
          },
        },
        {
          type: "callout",
          content: "É responsabilidade do arrematante providenciar o registro da Carta de Arrematação no Cartório de Imóveis para efetivar a transferência da propriedade.",
          metadata: {
            calloutType: "warning",
            title: "Responsabilidade do Arrematante",
          },
        },
      ],
    },
  ],
};

// Module 10: Casos Práticos e Erros Comuns
const module10: CourseModule = {
  id: "mod-10",
  number: 10,
  title: "Casos Práticos e Erros Comuns",
  description: "Análise de casos reais e como evitar erros",
  icon: "AlertTriangle",
  estimatedMinutes: 80,
  locked: false,
  order: 10,
  lessons: [
    {
      id: "mod-10-lesson-01",
      title: "Caso 1 - Leilão Anulado por Falta de Notificação da Prefeitura",
      description: "Estudo de caso real de nulidade",
      estimatedMinutes: 15,
      order: 1,
      sections: [
        {
          type: "case-study",
          content: "Servidor elaborou edital e realizou leilão de imóvel com R$ 150.000 de IPTU em atraso. Não intimou a Prefeitura. Imóvel foi arrematado por R$ 300.000. Após 6 meses, a Prefeitura cobrou os R$ 150.000 do arrematante.",
          metadata: {
            title: "Situação Real",
          },
        },
        {
          type: "checklist",
          content: "Problemas Identificados",
          metadata: {
            items: [
              "Falta de intimação da Fazenda Pública",
              "Edital não mencionou Art. 130 do CTN",
              "Servidor não solicitou certidão de débitos fiscais",
            ],
          },
        },
        {
          type: "checklist",
          content: "Solução Aplicada",
          metadata: {
            items: [
              "Arrematante entrou com ação anulatória",
              "Leilão foi anulado pelo juiz",
              "Todo processo teve que ser refeito",
              "Prejuízos financeiros e de tempo para todas as partes",
            ],
          },
        },
        {
          type: "callout",
          content: "SEMPRE intimar a Prefeitura quando houver débitos fiscais e mencionar expressamente o Art. 130 do CTN no edital.",
          metadata: {
            calloutType: "error",
            title: "Lição Aprendida",
          },
        },
      ],
    },
    {
      id: "mod-10-lesson-02",
      title: "Caso 2 - Avaliação Desatualizada",
      description: "Preço vil por avaliação antiga",
      estimatedMinutes: 15,
      order: 2,
      sections: [
        {
          type: "case-study",
          content: "Imóvel avaliado em 2021 por R$ 200.000. Leilão realizado em 2024 (3 anos depois) pelo mesmo valor. Mercado imobiliário valorizou 40% no período.",
          metadata: {
            title: "Situação Real",
          },
        },
        {
          type: "checklist",
          content: "Problemas Identificados",
          metadata: {
            items: [
              "Avaliação defasada há mais de 2 anos",
              "Preço vil por desatualização",
              "Não foi aplicada correção monetária",
              "Não foi determinada nova avaliação",
            ],
          },
        },
        {
          type: "checklist",
          content: "Solução Aplicada",
          metadata: {
            items: [
              "Executado impugnou a avaliação",
              "Juiz determinou nova avaliação",
              "Nova avaliação: R$ 280.000",
              "Leilão foi suspenso e teve que ser refeito",
            ],
          },
        },
        {
          type: "callout",
          content: "Avaliar a cada 6 meses ou, no máximo, a cada 2 anos. Aplicar correção monetária ou determinar nova avaliação.",
          metadata: {
            calloutType: "error",
            title: "Lição Aprendida",
          },
        },
      ],
    },
    {
      id: "mod-10-lesson-03",
      title: "Caso 3 - Penhora Não Averbada",
      description: "Perda do bem por falta de averbação",
      estimatedMinutes: 15,
      order: 3,
      sections: [
        {
          type: "case-study",
          content: "Penhora decretada mas não averbada na matrícula. Executado vendeu o imóvel para terceiro de boa-fé. Leilão foi realizado e arrematante não conseguiu imissão na posse.",
          metadata: {
            title: "Situação Real (TJPB, 2012)",
          },
        },
        {
          type: "checklist",
          content: "Problemas Identificados",
          metadata: {
            items: [
              "Falta de averbação da penhora no Registro de Imóveis",
              "Terceiro de boa-fé adquiriu o imóvel",
              "Impossibilidade de opor a penhora contra terceiros",
            ],
          },
        },
        {
          type: "checklist",
          content: "Solução Aplicada",
          metadata: {
            items: [
              "Arrematante perdeu a propriedade do imóvel",
              "Recebeu de volta o valor pago",
              "Execução prosseguiu sobre outros bens do devedor",
              "Processo atrasou meses",
            ],
          },
        },
        {
          type: "callout",
          content: "SEMPRE averbar a penhora na matrícula ANTES de realizar o leilão. Obter certidão de matrícula atualizada.",
          metadata: {
            calloutType: "error",
            title: "Lição Aprendida",
          },
        },
      ],
    },
    {
      id: "mod-10-lesson-04",
      title: "Checklist Final para Servidores",
      description: "Lista completa de verificação",
      estimatedMinutes: 15,
      order: 4,
      sections: [
        {
          type: "text",
          content: "Use esta lista de verificação em TODOS os leilões para evitar erros comuns.",
        },
        {
          type: "checklist",
          content: "Antes de Elaborar o Edital",
          metadata: {
            items: [
              "Verificar se penhora está averbada na matrícula",
              "Obter matrícula atualizada (máximo 30 dias)",
              "Verificar data da última avaliação (ideal: até 6 meses)",
              "Solicitar certidão de débitos fiscais na Prefeitura",
              "Solicitar informação de débitos condominiais",
              "Verificar se há ocupantes no imóvel",
              "Verificar ônus, hipotecas ou penhoras anteriores",
            ],
          },
        },
        {
          type: "checklist",
          content: "Durante a Elaboração do Edital",
          metadata: {
            items: [
              "Incluir TODOS elementos obrigatórios (Art. 886 CPC)",
              "Descrever completamente o bem com matrícula",
              "Informar valor de avaliação e data",
              "Definir preço mínimo (atenção ao preço vil - mínimo 50%)",
              "Especificar condições de pagamento",
              "Mencionar expressamente Art. 130, parágrafo único, CTN",
              "Informar sobre débitos condominiais",
              "Incluir identificação completa do leiloeiro credenciado",
              "Definir data e horário (mínimo 5 dias após publicação)",
              "Incluir regra de prorrogação automática (3 minutos)",
              "Informar sobre ocupação do imóvel",
            ],
          },
        },
        {
          type: "checklist",
          content: "Antes de Publicar o Edital",
          metadata: {
            items: [
              "Intimar executado (por advogado ou pessoalmente)",
              "Intimar cônjuge do executado",
              "Intimar exequente",
              "Intimar Fazenda Pública se houver débitos fiscais",
              "Intimar condomínio se houver débitos condominiais",
              "Intimar credores com garantia real",
              "Intimar ocupantes do imóvel",
              "Aguardar manifestações",
            ],
          },
        },
        {
          type: "checklist",
          content: "Após o Leilão",
          metadata: {
            items: [
              "Verificar pagamento pelo arrematante",
              "Lavrar Auto de Arrematação",
              "Aguardar 10 dias para impugnações",
              "Se não houver impugnação: expedir Carta de Arrematação",
              "Expedir ordem/mandado de imissão na posse",
              "Acompanhar registro da Carta no Cartório",
            ],
          },
        },
        {
          type: "callout",
          content: "Este checklist é sua ferramenta principal para garantir que todos os procedimentos sejam cumpridos corretamente, evitando nulidades e prejuízos às partes.",
          metadata: {
            calloutType: "success",
            title: "Conclusão do Curso",
          },
        },
      ],
    },
  ],
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
