import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, FileCheck, AlertCircle, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface ChecklistItem {
  id: string;
  text: string;
  details?: string;
  critical?: boolean;
}

interface ChecklistSection {
  title: string;
  description: string;
  items: ChecklistItem[];
}

const Checklist = () => {
  const navigate = useNavigate();

  const checklistData: ChecklistSection[] = [
    {
      title: "1. Preparação Inicial do Processo",
      description: "Verificações preliminares antes de iniciar o procedimento",
      items: [
        {
          id: "prep-1",
          text: "Verificar se há penhora devidamente registrada",
          details: "Confirmar averbação da penhora na matrícula do imóvel",
          critical: true
        },
        {
          id: "prep-2",
          text: "Solicitar certidão de matrícula atualizada",
          details: "Máximo 30 dias de emissão, verificar todos os ônus e averbações",
          critical: true
        },
        {
          id: "prep-3",
          text: "Verificar se há avaliação válida (menos de 1 ano)",
          details: "Se > 1 ano, solicitar nova avaliação judicial"
        },
        {
          id: "prep-4",
          text: "Conferir documentação do processo completa",
          details: "Petição inicial, citações, penhora, avaliação, certidões"
        }
      ]
    },
    {
      title: "2. Pesquisa de Débitos",
      description: "Levantamento completo de todos os débitos do imóvel",
      items: [
        {
          id: "deb-1",
          text: "Consultar débitos de IPTU na Prefeitura",
          details: "Valores, anos em aberto, taxa mensal atual",
          critical: true
        },
        {
          id: "deb-2",
          text: "Verificar débitos condominiais (se aplicável)",
          details: "Valor total, taxa mensal, nome do síndico para contato",
          critical: true
        },
        {
          id: "deb-3",
          text: "Consultar débitos federais",
          details: "ITR (se rural), certidão de débitos da RFB"
        },
        {
          id: "deb-4",
          text: "Verificar débitos estaduais",
          details: "ITCD, IPVA (se garagem), outros tributos estaduais"
        },
        {
          id: "deb-5",
          text: "Pesquisar ônus e gravames na matrícula",
          details: "Hipotecas, penhoras, servidões, usufrutos"
        }
      ]
    },
    {
      title: "3. Elaboração do Edital",
      description: "Confecção do edital com todas as informações obrigatórias",
      items: [
        {
          id: "edit-1",
          text: "Identificação completa do imóvel",
          details: "Matrícula, endereço completo, metragem, características",
          critical: true
        },
        {
          id: "edit-2",
          text: "Valor da avaliação atualizado",
          details: "Com índice usado para correção e data base",
          critical: true
        },
        {
          id: "edit-3",
          text: "Datas e valores do 1º e 2º leilão",
          details: "2º leilão: até 25% menor que o 1º",
          critical: true
        },
        {
          id: "edit-4",
          text: "Incluir cláusula do Art. 130 do CTN",
          details: "Especificar sub-rogação de tributos no preço",
          critical: true
        },
        {
          id: "edit-5",
          text: "Listar TODOS os débitos conhecidos",
          details: "IPTU, condomínio, taxas, tributos - com valores",
          critical: true
        },
        {
          id: "edit-6",
          text: "Definir forma de pagamento",
          details: "À vista ou parcelado, prazos, juros se parcelado"
        },
        {
          id: "edit-7",
          text: "Estipular prazo para desocupação",
          details: "Geralmente 60-180 dias após arrematação"
        },
        {
          id: "edit-8",
          text: "Informar estado de ocupação do imóvel",
          details: "Vago, ocupado pelo devedor, terceiros, situação irregular"
        },
        {
          id: "edit-9",
          text: "Incluir dados do processo",
          details: "Número, vara, partes, comarca"
        },
        {
          id: "edit-10",
          text: "Especificar forma e horário de visitação",
          details: "Contato, agendamento, observações sobre acesso"
        }
      ]
    },
    {
      title: "4. Notificações Obrigatórias",
      description: "Notificar todos os interessados conforme determina a lei",
      items: [
        {
          id: "not-1",
          text: "Notificar executado/devedor pessoalmente",
          details: "Por oficial de justiça ou via postal com AR",
          critical: true
        },
        {
          id: "not-2",
          text: "Notificar cônjuge do executado",
          details: "Mesmo se separado de fato",
          critical: true
        },
        {
          id: "not-3",
          text: "Notificar credores com garantia real",
          details: "Hipotecas, penhoras anteriores registradas"
        },
        {
          id: "not-4",
          text: "Notificar Fazenda Pública (federal, estadual, municipal)",
          details: "Conforme débitos identificados"
        },
        {
          id: "not-5",
          text: "Notificar condomínio (se aplicável)",
          details: "Síndico e administradora"
        },
        {
          id: "not-6",
          text: "Notificar ocupantes do imóvel",
          details: "Se diferentes do executado"
        },
        {
          id: "not-7",
          text: "Documentar todas as notificações",
          details: "Juntar ARs, certidões de oficial, editais publicados",
          critical: true
        }
      ]
    },
    {
      title: "5. Publicação e Divulgação",
      description: "Garantir ampla publicidade do leilão",
      items: [
        {
          id: "pub-1",
          text: "Publicar edital no site do tribunal",
          details: "Mínimo 20-30 dias antes do leilão",
          critical: true
        },
        {
          id: "pub-2",
          text: "Publicar em jornal de grande circulação",
          details: "Conforme determinação judicial"
        },
        {
          id: "pub-3",
          text: "Publicar no local de costume (fórum)",
          details: "Mural de avisos da vara"
        },
        {
          id: "pub-4",
          text: "Enviar edital ao leiloeiro designado",
          details: "Com antecedência mínima de 20 dias"
        },
        {
          id: "pub-5",
          text: "Guardar comprovantes de todas as publicações",
          details: "Imprimir páginas, recortes de jornal, fotos do mural"
        }
      ]
    },
    {
      title: "6. Realização do Leilão",
      description: "Acompanhamento do dia do leilão",
      items: [
        {
          id: "leil-1",
          text: "Confirmar designação e presença do leiloeiro",
          details: "Credenciado e regularizado no tribunal"
        },
        {
          id: "leil-2",
          text: "Verificar sistema eletrônico funcionando",
          details: "Se leilão online, testar plataforma"
        },
        {
          id: "leil-3",
          text: "Acompanhar se houve lances válidos",
          details: "Valores acima do mínimo estabelecido"
        },
        {
          id: "leil-4",
          text: "Verificar se arrematante está habilitado",
          details: "Documentação e caução depositada"
        },
        {
          id: "leil-5",
          text: "Lavrar auto de arrematação",
          details: "Com todas as assinaturas (juiz, arrematante, leiloeiro)",
          critical: true
        }
      ]
    },
    {
      title: "7. Após a Arrematação",
      description: "Procedimentos pós-leilão",
      items: [
        {
          id: "pos-1",
          text: "Intimar arrematante para pagamento",
          details: "Prazo conforme edital (geralmente 15 dias)"
        },
        {
          id: "pos-2",
          text: "Verificar pagamento integral",
          details: "Depósito judicial ou forma prevista no edital",
          critical: true
        },
        {
          id: "pos-3",
          text: "Expedir carta de arrematação",
          details: "Após pagamento e trânsito em julgado"
        },
        {
          id: "pos-4",
          text: "Determinar distribuição do produto da arrematação",
          details: "Conforme ordem legal de preferência dos credores"
        },
        {
          id: "pos-5",
          text: "Verificar necessidade de imissão na posse",
          details: "Se imóvel ocupado, expedir mandado"
        },
        {
          id: "pos-6",
          text: "Baixar penhora na matrícula do imóvel",
          details: "Após expedição da carta de arrematação"
        }
      ]
    },
    {
      title: "8. Verificações de Segurança",
      description: "Checagem final para evitar nulidades",
      items: [
        {
          id: "seg-1",
          text: "Revisar se todas as notificações foram feitas",
          details: "Sem exceções, com comprovantes nos autos",
          critical: true
        },
        {
          id: "seg-2",
          text: "Confirmar que edital menciona Art. 130 CTN",
          details: "Proteção ao arrematante é obrigatória",
          critical: true
        },
        {
          id: "seg-3",
          text: "Verificar se avaliação está válida",
          details: "Menos de 1 ano e valor de mercado real",
          critical: true
        },
        {
          id: "seg-4",
          text: "Conferir se todos os débitos foram listados",
          details: "Omissão pode gerar responsabilização",
          critical: true
        },
        {
          id: "seg-5",
          text: "Confirmar cumprimento dos prazos legais",
          details: "Publicação, notificação, intervalo entre leilões"
        }
      ]
    }
  ];

  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleCheck = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const totalItems = checklistData.reduce((sum, section) => sum + section.items.length, 0);
  const checkedCount = checkedItems.size;
  const progressPercent = Math.round((checkedCount / totalItems) * 100);
  const criticalItems = checklistData.flatMap(s => s.items).filter(i => i.critical);
  const checkedCritical = criticalItems.filter(i => checkedItems.has(i.id)).length;

  const handleReset = () => {
    setCheckedItems(new Set());
    toast.success("Checklist resetado!");
  };

  const handlePrint = () => {
    window.print();
    toast.success("Preparando impressão...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 print:bg-white">
      {/* Header */}
      <div className="bg-white border-b shadow-sm print:shadow-none">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between print:justify-center">
            <Button variant="ghost" onClick={() => navigate("/curso")} className="print:hidden">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Curso
            </Button>
            <div className="flex items-center space-x-2 print:hidden">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Resetar
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Download className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-ms-blue flex items-center print:justify-center">
              <FileCheck className="mr-3 h-8 w-8" />
              Checklist do Leilão Judicial
            </h1>
            <p className="text-gray-600 mt-2 print:text-center">
              Guia completo com mini-resumos para servidores
            </p>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="container mx-auto px-4 py-6 print:hidden">
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue">{progressPercent}%</div>
                <div className="text-sm text-gray-600">Progresso Total</div>
                <div className="text-xs text-gray-500 mt-1">
                  {checkedCount} de {totalItems} itens
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">{checkedCritical}/{criticalItems.length}</div>
                <div className="text-sm text-gray-600">Itens Críticos</div>
                <div className="text-xs text-gray-500 mt-1">Obrigatórios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {progressPercent === 100 ? <CheckCircle2 className="h-10 w-10 mx-auto" /> : '-'}
                </div>
                <div className="text-sm text-gray-600">Status</div>
                <div className="text-xs text-gray-500 mt-1">
                  {progressPercent === 100 ? 'Completo!' : 'Em andamento'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Checklist Content */}
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="space-y-6">
          {checklistData.map((section, sectionIdx) => {
            const sectionChecked = section.items.filter(i => checkedItems.has(i.id)).length;
            const sectionTotal = section.items.length;
            const sectionProgress = Math.round((sectionChecked / sectionTotal) * 100);

            return (
              <Card key={sectionIdx} className="print:break-inside-avoid">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription className="mt-2">{section.description}</CardDescription>
                    </div>
                    <Badge variant={sectionProgress === 100 ? "default" : "outline"} className="ml-4 print:hidden">
                      {sectionChecked}/{sectionTotal}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors print:hover:bg-white print:break-inside-avoid"
                      >
                        <Checkbox
                          id={item.id}
                          checked={checkedItems.has(item.id)}
                          onCheckedChange={() => handleCheck(item.id)}
                          className="mt-1 print:hidden"
                        />
                        <div className="print:ml-0 flex-1">
                          <label
                            htmlFor={item.id}
                            className={`block font-medium cursor-pointer ${
                              checkedItems.has(item.id) ? 'line-through text-gray-500' : 'text-gray-900'
                            } print:no-underline print:text-gray-900 print:cursor-default`}
                          >
                            {item.critical && (
                              <AlertCircle className="inline h-4 w-4 text-red-500 mr-1" />
                            )}
                            {item.text}
                          </label>
                          {item.details && (
                            <p className="text-sm text-gray-600 mt-1 ml-5 print:ml-0">
                              {item.details}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Legend */}
        <Card className="mt-6 print:break-inside-avoid">
          <CardHeader>
            <CardTitle className="text-sm">Legenda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <span>Itens críticos (obrigatórios) - Omissão pode causar nulidade</span>
            </div>
          </CardContent>
        </Card>

        {/* Credits */}
        <Card className="mt-8 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 print:break-inside-avoid">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="/calcpvt/logo.png"
                alt="Logo"
                className="h-16 w-16 object-contain print:hidden"
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
