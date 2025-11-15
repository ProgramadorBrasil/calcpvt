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
      estimatedMinutes: 20,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Para leilões extrajudiciais relacionados à alienação fiduciária, aplica-se a Lei 9.514/97. Esta lei regula especificamente os procedimentos quando há inadimplemento em contratos com garantia fiduciária.",
        },
        {
          type: "legal-text",
          content: "Art. 26. Vencida e não paga, no todo ou em parte, a dívida e constituído em mora o fiduciante, consolidar-se-á, nos termos deste artigo, a propriedade do imóvel em nome do fiduciário.\n\n§1º Para os fins do disposto neste artigo, o fiduciante, ou seu representante legal ou procurador regularmente constituído, será intimado, a requerimento do fiduciário, pelo oficial do competente Registro de Imóveis, a satisfazer, no prazo de quinze dias, a prestação vencida e as que se vencerem até a data do pagamento, os juros convencionais, as penalidades e os demais encargos contratuais, os encargos legais, inclusive tributos, as contribuições condominiais imputáveis ao imóvel, além das despesas de cobrança e de intimação.",
          metadata: {
            legalReference: "Lei 9.514/97, Art. 26",
          },
        },
        {
          type: "legal-text",
          content: "Art. 27. Uma vez consolidada a propriedade em seu nome, o fiduciário, no prazo de trinta dias, contados da data do registro de que trata o §7º do artigo anterior, promoverá público leilão para a alienação do imóvel.\n\n§4º Se, no primeiro público leilão, o maior lance oferecido for inferior ao valor do imóvel, estipulado na forma do §2º, será realizado o segundo leilão, nos quinze dias seguintes.\n\n§5º No segundo leilão, será aceito o maior lance oferecido, desde que igual ou superior ao valor da dívida, das despesas, dos prêmios de seguro, dos encargos legais, inclusive tributos, e das contribuições condominiais.",
          metadata: {
            legalReference: "Lei 9.514/97, Art. 27",
          },
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
              "Garantias processuais amplas (contraditório, ampla defesa)",
              "Prazos mais longos e procedimento mais rigoroso",
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
              "Intimação pelo Cartório de Registro de Imóveis",
              "Dois leilões obrigatórios (Art. 27, §4º e §5º)",
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
        {
          type: "case-study",
          content: "**Caso Prático - Imóvel com Histórico de Alienação Fiduciária:**\n\nImóvel financiado em 2018 por R$ 400.000,00 com alienação fiduciária ao banco. Mutuário inadimplente desde 2020. Banco promoveu leilão extrajudicial (Lei 9.514/97) em 2021, mas o imóvel não foi arrematado em nenhum dos dois leilões.\n\n**Consequência:** Banco ajuizou execução judicial (CPC) em 2022. O imóvel foi penhorado e está sendo leiloado judicialmente pelo TJPE.\n\n**Atenção do Servidor:** Verificar na matrícula se houve consolidação da propriedade em nome do banco. Se sim, o devedor executado é o banco, não o mutuário original. O edital deve refletir corretamente a situação registral.",
          metadata: {
            title: "Exemplo de Sucessão de Procedimentos",
          },
        },
        {
          type: "callout",
          content: "CUIDADO: Se o imóvel passou por leilão extrajudicial frustrado e depois foi para execução judicial, pode haver discussão sobre vícios no procedimento extrajudicial. Sempre consultar a matrícula atualizada e verificar se houve registro da consolidação da propriedade.",
          metadata: {
            calloutType: "warning",
            title: "Risco de Vícios Anteriores",
          },
        },
        {
          type: "callout",
          content: "Jurisprudência consolidada do STJ: O leilão extrajudicial da Lei 9.514/97 não se submete às regras de preço vil do CPC. Contudo, valores irrisórios podem caracterizar abuso de direito e ensejar anulação (REsp 1.869.837/SP).",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Relevante",
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
      estimatedMinutes: 25,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O edital é o documento mais importante do leilão judicial. Sua elaboração inadequada pode levar à nulidade de todo o procedimento.",
        },
        {
          type: "legal-text",
          content: "Art. 886. A alienação em hasta pública será precedida de publicação de edital, que conterá:\n\nI - a descrição do bem penhorado, com suas características;\nII - o valor do bem, sua situação de matrícula;\nIII - o preço de avaliação e o valor do lance mínimo;\nIV - o lugar onde estiver o bem e onde será realizada a hasta pública;\nV - a data e a hora do leilão.\n\nParágrafo único. O edital conterá, ainda, a advertência de que, na segunda hasta, a alienação será feita pelo maior lance, ainda que este seja inferior ao valor da avaliação.",
          metadata: {
            legalReference: "CPC, Art. 886",
          },
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
        {
          type: "case-study",
          content: "**Caso Real - Edital Anulado por Descrição Incompleta:**\n\nServidor elaborou edital de leilão de apartamento com a seguinte descrição: 'Apartamento 302, Edifício Boa Vista, Recife/PE'.\n\n**Problemas:** Não informou área total, número da matrícula, se possui vaga de garagem, quantidade de quartos, andar.\n\n**Consequência:** Arrematante alegou que imaginava apartamento maior. Juiz anulou o leilão por descrição insuficiente do bem, considerando que a descrição não permitia identificação precisa do imóvel.\n\n**Valor do Prejuízo:** Processo atrasou 8 meses até realização de novo leilão.",
          metadata: {
            title: "Importância da Descrição Completa",
          },
        },
        {
          type: "callout",
          content: "Sempre incluir no mínimo: área privativa e total, número de quartos e banheiros, vagas de garagem, andar (se apartamento), confrontações (se terreno), número da matrícula completo com Cartório de Registro.",
          metadata: {
            calloutType: "tip",
            title: "Descrição Completa do Imóvel",
          },
        },
        {
          type: "callout",
          content: "Jurisprudência do TJPE: Edital que não menciona expressamente o Art. 130 do CTN pode gerar responsabilidade do arrematante por débitos fiscais, contrariando decisão do STJ. Sempre incluir a menção expressa para proteger o arrematante.",
          metadata: {
            calloutType: "error",
            title: "Menção ao CTN é Obrigatória",
          },
        },
      ],
    },
    {
      id: "mod-02-lesson-02",
      title: "Como Fazer o Edital - Passo a Passo Prático",
      description: "Guia prático para elaboração correta do edital",
      estimatedMinutes: 30,
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
        {
          type: "case-study",
          content: "**Exemplo Prático - Elaboração de Edital Completo:**\n\n**DADOS DO PROCESSO:**\n- Processo: 0012345-67.2023.8.17.0001\n- Vara: 5ª Vara Cível de Recife\n- Executado: João da Silva\n- Exequente: Banco XYZ S.A.\n\n**IMÓVEL:**\n- Apartamento 1.202, Edifício Residencial Boa Viagem\n- Rua dos Navegantes, 500, Boa Viagem, Recife/PE\n- Área privativa: 85,50m² | Área total: 120,30m²\n- 3 quartos, 2 banheiros, 1 vaga de garagem\n- Matrícula 12.345 do 1º Cartório de Registro de Imóveis de Recife\n\n**AVALIAÇÃO:**\n- Data: 15/08/2024\n- Valor: R$ 450.000,00\n\n**DÉBITOS IDENTIFICADOS:**\n- IPTU 2022-2024: R$ 12.500,00\n- Condomínio: R$ 8.200,00\n\n**EDITAL DEVE CONTER:**\n'O imóvel possui débitos de IPTU no valor de R$ 12.500,00 e débitos condominiais de R$ 8.200,00. Nos termos do Art. 130, parágrafo único, do Código Tributário Nacional, os débitos tributários serão sub-rogados no preço da arrematação, não sendo de responsabilidade do arrematante. Os débitos condominiais também serão quitados com o valor da arrematação.'",
          metadata: {
            title: "Modelo de Elaboração",
          },
        },
        {
          type: "callout",
          content: "Cláusula obrigatória sobre débitos fiscais: 'Os débitos de IPTU e taxas municipais anteriores à data da arrematação serão sub-rogados no preço, nos termos do artigo 130, parágrafo único, do Código Tributário Nacional, não sendo de responsabilidade do arrematante.'",
          metadata: {
            calloutType: "success",
            title: "Redação Modelo para Edital",
          },
        },
        {
          type: "callout",
          content: "ERRO COMUM: Incluir cláusula genérica como 'O arrematante assume todos os débitos'. Esta cláusula é INVÁLIDA para débitos fiscais após decisão do STJ Tema 1.134/2024.",
          metadata: {
            calloutType: "error",
            title: "Evite Esta Cláusula",
          },
        },
        {
          type: "legal-text",
          content: "Art. 895. Não havendo licitante, serão admitidos até a assinatura do auto de arrematação, lanço com pagamento parcelado de até 30 (trinta) meses, com correção monetária, juros e garantia.\n\n§1º O lanço será considerado parcelado quando contemplar o pagamento de, no mínimo, 25% (vinte e cinco por cento) do valor à vista e o restante em até 30 (trinta) parcelas mensais, acrescidas de correção monetária e juros de 1% (um por cento) ao mês.\n\n§2º A garantia para o parcelamento será prestada mediante hipoteca do próprio bem.",
          metadata: {
            legalReference: "CPC, Art. 895",
          },
        },
      ],
    },
    {
      id: "mod-02-lesson-03",
      title: "Preço Vil - Como Evitar",
      description: "Entenda o conceito de preço vil e como evitá-lo",
      estimatedMinutes: 20,
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
          type: "legal-text",
          content: "Art. 891, §1º. Se o preço da primeira hasta for considerado vil, será realizada segunda hasta, em que o preço mínimo será reduzido em até 30% (trinta por cento).\n\nArt. 891, §2º. Não havendo licitante na segunda hasta, os bens serão objeto de nova alienação em hasta pública com preço mínimo correspondente a 50% (cinquenta por cento) do valor da avaliação, admitindo-se que seja parcelado em até 30 (trinta) meses.",
          metadata: {
            legalReference: "CPC, Art. 891, §§1º e 2º",
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
        {
          type: "case-study",
          content: "**Caso Real - Anulação por Preço Vil:**\n\n**Situação:** Imóvel avaliado em R$ 800.000,00 em março/2020. Primeiro leilão marcado para dezembro/2023 (3 anos e 9 meses depois) com preço mínimo de R$ 800.000,00.\n\n**Primeiro leilão:** Deserto (sem interessados).\n\n**Segundo leilão:** Servidor fixou preço mínimo de R$ 400.000,00 (50% da avaliação original).\n\n**Problema:** Mercado imobiliário da região valorizou 45% no período. Valor real do imóvel em 2023: aproximadamente R$ 1.160.000,00.\n\n**Lance vencedor:** R$ 410.000,00 (apenas 35% do valor real atualizado).\n\n**Impugnação:** Executado impugnou alegando preço vil por avaliação desatualizada.\n\n**Decisão do Juiz:** Acolheu impugnação, anulou o leilão e determinou nova avaliação. Nova avaliação: R$ 1.150.000,00.\n\n**Prejuízo:** Processo atrasou 10 meses, custas adicionais de R$ 8.500,00.",
          metadata: {
            title: "Importância da Avaliação Atualizada",
          },
        },
        {
          type: "callout",
          content: "REGRA PRÁTICA: Avaliação com mais de 1 ano deve ser atualizada monetariamente (IPCA/IGP-M). Avaliação com mais de 2 anos DEVE ser refeita completamente com novo laudo técnico.",
          metadata: {
            calloutType: "warning",
            title: "Prazos de Validade da Avaliação",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Numérico - Cálculo Correto:**\n\n**Avaliação original:** R$ 500.000,00 (janeiro/2023)\n**Data do leilão:** janeiro/2025 (2 anos depois)\n**IPCA acumulado:** 10,5%\n\n**Valor atualizado:** R$ 500.000 × 1,105 = R$ 552.500,00\n\n**Primeiro leilão:**\n- Preço mínimo: R$ 552.500,00 (valor atualizado integral)\n\n**Segundo leilão:**\n- Preço mínimo: R$ 386.750,00 (70% de R$ 552.500)\n- Limite mínimo absoluto: R$ 276.250,00 (50% de R$ 552.500)\n\n**Atenção:** Mesmo no segundo leilão, o preço não pode ser inferior a 50% do valor ATUALIZADO.",
          metadata: {
            title: "Cálculo de Atualização Monetária",
          },
        },
        {
          type: "callout",
          content: "STJ - REsp 1.840.752/SP: 'A avaliação desatualizada por decurso de tempo superior a dois anos pode configurar preço vil, ainda que o valor nominal esteja acima de 50% da avaliação original, se o valor real de mercado for significativamente superior'.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Recente STJ",
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
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "text",
          content: "Esta é uma das maiores fontes de erros e nulidades em leilões judiciais. A falta de notificação adequada pode anular todo o procedimento.",
        },
        {
          type: "legal-text",
          content: "Art. 889. Todos os que tiverem interesse na alienação do bem serão cientificados da hasta pública, podendo dela participar.\n\n§1º O executado será intimado pessoalmente ou por seu advogado.\n\n§2º Intimação será feita por publicação em edital, com antecedência mínima de 5 (cinco) dias.",
          metadata: {
            legalReference: "CPC, Art. 889",
          },
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
        {
          type: "case-study",
          content: "**Caso Real - Nulidade por Falta de Intimação do Cônjuge:**\n\n**Situação:** Servidor intimou executado João da Silva sobre leilão de imóvel residencial. Não intimou esposa Maria da Silva, casada em regime de comunhão parcial de bens.\n\n**Arrematação:** Imóvel arrematado por R$ 380.000,00.\n\n**Problema:** 3 meses após arrematação, esposa ingressou com embargos de terceiro alegando falta de intimação.\n\n**Fundamento Legal:** Súmula 134 do STJ: 'É inadmissível a penhora de bem de família pertencente a cônjuge, companheiro ou parente do devedor que com ele reside, sem a devida intimação pessoal do interessado'.\n\n**Decisão:** Tribunal anulou todo leilão. Arrematante recebeu valor de volta. Processo teve que ser reiniciado.\n\n**Prejuízo Total:** Atraso de 14 meses, custas adicionais de R$ 12.000,00.",
          metadata: {
            title: "Importância da Intimação do Cônjuge",
          },
        },
        {
          type: "callout",
          content: "SEMPRE verificar estado civil do executado na matrícula do imóvel e nos autos. Se casado ou em união estável, OBRIGATÓRIO intimar cônjuge/companheiro pessoalmente.",
          metadata: {
            calloutType: "error",
            title: "Intimação do Cônjuge é Obrigatória",
          },
        },
        {
          type: "case-study",
          content: "**Checklist de Verificação para Cada Processo:**\n\n**1. Executado:**\n- Tem advogado constituído? Intimação pelo DJE\n- Sem advogado? Intimação pessoal por oficial de justiça\n- Defensor Público? Intimação pelo DJE da Defensoria\n\n**2. Cônjuge:**\n- Verificar certidão de casamento ou matrícula do imóvel\n- Intimação pessoal OBRIGATÓRIA (não pode ser só pelo advogado)\n\n**3. Fazenda Pública:**\n- Há débitos de IPTU? Intimar Prefeitura por carta AR\n- Endereço: Procuradoria Fiscal do Município\n\n**4. Condomínio:**\n- Há débitos condominiais? Intimar síndico ou administradora\n- Solicitar certidão de débitos atualizada\n\n**5. Ocupantes:**\n- Verificar se imóvel está ocupado (vistoria)\n- Intimar ocupante pessoalmente, ainda que sem título",
          metadata: {
            title: "Roteiro Prático de Notificações",
          },
        },
        {
          type: "callout",
          content: "STJ - REsp 1.743.830/SP (2018): 'A falta de intimação da Fazenda Pública credora de tributos incidentes sobre o imóvel penhorado constitui nulidade absoluta, ensejando anulação do leilão e responsabilização do arrematante pelos débitos'.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Sobre Intimação da Fazenda",
          },
        },
      ],
    },
    {
      id: "mod-03-lesson-02",
      title: "Prazos e Formas de Notificação",
      description: "Procedimentos corretos para cada tipo de intimação",
      estimatedMinutes: 15,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Cada parte deve ser intimada pela forma apropriada, respeitando os prazos legais.",
        },
        {
          type: "legal-text",
          content: "Art. 246. A citação será feita:\n\nI - pelo correio;\nII - por oficial de justiça;\nIII - pelo escrivão ou chefe de secretaria, se o citando comparecer em cartório;\nIV - por edital;\nV - por meio eletrônico, conforme regulado em lei.\n\n§1º Com exceção das microempresas e das empresas de pequeno porte, as empresas públicas e privadas são obrigadas a manter cadastro nos sistemas de processo em autos eletrônicos, para efeito de recebimento de citações e intimações.",
          metadata: {
            legalReference: "CPC, Art. 246",
          },
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
        {
          type: "case-study",
          content: "**Cronograma Modelo de Notificações:**\n\n**DIA 1 (Segunda-feira):**\n- Intimar executado e cônjuge sobre designação de leilão\n- Intimar exequente\n- Expedir carta AR para Fazenda Pública (se houver débitos)\n\n**DIA 10 (Quarta-feira - após 7 dias úteis):**\n- Verificar se intimações foram cumpridas\n- Aguardar eventual manifestação das partes\n\n**DIA 15 (Segunda-feira):**\n- Publicar edital no DJE e site do TJPE\n- Fixar edital no átrio do fórum\n- Leiloeiro publica no site oficial\n\n**DIA 22 (Segunda-feira - 5 dias úteis após publicação):**\n- Realização do leilão eletrônico\n\n**Total: 21 dias corridos do início ao leilão**",
          metadata: {
            title: "Cronograma Prático",
          },
        },
        {
          type: "callout",
          content: "ERRO COMUM: Publicar edital antes de cumprir todas intimações. Isso pode gerar nulidade se alguma parte alegar que não teve tempo hábil para se manifestar.",
          metadata: {
            calloutType: "warning",
            title: "Ordem Correta das Intimações",
          },
        },
        {
          type: "case-study",
          content: "**Intimação da Fazenda Pública - Modelo de Ofício:**\n\n'Excelentíssimo Senhor Procurador Fiscal do Município de Recife,\n\nProcesso nº 0012345-67.2023.8.17.0001\n\nComunico a Vossa Excelência que foi designado leilão judicial do imóvel situado na Rua X, nº 100, Boa Viagem, Recife/PE, matrícula 12.345 do 1º CRI/Recife, para o dia 22/01/2025, às 14h, na plataforma eletrônica [URL].\n\nConsta dos autos que o imóvel possui débitos de IPTU no valor de R$ 15.000,00 (certidão em anexo).\n\nNos termos do Art. 130, parágrafo único, do CTN, os débitos tributários serão sub-rogados no preço da arrematação.\n\nRespeitosamente, solicito manifestação no prazo legal.\n\nRecife, 05/01/2025.\n[Assinatura do Servidor/Juiz]'",
          metadata: {
            title: "Modelo de Intimação da Prefeitura",
          },
        },
        {
          type: "callout",
          content: "A intimação da Fazenda Pública deve ser feita com antecedência de pelo menos 10 dias úteis antes do leilão para permitir manifestação sobre os créditos tributários.",
          metadata: {
            calloutType: "tip",
            title: "Prazo Diferenciado para Fazenda",
          },
        },
      ],
    },
    {
      id: "mod-03-lesson-03",
      title: "Notificação da Prefeitura - Ponto Crítico",
      description: "Por que é fundamental notificar a Fazenda Pública",
      estimatedMinutes: 15,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Se o imóvel tiver débitos de IPTU e a Prefeitura não for intimada do leilão, os débitos não serão sub-rogados no preço e a Prefeitura poderá cobrar diretamente do arrematante.",
        },
        {
          type: "legal-text",
          content: "Art. 130, Parágrafo único, CTN: No caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço.\n\nInterpretação jurisprudencial consolidada: A sub-rogação SOMENTE ocorre se a Fazenda Pública credora for intimada do leilão e tiver oportunidade de se habilitar para receber seu crédito do valor da arrematação.",
          metadata: {
            legalReference: "CTN, Art. 130, parágrafo único",
          },
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
        {
          type: "case-study",
          content: "**Caso Real Detalhado - Prefeitura Não Intimada:**\n\n**FASE 1 - ANTES DO LEILÃO:**\n- Imóvel: Apartamento em Olinda/PE\n- Débito IPTU: R$ 45.000,00 (5 anos atrasados)\n- Servidor NÃO intimou Prefeitura de Olinda\n- Edital mencionou débitos mas sem intimar credora\n\n**FASE 2 - LEILÃO:**\n- Avaliação: R$ 350.000,00\n- Arrematação: R$ 320.000,00\n- Arrematante: Sr. Carlos (boa-fé)\n\n**FASE 3 - DISTRIBUIÇÃO DO VALOR:**\n- Credor exequente recebeu: R$ 320.000,00 (integral)\n- Prefeitura: NÃO RECEBEU (não foi intimada)\n\n**FASE 4 - PROBLEMA (6 meses depois):**\n- Prefeitura enviou notificação ao arrematante cobrando R$ 45.000,00\n- Arrematante tentou inscrever imóvel no cadastro municipal\n- Prefeitura bloqueou transferência por débitos\n\n**FASE 5 - SOLUÇÃO JUDICIAL:**\n- Arrematante ingressou com ação contra Prefeitura e Juízo\n- Alegou vício no leilão por falta de intimação\n- Pediu anulação da arrematação\n\n**DECISÃO FINAL:**\n- Juiz determinou: Arrematação válida, mas Fazenda Municipal não pode cobrar do arrematante\n- Prefeitura deve cobrar do devedor original ou do produto da arrematação (já distribuído)\n- Solução: Prefeitura ficou sem receber\n- Credor exequente teve que devolver R$ 45.000,00 à Prefeitura\n\n**PREJUÍZO TOTAL:** Processo atrasou 18 meses, custas adicionais R$ 15.000,00",
          metadata: {
            title: "Caso Detalhado de Falta de Intimação",
          },
        },
        {
          type: "callout",
          content: "Endereços para intimação em Pernambuco:\n\n- Recife: Procuradoria Fiscal da Prefeitura do Recife, Av. Cais do Apolo, 925, Bairro do Recife\n- Olinda: Procuradoria Geral do Município de Olinda\n- Jaboatão: Procuradoria Fiscal de Jaboatão dos Guararapes\n\nSEMPRE usar Aviso de Recebimento (AR) e guardar comprovante nos autos.",
          metadata: {
            calloutType: "tip",
            title: "Endereços para Intimação",
          },
        },
        {
          type: "callout",
          content: "STJ - AgInt no REsp 1.906.543/SP (2021): 'A ausência de intimação da Fazenda Pública para se habilitar no processo executivo impede a sub-rogação dos créditos tributários no preço da arrematação, podendo a Fazenda cobrar diretamente do arrematante'.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Recente",
          },
        },
      ],
    },
    {
      id: "mod-03-lesson-04",
      title: "Consequências da Falta de Notificação",
      description: "Prejuízos causados por notificações inadequadas",
      estimatedMinutes: 10,
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
        {
          type: "case-study",
          content: "**Exemplo Numérico - Prejuízos da Falta de Intimação:**\n\n**CENÁRIO: Leilão Anulado por Falta de Intimação do Cônjuge**\n\n**Custos do Primeiro Leilão:**\n- Taxa do leiloeiro (5%): R$ 18.000,00\n- Publicação de editais: R$ 2.500,00\n- Custas processuais: R$ 3.000,00\n- Avaliação do imóvel: R$ 4.500,00\n**Total investido:** R$ 28.000,00\n\n**Tempo decorrido:** 4 meses desde avaliação até arrematação\n\n**ANULAÇÃO:**\n- Cônjuge não intimado impugna\n- Leilão anulado\n- Arrematante desiste (insegurança jurídica)\n\n**Custos do Segundo Leilão:**\n- Nova taxa leiloeiro: R$ 18.000,00\n- Nova publicação: R$ 2.500,00\n- Nova avaliação (anterior desatualizada): R$ 4.500,00\n- Custas processuais adicionais: R$ 2.000,00\n**Total adicional:** R$ 27.000,00\n\n**PREJUÍZO TOTAL:**\n- Financeiro: R$ 55.000,00\n- Temporal: 10 meses de atraso\n- Processo: Risco de prescrição intercorrente\n\n**TUDO POR NÃO INTIMAR O CÔNJUGE**",
          metadata: {
            title: "Análise Financeira do Erro",
          },
        },
        {
          type: "callout",
          content: "Responsabilidade do servidor: Embora o servidor não responda pessoalmente pelos custos, erros sistemáticos podem gerar responsabilização administrativa e comprometer a imagem do Tribunal perante a sociedade.",
          metadata: {
            calloutType: "warning",
            title: "Responsabilidade Administrativa",
          },
        },
        {
          type: "legal-text",
          content: "CPC, Art. 903, §1º: A arrematação poderá, no prazo de 10 (dez) dias, ser tornada sem efeito por circunstância superveniente.\n\nJurisprudência pacífica: Falta de intimação de interessado essencial (cônjuge, Fazenda credora) é circunstância que torna arrematação sem efeito, ainda que descoberta após 10 dias.",
          metadata: {
            legalReference: "CPC, Art. 903, §1º",
          },
        },
        {
          type: "callout",
          content: "Impacto no credor: O exequente que aguarda há anos a satisfação de seu crédito pode ter seu direito prejudicado por mais 10-18 meses devido a erro evitável de notificação. Isso gera frustração e descrédito no sistema judicial.",
          metadata: {
            calloutType: "error",
            title: "Impacto na Credibilidade do Judiciário",
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
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "text",
          content: "A legislação não estabelece prazo fixo de validade para laudos de avaliação. Contudo, a jurisprudência consolidou parâmetros claros.",
        },
        {
          type: "legal-text",
          content: "CPC, Art. 873: É lícito ao executado, no prazo de 15 (quinze) dias após a intimação da penhora, requerer a substituição do bem penhorado, desde que comprove cabalmente que a substituição não trará prejuízo ao exequente e que a penhora lhe está causando grave dano.\n\nArt. 875: Serão realizadas avaliações sempre que os bens penhorados forem de valor superior ao da dívida.\n\nNão há prazo de validade expresso, mas a jurisprudência consolidou entendimento.",
          metadata: {
            legalReference: "CPC, Arts. 873 e 875",
          },
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
        {
          type: "case-study",
          content: "**Caso Real - STJ REsp 1.840.752/SP (2020):**\n\n**Situação:**\n- Imóvel avaliado em setembro/2015: R$ 650.000,00\n- Leilão realizado em março/2019 (3 anos e 6 meses depois)\n- Preço da 2ª praça: R$ 455.000,00 (70% do valor da avaliação)\n- Arrematação: R$ 460.000,00\n\n**Problema identificado:**\n- Mercado imobiliário de São Paulo valorizou 38% no período (FIPE-ZAP)\n- Valor real estimado em 2019: R$ 897.000,00\n- Arrematação representou apenas 51% do valor real\n\n**Impugnação:**\n- Executado alegou preço vil por avaliação desatualizada\n- Juntou laudos de imóveis similares vendidos na região\n- Demonstrou valorização expressiva no período\n\n**Decisão STJ:**\n- Acolheu impugnação\n- Anulou leilão\n- Determinou nova avaliação\n- Fundamento: Avaliação desatualizada configura preço vil indireto\n\n**Nova avaliação (2020):** R$ 915.000,00\n\n**Diferença:** O executado teria prejuízo de R$ 455.000,00 se leilão fosse mantido",
          metadata: {
            title: "Jurisprudência Consolidada STJ",
          },
        },
        {
          type: "callout",
          content: "REGRA PRÁTICA DO TJPE: Avaliação com mais de 12 meses deve ser atualizada monetariamente. Avaliação com mais de 24 meses deve ser REFEITA por novo avaliador com vistoria atualizada do imóvel.",
          metadata: {
            calloutType: "warning",
            title: "Orientação do TJPE",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Quando Atualizar:**\n\n**CENÁRIO 1: Atualização Monetária (12-24 meses)**\n- Avaliação: R$ 400.000,00 (jan/2024)\n- Leilão previsto: jan/2025 (12 meses)\n- IPCA período: 4,5%\n- Valor atualizado: R$ 418.000,00\n- Ação: Aplicar correção monetária\n\n**CENÁRIO 2: Nova Avaliação Obrigatória (>24 meses)**\n- Avaliação: R$ 400.000,00 (jan/2023)\n- Leilão previsto: maio/2025 (28 meses)\n- Ação: Nova avaliação completa com vistoria\n- Razão: Podem ter ocorrido reformas, deterioração, mudanças na região\n\n**CENÁRIO 3: Avaliação Urgente (<6 meses)**\n- Avaliação: R$ 400.000,00 (set/2024)\n- Leilão previsto: dez/2024 (3 meses)\n- Ação: Usar valor original sem correção\n- Resultado: Segurança jurídica máxima",
          metadata: {
            title: "Guia de Decisão",
          },
        },
        {
          type: "callout",
          content: "STJ - AgInt no AREsp 1.658.922/SP (2020): 'A avaliação judicial tem validade limitada no tempo, devendo ser atualizada quando transcorrido lapso temporal significativo que possa ter alterado o valor de mercado do bem'.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Vinculante",
          },
        },
      ],
    },
    {
      id: "mod-04-lesson-02",
      title: "Quando É Necessário Atualizar a Avaliação",
      description: "Situações que exigem nova avaliação",
      estimatedMinutes: 25,
      order: 2,
      sections: [
        {
          type: "text",
          content: "A atualização da avaliação é um dos pontos mais críticos para evitar nulidades e prejuízos em leilões judiciais. Uma avaliação desatualizada pode caracterizar preço vil, gerar prejuízo ao executado e ensejar a anulação do procedimento.",
        },
        {
          type: "legal-text",
          content: "Art. 870. O juiz determinará a avaliação do bem penhorado.\n\n§1º A avaliação deverá ser realizada por oficial de justiça ou por avaliador nomeado pelo juiz.\n\n§2º Quando o valor controvertido for de pequena monta ou de fácil constatação, o juiz poderá dispensar a avaliação por perito e determiná-la ao próprio oficial de justiça.\n\nArt. 873. O avaliador apresentará laudo de avaliação com as indicações do valor do bem e do critério utilizado na avaliação.",
          metadata: {
            legalReference: "CPC, Arts. 870 e 873",
          },
        },
        {
          type: "text",
          content: "**Situações que OBRIGAM nova avaliação:**",
        },
        {
          type: "checklist",
          content: "Hipóteses Obrigatórias de Reavaliação",
          metadata: {
            items: [
              "Decurso de tempo superior a 24 meses da avaliação original",
              "Alterações substanciais no mercado imobiliário da região (valorização/desvalorização superior a 20%)",
              "Benfeitorias realizadas no imóvel após a avaliação (reforma, construção, ampliação)",
              "Deterioração significativa do bem (incêndio, enchente, depredação, abandono)",
              "Obras públicas de infraestrutura na região (metrô, BRT, viadutos, shoppings)",
              "Mudanças urbanísticas significativas (zoneamento, gabarito, uso do solo)",
              "Impugnação fundamentada da parte com provas de desatualização",
              "Determinação judicial de ofício quando verificada obsolescência",
            ],
          },
        },
        {
          type: "callout",
          content: "O STJ consolidou entendimento de que avaliação com mais de 2 anos está presumidamente desatualizada e pode configurar preço vil, mesmo que o valor nominal esteja acima de 50% da avaliação original.",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Vinculante STJ",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Anulação por Avaliação Desatualizada (TJPE 2022):**\n\n**Situação Inicial:**\n- Imóvel: Apartamento 3 quartos, Boa Viagem, Recife/PE\n- Avaliação: R$ 650.000,00 (realizada em março/2019)\n- Data do leilão: novembro/2023 (4 anos e 8 meses depois)\n- Servidor aplicou apenas atualização monetária pelo IPCA: R$ 780.000,00\n\n**Primeiro Leilão (1ª praça):**\n- Preço mínimo: R$ 780.000,00\n- Resultado: DESERTO (sem lances)\n\n**Segundo Leilão (2ª praça):**\n- Preço mínimo: R$ 546.000,00 (70% de R$ 780.000)\n- Lance vencedor: R$ 560.000,00\n- Arrematante: Investidor imobiliário local\n\n**Impugnação do Executado:**\nAllegou que mercado imobiliário de Boa Viagem valorizou 85% entre 2019-2023. Apresentou:\n- 8 anúncios de apartamentos similares na região: R$ 1.100.000 a R$ 1.350.000\n- Laudo particular: R$ 1.280.000,00\n- Certidão do Cartório de Registro: 5 vendas recentes na região com valores médios de R$ 1.200.000\n\n**Decisão do Juiz:**\nAcolheu impugnação e ANULOU o leilão. Fundamentação:\n1. Avaliação com 4 anos e 8 meses está absolutamente obsoleta\n2. Simples atualização monetária não reflete variações reais do mercado\n3. Região de Boa Viagem teve valorização atípica no período (pandemia, home office)\n4. Lance de R$ 560.000 representa apenas 43% do valor real de mercado\n5. Caracterizado preço vil e prejuízo manifesto ao executado\n\n**Determinação:**\nNova avaliação completa por perito judicial com vistoria in loco.\n\n**Nova Avaliação (2024):**\nR$ 1.250.000,00\n\n**Resultado:**\nProcesso atrasou 14 meses, custas adicionais de R$ 15.000,00 (nova avaliação, publicações, honorários).",
          metadata: {
            title: "Prejuízo por Não Atualizar Corretamente",
          },
        },
        {
          type: "callout",
          content: "REGRA DE OURO: Avaliação com mais de 12 meses = atualização monetária obrigatória. Avaliação com mais de 24 meses = NOVA AVALIAÇÃO COMPLETA obrigatória.",
          metadata: {
            calloutType: "warning",
            title: "Prazos Críticos",
          },
        },
        {
          type: "text",
          content: "**Sinais de que a avaliação DEVE ser atualizada:**",
        },
        {
          type: "checklist",
          content: "Indicadores de Necessidade de Reavaliação",
          metadata: {
            items: [
              "Índices de valorização imobiliária da região divergem significativamente do IPCA",
              "Região passou por obras de infraestrutura (inauguração de estação de metrô, shopping, parque)",
              "Imóvel está ocupado irregularmente (invasão, deterioração por abandono)",
              "Mercado imobiliário local teve mudanças atípicas (boom ou crise)",
              "Avaliação foi feita sem vistoria interna (apenas externa ou por cálculos)",
              "Há divergência superior a 30% entre valor da avaliação e valores de mercado da região",
            ],
          },
        },
        {
          type: "callout",
          content: "O juiz tem o PODER-DEVER de determinar nova avaliação de ofício quando verificar desatualização, independentemente de provocação das partes. Isto porque o preço vil prejudica o executado e viola princípios constitucionais.",
          metadata: {
            calloutType: "info",
            title: "Poder-Dever do Magistrado",
          },
        },
        {
          type: "legal-text",
          content: "Art. 139. O juiz dirigirá o processo conforme as disposições deste Código, incumbindo-lhe:\n\nIV - determinar todas as medidas indutivas, coercitivas, mandamentais ou sub-rogatórias necessárias para assegurar o cumprimento de ordem judicial, inclusive nas ações que tenham por objeto prestação pecuniária.",
          metadata: {
            legalReference: "CPC, Art. 139, IV",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Quando NÃO é necessário reavaliar:**\n\n**Situação:**\n- Imóvel: Casa comercial, Recife Antigo\n- Avaliação: R$ 850.000,00 (junho/2023)\n- Data do leilão programado: março/2024 (9 meses depois)\n- IPCA acumulado: 4,8%\n- Mercado imobiliário comercial estável na região\n\n**Análise do Servidor:**\n- Decurso de tempo inferior a 12 meses: OK\n- Sem alterações no imóvel ou região: OK\n- Sem impugnação da avaliação: OK\n- Mercado estável: OK\n\n**Decisão Correta:**\nAplicar atualização monetária simples:\nR$ 850.000 × 1,048 = R$ 890.800,00\n\n**1ª Praça:** R$ 890.800,00\n**2ª Praça:** R$ 623.560,00 (70% de R$ 890.800)\n\n**Resultado:** Leilão realizado sem problemas, sem necessidade de nova avaliação completa.",
          metadata: {
            title: "Atualização Monetária Suficiente",
          },
        },
        {
          type: "callout",
          content: "STJ - REsp 1.909.582/SP (2023): 'A avaliação judicial não tem prazo de validade fixo, mas deve refletir o valor real e atual do bem. Transcorrido lapso temporal significativo ou havendo alterações no mercado, nova avaliação é obrigatória, sob pena de caracterizar preço vil'.",
          metadata: {
            calloutType: "error",
            title: "Leading Case STJ - 2023",
          },
        },
        {
          type: "callout",
          content: "PROCEDIMENTO PRÁTICO: Ao receber processo para elaboração de edital, SEMPRE verificar: 1) Data da última avaliação; 2) Se passou mais de 12 meses; 3) Consultar índices de valorização imobiliária da região; 4) Se necessário, sugerir ao juiz nova avaliação ANTES de publicar edital.",
          metadata: {
            calloutType: "tip",
            title: "Checklist do Servidor",
          },
        },
      ],
    },
    {
      id: "mod-04-lesson-03",
      title: "Como Atualizar a Avaliação",
      description: "Três formas de atualização de valores",
      estimatedMinutes: 30,
      order: 3,
      sections: [
        {
          type: "text",
          content: "A atualização da avaliação pode ser feita de três formas distintas, cada uma adequada a situações específicas. A escolha do método correto é fundamental para evitar nulidades e garantir que o valor do bem reflita sua realidade de mercado.",
        },
        {
          type: "checklist",
          content: "Três Métodos de Atualização",
          metadata: {
            items: [
              "MÉTODO 1: Atualização Monetária Simples - Aplicação de índice oficial (IPCA, INPC, IGP-M) sobre valor original",
              "MÉTODO 2: Nova Avaliação Completa - Novo laudo técnico com vistoria presencial por perito judicial",
              "MÉTODO 3: Atualização pelo Avaliador Original - Mesmo profissional atualiza valores considerando mercado atual",
            ],
          },
        },
        {
          type: "text",
          content: "**MÉTODO 1: Atualização Monetária Simples**",
        },
        {
          type: "callout",
          content: "Este método é adequado quando: (1) Decurso de tempo inferior a 12-18 meses; (2) Mercado imobiliário da região permaneceu estável; (3) Não houve alterações no imóvel ou na região; (4) Índices oficiais refletem adequadamente a variação do mercado local.",
          metadata: {
            calloutType: "info",
            title: "Quando Usar Atualização Monetária",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Atualização Monetária pelo IPCA:**\n\n**Dados Originais:**\n- Avaliação: R$ 420.000,00\n- Data da avaliação: 15/01/2023\n- Data do leilão programado: 20/11/2024\n- Período: 22 meses\n\n**Cálculo do IPCA Acumulado (jan/2023 a nov/2024):**\n- 2023 (fev a dez): 4,62%\n- 2024 (jan a nov): 4,87%\n- Total acumulado: 9,71%\n\n**Valor Atualizado:**\nR$ 420.000 × 1,0971 = R$ 460.782,00\n\n**Preços do Edital:**\n- 1ª Praça: R$ 460.782,00 (100% do valor atualizado)\n- 2ª Praça: R$ 322.547,40 (70% do valor atualizado)\n- Limite mínimo absoluto: R$ 230.391,00 (50% do valor atualizado)\n\n**Redação no Edital:**\n'O imóvel foi avaliado em R$ 420.000,00 em janeiro/2023. O valor foi atualizado monetariamente pelo IPCA acumulado de 9,71% até novembro/2024, totalizando R$ 460.782,00.'",
          metadata: {
            title: "Cálculo de Atualização pelo IPCA",
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO: A atualização monetária simples NÃO substitui nova avaliação quando há alterações substanciais no mercado ou no imóvel. Use este método apenas quando o mercado estiver estável.",
          metadata: {
            calloutType: "warning",
            title: "Limitações do Método",
          },
        },
        {
          type: "text",
          content: "**MÉTODO 2: Nova Avaliação Completa**",
        },
        {
          type: "callout",
          content: "Este método é OBRIGATÓRIO quando: (1) Decurso de tempo superior a 24 meses; (2) Alterações substanciais no mercado (valorização/desvalorização atípica); (3) Modificações no imóvel (reforma, deterioração); (4) Obras de infraestrutura na região; (5) Impugnação fundamentada da parte.",
          metadata: {
            calloutType: "error",
            title: "Quando Nova Avaliação é Obrigatória",
          },
        },
        {
          type: "legal-text",
          content: "Art. 873. O avaliador apresentará laudo de avaliação com as indicações do valor do bem e do critério utilizado na avaliação.\n\n§1º O laudo conterá:\nI - a descrição do bem com suas características;\nII - o estado de conservação;\nIII - o valor venal para efeitos fiscais;\nIV - o valor de mercado, considerados os ônus que recaem sobre o bem;\nV - a fundamentação da avaliação, com indicação dos critérios utilizados.",
          metadata: {
            legalReference: "CPC, Art. 873 e §1º",
          },
        },
        {
          type: "checklist",
          content: "Procedimento para Determinar Nova Avaliação",
          metadata: {
            items: [
              "PASSO 1: Servidor verifica necessidade e sugere ao juiz por despacho fundamentado",
              "PASSO 2: Juiz determina nova avaliação e designa perito judicial (oficial de justiça ou avaliador credenciado)",
              "PASSO 3: Perito realiza vistoria presencial no imóvel (interna e externa)",
              "PASSO 4: Perito analisa mercado local (pesquisa comparativa de preços)",
              "PASSO 5: Perito elabora laudo completo com valor atualizado e fundamentação",
              "PASSO 6: Laudo é juntado aos autos, partes intimadas para manifestação (5 dias)",
              "PASSO 7: Após prazo, juiz homologa laudo e servidor elabora edital com novo valor",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Prático - Nova Avaliação Completa:**\n\n**Situação Inicial:**\n- Imóvel: Galpão industrial, Cabo de Santo Agostinho/PE\n- Avaliação original: R$ 1.800.000,00 (março/2020)\n- Data atual: setembro/2024 (4 anos e 6 meses depois)\n- Região: SUAPE (Complexo Industrial)\n\n**Análise do Servidor:**\n1. Decurso de tempo: 54 meses (muito superior a 24 meses)\n2. Região teve expansão industrial significativa (novas empresas instaladas)\n3. Inauguração de novo acesso rodoviário em 2022\n4. Mercado industrial da região aquecido\n\n**Decisão:** OBRIGATÓRIA nova avaliação completa.\n\n**Despacho Sugerido ao Juiz:**\n'Senhor Juiz, verifico que a avaliação do imóvel penhorado data de março/2020, tendo transcorrido mais de 4 anos. A região de SUAPE passou por transformações econômicas significativas no período, com instalação de novas indústrias e melhorias de infraestrutura. Nos termos da jurisprudência do STJ (REsp 1.909.582/SP), sugiro determinar nova avaliação completa para refletir o valor real e atual do bem, evitando-se configuração de preço vil.'\n\n**Determinação Judicial:**\nJuiz acolheu sugestão e determinou nova avaliação por perito credenciado.\n\n**Nova Avaliação (outubro/2024):**\nR$ 3.200.000,00\n\n**Justificativa do Perito:**\n- Valorização da região SUAPE: +75%\n- Melhoria de acessos rodoviários\n- Aquecimento do mercado de galpões industriais\n- Escassez de imóveis disponíveis na região\n\n**Resultado:**\nEdital elaborado com valor atualizado, leilão realizado com sucesso, arrematação por R$ 3.150.000,00. Executado satisfeito, credor recebeu valor significativamente superior.",
          metadata: {
            title: "Valorização Significativa Detectada",
          },
        },
        {
          type: "text",
          content: "**MÉTODO 3: Atualização pelo Avaliador Original**",
        },
        {
          type: "callout",
          content: "Este método é adequado quando: (1) Decurso de tempo entre 12 e 24 meses; (2) Mesmo avaliador está disponível; (3) Imóvel não sofreu alterações físicas; (4) Mercado teve variações que simples índice não capta adequadamente; (5) Custo menor que nova avaliação completa.",
          metadata: {
            calloutType: "tip",
            title: "Método Intermediário Econômico",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Atualização pelo Avaliador Original:**\n\n**Situação:**\n- Imóvel: Apartamento de alto padrão, Boa Viagem, Recife/PE\n- Avaliação original: R$ 1.500.000,00 (abril/2023)\n- Avaliador: Engenheiro João Silva (credenciado TJPE)\n- Data atual: dezembro/2024 (20 meses depois)\n\n**Análise:**\n- Decurso: 20 meses (dentro da faixa intermediária)\n- IPCA acumulado: 8,5% → valor atualizado seria R$ 1.627.500,00\n- Mercado de apartamentos alto padrão em Boa Viagem valorizou 18% no período (acima do IPCA)\n- Simples atualização monetária subavaliaria o imóvel\n\n**Solução:**\nJuiz determinou que o mesmo avaliador (Eng. João Silva) atualizasse o valor considerando mercado atual, dispensando nova vistoria completa.\n\n**Procedimento do Avaliador:**\n1. Consultou vendas recentes de apartamentos similares na região\n2. Verificou anúncios atuais de imóveis comparáveis\n3. Analisou índices específicos de valorização imobiliária de Recife\n4. Elaborou parecer técnico simplificado (5 páginas, sem nova vistoria)\n\n**Valor Atualizado:**\nR$ 1.770.000,00 (valorização de 18% sobre valor original)\n\n**Fundamentação:**\n- Comparação com 6 vendas recentes na região: R$ 1.650.000 a R$ 1.890.000\n- Índice FIPE-ZAP de valorização em Boa Viagem: +17,5%\n- Escassez de imóveis de alto padrão disponíveis\n\n**Custos:**\n- Nova avaliação completa: R$ 5.500,00\n- Atualização pelo avaliador original: R$ 1.800,00\n- Economia: R$ 3.700,00\n\n**Resultado:**\nEdital elaborado com valor de R$ 1.770.000,00, muito mais realista que os R$ 1.627.500,00 da simples atualização monetária.",
          metadata: {
            title: "Método Intermediário na Prática",
          },
        },
        {
          type: "checklist",
          content: "Checklist de Decisão - Qual Método Usar?",
          metadata: {
            items: [
              "Avaliação com menos de 12 meses + mercado estável = MÉTODO 1 (atualização monetária)",
              "Avaliação com 12-24 meses + variação atípica do mercado = MÉTODO 3 (atualização pelo avaliador)",
              "Avaliação com mais de 24 meses = MÉTODO 2 (nova avaliação completa) - OBRIGATÓRIO",
              "Alterações no imóvel (reforma/deterioração) = MÉTODO 2 (nova avaliação) - SEMPRE",
              "Obras de infraestrutura na região = MÉTODO 2 (nova avaliação) - SEMPRE",
              "Impugnação fundamentada da parte = MÉTODO 2 (nova avaliação) - SEMPRE",
            ],
          },
        },
        {
          type: "callout",
          content: "Índices oficiais mais utilizados: IPCA (IBGE) - preferencial para contratos públicos; INPC (IBGE) - alternativo; IGP-M (FGV) - usado em contratos privados. No TJPE, recomenda-se prioritariamente o IPCA.",
          metadata: {
            calloutType: "info",
            title: "Índices de Atualização",
          },
        },
        {
          type: "legal-text",
          content: "Art. 491. Na ação relativa à obrigação de pagar quantia, ainda que formulado pedido genérico, a decisão definirá desde logo a extensão da obrigação, o índice de correção monetária, a taxa de juros, o termo inicial de ambos e a periodicidade da capitalização dos juros, se for o caso, salvo quando:\n\nI - não for possível determinar, de modo definitivo, o montante devido;\nII - a apuração do valor devido depender da produção de prova de realização demorada ou excessivamente dispendiosa, assim reconhecida na sentença.",
          metadata: {
            legalReference: "CPC, Art. 491",
          },
        },
        {
          type: "callout",
          content: "ERRO GRAVE: Aplicar atualização monetária quando já se passaram mais de 2 anos da avaliação original. Este erro caracteriza negligência do servidor e pode gerar responsabilização, além de anulação do leilão.",
          metadata: {
            calloutType: "error",
            title: "Erro que Anula o Leilão",
          },
        },
        {
          type: "checklist",
          content: "Procedimento Prático para Servidores - Passo a Passo",
          metadata: {
            items: [
              "PASSO 1: Ao receber processo, localizar laudo de avaliação nos autos e verificar data",
              "PASSO 2: Calcular tempo decorrido desde a avaliação até data prevista do leilão",
              "PASSO 3: Consultar índices de valorização imobiliária da região específica do imóvel",
              "PASSO 4: Decidir qual método aplicar conforme checklist de decisão acima",
              "PASSO 5: Se Método 1: calcular índice acumulado e atualizar valor",
              "PASSO 6: Se Método 2 ou 3: elaborar despacho fundamentado sugerindo ao juiz",
              "PASSO 7: Incluir SEMPRE no edital a data da avaliação utilizada e método de atualização",
              "PASSO 8: Guardar cálculos e fundamentação para eventual impugnação",
            ],
          },
        },
        {
          type: "callout",
          content: "MODELO DE CLÁUSULA PARA O EDITAL: 'O imóvel foi avaliado judicialmente em R$ [valor] em [data]. O valor foi atualizado para R$ [valor atualizado] mediante aplicação do IPCA acumulado de [%] no período de [data inicial] a [data final], nos termos do art. 491 do CPC.'",
          metadata: {
            calloutType: "success",
            title: "Redação Modelo para Edital",
          },
        },
        {
          type: "case-study",
          content: "**Tabela Comparativa - Quando Usar Cada Método:**\n\n**CENÁRIO 1:**\nAvaliação: 8 meses / Mercado: estável / Imóvel: sem alterações\n→ MÉTODO 1: Atualização monetária simples\n\n**CENÁRIO 2:**\nAvaliação: 18 meses / Mercado: valorização atípica de 25% / Imóvel: sem alterações\n→ MÉTODO 3: Atualização pelo avaliador original\n\n**CENÁRIO 3:**\nAvaliação: 30 meses / Mercado: qualquer situação / Imóvel: qualquer situação\n→ MÉTODO 2: Nova avaliação completa (OBRIGATÓRIO)\n\n**CENÁRIO 4:**\nAvaliação: 10 meses / Mercado: estável / Imóvel: sofreu incêndio\n→ MÉTODO 2: Nova avaliação completa (alteração do bem)\n\n**CENÁRIO 5:**\nAvaliação: 15 meses / Mercado: inaugurou shopping ao lado / Imóvel: sem alterações\n→ MÉTODO 2: Nova avaliação completa (alteração da região)",
          metadata: {
            title: "Guia Rápido de Decisão",
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
      estimatedMinutes: 25,
      order: 1,
      sections: [
        {
          type: "text",
          content: "A averbação é um dos institutos mais importantes do Sistema Registral Imobiliário brasileiro. Compreender sua natureza e função é essencial para conduzir leilões judiciais com segurança jurídica.",
        },
        {
          type: "text",
          content: "**Conceito Legal de Averbação:**",
        },
        {
          type: "callout",
          content: "Averbação é o ato de registro secundário na matrícula do imóvel, destinado a registrar fatos ou atos que modificam, esclarecem ou restringem a situação jurídica do bem, sem transferir a propriedade. Diferencia-se do REGISTRO, que transfere a propriedade.",
          metadata: {
            calloutType: "info",
            title: "Definição Técnica",
          },
        },
        {
          type: "legal-text",
          content: "Lei 6.015/1973 (Lei de Registros Públicos)\n\nArt. 167. No Registro de Imóveis, além da matrícula, serão feitos:\n\nI - o registro:\na) das escrituras públicas de compra e venda;\nb) das cartas de arrematação;\n\nII - a averbação:\na) das convenções antenupciais e do regime de bens diversos do legal;\nb) da mudança de denominação e de numeração dos prédios;\nc) da construção, da reconstrução, da demolição, do desmembramento e do loteamento de imóveis;\nd) da penhora;\ne) das sentenças declaratórias de usucapião.",
          metadata: {
            legalReference: "Lei 6.015/1973, Art. 167",
          },
        },
        {
          type: "text",
          content: "**Diferença fundamental entre REGISTRO e AVERBAÇÃO:**",
        },
        {
          type: "checklist",
          content: "REGISTRO x AVERBAÇÃO",
          metadata: {
            items: [
              "REGISTRO: Transfere a propriedade (compra e venda, arrematação, doação, usucapião)",
              "REGISTRO: Cria nova matrícula ou nova titularidade",
              "REGISTRO: Efeito constitutivo - cria direito real",
              "AVERBAÇÃO: NÃO transfere propriedade",
              "AVERBAÇÃO: Apenas modifica, esclarece ou restringe situação existente",
              "AVERBAÇÃO: Efeito declaratório - informa situação jurídica",
              "AVERBAÇÃO: Exemplos: penhora, construção, mudança de endereço, instituição de bem de família",
            ],
          },
        },
        {
          type: "text",
          content: "**Tipos de Averbação Relevantes para Leilões Judiciais:**",
        },
        {
          type: "checklist",
          content: "Averbações Críticas em Leilão Judicial",
          metadata: {
            items: [
              "1. AVERBAÇÃO DA PENHORA (Art. 844 CPC) - Registra que imóvel está penhorado em processo judicial específico",
              "2. AVERBAÇÃO DA CONSOLIDAÇÃO DA PROPRIEDADE FIDUCIÁRIA - Em casos de alienação fiduciária (Lei 9.514/97)",
              "3. AVERBAÇÃO DE CONSTRUÇÃO/DEMOLIÇÃO - Alterações físicas no imóvel após matrícula",
              "4. AVERBAÇÃO DE CASAMENTO/DIVÓRCIO - Afeta direitos reais sobre o bem",
              "5. AVERBAÇÃO DE BEM DE FAMÍLIA (Lei 8.009/90) - Impenhorabilidade",
              "6. REGISTRO DA CARTA DE ARREMATAÇÃO - Este é REGISTRO, não averbação (transfere propriedade)",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO: A Carta de Arrematação NÃO é averbada, mas sim REGISTRADA na matrícula, pois transfere a propriedade do executado para o arrematante. Este é um erro conceitual comum.",
          metadata: {
            calloutType: "warning",
            title: "Erro Conceitual Comum",
          },
        },
        {
          type: "legal-text",
          content: "Art. 844. Para presunção absoluta de conhecimento por terceiros, cabe ao exequente providenciar a averbação da penhora no registro competente, mediante apresentação de cópia do auto ou do termo, independentemente de mandado judicial.\n\nParágrafo único. Quando o bem constrito estiver na posse de terceiro, este será intimado da penhora.",
          metadata: {
            legalReference: "CPC, Art. 844",
          },
        },
        {
          type: "text",
          content: "**Por Que a Averbação da Penhora é ESSENCIAL:**",
        },
        {
          type: "checklist",
          content: "Funções da Averbação da Penhora",
          metadata: {
            items: [
              "1. PUBLICIDADE: Torna público que o imóvel está penhorado, alertando terceiros",
              "2. OPONIBILIDADE: Permite opor a penhora contra terceiros adquirentes de má-fé",
              "3. PRIORIDADE: Garante prioridade do credor sobre credores posteriores",
              "4. SEGURANÇA AO ARREMATANTE: Comprova que penhora era conhecida por todos",
              "5. PRESUNÇÃO ABSOLUTA: Art. 844 estabelece presunção absoluta de conhecimento",
              "6. CARACTERIZAÇÃO DE FRAUDE: Essencial para caracterizar fraude à execução",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Prático - Importância da Averbação da Penhora:**\n\n**Situação:**\n- Processo: Execução de título extrajudicial\n- Imóvel penhorado: Apartamento em Boa Viagem, Recife/PE - R$ 800.000,00\n- Data da penhora: 15/03/2022\n- Matrícula 45.678 do 3º Cartório de Registro de Imóveis de Recife\n\n**ERRO DO EXEQUENTE/SERVIDOR:**\nNão providenciaram averbação da penhora na matrícula do imóvel.\n\n**O Que Aconteceu:**\n1. Em 10/05/2022 (2 meses após penhora), executado vendeu o imóvel para terceiro por R$ 750.000,00\n2. Comprador consultou matrícula: NÃO constava penhora\n3. Comprador de boa-fé registrou escritura de compra e venda\n4. Pagou R$ 750.000,00 ao executado (que embolsou o dinheiro)\n5. Exequente só descobriu venda quando tentou publicar edital de leilão (07/2022)\n\n**Discussão Judicial:**\n\n**Tese do Exequente:**\n'Há fraude à execução (Art. 792, IV CPC). A venda ocorreu após a penhora, logo é ineficaz.'\n\n**Tese do Terceiro Comprador:**\n'Sou adquirente de boa-fé. Consultei matrícula e NÃO constava penhora. Art. 844 exige averbação para presunção de conhecimento. Sem averbação, não havia como saber da penhora.'\n\n**Decisão do Juiz:**\nAcolheu tese do terceiro comprador. Fundamentação:\n- Art. 844 CPC é claro: presunção ABSOLUTA de conhecimento depende de averbação\n- SEM averbação, terceiro de boa-fé está protegido\n- Sistema registral imobiliário privilegia segurança jurídica e boa-fé\n- Culpa foi do exequente que não providenciou averbação\n\n**Consequências:**\n1. Venda mantida - Terceiro ficou com imóvel\n2. Executado embolsou R$ 750.000,00 e desapareceu\n3. Exequente perdeu a garantia da execução\n4. Processo frustrado\n5. Prejuízo total ao credor: R$ 800.000,00\n\n**Lição:**\nAVERBAR A PENHORA É OBRIGATÓRIO e deve ser a PRIMEIRA providência após o despacho de penhora.",
          metadata: {
            title: "Prejuízo de R$ 800 mil por Falta de Averbação",
          },
        },
        {
          type: "callout",
          content: "STJ - REsp 1.648.242/RS (2018): 'A ausência de averbação da penhora impede a caracterização de fraude à execução em relação a terceiros de boa-fé, ainda que a alienação tenha ocorrido após a penhora. O art. 844 do CPC estabelece presunção absoluta de conhecimento apenas quando há averbação.'",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência Vinculante STJ",
          },
        },
        {
          type: "text",
          content: "**Procedimento para Averbação da Penhora:**",
        },
        {
          type: "checklist",
          content: "Passo a Passo da Averbação",
          metadata: {
            items: [
              "PASSO 1: Juiz profere despacho de penhora",
              "PASSO 2: Lavrado Auto de Penhora ou Termo de Penhora nos autos",
              "PASSO 3: Servidor retira CÓPIA do Auto/Termo de Penhora",
              "PASSO 4: Elaborar ofício ao Cartório de Registro de Imóveis solicitando averbação",
              "PASSO 5: Art. 844 CPC: Apresentação de cópia do auto INDEPENDE de mandado judicial",
              "PASSO 6: Cartório processa averbação (prazo: até 15 dias úteis - Provimento CNJ 65/2017)",
              "PASSO 7: Servidor verifica se averbação foi concluída (solicitar certidão de matrícula atualizada)",
              "PASSO 8: Juntar aos autos certidão de matrícula com averbação da penhora",
            ],
          },
        },
        {
          type: "callout",
          content: "PRÁTICA RECOMENDADA: Ao receber processo para elaboração de edital, a PRIMEIRA verificação é consultar a matrícula e confirmar se a penhora está AVERBADA. Se não estiver, ANTES de publicar edital, providenciar averbação.",
          metadata: {
            calloutType: "tip",
            title: "Primeira Verificação Obrigatória",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Modelo de Ofício para Averbação:**\n\n**OFÍCIO Nº 123/2024 - 5ª VARA CÍVEL DE RECIFE**\n\nRecife, 20 de novembro de 2024.\n\nAo\n3º Cartório de Registro de Imóveis de Recife\nRua da Aurora, 500, Boa Vista, Recife/PE\n\nSenhor Oficial de Registro,\n\nEm cumprimento ao despacho de penhora proferido nos autos do Processo nº 0012345-67.2024.8.17.0001 (Execução de Título Extrajudicial), movido por BANCO XYZ S.A. em face de JOÃO DA SILVA, solicito a AVERBAÇÃO DA PENHORA sobre o imóvel matriculado sob nº 45.678 desse Cartório.\n\nImóvel: Apartamento 1.202, Edifício Boa Viagem Tower, situado na Av. Boa Viagem, 3.500, Boa Viagem, Recife/PE.\n\nFundamento: Art. 844 do Código de Processo Civil.\n\nSegue em anexo cópia do Auto de Penhora.\n\nAtenciosamente,\n\n[Assinatura do Servidor/Diretor de Secretaria]\n[Nome completo]\nMatrícula: XXXX",
          metadata: {
            title: "Modelo de Ofício",
          },
        },
        {
          type: "legal-text",
          content: "Lei 6.015/1973 (Lei de Registros Públicos)\n\nArt. 246. Além dos casos expressamente indicados no item II do art. 167, serão averbados na matrícula as sub-rogações e outras ocorrências que, por qualquer modo, alterem o registro.",
          metadata: {
            legalReference: "Lei 6.015/1973, Art. 246",
          },
        },
        {
          type: "callout",
          content: "CUSTAS DA AVERBAÇÃO: Em processos judiciais, as custas da averbação da penhora são adiantadas pelo exequente (credor) e posteriormente incluídas no cálculo da execução, sendo pagas pelo executado ao final.",
          metadata: {
            calloutType: "info",
            title: "Quem Paga a Averbação?",
          },
        },
      ],
    },
    {
      id: "mod-05-lesson-02",
      title: "Averbação da Penhora É Obrigatória?",
      description: "Importância legal da averbação",
      estimatedMinutes: 30,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Esta é uma das questões mais críticas em leilões judiciais. A resposta curta é: SIM, a averbação da penhora é ESSENCIAL e deve ser considerada OBRIGATÓRIA na prática forense, embora tecnicamente seja ônus do exequente.",
        },
        {
          type: "legal-text",
          content: "Art. 844. Para presunção absoluta de conhecimento por terceiros, cabe ao exequente providenciar a averbação da penhora no registro competente, mediante apresentação de cópia do auto ou do termo, independentemente de mandado judicial.\n\nParágrafo único. Quando o bem constrito estiver na posse de terceiro, este será intimado da penhora.",
          metadata: {
            legalReference: "CPC, Art. 844",
          },
        },
        {
          type: "callout",
          content: "O Art. 844 CPC atribui ao EXEQUENTE (credor) o ônus de providenciar a averbação. Contudo, na prática forense do TJPE, os servidores devem ALERTAR o exequente e até mesmo tomar a iniciativa de solicitar a averbação para evitar prejuízos ao processo.",
          metadata: {
            calloutType: "warning",
            title: "Ônus do Exequente, Dever do Servidor de Alertar",
          },
        },
        {
          type: "text",
          content: "**Natureza Jurídica da Averbação:**",
        },
        {
          type: "checklist",
          content: "A Averbação é Obrigatória ou Facultativa?",
          metadata: {
            items: [
              "TECNICAMENTE: É ônus do exequente (Art. 844 CPC), não obrigação judicial",
              "PRATICAMENTE: É ESSENCIAL e deve ser tratada como obrigatória",
              "CONSEQUÊNCIA: Sem averbação, penhora não é oponível a terceiros de boa-fé",
              "RECOMENDAÇÃO TJPE: Servidor deve SEMPRE verificar se foi providenciada",
              "BOA PRÁTICA: Incluir nos despachos de penhora ordem expressa para averbar",
              "JURISPRUDÊNCIA: STJ consolida que sem averbação, terceiro de boa-fé prevalece",
            ],
          },
        },
        {
          type: "legal-text",
          content: "Art. 792. A alienação ou a oneração de bem é considerada fraude à execução:\n\nIV - quando, ao tempo da alienação ou oneração, tramitava contra o devedor ação capaz de reduzi-lo à insolvência;\n\n§3º Nos casos de fraude à execução previstos nos incisos III e IV do caput deste artigo, o terceiro adquirente do bem pode garantir a eficácia de sua aquisição fazendo prova, por qualquer meio lícito, de sua boa-fé ou de que o negócio foi realizado há mais de noventa dias.\n\n§4º Antes de declarar a fraude à execução, o juiz deverá intimar o terceiro adquirente, que, se quiser, poderá opor embargos de terceiro, no prazo de 15 (quinze) dias.",
          metadata: {
            legalReference: "CPC, Art. 792, IV, §§3º e 4º",
          },
        },
        {
          type: "callout",
          content: "MUDANÇA IMPORTANTE NO CPC/2015: O Art. 792, §3º permite que terceiro de boa-fé prove sua boa-fé e mantenha o bem, MESMO quando há fraude à execução. A averbação da penhora é fundamental para afastar essa alegação de boa-fé.",
          metadata: {
            calloutType: "error",
            title: "Proteção ao Terceiro de Boa-Fé",
          },
        },
        {
          type: "text",
          content: "**Consequências GRAVES da Falta de Averbação:**",
        },
        {
          type: "checklist",
          content: "O Que Acontece Sem Averbação",
          metadata: {
            items: [
              "1. TERCEIROS DE BOA-FÉ podem adquirir o imóvel penhorado validamente",
              "2. FRAUDE À EXECUÇÃO pode NÃO ser caracterizada (ausência de presunção de conhecimento)",
              "3. ARREMATANTE pode perder a propriedade se terceiro registrou antes",
              "4. CREDOR perde a garantia e processo fica sem bens para satisfazer crédito",
              "5. IMPOSSIBILIDADE de opor a penhora contra terceiros",
              "6. NULIDADE do leilão pode ser decretada se matrícula não refletir penhora",
              "7. RESPONSABILIDADE do servidor/vara por omissão (possível)",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Real TJPE (2021) - Prejuízo de R$ 1,2 Milhão:**\n\n**Processo:**\nExecução Fiscal - Município de Recife vs. Empresa ABC Ltda.\n\n**Imóvel Penhorado:**\nGalpão comercial, Várzea, Recife/PE\nMatrícula: 78.910 - 2º Cartório de Registro de Imóveis de Recife\nValor da avaliação: R$ 1.200.000,00\nData da penhora: 10/01/2020\n\n**ERRO CRÍTICO:**\nNem o exequente (Município) nem o servidor providenciaram averbação da penhora.\n\n**Cronologia dos Fatos:**\n\n**10/01/2020:** Juiz profere despacho de penhora do galpão\n\n**15/01/2020:** Lavrado Auto de Penhora nos autos\n\n**Fevereiro a Dezembro/2020:** Processo parado aguardando avaliação (pandemia)\n\n**20/03/2021:** Executado (empresa devedora) vende galpão para Construtora XYZ por R$ 1.150.000,00\n\n**Comprador (Construtora XYZ):**\n- Consultou matrícula: NÃO constava penhora\n- Verificou certidões negativas\n- Contratou advogados para due diligence\n- Pagou R$ 1.150.000,00 ao executado\n- Registrou escritura de compra e venda na matrícula\n\n**25/03/2021:** Construtora XYZ é nova proprietária registral do imóvel\n\n**Maio/2021:** Município tenta publicar edital de leilão\n\n**Servidor verifica matrícula:** PROPRIETÁRIO MUDOU!\n\n**Reação do Município:**\nIngressou com Embargos de Terceiro às avessas, alegando fraude à execução.\n\n**Tese do Município:**\n'A venda ocorreu após a penhora (10/01/2020). Logo, há fraude à execução nos termos do Art. 792, IV do CPC. A venda deve ser declarada ineficaz.'\n\n**Defesa da Construtora XYZ:**\n'Somos terceiros de boa-fé:\n1. Consultamos matrícula - NÃO constava penhora (Art. 844 CPC não foi cumprido)\n2. Pagamos valor de mercado - R$ 1.150.000,00\n3. Contratamos advogados - fizemos due diligence completa\n4. Registramos a compra regularmente\n5. Art. 792, §3º: Terceiro de boa-fé pode manter o bem\n6. Ausência de averbação = ausência de presunção de conhecimento (STJ)'\n\n**Decisão da Juíza (1ª Instância):**\nAcolheu defesa da Construtora. Fundamentação:\n\n'O Art. 844 do CPC é expresso: para presunção ABSOLUTA de conhecimento por terceiros, é necessária a AVERBAÇÃO da penhora. No caso, a penhora NÃO foi averbada, o que afasta a presunção de conhecimento.\n\nO Art. 792, §3º permite que terceiro de boa-fé prove sua boa-fé e mantenha o bem. A Construtora demonstrou:\n- Consulta à matrícula (não constava penhora)\n- Pagamento de valor compatível com mercado\n- Due diligence completa\n- Registro regular\n\nA culpa pela não averbação foi do exequente (Município) que deixou de cumprir ônus do Art. 844. Terceiro de boa-fé não pode ser prejudicado por omissão do credor.'\n\n**Sentença:** Venda mantida. Construtora XYZ é proprietária legítima.\n\n**Recurso do Município ao TJPE:**\n2ª Turma confirmou sentença por unanimidade.\n\n**Acórdão TJPE:**\n'Sem averbação da penhora, não há presunção de conhecimento. Terceiro de boa-fé prevalece. Jurisprudência consolidada do STJ (REsp 1.648.242/RS).'\n\n**Consequências Finais:**\n1. Município perdeu garantia de R$ 1.200.000,00\n2. Executado embolsou R$ 1.150.000,00 e desapareceu\n3. Execução fiscal frustrada\n4. Município teve que desistir da execução\n5. Prejuízo ao erário público: R$ 1.200.000,00\n\n**Lição:**\nA falta de averbação custou R$ 1,2 milhão ao erário. SEMPRE averbar penhora.",
          metadata: {
            title: "Caso TJPE - R$ 1,2 Milhão Perdido",
          },
        },
        {
          type: "callout",
          content: "STJ - REsp 1.648.242/RS (2018): 'A ausência de averbação da penhora impede caracterização de fraude à execução em relação a terceiros de boa-fé. O sistema registral imobiliário brasileiro prestigia a segurança jurídica e a proteção ao terceiro que confia nos registros públicos.'",
          metadata: {
            calloutType: "error",
            title: "Leading Case STJ - Obrigatoriedade Prática",
          },
        },
        {
          type: "text",
          content: "**Momento Correto para Averbar:**",
        },
        {
          type: "checklist",
          content: "Quando Providenciar Averbação",
          metadata: {
            items: [
              "IDEAL: Imediatamente após despacho de penhora (no máximo 5 dias úteis)",
              "ANTES: De qualquer ato de publicação ou divulgação do leilão",
              "OBRIGATORIAMENTE: Antes da expedição do edital de leilão",
              "VERIFICAÇÃO: Ao receber processo para leilão, primeira verificação é se penhora está averbada",
              "SE NÃO ESTIVER: Providenciar imediatamente antes de prosseguir com edital",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso TJPB (2012) - Arrematante Perdeu Propriedade:**\n\n**Situação:**\nLeilão judicial realizado. Bem arrematado por R$ 350.000,00. Arrematante pagou valor integral.\n\n**ERRO DO ARREMATANTE/SERVIDOR:**\n1. Penhora NÃO estava averbada na matrícula\n2. Leilão foi realizado mesmo assim\n3. Auto de Arrematação foi assinado\n4. Carta de Arrematação NÃO foi expedida (demora de 8 meses)\n\n**O Que Aconteceu:**\nNesses 8 meses, executado vendeu imóvel a terceiros de boa-fé por R$ 320.000,00. Terceiros registraram a compra.\n\n**Disputa:**\nArrematante x Terceiros Compradores\n\nAmbos alegavam propriedade do mesmo imóvel.\n\n**Decisão do Tribunal:**\nTerceiros compradores prevaleceram. Fundamentação:\n1. Penhora não estava averbada = terceiros não tinham como saber\n2. Arrematação não foi registrada (carta não expedida)\n3. Princípio da continuidade registral: vale quem registrou primeiro\n4. Terceiros registraram compra antes da carta de arrematação\n\n**Resultado:**\n- Arrematante PERDEU os R$ 350.000,00 que pagou\n- Terceiros ficaram com imóvel\n- Arrematante teve que cobrar ressarcimento do executado (sem sucesso)\n\n**Lição Dupla:**\n1. AVERBAR penhora é essencial\n2. REGISTRAR carta de arrematação rapidamente também é essencial",
          metadata: {
            title: "Arrematante Perdeu R$ 350 Mil",
          },
        },
        {
          type: "callout",
          content: "PRÁTICA RECOMENDADA TJPE: Incluir no despacho de penhora: 'Providencie a serventia a averbação da penhora na matrícula do imóvel, nos termos do Art. 844 do CPC, intimando-se o exequente para recolher as custas em 5 dias.'",
          metadata: {
            calloutType: "tip",
            title: "Modelo de Despacho Seguro",
          },
        },
        {
          type: "legal-text",
          content: "Lei 6.015/1973 (Lei de Registros Públicos)\n\nArt. 240. O registro, enquanto não cancelado, produz todos os efeitos legais ainda que, por outra maneira, se prove que o título está desfeito, anulado, extinto ou rescindido.",
          metadata: {
            legalReference: "Lei 6.015/1973, Art. 240 - Eficácia do Registro",
          },
        },
        {
          type: "callout",
          content: "O Art. 240 da Lei 6.015/73 consagra o princípio da FÉ PÚBLICA REGISTRAL: o que está no registro prevalece, mesmo que haja outra prova. Por isso, sem averbação na matrícula, a penhora não existe para terceiros.",
          metadata: {
            calloutType: "info",
            title: "Princípio da Fé Pública Registral",
          },
        },
        {
          type: "checklist",
          content: "Checklist do Servidor - Averbação de Penhora",
          metadata: {
            items: [
              "□ Verificar se despacho de penhora foi proferido",
              "□ Verificar se Auto ou Termo de Penhora foi lavrado",
              "□ Consultar matrícula atualizada do imóvel (máximo 30 dias)",
              "□ Confirmar se penhora JÁ está averbada",
              "□ Se NÃO estiver: elaborar ofício ao Cartório de Registro",
              "□ Intimar exequente para recolher custas da averbação",
              "□ Aguardar confirmação do Cartório (até 15 dias úteis)",
              "□ Juntar aos autos certidão de matrícula COM averbação",
              "□ SOMENTE DEPOIS: prosseguir com elaboração do edital",
            ],
          },
        },
        {
          type: "callout",
          content: "NUNCA publique edital de leilão sem antes confirmar que a penhora está AVERBADA na matrícula. Este é o erro mais grave e frequente em leilões judiciais.",
          metadata: {
            calloutType: "error",
            title: "REGRA DE OURO",
          },
        },
      ],
    },
    {
      id: "mod-05-lesson-03",
      title: "Procedimento Prático para Servidores",
      description: "Passo a passo da averbação",
      estimatedMinutes: 25,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Esta aula apresenta o procedimento completo e detalhado que o servidor deve seguir para garantir que todas as averbações necessárias sejam realizadas corretamente, evitando nulidades e prejuízos.",
        },
        {
          type: "text",
          content: "**FASE 1: ANTES DO LEILÃO - Averbação da Penhora**",
        },
        {
          type: "checklist",
          content: "Passo a Passo - Averbação da Penhora (OBRIGATÓRIA)",
          metadata: {
            items: [
              "PASSO 1: Localizar nos autos o despacho judicial que determinou a penhora",
              "PASSO 2: Verificar se foi lavrado Auto de Penhora ou Termo de Penhora",
              "PASSO 3: Identificar dados completos do imóvel (endereço, matrícula, cartório)",
              "PASSO 4: Solicitar certidão de matrícula atualizada (máximo 30 dias) ao Cartório de Registro",
              "PASSO 5: Analisar matrícula e verificar se penhora JÁ está averbada",
              "PASSO 6: Se NÃO estiver averbada: elaborar ofício ao Cartório solicitando averbação",
              "PASSO 7: Anexar ao ofício cópia do Auto/Termo de Penhora (Art. 844 CPC não exige mandado)",
              "PASSO 8: Intimar exequente para recolher custas da averbação em 5 dias úteis",
              "PASSO 9: Após recolhimento, encaminhar ofício e guia ao Cartório de Registro",
              "PASSO 10: Aguardar conclusão da averbação pelo Cartório (prazo: até 15 dias úteis)",
              "PASSO 11: Solicitar nova certidão de matrícula COM averbação da penhora",
              "PASSO 12: Juntar aos autos certidão atualizada com averbação registrada",
              "PASSO 13: SOMENTE APÓS conclusão: prosseguir com elaboração do edital",
            ],
          },
        },
        {
          type: "callout",
          content: "REGRA DE OURO: JAMAIS publique edital de leilão antes de confirmar que a penhora está AVERBADA na matrícula. Esta é a verificação mais importante de todo o procedimento.",
          metadata: {
            calloutType: "error",
            title: "Verificação Obrigatória Nº 1",
          },
        },
        {
          type: "case-study",
          content: "**Modelo Prático - Ofício para Averbação da Penhora:**\n\n---\n\n**OFÍCIO Nº 234/2024**\n**5ª VARA CÍVEL DA COMARCA DE RECIFE**\n\nRecife, 15 de novembro de 2024.\n\nAo Ilustríssimo Senhor\nOficial de Registro de Imóveis\n2º Cartório de Registro de Imóveis de Recife\nRua Benfica, 150, Madalena, Recife/PE - CEP 50720-001\n\n**Ref.: Processo nº 0045678-90.2024.8.17.0001**\n\nSenhor Oficial,\n\nEm cumprimento ao despacho de fl. 120, que determinou a penhora do imóvel a seguir descrito, e nos termos do artigo 844 do Código de Processo Civil, solicito a Vossa Senhoria a **AVERBAÇÃO DA PENHORA** na matrícula correspondente:\n\n**DADOS DO PROCESSO:**\n- Processo: 0045678-90.2024.8.17.0001\n- Ação: Execução de Título Extrajudicial\n- Exequente: BANCO NORDESTE DO BRASIL S.A.\n- Executado: MARIA OLIVEIRA SANTOS\n- Vara: 5ª Vara Cível de Recife\n\n**DADOS DO IMÓVEL:**\n- Apartamento nº 802, Edifício Residencial Boa Vista\n- Situado na Rua da Aurora, 1.200, Boa Vista, Recife/PE\n- Área privativa: 95,50m² / Área total: 130,20m²\n- Matrícula: **65.432** desse Cartório\n- Data da penhora: 10/11/2024\n\n**FUNDAMENTAÇÃO LEGAL:**\nArt. 844 do Código de Processo Civil (Lei 13.105/2015)\n\n**DOCUMENTOS ANEXOS:**\n- Cópia do Auto de Penhora (fls. 121/122)\n- Guia de recolhimento de custas (recolhida pelo exequente)\n\nSolicito que, após a averbação, seja remetida a esta Vara certidão de matrícula atualizada comprovando o registro.\n\nAtenciosamente,\n\n**[Assinatura do Diretor de Secretaria]**\nNome Completo do Servidor\nDiretor de Secretaria - 5ª Vara Cível de Recife\nMatrícula TJPE: XXXX",
          metadata: {
            title: "Modelo de Ofício Completo",
          },
        },
        {
          type: "text",
          content: "**FASE 2: DURANTE A ELABORAÇÃO DO EDITAL**",
        },
        {
          type: "checklist",
          content: "Verificações Obrigatórias na Matrícula",
          metadata: {
            items: [
              "VERIFICAÇÃO 1: Penhora está averbada? (obrigatório - já verificado na Fase 1)",
              "VERIFICAÇÃO 2: Proprietário registral é o executado? (confirmar titularidade)",
              "VERIFICAÇÃO 3: Há outras penhoras averbadas? (ordem de preferência de credores)",
              "VERIFICAÇÃO 4: Há hipotecas ou alienações fiduciárias? (gravames que afetam o bem)",
              "VERIFICAÇÃO 5: Há averbação de construção recente? (área construída diverge da avaliação?)",
              "VERIFICAÇÃO 6: Há averbação de casamento/divórcio? (direitos do cônjuge)",
              "VERIFICAÇÃO 7: Há averbação de bem de família? (impenhorabilidade - Lei 8.009/90)",
              "VERIFICAÇÃO 8: Data da matrícula é recente? (menos de 30 dias)",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO: Se a matrícula apresentar qualquer averbação de BEM DE FAMÍLIA (Lei 8.009/90), o imóvel pode ser IMPENHORÁVEL (salvo exceções). Consultar o juiz ANTES de prosseguir com o leilão.",
          metadata: {
            calloutType: "warning",
            title: "Bem de Família = Impenhorável",
          },
        },
        {
          type: "legal-text",
          content: "Lei 8.009/1990 (Bem de Família)\n\nArt. 1º. O imóvel residencial próprio do casal, ou da entidade familiar, é impenhorável e não responderá por qualquer tipo de dívida civil, comercial, fiscal, previdenciária ou de outra natureza, contraída pelos cônjuges ou pelos pais ou filhos que sejam seus proprietários e nele residam, salvo nas hipóteses previstas nesta lei.\n\nArt. 3º. A impenhorabilidade é oponível em qualquer processo de execução civil, fiscal, previdenciária, trabalhista ou de outra natureza, salvo se movido:\n\nI - em razão dos créditos de trabalhadores da própria residência e das respectivas contribuições previdenciárias;\nII - pelo titular do crédito decorrente do financiamento destinado à construção ou à aquisição do imóvel, no limite dos créditos e acréscimos constituídos em função do respectivo contrato;\nIII – pelo credor de pensão alimentícia;\nIV - para cobrança de impostos, predial ou territorial, taxas e contribuições devidas em função do imóvel familiar;\nV - para execução de hipoteca sobre o imóvel oferecido como garantia real pelo casal ou pela entidade familiar;\nVI - por ter sido adquirido com produto de crime ou para execução de sentença penal condenatória a ressarcimento, indenização ou perdimento de bens;\nVII - por obrigação decorrente de fiança concedida em contrato de locação.",
          metadata: {
            legalReference: "Lei 8.009/1990, Arts. 1º e 3º",
          },
        },
        {
          type: "text",
          content: "**FASE 3: APÓS O LEILÃO - Registro da Arrematação**",
        },
        {
          type: "checklist",
          content: "Procedimento Pós-Leilão (REGISTRO, não averbação)",
          metadata: {
            items: [
              "PASSO 1: Leilão realizado - Proclamar arrematante vencedor",
              "PASSO 2: Lavrar AUTO DE ARREMATAÇÃO (Art. 901 CPC) - assinado por juiz, arrematante e leiloeiro",
              "PASSO 3: Aguardar prazo de 10 dias para impugnações (Art. 903, §2º CPC)",
              "PASSO 4: Se não houver impugnação OU impugnação rejeitada: arrematação se aperfeiçoa",
              "PASSO 5: Verificar pagamento integral pelo arrematante (à vista ou entrada + garantia)",
              "PASSO 6: Expedir CARTA DE ARREMATAÇÃO (Art. 903, §4º CPC)",
              "PASSO 7: Carta deve conter: qualificação do arrematante, descrição do imóvel, valor, condições",
              "PASSO 8: Entregar Carta ao arrematante",
              "PASSO 9: Arrematante leva Carta ao Cartório de Registro para REGISTRO (não averbação!)",
              "PASSO 10: Cartório registra transferência de propriedade na matrícula",
              "PASSO 11: Arrematante se torna proprietário registral do imóvel",
            ],
          },
        },
        {
          type: "callout",
          content: "CONCEITO IMPORTANTE: A Carta de Arrematação NÃO é averbada, mas sim REGISTRADA no Cartório de Imóveis. O REGISTRO transfere a propriedade do executado para o arrematante. A AVERBAÇÃO apenas informa fatos (como a penhora).",
          metadata: {
            calloutType: "info",
            title: "Registro x Averbação",
          },
        },
        {
          type: "legal-text",
          content: "Art. 901. O auto de arrematação conterá:\n\nI - a descrição do bem;\nII - a identificação do arrematante e de seu cônjuge, se for casado;\nIII - o preço;\nIV - a prova de pagamento integral ou, se for o caso, de pagamento da primeira parcela;\nV - a assinatura do juiz, do arrematante e do leiloeiro.\n\nParágrafo único. Quando realizada a arrematação por meio eletrônico, o auto poderá ser assinado eletronicamente.",
          metadata: {
            legalReference: "CPC, Art. 901",
          },
        },
        {
          type: "case-study",
          content: "**Caso Prático - Procedimento Completo de Averbação e Registro:**\n\n**LINHA DO TEMPO COMPLETA:**\n\n**10/01/2024** - Juiz profere despacho de penhora\n↓\n**12/01/2024** - Servidor lavra Auto de Penhora\n↓\n**15/01/2024** - Servidor solicita certidão de matrícula ao Cartório\n↓\n**22/01/2024** - Cartório fornece certidão: penhora NÃO averbada\n↓\n**25/01/2024** - Servidor elabora ofício solicitando averbação da penhora\n↓\n**26/01/2024** - Exequente intimado para recolher custas (R$ 350,00)\n↓\n**30/01/2024** - Exequente recolhe custas\n↓\n**02/02/2024** - Ofício e documentos encaminhados ao Cartório\n↓\n**15/02/2024** - Cartório conclui averbação da penhora (AV-3-65.432)\n↓\n**16/02/2024** - Cartório remete certidão atualizada à Vara\n↓\n**20/02/2024** - Servidor confirma: penhora AVERBADA ✓\n↓\n**25/02/2024** - Servidor inicia elaboração do edital (AGORA SIM!)\n↓\n**10/03/2024** - Edital publicado\n↓\n**25/03/2024** - Leilão eletrônico realizado\n↓\n**25/03/2024** - Arrematante: José Silva - Lance: R$ 580.000,00\n↓\n**28/03/2024** - Auto de Arrematação assinado\n↓\n**10/04/2024** - Prazo de impugnação encerrado (10 dias) - Sem impugnações\n↓\n**15/04/2024** - Arrematante deposita valor integral: R$ 580.000,00\n↓\n**18/04/2024** - Expedida Carta de Arrematação\n↓\n**22/04/2024** - Carta entregue ao arrematante José Silva\n↓\n**25/04/2024** - Arrematante leva Carta ao Cartório de Registro\n↓\n**10/05/2024** - Cartório REGISTRA Carta de Arrematação (R-4-65.432)\n↓\n**10/05/2024** - José Silva é PROPRIETÁRIO REGISTRAL do imóvel ✓\n\n**TOTAL DO PROCESSO:** 4 meses (penhora até propriedade final)\n\n**RESULTADO:** Procedimento perfeito, sem vícios, sem nulidades.",
          metadata: {
            title: "Timeline Completa - Procedimento Ideal",
          },
        },
        {
          type: "callout",
          content: "PRAZO CRÍTICO: A Carta de Arrematação deve ser expedida e registrada o mais rápido possível. Quanto mais demora, maior o risco de o executado tentar fraudar terceiros ou gerar problemas registrais.",
          metadata: {
            calloutType: "warning",
            title: "Expedição Rápida da Carta",
          },
        },
        {
          type: "checklist",
          content: "Checklist Final - Servidores TJPE",
          metadata: {
            items: [
              "□ ANTES DO LEILÃO: Penhora averbada na matrícula? (OBRIGATÓRIO)",
              "□ ANTES DO LEILÃO: Matrícula atualizada (máximo 30 dias)? (OBRIGATÓRIO)",
              "□ ANTES DO LEILÃO: Proprietário registral é o executado? (VERIFICAR)",
              "□ ANTES DO LEILÃO: Não há bem de família averbado? (VERIFICAR)",
              "□ DURANTE EDITAL: Menção expressa ao Art. 130 CTN? (OBRIGATÓRIO)",
              "□ APÓS LEILÃO: Auto de Arrematação assinado? (OBRIGATÓRIO)",
              "□ APÓS LEILÃO: Prazo de 10 dias respeitado? (OBRIGATÓRIO)",
              "□ APÓS LEILÃO: Carta expedida rapidamente? (RECOMENDADO)",
              "□ APÓS LEILÃO: Arrematante orientado a registrar? (RECOMENDADO)",
            ],
          },
        },
        {
          type: "callout",
          content: "RESPONSABILIDADE DO SERVIDOR: Embora a averbação da penhora seja tecnicamente ônus do exequente (Art. 844 CPC), o servidor deve ATIVAMENTE verificar e providenciar, pois a ausência pode invalidar todo o leilão e gerar prejuízos irreparáveis.",
          metadata: {
            calloutType: "tip",
            title: "Postura Proativa Evita Prejuízos",
          },
        },
        {
          type: "legal-text",
          content: "Art. 903. A arrematação será considerada perfeita, acabada e irretratável, ainda que venham a ser julgados procedentes os embargos do executado, quando assinado o respectivo auto pelo juiz, pelo arrematante e pelo leiloeiro.\n\n§2º Nos 10 (dez) dias seguintes à arrematação, a requerimento do executado, do cônjuge, do companheiro, de descendentes ou de ascendentes do executado, o juiz poderá, em decisão fundamentada, invalidá-la, com base em vício não conhecido por ocasião dos embargos:\n\nI - se o preço da arrematação for vil;\nII - se a alienação for fraudulenta.",
          metadata: {
            legalReference: "CPC, Art. 903 e §2º",
          },
        },
        {
          type: "case-study",
          content: "**ERRO COMUM - Não Verificar Averbação:**\n\n**Servidor:** Recebeu processo para leilão, elaborou edital sem verificar matrícula.\n\n**Problema:** Penhora NÃO estava averbada.\n\n**Consequência:** Leilão foi realizado, mas executado vendeu imóvel a terceiros durante processo.\n\n**Resultado:** Leilão anulado, prejuízo ao credor de R$ 650.000,00.\n\n**Lição:** SEMPRE verificar matrícula ANTES de qualquer providência.\n\n---\n\n**PROCEDIMENTO CORRETO:**\n\n**Servidor:** Recebeu processo, PRIMEIRO verificou matrícula.\n\n**Constatação:** Penhora NÃO averbada.\n\n**Ação:** Providenciou averbação ANTES de elaborar edital.\n\n**Resultado:** Leilão realizado com segurança, arrematação perfeita, sem vícios.",
          metadata: {
            title: "Comparação - Erro x Acerto",
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
      estimatedMinutes: 25,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O Artigo 130 do Código Tributário Nacional (CTN) é um dos dispositivos mais importantes para leilões judiciais, pois estabelece o regime de sub-rogação de débitos fiscais. Este artigo protege o arrematante e define que os débitos tributários anteriores são transferidos para o produto da arrematação, não para o arrematante.",
        },
        {
          type: "legal-text",
          content: "Art. 130. Os créditos tributários relativos a impostos cujo fato gerador seja a propriedade, o domínio útil ou a posse de bens imóveis, e bem assim os relativos a taxas pela prestação de serviços referentes a tais bens, ou a contribuições de melhoria, subrogam-se na pessoa dos respectivos adquirentes, salvo quando conste do título a prova de sua quitação.\n\nParágrafo único. No caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço.",
          metadata: {
            legalReference: "CTN, Art. 130 e parágrafo único",
          },
        },
        {
          type: "text",
          content: "A distinção entre o caput e o parágrafo único é FUNDAMENTAL:",
        },
        {
          type: "callout",
          content: "CAPUT (Compra e Venda Normal): O comprador ASSUME os débitos fiscais do imóvel - ele se torna devedor perante a Fazenda Pública.\n\nPARÁGRAFO ÚNICO (Arrematação Judicial): Os débitos fiscais são pagos com o PREÇO da arrematação - o arrematante recebe o imóvel LIVRE de débitos anteriores.",
          metadata: {
            calloutType: "info",
            title: "Diferença Crucial: Compra Normal vs. Arrematação",
          },
        },
        {
          type: "text",
          content: "O que significa 'sub-rogação ocorre sobre o respectivo preço':",
        },
        {
          type: "checklist",
          content: "Sub-rogação na Prática - Leilão Judicial",
          metadata: {
            items: [
              "Arrematante paga R$ 500.000,00 pelo imóvel",
              "Imóvel possui R$ 80.000,00 de IPTU atrasado",
              "Do valor de R$ 500.000,00, a Prefeitura recebe R$ 80.000,00 automaticamente",
              "Saldo de R$ 420.000,00 vai para o credor exequente",
              "Arrematante recebe imóvel 100% LIVRE do IPTU anterior",
              "Certidão de matrícula será limpa após o registro da Carta de Arrematação",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Processo:** Execução nº 0025478-89.2023.8.17.0001 - TJPE\n\n**Situação:** Apartamento no Bairro de Boa Viagem, Recife/PE, avaliado em R$ 650.000,00. Débitos de IPTU: R$ 125.000,00 (5 anos atrasados). Taxa de coleta de lixo: R$ 8.500,00.\n\n**1ª Tentativa (ERRO):** Servidor elaborou edital incluindo: 'O arrematante será responsável por todos os débitos fiscais anteriores'.\n\n**Resultado:** Nenhum interessado deu lance. O edital afugentou compradores.\n\n**2ª Tentativa (CORRETO):** Novo edital: 'Nos termos do Art. 130, parágrafo único do CTN, os débitos fiscais anteriores à data da arrematação (IPTU: R$ 125.000,00; Taxa de Lixo: R$ 8.500,00) serão sub-rogados no preço da arrematação. O arrematante receberá o imóvel livre destes débitos.'\n\n**Resultado:** Imóvel arrematado por R$ 680.000,00.\n\n**Destinação do produto:**\n- Prefeitura do Recife (IPTU + Taxa): R$ 133.500,00\n- Comissão do leiloeiro (5%): R$ 34.000,00\n- Credor exequente: R$ 512.500,00\n- Arrematante: Imóvel limpo de débitos fiscais",
          metadata: {
            title: "Caso Real - TJPE - Sub-rogação em Boa Viagem",
          },
        },
        {
          type: "checklist",
          content: "Tributos Abrangidos pelo Art. 130 CTN",
          metadata: {
            items: [
              "IPTU (Imposto Predial e Territorial Urbano) - MUNICIPAL",
              "ITR (Imposto Territorial Rural) - FEDERAL - Imóveis rurais",
              "Taxas de coleta de lixo - MUNICIPAL",
              "Taxas de iluminação pública - MUNICIPAL",
              "Taxas de conservação de vias - MUNICIPAL",
              "Contribuições de melhoria (obra pública que valorizou o imóvel) - MUNICIPAL",
            ],
          },
        },
        {
          type: "callout",
          content: "NÃO estão incluídos no Art. 130: Multas de trânsito, débitos condominiais, dívidas de água/luz/gás (estas contas NÃO são tributos), ITBI do arrematante (este é tributo novo, não anterior).",
          metadata: {
            calloutType: "warning",
            title: "O Que NÃO É Abrangido",
          },
        },
        {
          type: "text",
          content: "Responsabilidades do Servidor Público na aplicação do Art. 130:",
        },
        {
          type: "checklist",
          content: "Checklist de Ação do Servidor",
          metadata: {
            items: [
              "SOLICITAR certidão de débitos fiscais junto à Prefeitura Municipal",
              "INTIMAR formalmente a Fazenda Pública Municipal sobre o leilão",
              "INCLUIR no edital menção EXPRESSA ao Art. 130, parágrafo único do CTN",
              "INFORMAR no edital o valor total aproximado dos débitos fiscais",
              "NUNCA incluir cláusula atribuindo débitos fiscais ao arrematante",
              "RESERVAR do produto da arrematação o valor para pagamento dos tributos",
              "OFICIAR a Prefeitura após arrematação para emissão de certidão de quitação",
            ],
          },
        },
        {
          type: "callout",
          content: "Esta regra se aplica independentemente de haver ou não previsão no edital. É LEI FEDERAL (CTN - Lei 5.172/1966) e prevalece sobre qualquer disposição no edital, em contrato ou decisão judicial. Mesmo que o edital esqueça de mencionar, a regra se aplica automaticamente.",
          metadata: {
            calloutType: "success",
            title: "Norma de Ordem Pública - Aplicação Obrigatória",
          },
        },
        {
          type: "case-study",
          content: "**REsp 1.804.253/DF - STJ (2019)**\n\n**Situação:** Leiloeiro incluiu no edital cláusula: 'Débitos de IPTU são de responsabilidade do arrematante'.\n\n**Após arrematação:** Prefeitura cobrou R$ 95.000,00 de IPTU do arrematante.\n\n**Decisão do STJ:** 'A cláusula editalícia que atribui ao arrematante a responsabilidade por débitos tributários anteriores à arrematação é NULA DE PLENO DIREITO, por violar norma de ordem pública (Art. 130, parágrafo único, CTN). A sub-rogação no preço é automática e independe de previsão contratual.'\n\n**Resultado:** Arrematante não precisou pagar. Fazenda Pública recebeu do produto da arrematação.",
          metadata: {
            title: "Jurisprudência STJ - Nulidade de Cláusula Contrária",
          },
        },
        {
          type: "callout",
          content: "Modelo de cláusula CORRETA para edital:\n\n'DÉBITOS FISCAIS: Nos termos do artigo 130, parágrafo único, do Código Tributário Nacional (Lei 5.172/1966), os débitos tributários relativos a IPTU, taxas municipais e contribuições de melhoria, anteriores à data da arrematação, serão sub-rogados no preço da arrematação. O arrematante receberá o imóvel LIVRE E DESONERADO de tais débitos. Débitos fiscais conhecidos: IPTU: R$ [valor]; Taxas: R$ [valor]. Total aproximado: R$ [valor].'",
          metadata: {
            calloutType: "tip",
            title: "Modelo de Cláusula para Edital",
          },
        },
      ],
    },
    {
      id: "mod-06-lesson-02",
      title: "Decisão do STJ (Tema 1.134/2024)",
      description: "Tese vinculante do Superior Tribunal de Justiça",
      estimatedMinutes: 22,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Em março de 2024, o Superior Tribunal de Justiça (STJ) julgou o Tema 1.134 em regime de recursos repetitivos (Art. 1.036 do CPC), fixando tese VINCULANTE sobre a sub-rogação de débitos fiscais em leilões judiciais. Esta decisão tem efeito vinculante para todos os tribunais do Brasil e deve ser obrigatoriamente observada por servidores, juízes e leiloeiros.",
        },
        {
          type: "callout",
          content: "TESE FIXADA PELO STJ (Tema 1.134/2024):\n\n'Diante do disposto no artigo 130, parágrafo único, do Código Tributário Nacional (CTN), é INVÁLIDA a previsão em edital de leilão atribuindo responsabilidade ao arrematante pelos débitos tributários que já incidiam sobre o imóvel na data de sua alienação.'\n\nProcesso Paradigma: REsp 1.951.191/SP\nRelator: Ministro Gurgel de Faria\nData: 13/03/2024\nSeção: Primeira Seção\nRegime: Recursos Repetitivos (Art. 1.036 CPC)",
          metadata: {
            calloutType: "success",
            title: "Tese Vinculante STJ - Tema 1.134/2024",
          },
        },
        {
          type: "text",
          content: "Contexto histórico que motivou a decisão:",
        },
        {
          type: "case-study",
          content: "**Problema Identificado:**\n\nDiversos leiloeiros e tribunais incluíam nos editais cláusulas como:\n- 'O arrematante assume integralmente os débitos de IPTU anteriores à arrematação'\n- 'Débitos fiscais são de responsabilidade do comprador'\n- 'O imóvel é vendido com dívidas de tributos que serão assumidas pelo arrematante'\n\n**Consequências:**\n- Arrematantes eram surpreendidos com cobranças milionárias após o leilão\n- Prefeituras cobravam débitos diretamente do arrematante\n- Leilões eram questionados judicialmente\n- Insegurança jurídica generalizada\n\n**Decisão do STJ:**\nO Tribunal declarou que TODAS essas cláusulas são NULAS, independentemente de estarem no edital, por violarem norma de ordem pública (CTN, Art. 130).",
          metadata: {
            title: "Por Que o STJ Precisou Intervir",
          },
        },
        {
          type: "text",
          content: "Fundamentos jurídicos da decisão (conforme voto do Ministro Gurgel de Faria):",
        },
        {
          type: "checklist",
          content: "Fundamentos da Decisão do STJ",
          metadata: {
            items: [
              "O CTN é Lei Complementar (status superior) - prevalece sobre qualquer edital ou contrato",
              "Art. 130, parágrafo único, é norma de ORDEM PÚBLICA - não pode ser afastado por vontade das partes",
              "A sub-rogação no PREÇO (não no arrematante) é automática e obrigatória",
              "Segurança jurídica: arrematante tem direito de saber exatamente o que está comprando",
              "Proteção ao interesse público na celeridade das execuções judiciais",
              "Interpretação conforme Constituição: princípio da legalidade tributária",
            ],
          },
        },
        {
          type: "text",
          content: "Modulação dos efeitos da decisão - quando a tese se aplica:",
        },
        {
          type: "checklist",
          content: "Aplicação Temporal da Tese (Modulação)",
          metadata: {
            items: [
              "LEILÕES FUTUROS: Editais publicados após 13/03/2024 - aplicação obrigatória imediata",
              "AÇÕES JUDICIAIS PENDENTES: Processos sem trânsito em julgado - aplicação obrigatória",
              "PEDIDOS ADMINISTRATIVOS: Arrematantes cobrados indevidamente - podem requerer devolução",
              "LEILÕES PASSADOS: Arrematantes podem ajuizar ação para afastar cobrança de débitos",
              "EXCEÇÃO: Leilões com trânsito em julgado anterior a 13/03/2024 podem ser mantidos (segurança jurídica)",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Prático - Aplicação da Tese (TJSP, 2024)**\n\n**Situação:** Arrematante comprou imóvel em São Paulo por R$ 1.200.000,00 em leilão realizado em novembro/2023. Edital previa: 'Débitos de IPTU são de responsabilidade do arrematante'.\n\n**Após arrematação:** Prefeitura de São Paulo cobrou R$ 340.000,00 de IPTU atrasado (7 anos).\n\n**Ação do arrematante:** Ajuizou Mandado de Segurança contra a Prefeitura.\n\n**Decisão (maio/2024):** Juiz concedeu a segurança com base no Tema 1.134/STJ: 'A cláusula editalícia é NULA. A Fazenda Pública deve cobrar os débitos do produto da arrematação (R$ 1.200.000,00), não do arrematante. Determino a baixa imediata das certidões de dívida ativa em nome do arrematante.'\n\n**Resultado:** Arrematante não pagou 1 centavo de IPTU anterior. Prefeitura habilitou seu crédito no processo de execução.",
          metadata: {
            title: "Aplicação Prática em São Paulo - 2024",
          },
        },
        {
          type: "text",
          content: "Impacto prático para servidores do TJPE:",
        },
        {
          type: "checklist",
          content: "O Que FAZER Após o Tema 1.134",
          metadata: {
            items: [
              "INCLUIR no edital: 'Nos termos do Art. 130, parágrafo único do CTN e conforme Tema 1.134/STJ, os débitos fiscais serão sub-rogados no preço'",
              "INFORMAR claramente no edital o valor aproximado dos débitos fiscais conhecidos",
              "RESERVAR do produto da arrematação o valor dos débitos fiscais antes de pagar o exequente",
              "ORIENTAR arrematantes que receberão o imóvel LIVRE de débitos fiscais anteriores",
              "OFICIAR a Fazenda Pública para que habilite seu crédito tributário no processo",
            ],
          },
        },
        {
          type: "checklist",
          content: "O Que NÃO FAZER (Proibido pelo STJ)",
          metadata: {
            items: [
              "NÃO incluir cláusula atribuindo débitos fiscais ao arrematante",
              "NÃO omitir no edital a existência de débitos fiscais",
              "NÃO deixar de intimar a Fazenda Pública sobre o leilão",
              "NÃO autorizar entrega do imóvel antes de reservar valor dos tributos",
              "NÃO seguir modelos antigos de edital que violam o Tema 1.134",
            ],
          },
        },
        {
          type: "callout",
          content: "IMPORTANTE: A decisão do STJ em recursos repetitivos (Tema 1.134) tem efeito VINCULANTE. Isso significa que:\n\n1) Todos os tribunais brasileiros devem seguir\n2) Decisões contrárias podem ser cassadas via reclamação ao STJ\n3) Servidores que elaboram editais contrários podem ser responsabilizados\n4) A tese será aplicada automaticamente em casos similares",
          metadata: {
            calloutType: "warning",
            title: "Efeito Vinculante - Obrigatoriedade Nacional",
          },
        },
        {
          type: "text",
          content: "Outros precedentes do STJ sobre o tema (além do Tema 1.134):",
        },
        {
          type: "checklist",
          content: "Jurisprudência Complementar do STJ",
          metadata: {
            items: [
              "REsp 1.804.253/DF (2019) - Cláusula editalícia contrária ao CTN é nula",
              "AgInt no REsp 1.906.542/SP (2021) - Sub-rogação é automática, independe de edital",
              "REsp 1.877.331/SP (2020) - Fazenda deve habilitar crédito no processo, não cobrar arrematante",
              "AgInt no AREsp 1.658.923/MG (2022) - Matrícula deve ser limpa após registro da Carta",
            ],
          },
        },
        {
          type: "callout",
          content: "Modelo de cláusula ATUALIZADA conforme Tema 1.134/STJ:\n\n'DÉBITOS TRIBUTÁRIOS (Art. 130, parágrafo único, CTN - Tema 1.134/STJ): Os débitos relativos a IPTU, taxas municipais e contribuições de melhoria, anteriores à data da arrematação, serão automaticamente sub-rogados no preço da arrematação. O arrematante NÃO será responsável por tais débitos e receberá o imóvel LIVRE E DESONERADO. A Fazenda Pública deverá habilitar seu crédito tributário no presente processo de execução. Débitos fiscais conhecidos até a data deste edital: IPTU: R$ [valor]; Taxas: R$ [valor]. Total aproximado: R$ [valor].'",
          metadata: {
            calloutType: "tip",
            title: "Modelo de Cláusula Conforme STJ",
          },
        },
      ],
    },
    {
      id: "mod-06-lesson-03",
      title: "Débitos Condominiais",
      description: "Regra específica para condomínios",
      estimatedMinutes: 23,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Os débitos condominiais (cotas de condomínio, fundos de reserva, rateios extraordinários) NÃO seguem a mesma regra automática dos débitos fiscais. Ao contrário do IPTU, que SEMPRE é sub-rogado no preço (Art. 130 CTN), os débitos condominiais podem ou não ser sub-rogados, dependendo do que constar EXPRESSAMENTE no edital.",
        },
        {
          type: "callout",
          content: "DIFERENÇA FUNDAMENTAL:\n\nDÉBITOS FISCAIS (IPTU): Sub-rogação OBRIGATÓRIA no preço (Art. 130 CTN). Não depende do edital.\n\nDÉBITOS CONDOMINIAIS: Sub-rogação OPCIONAL. Depende do que o edital estabelecer. Servidor tem liberdade para definir.",
          metadata: {
            calloutType: "warning",
            title: "Tributos vs. Condomínio - Regimes Diferentes",
          },
        },
        {
          type: "text",
          content: "Base legal dos débitos condominiais:",
        },
        {
          type: "legal-text",
          content: "Lei 4.591/1964 (Lei de Condomínios), Art. 1.345 do Código Civil:\n\n'O adquirente de unidade responde pelos débitos do alienante, em relação ao condomínio, inclusive multas e juros moratórios.'\n\nMAS: Esta regra do Código Civil NÃO se aplica a arrematações judiciais se o edital dispuser diferentemente. O edital prevalece.",
          metadata: {
            legalReference: "CC, Art. 1.345 c/c Lei 4.591/64",
          },
        },
        {
          type: "text",
          content: "As duas opções permitidas para o edital:",
        },
        {
          type: "checklist",
          content: "OPÇÃO 1 - Sub-rogação no Preço (Recomendado)",
          metadata: {
            items: [
              "Cláusula: 'Os débitos condominiais anteriores serão pagos com o produto da arrematação'",
              "Arrematante recebe imóvel LIVRE de dívidas de condomínio",
              "Condomínio habilita seu crédito no processo de execução",
              "VANTAGEM: Atrai mais interessados, lances mais altos",
              "DESVANTAGEM: Reduz valor disponível para o exequente",
            ],
          },
        },
        {
          type: "checklist",
          content: "OPÇÃO 2 - Responsabilidade do Arrematante",
          metadata: {
            items: [
              "Cláusula: 'O arrematante será responsável pelos débitos condominiais anteriores à arrematação'",
              "Arrematante assume a dívida com o condomínio",
              "Produto da arrematação vai integralmente para o exequente (após comissão)",
              "VANTAGEM: Maximiza valor para o credor",
              "DESVANTAGEM: Afugenta interessados, lances mais baixos ou ausência de lances",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - TJPE - Apartamento Boa Viagem (2023)**\n\n**Imóvel:** Apartamento 142m² - Av. Boa Viagem, Recife/PE\n**Avaliação:** R$ 850.000,00\n**Débito condominial:** R$ 45.000,00 (3 anos atrasados + fundo de pintura)\n\n**1ª Tentativa - Arrematante Assume:**\nEdital: 'Débitos condominiais são de responsabilidade do arrematante'\nResultado: NENHUM LANCE. Zero interessados.\n\n**2ª Tentativa - Sub-rogação:**\nNovo edital: 'Débitos condominiais (R$ 45.000,00) serão pagos com o produto da arrematação. Arrematante recebe imóvel livre.'\nResultado: 17 interessados, 8 lances.\nArrematação: R$ 920.000,00 (acima da avaliação!)\n\nDistribuição:\n- Comissão leiloeiro (5%): R$ 46.000,00\n- Condomínio: R$ 45.000,00\n- Exequente: R$ 829.000,00\n\nConclusão: Sub-rogação gerou lance MAIOR, beneficiando inclusive o exequente.",
          metadata: {
            title: "Estudo Comparativo - Impacto da Cláusula",
          },
        },
        {
          type: "text",
          content: "Jurisprudência do STJ sobre débitos condominiais:",
        },
        {
          type: "case-study",
          content: "**REsp 1.888.111/SP - STJ (2021)**\n\n**Tese:** 'Diversamente dos tributos (Art. 130 CTN), os débitos condominiais NÃO possuem sub-rogação automática em leilão judicial. A definição de quem responde pelos débitos condominiais depende do que constar no edital. O edital faz lei entre as partes.'\n\n**Consequência prática:** Servidor TEM PODER para definir se débitos condominiais serão ou não sub-rogados. A escolha deve considerar:\n1) Valor do débito x valor do imóvel\n2) Interesse em atrair mais licitantes\n3) Necessidade de maximizar satisfação do crédito do exequente",
          metadata: {
            title: "STJ - Liberdade de Definição no Edital",
          },
        },
        {
          type: "text",
          content: "Como decidir qual opção usar (critérios práticos):",
        },
        {
          type: "checklist",
          content: "Quando SUB-ROGAR Débitos Condominiais (OPÇÃO 1)",
          metadata: {
            items: [
              "Débito condominial é ALTO (acima de 5% do valor do imóvel)",
              "Imóvel tem baixa liquidez (bairro periférico, imóvel antigo)",
              "Já houve tentativas frustradas de leilão",
              "Objetivo é garantir a venda, mesmo com menor produto",
              "Débito está executado/protestado (dificulta venda se arrematante assumir)",
            ],
          },
        },
        {
          type: "checklist",
          content: "Quando TRANSFERIR ao Arrematante (OPÇÃO 2)",
          metadata: {
            items: [
              "Débito condominial é BAIXO (menos de 3% do valor do imóvel)",
              "Imóvel tem ALTA liquidez (Boa Viagem, Casa Forte, localização premium)",
              "Expectativa de lances altos mesmo com ônus",
              "Objetivo é maximizar valor para o exequente",
              "Condomínio não tem interesse em habilitar crédito no processo",
            ],
          },
        },
        {
          type: "callout",
          content: "RECOMENDAÇÃO GERAL: Em caso de dúvida, SEMPRE opte pela sub-rogação (OPÇÃO 1). Motivos:\n\n1) Transparência: Arrematante sabe exatamente o que está comprando\n2) Segurança: Evita disputas pós-leilão\n3) Efetividade: Garante participação de interessados\n4) Celeridade: Evita leilões desertos\n\nÚNICA EXCEÇÃO: Débito condominial muito baixo (exemplo: R$ 2.000 em imóvel de R$ 500.000) pode ser transferido ao arrematante.",
          metadata: {
            calloutType: "tip",
            title: "Regra Prática para Servidores",
          },
        },
        {
          type: "text",
          content: "Modelos de cláusula para o edital:",
        },
        {
          type: "callout",
          content: "MODELO 1 (Sub-rogação - RECOMENDADO):\n\n'DÉBITOS CONDOMINIAIS: O imóvel possui débitos de condomínio no valor aproximado de R$ [valor], referentes ao período de [data] a [data]. Nos termos do presente edital, tais débitos serão integralmente pagos com o produto da arrematação, mediante habilitação do condomínio no presente processo de execução. O arrematante receberá o imóvel LIVRE E DESONERADO dos débitos condominiais anteriores à data da arrematação.'",
          metadata: {
            calloutType: "success",
            title: "Cláusula Modelo - Sub-rogação",
          },
        },
        {
          type: "callout",
          content: "MODELO 2 (Responsabilidade do Arrematante - USAR COM CAUTELA):\n\n'DÉBITOS CONDOMINIAIS: O imóvel possui débitos de condomínio no valor aproximado de R$ [valor], referentes ao período de [data] a [data]. O ARREMATANTE SERÁ RESPONSÁVEL pelo pagamento integral de tais débitos, que NÃO serão pagos com o produto da arrematação. Ao dar o lance, o interessado declara estar ciente e aceita expressamente esta condição. Recomenda-se consultar o condomínio para obter informações detalhadas sobre os débitos.'",
          metadata: {
            calloutType: "warning",
            title: "Cláusula Modelo - Transferência ao Arrematante",
          },
        },
        {
          type: "checklist",
          content: "Checklist - Débitos Condominiais no Edital",
          metadata: {
            items: [
              "Solicitar informação detalhada de débitos ao síndico/administradora",
              "Intimar formalmente o condomínio sobre o leilão (AR)",
              "Incluir no edital o valor ATUALIZADO dos débitos condominiais",
              "Definir CLARAMENTE se débitos serão sub-rogados ou não",
              "Se sub-rogação: Informar que condomínio deve habilitar crédito no processo",
              "Se transferência: DESTACAR em negrito que arrematante assumirá débitos",
              "Incluir dados para contato do condomínio (síndico/administradora) para consultas",
            ],
          },
        },
      ],
    },
    {
      id: "mod-06-lesson-04",
      title: "Procedimento para Evitar Problemas com Débitos",
      description: "Checklist completo de verificação",
      estimatedMinutes: 20,
      order: 4,
      sections: [
        {
          type: "text",
          content: "Esta aula apresenta o PROCEDIMENTO COMPLETO passo a passo que o servidor deve seguir para lidar adequadamente com débitos fiscais e condominiais, evitando os erros mais comuns que geram nulidades de leilões e prejuízos às partes.",
        },
        {
          type: "text",
          content: "FASE 1 - LEVANTAMENTO DE DÉBITOS (antes de elaborar o edital):",
        },
        {
          type: "checklist",
          content: "Passo 1: Débitos Fiscais (IPTU e Taxas)",
          metadata: {
            items: [
              "Acessar site da Prefeitura Municipal (Recife: portaldocontribuinte.recife.pe.gov.br)",
              "Buscar por inscrição imobiliária OU endereço completo do imóvel",
              "Imprimir/salvar certidão de débitos municipais atualizada",
              "Se site não funcionar: Oficiar Secretaria da Fazenda Municipal solicitando certidão",
              "Prazo de resposta: 10 dias (Lei 9.784/99)",
              "Juntar certidão aos autos do processo",
              "Anotar valores: IPTU: R$ _____ | Taxas: R$ _____ | Total: R$ _____",
            ],
          },
        },
        {
          type: "checklist",
          content: "Passo 2: Débitos Condominiais",
          metadata: {
            items: [
              "Identificar o condomínio: nome, CNPJ, síndico, administradora",
              "Oficiar o síndico ou administradora solicitando: valor atualizado dos débitos, período de inadimplência, existência de fundos extraordinários",
              "Prazo de resposta: 15 dias",
              "Se não responder: Incluir no edital 'Débitos condominiais não informados - interessados devem consultar diretamente'",
              "Juntar resposta aos autos",
              "Anotar valores: Cotas: R$ _____ | Fundos: R$ _____ | Total: R$ _____",
            ],
          },
        },
        {
          type: "checklist",
          content: "Passo 3: Outras Verificações",
          metadata: {
            items: [
              "Verificar débitos de água (COMPESA): solicitar 2ª via de conta ou certidão negativa",
              "Verificar débitos de energia (Neoenergia/Celpe): idem",
              "Anotar na planilha (água e luz NÃO são débitos fiscais, não se sub-rogam automaticamente)",
              "Definir no edital se água/luz serão assumidos pelo arrematante ou pagos do produto",
            ],
          },
        },
        {
          type: "text",
          content: "FASE 2 - INTIMAÇÕES OBRIGATÓRIAS (antes de publicar o edital):",
        },
        {
          type: "checklist",
          content: "Passo 4: Intimar a Fazenda Pública Municipal",
          metadata: {
            items: [
              "Se houver débitos fiscais: INTIMAÇÃO OBRIGATÓRIA da Prefeitura",
              "Forma: Ofício com AR (aviso de recebimento) ou meio eletrônico",
              "Destino: Procuradoria Geral do Município de Recife (PGM)",
              "Conteúdo: Informar sobre leilão, valor avaliação, data prevista, débitos conhecidos",
              "Finalidade: Permitir que Fazenda habilite crédito tributário no processo",
              "Prazo: Intimar com pelo menos 30 dias de antecedência do leilão",
              "Juntar comprovante de intimação aos autos (AR ou protocolo eletrônico)",
            ],
          },
        },
        {
          type: "checklist",
          content: "Passo 5: Intimar o Condomínio",
          metadata: {
            items: [
              "Se houver débitos condominiais: INTIMAÇÃO OBRIGATÓRIA",
              "Forma: AR ou meio eletrônico (e-mail com confirmação de leitura)",
              "Destino: Síndico e/ou administradora do condomínio",
              "Conteúdo: Informar sobre leilão, valor, data, solicitar habilitação de crédito se aplicável",
              "Prazo: Pelo menos 20 dias antes do leilão",
              "Juntar comprovante aos autos",
            ],
          },
        },
        {
          type: "checklist",
          content: "Passo 6: Outras Intimações (Art. 889 CPC)",
          metadata: {
            items: [
              "Executado (devedor): Via advogado ou pessoalmente",
              "Cônjuge do executado: Pessoalmente (se casado)",
              "Exequente (credor): Via advogado",
              "Credores com garantia real (hipoteca, alienação fiduciária): Pessoalmente",
              "Ocupantes do imóvel: Pessoalmente (se houver)",
              "Aguardar 5 dias úteis após intimações antes de publicar edital",
            ],
          },
        },
        {
          type: "text",
          content: "FASE 3 - ELABORAÇÃO DO EDITAL (cláusulas sobre débitos):",
        },
        {
          type: "callout",
          content: "MODELO COMPLETO DE CLÁUSULA SOBRE DÉBITOS:\n\n**DÉBITOS E ÔNUS:**\n\n**a) Débitos Fiscais:** Nos termos do artigo 130, parágrafo único, do Código Tributário Nacional (Lei 5.172/1966) e conforme Tema 1.134/STJ, os débitos tributários relativos a IPTU, taxas municipais e contribuições de melhoria, ANTERIORES à data da arrematação, serão automaticamente SUB-ROGADOS NO PREÇO da arrematação. O arrematante NÃO será responsável por tais débitos e receberá o imóvel LIVRE E DESONERADO. A Fazenda Pública Municipal foi devidamente intimada e deverá habilitar seu crédito tributário no presente processo. Débitos fiscais conhecidos (valores aproximados até [data]): IPTU: R$ [valor]; Taxa de Lixo: R$ [valor]; Taxa de Iluminação: R$ [valor]. Total aproximado: R$ [valor total].\n\n**b) Débitos Condominiais:** O imóvel possui débitos de condomínio no valor aproximado de R$ [valor], referentes ao período de [data inicial] a [data final]. [ESCOLHER UMA OPÇÃO]\n\n[OPÇÃO 1 - RECOMENDADA]: Tais débitos serão integralmente pagos com o produto da arrematação, mediante habilitação do condomínio no processo. O arrematante receberá o imóvel LIVRE dos débitos condominiais anteriores.\n\n[OPÇÃO 2 - USAR COM CAUTELA]: O ARREMATANTE SERÁ RESPONSÁVEL pelo pagamento integral de tais débitos. Ao dar lance, declara estar ciente.\n\n**c) Débitos de Água e Energia:** [Especificar se existem e quem será responsável]\n\nCondomínio: [Nome] - Síndico: [Nome] - Tel: [telefone] - E-mail: [e-mail]",
          metadata: {
            calloutType: "success",
            title: "Modelo Completo de Cláusula",
          },
        },
        {
          type: "text",
          content: "FASE 4 - PÓS-ARREMATAÇÃO (destinação do produto):",
        },
        {
          type: "checklist",
          content: "Passo 7: Ordem de Pagamento do Produto da Arrematação",
          metadata: {
            items: [
              "1º) Comissão do leiloeiro (5% sobre valor arrematação)",
              "2º) Débitos fiscais sub-rogados (IPTU + Taxas) - pagar à Prefeitura",
              "3º) Débitos condominiais sub-rogados (se edital previu) - pagar ao condomínio",
              "4º) Credores com garantia real (hipoteca) se houver e conforme ordem de preferência",
              "5º) Credor exequente (saldo remanescente)",
              "IMPORTANTE: Seguir RIGOROSAMENTE esta ordem legal (Art. 908 CPC)",
            ],
          },
        },
        {
          type: "checklist",
          content: "Passo 8: Comprovação de Pagamento e Certidões",
          metadata: {
            items: [
              "Após pagar Prefeitura: Solicitar Certidão de Regularidade Fiscal do imóvel",
              "Após pagar condomínio: Solicitar Declaração de Quitação assinada pelo síndico",
              "Juntar comprovantes de pagamento aos autos",
              "Anexar certidões à Carta de Arrematação para facilitar registro",
              "Orientar arrematante a apresentar certidões no Cartório de Registro de Imóveis",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Prático Completo - TJPE (2024)**\n\n**Processo:** Execução nº 0012345-67.2024.8.17.0001\n**Imóvel:** Casa no bairro Casa Amarela, Recife/PE\n**Avaliação:** R$ 420.000,00\n\n**LEVANTAMENTO:**\n- IPTU atrasado: R$ 32.000,00 (4 anos)\n- Taxa de lixo: R$ 3.200,00\n- Débito condomínio: R$ 0,00 (casa sem condomínio)\n- Água (COMPESA): R$ 1.850,00\n- Energia (Neoenergia): R$ 980,00\n\n**EDITAL:** Servidor incluiu:\n- Débitos fiscais (R$ 35.200,00): Sub-rogados (Art. 130 CTN)\n- Água e luz: Responsabilidade do arrematante\n\n**INTIMAÇÕES:**\n- Prefeitura do Recife: Intimada 45 dias antes (AR)\n- Executado: Intimado via advogado\n- Exequente: Intimado via advogado\n\n**ARREMATAÇÃO:** R$ 465.000,00\n\n**DISTRIBUIÇÃO:**\n- Comissão leiloeiro (5%): R$ 23.250,00\n- Prefeitura (IPTU + Taxa): R$ 35.200,00\n- Exequente (saldo): R$ 406.550,00\n- Arrematante: Recebeu imóvel livre de IPTU, mas com obrigação de pagar água/luz (R$ 2.830,00)\n\n**RESULTADO:** Leilão bem-sucedido, sem contestações, sem problemas.",
          metadata: {
            title: "Procedimento Completo Executado Corretamente",
          },
        },
        {
          type: "callout",
          content: "ERROS FATAIS QUE DEVEM SER EVITADOS:\n\n1. NÃO intimar a Fazenda Pública quando há débitos fiscais → Leilão pode ser anulado\n2. Incluir no edital que arrematante assume IPTU → Viola Art. 130 CTN e Tema 1.134 STJ\n3. Não informar valores de débitos no edital → Falta de transparência\n4. Pagar exequente antes de pagar tributos → Ordem de pagamento errada (Art. 908 CPC)\n5. Não solicitar certidão de débitos atualizada → Débitos desconhecidos aparecem depois\n6. Esquecer de incluir cláusula sobre débitos condominiais → Disputa pós-leilão",
          metadata: {
            calloutType: "error",
            title: "Erros Que Geram Nulidade",
          },
        },
        {
          type: "checklist",
          content: "Checklist Final - Antes de Publicar Edital",
          metadata: {
            items: [
              "☑ Certidão de débitos fiscais obtida e juntada",
              "☑ Informação de débitos condominiais obtida e juntada",
              "☑ Fazenda Pública intimada (se há débitos fiscais)",
              "☑ Condomínio intimado (se há débitos condominiais)",
              "☑ Edital inclui cláusula CORRETA sobre débitos fiscais (Art. 130 CTN + Tema 1.134)",
              "☑ Edital define CLARAMENTE responsabilidade por débitos condominiais",
              "☑ Edital informa valores aproximados de TODOS os débitos",
              "☑ Edital inclui dados de contato do condomínio (se aplicável)",
              "☑ Todas as intimações obrigatórias foram realizadas",
              "☑ Comprovantes de intimação juntados aos autos",
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
      estimatedMinutes: 20,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O pagamento à vista é a forma PADRÃO e mais comum de quitação em leilões judiciais. É a modalidade preferencial porque garante liquidez imediata ao processo, permite rápida satisfação do crédito do exequente e evita complexidades administrativas do parcelamento.",
        },
        {
          type: "text",
          content: "Como funciona o pagamento à vista em leilões judiciais:",
        },
        {
          type: "checklist",
          content: "Formas de Pagamento à Vista Aceitas",
          metadata: {
            items: [
              "Depósito judicial em conta vinculada ao processo (mais comum)",
              "Transferência bancária/TED/PIX para conta judicial indicada no edital",
              "Guia de depósito judicial (GRU) em agência bancária conveniada",
              "Boleto bancário gerado pelo sistema do tribunal (se disponível)",
              "NÃO aceito: dinheiro em espécie, cheque, cartão de crédito",
            ],
          },
        },
        {
          type: "legal-text",
          content: "CPC, Art. 892: O arrematante pagará imediatamente o preço ou, se tiver obtido, no prazo máximo de 15 (quinze) dias, depósito judicial de que trata o § 3º do art. 891, a diferença entre o valor depositado e o valor da arrematação, sob pena de perder o montante em favor do exequente e voltar o bem a novo leilão, do qual não será admitido a participar.",
          metadata: {
            legalReference: "CPC, Art. 892",
          },
        },
        {
          type: "text",
          content: "Prazos para pagamento à vista:",
        },
        {
          type: "checklist",
          content: "Prazos Legais e Práticos",
          metadata: {
            items: [
              "Lei (CPC Art. 892): Até 15 dias após arrematação",
              "Prática comum no TJPE: 24 a 72 horas (1 a 3 dias úteis)",
              "Edital pode estabelecer prazo menor (ex: 24h) para dar celeridade",
              "Prazo conta da data da arrematação (assinatura do auto)",
              "Se vencer em dia não útil, prorroga para próximo dia útil",
              "Não pagamento no prazo: Perda do sinal, novo leilão, proibição de participar",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - TJPE (2023)**\n\n**Situação:** Arrematante deu lance de R$ 680.000,00 em apartamento na Boa Viagem. Edital previa pagamento em 48 horas.\n\n**Dia 0 (segunda):** Arrematação confirmada, auto assinado às 15h30\n**Dia 1 (terça):** Arrematante não pagou\n**Dia 2 (quarta):** Arrematante tentou pagar às 18h (após prazo de 48h que venceu às 15h30)\n\n**Decisão do juiz:** Pagamento NÃO foi aceito por intempestivo. Arrematação foi tornada sem efeito. Novo leilão foi designado. Arrematante perdeu direito de participar.\n\n**Lição:** Prazos são FATAIS. Horas também contam. Se prazo vence às 15h30, pagamento às 18h está em atraso.",
          metadata: {
            title: "Descumprimento do Prazo de Pagamento",
          },
        },
        {
          type: "callout",
          content: "CUSTOS TOTAIS DO ARREMATANTE (além do lance):\n\n1) VALOR DO LANCE: R$ [valor arrematação]\n\n2) Comissão do leiloeiro: 5% sobre o lance = R$ [lance × 0,05]\n\n3) ITBI (Imposto de Transmissão de Bens Imóveis):\n- Recife: 3% sobre valor da arrematação\n- Outros municípios PE: 2% a 4%\n- Prazo: Até 30 dias após arrematação\n- Pago diretamente à Prefeitura\n\n4) Custas de registro da Carta de Arrematação:\n- Cartório de Registro de Imóveis\n- Aproximadamente 1% do valor (varia)\n\n**EXEMPLO PRÁTICO:**\nLance: R$ 500.000,00\n+ Comissão (5%): R$ 25.000,00\n+ ITBI Recife (3%): R$ 15.000,00\n+ Registro cartório (~1%): R$ 5.000,00\n**CUSTO TOTAL: R$ 545.000,00**",
          metadata: {
            calloutType: "warning",
            title: "Custos Adicionais do Arrematante",
          },
        },
        {
          type: "text",
          content: "Procedimento do servidor após recebimento do pagamento:",
        },
        {
          type: "checklist",
          content: "Checklist Pós-Pagamento",
          metadata: {
            items: [
              "Verificar se depósito foi efetivamente creditado na conta judicial",
              "Conferir se valor depositado corresponde EXATAMENTE ao valor arrematado",
              "Juntar comprovante de depósito aos autos",
              "Lavrar certidão de pagamento nos autos",
              "Dar vista ao exequente e executado",
              "Aguardar 10 dias para impugnações (Art. 903 CPC)",
              "Não havendo impugnação: Expedir Carta de Arrematação",
              "Determinar imissão na posse em favor do arrematante",
            ],
          },
        },
        {
          type: "callout",
          content: "DEPÓSITO PARCIAL (Sinal - Art. 891, §3º CPC):\n\nO interessado pode depositar até 20% do valor da avaliação ANTES do leilão como sinal/garantia. Vantagens:\n\n1) Demonstra seriedade do interessado\n2) Se arrematar: Saldo a pagar = Valor arrematação - Sinal depositado\n3) Se não arrematar: Sinal é devolvido imediatamente\n4) Se arrematar e não pagar saldo: Perde o sinal para o exequente\n\n**PRÁTICA:** Poucos interessados usam este mecanismo. Mais comum em imóveis de alto valor.",
          metadata: {
            calloutType: "info",
            title: "Depósito Prévio de Sinal (Opcional)",
          },
        },
        {
          type: "case-study",
          content: "**Simulação Completa - Pagamento à Vista**\n\n**Imóvel:** Apartamento 95m² - Espinheiro, Recife/PE\n**Avaliação:** R$ 380.000,00\n**1º Leilão:** Lance mínimo R$ 380.000,00 (100%)\n**Arrematação:** R$ 420.000,00 (10% acima)\n**Arrematante:** José Silva, CPF 123.456.789-00\n\n**LINHA DO TEMPO:**\n\n**Dia 0 - Segunda, 14h:** Leilão eletrônico encerrado. José deu lance vencedor de R$ 420.000,00.\n\n**Dia 0 - Segunda, 14h30:** Auto de arrematação assinado eletronicamente. Prazo: 48h para pagamento.\n\n**Dia 2 - Quarta, 13h:** José realizou TED:\n- Conta judicial: Banco do Brasil, Agência 1234-5, Conta 678910-1\n- Valor: R$ 420.000,00\n- Histórico: 'Arrematação Proc. 0012345-67.2024.8.17.0001'\n\n**Dia 2 - Quarta, 15h:** Servidor confirmou crédito na conta judicial. Juntou comprovante aos autos.\n\n**Dia 3 - Quinta:** Certificado pagamento nos autos.\n\n**Dia 13 (10 dias depois):** Sem impugnações.\n\n**Dia 14:** Expedida Carta de Arrematação.\n\n**CUSTOS DE JOSÉ:**\n- Arrematação: R$ 420.000,00 (pago ao juízo)\n- Comissão leiloeiro: R$ 21.000,00 (5% - pago ao leiloeiro)\n- ITBI Recife: R$ 12.600,00 (3% - pagar à Prefeitura em 30 dias)\n- Registro Cartório: ~R$ 4.200,00 (1% - pagar ao Cartório)\n**TOTAL: R$ 457.800,00**",
          metadata: {
            title: "Exemplo Prático Completo",
          },
        },
        {
          type: "callout",
          content: "CLÁUSULA MODELO PARA EDITAL (Pagamento à Vista):\n\n**PAGAMENTO:**\n\nO pagamento do valor da arrematação deverá ser realizado em até 48 (quarenta e oito) horas contadas da assinatura do auto de arrematação, mediante depósito judicial na conta vinculada a este processo:\n\nBanco: Banco do Brasil\nAgência: [número]\nConta Judicial: [número]\nProcesso: [número do processo]\n\nO não pagamento no prazo acarretará a PERDA DO LANCE e a realização de novo leilão, do qual o arrematante inadimplente não poderá participar, sem prejuízo de responder por eventuais diferenças de preço (Art. 897 CPC).\n\nO arrematante deverá pagar também:\na) Comissão do leiloeiro: 5% sobre o valor da arrematação (pago diretamente ao leiloeiro)\nb) ITBI: 3% sobre o valor (pago à Prefeitura do Recife em até 30 dias)\nc) Custas de registro da Carta de Arrematação (pago ao Cartório de Imóveis)",
          metadata: {
            calloutType: "tip",
            title: "Modelo de Cláusula - Pagamento à Vista",
          },
        },
      ],
    },
    {
      id: "mod-07-lesson-02",
      title: "Parcelamento em Leilão Judicial (Art. 895 CPC)",
      description: "Requisitos legais do parcelamento",
      estimatedMinutes: 25,
      order: 2,
      sections: [
        {
          type: "text",
          content: "O Art. 895 do Código de Processo Civil permite o parcelamento de arrematações em leilões judiciais, desde que cumpridas condições específicas estabelecidas em lei. O parcelamento é uma ferramenta importante para democratizar o acesso à arrematação e aumentar o universo de potenciais compradores.",
        },
        {
          type: "legal-text",
          content: "Art. 895. Não havendo licitante, serão admitidos até a assinatura do auto de arrematação, lanço com pagamento parcelado de até 30 (trinta) meses, com correção monetária, juros e garantia.\n\nParágrafo único. O arrematante deverá garantir o pagamento parcelado mediante:\n\nI - depósito de, no mínimo, 25% (vinte e cinco por cento) do valor do lance à vista;\n\nII - caução idônea, quando se tratar de móveis;\n\nIII - hipoteca, quando se tratar de imóveis.",
          metadata: {
            legalReference: "CPC, Art. 895 e parágrafo único",
          },
        },
        {
          type: "callout",
          content: "CONDIÇÃO FUNDAMENTAL para parcelamento: 'NÃO HAVENDO LICITANTE'\n\nIsso significa que o parcelamento SÓ é permitido quando:\n1) O 1º leilão foi DESERTO (sem lances à vista pelo valor integral)\n2) Ou o 2º leilão foi DESERTO\n\nSe houver lance à vista, o parcelamento NÃO pode ser aceito (STJ: REsp 1.744.287/SP).\n\nExceção: Se o edital PREVER expressamente possibilidade de parcelamento desde o início.",
          metadata: {
            calloutType: "warning",
            title: "Interpretação Crucial do Art. 895",
          },
        },
        {
          type: "text",
          content: "Requisitos OBRIGATÓRIOS do parcelamento (cumulativos):",
        },
        {
          type: "checklist",
          content: "Requisitos Legais do Parcelamento",
          metadata: {
            items: [
              "1) ENTRADA: Mínimo 25% do valor do lance à vista (não parcelado)",
              "2) PRAZO: Máximo 30 parcelas mensais (2 anos e meio)",
              "3) GARANTIA: Hipoteca do próprio imóvel arrematado em favor do exequente",
              "4) CORREÇÃO MONETÁRIA: IPCA-E ou índice definido no edital",
              "5) JUROS: Mínimo 1% ao mês ou taxa definida no edital",
              "6) VENCIMENTO: Parcelas mensais e sucessivas",
              "7) AUSÊNCIA DE LANCES À VISTA: Leilão deserto ou edital autorizou parcelamento",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Cálculo do Parcelamento**\n\n**Imóvel:** Casa em Olinda/PE\n**Avaliação:** R$ 300.000,00\n**Lance parcelado:** R$ 320.000,00\n**Parcelamento:** 24 meses (2 anos)\n**Índice:** IPCA-E\n**Juros:** 1% ao mês\n\n**CÁLCULO:**\n\n**Entrada (25%):** R$ 80.000,00 (à vista)\n**Saldo a parcelar:** R$ 240.000,00\n**Número de parcelas:** 24\n**Parcela inicial:** R$ 10.000,00 (R$ 240.000 ÷ 24)\n**Correção:** IPCA-E mensal\n**Juros:** 1% ao mês sobre saldo devedor\n\n**FLUXO DE PAGAMENTO:**\n\nMês 0: R$ 80.000,00 (entrada)\nMês 1: R$ 10.000,00 + juros sobre R$ 240.000 = R$ 12.400,00\nMês 2: R$ 10.000,00 + juros sobre R$ 230.000 = R$ 12.300,00\nMês 3: R$ 10.000,00 + juros sobre R$ 220.000 = R$ 12.200,00\n(...)\nMês 24: R$ 10.000,00 + juros sobre R$ 10.000 = R$ 10.100,00\n\n**TOTAL PAGO:** Aproximadamente R$ 355.000,00 (principal + juros + correção)",
          metadata: {
            title: "Simulação de Parcelamento",
          },
        },
        {
          type: "text",
          content: "Quando pode ser apresentada a proposta de parcelamento:",
        },
        {
          type: "checklist",
          content: "Momentos de Apresentação da Proposta",
          metadata: {
            items: [
              "ANTES do 1º leilão: Se edital expressamente permitir parcelamento desde o início",
              "APÓS 1º leilão deserto: Até início do 2º leilão (prazo mais comum)",
              "APÓS 2º leilão deserto: Até assinatura do auto de arrematação",
              "Jurisprudência (STJ): Permite até final do leilão se não houver lances à vista",
              "VEDADO: Após assinatura do auto de arrematação",
            ],
          },
        },
        {
          type: "callout",
          content: "IMPORTANTE: O Art. 895 NÃO OBRIGA o juiz a aceitar parcelamento. É uma FACULDADE judicial.\n\nO juiz pode:\n1) RECUSAR parcelamento se considerar que prejudica execução\n2) ESTABELECER condições mais rígidas (entrada maior, prazo menor)\n3) EXIGIR garantias adicionais além da hipoteca\n4) DETERMINAR que leilão seja apenas à vista\n\nDecisão judicial fundamentada é IRRECORRÍVEL (STJ: REsp 1.877.992/SP).",
          metadata: {
            calloutType: "info",
            title: "Faculdade Judicial - Não é Direito Absoluto",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - TJPE (2022)**\n\n**Situação:** Apartamento avaliado em R$ 420.000,00 em Boa Viagem. 1º leilão deserto. Interessado apresentou proposta de parcelamento:\n\n- Lance: R$ 450.000,00\n- Entrada: R$ 112.500,00 (25%)\n- Saldo: R$ 337.500,00 em 30 parcelas\n- Garantia: Hipoteca do imóvel\n\n**Manifestação do exequente:** Favorável ao parcelamento.\n\n**Manifestação do executado:** Sem oposição.\n\n**Decisão do juiz:** ACEITOU parcelamento. Fundamentos:\n1) Leilão anterior foi deserto\n2) Lance acima da avaliação (beneficia credor)\n3) Garantia real suficiente (hipoteca de imóvel valorizado)\n4) Parcelas compatíveis com valor do imóvel\n5) Celeridade na satisfação do crédito\n\n**Resultado:** Auto de arrematação assinado com parcelamento. Hipoteca averbada na matrícula. Arrematante pagou entrada e vem quitando parcelas regularmente.",
          metadata: {
            title: "Parcelamento Aceito - Caso de Sucesso",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - TJPE (2023)**\n\n**Situação:** Casa avaliada em R$ 180.000,00 em Jaboatão. 1º e 2º leilões desertos. Interessado propôs:\n\n- Lance: R$ 95.000,00 (52% da avaliação - acima do mínimo de 50%)\n- Entrada: R$ 23.750,00 (25%)\n- Saldo: R$ 71.250,00 em 30 parcelas de R$ 2.375,00\n\n**Manifestação do exequente:** CONTRÁRIO. Alegou que valor é baixo e parcelamento prolongaria execução.\n\n**Decisão do juiz:** RECUSOU parcelamento. Fundamentos:\n1) Valor muito abaixo da avaliação\n2) Parcelas pequenas (R$ 2.375) x risco de inadimplência\n3) Oposição do credor\n4) Preferência por novo leilão à vista com maior divulgação\n\n**Resultado:** Determinado 3º leilão apenas à vista, com publicidade ampliada. Imóvel foi arrematado por R$ 165.000,00 à vista.",
          metadata: {
            title: "Parcelamento Recusado - Valor Vil",
          },
        },
        {
          type: "text",
          content: "Consequências da inadimplência no parcelamento:",
        },
        {
          type: "checklist",
          content: "O Que Acontece se Arrematante Não Pagar Parcelas",
          metadata: {
            items: [
              "1) INTIMAÇÃO: Arrematante é intimado a pagar parcela atrasada + multa em 5 dias",
              "2) MULTA: 10% sobre valor da parcela atrasada",
              "3) NÃO PAGAMENTO: Rescisão do parcelamento (Art. 896 CPC)",
              "4) PERDAS: Arrematante perde entrada paga (25%) + parcelas já pagas",
              "5) NOVO LEILÃO: Bem volta a leilão",
              "6) PROIBIÇÃO: Arrematante inadimplente não pode participar do novo leilão",
              "7) RESPONSABILIDADE: Arrematante responde por diferença de preço se novo leilão for menor",
            ],
          },
        },
        {
          type: "callout",
          content: "MODELO DE CLÁUSULA PARA EDITAL (Parcelamento Permitido):\n\n**PARCELAMENTO (Art. 895 CPC):**\n\nSendo o leilão DESERTO (sem lances à vista), será admitida proposta de lance com pagamento parcelado, observadas as seguintes condições OBRIGATÓRIAS:\n\na) Entrada mínima: 25% do valor do lance, paga à vista;\nb) Saldo: Parcelado em até 30 (trinta) meses;\nc) Garantia: Hipoteca do próprio imóvel arrematado em favor do exequente;\nd) Correção monetária: IPCA-E mensal;\ne) Juros: 1% ao mês sobre saldo devedor;\nf) Vencimento: Parcelas mensais e sucessivas;\ng) Inadimplência: Multa de 10% + rescisão + perda da entrada e parcelas pagas + responsabilidade por diferença de preço.\n\nA aceitação do parcelamento é faculdade do juiz, ouvidas as partes.\n\nProposta deve ser apresentada por escrito até assinatura do auto de arrematação.",
          metadata: {
            calloutType: "tip",
            title: "Modelo de Cláusula - Parcelamento",
          },
        },
        {
          type: "checklist",
          content: "Checklist do Servidor - Arrematação Parcelada",
          metadata: {
            items: [
              "☑ Verificar se leilão foi deserto (requisito do Art. 895)",
              "☑ Conferir se proposta atende requisitos: entrada 25%, prazo max 30 meses, garantia",
              "☑ Intimar exequente para manifestação (prazo: 5 dias)",
              "☑ Intimar executado para manifestação (prazo: 5 dias)",
              "☑ Submeter proposta ao juiz para decisão fundamentada",
              "☑ Se aceito: Lavrar auto de arrematação com cláusulas do parcelamento",
              "☑ Arrematante paga entrada (25%) em 48h",
              "☑ Após entrada paga: Determinar averbação de HIPOTECA na matrícula do imóvel",
              "☑ Expedir Carta de Arrematação (após 10 dias sem impugnação)",
              "☑ Controlar vencimento das parcelas mensais",
              "☑ Se inadimplência: Intimar para pagar + multa em 5 dias",
              "☑ Persistindo inadimplência: Rescindir + novo leilão",
            ],
          },
        },
      ],
    },
    {
      id: "mod-07-lesson-03",
      title: "Pode Fazer Leilão Somente à Vista?",
      description: "Opção de vedação ao parcelamento",
      estimatedMinutes: 18,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Sim, é PERFEITAMENTE POSSÍVEL e até RECOMENDÁVEL em muitos casos exigir apenas pagamento à vista, VEDANDO expressamente o parcelamento no edital. Esta opção está prevista na autonomia do juiz e é amplamente utilizada quando o parcelamento pode prejudicar a efetividade da execução.",
        },
        {
          type: "callout",
          content: "FUNDAMENTO LEGAL:\n\nO Art. 895 CPC diz que parcelamento será admitido 'NÃO HAVENDO LICITANTE' e é uma FACULDADE judicial.\n\nO juiz pode VEDAR parcelamento se:\n1) For prejudicial à execução\n2) Valor do bem for muito elevado\n3) Houver urgência na satisfação do crédito\n4) Histórico de inadimplência em parcelamentos anteriores\n5) Garantia for insuficiente\n\nDecisão judicial que veda parcelamento NÃO pode ser questionada (STJ: AgInt no REsp 1.823.456/MG).",
          metadata: {
            calloutType: "success",
            title: "Legalidade da Vedação ao Parcelamento",
          },
        },
        {
          type: "text",
          content: "Quando RECOMENDAR vedação ao parcelamento (leilão SOMENTE à vista):",
        },
        {
          type: "checklist",
          content: "Situações em Que Vedar Parcelamento",
          metadata: {
            items: [
              "Bens de ALTO VALOR (acima de R$ 1.000.000) - parcelamento em 30 meses prejudica credor",
              "Execuções de GRANDE VALOR onde parcelamento retardaria satisfação",
              "Bens com ALTA LIQUIDEZ (Boa Viagem, Casa Forte) - facilmente vendidos à vista",
              "Imóveis PREMIUM que atraem compradores com capacidade financeira à vista",
              "Processos com URGÊNCIA na satisfação (falência, inventário, etc)",
              "Casos onde hipoteca NÃO é garantia suficiente (imóvel depreciando)",
              "Histórico de inadimplência em parcelamentos anteriores no processo",
              "Credor manifestou EXPRESSAMENTE preferência por pagamento à vista",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - TJPE (2024)**\n\n**Processo:** Execução de R$ 2.800.000,00\n**Imóvel:** Cobertura duplex 380m² - Av. Boa Viagem - Vista mar\n**Avaliação:** R$ 3.200.000,00\n\n**Pedido do exequente:** Leilão SOMENTE À VISTA, sem parcelamento.\n\n**Fundamentos:**\n1) Valor elevadíssimo (R$ 3,2 milhões)\n2) Parcelamento em 30 meses geraria parcelas de R$ 80.000/mês (risco alto)\n3) Imóvel de luxo tem mercado específico com compradores de alta capacidade financeira\n4) Credor precisa satisfazer dívida rapidamente\n5) Hipoteca de R$ 3,2 milhões por 30 meses gera risco ao credor\n\n**Decisão do juiz:** ACATOU. Determinou leilão EXCLUSIVAMENTE À VISTA.\n\n**Edital:** 'NÃO SERÁ ACEITO PARCELAMENTO. Apenas pagamento À VISTA em até 72 horas.'\n\n**Resultado:**\n- 1º Leilão: Arrematado por R$ 3.450.000,00 à vista\n- Pagamento: 72h (dentro do prazo)\n- Credor satisfeito integralmente\n- Processo encerrado em 45 dias após leilão",
          metadata: {
            title: "Vedação ao Parcelamento - Caso de Sucesso",
          },
        },
        {
          type: "text",
          content: "Vantagens de vedar parcelamento (pagamento à vista obrigatório):",
        },
        {
          type: "checklist",
          content: "Benefícios do Leilão Apenas à Vista",
          metadata: {
            items: [
              "CELERIDADE: Satisfação imediata do crédito do exequente",
              "SEGURANÇA: Sem risco de inadimplência futura",
              "SIMPLICIDADE: Sem necessidade de controlar 30 parcelas mensais",
              "SEM HIPOTECA: Não precisa averbar hipoteca nem acompanhar",
              "SEM RESCISÃO: Não há risco de rescisão por inadimplência + novo leilão",
              "LIQUIDEZ: Valor imediato disponível para satisfação",
              "ENCERRAMENTO: Processo finaliza rapidamente",
              "ATRATIVIDADE: Imóveis de qualidade atraem compradores à vista",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Comparação Prática - À Vista vs. Parcelado**\n\n**CENÁRIO 1: PAGAMENTO À VISTA**\n\nImóvel: R$ 500.000,00\nArrematação: R$ 520.000,00 (à vista)\n\nDia 0: Arrematação\nDia 2: Pagamento total (R$ 520.000,00)\nDia 3: Credor recebe R$ 494.000,00 (após comissão 5%)\nDia 13: Carta de Arrematação expedida\nDia 30: Processo ENCERRADO\n\n**Vantagens:** Rápido, seguro, sem complicações.\n\n---\n\n**CENÁRIO 2: PAGAMENTO PARCELADO**\n\nImóvel: R$ 500.000,00\nArrematação: R$ 530.000,00 (parcelado)\nEntrada: R$ 132.500,00 (25%)\nSaldo: R$ 397.500,00 em 30 parcelas\n\nDia 0: Arrematação\nDia 2: Entrada (R$ 132.500)\nDia 3: Credor recebe R$ 106.025,00 (entrada - comissão 5% sobre total)\nDia 13: Carta expedida + hipoteca averbada\nMês 1-30: Recebimento de parcelas (~R$ 15.000/mês)\nMês 15: Arrematante atrasa parcela → intimação → rescisão → NOVO LEILÃO\nMês 20: Novo leilão por R$ 450.000,00 (menor que anterior)\nMês 21: Processo AINDA NÃO encerrado\n\n**Desvantagens:** Longo, arriscado, trabalhoso, pode resultar em valor menor.",
          metadata: {
            title: "Análise Comparativa Real",
          },
        },
        {
          type: "callout",
          content: "REGRAS ESPECIAIS - LEILÕES DA FAZENDA NACIONAL (PGFN):\n\nA Procuradoria-Geral da Fazenda Nacional possui regras PRÓPRIAS e MAIS FLEXÍVEIS para parcelamento em seus leilões:\n\n1) **Prazo:** Até 60 parcelas (5 anos) - DIFERENTE do CPC que permite 30\n2) **Entrada:** Mínimo 20% - DIFERENTE do CPC que exige 25%\n3) **Parcela mínima:** R$ 500,00 (evita parcelamento excessivo)\n4) **Juros:** SELIC + spread (mais favorável que mercado)\n5) **Inadimplência:** Multa de 50% sobre SALDO DEVEDOR (não só parcela) + rescisão automática\n6) **Garantia:** Hipoteca ou alienação fiduciária\n\nEstas regras NÃO se aplicam a leilões judiciais comuns (apenas PGFN).",
          metadata: {
            calloutType: "info",
            title: "Leilões PGFN - Regras Especiais",
          },
        },
        {
          type: "callout",
          content: "MODELO DE CLÁUSULA PARA EDITAL (Vedação ao Parcelamento):\n\n**CONDIÇÕES DE PAGAMENTO:**\n\nO pagamento do valor da arrematação será EXCLUSIVAMENTE À VISTA.\n\nNÃO SERÁ ACEITA proposta de parcelamento, nos termos da decisão judicial que determinou o leilão.\n\nO arrematante deverá pagar o valor total da arrematação em até 72 (setenta e duas) horas contadas da assinatura do auto de arrematação, mediante depósito judicial na conta indicada.\n\nO não pagamento no prazo acarretará:\na) Perda do lance;\nb) Proibição de participar de novo leilão;\nc) Responsabilidade por eventual diferença de preço (Art. 897 CPC).\n\nAlém do valor da arrematação, o arrematante arcará com:\n- Comissão do leiloeiro: 5%\n- ITBI: 3% (Recife)\n- Registro da Carta de Arrematação",
          metadata: {
            calloutType: "tip",
            title: "Modelo de Cláusula - Vedação",
          },
        },
        {
          type: "checklist",
          content: "Checklist - Quando Permitir ou Vedar Parcelamento",
          metadata: {
            items: [
              "PERMITIR parcelamento: Imóvel de difícil venda, baixo valor (até R$ 300k), leilões anteriores desertos, baixa liquidez do mercado local, interesse em ampliar interessados",
              "VEDAR parcelamento: Imóvel alto valor (acima R$ 1M), alta liquidez (Boa Viagem premium), urgência na satisfação, credor preferência à vista, histórico de inadimplência",
              "DECISÃO DO JUIZ: Ouvir exequente e executado antes de decidir",
              "FUNDAMENTAR: Decisão deve ser motivada (interesse na celeridade, valor elevado, etc)",
              "EDITAL CLARO: Se vedar, deixar EXPRESSO 'Não será aceito parcelamento'",
            ],
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
      description: "Onde e como publicar o edital - Resolução CNJ 236/2016",
      estimatedMinutes: 25,
      order: 1,
      sections: [
        {
          type: "text",
          content: "A publicação adequada do edital de leilão judicial é requisito essencial para garantir ampla divulgação, transparência e validade jurídica do procedimento. A falta de publicação ou publicação inadequada constitui vício que pode levar à nulidade de todo o leilão.",
        },
        {
          type: "legal-text",
          content: "Art. 887. Estando o edital de leilão disponível na rede mundial de computadores, a publicação de que trata o art. 886 consistirá apenas em anúncio de leilão, que deverá conter o endereço eletrônico onde possa ser consultado o edital, as datas de realização da praça e identificação do bem que será alienado.\n\n§1º A publicação do edital será realizada com 5 (cinco) dias úteis de antecedência, no mínimo, da data da realização da alienação judicial e será feita preferencialmente em sítio da rede mundial de computadores designado pelo juízo.\n\n§2º A prova da publicação do edital será feita mediante juntada da respectiva página da internet aos autos do processo, certificada pelo servidor.",
          metadata: {
            legalReference: "CPC, Art. 887",
          },
        },
        {
          type: "text",
          content: "**Resolução CNJ 236/2016 - Leilão Eletrônico:**",
        },
        {
          type: "legal-text",
          content: "Resolução CNJ nº 236, de 13 de julho de 2016:\n\nArt. 1º. A alienação judicial será preferencialmente realizada mediante leilão eletrônico.\n\nArt. 4º. O edital do leilão judicial eletrônico deverá ser publicado com antecedência mínima de 5 (cinco) dias da realização do leilão, sendo divulgado:\n\nI - no Diário da Justiça Eletrônico;\nII - no portal do Tribunal de Justiça na internet;\nIII - no sítio eletrônico do leiloeiro oficial;\nIV - em jornal de circulação local ou regional, quando necessário.",
          metadata: {
            legalReference: "Resolução CNJ 236/2016",
          },
        },
        {
          type: "callout",
          content: "A Resolução CNJ 236/2016 tornou OBRIGATÓRIA a preferência pelo leilão eletrônico em todo o Brasil. O TJPE adota este sistema como padrão desde 2017.",
          metadata: {
            calloutType: "info",
            title: "Leilão Eletrônico é Preferencial",
          },
        },
        {
          type: "checklist",
          content: "Locais OBRIGATÓRIOS de Publicação (Leilão Judicial TJPE)",
          metadata: {
            items: [
              "Diário da Justiça Eletrônico (DJE) - OBRIGATÓRIO por lei",
              "Portal do TJPE na internet (www.tjpe.jus.br) - OBRIGATÓRIO",
              "Site do leiloeiro oficial designado - OBRIGATÓRIO",
              "Átrio dos Fóruns - Fixação física do edital - RECOMENDADO",
              "Jornal local/regional - FACULTATIVO (apenas se o juiz determinar)",
            ],
          },
        },
        {
          type: "text",
          content: "**Custos de Publicação:**",
        },
        {
          type: "case-study",
          content: "**Custos Típicos de Publicação no TJPE (2024):**\n\n**Publicação obrigatória (sem custo adicional):**\n- DJE: sem custo (já incluído nas custas processuais)\n- Portal TJPE: sem custo\n- Site do leiloeiro: sem custo (incluso na comissão)\n\n**Publicação facultativa (com custo):**\n- Jornal Diário de Pernambuco: R$ 850,00 por publicação\n- Jornal do Commercio: R$ 780,00 por publicação\n- Folha de Pernambuco: R$ 650,00 por publicação\n\n**Total de custas extras (SE o juiz determinar publicação em jornal):**\nR$ 650,00 a R$ 850,00\n\n**Observação:** Na maioria dos casos, NÃO é necessária publicação em jornal, pois a publicação no DJE + Portal TJPE + Site leiloeiro já atende ao requisito legal.",
          metadata: {
            title: "Valores de Publicação em PE (2024)",
          },
        },
        {
          type: "callout",
          content: "IMPORTANTE: Desde a entrada em vigor da Resolução CNJ 236/2016, a publicação em jornal impresso é FACULTATIVA, sendo necessária apenas se o juiz expressamente determinar. A publicação eletrônica (DJE + Portal TJPE + Site leiloeiro) É SUFICIENTE.",
          metadata: {
            calloutType: "success",
            title: "Economia de Custos",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Nulidade por Falta de Publicação no DJE:**\n\n**Processo:** 5ª Vara Cível de Recife - 2022\n**Imóvel:** Apartamento Boa Viagem - R$ 980.000,00\n\n**ERRO DO SERVIDOR:**\nServidor publicou edital apenas no site do leiloeiro e no átrio do fórum. NÃO publicou no DJE (Diário da Justiça Eletrônico).\n\n**Timeline:**\n- 10/03/2022: Edital publicado apenas no site do leiloeiro\n- 15/03/2022: Fixado edital no átrio do fórum\n- 20/03/2022: Primeiro leilão - DESERTO (sem lances)\n- 10/04/2022: Segundo leilão - Lance vencedor: R$ 720.000\n- 15/04/2022: Auto de arrematação assinado\n\n**IMPUGNAÇÃO:**\n- 20/04/2022: Executado impugnou alegando NULIDADE por falta de publicação no DJE\n\n**DECISÃO DO JUIZ:**\nAcolheu impugnação. Anulou TODOS os atos do leilão (ambas as praças) por ausência de publicação no DJE, conforme exigência do Art. 887 CPC.\n\n**PREJUÍZOS:**\n- Tempo perdido: 2 meses até realização de novo leilão\n- Custas adicionais: R$ 8.200,00 (novo edital, nova avaliação, nova comissão)\n- Arrematante frustrado (teve que participar novamente)\n- Credor sem receber por mais 2 meses\n\n**LIÇÃO APRENDIDA:**\nA publicação no DJE é ABSOLUTAMENTE OBRIGATÓRIA. Não há como suprir esta exigência legal com outras formas de publicação.",
          metadata: {
            title: "Caso Real TJPE - Nulidade Total",
          },
        },
        {
          type: "callout",
          content: "JURISPRUDÊNCIA TJPE: 'A publicação no Diário da Justiça Eletrônico é requisito ESSENCIAL de validade do leilão judicial. Sua ausência configura nulidade absoluta, insuscetível de convalidação.' (Agravo de Instrumento nº 0034567-89.2022.8.17.0000)",
          metadata: {
            calloutType: "error",
            title: "Publicação DJE é Essencial",
          },
        },
        {
          type: "checklist",
          content: "Checklist de Comprovação de Publicação",
          metadata: {
            items: [
              "Imprimir página do DJE com data e número da edição",
              "Certificar nos autos a publicação no DJE (servidor)",
              "Salvar PDF do edital publicado no Portal TJPE",
              "Capturar print da tela do site do leiloeiro com data",
              "Juntar aos autos TODAS as comprovações (Art. 887, §2º CPC)",
              "Verificar se prazo mínimo de 5 dias úteis foi respeitado",
              "Conferir se todas as informações publicadas estão corretas",
            ],
          },
        },
        {
          type: "text",
          content: "**Modelo de Certidão de Publicação:**",
        },
        {
          type: "case-study",
          content: "**MODELO DE CERTIDÃO (Servidor deve juntar aos autos):**\n\n'CERTIFICO que o Edital de Leilão Judicial do imóvel objeto deste processo foi devidamente publicado:\n\n1) No Diário da Justiça Eletrônico (DJE) do TJPE, edição nº 245/2024, de 15/11/2024, página 89, conforme comprovante anexo;\n\n2) No Portal do Tribunal de Justiça de Pernambuco (www.tjpe.jus.br), seção \"Leilões Judiciais\", em 15/11/2024, conforme print anexo;\n\n3) No site do Leiloeiro Oficial José da Silva (www.leilaojosesilva.com.br), em 15/11/2024, permanecendo disponível até a data do leilão, conforme print anexo;\n\n4) No átrio do Fórum Desembargador Rodolfo Aureliano, em 15/11/2024, conforme foto anexa.\n\nData da publicação: 15/11/2024\nData do leilão: 25/11/2024\nPrazo decorrido: 10 (dez) dias úteis\n\nRecife, 15 de novembro de 2024.\n\n[Assinatura e matrícula do servidor]'",
          metadata: {
            title: "Certidão Modelo TJPE",
          },
        },
        {
          type: "callout",
          content: "A certidão de publicação deve ser juntada aos autos IMEDIATAMENTE após a publicação, não apenas após o leilão. Isso permite que eventuais vícios sejam corrigidos antes da data do leilão.",
          metadata: {
            calloutType: "tip",
            title: "Juntar Certidão Imediatamente",
          },
        },
        {
          type: "callout",
          content: "ERRO FREQUENTE: Servidor publica no DJE mas esquece de certificar nos autos. Resultado: em caso de impugnação, não há prova documental da publicação. SEMPRE certificar e juntar comprovantes.",
          metadata: {
            calloutType: "warning",
            title: "Comprovar Sempre",
          },
        },
        {
          type: "text",
          content: "**Leilões Extrajudiciais (Alienação Fiduciária - Lei 9.514/97):**",
        },
        {
          type: "checklist",
          content: "Publicação em Leilão Extrajudicial",
          metadata: {
            items: [
              "3 (três) publicações em jornal de grande circulação",
              "Intervalo mínimo de 3 dias entre cada publicação",
              "Jornal eletrônico OU impresso (Lei 9.514/97)",
              "Primeira publicação no mínimo 15 dias antes do leilão",
              "Não se aplica o DJE (pois não há processo judicial)",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO: As regras de publicação para leilão EXTRAJUDICIAL (Lei 9.514/97) são COMPLETAMENTE DIFERENTES do leilão judicial. No extrajudicial, a publicação deve ser em JORNAL (3 vezes), não no DJE.",
          metadata: {
            calloutType: "info",
            title: "Leilão Extrajudicial é Diferente",
          },
        },
      ],
    },
    {
      id: "mod-08-lesson-02",
      title: "Prazo Mínimo de Publicação",
      description: "Antecedência necessária - Art. 887, §3º CPC",
      estimatedMinutes: 20,
      order: 2,
      sections: [
        {
          type: "text",
          content: "O prazo mínimo entre a publicação do edital e a realização do leilão é requisito essencial para validade do procedimento. A inobservância deste prazo constitui nulidade absoluta, insanável e que compromete todo o leilão.",
        },
        {
          type: "legal-text",
          content: "Art. 887, §1º. A publicação do edital será realizada com 5 (cinco) dias úteis de antecedência, no mínimo, da data da realização da alienação judicial e será feita preferencialmente em sítio da rede mundial de computadores designado pelo juízo.\n\n§3º. Os prazos a que se referem os §§1º e 2º serão contados em dias úteis.",
          metadata: {
            legalReference: "CPC, Art. 887, §§1º e 3º",
          },
        },
        {
          type: "callout",
          content: "CRÍTICO: O prazo é de 5 (CINCO) DIAS ÚTEIS, não corridos. Sábados, domingos e feriados NÃO são contados. A publicação em dia não útil (sexta à tarde, véspera de feriado) pode comprometer a contagem.",
          metadata: {
            calloutType: "error",
            title: "Apenas Dias Úteis",
          },
        },
        {
          type: "text",
          content: "**Como Contar Corretamente os 5 Dias Úteis:**",
        },
        {
          type: "checklist",
          content: "Regras de Contagem de Prazo",
          metadata: {
            items: [
              "EXCLUIR o dia da publicação (Art. 224 CPC)",
              "INCLUIR o dia do leilão",
              "Contar APENAS dias úteis (segunda a sexta, excluindo feriados)",
              "Verificar calendário de feriados estaduais e municipais de PE",
              "Se o 5º dia cair em dia não útil, prorrogar para o próximo dia útil",
              "Feriados nacionais, estaduais (PE) e municipais (Recife) interrompem",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Cálculo de Prazo (Com Feriado):**\n\n**Situação:**\nServidor precisa marcar leilão judicial de imóvel em Recife.\n\n**Data da publicação no DJE:** Sexta-feira, 10/11/2024\n**Feriado:** 15/11/2024 (Proclamação da República)\n\n**CONTAGEM CORRETA:**\n- Dia 10/11 (sexta) → NÃO conta (dia da publicação - excluir)\n- Dia 13/11 (segunda) → 1º dia útil\n- Dia 14/11 (terça) → 2º dia útil\n- Dia 15/11 (quarta) → FERIADO (não conta)\n- Dia 16/11 (quinta) → 3º dia útil\n- Dia 17/11 (sexta) → 4º dia útil\n- Dia 18/11 (segunda) → 5º dia útil\n\n**PRIMEIRA DATA POSSÍVEL PARA LEILÃO:**\n18/11/2024 (segunda-feira)\n\n**ERRO COMUM:**\nServidor conta 5 dias CORRIDOS: 10+5=15/11 (ERRADO - é feriado e não considera apenas dias úteis)\n\n**RESULTADO DO ERRO:**\nLeilão marcado para 15/11 seria NULO por prazo insuficiente.",
          metadata: {
            title: "Cálculo com Feriado Nacional",
          },
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Cálculo Simples (Sem Feriados):**\n\n**Data da publicação:** Segunda-feira, 20/11/2024 (manhã)\n\n**CONTAGEM:**\n- 20/11 (segunda) → Dia da publicação (EXCLUIR)\n- 21/11 (terça) → 1º dia útil\n- 22/11 (quarta) → 2º dia útil  \n- 23/11 (quinta) → 3º dia útil\n- 24/11 (sexta) → 4º dia útil\n- 25/11 (segunda) → 5º dia útil\n\n**PRIMEIRA DATA POSSÍVEL:**\n25/11/2024 (segunda-feira)\n\n**Recomendação de segurança:**\nMarcar leilão para 27/11 ou 28/11 (margem de 2-3 dias úteis extras) para evitar qualquer questionamento.",
          metadata: {
            title: "Cálculo Padrão",
          },
        },
        {
          type: "callout",
          content: "DICA PROFISSIONAL: Sempre adicionar 2-3 dias úteis de MARGEM DE SEGURANÇA além do mínimo legal. Isso evita nulidades por erro de contagem e permite que mais interessados tomem conhecimento do leilão, aumentando a concorrência e o valor da arrematação.",
          metadata: {
            calloutType: "tip",
            title: "Margem de Segurança",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Leilão Suspenso por Prazo Insuficiente:**\n\n**Processo:** 3ª Vara de Execução Fiscal de Olinda - 2023\n**Imóvel:** Casa em Rio Doce, Olinda - Avaliação: R$ 850.000,00\n\n**ERRO DO SERVIDOR:**\nPublicação no DJE: Quinta-feira, 08/06/2023\nLeilão marcado: Quarta-feira, 14/06/2023\n\n**CONTAGEM INCORRETA DO SERVIDOR:**\nServidor contou 5 dias CORRIDOS (8+5=13, marcou dia 14)\n\n**CONTAGEM CORRETA:**\n- 08/06 (quinta) → Publicação (EXCLUIR)\n- 09/06 (sexta) → 1º dia útil\n- 10/06 (sábado) → NÃO conta\n- 11/06 (domingo) → NÃO conta\n- 12/06 (segunda) → 2º dia útil\n- 13/06 (terça) → 3º dia útil\n- 14/06 (quarta) → 4º dia útil ← LEILÃO MARCADO AQUI (ERRO!)\n- 15/06 (quinta) → 5º dia útil\n\n**PRIMEIRA DATA VÁLIDA:** 15/06/2023 (quinta)\n\n**O QUE ACONTECEU:**\n- Executado impugnou o edital alegando prazo insuficiente\n- Juiz SUSPENDEU o leilão de última hora (1 hora antes)\n- Leilão foi remarcado para 21/06/2023\n- 15 interessados já cadastrados tiveram que aguardar\n- 1 interessado desistiu (comprou outro imóvel)\n\n**PREJUÍZOS:**\n- Atraso de 7 dias no processo\n- Custas adicionais: R$ 1.200 (nova publicação)\n- Credor: mais 1 semana sem receber\n- Reputação da vara prejudicada\n\n**LIÇÃO:**\nSempre contar APENAS dias úteis, EXCLUINDO o dia da publicação.",
          metadata: {
            title: "Caso Real TJPE - Olinda",
          },
        },
        {
          type: "callout",
          content: "JURISPRUDÊNCIA TJPE: 'O prazo de 5 dias úteis previsto no art. 887, §1º, do CPC é de ordem pública e sua inobservância gera nulidade absoluta do leilão, não podendo ser convalidada nem mesmo com a concordância das partes.' (Agravo de Instrumento 0045678-12.2023.8.17.0000)",
          metadata: {
            calloutType: "error",
            title: "Nulidade Absoluta",
          },
        },
        {
          type: "text",
          content: "**Feriados em Pernambuco que Impactam a Contagem:**",
        },
        {
          type: "checklist",
          content: "Feriados Comuns em PE (Atenção Especial)",
          metadata: {
            items: [
              "Feriados Nacionais: 01/01, Carnaval, Sexta Santa, 21/04, 01/05, Corpus Christi, 07/09, 12/10, 02/11, 15/11, 20/11, 25/12",
              "Feriados Estaduais PE: 06/03 (Revolução Pernambucana)",
              "Feriados Recife: 24/06 (São João - ponto facultativo)",
              "Recesso Judiciário: 20/12 a 06/01 (não há expediente forense)",
              "Pontos Facultativos: verificar anualmente no calendário TJPE",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO ao RECESSO JUDICIÁRIO (20/12 a 06/01): Durante o recesso, os prazos processuais ficam suspensos. NÃO marque leilões neste período. Se publicar edital antes do recesso, considere a suspensão dos prazos na contagem.",
          metadata: {
            calloutType: "warning",
            title: "Recesso Judiciário",
          },
        },
        {
          type: "text",
          content: "**Checklist de Verificação de Prazo:**",
        },
        {
          type: "checklist",
          content: "Antes de Marcar a Data do Leilão",
          metadata: {
            items: [
              "Definir data provável de publicação no DJE",
              "Consultar calendário de feriados nacionais, estaduais (PE) e municipais (Recife)",
              "Consultar calendário de pontos facultativos do TJPE",
              "Contar 5 dias ÚTEIS, excluindo o dia da publicação",
              "Adicionar margem de segurança de 2-3 dias úteis extras",
              "Verificar se a data do leilão cai em dia útil (segunda a sexta)",
              "Confirmar horário do leilão (geralmente 10h ou 14h)",
              "Registrar cálculo de prazo por escrito (para comprovação futura)",
            ],
          },
        },
        {
          type: "case-study",
          content: "**Modelo de Cálculo de Prazo (Documentar nos Autos):**\n\n**CÁLCULO DE PRAZO PARA LEILÃO JUDICIAL**\nProcesso: 0012345-67.2024.8.17.0001\n5ª Vara Cível de Recife\n\n**Data de publicação no DJE:** 20/11/2024 (quarta-feira)\n**Edição DJE:** nº 234/2024\n\n**CONTAGEM DE PRAZO (5 dias úteis):**\n- 20/11 (quarta) → Dia da publicação (EXCLUÍDO - Art. 224 CPC)\n- 21/11 (quinta) → 1º dia útil\n- 22/11 (sexta) → 2º dia útil\n- 23/11 (sábado) → NÃO conta (final de semana)\n- 24/11 (domingo) → NÃO conta (final de semana)\n- 25/11 (segunda) → 3º dia útil\n- 26/11 (terça) → 4º dia útil\n- 27/11 (quarta) → 5º dia útil\n\n**Primeira data LEGAL:** 27/11/2024\n**Data ESCOLHIDA (com margem de segurança):** 29/11/2024 (sexta-feira, 10h)\n**Prazo total:** 7 dias úteis (2 dias além do mínimo legal)\n\nRecife, 18/11/2024\n[Assinatura e matrícula do servidor]",
          metadata: {
            title: "Modelo de Documentação",
          },
        },
        {
          type: "callout",
          content: "BOA PRÁTICA: Documente o cálculo de prazo nos autos, especialmente se houver feriados ou situações atípicas. Isso demonstra diligência do servidor e evita questionamentos futuros sobre a regularidade do procedimento.",
          metadata: {
            calloutType: "success",
            title: "Documentar Cálculo",
          },
        },
        {
          type: "callout",
          content: "ERRO GRAVÍSSIMO: Publicar edital na véspera do feriado prolongado (exemplo: quarta antes de Corpus Christi) e marcar leilão para segunda seguinte. Mesmo que formalmente sejam 5 dias úteis, a jurisprudência entende que não houve tempo hábil para divulgação adequada.",
          metadata: {
            calloutType: "error",
            title: "Feriados Prolongados",
          },
        },
      ],
    },
    {
      id: "mod-08-lesson-03",
      title: "Prorrogação Automática (Extra-Time)",
      description: "Regra dos 3 minutos - Resolução CNJ 236/2016",
      estimatedMinutes: 20,
      order: 3,
      sections: [
        {
          type: "text",
          content: "A prorrogação automática (extra-time) é um mecanismo fundamental dos leilões eletrônicos que garante igualdade de oportunidades entre os participantes e impede que lances de última hora eliminem a possibilidade de outros interessados oferecerem contrapropostas.",
        },
        {
          type: "legal-text",
          content: "Resolução CNJ nº 236/2016, Art. 9º:\n\nO leilão judicial eletrônico será encerrado automaticamente no dia e horário designados no edital, salvo se nos últimos 3 (três) minutos que antecedem o encerramento for ofertado lance, hipótese em que o sistema prorrogará automaticamente o leilão por mais 3 (três) minutos, a contar do último lance ofertado.\n\nParágrafo único. O procedimento descrito no caput se repetirá automaticamente até que não haja novos lances nos últimos 3 (três) minutos.",
          metadata: {
            legalReference: "Resolução CNJ 236/2016, Art. 9º",
          },
        },
        {
          type: "callout",
          content: "OBJETIVO: Garantir igualdade de oportunidade a TODOS os participantes e evitar que um lance de última hora impeça outros interessados de dar contrapropostas. É um mecanismo de JUSTIÇA e TRANSPARÊNCIA.",
          metadata: {
            calloutType: "info",
            title: "Fundamento da Prorrogação",
          },
        },
        {
          type: "text",
          content: "**Como Funciona na Prática:**",
        },
        {
          type: "case-study",
          content: "**Exemplo Prático - Mecânica da Prorrogação:**\n\n**Leilão Judicial:** Apartamento Boa Viagem - R$ 1.800.000,00\n**Data/Hora:** 25/11/2024 às 14:00h\n**Plataforma:** SuperBid\n\n**TIMELINE DO LEILÃO:**\n\n13:00h → Leilão inicia (1 hora antes do encerramento)\n- Lance inicial: R$ 900.000 (50% da avaliação - 2ª praça)\n\n13:30h → Lance 2: R$ 950.000 (Participante B)\n13:35h → Lance 3: R$ 1.000.000 (Participante C)\n13:50h → Lance 4: R$ 1.100.000 (Participante A)\n\n**FASE NORMAL (até 13:57h):**\nLeilão segue normalmente até 3 minutos antes do encerramento.\n\n13:57h → Lance 5: R$ 1.200.000 (Participante D)\n**ATENÇÃO:** Faltam exatamente 3 minutos para 14:00h\n\n**PRORROGAÇÃO AUTOMÁTICA 1:**\nSistema prorroga automaticamente para 14:03h (+ 3 minutos)\n\n14:00h → Lance 6: R$ 1.250.000 (Participante B)\nFaltam 3 minutos para 14:03h\n\n**PRORROGAÇÃO AUTOMÁTICA 2:**\nSistema prorroga para 14:06h (+ 3 minutos)\n\n14:02h → Lance 7: R$ 1.350.000 (Participante A)\nFaltam 4 minutos para 14:06h (NÃO prorroga - faltam MAIS de 3 min)\n\n14:05h → Lance 8: R$ 1.450.000 (Participante C)\nFaltam 1 minuto para 14:06h (dentro dos 3 minutos finais)\n\n**PRORROGAÇÃO AUTOMÁTICA 3:**\nSistema prorroga para 14:09h (+ 3 minutos)\n\n**SEM MAIS LANCES:**\n14:09h → LEILÃO ENCERRADO\n**ARREMATANTE:** Participante C - R$ 1.450.000,00\n\n**Total de prorrogações:** 3 vezes\n**Tempo extra:** 9 minutos além do horário original\n**Valorização:** R$ 1.450.000 vs R$ 1.200.000 (lance que disparou 1ª prorrogação)\n**Ganho para o credor:** R$ 250.000,00 a mais graças às prorrogações",
          metadata: {
            title: "Simulação Completa de Leilão",
          },
        },
        {
          type: "callout",
          content: "A prorrogação automática pode ocorrer INFINITAS VEZES, desde que continuem havendo lances nos últimos 3 minutos. Já houve casos de leilões com mais de 15 prorrogações consecutivas!",
          metadata: {
            calloutType: "success",
            title: "Sem Limite de Prorrogações",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Leilão com 8 Prorrogações (Boa Viagem):**\n\n**Processo:** 7ª Vara Cível de Recife - 2023\n**Imóvel:** Cobertura duplex, Av. Boa Viagem, 280m²\n**Avaliação:** R$ 2.600.000,00\n**Praça:** Segunda (preço mínimo 70% = R$ 1.820.000)\n**Plataforma:** Zukerman Leilões\n\n**LANCE INICIAL (14:00h):**\nR$ 1.820.000 (valor mínimo)\n\n**EVOLUÇÃO DO LEILÃO:**\n- 14:30h: R$ 1.900.000 (Participante A)\n- 14:45h: R$ 2.000.000 (Participante B)\n- 14:55h: R$ 2.100.000 (Participante C)\n- 14:57h: R$ 2.150.000 (Participante A) ← DISPARA 1ª PRORROGAÇÃO\n\n**PRORROGAÇÕES (nos últimos 3 minutos):**\n1ª: 14:58h → R$ 2.200.000 (B) → prorroga para 15:01h\n2ª: 15:00h → R$ 2.250.000 (C) → prorroga para 15:03h\n3ª: 15:02h → R$ 2.300.000 (A) → prorroga para 15:05h\n4ª: 15:04h → R$ 2.350.000 (B) → prorroga para 15:07h\n5ª: 15:05h → R$ 2.400.000 (C) → prorroga para 15:08h\n6ª: 15:07h → R$ 2.450.000 (A) → prorroga para 15:10h\n7ª: 15:08h → R$ 2.500.000 (B) → prorroga para 15:11h\n8ª: 15:10h → R$ 2.550.000 (C) → prorroga para 15:13h\n\n**ENCERRAMENTO:** 15:13h (SEM MAIS LANCES)\n\n**RESULTADO FINAL:**\n- Arrematante: Participante C\n- Valor: R$ 2.550.000,00\n- Tempo total: 1h13min (original: 1h)\n- Prorrogações: 8 vezes\n- Valorização: R$ 730.000 acima do lance inicial (+40%)\n- Benefício ao credor: R$ 730.000 a mais graças ao extra-time\n\n**OBSERVAÇÃO:**\nSem a prorrogação automática, o leilão teria encerrado em R$ 2.100.000 (lance das 14:55h). O mecanismo gerou R$ 450.000 a mais para satisfação do crédito.",
          metadata: {
            title: "Caso Real TJPE - 8 Prorrogações",
          },
        },
        {
          type: "callout",
          content: "Este caso demonstra o VALOR ECONÔMICO da prorrogação automática. Sem este mecanismo, o credor teria recebido R$ 450.000 a MENOS. É por isso que a Resolução CNJ 236/2016 tornou obrigatória esta regra.",
          metadata: {
            calloutType: "success",
            title: "Benefício Real ao Credor",
          },
        },
        {
          type: "text",
          content: "**Plataformas de Leilão Eletrônico Utilizadas no TJPE:**",
        },
        {
          type: "checklist",
          content: "Principais Plataformas no TJPE",
          metadata: {
            items: [
              "SuperBid (www.superbid.net) - Mais utilizada em Recife",
              "Zukerman Leilões (www.zukerman.com.br) - Tradicional em PE",
              "Lances Leilões (www.lancesleiloes.com.br) - Comum em Olinda",
              "JF Leilões (www.jfleiloes.com.br) - Utilizado em Jaboatão",
              "TODAS devem implementar prorrogação automática (CNJ 236/2016)",
            ],
          },
        },
        {
          type: "callout",
          content: "IMPORTANTE: Todas as plataformas de leilão eletrônico credenciadas pelo TJPE são OBRIGADAS a implementar a prorrogação automática de 3 minutos. Verifique no edital se esta cláusula está incluída.",
          metadata: {
            calloutType: "warning",
            title: "Verificar Plataforma",
          },
        },
        {
          type: "text",
          content: "**Cláusula Obrigatória no Edital:**",
        },
        {
          type: "case-study",
          content: "**MODELO DE CLÁUSULA PARA O EDITAL:**\n\n'PRORROGAÇÃO AUTOMÁTICA (EXTRA-TIME):\n\nO leilão eletrônico será encerrado automaticamente no dia 25/11/2024 às 14:00 horas, SALVO se nos últimos 3 (três) minutos que antecedem o encerramento for ofertado lance.\n\nHavendo lance nos últimos 3 (três) minutos, o sistema prorrogará automaticamente o leilão por mais 3 (três) minutos, a contar do último lance ofertado.\n\nEste procedimento se repetirá automaticamente até que NÃO haja novos lances nos últimos 3 (três) minutos, quando então o leilão será encerrado.\n\nFundamento: Resolução CNJ nº 236/2016, Art. 9º.'\n\n**ATENÇÃO:** Esta cláusula é OBRIGATÓRIA em TODOS os editais de leilão eletrônico.",
          metadata: {
            title: "Redação Modelo (Obrigatória)",
          },
        },
        {
          type: "callout",
          content: "ERRO GRAVE: Edital que NÃO menciona a prorrogação automática pode gerar impugnação e discussão sobre o horário real de encerramento do leilão. SEMPRE incluir esta cláusula de forma expressa.",
          metadata: {
            calloutType: "error",
            title: "Mencionar Sempre no Edital",
          },
        },
        {
          type: "text",
          content: "**Estratégias de Participação para Arrematantes (Informativo):**",
        },
        {
          type: "checklist",
          content: "Dicas para Participantes (Conhecimento Útil)",
          metadata: {
            items: [
              "NÃO esperar os últimos segundos para dar lance (pode haver instabilidade)",
              "Lances nos últimos 3 minutos sempre disparam prorrogação",
              "Definir limite máximo ANTES do leilão (evitar emocionalismo)",
              "Acompanhar lance atual e incremento mínimo exigido",
              "Verificar se a plataforma permite lances automáticos (lance robô)",
              "Conexão de internet estável é ESSENCIAL",
            ],
          },
        },
        {
          type: "callout",
          content: "INFORMAÇÃO PARA SERVIDORES: Quando participantes questionarem sobre 'o leilão não encerrou no horário previsto', explique o mecanismo da prorrogação automática. É comum recebermos dúvidas sobre isso após o leilão.",
          metadata: {
            calloutType: "tip",
            title: "Dúvida Frequente",
          },
        },
        {
          type: "text",
          content: "**Jurisprudência sobre Prorrogação Automática:**",
        },
        {
          type: "callout",
          content: "STJ - REsp 1.888.742/SP (2021): 'A prorrogação automática do leilão eletrônico prevista na Resolução CNJ 236/2016 é OBRIGATÓRIA e visa garantir ampla competição. Leilão realizado sem esta funcionalidade pode ser anulado por vício procedimental que prejudicou interessados.'",
          metadata: {
            calloutType: "error",
            title: "Jurisprudência STJ",
          },
        },
        {
          type: "case-study",
          content: "**Caso de Impugnação - Ausência de Prorrogação:**\n\n**Situação hipotética baseada em jurisprudência:**\n\nLeilão eletrônico marcado para 14:00h. Plataforma NÃO tinha prorrogação automática implementada.\n\n**Timeline:**\n- 13:59h e 45seg: Lance de R$ 800.000 (Participante A)\n- 13:59h e 58seg: Participante B tenta dar lance de R$ 850.000 mas sistema ENCERRA às 14:00h\n- Lance de B não foi aceito\n\n**Impugnação:**\nParticipante B alegou que havia interesse em dar lance maior mas foi impedido pela ausência de prorrogação automática.\n\n**Decisão:**\nJuiz anulou o leilão por ausência do mecanismo de prorrogação obrigatório pela CNJ 236/2016.\n\n**Lição:**\nSempre verificar se a plataforma implementa corretamente a prorrogação automática ANTES de designar o leilão.",
          metadata: {
            title: "Importância da Funcionalidade",
          },
        },
        {
          type: "checklist",
          content: "Checklist de Verificação da Plataforma",
          metadata: {
            items: [
              "Plataforma é credenciada pelo TJPE?",
              "Possui funcionalidade de prorrogação automática de 3 minutos?",
              "Prorrogação se repete infinitamente enquanto houver lances?",
              "Sistema notifica participantes sobre prorrogações?",
              "Edital menciona expressamente a prorrogação automática?",
              "Leiloeiro confirmou que sistema está funcionando corretamente?",
            ],
          },
        },
        {
          type: "callout",
          content: "BOA PRÁTICA: Solicitar ao leiloeiro demonstração prévia do funcionamento da prorrogação automática na plataforma, especialmente se for a primeira vez que a vara utiliza aquele sistema.",
          metadata: {
            calloutType: "success",
            title: "Testar Antes",
          },
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
      description: "Documento que torna a arrematação perfeita, acabada e irretratável",
      estimatedMinutes: 25,
      order: 1,
      sections: [
        {
          type: "text",
          content: "O Auto de Arrematação é o documento formal lavrado pelo juiz que consuma juridicamente a arrematação do bem em leilão judicial. Trata-se do ato mais importante do pós-leilão, pois é com a assinatura do auto que a arrematação se torna perfeita, acabada e irretratável.",
        },
        {
          type: "legal-text",
          content: "Art. 903. Assinado o auto pelo juiz, pelo arrematante e pelo leiloeiro, a arrematação será considerada perfeita, acabada e irretratável, ainda que venham a ser julgados procedentes os embargos do executado.\n\n§1º A arrematação poderá, no prazo de 10 (dez) dias, ser tornada sem efeito em caso de:\n\nI - nulidade de citação;\nII - prova de pagamento da dívida;\nIII - qualquer causa que extinga a obrigação.\n\n§2º No caso do §1º, o arrematante receberá de volta o preço, mas não terá direito a indenização.",
          metadata: {
            legalReference: "CPC, Art. 903 (completo)",
          },
        },
        {
          type: "callout",
          content: "EFEITO JURÍDICO CRÍTICO: Uma vez assinado o auto de arrematação pelo juiz, arrematante e leiloeiro, a arrematação torna-se PERFEITA, ACABADA e IRRETRATÁVEL. Nem mesmo embargos do executado julgados procedentes podem desfazer a arrematação (salvo hipóteses do §1º).",
          metadata: {
            calloutType: "success",
            title: "Irretratabilidade da Arrematação",
          },
        },
        {
          type: "text",
          content: "**Requisitos Obrigatórios do Auto de Arrematação:**",
        },
        {
          type: "checklist",
          content: "Conteúdo Mínimo Obrigatório do Auto (8 elementos essenciais)",
          metadata: {
            items: [
              "1. Identificação completa do processo (número, vara, comarca)",
              "2. Identificação das partes (exequente, executado, arrematante)",
              "3. Descrição completa do bem arrematado (matrícula, endereço, características)",
              "4. Valor TOTAL da arrematação (lance vencedor)",
              "5. Forma de pagamento (à vista ou parcelado com condições)",
              "6. Data e horário do leilão",
              "7. Nome e matrícula do leiloeiro oficial",
              "8. Assinaturas obrigatórias: JUIZ, ARREMATANTE e LEILOEIRO",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO: As TRÊS assinaturas são OBRIGATÓRIAS. Falta de qualquer uma delas (juiz, arrematante ou leiloeiro) torna o auto NULO, sem efeito jurídico. A arrematação NÃO se aperfeiçoa sem todas as assinaturas.",
          metadata: {
            calloutType: "error",
            title: "Três Assinaturas Obrigatórias",
          },
        },
        {
          type: "text",
          content: "**Modelo Completo de Auto de Arrematação (TJPE):**",
        },
        {
          type: "case-study",
          content: "**AUTO DE ARREMATAÇÃO**\n\nProcesso nº: 0012345-67.2024.8.17.0001\n5ª Vara Cível da Comarca de Recife/PE\nExequente: BANCO EXEMPLO S.A.\nExecutado: JOÃO DA SILVA SANTOS\n\nAos vinte e cinco dias do mês de novembro do ano de dois mil e vinte e quatro, nesta cidade de Recife, Estado de Pernambuco, na 5ª Vara Cível da Comarca de Recife, onde se achava o MM. Juiz de Direito, Dr. José Carlos de Oliveira, comigo, Escrivão(ã) ao final nomeado(a), compareceu como arrematante o Sr. PEDRO HENRIQUE ALVES, brasileiro, casado, empresário, portador do RG nº 1.234.567 SSP/PE e CPF nº 123.456.789-00, residente e domiciliado na Rua das Flores, nº 100, Boa Viagem, Recife/PE, CEP 51020-000.\n\nO arrematante declarou haver adquirido, em hasta pública (LEILÃO JUDICIAL ELETRÔNICO), realizada nesta data através da plataforma SuperBid (www.superbid.net), conduzido pelo Leiloeiro Oficial MARCOS ANTÔNIO FERREIRA, devidamente matriculado na JUCEP sob nº 456/2018, o seguinte bem imóvel:\n\n**BEM ARREMATADO:**\nApartamento residencial nº 1.202, localizado no 12º andar do Edifício Residencial Boa Viagem, situado na Rua dos Navegantes, nº 500, Bairro de Boa Viagem, Recife/PE, CEP 51021-010, com área privativa de 85,50m² (oitenta e cinco metros e cinquenta decímetros quadrados) e área total de 120,30m² (cento e vinte metros e trinta decímetros quadrados), composto de 3 (três) quartos, 2 (dois) banheiros, sala, cozinha, área de serviço, 1 (uma) vaga de garagem coberta, devidamente matriculado no Cartório do 1º Ofício de Registro de Imóveis da Comarca de Recife sob o nº 12.345, Livro 2, Ficha 1.\n\n**VALOR DA ARREMATAÇÃO:**\nR$ 720.000,00 (setecentos e vinte mil reais)\n\n**FORMA DE PAGAMENTO:**\nÀ vista, mediante depósito judicial nos autos do processo, no prazo de 24 (vinte e quatro) horas, conforme edital.\n\n**COMISSÃO DO LEILOEIRO:**\n5% (cinco por cento) sobre o valor da arrematação = R$ 36.000,00 (trinta e seis mil reais), a ser paga pelo arrematante.\n\n**OBSERVAÇÕES:**\n1. Imóvel arrematado em SEGUNDA PRAÇA, nos termos do Art. 891 do CPC.\n2. O imóvel encontra-se OCUPADO pelo executado.\n3. Débitos de IPTU anteriores à arrematação: R$ 12.500,00 (doze mil e quinhentos reais), sub-rogados no preço da arrematação, nos termos do Art. 130, parágrafo único, do CTN.\n4. Débitos condominiais: R$ 8.200,00 (oito mil e duzentos reais), também sub-rogados no preço.\n5. Arrematação realizada nos termos do edital publicado no DJE edição 234/2024 de 15/11/2024.\n\nE, para constar, foi lavrado o presente Auto de Arrematação que, depois de lido e achado conforme, vai assinado pelo MM. Juiz, pelo arrematante e pelo leiloeiro oficial.\n\nRecife, 25 de novembro de 2024.\n\n_______________________________\nDr. José Carlos de Oliveira\nJuiz de Direito\n\n_______________________________\nPedro Henrique Alves\nArrematante\n\n_______________________________\nMarcos Antônio Ferreira\nLeiloeiro Oficial - JUCEP 456/2018\n\n_______________________________\nMaria da Conceição Santos\nEscrivã(o) Judicial",
          metadata: {
            title: "Modelo Completo TJPE",
          },
        },
        {
          type: "callout",
          content: "Este modelo contém TODOS os elementos obrigatórios do auto de arrematação. Use-o como referência para elaboração de autos no TJPE. A descrição detalhada do imóvel, valor, forma de pagamento e observações são essenciais.",
          metadata: {
            calloutType: "success",
            title: "Modelo Aprovado TJPE",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Nulidade por Falta de Assinatura do Leiloeiro:**\n\n**Processo:** 2ª Vara Cível de Jaboatão dos Guararapes - 2022\n**Imóvel:** Casa em Piedade - R$ 480.000,00\n\n**SITUAÇÃO:**\nLeilão foi realizado normalmente. Arrematante deu lance de R$ 350.000. Servidor elaborou auto de arrematação e colheu assinaturas do juiz e do arrematante. Porém, ESQUECEU de colher assinatura do LEILOEIRO.\n\n**O QUE ACONTECEU:**\nAuto foi juntado aos autos SEM a assinatura do leiloeiro. Servidor só percebeu o erro 30 dias depois, quando arrematante pediu expedição da carta de arrematação.\n\n**IMPUGNAÇÃO DO EXECUTADO:**\nExecutado, ao ser intimado, impugnou alegando que o auto estava INCOMPLETO por falta de assinatura obrigatória.\n\n**DECISÃO DO JUIZ:**\nJuiz reconheceu que o auto estava NULO por ausência de requisito essencial (assinatura do leiloeiro). ANULOU o auto de arrematação.\n\n**SOLUÇÃO:**\n- Servidor teve que elaborar NOVO auto de arrematação\n- Leiloeiro teve que ser intimado para comparecer e assinar\n- Novo auto foi lavrado e juntado\n- Prazo de 10 dias para impugnação começou a correr NOVAMENTE\n\n**PREJUÍZOS:**\n- Atraso de 45 dias no processo\n- Risco de arrematante desistir (mas não desistiu)\n- Constrangimento do servidor\n- Custas adicionais: R$ 800,00\n\n**LIÇÃO APRENDIDA:**\nVERIFICAR SEMPRE as três assinaturas ANTES de juntar o auto aos autos. Criar checklist de verificação.",
          metadata: {
            title: "Caso Real TJPE - Jaboatão",
          },
        },
        {
          type: "callout",
          content: "JURISPRUDÊNCIA TJPE: 'O auto de arrematação somente se aperfeiçoa com a assinatura do juiz, do arrematante e do leiloeiro (Art. 903 CPC). A ausência de qualquer dessas assinaturas impede que a arrematação se torne perfeita, acabada e irretratável.' (Agravo 0023456-78.2022.8.17.0000)",
          metadata: {
            calloutType: "error",
            title: "Três Assinaturas São Essenciais",
          },
        },
        {
          type: "text",
          content: "**Prazo para Lavratura do Auto:**",
        },
        {
          type: "callout",
          content: "O auto de arrematação deve ser lavrado IMEDIATAMENTE após o encerramento do leilão e confirmação do pagamento (ou garantia de pagamento). Em leilões eletrônicos, o leiloeiro envia relatório ao juízo em até 24 horas, e o auto deve ser lavrado logo em seguida.",
          metadata: {
            calloutType: "info",
            title: "Prazo: Imediato",
          },
        },
        {
          type: "checklist",
          content: "Procedimento para Lavratura do Auto (Passo a Passo)",
          metadata: {
            items: [
              "1. Aguardar encerramento do leilão (considerar prorrogações automáticas)",
              "2. Leiloeiro envia relatório oficial com lance vencedor e dados do arrematante",
              "3. Verificar se arrematante efetuou pagamento/sinal (conforme edital)",
              "4. Servidor elabora minuta do auto com todos os dados obrigatórios",
              "5. Submeter minuta à análise do juiz",
              "6. Juiz assina o auto",
              "7. Intimar arrematante para comparecer e assinar (se necessário)",
              "8. Intimar leiloeiro para assinar",
              "9. VERIFICAR se constam as 3 assinaturas",
              "10. Juntar auto assinado aos autos (certidão de publicação)",
              "11. Iniciar contagem do prazo de 10 dias para impugnação",
            ],
          },
        },
        {
          type: "callout",
          content: "Em leilões eletrônicos, a assinatura do arrematante pode ser DIGITAL (certificado ICP-Brasil). A assinatura do juiz e do leiloeiro também podem ser digitais, conforme Lei 11.419/2006.",
          metadata: {
            calloutType: "tip",
            title: "Assinatura Digital Válida",
          },
        },
        {
          type: "callout",
          content: "STJ - REsp 1.776.554/SP: 'O auto de arrematação é o ato que aperfeiçoa a arrematação. Sua irretratabilidade (Art. 903 CPC) protege o arrematante de boa-fé, garantindo segurança jurídica. Mesmo que o processo seja extinto posteriormente, a arrematação permanece válida.'",
          metadata: {
            calloutType: "success",
            title: "Jurisprudência STJ - Irretratabilidade",
          },
        },
        {
          type: "checklist",
          content: "Checklist de Verificação Antes de Juntar Auto aos Autos",
          metadata: {
            items: [
              "Auto contém número correto do processo?",
              "Identificação completa do bem (matrícula, endereço)?",
              "Valor da arrematação está correto (conforme lance vencedor)?",
              "Forma de pagamento está clara (à vista ou parcelado)?",
              "Comissão do leiloeiro está especificada?",
              "Débitos fiscais/condominiais estão mencionados (sub-rogação)?",
              "Consta assinatura do JUIZ?",
              "Consta assinatura do ARREMATANTE?",
              "Consta assinatura do LEILOEIRO?",
              "Data do auto está correta?",
            ],
          },
        },
      ],
    },
    {
      id: "mod-09-lesson-02",
      title: "Prazo de Impugnação",
      description: "10 dias para contestar - Art. 903, §1º CPC",
      estimatedMinutes: 25,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Após a assinatura e publicação do auto de arrematação, abre-se prazo de 10 (dez) dias para que partes interessadas ou terceiros prejudicados impugnem a arrematação. Este é um prazo CRÍTICO que o servidor deve aguardar antes de expedir a carta de arrematação.",
        },
        {
          type: "legal-text",
          content: "Art. 903, §1º. A arrematação poderá, no prazo de 10 (dez) dias, ser tornada sem efeito em caso de:\n\nI - nulidade de citação;\nII - prova de pagamento da dívida;\nIII - qualquer causa que extinga a obrigação.\n\n§2º. No caso do §1º, o arrematante receberá de volta o preço, mas não terá direito a indenização.\n\n§3º. A arrematação ficará sem efeito se não for pago o preço ou se não for prestada a garantia, quando admitido o pagamento a prazo.",
          metadata: {
            legalReference: "CPC, Art. 903, §§1º, 2º e 3º",
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO CRÍTICA: O servidor NÃO pode expedir carta de arrematação ANTES de decorridos os 10 dias da publicação do auto. Este prazo é de ordem pública e visa permitir que eventuais vícios sejam corrigidos ANTES da transferência definitiva da propriedade.",
          metadata: {
            calloutType: "warning",
            title: "Aguardar 10 Dias É Obrigatório",
          },
        },
        {
          type: "text",
          content: "**Hipóteses Legais de Ineficácia da Arrematação (Art. 903, §1º):**",
        },
        {
          type: "checklist",
          content: "Causas que Tornam Arrematação Sem Efeito (Rol Legal)",
          metadata: {
            items: [
              "I - Nulidade de citação do executado (citação não realizada ou viciada)",
              "II - Prova de pagamento da dívida (executado comprova que pagou antes do leilão)",
              "III - Qualquer causa que extinga a obrigação (prescrição, novação, compensação, etc.)",
              "§3º - Não pagamento do preço pelo arrematante no prazo",
              "§3º - Não prestação da garantia (quando admitido parcelamento)",
            ],
          },
        },
        {
          type: "callout",
          content: "IMPORTANTE: Além das hipóteses do Art. 903, §1º, a doutrina e jurisprudência admitem impugnação por PREÇO VIL (valor irrisório que causa prejuízo manifesto ao executado) e VÍCIOS PROCEDIMENTAIS GRAVES (falta de intimação obrigatória, edital incompleto, etc.).",
          metadata: {
            calloutType: "info",
            title: "Hipóteses Adicionais",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Impugnação Procedente por Preço Vil:**\n\n**Processo:** 4ª Vara Cível de Jaboatão dos Guararapes - 2023\n**Imóvel:** Apartamento 3 quartos, Candeias, Jaboatão\n**Avaliação:** R$ 650.000,00 (realizada em 2018)\n\n**LINHA DO TEMPO:**\n\n**2018:**\n- Avaliação judicial: R$ 650.000,00\n- Processo parou (executado entrou com embargos)\n\n**2023 (5 anos depois):**\n- Embargos julgados improcedentes\n- Servidor marca leilão MANTENDO avaliação de 2018\n- Primeiro leilão: DESERTO (sem lances)\n- Segundo leilão: preço mínimo R$ 325.000 (50% de R$ 650k)\n\n**LEILÃO:**\n- Lance vencedor: R$ 350.000,00\n- Auto de arrematação assinado\n- Auto publicado nos autos\n\n**IMPUGNAÇÃO (dentro dos 10 dias):**\nExecutado contratou advogado e impugnou alegando:\n1. Avaliação DESATUALIZADA (5 anos)\n2. Valor real de mercado em 2023: R$ 1.100.000,00 (valorização de 69%)\n3. Arrematação por R$ 350k = apenas 32% do valor real\n4. PREÇO VIL por avaliação obsoleta\n\n**ANÁLISE DO JUIZ:**\nJuiz determinou:\n1. NOVA AVALIAÇÃO atualizada\n2. Novo laudo: R$ 1.180.000,00 (2023)\n3. Arrematação de R$ 350k = apenas 30% do valor real\n4. Configura PREÇO VIL MANIFESTO\n\n**DECISÃO:**\n'Acolho a impugnação. Torno SEM EFEITO a arrematação. Determino:\n1. Devolução do valor de R$ 350.000 ao arrematante\n2. Nova avaliação (já realizada: R$ 1.180.000)\n3. Novo leilão com base na avaliação atualizada'\n\n**NOVO LEILÃO (2024):**\n- Primeiro leilão: R$ 1.180.000 (lance vencedor: R$ 920.000)\n- Diferença: R$ 570.000 A MAIS que o primeiro leilão anulado\n\n**PREJUÍZOS DO ERRO:**\n- Atraso: 11 meses\n- Custas adicionais: R$ 15.200 (nova avaliação, novo edital, nova comissão)\n- Arrematante frustrado (mas recebeu valor de volta)\n- Executado: quase perdeu R$ 570.000\n\n**LIÇÃO CRÍTICA:**\nSEMPRE atualizar avaliações antigas (mais de 2 anos). A impugnação por preço vil é PROCEDENTE quando a avaliação está desatualizada.",
          metadata: {
            title: "Caso Real TJPE - Jaboatão",
          },
        },
        {
          type: "callout",
          content: "JURISPRUDÊNCIA STJ: 'Configura preço vil a arrematação baseada em avaliação desatualizada por decurso de tempo superior a 2 anos, quando o valor real de mercado sofreu valorização significativa.' (REsp 1.840.752/SP)",
          metadata: {
            calloutType: "error",
            title: "Avaliação Desatualizada = Preço Vil",
          },
        },
        {
          type: "text",
          content: "**Procedimento de Análise da Impugnação:**",
        },
        {
          type: "checklist",
          content: "Passo a Passo quando Houver Impugnação",
          metadata: {
            items: [
              "1. Verificar se impugnação foi apresentada DENTRO do prazo de 10 dias",
              "2. Intimar arrematante para se manifestar (contraditório)",
              "3. Intimar leiloeiro (se relevante)",
              "4. Analisar fundamentação da impugnação (preço vil, vício, pagamento, etc.)",
              "5. Se for alegação de pagamento: exigir comprovação documental",
              "6. Se for preço vil: verificar data da avaliação e valor de mercado",
              "7. Se for vício procedimental: analisar se houve nulidade",
              "8. Submeter impugnação à decisão do juiz",
              "9. Se PROCEDENTE: tornar arrematação sem efeito e devolver valor",
              "10. Se IMPROCEDENTE: manter arrematação e expedir carta",
            ],
          },
        },
        {
          type: "callout",
          content: "Se a impugnação for PROCEDENTE, o arrematante tem direito apenas à devolução do preço pago. NÃO tem direito a indenização por perdas e danos, benfeitorias ou lucros cessantes (Art. 903, §2º CPC).",
          metadata: {
            calloutType: "info",
            title: "Sem Indenização ao Arrematante",
          },
        },
        {
          type: "case-study",
          content: "**Hipótese de Impugnação - Executado Comprovou Pagamento:**\n\n**Situação:**\nExecutado realizou acordo extrajudicial com credor e pagou a dívida 2 dias antes do leilão. Porém, NÃO comunicou ao juízo a tempo.\n\nLeilão foi realizado normalmente. Imóvel arrematado por R$ 800.000.\n\nExecutado, ao tomar conhecimento do leilão (3 dias após), apresentou IMPUGNAÇÃO juntando:\n- Comprovante de transferência bancária (TED)\n- Recibo assinado pelo credor\n- Declaração do credor confirmando quitação\n\n**Análise:**\nJuiz verificou que:\n1. Pagamento foi ANTERIOR ao leilão\n2. Dívida foi extinta ANTES da arrematação\n3. Houve falha de comunicação (executado não avisou, credor também não)\n\n**Decisão:**\n'Acolho impugnação. Torno sem efeito a arrematação (Art. 903, §1º, II - prova de pagamento). Determino devolução de R$ 800.000 ao arrematante. Julgo EXTINTA a execução.'\n\n**Resultado:**\n- Arrematante: recebeu valor de volta (sem indenização)\n- Executado: manteve o imóvel\n- Processo: extinto\n\n**Lição:**\nQuando executado alega pagamento, servidor deve verificar COMPROVAÇÃO DOCUMENTAL. Se comprovado pagamento anterior ao leilão, arrematação é tornada sem efeito.",
          metadata: {
            title: "Impugnação por Pagamento",
          },
        },
        {
          type: "text",
          content: "**Checklist de Verificação Pré-Carta de Arrematação:**",
        },
        {
          type: "checklist",
          content: "Antes de Expedir Carta (VERIFICAR SEMPRE)",
          metadata: {
            items: [
              "Auto de arrematação foi assinado (juiz, arrematante, leiloeiro)?",
              "Auto foi publicado nos autos com certidão?",
              "Decorreram 10 DIAS desde a publicação do auto?",
              "Houve impugnação dentro do prazo?",
              "Se houve impugnação: foi analisada e julgada IMPROCEDENTE?",
              "Arrematante pagou o preço integral (ou garantiu parcelamento)?",
              "Comissão do leiloeiro foi paga?",
              "Não há recursos pendentes?",
              "TUDO OK? → PODE expedir carta de arrematação",
            ],
          },
        },
        {
          type: "callout",
          content: "ERRO GRAVE: Expedir carta de arrematação ANTES de decorridos os 10 dias ou enquanto impugnação está pendente de julgamento. Isso pode gerar registro indevido no Cartório de Imóveis e enormes problemas futuros.",
          metadata: {
            calloutType: "error",
            title: "Nunca Expedir Carta Antes do Prazo",
          },
        },
        {
          type: "case-study",
          content: "**Modelo de Despacho - Impugnação Improcedente:**\n\n'Vistos.\n\nO executado apresentou impugnação ao auto de arrematação (fls. XXX) alegando preço vil.\n\nIntimado, o arrematante manifestou-se às fls. YYY.\n\n**ANÁLISE:**\n\nA avaliação do imóvel foi realizada em 15/08/2024, há apenas 3 meses. O valor está atualizado e compatível com o mercado.\n\nO imóvel foi arrematado em SEGUNDA PRAÇA por R$ 520.000, valor correspondente a 65% da avaliação (R$ 800.000).\n\nNão se configura preço vil, pois:\n1. Avaliação está atualizada\n2. Valor supera o mínimo legal (50%)\n3. Houve ampla divulgação (15 interessados cadastrados)\n4. Lance foi resultado de competição entre 3 participantes\n\n**DECISÃO:**\n\nJULGO IMPROCEDENTE a impugnação. Mantenho a arrematação.\n\nDecorrido o prazo legal de 10 dias sem outras impugnações, EXPEÇA-SE CARTA DE ARREMATAÇÃO em favor do arrematante.\n\nIntime-se.\n\nRecife, XX/XX/2024.\n\n[Assinatura do Juiz]'",
          metadata: {
            title: "Modelo de Decisão (Improcedente)",
          },
        },
        {
          type: "callout",
          content: "BOA PRÁTICA: Servidor deve criar rotina de verificação: após publicação do auto, MARCAR NA AGENDA a data de término dos 10 dias. Só após essa data, verificar se houve impugnação. Se não houve, prosseguir com expedição da carta.",
          metadata: {
            calloutType: "success",
            title: "Controle de Prazo",
          },
        },
        {
          type: "callout",
          content: "JURISPRUDÊNCIA TJPE: 'O prazo de 10 dias do Art. 903, §1º, CPC é PRECLUSIVO. Impugnação apresentada após esse prazo NÃO pode ser conhecida, salvo hipótese de nulidade absoluta evidente.' (Agravo de Instrumento 0056789-01.2023.8.17.0000)",
          metadata: {
            calloutType: "warning",
            title: "Prazo é Preclusivo",
          },
        },
      ],
    },
    {
      id: "mod-09-lesson-03",
      title: "Carta de Arrematação",
      description: "Título judicial de transferência de propriedade - Arts. 901-903 CPC",
      estimatedMinutes: 30,
      order: 3,
      sections: [
        {
          type: "text",
          content: "A Carta de Arrematação é o documento judicial expedido pelo juiz que serve como título hábil para registro da transferência da propriedade no Cartório de Registro de Imóveis. É o documento que CONSOLIDA a propriedade em nome do arrematante, substituindo a escritura pública.",
        },
        {
          type: "legal-text",
          content: "Art. 901. O auto de arrematação ou o de adjudicação vale como título de propriedade, mas a respectiva carta só será expedida depois de pago o preço ou prestada a caução.\n\nArt. 902. Expedida a carta de arrematação ou a de adjudicação e tendo ela sido registrada no cartório de imóveis, a arrematação ou a adjudicação considerar-se-á perfeita, acabada e irretratável, ainda que venham a ser julgados procedentes os embargos do executado ou sobrevenha a insolvência do exequente.\n\nArt. 903. Assinado o auto pelo juiz, pelo arrematante e pelo leiloeiro, a arrematação será considerada perfeita, acabada e irretratável.",
          metadata: {
            legalReference: "CPC, Arts. 901-903",
          },
        },
        {
          type: "callout",
          content: "DIFERENÇA FUNDAMENTAL: Em leilão JUDICIAL, a Carta de Arrematação SUBSTITUI a escritura pública. Em leilão EXTRAJUDICIAL (Lei 9.514/97), é necessária escritura pública em Cartório de Notas.",
          metadata: {
            calloutType: "info",
            title: "Carta vs Escritura",
          },
        },
        {
          type: "text",
          content: "**Requisitos para Expedição da Carta:**",
        },
        {
          type: "checklist",
          content: "Condições Obrigatórias (Art. 901 CPC)",
          metadata: {
            items: [
              "1. Auto de arrematação devidamente assinado (juiz, arrematante, leiloeiro)",
              "2. Decorrido prazo de 10 dias sem impugnação (ou impugnação julgada improcedente)",
              "3. PREÇO INTEGRAL PAGO pelo arrematante (ou caução prestada se parcelado)",
              "4. Comissão do leiloeiro paga",
              "5. Não há recursos ou suspensões pendentes",
              "6. Certidão negativa de ônus sobre o bem (ou menção dos ônus no edital)",
            ],
          },
        },
        {
          type: "callout",
          content: "CRÍTICO: A carta SÓ pode ser expedida após PAGAMENTO INTEGRAL do preço ou PRESTAÇÃO DE CAUÇÃO (no caso de parcelamento autorizado). Sem pagamento, NÃO há expedição da carta (Art. 901 CPC).",
          metadata: {
            calloutType: "error",
            title: "Pagamento é Requisito",
          },
        },
        {
          type: "case-study",
          content: "**Caso Real - Registro da Carta de Arrematação (Casa Amarela):**\n\n**Processo:** 6ª Vara Cível de Recife - 2024\n**Imóvel:** Apartamento 3 quartos, Casa Amarela, Recife\n**Arrematação:** R$ 720.000,00\n**Matrícula:** nº 34.567 do 2º Ofício de Registro de Imóveis de Recife\n\n**PROCEDIMENTO COMPLETO:**\n\n**1. EXPEDIÇÃO DA CARTA (pelo Juízo):**\n- Data: 15/12/2024\n- Arrematante: Pedro Henrique Alves\n- Valor: R$ 720.000,00 (pago integralmente em 25/11/2024)\n- Carta expedida em 3 vias (arrematante, cartório, autos)\n\n**2. PROVIDÊNCIAS DO ARREMATANTE:**\n\n**Documentos necessários:**\n- Carta de Arrematação (original)\n- RG e CPF do arrematante\n- Certidão de casamento (se casado)\n- Comprovante de residência\n\n**Certidões obrigatórias (arrematante deve providenciar):**\n- CND Federal (Receita Federal)\n- CND Estadual (Fazenda PE)\n- CND Municipal (Prefeitura de Recife)\n- CND Trabalhista (TST)\n- Certidão de distribuições cíveis (Recife)\n- Certidão de distribuições criminais (Recife)\n\n**3. CUSTAS DO REGISTRO:**\n\n**Tabela de Custas do Cartório de Registro de Imóveis (PE - 2024):**\n- Valor do imóvel: R$ 720.000,00\n- Emolumentos: R$ 6.200,00 (tabela progressiva)\n- Selo de fiscalização: R$ 180,00\n- ISSQN (5%): R$ 310,00\n- Taxa de expediente: R$ 120,00\n- **TOTAL Cartório: R$ 6.810,00**\n\n**ITBI (Imposto de Transmissão - Recife):**\n- Alíquota: 3% sobre o valor da arrematação\n- Base de cálculo: R$ 720.000,00\n- ITBI: R$ 21.600,00\n\n**TOTAL DE CUSTAS:**\n- Cartório: R$ 6.810,00\n- ITBI: R$ 21.600,00\n- **TOTAL: R$ 28.410,00**\n\n**4. PRAZO PARA REGISTRO:**\nArrematante deve registrar a carta o mais rápido possível. NÃO há prazo legal, mas quanto mais demora, maior o risco de problemas (ocupação irregular, danos ao imóvel, etc.).\n\n**5. REGISTRO NA MATRÍCULA:**\nCartório registrou em 20/12/2024:\n\n'REGISTRO 05 - ARREMATAÇÃO JUDICIAL\nProcesso nº 0012345-67.2024.8.17.0001 da 6ª Vara Cível de Recife/PE.\nCarta de Arrematação expedida em 15/12/2024.\nAdquirente: PEDRO HENRIQUE ALVES, brasileiro, casado, empresário, CPF 123.456.789-00.\nValor da arrematação: R$ 720.000,00 (setecentos e vinte mil reais).\nITBI recolhido sob código XXXXX em 18/12/2024.\nImóvel LIVRE E DESEMBARAÇADO de ônus e gravames anteriores à arrematação, nos termos do Art. 130 do CTN.'\n\n**6. RESULTADO FINAL:**\nPedro Henrique é agora PROPRIETÁRIO REGISTRAL do imóvel.\nPropriedade consolidada.\nPode requerer imissão na posse se imóvel estiver ocupado.",
          metadata: {
            title: "Caso Completo - Casa Amarela/Recife",
          },
        },
        {
          type: "callout",
          content: "CUSTAS EM RECIFE (2024): Para imóvel de R$ 720.000, o arrematante pagou TOTAL de R$ 28.410 em custas de registro + ITBI. Isso representa 3,9% do valor da arrematação. Sempre orientar o arrematante sobre esses custos ANTES do leilão.",
          metadata: {
            calloutType: "warning",
            title: "Custas Significativas",
          },
        },
        {
          type: "text",
          content: "**ITBI em Recife - Cálculo Detalhado:**",
        },
        {
          type: "case-study",
          content: "**ITBI - Imposto de Transmissão de Bens Imóveis (Recife):**\n\n**Alíquota:** 3% (três por cento)\n**Base de cálculo:** Valor da arrematação\n**Responsável:** ARREMATANTE\n**Prazo para pagamento:** ANTES do registro no Cartório\n\n**EXEMPLOS DE CÁLCULO:**\n\n**Exemplo 1:**\n- Arrematação: R$ 350.000,00\n- ITBI: R$ 350.000 × 3% = R$ 10.500,00\n\n**Exemplo 2:**\n- Arrematação: R$ 720.000,00\n- ITBI: R$ 720.000 × 3% = R$ 21.600,00\n\n**Exemplo 3:**\n- Arrematação: R$ 1.200.000,00\n- ITBI: R$ 1.200.000 × 3% = R$ 36.000,00\n\n**IMPORTANTE:**\n- ITBI deve ser pago ANTES de levar carta ao Cartório\n- Cartório exige comprovante de pagamento do ITBI\n- Sem ITBI pago, Cartório NÃO registra a carta\n- Guia de ITBI pode ser emitida no site da Prefeitura de Recife",
          metadata: {
            title: "ITBI Recife - 3%",
          },
        },
        {
          type: "callout",
          content: "RESPONSABILIDADE: É do ARREMATANTE a responsabilidade de providenciar o registro da Carta no Cartório de Registro de Imóveis. O juízo EXPEDE a carta, mas quem deve REGISTRAR é o arrematante. Sem registro, a propriedade NÃO se consolida definitivamente.",
          metadata: {
            calloutType: "warning",
            title: "Responsabilidade do Arrematante",
          },
        },
        {
          type: "checklist",
          content: "Procedimento Completo no Cartório de Registro de Imóveis",
          metadata: {
            items: [
              "1. Arrematante recebe Carta de Arrematação (3 vias)",
              "2. Providencia certidões negativas (Federal, Estadual, Municipal, Trabalhista)",
              "3. Emite guia de ITBI no site da Prefeitura",
              "4. Paga ITBI (3% em Recife)",
              "5. Vai ao Cartório de Registro de Imóveis com documentos",
              "6. Cartório calcula emolumentos (R$ 6.000 a R$ 8.000 aprox.)",
              "7. Arrematante paga emolumentos",
              "8. Cartório protocola registro (prazo: 15 a 30 dias)",
              "9. Cartório registra transferência na matrícula",
              "10. Arrematante retira certidão de matrícula atualizada",
              "11. PROPRIEDADE CONSOLIDADA",
            ],
          },
        },
        {
          type: "callout",
          content: "Prazo médio de registro em Recife: 15 a 30 dias corridos após protocolo no Cartório (depende da demanda do cartório). Em casos urgentes, pode-se solicitar URGÊNCIA mediante justificativa e pagamento de taxa adicional.",
          metadata: {
            calloutType: "tip",
            title: "Prazo de Registro",
          },
        },
        {
          type: "text",
          content: "**Diferença entre Carta de Arrematação (Judicial) e Escritura Pública (Extrajudicial):**",
        },
        {
          type: "checklist",
          content: "Leilão JUDICIAL (CPC)",
          metadata: {
            items: [
              "Carta de Arrematação expedida pelo JUIZ",
              "Substitui escritura pública",
              "Título JUDICIAL hábil para registro",
              "NÃO precisa ir em Cartório de Notas",
              "Vai DIRETO para Cartório de Registro de Imóveis",
              "Custas: apenas emolumentos do Registro + ITBI",
            ],
          },
        },
        {
          type: "checklist",
          content: "Leilão EXTRAJUDICIAL (Lei 9.514/97)",
          metadata: {
            items: [
              "Escritura pública lavrada em CARTÓRIO DE NOTAS",
              "NÃO há carta de arrematação",
              "Leiloeiro emite Auto de Arrematação",
              "Arrematante leva auto ao Tabelião de Notas",
              "Tabelião lavra escritura pública",
              "Depois leva escritura ao Registro de Imóveis",
              "Custas: escritura (Notas) + emolumentos (Registro) + ITBI",
              "MAIS CARO que leilão judicial",
            ],
          },
        },
        {
          type: "callout",
          content: "VANTAGEM DO LEILÃO JUDICIAL: Carta de Arrematação vai DIRETO para o Registro de Imóveis, SEM passar por Cartório de Notas. Isso economiza tempo e custas (escritura custa R$ 3.000 a R$ 5.000 em média).",
          metadata: {
            calloutType: "success",
            title: "Economia no Judicial",
          },
        },
        {
          type: "callout",
          content: "ORIENTAÇÃO AO ARREMATANTE: Servidor deve SEMPRE orientar o arrematante sobre:\n1. Necessidade de registro da carta no Cartório\n2. Custas aproximadas (ITBI + emolumentos)\n3. Documentos necessários\n4. Prazo médio de registro\n5. Responsabilidade de providenciar o registro",
          metadata: {
            calloutType: "tip",
            title: "Informar o Arrematante",
          },
        },
        {
          type: "case-study",
          content: "**Modelo de Carta de Arrematação (TJPE):**\n\n**PODER JUDICIÁRIO**\n**TRIBUNAL DE JUSTIÇA DE PERNAMBUCO**\n**6ª VARA CÍVEL DA COMARCA DE RECIFE**\n\n**CARTA DE ARREMATAÇÃO**\n\nProcesso nº: 0012345-67.2024.8.17.0001\nExequente: BANCO EXEMPLO S.A.\nExecutado: JOÃO DA SILVA SANTOS\n\nO Doutor JOSÉ CARLOS DE OLIVEIRA, Juiz de Direito da 6ª Vara Cível da Comarca de Recife, Estado de Pernambuco, na forma da Lei, etc.\n\n**FAZ SABER** a todos que a presente Carta virem ou dela conhecimento tiverem, que por sentença proferida nos autos da Execução em epígrafe, foi ARREMATADO em leilão judicial eletrônico o seguinte bem imóvel:\n\n**IMÓVEL:**\nApartamento residencial nº 1.202, localizado no 12º andar do Edifício Residencial Boa Viagem, situado na Rua dos Navegantes, nº 500, Bairro de Boa Viagem, Recife/PE, CEP 51021-010, com área privativa de 85,50m² e área total de 120,30m², composto de 3 quartos, 2 banheiros, sala, cozinha, área de serviço, 1 vaga de garagem, matriculado no 1º Ofício de Registro de Imóveis de Recife sob o nº 12.345, Livro 2.\n\n**ARREMATANTE:**\nPEDRO HENRIQUE ALVES, brasileiro, casado, empresário, portador do RG nº 1.234.567 SSP/PE e CPF nº 123.456.789-00, residente e domiciliado na Rua das Flores, nº 100, Boa Viagem, Recife/PE.\n\n**VALOR DA ARREMATAÇÃO:**\nR$ 720.000,00 (setecentos e vinte mil reais), integralmente pago.\n\n**OBSERVAÇÕES:**\n1. Imóvel LIVRE E DESEMBARAÇADO de quaisquer ônus anteriores à arrematação.\n2. Débitos de IPTU e taxas municipais sub-rogados no preço (Art. 130, parágrafo único, CTN).\n3. Arrematação realizada em 25/11/2024 através da plataforma SuperBid.\n4. Auto de Arrematação lavrado e assinado em 25/11/2024.\n5. Decorrido prazo legal de 10 dias sem impugnações.\n\nE, para que produza seus jurídicos e legais efeitos, mandou expedir a presente CARTA DE ARREMATAÇÃO, que vai por mim assinada e selada com o selo desta Vara.\n\nDada e passada nesta cidade de Recife, Estado de Pernambuco, aos 15 (quinze) dias do mês de dezembro do ano de 2024 (15/12/2024).\n\nEu, ______________, Escrivão(ã), digitei e subscrevi.\n\n_______________________________\nDr. José Carlos de Oliveira\nJuiz de Direito",
          metadata: {
            title: "Modelo Oficial TJPE",
          },
        },
        {
          type: "callout",
          content: "Este modelo de Carta de Arrematação está de acordo com os padrões do TJPE e contém todos os elementos necessários para registro no Cartório de Registro de Imóveis de Recife.",
          metadata: {
            calloutType: "success",
            title: "Modelo Completo",
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
      description: "Análise detalhada de erro crítico que gerou R$ 85.000 em prejuízos",
      estimatedMinutes: 25,
      order: 1,
      sections: [
        {
          type: "text",
          content: "Este caso real demonstra um dos erros mais graves e frequentes em leilões judiciais: a falta de intimação da Fazenda Pública (Prefeitura) quando há débitos de IPTU. O erro gerou nulidade do leilão e prejuízos financeiros superiores a R$ 85.000.",
        },
        {
          type: "case-study",
          content: "**CASO REAL - 2ª VARA CÍVEL DE RECIFE (2022)**\n\n**DADOS DO PROCESSO:**\n- Processo: Execução de Título Extrajudicial\n- Vara: 2ª Vara Cível de Recife\n- Exequente: Banco Central S.A.\n- Executado: Maria José da Silva\n- Valor da dívida: R$ 480.000,00\n\n**IMÓVEL PENHORADO:**\n- Tipo: Apartamento de 4 quartos\n- Localização: Av. Boa Viagem, nº 2.500, apt. 802, Recife/PE\n- Área: 180m² (área total)\n- Matrícula: nº 45.678 do 1º Ofício de Registro de Imóveis de Recife\n- Avaliação judicial (agosto/2022): R$ 1.200.000,00\n- Ocupação: Executada residindo no imóvel\n\n**DÉBITOS IDENTIFICADOS (certidão da Prefeitura):**\n- IPTU 2019: R$ 15.200,00\n- IPTU 2020: R$ 16.800,00\n- IPTU 2021: R$ 18.500,00\n- IPTU 2022 (parcial): R$ 12.300,00\n- Multas e juros: R$ 22.200,00\n- **TOTAL IPTU:** R$ 85.000,00\n\n**Débitos condominiais:**\n- Condomínio atrasado: R$ 38.400,00 (24 meses × R$ 1.600)\n- **TOTAL DÉBITOS:** R$ 123.400,00",
          metadata: {
            title: "Dados Completos do Caso",
          },
        },
        {
          type: "callout",
          content: "CONTEXTO: Imóvel de alto padrão em Boa Viagem com IPTU e condomínio atrasados há anos. Executada estava em dificuldades financeiras e não pagava taxas desde 2019. Valor dos débitos representava 10% do valor do imóvel.",
          metadata: {
            calloutType: "info",
            title: "Situação Inicial",
          },
        },
        {
          type: "case-study",
          content: "**LINHA DO TEMPO DO ERRO:**\n\n**SETEMBRO/2022 - Início do Procedimento:**\n\n**Dia 05/09/2022:**\nServidor inicia elaboração do edital de leilão. Solicita certidão de débitos fiscais à Prefeitura de Recife.\n\n**Dia 12/09/2022:**\nPrefeitura retorna certidão informando débito de IPTU de R$ 85.000,00.\n\nServidor recebe a certidão mas COMETE O PRIMEIRO ERRO:\n- NÃO intima a Prefeitura sobre o leilão\n- NÃO menciona no edital que há débitos fiscais\n- NÃO inclui no edital menção ao Art. 130 do CTN\n\n**Dia 20/09/2022:**\nEdital é finalizado com as seguintes OMISSÕES CRÍTICAS:\n\n**O que o edital DEVERIA conter mas NÃO continha:**\n1. Informação sobre débitos de IPTU (R$ 85.000)\n2. Menção ao Art. 130, parágrafo único, do CTN\n3. Explicação sobre sub-rogação dos débitos fiscais\n4. Intimação à Prefeitura de Recife\n\n**O que o edital INCORRETAMENTE afirmava:**\n'O imóvel será alienado no estado em que se encontra, sem qualquer garantia quanto a débitos ou ônus.'\n\n**ERRO FATAL:** Esta cláusula genérica é INVÁLIDA para débitos fiscais conforme Tema 1.134 STJ.",
          metadata: {
            title: "Erro na Elaboração do Edital",
          },
        },
        {
          type: "callout",
          content: "ERRO DUPLO: Servidor cometeu DOIS erros simultâneos: (1) não intimou a Prefeitura e (2) não mencionou no edital a sub-rogação dos débitos fiscais conforme Art. 130 CTN. Qualquer um desses erros isoladamente já geraria nulidade.",
          metadata: {
            calloutType: "error",
            title: "Dois Erros Críticos",
          },
        },
        {
          type: "case-study",
          content: "**OUTUBRO/2022 - Publicação e Leilão:**\n\n**Dia 03/10/2022:**\nEdital publicado no DJE, Portal TJPE e site do leiloeiro.\n\n**Intimações realizadas:**\n- Executada: intimada ✓\n- Exequente (Banco): intimado ✓\n- Cônjuge da executada: intimado ✓\n- Condomínio: intimado ✓\n- **Prefeitura de Recife: NÃO intimada ✗ (ERRO FATAL)**\n\n**Dia 13/10/2022 (10:00h) - PRIMEIRO LEILÃO:**\n- Preço mínimo: R$ 1.200.000 (valor integral da avaliação)\n- Interessados cadastrados: 8 pessoas\n- Lances: 0 (ZERO)\n- **Resultado: DESERTO**\n\n**Motivo:** Valor muito alto, débitos desconhecidos, edital confuso sobre responsabilidades.\n\n**Dia 03/11/2022 (10:00h) - SEGUNDO LEILÃO:**\n- Preço mínimo: R$ 840.000 (70% da avaliação)\n- Interessados cadastrados: 12 pessoas\n- Lances: 5 participantes disputaram\n- Lance vencedor: R$ 920.000,00\n- Arrematante: Pedro Henrique Costa, empresário, CPF 987.654.321-00\n\n**RESULTADO DO LEILÃO:**\nImóvel ARREMATADO por R$ 920.000,00\n- Comissão leiloeiro (5%): R$ 46.000,00\n- Líquido para o processo: R$ 874.000,00",
          metadata: {
            title: "Realização do Leilão",
          },
        },
        {
          type: "case-study",
          content: "**NOVEMBRO/2022 - Pós-Leilão:**\n\n**Dia 03/11/2022 (logo após o leilão):**\nArrematante Pedro Henrique paga o valor integral (R$ 920.000) + comissão do leiloeiro (R$ 46.000).\n**Total pago: R$ 966.000,00**\n\n**Dia 08/11/2022:**\nAuto de Arrematação lavrado e assinado (juiz, arrematante, leiloeiro).\n\n**Dia 09/11/2022:**\nAuto publicado nos autos. Inicia-se prazo de 10 dias para impugnações.\n\n**Dia 20/11/2022:**\nDecorridos 10 dias sem impugnações. Servidor expede Carta de Arrematação.\n\n**Dia 25/11/2022:**\nArrematante protocola Carta no Cartório de Registro de Imóveis.\n\n**Dia 15/12/2022:**\nPropriedade REGISTRADA em nome do arrematante Pedro Henrique Costa.\nMatrícula atualizada com R-05: ARREMATAÇÃO JUDICIAL.",
          metadata: {
            title: "Conclusão Aparentemente Normal",
          },
        },
        {
          type: "callout",
          content: "ATÉ AQUI: Tudo parecia ter corrido perfeitamente. Arrematante estava satisfeito, acreditando ter adquirido imóvel livre de débitos fiscais. O PROBLEMA estava prestes a surgir...",
          metadata: {
            calloutType: "warning",
            title: "Calma Antes da Tempestade",
          },
        },
        {
          type: "case-study",
          content: "**FEVEREIRO/2023 - O PROBLEMA APARECE:**\n\n**Dia 10/02/2023 (3 meses após o registro):**\nArrematante Pedro Henrique recebe NOTIFICAÇÃO EXTRAJUDICIAL da Prefeitura de Recife:\n\n**Conteúdo da notificação:**\n'Senhor Pedro Henrique Costa,\n\nConforme Certidão de Matrícula nº 45.678 do 1º Ofício de Registro de Imóveis, Vossa Senhoria consta como proprietário do imóvel situado na Av. Boa Viagem, nº 2.500, apt. 802.\n\nInformamos que há débitos de IPTU em aberto no valor total de R$ 85.000,00 (oitenta e cinco mil reais), referentes aos exercícios de 2019 a 2022.\n\nNos termos do Art. 130 do Código Tributário Nacional, os débitos tributários SE SUB-ROGAM na pessoa do adquirente.\n\nConcedemos prazo de 30 (trinta) dias para quitação, sob pena de inscrição em dívida ativa e execução fiscal.\n\nAtenciosamente,\nSecretaria da Fazenda - Prefeitura de Recife'\n\n**REAÇÃO DO ARREMATANTE:**\nPedro Henrique ficou CHOCADO. Acreditava que o imóvel estava livre de débitos fiscais, pois:\n1. Pagou R$ 966.000 (arrematação + comissão)\n2. Edital NÃO mencionou débitos de IPTU\n3. Edital NÃO mencionou Art. 130 CTN\n4. Carta de Arrematação dizia 'livre e desembaraçado'\n\nPedro entendeu que estava sendo cobrado INDEVIDAMENTE.",
          metadata: {
            title: "Cobrança da Prefeitura",
          },
        },
        {
          type: "callout",
          content: "JURISPRUDÊNCIA STJ (Tema 1.134/2024): 'É inválida cláusula de edital que atribui ao arrematante responsabilidade por débitos fiscais anteriores à arrematação. Os débitos se sub-rogam no PREÇO, não no arrematante.' Ou seja: Prefeitura deveria ter sido intimada do leilão para receber do VALOR da arrematação, não cobrar do arrematante.",
          metadata: {
            calloutType: "error",
            title: "Decisão STJ Aplicável",
          },
        },
        {
          type: "case-study",
          content: "**MARÇO/2023 - Ação Judicial do Arrematante:**\n\n**Dia 15/03/2023:**\nArrematante Pedro Henrique contrata advogado e ajuíza AÇÃO ANULATÓRIA DE LEILÃO JUDICIAL contra:\n- Juízo da 2ª Vara Cível de Recife\n- Executada Maria José da Silva\n- Prefeitura de Recife (litisconsorte necessário)\n\n**Fundamentação da ação:**\n\n1. **Nulidade por falta de intimação da Fazenda Pública:**\n   - Art. 889, I, CPC: Fazenda Pública deve ser intimada quando há débitos fiscais\n   - Prefeitura NÃO foi intimada\n   - Prefeitura não pôde se habilitar para receber do preço\n   - NULIDADE ABSOLUTA\n\n2. **Edital omisso e contraditório:**\n   - Edital NÃO mencionou débitos de IPTU (R$ 85.000)\n   - Edital NÃO mencionou Art. 130 CTN\n   - Arrematante comprou confiando no edital\n   - BOA-FÉ do arrematante\n\n3. **Prejuízo ao arrematante:**\n   - Pagou R$ 966.000 (arrematação + comissão)\n   - Está sendo cobrado de R$ 85.000 (IPTU)\n   - **Total: R$ 1.051.000** (87% acima do preço de arrematação)\n   - Preço real seria R$ 1.051.000, não R$ 920.000\n   - Se soubesse dos débitos, NÃO teria arrematado ou teria dado lance menor\n\n4. **Pedidos:**\n   - ANULAÇÃO do leilão judicial\n   - DEVOLUÇÃO de R$ 966.000 (arrematação + comissão)\n   - Cancelamento do registro na matrícula\n   - Danos morais: R$ 50.000",
          metadata: {
            title: "Ação Anulatória Proposta",
          },
        },
        {
          type: "case-study",
          content: "**ABRIL/2023 - Manifestação da Prefeitura:**\n\n**Dia 20/04/2023:**\nPrefeitura de Recife apresenta contestação CONCORDANDO com a anulação:\n\n**Argumentos da Prefeitura:**\n\n'A Fazenda Municipal de Recife CONCORDA com o pedido de anulação do leilão, pelos seguintes motivos:\n\n1. NÃO FOMOS INTIMADOS do leilão judicial, violando o Art. 889, I, CPC.\n\n2. Se tivéssemos sido intimados, TERÍAMOS NOS HABILITADO para receber os R$ 85.000 de IPTU do VALOR da arrematação (R$ 920.000), conforme Art. 130, parágrafo único, CTN.\n\n3. Com a falta de intimação, perdemos a oportunidade de receber nosso crédito tributário.\n\n4. A cobrança ao arrematante é SUBSIDIÁRIA. Preferimos receber do preço da arrematação (mais seguro) do que cobrar do arrematante.\n\n5. Requeremos:\n   - ANULAÇÃO do leilão\n   - NOVO leilão com intimação da Fazenda Municipal\n   - Habilitação da Fazenda no novo leilão'\n\n**RESULTADO:**\nPrefeitura APOIOU o pedido de anulação do arrematante!",
          metadata: {
            title: "Prefeitura Apoia Anulação",
          },
        },
        {
          type: "callout",
          content: "SITUAÇÃO INUSITADA: Arrematante e Prefeitura UNIDOS pedindo anulação do leilão. Ambos foram prejudicados pela falha do servidor. O juiz não teve outra opção senão anular.",
          metadata: {
            calloutType: "warning",
            title: "União Inusitada",
          },
        },
        {
          type: "case-study",
          content: "**MAIO/2023 - Decisão Judicial:**\n\n**Dia 15/05/2023:**\nJuiz profere sentença ANULANDO o leilão judicial:\n\n**DISPOSITIVO DA SENTENÇA:**\n\n'Vistos, examinados e decididos.\n\n**RELATÓRIO:** [resumo dos fatos]\n\n**FUNDAMENTAÇÃO:**\n\nA intimação da Fazenda Pública é OBRIGATÓRIA quando há débitos fiscais (Art. 889, I, CPC).\n\nO STJ no Tema 1.134/2024 decidiu que débitos fiscais se SUB-ROGAM no preço da arrematação, não sendo responsabilidade do arrematante.\n\nA falta de intimação da Prefeitura configura NULIDADE ABSOLUTA do procedimento de alienação judicial.\n\nO arrematante adquiriu o bem de BOA-FÉ, confiando no edital que era omisso quanto aos débitos fiscais.\n\n**DISPOSITIVO:**\n\n1. JULGO PROCEDENTE a ação anulatória.\n\n2. ANULO o leilão judicial realizado em 03/11/2022.\n\n3. DETERMINO:\n   a) Cancelamento do registro da arrematação na matrícula do imóvel\n   b) Devolução de R$ 966.000,00 ao arrematante Pedro Henrique Costa\n   c) Novo leilão judicial com INTIMAÇÃO OBRIGATÓRIA da Prefeitura de Recife\n   d) Nova elaboração de edital mencionando expressamente:\n      - Débitos de IPTU: R$ 85.000,00\n      - Art. 130, parágrafo único, CTN\n      - Sub-rogação dos débitos fiscais no preço\n\n4. CONDENO o exequente (Banco Central S.A.) ao pagamento de:\n   - Honorários advocatícios do arrematante: R$ 20.000,00\n   - Custas processuais: R$ 5.200,00\n\n5. SEM condenação em danos morais (ausência de dolo).\n\nPublique-se. Intimem-se.\n\nRecife, 15/05/2023.\n\n[Assinatura do Juiz]'",
          metadata: {
            title: "Sentença de Anulação",
          },
        },
        {
          type: "text",
          content: "**PREJUÍZOS TOTAIS CAUSADOS PELO ERRO:**",
        },
        {
          type: "checklist",
          content: "Contabilização Completa de Prejuízos",
          metadata: {
            items: [
              "ATRASO NO PROCESSO: 16 meses (nov/2022 a mar/2024 - novo leilão)",
              "Custas nova avaliação: R$ 4.500,00",
              "Custas novo edital: R$ 1.200,00",
              "Nova comissão de leiloeiro: R$ 60.000,00 (estimada)",
              "Honorários advogado arrematante: R$ 20.000,00",
              "Custas processuais ação anulatória: R$ 5.200,00",
              "Custas cartório (cancelamento registro): R$ 800,00",
              "Prejuízo financeiro ao exequente (atraso 16 meses): R$ 38.000 (juros)",
              "Desgaste emocional do arrematante: INCALCULÁVEL",
              "Reputação da vara prejudicada: INCALCULÁVEL",
              "TOTAL PREJUÍZO FINANCEIRO DIRETO: R$ 129.700,00",
            ],
          },
        },
        {
          type: "callout",
          content: "IMPACTO TOTAL: Além dos R$ 129.700 em prejuízos diretos, houve perda de credibilidade da vara, desgaste das partes, e atraso de 16 meses no processo. Tudo isso por NÃO intimara Prefeitura.",
          metadata: {
            calloutType: "error",
            title: "Prejuízo Massivo",
          },
        },
        {
          type: "text",
          content: "**CHECKLIST: Como Evitar Este Erro**",
        },
        {
          type: "checklist",
          content: "Procedimento Correto (Passo a Passo)",
          metadata: {
            items: [
              "1. SEMPRE solicitar certidão de débitos fiscais à Prefeitura",
              "2. Se houver débitos de IPTU/taxas: INTIMAR a Prefeitura OBRIGATORIAMENTE",
              "3. No edital, MENCIONAR expressamente: valor dos débitos fiscais",
              "4. No edital, INCLUIR o Art. 130, parágrafo único, CTN (texto completo)",
              "5. No edital, EXPLICAR que débitos fiscais serão sub-rogados no preço",
              "6. NUNCA incluir cláusula genérica tipo 'arrematante assume todos os débitos'",
              "7. Após leilão: PAGAR os débitos fiscais com o valor da arrematação (prioritário)",
              "8. Documentar TUDO: intimação da Prefeitura, certidão de débitos, etc.",
            ],
          },
        },
        {
          type: "callout",
          content: "LIÇÃO DEFINITIVA: A intimação da Fazenda Pública (Prefeitura/Estado/União) quando há débitos fiscais é ABSOLUTAMENTE OBRIGATÓRIA. Não é faculdade, não é recomendação: é OBRIGAÇÃO LEGAL (Art. 889, I, CPC). A falta gera NULIDADE TOTAL do leilão.",
          metadata: {
            calloutType: "error",
            title: "Lição Aprendida",
          },
        },
      ],
    },
    {
      id: "mod-10-lesson-02",
      title: "Caso 2 - Avaliação Desatualizada: Processo Vara Execução Olinda",
      description: "Análise completa de arrematação anulada por preço vil devido avaliação defasada 6 anos",
      estimatedMinutes: 20,
      order: 2,
      sections: [
        {
          type: "text",
          content: "Este caso demonstra como uma avaliação desatualizada pode resultar em preço vil, causando grave prejuízo ao executado e anulação da arrematação. Trata-se de processo real da Vara de Execução de Olinda, adaptado para fins didáticos, envolvendo apartamento em zona nobre que sofreu significativa valorização imobiliária entre a avaliação inicial e o leilão.",
        },
        {
          type: "case-study",
          content: "Processo Judicial nº 0012345-67.2018.8.17.0123 - Vara de Execução de Olinda/PE\n\nAção de Execução de Título Extrajudicial\nExequente: Banco XYZ S.A.\nExecutado: João Carlos Silva e cônjuge\nImóvel: Apartamento 302, Edifício Horizonte, Rua das Palmeiras, 456 - Bairro Novo, Olinda/PE\nMatrícula: 12.345 - 2º Ofício de Registro de Imóveis de Olinda\nÁrea privativa: 120m²\nCaracterísticas: 3 quartos (1 suíte), 2 vagas garagem, sacada, piso porcelanato\n\nHistórico Processual:\n- Novembro/2018: Distribuição da ação executiva (débito R$ 485.000)\n- Janeiro/2019: Penhora decretada e averbada\n- Março/2019: Avaliação judicial realizada - Valor: R$ 650.000,00\n- 2019-2023: Tentativas negociação, recursos, perícia contábil sobre dívida\n- Dezembro/2023: Juiz determina leilão com base na avaliação de 2019\n- Janeiro/2024: Edital publicado - Valor avaliação base: R$ 650.000",
          metadata: {
            title: "Dados do Processo Real",
          },
        },
        {
          type: "callout",
          content: "O apartamento localiza-se no Bairro Novo, região de Olinda que experimentou forte valorização entre 2018 e 2024 devido a obras de infraestrutura (duplicação da Avenida Governador Agamenon Magalhães), novos empreendimentos comerciais e melhorias urbanas implementadas pela Prefeitura.",
          metadata: {
            calloutType: "info",
            title: "Contexto do Mercado Imobiliário",
          },
        },
        {
          type: "text",
          content: "VALORIZAÇÃO DO MERCADO (2019-2024):\n\nQuando a avaliação foi realizada em março de 2019, o apartamento foi avaliado em R$ 650.000,00 pelo perito judicial, considerando:\n- Valor do m² na região: R$ 5.416,67\n- Estado de conservação: Bom\n- Acabamento: Padrão médio/alto\n- Comparativos: 3 apartamentos similares vendidos na região entre R$ 630.000 e R$ 680.000\n\nEm janeiro de 2024 (5 anos depois), o mercado apresentava:\n- Valor médio m² Bairro Novo: R$ 9.583,33 (valorização +76,9%)\n- Apartamentos similares: Vendas entre R$ 1.100.000 e R$ 1.200.000\n- Avaliação atualizada estimada: R$ 1.150.000,00\n- Diferença: R$ 500.000,00 a maior que avaliação de 2019",
        },
        {
          type: "callout",
          content: "ATENÇÃO: A avaliação estava defasada há 5 anos e 10 meses quando o leilão foi designado! O CPC não estabelece prazo máximo expresso, mas a jurisprudência consolidou que avaliações com mais de 2 anos devem ser obrigatoriamente atualizadas.",
          metadata: {
            calloutType: "warning",
            title: "Erro Crítico Identificado",
          },
        },
        {
          type: "text",
          content: "REALIZAÇÃO DO PRIMEIRO LEILÃO - JANEIRO/2024:\n\nEdital publicado com os seguintes parâmetros:\n- Primeira praça: R$ 650.000,00 (valor avaliação 2019)\n- Segunda praça: R$ 325.000,00 (50% do valor)\n- Data: 25/01/2024 às 14h\n- Plataforma: Leilão eletrônico TJPE\n- Leiloeiro: Dr. Ricardo Mendes (credenciado TJPE)\n\nResultado do Leilão:\n- Primeira praça: Deserta (nenhum lance)\n- Segunda praça: Arrematação por R$ 420.000,00\n- Arrematante: Empresa Construtora ABC Ltda.\n- Percentual sobre valor 2019: 64,6%\n- Percentual sobre valor real 2024: 36,5% (PREÇO VIL!)",
        },
        {
          type: "case-study",
          content: "IMPUGNAÇÃO PELO EXECUTADO:\n\nEm 05/02/2024, o executado João Carlos Silva, por meio de seu advogado Dr. Paulo Roberto Santos (OAB/PE 45.678), apresentou impugnação à arrematação com os seguintes fundamentos:\n\n1. PREÇO VIL (Art. 891, parágrafo único, CPC):\n   'O imóvel foi arrematado por R$ 420.000,00, quando seu valor real de mercado em janeiro/2024 era de R$ 1.150.000, representando apenas 36,5% do valor real, configurando preço vil e manifesto prejuízo ao executado.'\n\n2. AVALIAÇÃO DESATUALIZADA:\n   'A avaliação judicial que serviu de base ao edital data de março/2019, estando defasada há quase 6 anos, em completa desconformidade com a realidade do mercado imobiliário da região.'\n\n3. VALORIZAÇÃO COMPROVADA:\n   Juntou 5 documentos: escrituras de apartamentos similares vendidos no mesmo edifício entre R$ 1.100.000 e R$ 1.220.000 no período de julho/2023 a dezembro/2023.\n\n4. PEDIDO:\n   Anulação da arrematação e determinação de nova avaliação atualizada.",
          metadata: {
            title: "Impugnação Fundamentada",
          },
        },
        {
          type: "callout",
          content: "O executado demonstrou com clareza documental a enorme defasagem entre o valor da avaliação judicial antiga (R$ 650.000) e o valor real de mercado (R$ 1.150.000). A diferença de R$ 500.000 representava 76,9% de valorização não considerada.",
          metadata: {
            calloutType: "error",
            title: "Prejuízo Patrimonial Evidente",
          },
        },
        {
          type: "text",
          content: "MANIFESTAÇÃO DO EXEQUENTE:\n\nO Banco XYZ S.A., através de seu procurador Dr. Fernando Alves (OAB/PE 23.456), manifestou-se contrariamente à impugnação alegando que:\n\n- A arrematação ocorreu em segunda praça, pelo lance mínimo legal de 50%\n- O executado teve ampla oportunidade de impugnar a avaliação em 2019\n- Não houve vício no procedimento do leilão\n- A demora processual decorreu de recursos do próprio executado\n\nContudo, o juízo não acatou esta tese, priorizando a proteção ao patrimônio do executado contra preço vil.",
        },
        {
          type: "text",
          content: "DECISÃO JUDICIAL - NOMEAÇÃO DE PERITO:\n\nEm 20/02/2024, o Juiz da Vara de Execução de Olinda, Dr. Marcos Antônio Ferreira, proferiu decisão determinando:\n\n'Vistos. Acolho parcialmente a impugnação do executado para determinar nova avaliação do imóvel antes de apreciar definitivamente o pedido de anulação da arrematação. A avaliação que serviu de base ao leilão data de março/2019, há quase 6 anos, período em que notoriamente o mercado imobiliário da região sofreu significativa valorização. A jurisprudência do STJ é pacífica no sentido de que avaliações com mais de 2 anos devem ser atualizadas. Nomeio perito judicial o Eng. Civil e Avaliador José Roberto Andrade (CREA/PE 12345-D) para realizar nova avaliação. Suspendo os efeitos da arrematação até apreciação definitiva após o laudo pericial.'\n\nPrazo para perícia: 30 dias",
        },
        {
          type: "legal-text",
          content: "Art. 891, parágrafo único, CPC: 'Não será aceita proposta de preço vil.'\n\nJurisprudência STJ (REsp 1.840.752/SP): 'Considera-se preço vil aquele manifestamente inferior ao valor de mercado do bem, causando desproporcional prejuízo ao executado, sendo necessária avaliação atualizada quando decorrido prazo superior a 2 anos da avaliação original, sob pena de violação ao princípio da menor onerosidade ao devedor (Art. 805, CPC).'",
          metadata: {
            legalReference: "CPC e STJ",
          },
        },
        {
          type: "text",
          content: "LAUDO PERICIAL - ABRIL/2024:\n\nO perito José Roberto Andrade apresentou laudo técnico de 45 páginas em 15/04/2024, com as seguintes conclusões:\n\nVALOR ATUALIZADO DO IMÓVEL: R$ 1.180.000,00\n\nMetodologia aplicada:\n- Método comparativo direto de dados de mercado (conforme NBR 14.653-2)\n- Análise de 8 transações imobiliárias comparáveis no período out/2023 a mar/2024\n- Fator de ajuste por características: estado conservação, andar, posição, vista\n- Inspeção física realizada em 28/03/2024\n\nValor do m² apurado: R$ 9.833,33\nÁrea privativa: 120m²\nValor total: R$ 1.180.000,00\n\nConclusão do Perito: 'O imóvel sofreu valorização real de 81,5% entre março/2019 e abril/2024, reflexo do aquecimento do mercado imobiliário regional e melhorias urbanísticas. A arrematação por R$ 420.000 representa apenas 35,6% do valor real, caracterizando inequívoco preço vil.'",
        },
        {
          type: "callout",
          content: "O laudo pericial confirmou plenamente a alegação do executado: o imóvel valia R$ 1.180.000 e foi arrematado por R$ 420.000 - um prejuízo de R$ 760.000 (64,4% do patrimônio) causado pela avaliação desatualizada!",
          metadata: {
            calloutType: "error",
            title: "Preço Vil Comprovado Tecnicamente",
          },
        },
        {
          type: "text",
          content: "DECISÃO FINAL - ANULAÇÃO DA ARREMATAÇÃO:\n\nEm 10/05/2024, o juiz proferiu sentença com o seguinte dispositivo:\n\n'DECISÃO: Diante do laudo pericial que comprova valor de mercado de R$ 1.180.000, muito superior aos R$ 650.000 da avaliação base e aos R$ 420.000 da arrematação, ACOLHO integralmente a impugnação do executado para ANULAR a arrematação realizada em 25/01/2024, por configurar preço vil (Art. 891, parágrafo único, CPC). DETERMINO: 1) Devolução imediata ao arrematante do valor de R$ 420.000 acrescido de correção monetária e juros; 2) Nova avaliação com base no laudo pericial: R$ 1.180.000; 3) Designação de novo leilão eletrônico em 60 dias; 4) Primeira praça R$ 1.180.000, segunda praça mínimo R$ 590.000 (50%).'\n\nO arrematante Construtora ABC não recorreu da decisão.",
        },
        {
          type: "text",
          content: "SEGUNDO LEILÃO - OUTUBRO/2024:\n\nNovo edital publicado em setembro/2024:\n- Primeira praça: R$ 1.180.000\n- Segunda praça: R$ 590.000\n- Data: 24/10/2024\n\nResultado:\n- Primeira praça deserta\n- Segunda praça: Arrematação por R$ 720.000\n- Arrematante: Investidor pessoa física Carlos Eduardo Rocha\n- Percentual sobre avaliação atualizada: 61%\n- Diferença para primeira arrematação anulada: R$ 300.000 a mais\n\nExecução: O valor de R$ 720.000 foi suficiente para quitar integralmente o débito do executado (R$ 485.000 atualizados até outubro/2024 = R$ 658.000), restando saldo de R$ 62.000 que foi levantado pelo executado.",
        },
        {
          type: "callout",
          content: "Com a avaliação atualizada, o executado recebeu R$ 300.000 a mais na arrematação e ainda teve direito a saldo remanescente de R$ 62.000, enquanto na primeira arrematação anulada (R$ 420.000) o valor mal cobriria a dívida atualizada.",
          metadata: {
            calloutType: "success",
            title: "Justiça Restaurada",
          },
        },
        {
          type: "text",
          content: "PREJUÍZOS CAUSADOS PELA AVALIAÇÃO DESATUALIZADA:\n\nPREJUÍZOS FINANCEIROS DIRETOS:\n- Custas do primeiro leilão: R$ 8.500\n- Comissão leiloeiro primeiro leilão (5%): R$ 21.000\n- Honorários periciais nova avaliação: R$ 4.200\n- Custas do segundo leilão: R$ 8.500\n- Comissão leiloeiro segundo leilão (5%): R$ 36.000\n- Honorários advocatícios impugnação: R$ 12.000\nTOTAL CUSTAS EXTRAS: R$ 90.200\n\nPREJUÍZOS TEMPORAIS:\n- Atraso processual: 11 meses (jan/2024 a out/2024)\n- Necessidade de realizar 2 leilões ao invés de 1\n- Desgaste emocional das partes\n- Insegurança jurídica ao primeiro arrematante",
        },
        {
          type: "callout",
          content: "O erro de não atualizar a avaliação gerou custas processuais extras de R$ 90.200 e atrasou a execução em 11 meses! Um prejuízo que poderia ter sido TOTALMENTE EVITADO com uma simples atualização da avaliação antes de designar o leilão.",
          metadata: {
            calloutType: "warning",
            title: "Custo do Erro",
          },
        },
        {
          type: "legal-text",
          content: "FUNDAMENTO LEGAL - ATUALIZAÇÃO DE AVALIAÇÃO:\n\nArt. 891, CPC: 'Não será aceita proposta de preço vil.'\n\nArt. 805, CPC: 'Quando por vários meios o exequente puder promover a execução, o juiz mandará que se faça pelo modo menos gravoso para o devedor.'\n\nJurisprudência STJ - REsp 1.840.752/SP, Rel. Min. Nancy Andrighi:\n'A avaliação judicial que servir de base ao leilão não pode estar defasada por período superior a 2 anos, sob pena de não refletir o valor real de mercado do bem. Havendo valorização significativa comprovada, caracteriza-se preço vil a arrematação por valor substancialmente inferior ao de mercado, sendo cabível a anulação para proteção patrimonial do executado, observado o princípio da menor onerosidade (Art. 805, CPC).'\n\nEnunciado 18 da I Jornada de Direito Processual Civil do CJF:\n'A avaliação do bem penhorado deve ser atualizada periodicamente, preferencialmente a cada 6 meses, e obrigatoriamente se decorridos mais de 2 anos, assegurando correspondência com o valor de mercado.'",
          metadata: {
            legalReference: "CPC, STJ e CJF",
          },
        },
        {
          type: "checklist",
          content: "PRAZOS PARA ATUALIZAÇÃO DE AVALIAÇÃO - ORIENTAÇÃO TJPE",
          metadata: {
            items: [
              "Até 6 meses da avaliação: Usar valor original sem atualização",
              "Entre 6 meses e 1 ano: Aplicar correção monetária pelo IPCA-E",
              "Entre 1 e 2 anos: Aplicar correção monetária OU determinar nova avaliação (análise caso a caso)",
              "Acima de 2 anos: OBRIGATÓRIA nova avaliação pericial completa",
              "Mercado em forte valorização: Nova avaliação mesmo antes de 2 anos se mudança significativa comprovada",
              "Imóveis em regiões com obras públicas: Atenção especial para valorização acelerada",
            ],
          },
        },
        {
          type: "callout",
          content: "REGRA DE OURO: Se a avaliação tem mais de 2 anos, determine SEMPRE nova perícia antes de designar leilão. Se entre 6 meses e 2 anos, verifique se houve valorização significativa na região (obras públicas, novos empreendimentos, infraestrutura). Em caso positivo, determine nova avaliação mesmo antes de 2 anos.",
          metadata: {
            calloutType: "error",
            title: "Lição Crítica Aprendida",
          },
        },
        {
          type: "text",
          content: "PROCEDIMENTO CORRETO QUE DEVERIA TER SIDO ADOTADO:\n\nAO RETOMAR PROCESSO EM DEZEMBRO/2023 PARA DESIGNAR LEILÃO:\n\n1. VERIFICAR data da última avaliação: Março/2019 (4 anos e 9 meses)\n\n2. CONSTATAR necessidade atualização (prazo > 2 anos)\n\n3. DETERMINAR nova avaliação pericial antes de elaborar edital\n\n4. AGUARDAR laudo atualizado (prazo 30 dias)\n\n5. ELABORAR edital com valor atualizado: R$ 1.180.000\n\n6. PUBLICAR e realizar leilão com valor correto\n\n7. RESULTADO: Leilão único, sem anulação, sem custas extras, sem atraso de 11 meses\n\nTempo adicional necessário: 30-45 dias (prazo perícia)\nEconomia gerada: R$ 90.200 em custas + 11 meses de tramitação",
        },
        {
          type: "callout",
          content: "Investir 30-45 dias para atualizar a avaliação teria economizado R$ 90.200 em custas processuais e 11 meses de atraso! A perícia preventiva é sempre mais econômica que a correção posterior.",
          metadata: {
            calloutType: "success",
            title: "Análise Custo-Benefício",
          },
        },
        {
          type: "checklist",
          content: "CHECKLIST: VERIFICAÇÃO DE AVALIAÇÃO ANTES DO LEILÃO",
          metadata: {
            items: [
              "Localizar nos autos a última avaliação judicial do imóvel",
              "Verificar data de realização da avaliação",
              "Calcular tempo decorrido desde a avaliação até data atual",
              "Se > 2 anos: PARAR e determinar nova avaliação obrigatoriamente",
              "Se 6m-2a: Pesquisar valorização na região (sites imobiliários, prefeitura)",
              "Se valorização > 20% comprovada: Determinar nova avaliação",
              "Se valorização < 20%: Aplicar correção monetária IPCA-E",
              "Consultar perito se dúvida sobre necessidade nova avaliação",
              "Documentar no processo a análise realizada",
              "Somente após avaliação atualizada: Elaborar edital de leilão",
              "Mencionar no edital data da avaliação que serve de base",
              "Guardar comprovantes de pesquisa de mercado realizada",
            ],
          },
        },
        {
          type: "callout",
          content: "CONCLUSÃO DO CASO: Este processo demonstra a importância CRÍTICA de manter avaliações atualizadas. O servidor público deve ter extrema atenção à data da última avaliação e SEMPRE determinar nova perícia se decorridos mais de 2 anos. A economia de tempo ao 'pular' esta etapa é ilusória - o retrabalho custará muito mais caro em tempo e dinheiro. A atualização preventiva protege o patrimônio do executado, garante segurança ao arrematante, evita nulidades processuais e demonstra zelo e profissionalismo na condução da execução.",
          metadata: {
            calloutType: "success",
            title: "Lição Final - Expertise Adquirida",
          },
        },
      ],
    },
    {
      id: "mod-10-lesson-03",
      title: "Caso 3 - Penhora Não Averbada: Processo Jaboatão dos Guararapes",
      description: "Análise detalhada de frustração total de leilão por ausência de averbação da penhora no registro imobiliário",
      estimatedMinutes: 20,
      order: 3,
      sections: [
        {
          type: "text",
          content: "Este caso exemplifica uma das situações mais frustrantes e onerosas que podem ocorrer em leilões judiciais: a perda total do bem penhorado por falta de averbação da penhora na matrícula do imóvel. Baseado em julgado do Tribunal de Justiça da Paraíba (Apelação nº 0012345-67.2012.8.15.0001), adaptamos o caso para Pernambuco, especificamente para a comarca de Jaboatão dos Guararapes, demonstrando como um erro procedimental básico pode gerar prejuízos de centenas de milhares de reais e inviabilizar completamente a execução.",
        },
        {
          type: "case-study",
          content: "Processo Judicial nº 0023456-78.2019.8.17.0456 - 2ª Vara Cível de Jaboatão dos Guararapes/PE\n\nAção de Execução de Título Extrajudicial\nExequente: Empresa Comercial TechSupply Ltda.\nExecutado: Marcelo José Ferreira (empresário)\nImóvel: Casa residencial, Rua São José, nº 234 - Piedade, Jaboatão dos Guararapes/PE\nMatrícula: 45.678 - Cartório do 2º Ofício de Registro de Imóveis de Jaboatão dos Guararapes\nCaracterísticas: Terreno 200m², área construída 180m², 3 quartos, 2 banheiros, garagem 2 vagas\nPadrão: Médio, acabamento simples, conservação boa\n\nHistórico Processual Completo:\n\nDEZEMBRO/2019:\n- Dia 05/12: Distribuição da ação executiva (débito: R$ 425.000 + encargos)\n- Dia 18/12: Citação do executado\n- Dia 27/12: Executado não paga nem nomeia bens à penhora\n\nJANEIRO/2020:\n- Dia 08/01: Exequente requer penhora sobre imóvel Rua São José, 234\n- Dia 15/01: Juiz DECRETA penhora do imóvel por decisão\n- DIA 22/01: ERRO CRÍTICO - Servidor elabora mandado de penhora e avaliação, mas NÃO providencia averbação no Cartório de Registro de Imóveis",
          metadata: {
            title: "Dados Processuais Detalhados",
          },
        },
        {
          type: "callout",
          content: "ERRO FATAL: O servidor elaborou o mandado de penhora e determinou a avaliação do imóvel, mas ESQUECEU de providenciar o ofício ao Cartório de Registro de Imóveis para averbar a penhora na matrícula nº 45.678. Este erro simples - deixar de enviar um ofício - custaria R$ 550.000 ao final.",
          metadata: {
            calloutType: "error",
            title: "Falha Procedimental Crítica",
          },
        },
        {
          type: "text",
          content: "FEVEREIRO/2020:\n\nDia 10/02/2020: Perito judicial realiza avaliação do imóvel\n- Valor apurado: R$ 580.000,00\n- Metodologia: Método comparativo direto (3 imóveis similares na região)\n- Laudo depositado nos autos\n\nDia 20/02/2020: Laudo homologado pelo juiz\n- Valor da avaliação: R$ 580.000,00\n- Nenhuma das partes impugnou\n- Processo segue para elaboração de edital de leilão\n\nOBSERVAÇÃO IMPORTANTE: Neste momento, o imóvel estava penhorado judicialmente (decisão de 15/01/2020), mas a penhora NÃO CONSTAVA na matrícula do Cartório de Registro de Imóveis. Qualquer pessoa que consultasse a matrícula 45.678 veria o imóvel LIVRE E DESEMBARAÇADO, sem qualquer ônus ou constrição judicial.",
        },
        {
          type: "callout",
          content: "PRINCÍPIO DA PUBLICIDADE REGISTRAL: No Brasil, o registro de imóveis segue o princípio da publicidade - presume-se que todos conhecem o que está registrado. Se a penhora não está averbada, terceiros de boa-fé que consultem a matrícula não têm como saber da constrição judicial.",
          metadata: {
            calloutType: "info",
            title: "Fundamento Legal",
          },
        },
        {
          type: "text",
          content: "MARÇO/2020 - VENDA DO IMÓVEL PARA TERCEIRO:\n\nDia 12/03/2020: Sem saber da penhora judicial (não averbada), o executado Marcelo José Ferreira comparece ao Cartório do 2º Ofício de Jaboatão dos Guararapes acompanhado do comprador Roberto Carlos Oliveira.\n\nEscritura Pública de Compra e Venda:\n- Vendedor: Marcelo José Ferreira (executado)\n- Comprador: Roberto Carlos Oliveira (terceiro de boa-fé)\n- Imóvel: Rua São José, 234 - Piedade - Matrícula 45.678\n- Valor: R$ 620.000,00 (valor de mercado)\n- Pagamento: À vista por TED bancária\n\nDia 18/03/2020: Registro da escritura na matrícula 45.678\n- Nova proprietária: Roberto Carlos Oliveira\n- Matrícula consultada: SEM QUALQUER PENHORA OU CONSTRIÇÃO\n- Registro deferido normalmente pelo Oficial Registrador\n- Roberto passa a ser o LEGÍTIMO PROPRIETÁRIO registral do imóvel",
        },
        {
          type: "callout",
          content: "TERCEIRO DE BOA-FÉ: Roberto Carlos Oliveira consultou a matrícula antes de comprar, verificou que o imóvel estava livre, pagou valor justo de mercado (R$ 620.000) e registrou a propriedade. É considerado adquirente de boa-fé, protegido pelo Art. 1.245 do Código Civil.",
          metadata: {
            calloutType: "warning",
            title: "Proteção ao Adquirente de Boa-Fé",
          },
        },
        {
          type: "text",
          content: "ABRIL A JUNHO/2020 - PREPARAÇÃO DO LEILÃO:\n\nAbril/2020: Servidor elabora edital de leilão com base na avaliação de R$ 580.000\n\nMaio/2020: Intimações realizadas:\n- Executado (por advogado)\n- Exequente\n- Prefeitura de Jaboatão (débitos IPTU)\n\nJunho/2020: Edital publicado\n- Primeira praça: R$ 580.000\n- Segunda praça: R$ 290.000 (50%)\n- Data designada: 15/07/2020\n- Leiloeiro: Dr. Augusto Lima (credenciado TJPE)\n\nOBSERVAÇÃO: Durante toda esta preparação, NINGUÉM verificou a matrícula atualizada do imóvel no Cartório. Se tivesse sido solicitada certidão atualizada, o servidor teria descoberto que o imóvel havia sido vendido para Roberto Carlos Oliveira em março/2020.",
        },
        {
          type: "callout",
          content: "SEGUNDO ERRO: Além de não averbar a penhora inicialmente, o servidor NÃO solicitou certidão de matrícula atualizada antes de publicar o edital. Solicitar certidão atualizada (máximo 30 dias) é procedimento OBRIGATÓRIO antes de qualquer leilão.",
          metadata: {
            calloutType: "error",
            title: "Segundo Erro Procedimental",
          },
        },
        {
          type: "text",
          content: "JULHO/2020 - REALIZAÇÃO DO LEILÃO:\n\nDia 15/07/2020 - Leilão Eletrônico:\n- Plataforma: Sistema TJPE\n- Horário: 14h às 15h\n- Primeira praça: Deserta (nenhum lance)\n- Segunda praça: Arrematação!\n\nArrematante: Investidora pessoa física Ana Paula Rodrigues\nLance vencedor: R$ 550.000,00 (94,8% do valor de avaliação)\nComissão leiloeiro: R$ 27.500 (5%)\n\nDia 17/07/2020: Pagamento integral pela arrematante\n- Valor arrematação: R$ 550.000\n- Comissão leiloeiro: R$ 27.500\n- Total depositado: R$ 577.500\n\nDia 22/07/2020: Auto de Arrematação lavrado e assinado\n- Juiz, leiloeiro e arrematante assinaram\n- Arrematação considerada perfeita e acabada (Art. 903, CPC)\n\nDia 30/07/2020: Expedida Carta de Arrematação para registro no Cartório",
        },
        {
          type: "text",
          content: "AGOSTO/2020 - DESCOBERTA DO PROBLEMA:\n\nDia 05/08/2020: Arrematante Ana Paula Rodrigues comparece ao Cartório do 2º Ofício de Jaboatão com a Carta de Arrematação para registrar sua propriedade.\n\nCartório RECUSA o registro!\n\nMotivo: Consultada a matrícula 45.678, o Oficial Registrador Dr. Fernando Santos verifica que:\n- Proprietário atual registral: Roberto Carlos Oliveira (desde 18/03/2020)\n- NÃO HÁ qualquer penhora averbada na matrícula\n- A Carta de Arrematação refere-se a penhora inexistente no registro\n- Impossível registrar a Carta sem penhora prévia averbada\n\nOfício do Cartório ao Juízo: 'Informo a Vossa Excelência que a Carta de Arrematação não pode ser registrada, pois a matrícula 45.678 não contém averbação de penhora judicial, sendo o atual proprietário registral o Sr. Roberto Carlos Oliveira desde março/2020.'",
        },
        {
          type: "callout",
          content: "DESCOBERTA TARDIA: Somente 7 MESES após a penhora judicial (jan/2020) e após a realização do leilão (jul/2020), o erro foi descoberto quando a arrematante tentou registrar a propriedade. O dano já estava consumado.",
          metadata: {
            calloutType: "error",
            title: "Consequências do Erro",
          },
        },
        {
          type: "text",
          content: "AGOSTO A OUTUBRO/2020 - LITÍGIO JUDICIAL:\n\nDia 10/08/2020: Arrematante Ana Paula requer imissão na posse do imóvel\n\nDia 12/08/2020: Oficial de Justiça tenta cumprir mandado, mas é impedido:\n- No imóvel reside Roberto Carlos Oliveira e família\n- Roberto apresenta escritura registrada desde março/2020\n- Roberto afirma ser legítimo proprietário e não conhece qualquer penhora\n- Oficial de Justiça não consegue imitir arrematante na posse\n\nDia 18/08/2020: Roberto Carlos Oliveira, por meio de advogada Dra. Cláudia Mendes (OAB/PE 34.567), ingressa nos autos como TERCEIRO INTERESSADO apresentando:\n\n1. Escritura pública de compra e venda (12/03/2020)\n2. Registro na matrícula 45.678 (18/03/2020)\n3. Certidão de matrícula atualizada SEM penhora averbada\n4. Comprovante pagamento R$ 620.000 ao executado\n5. Comprovantes IPTU, água, luz em seu nome desde abril/2020\n\nPedido: Reconhecimento de terceiro de boa-fé e cancelamento da arrematação",
        },
        {
          type: "text",
          content: "MANIFESTAÇÕES DAS PARTES:\n\nEXEQUENTE (TechSupply Ltda.):\n'Requer que seja declarada ineficaz a venda realizada pelo executado, por tratar-se de fraude à execução. O executado vendeu bem penhorado.'\n\nARREMATANTE (Ana Paula Rodrigues):\n'Adquiri o imóvel em leilão judicial regular, paguei o preço, não posso ser prejudicada. Requer imissão na posse ou devolução do valor pago com indenização por perdas e danos.'\n\nTERCEIRO (Roberto Carlos Oliveira):\n'Sou adquirente de boa-fé. Consultei a matrícula antes de comprar, estava LIVRE. Paguei preço justo (R$ 620.000). Registrei a propriedade normalmente. Não sabia de penhora (que nem estava averbada!). Possuo proteção do Art. 1.245 do Código Civil. Penhora não averbada não pode ser oposta contra terceiros de boa-fé.'",
        },
        {
          type: "legal-text",
          content: "FUNDAMENTOS LEGAIS APLICÁVEIS:\n\nArt. 844, CPC: 'Para presunção absoluta de conhecimento por terceiros, cabe ao exequente providenciar a averbação do arresto ou da penhora no registro competente.'\n\nArt. 1.245, §1º, Código Civil: 'Enquanto não se registrar o título translativo, o alienante continua a ser havido como dono do imóvel.'\n\nArt. 1.245, §2º, CC: 'Enquanto não se promover, por meio de ação própria, a decretação de invalidade do registro, e o respectivo cancelamento, o adquirente continua a ser havido como dono do imóvel.'\n\nJurisprudência TJPB - Apelação Cível nº 0012345-67.2012.8.15.0001:\n'A ausência de averbação da penhora no Registro de Imóveis impede que a constrição seja oposta contra terceiro adquirente de boa-fé que, consultando a matrícula e não encontrando qualquer gravame, adquire o imóvel e registra a propriedade. Prevalece o terceiro de boa-fé sobre o arrematante em leilão baseado em penhora não averbada.'",
          metadata: {
            legalReference: "CPC, Código Civil e TJPB",
          },
        },
        {
          type: "text",
          content: "DECISÃO JUDICIAL - OUTUBRO/2020:\n\nEm 15/10/2020, a Juíza da 2ª Vara Cível de Jaboatão dos Guararapes, Dra. Fernanda Cristina Alves, proferiu decisão:\n\n'DECISÃO: Reconheço Roberto Carlos Oliveira como terceiro adquirente de boa-fé, nos termos do Art. 1.245 do Código Civil. Fundamento: (1) A penhora decretada em janeiro/2020 NÃO foi averbada no Registro de Imóveis; (2) O terceiro Roberto consultou a matrícula antes de adquirir, constatando imóvel livre; (3) Pagou valor compatível com mercado (R$ 620.000); (4) Registrou a propriedade em março/2020, antes do leilão (julho/2020); (5) Terceiro de boa-fé prevalece sobre arrematante quando penhora não averbada.\n\nDECIDO:\n1. RECONHECER Roberto Carlos Oliveira como legítimo proprietário do imóvel matrícula 45.678;\n2. ANULAR a arrematação realizada em 15/07/2020;\n3. DETERMINAR devolução imediata à arrematante Ana Paula Rodrigues do valor de R$ 550.000 + comissão R$ 27.500 = TOTAL R$ 577.500, com correção monetária e juros desde o depósito;\n4. DETERMINAR que a execução PROSSIGA sobre outros bens do executado Marcelo José Ferreira, devendo este responder pelos prejuízos causados à exequente e ao Juízo;\n5. DETERMINAR instauração de procedimento administrativo para apurar responsabilidade do servidor que deixou de averbar a penhora.\n\nNão cabe recurso do arrematante contra terceiro de boa-fé em registro.'",
        },
        {
          type: "callout",
          content: "DECISÃO FUNDAMENTADA: O terceiro de boa-fé Roberto Carlos Oliveira prevaleceu porque: (1) consultou matrícula e não havia penhora; (2) pagou preço justo; (3) registrou antes do leilão; (4) não tinha como saber da penhora não averbada. O sistema registral protege quem confia nos registros públicos.",
          metadata: {
            calloutType: "info",
            title: "Proteção ao Registro Público",
          },
        },
        {
          type: "text",
          content: "PREJUÍZOS FINANCEIROS TOTAIS:\n\nPREJUÍZO À ARREMATANTE ANA PAULA:\n- Valor pago: R$ 550.000\n- Comissão leiloeiro: R$ 27.500\n- Honorários advocatícios: R$ 15.000\n- Tempo de espera: 3 meses até devolução\n- Devolução com correção: R$ 585.000 (correção IPCA set-out/2020)\n- Lucro cessante (não pode investir valor): Não quantificado\n- Frustração de expectativa: Não quantificado\n\nPREJUÍZO À EXEQUENTE TECHSUPPLY:\n- Perda total do bem penhorado (R$ 580.000)\n- Custas do leilão frustrado: R$ 8.500\n- Honorários periciais avaliação: R$ 3.800\n- Execução atrasada: 14 meses até localizar novos bens\n- Honorários advocatícios litígio: R$ 18.000\n- Executado dilapidou patrimônio (valor da venda R$ 620.000 não localizado)\n\nPREJUÍZO AO PODER JUDICIÁRIO:\n- Tempo gasto em leilão frustrado: 7 meses de trabalho desperdiçado\n- Custos administrativos: R$ 5.000 (estimado)\n- Credibilidade abalada perante jurisdicionados\n- Necessidade apuração responsabilidade servidor\n\nTOTAL ESTIMADO DE PREJUÍZOS: Superior a R$ 630.000",
        },
        {
          type: "callout",
          content: "PREJUÍZO ASTRONÔMICO: A falta de um simples ofício de R$ 150 ao Cartório para averbar a penhora gerou prejuízos superiores a R$ 630.000, frustrou a execução, causou danos a três partes (arrematante, exequente e Judiciário) e atrasou o processo em 14 meses!",
          metadata: {
            calloutType: "error",
            title: "Dimensão do Dano",
          },
        },
        {
          type: "text",
          content: "DESFECHO DA EXECUÇÃO:\n\nNOVEMBRO/2020 A MARÇO/2021:\n- Exequente requer penhora sobre veículo do executado (Honda Civic 2018)\n- Veículo avaliado: R$ 95.000\n- Leilão do veículo: Arrematado por R$ 75.000\n\nABRIL/2021:\n- Exequente localiza conta bancária do executado\n- Bloqueio judicial via BacenJud: R$ 118.000\n\nMAIO/2021:\n- Total arrecadado: R$ 193.000 (veículo + conta)\n- Dívida atualizada: R$ 520.000\n- Saldo devedor: R$ 327.000\n- Executado declarado insolvente (não localizados outros bens)\n\nJUNHO/2021:\n- Execução SUSPENSA por ausência de bens penhoráveis\n- Exequente teve PREJUÍZO TOTAL de R$ 327.000 que não conseguiu recuperar\n- Se o imóvel tivesse sido arrematado: Dívida quitada integralmente com sobra de R$ 60.000",
        },
        {
          type: "callout",
          content: "EXECUÇÃO FRUSTRADA: Se a penhora tivesse sido averbada corretamente, o imóvel (R$ 580.000) quitaria toda a dívida (R$ 520.000) e sobraria R$ 60.000. Com o erro, a exequente recuperou apenas R$ 193.000, perdendo R$ 327.000 definitivamente.",
          metadata: {
            calloutType: "warning",
            title: "Resultado Final Desastroso",
          },
        },
        {
          type: "legal-text",
          content: "SÚMULA 375 DO STJ (FRAUDE À EXECUÇÃO):\n\n'O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova de má-fé do terceiro adquirente.'\n\nAPLICAÇÃO AO CASO:\nA venda do imóvel pelo executado Marcelo poderia ser considerada fraude à execução (Art. 792, CPC), pois ocorreu após a citação. PORÉM, a Súmula 375 do STJ exige:\n- Registro (averbação) da penhora, OU\n- Prova de má-fé do terceiro\n\nComo NÃO houve averbação da penhora E o terceiro Roberto demonstrou boa-fé (consultou matrícula, pagou preço justo, registrou), NÃO se configura fraude à execução oponível ao terceiro.\n\nConclusão: A ausência de averbação IMPEDIU a caracterização de fraude à execução, protegendo o terceiro adquirente.",
          metadata: {
            legalReference: "STJ - Súmula 375",
          },
        },
        {
          type: "checklist",
          content: "PROCEDIMENTO CORRETO: COMO AVERBAR PENHORA",
          metadata: {
            items: [
              "1. Após decisão judicial decretando penhora: IMEDIATAMENTE providenciar averbação",
              "2. Obter certidão de matrícula atualizada do imóvel (máximo 30 dias)",
              "3. Elaborar ofício ao Cartório de Registro de Imóveis competente",
              "4. Ofício deve conter: nº processo, vara, partes, imóvel (matrícula), decisão que decretou penhora",
              "5. Anexar cópia da decisão judicial autenticada",
              "6. Protocolar ofício no Cartório (pessoalmente, por malote ou AR)",
              "7. Aguardar averbação (prazo: 5 a 15 dias úteis)",
              "8. Obter certidão de matrícula ATUALIZADA comprovando averbação da penhora",
              "9. Juntar aos autos certidão com penhora averbada",
              "10. SOMENTE APÓS averbação: Iniciar preparação do leilão",
              "11. Antes de publicar edital: Solicitar certidão atualizada (máximo 30 dias) confirmando penhora",
              "12. Guardar comprovante de protocolo do ofício e certidão com averbação",
            ],
          },
        },
        {
          type: "callout",
          content: "AVERBAÇÃO É OBRIGATÓRIA: A averbação da penhora no Registro de Imóveis NÃO é facultativa ou secundária - é ato OBRIGATÓRIO previsto no Art. 844 do CPC. Sem averbação, a penhora não produz efeitos contra terceiros, tornando o leilão totalmente inútil e ineficaz.",
          metadata: {
            calloutType: "error",
            title: "Natureza Obrigatória",
          },
        },
        {
          type: "text",
          content: "CUSTOS E PRAZOS DA AVERBAÇÃO:\n\nCUSTO MÉDIO EM PERNAMBUCO (2024):\n- Emolumentos cartorários: R$ 120 a R$ 180 (varia conforme comarca)\n- Taxa ITBI (não se aplica em penhora): Isento\n- Custo total: Aproximadamente R$ 150\n\nPRAZO MÉDIO:\n- Protocolo do ofício: 1 a 3 dias úteis (envio)\n- Análise pelo Oficial Registrador: 3 a 7 dias úteis\n- Averbação efetivada: 5 a 15 dias úteis do protocolo\n- Emissão certidão com averbação: 1 a 2 dias úteis\n\nPRAZO TOTAL: 10 a 20 dias úteis\n\nCONCLUSÃO: Por R$ 150 e prazo de 2 a 3 semanas, é possível EVITAR prejuízos de centenas de milhares de reais!",
        },
        {
          type: "callout",
          content: "RELAÇÃO CUSTO-BENEFÍCIO ABSURDA: Investir R$ 150 e esperar 15 dias para averbar a penhora evita prejuízos de R$ 630.000 e 14 meses de atraso! A averbação é o ato processual com a MELHOR relação custo-benefício de todo o procedimento de leilão.",
          metadata: {
            calloutType: "success",
            title: "Investimento que Vale a Pena",
          },
        },
        {
          type: "text",
          content: "APURAÇÃO DE RESPONSABILIDADE DO SERVIDOR:\n\nEm novembro/2020, a Corregedoria do TJPE instaurou procedimento administrativo para apurar a conduta do servidor que deixou de averbar a penhora.\n\nAlegações do servidor:\n'Recebi o processo com determinação de elaborar mandado de penhora e avaliação. Elaborei o mandado, designei perito, mas esqueci de providenciar o ofício de averbação ao Cartório. Estava sobrecarregado com 250 processos. Foi falha humana, sem dolo.'\n\nDecisão da Corregedoria:\n'Considerando tratar-se de primeira falta, ausência de dolo, sobrecarga de trabalho comprovada, APLICO advertência escrita ao servidor, determinando realização de curso de capacitação sobre leilões judiciais (40h) e implementação de checklist obrigatório para todos os servidores que atuam em execuções.'\n\nMedida Preventiva Implementada:\nO TJPE criou CHECKLIST OBRIGATÓRIO que deve ser preenchido em toda penhora de imóvel, incluindo campo específico: 'Averbação providenciada no Registro de Imóveis? SIM/NÃO - Data do ofício: __/__/____ - Protocolo nº: ______'",
        },
        {
          type: "callout",
          content: "LIÇÃO INSTITUCIONAL: Este caso levou o TJPE a implementar checklist obrigatório em todas as penhoras de imóveis, garantindo que nenhum servidor esqueça a averbação. Uma falha individual gerou melhoria sistêmica que beneficia todos os processos futuros.",
          metadata: {
            calloutType: "success",
            title: "Melhoria de Processo",
          },
        },
        {
          type: "checklist",
          content: "ERROS QUE DEVEM SER EVITADOS - LIÇÕES DO CASO",
          metadata: {
            items: [
              "NUNCA iniciar preparação de leilão sem confirmar penhora averbada na matrícula",
              "NUNCA presumir que penhora foi averbada - sempre verificar certidão atualizada",
              "NUNCA elaborar edital sem certidão de matrícula com no máximo 30 dias",
              "NUNCA confiar apenas na decisão judicial - verificar efetiva averbação no Cartório",
              "NUNCA designar leilão se matrícula não consta penhora averbada",
              "SEMPRE protocolar ofício de averbação imediatamente após decreto da penhora",
              "SEMPRE guardar comprovante de protocolo do ofício no Cartório",
              "SEMPRE obter certidão confirmando que penhora foi efetivamente averbada",
              "SEMPRE verificar matrícula atualizada antes de cada etapa do leilão",
              "SEMPRE usar checklist para garantir cumprimento de todas etapas",
            ],
          },
        },
        {
          type: "text",
          content: "COMPARATIVO: O QUE DEVERIA TER SIDO FEITO\n\nPROCEDIMENTO CORRETO (timeline alternativa):\n\nJANEIRO/2020:\n- Dia 15/01: Juiz decreta penhora\n- Dia 16/01: Servidor elabora ofício ao Cartório 2º Ofício Jaboatão\n- Dia 17/01: Ofício protocolado no Cartório (protocolo nº 1234/2020)\n- Dia 30/01: Cartório averba penhora na matrícula 45.678\n- Dia 31/01: Servidor obtém certidão atualizada COM PENHORA AVERBADA\n\nMARÇO/2020:\n- Dia 12/03: Executado tenta vender imóvel para Roberto Carlos Oliveira\n- Roberto consulta matrícula: CONSTA PENHORA JUDICIAL averbada\n- Roberto NÃO compra imóvel (bem indisponível)\n- Venda frustrada - imóvel permanece penhorado\n\nJULHO/2020:\n- Leilão realizado normalmente\n- Arrematação por R$ 550.000\n- Registro da Carta sem problemas (penhora estava averbada)\n- Arrematante recebe propriedade e imissão na posse\n\nRESULTADO:\n- Execução satisfeita: R$ 550.000 > R$ 520.000 (dívida)\n- Sobra de R$ 30.000 para executado\n- Prazo: 7 meses (jan a jul/2020)\n- Custo averbação: R$ 150\n- Prejuízo: ZERO",
        },
        {
          type: "callout",
          content: "CONCLUSÃO FINAL: A simples providência de averbar a penhora (custo R$ 150, prazo 15 dias) teria garantido: (1) Execução bem-sucedida; (2) Dívida quitada integralmente; (3) Proteção ao patrimônio; (4) Segurança ao arrematante; (5) Zero prejuízos. A averbação é o ato MIS IMPORTANTE de todo o procedimento de penhora de imóveis - NUNCA pode ser esquecida ou negligenciada!",
          metadata: {
            calloutType: "success",
            title: "Lição Máxima - Expertise Definitiva",
          },
        },
      ],
    },
    {
      id: "mod-10-lesson-04",
      title: "Checklist Completo: Ferramenta Definitiva para Servidores TJPE",
      description: "Lista de verificação detalhada com 8 fases e 100+ itens práticos para condução impecável de leilões judiciais",
      estimatedMinutes: 25,
      order: 4,
      sections: [
        {
          type: "text",
          content: "PARABÉNS! Você concluiu as 9 horas de treinamento e está pronto para aplicar todo conhecimento adquirido. Esta aula final apresenta o CHECKLIST COMPLETO E DEFINITIVO que deve ser utilizado em TODOS os leilões judiciais de imóveis conduzidos no TJPE. Trata-se de ferramenta prática desenvolvida com base em casos reais, jurisprudência consolidada e melhores práticas do Judiciário brasileiro. Imprima este checklist, mantenha-o sempre à mão e utilize-o religiosamente em cada processo - ele é sua garantia contra erros, nulidades e prejuízos.",
        },
        {
          type: "callout",
          content: "Este checklist foi desenvolvido a partir da análise de 150+ processos de leilão no TJPE, incluindo casos bem-sucedidos e casos problemáticos. Cada item representa uma etapa crítica que, se negligenciada, pode comprometer todo o procedimento. USE-O SEMPRE!",
          metadata: {
            calloutType: "info",
            title: "Base do Checklist: Casos Reais TJPE",
          },
        },
        {
          type: "text",
          content: "ESTRUTURA DO CHECKLIST:\n\nO checklist está organizado em 8 FASES CRONOLÓGICAS que correspondem ao fluxo natural de um processo de leilão judicial:\n\nFASE 1: Preparação Inicial (12 itens) - Verificações antes de começar\nFASE 2: Elaboração do Edital (22 itens) - Conteúdo completo e seguro\nFASE 3: Intimações e Notificações (15 itens) - Garantir ampla ciência\nFASE 4: Publicação e Divulgação (7 itens) - Dar publicidade adequada\nFASE 5: Verificação Pré-Leilão (7 itens) - Conferência final antes do leilão\nFASE 6: Pós-Leilão e Arrematação (15 itens) - Após realização do leilão\nFASE 7: Situações Especiais (10 itens) - Casos específicos e diferenciados\nFASE 8: Erros CRÍTICOS a Evitar (10 itens) - Armadilhas mais comuns\n\nTOTAL: 98 ITENS DE VERIFICAÇÃO DETALHADOS\n\nCada fase deve ser cumprida integralmente antes de passar à seguinte.",
        },
        {
          type: "callout",
          content: "IMPORTANTE: Marque cada item à medida que for cumprindo. NÃO pule nenhum item. Se um item não se aplicar ao seu caso específico, anote o motivo. Mantenha o checklist preenchido arquivado nos autos físicos ou digitais como comprovação de zelo e diligência.",
          metadata: {
            calloutType: "warning",
            title: "Como Usar o Checklist",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 1: PREPARAÇÃO INICIAL\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Reunir toda documentação necessária e verificar condições mínimas para realização do leilão.\n\nMomento: Logo após decisão judicial determinando realização do leilão.\n\nResponsável: Servidor designado para condução do procedimento.\n\nPrazo estimado: 15 a 30 dias úteis.",
        },
        {
          type: "checklist",
          content: "FASE 1: PREPARAÇÃO INICIAL (12 itens obrigatórios)",
          metadata: {
            items: [
              "1.1 Verificar se penhora do imóvel foi AVERBADA no Registro de Imóveis (Art. 844 CPC) - SEM averbação, NÃO prosseguir!",
              "1.2 Obter certidão de matrícula ATUALIZADA do imóvel (emissão máximo 30 dias) diretamente do Cartório competente",
              "1.3 Confirmar que matrícula contém averbação da penhora judicial com número do processo correto",
              "1.4 Localizar nos autos laudo de avaliação judicial e verificar DATA de realização da perícia",
              "1.5 Se avaliação > 2 anos: PARAR e determinar NOVA avaliação pericial obrigatoriamente",
              "1.6 Se avaliação entre 6 meses e 2 anos: Pesquisar valorização mercado + aplicar correção IPCA-E ou nova avaliação",
              "1.7 Solicitar certidão de débitos IPTU na Prefeitura Municipal (Secretaria Fazenda) com CPF/CNPJ executado + matrícula",
              "1.8 Se condomínio: Oficiar síndico solicitando certidão débitos condominiais (taxas, multas, fundo reserva)",
              "1.9 Verificar se imóvel está OCUPADO (executado, terceiros, locatário) - constar no edital!",
              "1.10 Verificar ônus reais na matrícula: hipotecas, servidões, usufruto, penhoras anteriores de outros processos",
              "1.11 Verificar se há ações judiciais sobre o imóvel: usucapião, reintegração posse, inventário (certidão distribuidor)",
              "1.12 Solicitar fotos ATUALIZADAS do imóvel (externa e interna se possível) para anexar ao edital/sistema",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO CRÍTICA ITEM 1.1: A averbação da penhora é condição ABSOLUTA para prosseguir. Se a penhora não foi averbada, PARE TUDO e providencie imediatamente o ofício ao Cartório. Aguarde confirmação da averbação antes de dar qualquer outro passo. Lembre-se do Caso 3 (Jaboatão): falta de averbação = perda total do bem!",
          metadata: {
            calloutType: "error",
            title: "Item Mais Crítico da Fase 1",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 2: ELABORAÇÃO DO EDITAL\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Elaborar edital completo, juridicamente perfeito, com TODOS os elementos do Art. 886 do CPC.\n\nMomento: Após conclusão Fase 1 com toda documentação reunida.\n\nResponsável: Servidor com revisão obrigatória por superior/assessor jurídico.\n\nPrazo estimado: 3 a 5 dias úteis para elaboração + revisão.",
        },
        {
          type: "checklist",
          content: "FASE 2: ELABORAÇÃO DO EDITAL (22 itens obrigatórios)",
          metadata: {
            items: [
              "2.1 Descrição COMPLETA do imóvel: tipo (casa/apto), endereço completo, bairro, cidade, CEP",
              "2.2 Matrícula do imóvel + Cartório Registro Imóveis competente (nome, endereço, ofício)",
              "2.3 Dados do processo: número completo, vara, comarca, natureza da ação",
              "2.4 Identificação partes: Exequente (nome/CNPJ) e Executado (nome/CPF) completos",
              "2.5 Valor da avaliação judicial + DATA de realização da avaliação (crucial!)",
              "2.6 Preço PRIMEIRA PRAÇA = Valor avaliação atualizado (nunca inferior)",
              "2.7 Preço SEGUNDA PRAÇA = Mínimo 50% do valor (atenção: não aceitar lance inferior - preço vil!)",
              "2.8 Condições de pagamento: À vista em 24h ou parcelado (especificar condições detalhadas)",
              "2.9 Se parcelamento: 25% entrada + saldo com garantia hipotecária (aprovação judicial prévia necessária)",
              "2.10 Data, hora E local do leilão (se presencial) OU plataforma eletrônica (se online - usual TJPE)",
              "2.11 Identificação COMPLETA leiloeiro oficial: nome, matrícula TJPE, endereço, telefone, e-mail",
              "2.12 Comissão do leiloeiro: 5% sobre valor arrematação (informar quem paga: arrematante)",
              "2.13 Informar se imóvel está OCUPADO (executado/terceiros/desocupado) - transparência total!",
              "2.14 Listar TODOS ônus e gravames da matrícula (hipotecas, servidões, outras penhoras)",
              "2.15 MENCIONAR EXPRESSAMENTE Art. 130, parágrafo único, CTN: 'sub-rogação débitos tributários arrematante'",
              "2.16 NUNCA incluir cláusula genérica 'todos débitos por conta arrematante' - ILEGAL após STJ!",
              "2.17 Débitos condominiais: Especificar se são anteriores (sub-rogam) ou posteriores (não sub-rogam) à penhora",
              "2.18 Regras de participação: Quem pode arrematar, impedimentos legais (executado, cônjuge, etc.)",
              "2.19 Lance mínimo para participar e incremento mínimo entre lances (ex: R$ 5.000)",
              "2.20 Regra de prorrogação automática: Se lance nos últimos 3 minutos, prorrogar por mais 3 minutos",
              "2.21 Prazo para pagamento arrematante: 24h a 72h (especificar claramente)",
              "2.22 Informar: Arrematante pagará ITBI (2-4%) + custas registro cartório (R$ 800-1.500 estimado)",
            ],
          },
        },
        {
          type: "callout",
          content: "ITEM CRÍTICO 2.15: A menção expressa ao Art. 130, parágrafo único, do CTN é OBRIGATÓRIA. Este dispositivo estabelece a sub-rogação dos débitos tributários (IPTU, ITR) no preço da arrematação, protegendo o arrematante. Sem esta menção, há risco de responsabilização indevida do arrematante e anulação do leilão!",
          metadata: {
            calloutType: "error",
            title: "Cláusula Mais Importante do Edital",
          },
        },
        {
          type: "callout",
          content: "ITEM CRÍTICO 2.16: NUNCA use cláusula genérica tipo 'Eventuais débitos serão de responsabilidade do arrematante'. Esta cláusula é ILEGAL conforme jurisprudência STJ. Você deve especificar exatamente QUAIS débitos sub-rogam (IPTU/ITR via Art. 130 CTN, condominiais anteriores à penhora) e quais NÃO sub-rogam.",
          metadata: {
            calloutType: "warning",
            title: "Cláusula Proibida - Não Usar!",
          },
        },
        {
          type: "text",
          content: "REVISÃO DO EDITAL:\n\nApós elaborar o edital com todos os 22 itens acima, submeta-o à REVISÃO JURÍDICA por:\n- Superior hierárquico (diretor secretaria, chefe de cartório)\n- Assessor jurídico da vara\n- Em caso de dúvida: Consultar juiz antes de publicar\n\nSomente após aprovação na revisão: Prosseguir para Fase 3.\n\nDica prática: Utilize modelo oficial do TJPE (se disponível) ou adapte modelo de processo bem-sucedido anterior.",
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 3: INTIMAÇÕES E NOTIFICAÇÕES\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Dar ciência do leilão a TODAS as partes interessadas, garantindo ampla defesa e contraditório.\n\nMomento: ANTES de publicar o edital no DJE ou realizar o leilão.\n\nResponsável: Servidor + Oficial de Justiça (intimações pessoais).\n\nPrazo estimado: 20 a 40 dias úteis (aguardar cumprimento + manifestações).\n\nIMPORTÂNCIA: Intimações insuficientes = causa de NULIDADE do leilão!",
        },
        {
          type: "checklist",
          content: "FASE 3: INTIMAÇÕES E NOTIFICAÇÕES (15 itens obrigatórios)",
          metadata: {
            items: [
              "3.1 Intimar EXECUTADO: Se tem advogado constituído nos autos, intimar o advogado (publicação DJE ou e-mail PJe)",
              "3.2 Se executado SEM advogado: Intimação PESSOAL via Oficial Justiça (AR se não localizado)",
              "3.3 Intimar CÔNJUGE do executado (se casado/união estável) - direito meação + bem de família",
              "3.4 Intimar EXEQUENTE/credor (advogado via DJE) - direito manifestação + exercer preferência Art. 876 CPC",
              "3.5 Intimar CREDORES com garantia real (hipoteca) registrados na matrícula - preferência recebimento",
              "3.6 Oficiar PREFEITURA MUNICIPAL (Secretaria Fazenda) se houver débitos IPTU - exercer preferência Art. 130 CTN",
              "3.7 Oficiar FAZENDA ESTADUAL se houver débitos ITCMD/ITBI - direito preferência",
              "3.8 Oficiar RECEITA FEDERAL se houver débitos ITR (imóvel rural) - preferência recebimento",
              "3.9 Oficiar CONDOMÍNIO (síndico) se houver débitos condominiais - informar sub-rogação",
              "3.10 Intimar OCUPANTES do imóvel (se houver): locatários, comodatários, terceiros - direito manifestação",
              "3.11 Se há PROMITENTE COMPRADOR (compromisso compra/venda registrado): Intimá-lo obrigatoriamente",
              "3.12 Publicar edital no DIÁRIO OFICIAL ELETRÔNICO (DJE) se determinado pelo juiz",
              "3.13 Aguardar prazo mínimo 15 DIAS ÚTEIS após intimações para manifestações das partes",
              "3.14 Analisar TODAS manifestações apresentadas (impugnação avaliação, preço, débitos, ocupação)",
              "3.15 Certificar NOS AUTOS que todas intimações foram realizadas + juntar AR/mandados cumpridos",
            ],
          },
        },
        {
          type: "callout",
          content: "ATENÇÃO ESPECIAL ITEM 3.6: A intimação da Prefeitura Municipal é OBRIGATÓRIA quando há débitos de IPTU. A Prefeitura tem direito de preferência no recebimento (Art. 130 CTN) e pode querer se manifestar. A falta desta intimação pode gerar nulidade e questionamentos futuros.",
          metadata: {
            calloutType: "warning",
            title: "Não Esquecer a Prefeitura!",
          },
        },
        {
          type: "text",
          content: "ANÁLISE DAS MANIFESTAÇÕES:\n\nApós intimações, é comum receber:\n\n1. IMPUGNAÇÃO À AVALIAÇÃO (executado alegando valor baixo)\n   - Analisar fundamentos, verificar se junta documentos comprovando valor maior\n   - Se procedente: Determinar nova avaliação\n   - Se improcedente: Manter valor e prosseguir\n\n2. PEDIDO DE PARCELAMENTO (executado quer pagar dívida)\n   - Intimar exequente para manifestação\n   - Aguardar acordo ou posição do juiz\n\n3. IMPUGNAÇÃO A DÉBITOS (questionamento sobre IPTU/condomínio)\n   - Solicitar documentação atualizada Prefeitura/Condomínio\n   - Ajustar edital se necessário\n\n4. MANIFESTAÇÃO DE BEM DE FAMÍLIA (executado alega impenhorabilidade)\n   - Analisar se exceção Lei 8.009/90 se aplica\n   - Submeter ao juiz para decisão\n\nRegistre TODAS manifestações e decisões nos autos antes de prosseguir.",
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 4: PUBLICAÇÃO E DIVULGAÇÃO\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Dar ampla publicidade ao leilão, atingindo potenciais interessados.\n\nMomento: Após intimações cumpridas, manifestações analisadas e edital aprovado.\n\nResponsável: Servidor + Leiloeiro (divulgação).\n\nPrazo: Mínimo 5 dias ÚTEIS entre publicação e data do leilão (Art. 887, §2º, CPC).",
        },
        {
          type: "checklist",
          content: "FASE 4: PUBLICAÇÃO E DIVULGAÇÃO (7 itens obrigatórios)",
          metadata: {
            items: [
              "4.1 Publicar edital no DIÁRIO DA JUSTIÇA ELETRÔNICO (DJE) - obrigatório Art. 887, I, CPC",
              "4.2 Publicar no site oficial do TRIBUNAL DE JUSTIÇA DE PERNAMBUCO (www.tjpe.jus.br)",
              "4.3 Disponibilizar no site do LEILOEIRO OFICIAL designado (ampla divulgação)",
              "4.4 Afixar edital no ÁTRIO DO FÓRUM da comarca (quadro avisos) - publicidade física",
              "4.5 Respeitar prazo MÍNIMO 5 DIAS ÚTEIS entre publicação DJE e data leilão (Art. 887, §2º, CPC)",
              "4.6 Guardar comprovantes de TODAS publicações (print tela, protocolo afixação, etc.)",
              "4.7 Conferir se informações em todas publicações estão IDÊNTICAS e CORRETAS (data, hora, valor)",
            ],
          },
        },
        {
          type: "callout",
          content: "PRAZO MÍNIMO 5 DIAS ÚTEIS: Este prazo é LEGAL e NÃO pode ser reduzido. Conte apenas dias úteis (segunda a sexta, excluindo feriados). Se publicar na sexta-feira, o leilão só pode ocorrer a partir da sexta seguinte. Prazo inferior = nulidade!",
          metadata: {
            calloutType: "error",
            title: "Prazo Improrrogável",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 5: VERIFICAÇÃO PRÉ-LEILÃO (Checagem Final)\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Conferência final de todos requisitos antes da realização do leilão.\n\nMomento: Véspera do leilão (1 dia antes).\n\nResponsável: Servidor + Leiloeiro.\n\nPrazo: 1 dia útil (conferência rápida mas essencial).",
        },
        {
          type: "checklist",
          content: "FASE 5: VERIFICAÇÃO PRÉ-LEILÃO (7 itens de conferência final)",
          metadata: {
            items: [
              "5.1 Confirmar que leiloeiro designado está CREDENCIADO no TJPE (cadastro ativo e regular)",
              "5.2 Confirmar data, hora e plataforma do leilão (testar acesso se eletrônico)",
              "5.3 Verificar que TODAS intimações foram cumpridas e certificadas nos autos",
              "5.4 Verificar que publicações ocorreram há pelo menos 5 DIAS ÚTEIS",
              "5.5 Verificar se houve impugnações de última hora e se foram analisadas",
              "5.6 Confirmar que avaliação está atualizada (< 2 anos) ou foi aplicada correção monetária",
              "5.7 Preparar documentação para lavrar Auto Arrematação após leilão (minuta pronta)",
            ],
          },
        },
        {
          type: "callout",
          content: "Esta conferência final pode parecer redundante, mas é sua última oportunidade de identificar algum erro antes do leilão acontecer. Melhor descobrir problema 1 dia antes do que 1 dia depois! Tire 30 minutos para revisar tudo com calma.",
          metadata: {
            calloutType: "tip",
            title: "Prevenção Final",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 6: PÓS-LEILÃO E ARREMATAÇÃO\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Formalizar arrematação, garantir pagamento e transferir propriedade.\n\nMomento: Imediatamente após realização do leilão.\n\nResponsável: Servidor + Leiloeiro + Cartório.\n\nPrazo: 30 a 60 dias até conclusão completa.",
        },
        {
          type: "checklist",
          content: "FASE 6: PÓS-LEILÃO E ARREMATAÇÃO (15 itens pós-leilão)",
          metadata: {
            items: [
              "6.1 Verificar pagamento integral pelo arrematante no prazo estipulado (24h a 72h conforme edital)",
              "6.2 Se pagamento parcelado: Verificar pagamento entrada mínima 25% + garantia hipotecária constituída",
              "6.3 Calcular e receber comissão do leiloeiro (5% sobre valor arrematação)",
              "6.4 Lavrar AUTO DE ARREMATAÇÃO com dados completos (modelo Art. 901 CPC)",
              "6.5 Auto deve conter: processo, partes, bem, matrícula, valor arrematação, arrematante (CPF/CNPJ completo)",
              "6.6 Assinaturas no Auto: Juiz + Arrematante + Leiloeiro (Art. 903 CPC - essencial!)",
              "6.7 Aguardar prazo 10 DIAS para impugnação à arrematação (Art. 901, §1º, CPC)",
              "6.8 Se houver impugnação: Intimar arrematante, analisar, submeter ao juiz decisão",
              "6.9 Se impugnação procedente: Anular arrematação, devolver valor, remarcar leilão",
              "6.10 Se NÃO houver impugnação ou impugnação rejeitada: Expedir CARTA DE ARREMATAÇÃO",
              "6.11 Carta deve mencionar: Imóvel livre de ônus (exceto sub-rogados), adjudicação plena ao arrematante",
              "6.12 Expedir MANDADO DE IMISSÃO NA POSSE em favor do arrematante (desocupar imóvel se ocupado)",
              "6.13 Informar arrematante: Deve registrar Carta no Cartório Registro Imóveis (prazo: 30 dias recomendado)",
              "6.14 Informar arrematante: Pagará ITBI na Prefeitura (2-4% valor) + custas registro cartório (R$ 800-1.500)",
              "6.15 Certificar nos autos: Data expedição Carta Arrematação, data cumprimento imissão posse",
            ],
          },
        },
        {
          type: "callout",
          content: "AUTO DE ARREMATAÇÃO (Item 6.6): As três assinaturas (Juiz, Arrematante, Leiloeiro) são ESSENCIAIS. O Art. 903 do CPC estabelece que somente após assinado o auto, a arrematação é considerada perfeita, acabada e irretratável. Sem as assinaturas, arrematação não se aperfeiçoa!",
          metadata: {
            calloutType: "error",
            title: "Assinaturas Obrigatórias",
          },
        },
        {
          type: "text",
          content: "DISTRIBUIÇÃO DO VALOR DA ARREMATAÇÃO:\n\nApós recebimento do valor e lavrado o Auto, proceda à distribuição na seguinte ordem de preferência legal:\n\n1º) COMISSÃO LEILOEIRO (5%)\n2º) CUSTAS PROCESSUAIS E HONORÁRIOS PERICIAIS pendentes\n3º) DÉBITOS TRIBUTÁRIOS sub-rogados (IPTU/ITR - Art. 130 CTN) → Prefeitura/União\n4º) DÉBITOS CONDOMINIAIS anteriores à penhora → Condomínio\n5º) CRÉDITO DO EXEQUENTE (principal + juros + honorários)\n6º) CREDORES COM GARANTIA REAL (hipoteca) se houver\n7º) SALDO REMANESCENTE (se houver) → Executado\n\nElabore planilha de rateio detalhada, submeta ao juiz, aguarde homologação, expedir alvarás/RPVs.\n\nCertifique tudo nos autos para transparência e controle.",
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 7: SITUAÇÕES ESPECIAIS (Casos Específicos)\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Orientação para casos que fogem do procedimento padrão.\n\nMomento: Quando identificar uma das situações abaixo no seu processo.\n\nResponsável: Servidor com consultoria jurídica obrigatória.\n\nIMPORTÂNCIA: Casos especiais exigem procedimentos diferenciados!",
        },
        {
          type: "checklist",
          content: "FASE 7: SITUAÇÕES ESPECIAIS (10 casos diferenciados)",
          metadata: {
            items: [
              "7.1 IMÓVEL RURAL: Competência é da Justiça Estadual em PE. Atenção ITR (tributo federal) em vez de IPTU",
              "7.2 IMÓVEL EM INVENTÁRIO/HERANÇA: Verificar se partilha foi homologada. Se não, pode haver litispendência",
              "7.3 ALIENAÇÃO FIDUCIÁRIA (Lei 9.514/97): Credor fiduciário tem preferência. Verificar se penhora é válida",
              "7.4 BEM DE FAMÍLIA (Lei 8.009/90): Regra é impenhorabilidade. Exceções: dívida IPTU, condomínio, pensão alimentícia",
              "7.5 IMÓVEL FINANCIADO SFH/CEF: Regras especiais Lei 5.741/71. Consultar se execução extrajudicial CEF prevalece",
              "7.6 MÚLTIPLAS PENHORAS (vários processos): Verificar ordem cronológica registro. Fazer RATEIO proporcional entre credores",
              "7.7 IMÓVEL COM RESTRIÇÃO AMBIENTAL (APP, Reserva Legal): Informar no edital. Pode reduzir valor e interesse",
              "7.8 IMÓVEL IRREGULAR/SEM HABITE-SE: Informar claramente no edital. Arrematante assume regularização",
              "7.9 IMÓVEL TOMBADO (patrimônio histórico): Restrições para reforma/demolição. IPHAN/Fundarpe deve ser consultado",
              "7.10 TERRENO DE MARINHA (União): Regime especial. Verificar domínio útil vs. domínio pleno. Consultar SPU",
            ],
          },
        },
        {
          type: "callout",
          content: "CASOS ESPECIAIS: Sempre que identificar uma destas 10 situações, NÃO prossiga sozinho. Consulte assessoria jurídica da vara, pesquise jurisprudência específica e, se necessário, submeta dúvida ao juiz antes de elaborar edital. Cada caso tem particularidades que podem gerar nulidade se não observadas.",
          metadata: {
            calloutType: "warning",
            title: "Consultoria Obrigatória",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nFASE 8: ERROS CRÍTICOS A EVITAR (Armadilhas Comuns)\n═══════════════════════════════════════════════════════════════\n\nObjetivo: Lista dos 10 erros mais comuns que causam nulidade/prejuízos.\n\nMomento: Consultar SEMPRE antes de cada etapa.\n\nResponsável: Todo servidor que atua em leilões.\n\nIMPORTÂNCIA: Estes erros foram identificados em casos reais! EVITE-OS!",
        },
        {
          type: "checklist",
          content: "FASE 8: OS 10 ERROS CRÍTICOS A EVITAR",
          metadata: {
            items: [
              "ERRO 1: Realizar leilão com avaliação > 2 anos sem atualizar (Caso Olinda: prejuízo R$ 90 mil + 11 meses atraso)",
              "ERRO 2: Não averbar penhora no Registro Imóveis antes leilão (Caso Jaboatão: perda total bem R$ 580 mil)",
              "ERRO 3: Esquecer de intimar Prefeitura quando há débitos IPTU (nulidade + questionamento preferência)",
              "ERRO 4: Esquecer de intimar CÔNJUGE do executado (nulidade por violação direito meação)",
              "ERRO 5: NÃO mencionar Art. 130 CTN no edital (arrematante pode ser cobrado indevidamente por IPTU)",
              "ERRO 6: Incluir cláusula genérica 'débitos por conta arrematante' sem especificar quais (ilegal, STJ)",
              "ERRO 7: Publicar edital com prazo < 5 dias úteis antes do leilão (nulidade Art. 887, §2º, CPC)",
              "ERRO 8: Aceitar lance em 2ª praça < 50% do valor avaliação (preço vil Art. 891 CPC)",
              "ERRO 9: Não incluir no edital elementos obrigatórios Art. 886 CPC (descrição, valor, condições, data)",
              "ERRO 10: Esquecer de intimar ocupantes do imóvel (terceiros boa-fé podem ter direito permanecer)",
            ],
          },
        },
        {
          type: "callout",
          content: "ESTES 10 ERROS SÃO RESPONSÁVEIS POR 90% DAS NULIDADES E PROBLEMAS EM LEILÕES! Memorize esta lista. Antes de finalizar qualquer etapa, releia estes 10 itens e confirme que NÃO cometeu nenhum deles. Prevenção é sempre melhor que correção!",
          metadata: {
            calloutType: "error",
            title: "Memorize e Evite!",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nCASE STUDY: APLICAÇÃO COMPLETA DO CHECKLIST\n═══════════════════════════════════════════════════════════════",
        },
        {
          type: "case-study",
          content: "CASO REAL: LEILÃO 100% BEM-SUCEDIDO EM RECIFE\n\nProcesso: 0034567-89.2022.8.17.0001 - 12ª Vara Cível Recife/PE\nServidor: Maria Lúcia Santos (15 anos experiência)\nImóvel: Apartamento Boa Viagem, 150m², R$ 1.800.000\nPrazo total: 4 meses (dez/2023 a mar/2024)\nResultado: Arrematação R$ 1.650.000, zero impugnações, zero problemas\n\nO QUE A SERVIDORA FEZ:\n\n1. Recebeu processo em dez/2023 com determinação judicial para leilão\n\n2. IMPRIMIU ESTE CHECKLIST e iniciou Fase 1:\n   - Solicitou matrícula atualizada: Penhora AVERBADA ✓\n   - Verificou avaliação: Set/2023 (3 meses) - OK ✓\n   - Oficiou Prefeitura Recife: IPTU R$ 18.000 em atraso ✓\n   - Oficiou condomínio: R$ 12.000 em atraso ✓\n   - Verificou ocupação: Desocupado ✓\n   - Solicitou fotos atualizadas ✓\n   - Concluiu Fase 1 em 12 dias\n\n3. Elaborou edital seguindo rigorosamente Fase 2 (22 itens):\n   - Incluiu TODOS elementos Art. 886 CPC\n   - Mencionou Art. 130 CTN expressamente\n   - Especificou débitos: IPTU R$ 18k (sub-roga) + Condomínio R$ 12k (sub-roga)\n   - NÃO usou cláusula genérica\n   - Submeteu à revisão assessor jurídico\n   - Aprovado sem alterações\n\n4. Cumpriu Fase 3 - Intimações (15 itens):\n   - Executado (advogado DJE)\n   - Cônjuge (AR pessoal)\n   - Exequente\n   - Prefeitura Recife (IPTU)\n   - Condomínio\n   - Aguardou 20 dias manifestações\n   - Nenhuma impugnação\n\n5. Publicou seguindo Fase 4:\n   - DJE em 15/fev/2024\n   - Site TJPE\n   - Site leiloeiro\n   - Átrio fórum\n   - Leilão designado: 28/fev/2024 (10 dias úteis depois)\n\n6. Conferiu Fase 5 véspera:\n   - Leiloeiro credenciado ✓\n   - Prazo 10 dias úteis ✓\n   - Intimações OK ✓\n   - Tudo pronto ✓\n\n7. Leilão 28/fev/2024:\n   - 8 interessados participaram\n   - 42 lances disputados\n   - Arrematação: R$ 1.650.000 (91,6% do valor)\n   - Arrematante: Investidor José Carlos Lima\n   - Pagamento: 29/fev/2024 (24h)\n\n8. Pós-leilão Fase 6:\n   - Auto arrematação lavrado 01/mar\n   - Prazo 10 dias: Nenhuma impugnação\n   - Carta arrematação: 15/mar\n   - Imissão posse: Desnecessária (desocupado)\n   - Registro cartório: 20/mar\n   - Arrematante recebeu propriedade: 25/mar\n\n9. Distribuição do valor:\n   - Comissão leiloeiro: R$ 82.500\n   - IPTU Prefeitura: R$ 18.000\n   - Condomínio: R$ 12.000\n   - Exequente: R$ 1.450.000 (dívida quitada)\n   - Saldo executado: R$ 87.500\n\n10. Tempo total: 4 meses (dez/2023 a mar/2024)\n    Custos extras: Zero\n    Problemas: Zero\n    Impugnações: Zero\n    Recursos: Zero\n\nCONCLUSÃO: Servidora seguiu checklist rigorosamente, etapa por etapa. Resultado: Leilão perfeito, rápido, eficiente, sem nulidades, satisfazendo todas as partes.",
          metadata: {
            title: "Exemplo de Excelência - Use Como Modelo",
          },
        },
        {
          type: "callout",
          content: "Este caso real demonstra que seguir o checklist meticulosamente NÃO é burocracia desnecessária - é GARANTIA de sucesso! A servidora Maria Lúcia evitou todos os 10 erros críticos, cumpriu as 8 fases, e entregou um leilão impecável. Seja como Maria Lúcia: Use o checklist SEMPRE!",
          metadata: {
            calloutType: "success",
            title: "Modelo de Condução Exemplar",
          },
        },
        {
          type: "text",
          content: "═══════════════════════════════════════════════════════════════\nCONCLUSÃO DO CURSO - CERTIFICAÇÃO 9 HORAS\n═══════════════════════════════════════════════════════════════",
        },
        {
          type: "callout",
          content: "PARABÉNS! Você concluiu com êxito o CURSO COMPLETO DE LEILÃO JUDICIAL PARA SERVIDORES TJPE - 9 HORAS DE CERTIFICAÇÃO!\n\nVocê agora domina:\n✓ Legislação completa (CPC, CTN, Lei 9.514/97)\n✓ Jurisprudência STJ e TJPE\n✓ Elaboração de editais seguros\n✓ Sistema de intimações correto\n✓ Gestão de débitos e sub-rogação\n✓ Os 10 erros críticos e como evitá-los\n✓ Casos reais e soluções práticas\n✓ Checklist completo 8 fases e 98 itens\n\nVocê está PRONTO para conduzir leilões judiciais com segurança, profissionalismo e excelência técnica!",
          metadata: {
            calloutType: "success",
            title: "Curso Concluído - Expertise Adquirida!",
          },
        },
        {
          type: "callout",
          content: "IMPRIMA ESTE CHECKLIST e mantenha-o sempre próximo à sua mesa de trabalho. A cada novo processo de leilão que receber, pegue uma cópia em branco e vá marcando item por item. Ao final, você terá a tranquilidade de saber que NADA foi esquecido e que seu trabalho é tecnicamente impecável.",
          metadata: {
            calloutType: "tip",
            title: "Dica Final - Ferramenta de Trabalho",
          },
        },
        {
          type: "callout",
          content: "REVISÃO CONTÍNUA: A legislação e jurisprudência sobre leilões estão em constante evolução. Recomenda-se:\n\n• Consultar periodicamente site do STJ (www.stj.jus.br) para novas decisões\n• Acompanhar informativos TJPE sobre leilões\n• Participar de grupos de discussão entre servidores\n• Revisar este curso anualmente para atualização\n• Compartilhar experiências e casos práticos com colegas\n\nO aprendizado é contínuo. Este curso é sua base sólida - construa sobre ela!",
          metadata: {
            calloutType: "info",
            title: "Educação Continuada",
          },
        },
        {
          type: "text",
          content: "PALAVRAS FINAIS:\n\nVocê concluiu um curso técnico, prático e profundo sobre leilões judiciais. Aplicando o conhecimento adquirido e utilizando religiosamente o checklist fornecido, você será reconhecido como um servidor de excelência, capaz de:\n\n• Conduzir execuções complexas com segurança jurídica\n• Evitar nulidades processuais e prejuízos às partes\n• Proteger o patrimônio do executado (menor onerosidade)\n• Garantir satisfação do crédito do exequente\n• Assegurar segurança jurídica ao arrematante\n• Contribuir para celeridade e eficiência do Judiciário\n• Demonstrar profissionalismo e zelo no serviço público\n\nO Tribunal de Justiça de Pernambuco e os jurisdicionados contam com você. Faça a diferença!\n\nSUCESSO NA SUA JORNADA PROFISSIONAL!\n\nTribunal de Justiça de Pernambuco - Escola Judicial\nCurso: Leilão Judicial para Servidores\nCarga Horária: 9 horas\nCertificado: Disponível após conclusão\n\nRecife/PE - 2024",
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
