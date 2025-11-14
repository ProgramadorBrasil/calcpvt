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
          details: "Confirmar averbação da penhora na matrícula do imóvel no Cartório de Registro de Imóveis",
          critical: true
        },
        {
          id: "prep-2",
          text: "Solicitar certidão de matrícula atualizada",
          details: "Máximo 30 dias de emissão, verificar todos os ônus, averbações, hipotecas, penhoras anteriores",
          critical: true
        },
        {
          id: "prep-3",
          text: "Verificar se há avaliação válida (menos de 1 ano)",
          details: "Se > 1 ano, solicitar nova avaliação judicial através de perito designado pelo juiz",
          critical: true
        },
        {
          id: "prep-4",
          text: "Conferir documentação do processo completa",
          details: "Petição inicial, citações, penhora, avaliação, certidões, manifestações das partes"
        },
        {
          id: "prep-5",
          text: "Verificar se executado foi intimado da penhora",
          details: "Confirmar intimação pessoal ou por edital, com comprovante nos autos",
          critical: true
        },
        {
          id: "prep-6",
          text: "Consultar se há embargos ou impugnações pendentes",
          details: "Verificar na movimentação processual se há recursos ou incidentes em andamento"
        }
      ]
    },
    {
      title: "2. Pesquisa Completa de Débitos",
      description: "Levantamento detalhado de todos os débitos e ônus do imóvel",
      items: [
        {
          id: "deb-1",
          text: "Consultar débitos de IPTU na Prefeitura Municipal",
          details: "Valores, anos em aberto, taxa anual atual, possíveis parcelamentos",
          critical: true
        },
        {
          id: "deb-2",
          text: "Solicitar certidão negativa ou positiva de IPTU",
          details: "Documento oficial da Prefeitura para anexar aos autos"
        },
        {
          id: "deb-3",
          text: "Verificar débitos condominiais (se aplicável)",
          details: "Valor total, taxa mensal, contato do síndico/administradora, taxas extraordinárias",
          critical: true
        },
        {
          id: "deb-4",
          text: "Consultar débitos federais (RFB)",
          details: "ITR se imóvel rural, certidão de débitos da Receita Federal"
        },
        {
          id: "deb-5",
          text: "Verificar débitos estaduais",
          details: "ITCD, IPVA se garagem com vaga vinculada, outros tributos estaduais"
        },
        {
          id: "deb-6",
          text: "Pesquisar TODOS os ônus e gravames na matrícula",
          details: "Hipotecas, penhoras anteriores, servidões, usufrutos, superfície, anticrese",
          critical: true
        },
        {
          id: "deb-7",
          text: "Identificar credores com garantia real",
          details: "Listar nome completo, CPF/CNPJ, tipo de garantia (hipoteca, penhora, etc.)",
          critical: true
        },
        {
          id: "deb-8",
          text: "Verificar débitos de água, luz e gás",
          details: "Consultar COMPESA, CELPE/Neoenergia - informar no edital se existem"
        }
      ]
    },
    {
      title: "3. Elaboração do Edital",
      description: "Confecção do edital com todas as informações obrigatórias - DIRETORIA CÍVEL",
      items: [
        {
          id: "edit-1",
          text: "Cabeçalho: Poder Judiciário do Estado de Pernambuco",
          details: "Nome da comarca, vara, juiz titular, processo nº",
          critical: true
        },
        {
          id: "edit-2",
          text: "Identificação completa e detalhada do imóvel",
          details: "Matrícula nº, Cartório, endereço completo com CEP, metragem (área total e construída), limites e confrontações",
          critical: true
        },
        {
          id: "edit-3",
          text: "Descrição das características do imóvel",
          details: "Tipo (casa, apartamento, terreno), nº de quartos, vagas, estado de conservação, benfeitorias"
        },
        {
          id: "edit-4",
          text: "Valor da avaliação atualizado",
          details: "Valor original, índice de correção utilizado, data base, valor atualizado",
          critical: true
        },
        {
          id: "edit-5",
          text: "Data, horário e local do 1º leilão",
          details: "Se eletrônico: plataforma e link / Se presencial: endereço, sala, horário exato",
          critical: true
        },
        {
          id: "edit-6",
          text: "Valor mínimo do 1º leilão",
          details: "Geralmente o valor da avaliação atualizada (não aceita lance inferior)",
          critical: true
        },
        {
          id: "edit-7",
          text: "Data, horário e local do 2º leilão",
          details: "Mínimo 15 dias após o 1º leilão",
          critical: true
        },
        {
          id: "edit-8",
          text: "Valor mínimo do 2º leilão",
          details: "Até 25% menor que o 1º leilão conforme Art. 891, §1º CPC",
          critical: true
        },
        {
          id: "edit-9",
          text: "Incluir cláusula EXPRESSA do Art. 130 do CTN",
          details: "Texto: 'Aplicável o Art. 130 do CTN - débitos tributários anteriores sub-rogam-se no preço'",
          critical: true
        },
        {
          id: "edit-10",
          text: "Listar TODOS os débitos conhecidos com valores",
          details: "IPTU (R$ X, anos Y a Z), Condomínio (R$ X, até mês Y), taxas, contribuições",
          critical: true
        },
        {
          id: "edit-11",
          text: "Listar TODOS os ônus registrados na matrícula",
          details: "Hipotecas, penhoras anteriores, com nome dos credores e valores se conhecidos",
          critical: true
        },
        {
          id: "edit-12",
          text: "Forma de pagamento",
          details: "À vista ou parcelado, prazo para depósito (geralmente 15 dias), juros se parcelado, conta judicial"
        },
        {
          id: "edit-13",
          text: "Prazo para desocupação",
          details: "Geralmente 60 a 180 dias após expedição da carta de arrematação"
        },
        {
          id: "edit-14",
          text: "Informar estado de ocupação REAL do imóvel",
          details: "Vago / Ocupado pelo devedor / Ocupado por terceiro / Ocupação irregular",
          critical: true
        },
        {
          id: "edit-15",
          text: "Dados do processo judicial completos",
          details: "Nº do processo, vara, comarca, partes (exequente e executado)",
          critical: true
        },
        {
          id: "edit-16",
          text: "Forma e horário de visitação ao imóvel",
          details: "Contato para agendamento, dias/horários disponíveis, observações sobre acesso"
        },
        {
          id: "edit-17",
          text: "Nome do leiloeiro oficial designado",
          details: "Nome completo, CNPJ/CPF, contato, nº de credenciamento no TJPE"
        },
        {
          id: "edit-18",
          text: "Informar sobre caução/depósito prévio",
          details: "Percentual (geralmente 10-20%), forma de depósito, devolução se não arrematar"
        },
        {
          id: "edit-19",
          text: "Assinatura e data do edital",
          details: "Assinado pelo Juiz titular ou substituto da vara"
        }
      ]
    },
    {
      title: "4. Notificações Obrigatórias Detalhadas",
      description: "Notificar TODOS os interessados conforme determina a lei",
      items: [
        {
          id: "not-1",
          text: "Notificar EXECUTADO/DEVEDOR pessoalmente",
          details: "Por oficial de justiça no endereço da matrícula e endereços conhecidos, ou via postal com AR",
          critical: true
        },
        {
          id: "not-2",
          text: "Se executado não localizado: edital de notificação",
          details: "Publicar edital em jornal de grande circulação + site do tribunal",
          critical: true
        },
        {
          id: "not-3",
          text: "Notificar CÔNJUGE ou COMPANHEIRO(A) do executado",
          details: "Mesmo que separado de fato - imóvel adquirido na constância do casamento/união estável",
          critical: true
        },
        {
          id: "not-4",
          text: "Se cônjuge em local incerto: edital específico",
          details: "Edital de notificação do cônjuge separadamente",
          critical: true
        },
        {
          id: "not-5",
          text: "Notificar CREDOR HIPOTECÁRIO (se houver)",
          details: "Banco ou instituição financeira com hipoteca registrada na matrícula",
          critical: true
        },
        {
          id: "not-6",
          text: "Notificar OUTROS CREDORES com garantia real",
          details: "Credores com penhora anterior, anticrese, alienação fiduciária registrada",
          critical: true
        },
        {
          id: "not-7",
          text: "Notificar FAZENDA PÚBLICA FEDERAL (União)",
          details: "Via ofício à Procuradoria da Fazenda Nacional / Delegacia da Receita Federal"
        },
        {
          id: "not-8",
          text: "Notificar FAZENDA PÚBLICA ESTADUAL (Estado de PE)",
          details: "Via ofício à Procuradoria Geral do Estado (PGE)"
        },
        {
          id: "not-9",
          text: "Notificar FAZENDA PÚBLICA MUNICIPAL (Prefeitura)",
          details: "Via ofício à Procuradoria Municipal da cidade do imóvel - especialmente se há débitos de IPTU",
          critical: true
        },
        {
          id: "not-10",
          text: "Notificar CONDOMÍNIO (se aplicável)",
          details: "Síndico e administradora, via AR com ofício anexando edital",
          critical: true
        },
        {
          id: "not-11",
          text: "Notificar OCUPANTES do imóvel (se diferentes do executado)",
          details: "Locatários, possuidores, ocupantes irregulares - via oficial de justiça"
        },
        {
          id: "not-12",
          text: "Notificar EXEQUENTE/CREDOR da data do leilão",
          details: "Intimação via sistema processual ou publicação oficial"
        },
        {
          id: "not-13",
          text: "Documentar TODAS as notificações nos autos",
          details: "Juntar ARs, certidões de oficial, ofícios com protocolo, editais com data de publicação",
          critical: true
        },
        {
          id: "not-14",
          text: "Verificar prazos entre notificação e leilão",
          details: "Mínimo de 20-30 dias entre última notificação e data do leilão"
        }
      ]
    },
    {
      title: "5. Publicação e Divulgação Oficial",
      description: "Garantir ampla publicidade do leilão conforme exigências legais",
      items: [
        {
          id: "pub-1",
          text: "Publicar edital no SITE DO TJPE",
          details: "Portal do tribunal - seção de leilões judiciais, mínimo 20-30 dias antes",
          critical: true
        },
        {
          id: "pub-2",
          text: "Publicar edital no DIÁRIO OFICIAL ELETRÔNICO (DOE/PE)",
          details: "Diário Oficial do Estado de Pernambuco - versão resumida ou completa conforme orientação",
          critical: true
        },
        {
          id: "pub-3",
          text: "Guardar comprovante de publicação no DOE",
          details: "Imprimir página do DOE com data e edital, juntar aos autos",
          critical: true
        },
        {
          id: "pub-4",
          text: "Publicar em JORNAL DE GRANDE CIRCULAÇÃO",
          details: "Jornal local de grande circulação (ex: Diário de Pernambuco, Folha de Pernambuco)"
        },
        {
          id: "pub-5",
          text: "Guardar recorte/comprovante do jornal",
          details: "Recorte original ou cópia da página com data visível",
        },
        {
          id: "pub-6",
          text: "Publicar no MURAL DE AVISOS do fórum",
          details: "Local de costume - mural da vara ou entrada do fórum"
        },
        {
          id: "pub-7",
          text: "Fotografar publicação no mural",
          details: "Foto com data visível, juntar aos autos como comprovação"
        },
        {
          id: "pub-8",
          text: "Enviar edital ao LEILOEIRO DESIGNADO",
          details: "Via ofício ou e-mail institucional, com AR ou comprovante de recebimento, mínimo 20 dias antes"
        },
        {
          id: "pub-9",
          text: "Solicitar CERTIDÃO DA DIRETORIA CÍVEL",
          details: "Certificar que todas as publicações foram realizadas conforme exigências legais"
        },
        {
          id: "pub-10",
          text: "Confirmar publicação em plataforma de leilão eletrônico",
          details: "Se leilão online: verificar que imóvel está cadastrado e visível no site"
        }
      ]
    },
    {
      title: "6. Designação e Comunicação com Leiloeiro",
      description: "Procedimentos relacionados ao leiloeiro oficial",
      items: [
        {
          id: "leil-1",
          text: "Verificar lista de leiloeiros credenciados no TJPE",
          details: "Consultar lista atualizada no site do tribunal"
        },
        {
          id: "leil-2",
          text: "Designar leiloeiro por despacho judicial",
          details: "Juiz designa leiloeiro específico ou permite escolha pela parte"
        },
        {
          id: "leil-3",
          text: "Expedir OFÍCIO ao leiloeiro designado",
          details: "Com edital completo, prazo mínimo 20 dias antes do leilão",
          critical: true
        },
        {
          id: "leil-4",
          text: "Confirmar recebimento do ofício pelo leiloeiro",
          details: "Via AR ou protocolo eletrônico"
        },
        {
          id: "leil-5",
          text: "Verificar regularidade do leiloeiro",
          details: "Certidão de credenciamento válida, sem suspensões ou impedimentos"
        },
        {
          id: "leil-6",
          text: "Confirmar que leiloeiro tomou ciência das datas",
          details: "1º e 2º leilão, horários, modalidade (presencial/eletrônico)"
        }
      ]
    },
    {
      title: "7. Verificações Finais Antes do Leilão",
      description: "Checagem de segurança para evitar nulidades - última etapa",
      items: [
        {
          id: "final-1",
          text: "Revisar se TODAS as notificações foram feitas e juntadas",
          details: "Executado, cônjuge, credores, fazendas públicas, condomínio, ocupantes",
          critical: true
        },
        {
          id: "final-2",
          text: "Confirmar que edital menciona EXPRESSAMENTE Art. 130 CTN",
          details: "Proteção ao arrematante é obrigatória - conferir redação",
          critical: true
        },
        {
          id: "final-3",
          text: "Verificar que avaliação está válida (< 1 ano)",
          details: "Conferir data da avaliação e data do leilão",
          critical: true
        },
        {
          id: "final-4",
          text: "Confirmar que TODOS os débitos foram listados no edital",
          details: "Omissão pode gerar responsabilização do servidor",
          critical: true
        },
        {
          id: "final-5",
          text: "Conferir cumprimento dos prazos legais",
          details: "Publicação, notificação, intervalo entre leilões (mínimo 15 dias)"
        },
        {
          id: "final-6",
          text: "Verificar se há decisão judicial autorizando o leilão",
          details: "Despacho expresso do juiz determinando a alienação"
        },
        {
          id: "final-7",
          text: "Confirmar que não há embargos ou agravos pendentes",
          details: "Consultar movimentação processual e recursos em andamento"
        },
        {
          id: "final-8",
          text: "Solicitar certidão da Diretoria que processo está em ordem",
          details: "Certidão de que todas as exigências legais foram cumpridas"
        }
      ]
    },
    {
      title: "8. Realização do Leilão",
      description: "Acompanhamento do dia do leilão",
      items: [
        {
          id: "real-1",
          text: "Confirmar presença do leiloeiro designado",
          details: "Credenciado, regularizado, com documentação em ordem"
        },
        {
          id: "real-2",
          text: "Verificar sistema eletrônico funcionando (se online)",
          details: "Testar plataforma, login, cadastro de interessados"
        },
        {
          id: "real-3",
          text: "Acompanhar se houve lances válidos",
          details: "Valores acima do mínimo estabelecido no edital"
        },
        {
          id: "real-4",
          text: "Verificar habilitação do arrematante",
          details: "Documentação completa, caução depositada, capacidade civil"
        },
        {
          id: "real-5",
          text: "Lavrar AUTO DE ARREMATAÇÃO",
          details: "Com todas as informações e assinaturas (juiz, arrematante, leiloeiro)",
          critical: true
        },
        {
          id: "real-6",
          text: "Colher assinatura do JUIZ no auto",
          details: "Assinatura física ou digital conforme sistema do tribunal",
          critical: true
        },
        {
          id: "real-7",
          text: "Colher assinatura do ARREMATANTE no auto",
          details: "Presencial ou digital, com identificação completa",
          critical: true
        },
        {
          id: "real-8",
          text: "Colher assinatura do LEILOEIRO no auto",
          details: "Confirmar identidade e credenciamento",
          critical: true
        },
        {
          id: "real-9",
          text: "Se não houve lances: certificar o resultado",
          details: "Leiloeiro certifica ausência de lances, juntar aos autos"
        }
      ]
    },
    {
      title: "9. Após a Arrematação",
      description: "Procedimentos pós-leilão até entrega do imóvel",
      items: [
        {
          id: "pos-1",
          text: "Intimar arrematante para PAGAMENTO",
          details: "Prazo conforme edital (geralmente 15 dias úteis), forma de depósito",
          critical: true
        },
        {
          id: "pos-2",
          text: "Verificar PAGAMENTO INTEGRAL do valor",
          details: "Conferir depósito judicial ou transferência conforme edital",
          critical: true
        },
        {
          id: "pos-3",
          text: "Aguardar prazo para oposição de embargos",
          details: "5 dias após arrematação conforme Art. 901 CPC"
        },
        {
          id: "pos-4",
          text: "Se houver embargos: aguardar julgamento",
          details: "Arrematação é irretratável, mas pode haver discussão"
        },
        {
          id: "pos-5",
          text: "Determinar DISTRIBUIÇÃO do produto da arrematação",
          details: "Conforme ordem legal: custas, tributos, credores com garantia, exequente",
          critical: true
        },
        {
          id: "pos-6",
          text: "Expedir ALVARÁ para levantamento dos valores",
          details: "Para cada credor conforme ordem de preferência"
        },
        {
          id: "pos-7",
          text: "Expedir CARTA DE ARREMATAÇÃO",
          details: "Após pagamento integral e trânsito em julgado (ou prazo de embargos)",
          critical: true
        },
        {
          id: "pos-8",
          text: "Encaminhar carta ao CARTÓRIO DE REGISTRO DE IMÓVEIS",
          details: "Para averbação da transferência e baixa da penhora"
        },
        {
          id: "pos-9",
          text: "Verificar necessidade de IMISSÃO NA POSSE",
          details: "Se imóvel ocupado, expedir mandado de imissão na posse"
        },
        {
          id: "pos-10",
          text: "Determinar prazo para DESOCUPAÇÃO voluntária",
          details: "Conforme previsto no edital (60-180 dias)"
        },
        {
          id: "pos-11",
          text: "Se necessário: expedir MANDADO DE IMISSÃO NA POSSE",
          details: "Com ordem de desocupação forçada se necessário"
        },
        {
          id: "pos-12",
          text: "Acompanhar cumprimento da imissão",
          details: "Oficial de justiça certifica desocupação e entrega das chaves"
        },
        {
          id: "pos-13",
          text: "BAIXAR A PENHORA na matrícula do imóvel",
          details: "Ofício ao Cartório de Registro de Imóveis",
          critical: true
        },
        {
          id: "pos-14",
          text: "Arquivar processo se execução satisfeita",
          details: "Ou prosseguir com saldo remanescente se houver"
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
              Checklist Completo do Leilão Judicial
            </h1>
            <p className="text-gray-600 mt-2 print:text-center">
              Guia detalhado para servidores do TJPE - Inclui DOE, Notificações e Diretoria Cível
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
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <span>Itens críticos (obrigatórios) - Omissão pode causar nulidade do leilão</span>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">Observações Importantes:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Todos os prazos devem ser rigorosamente cumpridos</li>
                  <li>Guarde TODOS os comprovantes de notificação e publicação</li>
                  <li>Em caso de dúvida, consulte o juiz antes de prosseguir</li>
                  <li>Publicação no DOE é obrigatória no TJPE</li>
                  <li>Notificação de cônjuge é SEMPRE obrigatória</li>
                </ul>
              </div>
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
