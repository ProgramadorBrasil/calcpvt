import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HelpCircle,
  Search,
  ArrowLeft,
  Scale,
  FileText,
  Bell,
  Calculator,
  Receipt,
  CreditCard,
  Home
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Fundamentos Legais
  {
    id: "legal-01",
    question: "Qual é a diferença entre leilão judicial e leilão extrajudicial?",
    answer: "O leilão judicial é conduzido pelo Poder Judiciário em processos de execução, seguindo o CPC (Arts. 879 a 903), com leiloeiro designado pelo juiz e participação de todas as partes do processo. Já o leilão extrajudicial é promovido pelo credor fiduciário após consolidação da propriedade, seguindo a Lei 9.514/97, sem intervenção judicial inicial e com procedimento mais ágil, porém com menos garantias processuais.",
    category: "Fundamentos Legais"
  },
  {
    id: "legal-02",
    question: "O que significa o Art. 130 do CTN e por que é tão importante?",
    answer: "O Art. 130 do CTN estabelece que, em arrematações judiciais, os débitos tributários (IPTU, taxas municipais) anteriores à data do leilão NÃO são de responsabilidade do arrematante - eles são sub-rogados no preço da arrematação, ou seja, pagos com o valor depositado em juízo. O STJ em 2024 (Tema 1.134) decidiu que é INVÁLIDA qualquer cláusula no edital que atribua ao arrematante responsabilidade por débitos fiscais anteriores.",
    category: "Fundamentos Legais"
  },
  {
    id: "legal-03",
    question: "A arrematação pode ser cancelada após assinatura do auto?",
    answer: "Segundo o Art. 903 do CPC, uma vez assinado o auto pelo juiz, arrematante e leiloeiro, a arrematação é considerada perfeita, acabada e IRRETRATÁVEL, mesmo que sejam julgados procedentes embargos do executado. Existe prazo de 10 dias para impugnação por circunstância superveniente (valor irrisório, pagamento não realizado, vício no procedimento), mas após esse prazo, a arrematação se torna definitiva.",
    category: "Fundamentos Legais"
  },

  // Elaboração de Edital
  {
    id: "edital-01",
    question: "Quais são os elementos OBRIGATÓRIOS do edital de leilão?",
    answer: "De acordo com o Art. 886 do CPC, o edital DEVE conter: (1) Descrição completa do bem (tipo, localização, área, matrícula); (2) Número do processo, vara e comarca; (3) Valor da avaliação oficial com data; (4) Preço mínimo para 1ª e 2ª praças; (5) Condições de pagamento; (6) Data, horário e local do leilão; (7) Identificação do leiloeiro; (8) Comissão e despesas; (9) Situação de ocupação; (10) Ônus, gravames e débitos; (11) Menção expressa ao Art. 130 do CTN; (12) Regras de participação e impedimentos; (13) Regras de lances e prorrogação automática.",
    category: "Edital"
  },
  {
    id: "edital-02",
    question: "O que é preço vil e como evitá-lo?",
    answer: "Preço vil é o valor excessivamente baixo que não corresponde ao valor real do bem, causando prejuízo ao executado. O Art. 891 do CPC considera vil o preço inferior a 50% do valor da avaliação. Para evitar: (1) Manter avaliações atualizadas (máximo 6 meses a 2 anos); (2) Na 2ª praça, fixar preço mínimo razoável (nunca inferior a 50%); (3) Atualizar monetariamente o valor se houver decurso de tempo; (4) Determinar nova avaliação se passaram mais de 2 anos. O STJ entende que mais de 2 anos entre avaliação e leilão pode caracterizar preço vil.",
    category: "Edital"
  },
  {
    id: "edital-03",
    question: "É obrigatório mencionar o Art. 130 do CTN no edital?",
    answer: "SIM, é absolutamente essencial! A menção expressa ao Art. 130, parágrafo único, do CTN no edital garante que os débitos fiscais anteriores à arrematação sejam sub-rogados no preço, protegendo o arrematante de cobranças futuras pela Fazenda Pública. NUNCA inclua cláusula atribuindo débitos fiscais ao arrematante, pois o STJ declarou essa prática INVÁLIDA (Tema 1.134/2024).",
    category: "Edital"
  },
  {
    id: "edital-04",
    question: "Qual a diferença entre 1ª e 2ª praça de leilão?",
    answer: "Na 1ª praça, o preço mínimo não pode ser inferior ao valor da avaliação. Se não houver lances, realiza-se a 2ª praça com preço reduzido (geralmente 50% a 70% do valor da avaliação), mas NUNCA inferior a 50%, pois configuraria preço vil. O juiz pode determinar valores diferentes conforme as circunstâncias do caso.",
    category: "Edital"
  },

  // Notificações
  {
    id: "notif-01",
    question: "Quem DEVE ser notificado antes do leilão?",
    answer: "É fundamental notificar: (1) Executado (devedor) por meio de seu advogado ou Defensor; (2) Cônjuge do executado; (3) Exequente (credor); (4) Credores com garantia real (hipotecários, penhora anterior); (5) Fazenda Pública se houver débitos; (6) Condomínio se houver débitos condominiais; (7) Ocupantes do imóvel; (8) Promitentes compradores com contrato registrado. A falta de QUALQUER notificação obrigatória pode anular TODO o leilão.",
    category: "Notificações"
  },
  {
    id: "notif-02",
    question: "O que acontece se não notificar a Prefeitura?",
    answer: "Se a Prefeitura não for intimada do leilão e o imóvel tiver débitos de IPTU, os débitos NÃO serão sub-rogados no preço e a Prefeitura poderá cobrar diretamente do arrematante. Isso pode levar à ação anulatória pelo arrematante, anulação do leilão, prejuízos a todas as partes e necessidade de refazer todo o procedimento. SEMPRE intimar formalmente a Fazenda Pública por carta AR quando houver débitos fiscais.",
    category: "Notificações"
  },
  {
    id: "notif-03",
    question: "Qual o prazo mínimo entre publicação do edital e realização do leilão?",
    answer: "O edital deve ser publicado com antecedência MÍNIMA de 5 DIAS ÚTEIS da data designada para o leilão. A intimação das partes deve ocorrer ANTES da publicação do edital. Contam-se apenas dias úteis. Publicação tardia pode gerar nulidade do leilão por violar o princípio da publicidade e ampla participação.",
    category: "Notificações"
  },
  {
    id: "notif-04",
    question: "Como deve ser feita a intimação do executado sem advogado?",
    answer: "Se o executado não tiver advogado constituído nem Defensor Público, a intimação deve ser PESSOAL, realizada por oficial de justiça, correio com AR (Aviso de Recebimento) ou, em último caso, por edital. Jamais fazer apenas intimação pelo DJE quando não há advogado constituído, pois isso pode gerar nulidade.",
    category: "Notificações"
  },

  // Avaliação
  {
    id: "aval-01",
    question: "Por quanto tempo uma avaliação é válida?",
    answer: "A legislação não estabelece prazo fixo, mas a jurisprudência consolidou: IDEAL - até 6 meses antes do leilão; ACEITÁVEL - até 1 ano; PROBLEMÁTICO - mais de 2 anos. O STJ entende que decurso superior a 2 anos entre avaliação e leilão pode alterar substancialmente o valor do bem, impondo prejuízos ao executado e caracterizando preço vil. Sempre verifique a data da última avaliação e, se necessário, determine atualização monetária ou nova avaliação completa.",
    category: "Avaliação"
  },
  {
    id: "aval-02",
    question: "Quando é necessário fazer nova avaliação?",
    answer: "Nova avaliação é necessária quando: (1) Decurso de tempo significativo (mais de 2 anos); (2) Alterações substanciais no mercado imobiliário da região; (3) Benfeitorias realizadas ou deterioração do bem; (4) Obras de infraestrutura na região que valorizaram/desvalorizaram o imóvel; (5) Impugnação fundamentada da avaliação pela parte. O juiz pode determinar nova avaliação de ofício mesmo sem provocação das partes.",
    category: "Avaliação"
  },
  {
    id: "aval-03",
    question: "Posso apenas atualizar monetariamente a avaliação antiga?",
    answer: "A atualização monetária simples (aplicação de índices como IPCA, INPC, IGP-M) é aceitável para períodos curtos (até 1 ano), mas NÃO reflete mudanças reais no mercado imobiliário. Para períodos longos (mais de 2 anos), é INDISPENSÁVEL nova avaliação técnica com vistoria, pois o mercado pode ter valorizado ou desvalorizado independentemente da inflação.",
    category: "Avaliação"
  },

  // Averbação
  {
    id: "averb-01",
    question: "É obrigatório averbar a penhora antes do leilão?",
    answer: "SIM! A averbação da penhora na matrícula do imóvel é ALTAMENTE recomendável e, em muitos casos, obrigatória. Segundo o Art. 844 do CPC, para presunção absoluta de conhecimento por terceiros, cabe ao exequente averbar a penhora no registro competente. SEM averbação: terceiros de boa-fé podem adquirir o imóvel, arrematante perde garantia de propriedade, impossibilidade de opor a penhora contra terceiros. SEMPRE averbar antes de realizar o leilão.",
    category: "Averbação"
  },
  {
    id: "averb-02",
    question: "O que acontece se o leilão for realizado sem averbação da penhora?",
    answer: "Caso real (TJPB, 2012): Penhora decretada mas não averbada. Executado vendeu o imóvel para terceiro de boa-fé. Leilão foi realizado e arrematante NÃO conseguiu imissão na posse. Resultado: arrematante PERDEU a propriedade, recebeu de volta apenas o valor pago, execução teve que prosseguir sobre outros bens, processo atrasou meses. Por isso, SEMPRE providenciar averbação ANTES do leilão.",
    category: "Averbação"
  },

  // Débitos
  {
    id: "debito-01",
    question: "Débitos condominiais seguem a mesma regra dos débitos fiscais?",
    answer: "NÃO. Os débitos condominiais NÃO seguem automaticamente a regra do Art. 130 do CTN. Eles podem ser sub-rogados ou não, dependendo do que constar no edital. O servidor deve ESCOLHER e INFORMAR CLARAMENTE no edital: (1) 'Débitos condominiais sub-rogados: valor da arrematação paga débitos, arrematante recebe imóvel livre'; OU (2) 'Débitos condominiais de responsabilidade do arrematante'. Sempre informar com clareza para evitar disputas posteriores.",
    category: "Débitos"
  },
  {
    id: "debito-02",
    question: "O arrematante pode ser cobrado por IPTU atrasado?",
    answer: "NÃO, se o edital mencionou expressamente o Art. 130 do CTN e a Prefeitura foi devidamente intimada. Os débitos de IPTU anteriores à arrematação são pagos com o valor da arrematação depositado em juízo (sub-rogação). O arrematante recebe o imóvel LIVRE de débitos fiscais anteriores. Qualquer cláusula no edital atribuindo esses débitos ao arrematante é INVÁLIDA (STJ, Tema 1.134/2024).",
    category: "Débitos"
  },
  {
    id: "debito-03",
    question: "Como proceder com débitos fiscais muito elevados?",
    answer: "Quando os débitos fiscais são muito elevados: (1) SEMPRE mencionar no edital o valor total dos débitos; (2) Destacar essa informação para que interessados saibam que parte significativa do preço será destinada ao pagamento de tributos; (3) Intimar formalmente a Fazenda Pública; (4) Incluir menção ao Art. 130 CTN; (5) Se os débitos superam o valor do imóvel, avaliar a viabilidade do leilão ou sugerir outras formas de satisfação do crédito.",
    category: "Débitos"
  },

  // Pagamento e Parcelamento
  {
    id: "pag-01",
    question: "É possível parcelar a arrematação em leilão judicial?",
    answer: "SIM, conforme Art. 895 do CPC. Requisitos obrigatórios: (1) Entrada mínima de 25% à vista; (2) Prazo máximo de 30 parcelas mensais; (3) Garantia por hipoteca do próprio imóvel arrematado; (4) Correção monetária e juros conforme definido no edital. ATENÇÃO: o juiz NÃO é obrigado a aceitar parcelamento - ele apenas PERMITE que o interessado apresente proposta, que será analisada caso a caso.",
    category: "Pagamento"
  },
  {
    id: "pag-02",
    question: "Posso fazer leilão somente à vista, sem parcelamento?",
    answer: "SIM. É possível exigir apenas pagamento à vista. Recomenda-se quando: (1) Bens de valor elevado onde parcelamento prolongaria excessivamente a execução; (2) Urgência na satisfação do crédito; (3) Hipoteca do bem pode não ser garantia suficiente. Incluir no edital: 'Não será aceito parcelamento, apenas pagamento à vista'. Leilões da PGFN têm regras especiais (até 60 parcelas, parcela mínima R$ 500, multa de 50% sobre saldo devedor em caso de inadimplência).",
    category: "Pagamento"
  },
  {
    id: "pag-03",
    question: "Quais são os custos adicionais além do valor da arrematação?",
    answer: "O arrematante deve pagar: (1) Valor da arrematação (lance vencedor); (2) Comissão do leiloeiro (geralmente 5% do valor); (3) Eventuais despesas administrativas; (4) ITBI - Imposto de Transmissão de Bens Imóveis (2% a 4% sobre o valor da arrematação, conforme município); (5) Custas do registro da Carta de Arrematação no Cartório de Imóveis. Todos esses valores devem estar CLARAMENTE informados no edital.",
    category: "Pagamento"
  },

  // Publicação
  {
    id: "pub-01",
    question: "Onde o edital deve ser obrigatoriamente publicado?",
    answer: "Para leilões judiciais: (1) Diário da Justiça Eletrônico (DJE) - OBRIGATÓRIO; (2) Site do Tribunal (TJPE) - RECOMENDADO; (3) Site do leiloeiro - OBRIGATÓRIO; (4) Átrio dos Fóruns - fixação física. Para leilões extrajudiciais (alienação fiduciária): jornal eletrônico ou impresso de grande circulação, com três publicações obrigatórias.",
    category: "Publicação"
  },
  {
    id: "pub-02",
    question: "O que é a regra de prorrogação automática (extra-time)?",
    answer: "Em leilões eletrônicos, se um lance for dado nos últimos 3 minutos antes do encerramento, o prazo é automaticamente prorrogado por mais 3 minutos. Objetivo: garantir igualdade de oportunidade a todos os participantes e evitar lances de última hora sem possibilidade de resposta. Incluir no edital: 'Havendo lance nos 3 (três) minutos finais, o leilão será prorrogado automaticamente por mais 3 (três) minutos'.",
    category: "Publicação"
  },

  // Procedimentos Pós-Leilão
  {
    id: "pos-01",
    question: "O que é o Auto de Arrematação e quando deve ser lavrado?",
    answer: "O Auto de Arrematação é o documento lavrado pelo juiz que formaliza a conclusão do leilão. Deve conter: (1) Identificação do processo; (2) Identificação do bem arrematado; (3) Valor da arrematação; (4) Identificação do arrematante; (5) Data e assinaturas (juiz, arrematante, leiloeiro). Conforme Art. 903 do CPC, assinado o auto, a arrematação é considerada perfeita, acabada e irretratável. Após 10 dias sem impugnação, expede-se a Carta de Arrematação.",
    category: "Pós-Leilão"
  },
  {
    id: "pos-02",
    question: "O que é a Carta de Arrematação?",
    answer: "A Carta de Arrematação é o documento expedido pelo juiz que serve como título hábil para registro da propriedade no Cartório de Registro de Imóveis. IMPORTANTE: Em leilão judicial, a Carta substitui a escritura pública. Em leilão extrajudicial, é necessária escritura pública no Cartório de Notas. É responsabilidade do ARREMATANTE providenciar o registro da Carta no Cartório de Imóveis para efetivar a transferência da propriedade.",
    category: "Pós-Leilão"
  },
  {
    id: "pos-03",
    question: "Qual o prazo para impugnar uma arrematação?",
    answer: "Após a assinatura do auto de arrematação, há prazo de 10 DIAS para que terceiros prejudicados ou as partes impugnem a arrematação (Art. 903, §1º do CPC). Hipóteses de ineficácia: (1) Valor irrisório ou preço vil; (2) Pagamento não realizado; (3) Vício no procedimento. Após esse prazo SEM impugnação, expede-se a Carta de Arrematação e ordem/mandado de imissão na posse.",
    category: "Pós-Leilão"
  },

  // Casos Práticos
  {
    id: "pratico-01",
    question: "Quais são os 5 erros mais comuns em leilões judiciais?",
    answer: "1) NÃO averbar a penhora antes do leilão (risco de fraude); 2) NÃO intimar a Prefeitura quando há débitos fiscais (arrematante pode ser cobrado); 3) Usar avaliação desatualizada (mais de 2 anos - risco de preço vil); 4) NÃO mencionar Art. 130 do CTN no edital (débitos ficam com arrematante); 5) NÃO intimar cônjuge do executado (nulidade por vício de intimação). Todos esses erros podem causar anulação do leilão e prejuízos irreparáveis.",
    category: "Casos Práticos"
  },
  {
    id: "pratico-02",
    question: "O que fazer quando o imóvel está ocupado?",
    answer: "Quando o imóvel está ocupado: (1) Informar CLARAMENTE no edital a situação de ocupação; (2) Intimar os ocupantes do leilão; (3) Especificar se a desocupação será por conta do arrematante ou se haverá ordem judicial de imissão na posse; (4) Se ocupação for irregular, o arrematante terá direito a mandado de imissão na posse; (5) Se houver locatário com contrato válido, respeitar prazo de vigência do contrato conforme lei de locações.",
    category: "Casos Práticos"
  },
  {
    id: "pratico-03",
    question: "Como agir quando há várias penhoras sobre o mesmo imóvel?",
    answer: "Quando há múltiplas penhoras (concurso de credores): (1) Verificar ordem cronológica das averbações; (2) Intimar TODOS os credores com penhora registrada; (3) O produto da arrematação será rateado entre os credores conforme ordem de preferência estabelecida em lei (créditos trabalhistas, tributários, com garantia real, quirografários); (4) O leiloeiro deve esclarecer no edital a existência de múltiplas penhoras; (5) Observar regras dos Arts. 908 e seguintes do CPC sobre concurso de credores.",
    category: "Casos Práticos"
  }
];

const FAQ = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = [
    { id: "todas", label: "Todas", icon: HelpCircle },
    { id: "Fundamentos Legais", label: "Fundamentos Legais", icon: Scale },
    { id: "Edital", label: "Edital", icon: FileText },
    { id: "Notificações", label: "Notificações", icon: Bell },
    { id: "Avaliação", label: "Avaliação", icon: Calculator },
    { id: "Averbação", label: "Averbação", icon: FileText },
    { id: "Débitos", label: "Débitos", icon: Receipt },
    { id: "Pagamento", label: "Pagamento", icon: CreditCard },
    { id: "Publicação", label: "Publicação", icon: FileText },
    { id: "Pós-Leilão", label: "Pós-Leilão", icon: Home },
    { id: "Casos Práticos", label: "Casos Práticos", icon: HelpCircle },
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "todas" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const faqsByCategory = categories.reduce((acc, category) => {
    if (category.id === "todas") return acc;
    acc[category.label] = faqData.filter(faq => faq.category === category.label);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/curso")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Curso
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-ms-blue flex items-center">
                  <HelpCircle className="mr-2 h-8 w-8" />
                  FAQ - Perguntas Frequentes
                </h1>
                <p className="text-gray-600 mt-1">
                  Dúvidas sobre leilões judiciais de imóveis - TJPE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Filter Tabs */}
        <Tabs defaultValue="todas" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 lg:grid-cols-11 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="todas" className="space-y-6">
            {/* All Categories */}
            {Object.entries(faqsByCategory).map(([categoryName, items]) => {
              const categoryFiltered = searchTerm === ""
                ? items
                : items.filter(item =>
                    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
                  );

              if (categoryFiltered.length === 0) return null;

              const CategoryIcon = categories.find(c => c.label === categoryName)?.icon || HelpCircle;

              return (
                <Card key={categoryName}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CategoryIcon className="h-6 w-6 mr-2 text-ms-blue" />
                      {categoryName}
                    </CardTitle>
                    <CardDescription>
                      {categoryFiltered.length} {categoryFiltered.length === 1 ? 'pergunta' : 'perguntas'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {categoryFiltered.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          {/* Individual Category Tabs */}
          {categories.filter(c => c.id !== "todas").map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <category.icon className="h-6 w-6 mr-2 text-ms-blue" />
                    {category.label}
                  </CardTitle>
                  <CardDescription>
                    {filteredFAQs.filter(f => f.category === category.label).length} perguntas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs
                      .filter(faq => faq.category === category.label)
                      .map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {filteredFAQs.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Nenhuma pergunta encontrada para "{searchTerm}"
              </p>
            </CardContent>
          </Card>
        )}

        {/* Credits Section */}
        <Card className="mt-8 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="/calcpvt/logo.png"
                alt="Logo"
                className="h-16 w-16 object-contain"
              />
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-blue-900">Renato Gracie</h3>
                <p className="text-sm text-gray-700 font-semibold">Leiloeiro Oficial</p>
                <p className="text-xs text-gray-600 mt-1">Cadastrado no Siajus desde 2007</p>
                <p className="text-xs text-gray-600">Homologado no TJPE - JFPE e TRT6</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
