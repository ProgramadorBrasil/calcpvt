import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, ArrowLeft, Book } from "lucide-react";

const FAQ = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      category: "Fundamentos Legais",
      questions: [
        {
          q: "Quais são os principais artigos do CPC que regem os leilões judiciais?",
          a: "Os leilões judiciais são regulamentados pelos artigos 879 a 903 do Código de Processo Civil de 2015 (Lei 13.105/2015). O Art. 879 define que a alienação em hasta pública será por leilão para bens móveis e por praça para imóveis. O Art. 903 estabelece que a arrematação é irretratável após a assinatura do auto."
        },
        {
          q: "Qual a diferença entre leilão judicial e extrajudicial?",
          a: "Leilão Judicial: conduzido pelo Poder Judiciário em processos de execução, com leiloeiro designado pelo juiz e participação de todas as partes. Leilão Extrajudicial (Lei 9.514/97): promovido pelo credor fiduciário após consolidação da propriedade, sem intervenção judicial inicial, procedimento mais ágil mas com menos garantias."
        },
        {
          q: "O que é o artigo 130 do CTN e qual sua importância?",
          a: "O Art. 130 do CTN estabelece que os débitos tributários (IPTU, taxas) anteriores à arrematação NÃO são de responsabilidade do arrematante. Esses débitos são pagos com o valor da arrematação (sub-rogação). O STJ decidiu no Tema 1.134/2024 que é inválida qualquer cláusula no edital que atribua ao arrematante a responsabilidade por débitos anteriores."
        }
      ]
    },
    {
      category: "Elaboração de Editais",
      questions: [
        {
          q: "Quais são as informações obrigatórias em um edital de leilão?",
          a: "Informações obrigatórias: identificação completa do imóvel (matrícula, endereço, metragem), valor da avaliação atualizada, primeiro e segundo leilão (datas e valores), forma de pagamento, débitos conhecidos, prazo para desocupação, condições da venda (Art. 130 CTN), dados do processo e forma de visitação."
        },
        {
          q: "Como calcular o valor do segundo leilão?",
          a: "No segundo leilão, o valor mínimo é reduzido em até 25% do valor da avaliação do primeiro leilão, conforme Art. 891, §1º do CPC. Exemplo: se o primeiro leilão foi avaliado em R$ 400.000, o segundo pode aceitar lances a partir de R$ 300.000 (redução de 25%)."
        },
        {
          q: "Como deve ser feita a descrição de débitos no edital?",
          a: "Deve-se listar TODOS os débitos conhecidos: IPTU e taxas municipais (com valores e anos), débitos condominiais (valor total e taxa mensal), ITBI estimado, tributos federais se houver. Sempre incluir a cláusula do Art. 130 do CTN para proteger o arrematante."
        }
      ]
    },
    {
      category: "Notificações e Publicidade",
      questions: [
        {
          q: "Quem deve ser notificado antes do leilão?",
          a: "Devem ser notificados: executado/devedor (pessoalmente ou por edital se não localizado), cônjuge do executado, credores com garantia real, órgãos fiscais competentes (União, Estado, Município), condomínio (se aplicável) e eventuais ocupantes do imóvel."
        },
        {
          q: "Qual o prazo mínimo para publicação do edital?",
          a: "O edital deve ser publicado com antecedência mínima conforme Art. 887 do CPC. Geralmente 20 a 30 dias antes do primeiro leilão. A publicação deve ser feita no site do tribunal, em jornal de grande circulação e no local do costume (fórum)."
        },
        {
          q: "O que acontece se a notificação não for feita corretamente?",
          a: "Notificação incorreta ou omitida pode causar NULIDADE do leilão. O arrematante pode perder o imóvel e ter que aguardar devolução dos valores pagos. É fundamental seguir rigorosamente os requisitos de notificação para evitar prejuízos."
        }
      ]
    },
    {
      category: "Avaliações e Laudos",
      questions: [
        {
          q: "Quando é necessário atualizar a avaliação do imóvel?",
          a: "A avaliação deve ser atualizada se tiver mais de 1 ano da data do leilão, ou se houver valorização/desvalorização significativa do mercado (Art. 879, §2º do CPC). Mudanças estruturais no imóvel ou no bairro também exigem reavaliação."
        },
        {
          q: "O que deve conter um laudo de avaliação completo?",
          a: "Laudo completo contém: identificação do imóvel e matrícula, metragem e características físicas, estado de conservação detalhado, análise de mercado local, método de avaliação usado (comparativo, renda, custo), valor venal x valor de mercado, fotos atualizadas e assinatura do avaliador."
        },
        {
          q: "Como corrigir o valor da avaliação pela inflação?",
          a: "Usar índices oficiais como IPCA-E, INPC ou IGPM conforme determinação judicial. Fórmula: Valor Atualizado = Valor Original × (Índice Atual / Índice da Data Original). Sempre documentar o índice usado e os cálculos."
        }
      ]
    },
    {
      category: "Débitos e Sub-rogação",
      questions: [
        {
          q: "O que é sub-rogação e como funciona?",
          a: "Sub-rogação é quando os débitos do imóvel são transferidos do bem para o valor da arrematação. O arrematante recebe o imóvel livre de débitos, e os credores recebem do valor pago na arrematação. Aplica-se a tributos (Art. 130 CTN) e pode aplicar-se a débitos condominiais."
        },
        {
          q: "Débitos condominiais são de responsabilidade do arrematante?",
          a: "Depende da modalidade: Em execuções comuns, débitos anteriores são do arrematante conforme Art. 1.345 do CC. Em execuções fiscais, há decisões do STJ aplicando sub-rogação. O edital deve ser CLARO sobre isso. STJ tem decisões divergentes, por isso é essencial especificar no edital."
        },
        {
          q: "Como calcular a ordem de pagamento dos credores?",
          a: "Ordem legal: 1º Custas judiciais, 2º Tributos (IPTU, taxas - Art. 130 CTN), 3º Créditos com garantia real (hipoteca, penhora), 4º Credor exequente, 5º Demais credores. Cada categoria deve ser paga na integralidade antes de passar para a próxima."
        }
      ]
    },
    {
      category: "10 Erros Comuns",
      questions: [
        {
          q: "Quais são os 10 erros mais comuns em leilões judiciais?",
          a: "1. Omitir débitos conhecidos no edital, 2. Não mencionar Art. 130 do CTN, 3. Avaliação desatualizada (>1 ano), 4. Descrição incompleta do imóvel, 5. Falha na notificação do executado, 6. Não verificar ocupação irregular, 7. Prazo inadequado para desocupação, 8. Confusão sobre débitos condominiais, 9. Não consultar matrícula atualizada, 10. Edital sem clareza sobre responsabilidades."
        },
        {
          q: "Como evitar nulidade do leilão por falta de notificação?",
          a: "Garantir notificação pessoal do executado (ou edital se não localizado), notificar cônjuge, notificar credores com garantia real, notificar órgãos fiscais, documentar todas as tentativas de notificação, usar AR (Aviso de Recebimento), guardar comprovantes e publicar editais em locais determinados por lei."
        },
        {
          q: "O que fazer se houver erro no edital após publicação?",
          a: "Se erro substancial (valor, descrição, débitos): suspender o leilão, publicar edital retificador com nova data, notificar novamente os interessados. Se erro formal (grafia, data não essencial): retificação pode ser mais simples. Sempre consultar o juiz antes de qualquer retificação."
        }
      ]
    },
    {
      category: "Aspectos Práticos",
      questions: [
        {
          q: "Como funciona o leilão eletrônico?",
          a: "Leilão eletrônico segue a Resolução 236/2016 do CNJ. Acontece em plataforma online homologada, com credenciamento prévio dos interessados, depósito prévio de caução (geralmente 10-20% do valor), lances online durante período definido, prorrogação automática se houver lance nos últimos minutos."
        },
        {
          q: "Qual o prazo para pagamento após arrematação?",
          a: "Geralmente 15 dias úteis após a assinatura do auto de arrematação, conforme edital. Pode ser à vista ou parcelado conforme autorização judicial. Atraso pode acarretar multa, perda do depósito de caução e reabertura do leilão."
        },
        {
          q: "Como funciona a desocupação do imóvel arrematado?",
          a: "Prazo de desocupação deve constar no edital (geralmente 60-180 dias). Se voluntária, ocupante entrega as chaves. Se forçada, juiz expede mandado de imissão na posse. Arrematante NÃO pode fazer desocupação por conta própria (seria esbulho possessório)."
        },
        {
          q: "O arrematante pode desistir após a arrematação?",
          a: "NÃO. O Art. 903 do CPC estabelece que a arrematação é irretratável. Desistência pode resultar em: perda do valor depositado, responsabilização por diferença de preço se novo leilão for menor, possível crime de fraude à execução."
        },
        {
          q: "Como verificar se um imóvel tem problemas judiciais?",
          a: "Solicitar certidão de matrícula atualizada no Registro de Imóveis, verificar averbações e ônus, consultar processos no nome do proprietário, verificar débitos de IPTU na Prefeitura, consultar débitos condominiais no condomínio e consultar certidões negativas (federal, estadual, municipal)."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/curso")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Curso
            </Button>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-ms-blue flex items-center">
              <HelpCircle className="mr-3 h-8 w-8" />
              FAQ - Perguntas Frequentes
            </h1>
            <p className="text-gray-600 mt-2">
              Respostas para as dúvidas mais comuns sobre leilões judiciais
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar pergunta ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Content */}
        {filteredFAQ.length > 0 ? (
          <div className="space-y-6">
            {filteredFAQ.map((category, categoryIdx) => (
              <Card key={categoryIdx}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-5 w-5 mr-2 text-ms-blue" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    {category.questions.length} pergunta{category.questions.length !== 1 ? 's' : ''}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${categoryIdx}-${idx}`}>
                        <AccordionTrigger className="text-left hover:text-ms-blue">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {item.a}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Nenhuma pergunta encontrada para "{searchTerm}"
              </p>
              <Button
                variant="ghost"
                onClick={() => setSearchTerm("")}
                className="mt-4"
              >
                Limpar busca
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Credits */}
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
