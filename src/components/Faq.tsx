
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { 
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface FaqItem {
  question: string;
  answer: string;
  categoria: "geral" | "custos" | "documentos" | "lances" | "processo" | "legal";
}

const Faq: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [commandOpen, setCommandOpen] = useState(false);
  const [highlightedSuggestions, setHighlightedSuggestions] = useState<string[]>([]);

  // Opening keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // FAQ data
  const faqItems: FaqItem[] = [
    {
      question: "O que é um leilão judicial?",
      answer: "É uma modalidade de venda pública de bens penhorados no curso de processos judiciais, realizada por leiloeiro público designado pelo juiz. Os leilões judiciais são regidos pelo Código de Processo Civil (Lei 13.105/2015).",
      categoria: "geral"
    },
    {
      question: "Como participar de um leilão de imóveis?",
      answer: "Para participar de um leilão de imóveis, você precisa se cadastrar na plataforma do leiloeiro designado, apresentar documentos de identificação, e em alguns casos, fazer um depósito caução. É importante ler o edital completo do leilão para entender todas as regras específicas.",
      categoria: "geral"
    },
    {
      question: "Qual a diferença entre 1ª e 2ª praça?",
      answer: "Na 1ª praça (ou leilão), o lance mínimo deve ser igual ou superior ao valor da avaliação do imóvel. Se não houver compradores, realiza-se a 2ª praça, na qual o imóvel pode ser arrematado por valores inferiores, geralmente a partir de 50% a 60% do valor avaliado.",
      categoria: "lances"
    },
    {
      question: "Quais documentos são necessários para participar de um leilão?",
      answer: "Geralmente são exigidos: documento de identidade, CPF, comprovante de residência, comprovante de estado civil. Para pessoas jurídicas: contrato social, CNPJ e documentos dos sócios. Alguns leilões podem solicitar comprovação de renda ou depósito prévio como caução.",
      categoria: "documentos"
    },
    {
      question: "Quais são os custos envolvidos na arrematação em leilão?",
      answer: "Além do valor da arrematação, o arrematante geralmente paga a comissão do leiloeiro (5%), custas de carta de arrematação, ITBI, eventuais débitos condominiais (conforme edital), e custos para regularização do imóvel perante cartórios.",
      categoria: "custos"
    },
    {
      question: "Posso desistir da compra após dar um lance vencedor?",
      answer: "Em regra, não. O lance é considerado uma proposta irrevogável após ser homologado pelo juiz. A desistência injustificada pode resultar em multa de até 20% sobre o valor da avaliação, além da proibição de participar em outros leilões.",
      categoria: "lances"
    },
    {
      question: "Como é feito o pagamento em um leilão judicial?",
      answer: "O pagamento geralmente é realizado via guia de depósito judicial, diretamente em conta vinculada ao processo. O prazo comum é de 24 horas para sinal ou caução e até 15 ou 30 dias para o restante, dependendo das condições do edital.",
      categoria: "processo"
    },
    {
      question: "O imóvel em leilão está ocupado. Quem é responsável pela desocupação?",
      answer: "A responsabilidade pela desocupação é do arrematante, que poderá solicitar ao juízo a imissão na posse após a expedição da carta de arrematação. Os custos e o tempo do processo de desocupação podem variar conforme a situação específica.",
      categoria: "processo"
    },
    {
      question: "Quais são os riscos de comprar um imóvel em leilão?",
      answer: "Os principais riscos incluem: imóvel ocupado, necessidade de regularização documental, existência de ônus não informados no edital, ações judiciais questionando a arrematação, e possíveis problemas estruturais no imóvel que não puderam ser verificados previamente.",
      categoria: "legal"
    },
    {
      question: "Posso financiar um imóvel adquirido em leilão?",
      answer: "Sim, é possível financiar imóveis arrematados em leilão, mas o processo é mais complexo do que em compras convencionais. Nem todas as instituições financeiras aceitam essa modalidade, e o financiamento só pode ser solicitado após a expedição da carta de arrematação.",
      categoria: "custos"
    },
    {
      question: "Quais impostos incidem na compra de imóvel em leilão?",
      answer: "O principal imposto é o ITBI (Imposto sobre Transmissão de Bens Imóveis), que varia de 2% a 5% conforme o município. Pode haver também o recolhimento de IPTU atrasado, dependendo do que estiver estabelecido no edital do leilão.",
      categoria: "custos"
    },
    {
      question: "O que é a carta de arrematação?",
      answer: "É o documento que formaliza a transferência da propriedade do bem leiloado para o arrematante. Ela é expedida pelo juízo após o pagamento integral do lance e da comissão do leiloeiro, e serve como título para registro no cartório de imóveis.",
      categoria: "documentos"
    },
    {
      question: "Posso visitar o imóvel antes do leilão?",
      answer: "Depende do caso. Em alguns leilões, especialmente os extrajudiciais, é possível agendar visitas. Em leilões judiciais de imóveis ocupados, a visita pode ser mais difícil. O edital do leilão deve informar sobre a possibilidade de visitação.",
      categoria: "geral"
    },
    {
      question: "O que acontece com as dívidas do imóvel após a arrematação?",
      answer: "Em regra, dívidas fiscais e condominiais sub-rogam-se no preço da arrematação (são pagas com o valor arrecadado). No entanto, é importante verificar no edital quais dívidas serão de responsabilidade do arrematante após a compra.",
      categoria: "legal"
    },
    {
      question: "É possível cancelar um leilão?",
      answer: "Sim, um leilão pode ser cancelado ou suspenso por determinação judicial, geralmente por solicitação do executado que quitou a dívida, por acordo entre as partes, ou por identificação de irregularidades no processo.",
      categoria: "processo"
    },
    {
      question: "Como funciona o leilão online de imóveis?",
      answer: "Os leilões online são realizados em plataformas digitais específicas. O interessado deve se cadastrar no site, apresentar documentação, habilitar-se para o leilão específico e dar lances remotamente. Todo o processo pode ser acompanhado pela internet.",
      categoria: "geral"
    },
    {
      question: "O que significa arrematar um imóvel?",
      answer: "Arrematar significa adquirir um bem em leilão por meio de um lance vencedor. O arrematante passa a ter direito sobre o imóvel após cumprir todas as condições do edital, como pagamento do valor e comissão do leiloeiro.",
      categoria: "geral"
    },
    {
      question: "Qual é o papel do leiloeiro no processo?",
      answer: "O leiloeiro é o responsável por conduzir o leilão, anunciar os lotes, receber os lances e declarar o vencedor. Ele também elabora o auto de arrematação, cobra o valor do lance e sua comissão, e presta contas ao juízo.",
      categoria: "processo"
    },
    {
      question: "Como saber se há leilões de imóveis na minha região?",
      answer: "Você pode consultar os sites dos Tribunais de Justiça, plataformas de leilão online, jornais de grande circulação, ou se cadastrar em sites de leiloeiros para receber notificações sobre novos leilões na sua região de interesse.",
      categoria: "geral"
    },
    {
      question: "O que é lance livre?",
      answer: "Lance livre significa que não há um valor mínimo pré-estabelecido para os lances, diferente da primeira praça onde o valor mínimo é o de avaliação. Geralmente ocorre na segunda praça, mas ainda pode haver um percentual mínimo definido pelo juiz.",
      categoria: "lances"
    },
    {
      question: "Devo contratar um advogado para participar de leilões?",
      answer: "Não é obrigatório, mas é altamente recomendável. Um advogado especializado pode analisar o edital e a documentação do imóvel, identificar possíveis riscos e orientar sobre o processo de arrematação e transferência do bem.",
      categoria: "legal"
    },
    {
      question: "O imóvel leiloado tem garantia?",
      answer: "Não. Imóveis arrematados em leilão são vendidos no estado em que se encontram, sem garantias quanto a vícios ocultos ou evicção. Por isso, é importante fazer uma pesquisa detalhada sobre o imóvel antes de dar lances.",
      categoria: "legal"
    },
    {
      question: "Posso parcelar o valor da arrematação?",
      answer: "Em alguns casos, sim. Depende do que estiver previsto no edital do leilão. Alguns leilões judiciais permitem o pagamento parcelado, geralmente com entrada de 25% a 30% e o restante em até 30 meses, com correção monetária.",
      categoria: "custos"
    },
    {
      question: "O que é um edital de leilão?",
      answer: "É o documento que contém todas as informações oficiais sobre o leilão, como descrição do bem, valor da avaliação, datas da primeira e segunda praça, condições de pagamento, estado de ocupação, eventuais ônus e pendências sobre o imóvel.",
      categoria: "documentos"
    },
    {
      question: "Quando recebo a posse do imóvel arrematado?",
      answer: "A posse do imóvel é transferida após a expedição da carta de arrematação, que ocorre depois do pagamento integral do lance e da comissão do leiloeiro. Se o imóvel estiver ocupado, será necessário um processo de imissão na posse.",
      categoria: "processo"
    },
    {
      question: "O que é um leilão extrajudicial de imóveis?",
      answer: "É uma modalidade de leilão realizada por instituições financeiras para venda de imóveis dados em garantia em contratos de alienação fiduciária, quando o devedor fica inadimplente. É regulado pela Lei 9.514/97.",
      categoria: "geral"
    },
    {
      question: "Como sei se o imóvel tem dívidas?",
      answer: "É necessário fazer pesquisas em diversos órgãos: certidão de ônus reais no Registro de Imóveis, débitos de IPTU na prefeitura, débitos condominiais junto ao síndico ou administradora, além de certidões negativas de débitos fiscais federais, estaduais e municipais.",
      categoria: "legal"
    },
    {
      question: "O que é um auto de arrematação?",
      answer: "É o documento lavrado pelo leiloeiro após a confirmação do pagamento do lance vencedor, que formaliza a venda em leilão. Contém informações sobre o bem arrematado, valor do lance, dados do arrematante e condições da venda.",
      categoria: "documentos"
    },
    {
      question: "O que significa sub-rogação de dívidas?",
      answer: "Significa que as dívidas são transferidas para o valor arrecadado no leilão. Ou seja, os credores do antigo proprietário receberão seus créditos do valor pago pelo arrematante, sem que este tenha que arcar com dívidas anteriores à arrematação.",
      categoria: "legal"
    },
    {
      question: "Posso comprar um imóvel em leilão para investimento?",
      answer: "Sim, muitos investidores participam de leilões porque os imóveis geralmente são vendidos abaixo do valor de mercado, especialmente em segunda praça. No entanto, é importante estar ciente dos riscos e custos adicionais envolvidos.",
      categoria: "geral"
    },
    {
      question: "O que é avaliação judicial do imóvel?",
      answer: "É a estimativa do valor de mercado do imóvel realizada por um perito nomeado pelo juiz. Serve como base para o valor mínimo de lance na primeira praça do leilão judicial.",
      categoria: "processo"
    },
    {
      question: "Posso desistir da compra se descobrir problemas no imóvel após a arrematação?",
      answer: "Em regra, não. A arrematação em leilão é considerada definitiva após a assinatura do auto de arrematação. Por isso, é fundamental pesquisar bem antes de dar lances.",
      categoria: "legal"
    },
    {
      question: "O que é um leilão deserto?",
      answer: "É quando não há interessados em dar lances durante o período do leilão. Quando isso ocorre na primeira praça, geralmente é marcada uma segunda praça com valor mínimo inferior ao da avaliação.",
      categoria: "processo"
    },
    {
      question: "Quem pode participar de um leilão judicial?",
      answer: "Qualquer pessoa física ou jurídica que esteja em pleno gozo de seus direitos civis e não tenha impedimentos legais, como ser parte no processo, advogado da causa, juiz, membros do Ministério Público, servidores do judiciário, entre outros.",
      categoria: "geral"
    },
    {
      question: "Qual é a diferença entre arrematação e adjudicação?",
      answer: "Arrematação é a aquisição do bem por terceiro em leilão público. Adjudicação é quando o próprio credor adquire o bem penhorado como forma de pagamento da dívida, sem necessidade de leilão.",
      categoria: "legal"
    },
    {
      question: "O que é um leilão simultâneo?",
      answer: "É o leilão realizado simultaneamente nas modalidades presencial e eletrônica, permitindo que os interessados possam dar lances tanto pessoalmente quanto pela internet.",
      categoria: "processo"
    },
    {
      question: "Como é definido o valor mínimo de lance?",
      answer: "Na primeira praça, o valor mínimo é o da avaliação judicial do imóvel. Na segunda praça, geralmente é um percentual desse valor, definido pelo juiz, que costuma variar entre 50% e 70% do valor da avaliação.",
      categoria: "lances"
    },
    {
      question: "O que acontece se o arrematante não pagar o valor do lance?",
      answer: "Se o arrematante não efetuar o pagamento no prazo estabelecido, perderá o sinal dado (se houver) e ficará impedido de participar de novos leilões por determinado período, além de poder responder por eventuais prejuízos.",
      categoria: "lances"
    },
    {
      question: "Qual o prazo para transferir o imóvel para o nome do arrematante?",
      answer: "Não há um prazo legal específico, mas recomenda-se fazer o registro da carta de arrematação no Registro de Imóveis o mais rápido possível após sua expedição, que geralmente ocorre entre 30 e 90 dias após o pagamento integral.",
      categoria: "documentos"
    },
    {
      question: "O que é remição?",
      answer: "É o direito que o executado (devedor) ou seu cônjuge, descendente ou ascendente tem de resgatar o bem penhorado pagando integralmente a dívida antes da assinatura do auto de arrematação ou até a publicação da sentença de adjudicação.",
      categoria: "legal"
    }
  ];

  // Filtrar FAQs com base na pesquisa
  const filteredFaqs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle para abrir/fechar um item
  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Categorias para filtragem rápida
  const categorias = [
    { id: "geral", label: "Informações Gerais" },
    { id: "custos", label: "Custos e Financiamento" },
    { id: "documentos", label: "Documentação" },
    { id: "lances", label: "Lances e Arrematação" },
    { id: "processo", label: "Processo do Leilão" },
    { id: "legal", label: "Aspectos Legais" }
  ];

  // Função para filtrar por categoria
  const handleCategoryClick = (categoria: string) => {
    if (categoria === "todos") {
      setSearchQuery('');
    } else {
      setSearchQuery(categoria);
    }
  };

  // Auto-completar sugestões
  useEffect(() => {
    if (searchQuery.length > 1) {
      const newSuggestions = faqItems
        .filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(item => item.question);
      setHighlightedSuggestions(newSuggestions.slice(0, 5));
    } else {
      setHighlightedSuggestions([]);
    }
  }, [searchQuery]);

  // Primeiras 40 perguntas para sugestões
  const suggestedQuestions = faqItems.slice(0, 40);

  return (
    <div className="space-y-6">
      <div className="relative" onClick={() => setCommandOpen(true)}>
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Pesquisar dúvidas frequentes... (Ctrl + K)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput 
          placeholder="Digite sua pergunta..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            {highlightedSuggestions.map((suggestion) => (
              <CommandItem
                key={suggestion}
                onSelect={() => {
                  setSearchQuery(suggestion);
                  setCommandOpen(false);
                }}
              >
                {suggestion}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          onClick={() => handleCategoryClick("todos")}
        >
          Todas as Categorias
        </Badge>
        
        {categorias.map((cat) => (
          <Badge 
            key={cat.id}
            variant="outline" 
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.label}
          </Badge>
        ))}
      </div>

      {searchQuery === '' && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedQuestions.map((item, idx) => (
              <Card 
                key={idx} 
                className="cursor-pointer transition-all hover:shadow-md"
                onClick={() => {
                  setSearchQuery(item.question);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">{item.question}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      <div className="logos-container mb-8 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
        <h3 className="text-lg font-medium mb-4">Plataformas de Leilões</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="logo-item flex flex-col items-center">
            <img src="https://www.superbid.net/Content/images/logo-superbid.svg" alt="Superbid" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="logo-item flex flex-col items-center">
            <img src="https://www.leilaodearte.com/wp-content/uploads/2020/07/logo_leilao_de_arte.svg" alt="Leilão de Arte" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="logo-item flex flex-col items-center">
            <img src="https://www.zukerman.com.br/img/logo-zukerman.svg" alt="Zukerman Leilões" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="logo-item flex flex-col items-center">
            <img src="https://megaleiloes.com.br/arquivos-enviados/nova-marca-mga-1697116841.png" alt="Mega Leilões" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="logo-item flex flex-col items-center">
            <img src="https://www.nossoleilao.com.br/images/logo.jpg" alt="Nosso Leilão" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
      
      {filteredFaqs.length > 0 ? (
        <div className="space-y-4">
          {filteredFaqs.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <Collapsible 
                open={openItems[index]} 
                onOpenChange={() => toggleItem(index)}
              >
                <CardHeader className="py-3">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="flex justify-between w-full p-0 h-auto">
                      <CardTitle className="text-left text-base">{item.question}</CardTitle>
                      <div className="text-sm">{openItems[index] ? '−' : '+'}</div>
                    </Button>
                  </CollapsibleTrigger>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-3">
                    <p>{item.answer}</p>
                    <div className="mt-2 flex justify-end">
                      <Badge variant="secondary">
                        {categorias.find(cat => cat.id === item.categoria)?.label || item.categoria}
                      </Badge>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <p className="text-muted-foreground mb-2">Nenhum resultado encontrado para "{searchQuery}"</p>
            <Button variant="outline" onClick={() => setSearchQuery('')}>
              Limpar pesquisa
            </Button>
          </CardContent>
        </Card>
      )}
      
      <Card className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle>Precisa de ajuda com leilões de imóveis?</CardTitle>
          <CardDescription>
            Consulte especialistas e aprenda mais sobre o processo de leilões
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Recursos Disponíveis</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Guias completos sobre leilões judiciais</li>
                <li>Modelos de documentos necessários</li>
                <li>Calculadoras para estimar custos</li>
                <li>Checklists para análise de imóveis</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Consultoria Especializada</h3>
              <p className="text-sm">
                Para dúvidas específicas, recomendamos consultar um advogado especializado em direito imobiliário
                e leilões judiciais para garantir segurança na sua aquisição.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Faq;
