import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  ClipboardCheck,
  ArrowLeft,
  FileText,
  Bell,
  Calculator,
  DollarSign,
  Megaphone,
  CheckCircle,
  Download,
  RotateCcw
} from "lucide-react";

interface ChecklistItem {
  id: string;
  text: string;
  details?: string;
}

interface ChecklistSection {
  id: string;
  title: string;
  description: string;
  icon: any;
  items: ChecklistItem[];
}

const checklistData: ChecklistSection[] = [
  {
    id: "preparacao",
    title: "1. Preparação Inicial (ANTES de elaborar o edital)",
    description: "Documentação e verificações preliminares essenciais",
    icon: FileText,
    items: [
      { id: "prep-01", text: "Verificar se penhora está averbada na matrícula do imóvel", details: "Se não estiver averbada, providenciar imediatamente junto ao Cartório de Registro de Imóveis" },
      { id: "prep-02", text: "Obter matrícula atualizada do imóvel (máximo 30 dias)", details: "Solicitar certidão de matrícula atualizada no Cartório de Registro de Imóveis competente" },
      { id: "prep-03", text: "Verificar data da última avaliação do bem", details: "Ideal: até 6 meses. Aceitável: até 1 ano. Problemático: mais de 2 anos" },
      { id: "prep-04", text: "Se avaliação > 2 anos: solicitar nova avaliação ao juiz", details: "Decurso superior a 2 anos pode caracterizar preço vil segundo jurisprudência do STJ" },
      { id: "prep-05", text: "Se avaliação entre 6 meses e 2 anos: aplicar atualização monetária", details: "Utilizar índices oficiais como IPCA, INPC ou IGP-M" },
      { id: "prep-06", text: "Solicitar certidão de débitos fiscais junto à Prefeitura", details: "Obter certidão negativa ou positiva de IPTU e taxas municipais" },
      { id: "prep-07", text: "Verificar se há débitos condominiais junto ao síndico/administradora", details: "Solicitar informação por escrito do valor total de débitos condominiais" },
      { id: "prep-08", text: "Verificar se imóvel está ocupado e por quem", details: "Ocupante proprietário, locatário, invasor? Essa informação deve constar no edital" },
      { id: "prep-09", text: "Verificar ônus, hipotecas ou penhoras anteriores na matrícula", details: "Todas as gravações devem ser informadas no edital" },
      { id: "prep-10", text: "Obter fotos atualizadas do imóvel (externas e internas se possível)", details: "As fotos serão anexadas ao edital para melhor divulgação" },
      { id: "prep-11", text: "Verificar se há promitentes compradores com contrato registrado", details: "Esses devem ser intimados obrigatoriamente antes do leilão" },
      { id: "prep-12", text: "Consultar se há ações judiciais em andamento sobre o imóvel", details: "Verificar possíveis embargos de terceiro, ações possessórias, etc." },
    ]
  },
  {
    id: "edital",
    title: "2. Elaboração do Edital",
    description: "Elementos obrigatórios e opcionais do edital (Art. 886 CPC)",
    icon: FileText,
    items: [
      { id: "edit-01", text: "Incluir descrição COMPLETA do bem", details: "Tipo de imóvel (casa, apartamento, terreno, sala comercial), endereço completo, área total, área construída" },
      { id: "edit-02", text: "Informar número da matrícula e Cartório de Registro de Imóveis", details: "Ex: Matrícula nº 12.345, 1º Ofício de Registro de Imóveis de Recife" },
      { id: "edit-03", text: "Informar número do processo judicial, vara e comarca", details: "Ex: Processo nº 0000000-00.0000.0.00.0000, 1ª Vara Cível de Recife/PE" },
      { id: "edit-04", text: "Informar valor da avaliação oficial COM DATA", details: "Ex: Avaliado em R$ 300.000,00 em 15/01/2024" },
      { id: "edit-05", text: "Definir preço mínimo para 1ª praça (geralmente = avaliação)", details: "1ª praça: não pode ser inferior ao valor da avaliação" },
      { id: "edit-06", text: "Definir preço mínimo para 2ª praça (mínimo 50% da avaliação)", details: "2ª praça: geralmente 50% a 70%, NUNCA inferior a 50% (preço vil)" },
      { id: "edit-07", text: "Especificar condições de pagamento (à vista ou parcelado)", details: "Se parcelado: entrada 25%, máx 30 meses, garantia por hipoteca do próprio bem" },
      { id: "edit-08", text: "Informar data, horário e local do leilão (ou plataforma eletrônica)", details: "Ex: 20/03/2024 às 14h00, plataforma www.leiloeiro.com.br" },
      { id: "edit-09", text: "Identificação COMPLETA do leiloeiro", details: "Nome, CPF, Junta Comercial, CNPJ se houver, credenciamento TJPE" },
      { id: "edit-10", text: "Informar comissão do leiloeiro e despesas", details: "Ex: Comissão de 5% sobre o valor da arrematação, a cargo do arrematante" },
      { id: "edit-11", text: "Informar situação de ocupação do imóvel", details: "Ocupado pelo executado / Ocupado por terceiro / Desocupado / Locado" },
      { id: "edit-12", text: "Informar TODOS os ônus, gravames e débitos", details: "Hipotecas, penhoras, débitos fiscais, condominiais, etc." },
      { id: "edit-13", text: "MENCIONAR EXPRESSAMENTE Art. 130, parágrafo único, do CTN", details: "ESSENCIAL: 'Os débitos fiscais anteriores à arrematação serão sub-rogados no preço, nos termos do Art. 130, parágrafo único, do CTN'" },
      { id: "edit-14", text: "NÃO incluir cláusula atribuindo débitos fiscais ao arrematante", details: "STJ declarou INVÁLIDA essa cláusula (Tema 1.134/2024)" },
      { id: "edit-15", text: "Informar claramente responsabilidade por débitos condominiais", details: "Escolher: débitos sub-rogados OU débitos de responsabilidade do arrematante" },
      { id: "edit-16", text: "Incluir regras de participação e impedimentos legais", details: "Vedações: tutor, curador, testamenteiro, administrador, leiloeiro em relação aos bens confiados" },
      { id: "edit-17", text: "Incluir regras de lances mínimos e incrementos", details: "Ex: Lance mínimo de R$ 1.000,00, incrementos de R$ 500,00" },
      { id: "edit-18", text: "Incluir regra de prorrogação automática (extra-time)", details: "'Havendo lance nos 3 minutos finais, o leilão será prorrogado por mais 3 minutos'" },
      { id: "edit-19", text: "Informar prazo para pagamento após arrematação", details: "Geralmente 24h a 72h para depósito judicial" },
      { id: "edit-20", text: "Informar sobre ITBI e custas de registro", details: "ITBI (2% a 4%) e custas do registro da Carta de Arrematação são de responsabilidade do arrematante" },
      { id: "edit-21", text: "Incluir telefones e e-mails para dúvidas", details: "Contato do cartório, do leiloeiro e informações sobre visitação" },
      { id: "edit-22", text: "Revisão jurídica COMPLETA do edital", details: "Antes de submeter ao juiz, revisar todos os elementos obrigatórios" },
    ]
  },
  {
    id: "intimacoes",
    title: "3. Intimações e Notificações (ANTES da publicação)",
    description: "Lista completa de intimações obrigatórias",
    icon: Bell,
    items: [
      { id: "intim-01", text: "Intimar EXECUTADO (devedor) por meio de seu advogado", details: "Se tiver advogado constituído: intimação pelo DJE" },
      { id: "intim-02", text: "Se executado sem advogado: intimação PESSOAL", details: "Por oficial de justiça, correio AR ou edital - NUNCA apenas pelo DJE" },
      { id: "intim-03", text: "Intimar CÔNJUGE do executado", details: "FUNDAMENTAL para evitar nulidade - mesmo cônjuge separado de fato" },
      { id: "intim-04", text: "Intimar EXEQUENTE (credor)", details: "Por meio de seu advogado, intimação pelo DJE" },
      { id: "intim-05", text: "Intimar CREDORES COM GARANTIA REAL", details: "Credores hipotecários, penhora anterior - verificar na matrícula" },
      { id: "intim-06", text: "Intimar FAZENDA PÚBLICA (Prefeitura) se houver débitos de IPTU", details: "Por carta com AR para endereço oficial da Procuradoria" },
      { id: "intim-07", text: "Intimar FAZENDA ESTADUAL se houver débitos estaduais", details: "ITCMD, IPVA de garagem, etc." },
      { id: "intim-08", text: "Intimar FAZENDA FEDERAL se houver débitos federais", details: "Raros em imóveis, mas verificar" },
      { id: "intim-09", text: "Intimar CONDOMÍNIO se houver débitos condominiais", details: "Síndico ou administradora, por carta com AR" },
      { id: "intim-10", text: "Intimar OCUPANTES do imóvel a qualquer título", details: "Locatários, comodatários, possuidores - todos devem ser intimados" },
      { id: "intim-11", text: "Intimar PROMITENTES COMPRADORES com contrato registrado", details: "Verificar na matrícula se há promessa de compra e venda registrada" },
      { id: "intim-12", text: "Publicar edital na DIRETORIA CÍVEL (DOE) se houver determinação", details: "Alguns estados exigem publicação no Diário Oficial além do DJE" },
      { id: "intim-13", text: "Aguardar prazo legal para manifestação das partes", details: "Dar prazo razoável (geralmente 5 a 10 dias) antes de publicar edital" },
      { id: "intim-14", text: "Certificar nos autos TODAS as intimações realizadas", details: "Documentar data, forma e comprovante de cada intimação" },
      { id: "intim-15", text: "Verificar se houve manifestação contrária de alguma parte", details: "Analisar impugnações antes de prosseguir com publicação do edital" },
    ]
  },
  {
    id: "publicacao",
    title: "4. Publicação do Edital",
    description: "Divulgação obrigatória e recomendada",
    icon: Megaphone,
    items: [
      { id: "pub-01", text: "Publicar no Diário da Justiça Eletrônico (DJE) - OBRIGATÓRIO", details: "Publicação oficial vinculada ao processo" },
      { id: "pub-02", text: "Publicar no site do Tribunal (TJPE) - RECOMENDADO", details: "Área de leilões do site do TJPE" },
      { id: "pub-03", text: "Publicar no site do leiloeiro - OBRIGATÓRIO", details: "Leiloeiro deve divulgar em seu site oficial com fotos e detalhes" },
      { id: "pub-04", text: "Fixar edital no átrio do Fórum", details: "Publicação física para ampla divulgação" },
      { id: "pub-05", text: "Verificar se publicação ocorreu com mínimo 5 DIAS ÚTEIS de antecedência", details: "Prazo mínimo entre publicação e data do leilão: 5 dias úteis" },
      { id: "pub-06", text: "Guardar comprovante de todas as publicações", details: "Imprimir/salvar PDF de cada publicação para juntar aos autos" },
      { id: "pub-07", text: "Verificar se todas as informações do edital estão corretas", details: "Conferir data, hora, valores, descrição do bem" },
    ]
  },
  {
    id: "preleilao",
    title: "5. Pré-Leilão (Verificações finais)",
    description: "Conferências antes da realização do leilão",
    icon: CheckCircle,
    items: [
      { id: "pre-01", text: "Confirmar que leiloeiro está credenciado no TJPE", details: "Verificar cadastro ativo no Siajus" },
      { id: "pre-02", text: "Confirmar data, horário e plataforma do leilão", details: "Testar acesso à plataforma eletrônica se for leilão online" },
      { id: "pre-03", text: "Verificar se todas as intimações foram realizadas e certificadas", details: "Revisar checklist de intimações" },
      { id: "pre-04", text: "Verificar se publicações foram feitas com antecedência mínima", details: "Mínimo 5 dias úteis" },
      { id: "pre-05", text: "Verificar se houve impugnação ao edital ou à avaliação", details: "Analisar manifestações das partes" },
      { id: "pre-06", text: "Confirmar valor atualizado da avaliação (se houve atualização monetária)", details: "Aplicar índice correto até a data do leilão" },
      { id: "pre-07", text: "Preparar documentação para o dia do leilão", details: "Edital, matrícula, fotos, laudo de avaliação" },
    ]
  },
  {
    id: "posleilao",
    title: "6. Pós-Leilão (Procedimentos após arrematação)",
    description: "Passos após conclusão do leilão",
    icon: DollarSign,
    items: [
      { id: "pos-01", text: "Verificar se arrematante efetuou pagamento no prazo", details: "Conferir depósito judicial dentro do prazo estabelecido (24h a 72h)" },
      { id: "pos-02", text: "Verificar se arrematante pagou comissão do leiloeiro", details: "Geralmente 5% do valor da arrematação" },
      { id: "pos-03", text: "Lavrar AUTO DE ARREMATAÇÃO", details: "Documento assinado pelo juiz, arrematante e leiloeiro" },
      { id: "pos-04", text: "Incluir no auto: identificação processo, bem, valor, arrematante", details: "Todos os dados essenciais para formalização" },
      { id: "pos-05", text: "Aguardar prazo de 10 DIAS para impugnações (Art. 903, §1º CPC)", details: "Prazo legal para terceiros ou partes impugnarem a arrematação" },
      { id: "pos-06", text: "Se NÃO houver impugnação: expedir CARTA DE ARREMATAÇÃO", details: "Título hábil para registro da propriedade no Cartório" },
      { id: "pos-07", text: "Se HOUVER impugnação: analisar e decidir antes de prosseguir", details: "Juiz deve analisar impugnação e decidir sobre validade da arrematação" },
      { id: "pos-08", text: "Expedir ordem ou mandado de IMISSÃO NA POSSE", details: "Se imóvel estiver ocupado e arrematante solicitar" },
      { id: "pos-09", text: "Informar arrematante sobre necessidade de registro da Carta", details: "Arrematante deve levar Carta ao Cartório de Imóveis para registro" },
      { id: "pos-10", text: "Informar arrematante sobre pagamento de ITBI", details: "ITBI deve ser pago antes do registro (2% a 4% conforme município)" },
      { id: "pos-11", text: "Informar arrematante sobre custas do registro", details: "Custas do Cartório de Imóveis para registro da Carta" },
      { id: "pos-12", text: "Distribuir valor da arrematação conforme ordem de preferência", details: "Pagar débitos sub-rogados (IPTU, condomínio se sub-rogado), credor exequente, etc." },
      { id: "pos-13", text: "Se débitos fiscais sub-rogados: oficiar Prefeitura para recebimento", details: "Informar Fazenda Pública sobre valor disponível para quitação de IPTU" },
      { id: "pos-14", text: "Certificar nos autos a expedição da Carta de Arrematação", details: "Documentar data de expedição e entrega ao arrematante" },
      { id: "pos-15", text: "Acompanhar registro da Carta no Cartório de Imóveis", details: "Verificar se arrematante efetivamente registrou a propriedade" },
    ]
  },
  {
    id: "excecoes",
    title: "7. Situações Especiais",
    description: "Casos que exigem atenção especial",
    icon: Calculator,
    items: [
      { id: "exc-01", text: "Imóvel rural: verificar competência (Justiça Estadual ou Federal)", details: "Imóveis rurais podem ter regras específicas dependendo do caso" },
      { id: "exc-02", text: "Imóvel de herança: verificar se inventário está pendente", details: "Pode haver necessidade de aguardar conclusão do inventário" },
      { id: "exc-03", text: "Imóvel com alienação fiduciária: verificar se há consolidação", details: "Aplicam-se regras especiais da Lei 9.514/97" },
      { id: "exc-04", text: "Bem de família: verificar impenhorabilidade (Lei 8.009/90)", details: "Exceções: dívidas de IPTU, condomínio, financiamento do próprio imóvel" },
      { id: "exc-05", text: "Imóvel residencial financiado: verificar SFH", details: "Sistema Financeiro de Habitação tem regras especiais" },
      { id: "exc-06", text: "Múltiplas penhoras: observar ordem cronológica e preferências", details: "Rateio entre credores conforme Arts. 908 e seguintes do CPC" },
      { id: "exc-07", text: "Imóvel com restrições ambientais: informar no edital", details: "APP, reserva legal, embargo ambiental" },
      { id: "exc-08", text: "Imóvel irregular/clandestino: avaliar viabilidade do leilão", details: "Imóvel sem registro pode ter valor reduzido ou ser inviável para leilão" },
      { id: "exc-09", text: "Imóvel tombado: informar restrições de patrimônio histórico", details: "Limitações de reforma e uso devem constar no edital" },
      { id: "exc-10", text: "Terreno de marinha: verificar regime jurídico especial", details: "Terrenos da União têm regras específicas" },
    ]
  },
  {
    id: "erros",
    title: "8. Erros Comuns a EVITAR",
    description: "Principais equívocos que causam nulidade",
    icon: FileText,
    items: [
      { id: "erro-01", text: "NÃO realizar leilão com avaliação > 2 anos sem atualização", details: "Risco de caracterizar preço vil - STJ pode anular" },
      { id: "erro-02", text: "NÃO fazer leilão sem averbar penhora na matrícula", details: "Terceiros de boa-fé podem adquirir o bem, prejudicando arrematante" },
      { id: "erro-03", text: "NÃO esquecer de intimar a Prefeitura se houver débitos de IPTU", details: "Arrematante pode ser cobrado e anular arrematação" },
      { id: "erro-04", text: "NÃO esquecer de intimar cônjuge do executado", details: "Gera nulidade por vício de intimação" },
      { id: "erro-05", text: "NÃO esquecer de mencionar Art. 130 do CTN no edital", details: "Débitos fiscais podem ficar com o arrematante" },
      { id: "erro-06", text: "NÃO incluir cláusula atribuindo débitos fiscais ao arrematante", details: "Cláusula INVÁLIDA segundo STJ (Tema 1.134/2024)" },
      { id: "erro-07", text: "NÃO realizar leilão com prazo < 5 dias úteis após publicação", details: "Viola princípio da publicidade" },
      { id: "erro-08", text: "NÃO fixar preço mínimo < 50% na 2ª praça", details: "Caracteriza preço vil" },
      { id: "erro-09", text: "NÃO esquecer de incluir elementos obrigatórios do edital (Art. 886)", details: "Falta de elemento obrigatório pode gerar nulidade" },
      { id: "erro-10", text: "NÃO esquecer de intimar ocupantes do imóvel", details: "Pode gerar embargos de terceiro e anulação" },
    ]
  },
];

const Checklist = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleToggle = (itemId: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleResetAll = () => {
    setCheckedItems(new Set());
  };

  const totalItems = checklistData.reduce((sum, section) => sum + section.items.length, 0);
  const completedItems = checkedItems.size;
  const progressPercentage = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/curso")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Curso
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-ms-blue flex items-center">
                  <ClipboardCheck className="mr-2 h-8 w-8" />
                  Checklist Completo de Leilão Judicial
                </h1>
                <p className="text-gray-600 mt-1">
                  Lista de verificação completa para servidores do TJPE
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progresso do Checklist
              </span>
              <span className="text-sm font-bold text-ms-blue">
                {completedItems} de {totalItems} itens ({progressPercentage}%)
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-end mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetAll}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Resetar Todos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-6">
          {checklistData.map((section) => {
            const sectionCompleted = section.items.filter(item => checkedItems.has(item.id)).length;
            const sectionProgress = Math.round((sectionCompleted / section.items.length) * 100);

            return (
              <Card key={section.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center">
                        <section.icon className="h-6 w-6 mr-2 text-ms-blue" />
                        {section.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Progresso da Seção</span>
                      <span className="text-xs font-medium">
                        {sectionCompleted}/{section.items.length} ({sectionProgress}%)
                      </span>
                    </div>
                    <Progress value={sectionProgress} className="h-1.5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="items">
                      <AccordionTrigger>
                        Ver Itens ({section.items.length})
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          {section.items.map((item) => (
                            <div
                              key={item.id}
                              className={`flex items-start space-x-3 p-3 rounded-lg border ${
                                checkedItems.has(item.id)
                                  ? 'bg-green-50 border-green-200'
                                  : 'bg-white border-gray-200'
                              }`}
                            >
                              <Checkbox
                                id={item.id}
                                checked={checkedItems.has(item.id)}
                                onCheckedChange={() => handleToggle(item.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <label
                                  htmlFor={item.id}
                                  className={`text-sm font-medium cursor-pointer ${
                                    checkedItems.has(item.id)
                                      ? 'text-green-900 line-through'
                                      : 'text-gray-900'
                                  }`}
                                >
                                  {item.text}
                                </label>
                                {item.details && (
                                  <p className="text-xs text-gray-600 mt-1">
                                    {item.details}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Completion Card */}
        {progressPercentage === 100 && (
          <Card className="mt-8 border-green-500 bg-green-50">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                Parabéns! Checklist Completo!
              </h3>
              <p className="text-green-700">
                Você verificou todos os {totalItems} itens do checklist.
                Agora você está pronto para conduzir um leilão judicial seguro e juridicamente adequado.
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

export default Checklist;
