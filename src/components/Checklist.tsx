
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const ChecklistItem = ({ label, checked, onChange, tooltip }: { 
  label: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void;
  tooltip?: string;
}) => {
  return (
    <div className="flex items-center space-x-3 py-2 group">
      <Checkbox 
        checked={checked} 
        onCheckedChange={onChange} 
        id={`checkbox-${label}`}
        className="h-5 w-5 border-2 border-ms-blue/60 data-[state=checked]:bg-ms-blue data-[state=checked]:border-ms-blue"
      />
      <div className="flex items-center gap-2 flex-1">
        <label 
          htmlFor={`checkbox-${label}`}
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${checked ? 'line-through text-ms-gray/70' : 'text-ms-blue-dark'}`}
        >
          {label}
        </label>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-3.5 w-3.5 text-ms-blue/70 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-white/90 backdrop-blur-sm border border-ms-blue/20">
              <p className="text-xs text-ms-blue-dark">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

const Checklist = () => {
  const [checklistItems, setChecklistItems] = useState({
    // Análise do Edital
    verValorMinimoLance: false,
    verCondicoesPagamento: false,
    verComissaoLeiloeiro: false,
    verExistenciaOnus: false,
    verPrazoDesocupacao: false,
    
    // Documentação do Imóvel
    verMatriculaAtualizada: false,
    verHabitese: false,
    verCertidoesNegativas: false,
    verDebitosCondominio: false,
    verDebitosIPTU: false,
    
    // Verificação do Leiloeiro
    verRegistroJuntaComercial: false,
    verSiteOficial: false,
    verReputacaoHistorico: false,
    verReclameAqui: false,
    
    // Análise Jurídica
    verProcessoJudicial: false,
    verRecursosEmbargos: false,
    verConsultaAdvogado: false,
    verDepositoJudicial: false,
    verCustasProcessuais: false,
    
    // Custos Adicionais
    verITBI: false,
    verLaudemio: false,
    verTaxasCartorarias: false,
    verHonorariosAdvocateDespachante: false,
    verCustosDesocupacao: false,
    verTaxaMarinha: false,
    verEmolumentos: false,
    verRegistroAverbacao: false,
    
    // Imissão na Posse
    verAutoArrematacao: false,
    verCustasImissao: false,
    verPrazosProcessuais: false,
    
    // Revenda (se aplicável)
    verEstimativaReforma: false,
    verTempoVenda: false,
    verValorMercado: false,
    verCustosManutencao: false,
  });
  
  const handleChecklistChange = (item: keyof typeof checklistItems, checked: boolean) => {
    setChecklistItems({
      ...checklistItems,
      [item]: checked,
    });
  };
  
  // Calcular progresso por seção
  const calcularProgressoSecao = (itens: (keyof typeof checklistItems)[]) => {
    const totalItens = itens.length;
    const itensConcluidos = itens.filter(item => checklistItems[item]).length;
    return (itensConcluidos / totalItens) * 100;
  };
  
  // Progresso por seção
  const progressoEdital = calcularProgressoSecao([
    'verValorMinimoLance', 'verCondicoesPagamento', 'verComissaoLeiloeiro', 
    'verExistenciaOnus', 'verPrazoDesocupacao'
  ]);
  
  const progressoDocumentacao = calcularProgressoSecao([
    'verMatriculaAtualizada', 'verHabitese', 'verCertidoesNegativas', 
    'verDebitosCondominio', 'verDebitosIPTU'
  ]);
  
  const progressoLeiloeiro = calcularProgressoSecao([
    'verRegistroJuntaComercial', 'verSiteOficial', 'verReputacaoHistorico',
    'verReclameAqui'
  ]);
  
  const progressoJuridica = calcularProgressoSecao([
    'verProcessoJudicial', 'verRecursosEmbargos', 'verConsultaAdvogado',
    'verDepositoJudicial', 'verCustasProcessuais'
  ]);
  
  const progressoCustos = calcularProgressoSecao([
    'verITBI', 'verLaudemio', 'verTaxasCartorarias', 
    'verHonorariosAdvocateDespachante', 'verCustosDesocupacao',
    'verTaxaMarinha', 'verEmolumentos', 'verRegistroAverbacao'
  ]);

  const progressoImissao = calcularProgressoSecao([
    'verAutoArrematacao', 'verCustasImissao', 'verPrazosProcessuais'
  ]);

  const progressoRevenda = calcularProgressoSecao([
    'verEstimativaReforma', 'verTempoVenda', 'verValorMercado', 'verCustosManutencao'
  ]);
  
  // Progresso total
  const totalItems = Object.keys(checklistItems).length;
  const completedItems = Object.values(checklistItems).filter(Boolean).length;
  const totalProgresso = (completedItems / totalItems) * 100;
  
  const tooltips = {
    verValorMinimoLance: "Verifique qual é o valor mínimo aceito para o lance inicial.",
    verComissaoLeiloeiro: "Normalmente varia de 3% a 5% do valor da arrematação.",
    verExistenciaOnus: "Pesquise sobre dívidas, penhoras e processos relacionados ao imóvel.",
    verMatriculaAtualizada: "Documento disponível no cartório de registro de imóveis.",
    verHabitese: "Documento que autoriza a ocupação do imóvel.",
    verDebitosIPTU: "Verifique no site da prefeitura usando o número de inscrição do imóvel.",
    verRegistroJuntaComercial: "Confirme se o leiloeiro está regularmente registrado.",
    verReclameAqui: "Verifique a reputação do leiloeiro em sites de avaliação.",
    verRecursosEmbargos: "Processos pendentes podem atrasar a transferência do imóvel.",
    verITBI: "Imposto de Transmissão de Bens Imóveis, varia conforme o município.",
    verLaudemio: "Taxa cobrada em imóveis localizados em terrenos de marinha.",
    verCustosDesocupacao: "Se o imóvel estiver ocupado, calcule custos de desocupação amigável ou judicial."
  };
  
  return (
    <div className="animate-fade-in">
      <Card className="mb-6 shadow-lg border border-ms-blue/10">
        <CardHeader>
          <CardTitle className="text-ms-blue-dark text-xl">Checklist de Verificação para Leilão</CardTitle>
          <CardDescription className="text-ms-blue/70">
            Acompanhe todas as etapas necessárias para garantir um investimento seguro
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Progress value={totalProgresso} className="h-2.5 flex-1 bg-ms-gray-light/30" />
            <Badge variant={totalProgresso > 75 ? "default" : "outline"} className={`font-semibold ${totalProgresso > 75 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}`}>
              {completedItems}/{totalItems} ({totalProgresso.toFixed(0)}%)
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      <Accordion type="multiple" className="space-y-4 w-full">
        <AccordionItem value="analise-edital" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">1. Análise do Edital</h3>
                <Badge variant={progressoEdital === 100 ? 'default' : 'outline'} className={progressoEdital === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoEdital.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoEdital} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <ChecklistItem 
              label="Verificar valor mínimo de lance" 
              checked={checklistItems.verValorMinimoLance}
              onChange={(checked) => handleChecklistChange('verValorMinimoLance', checked)}
              tooltip={tooltips.verValorMinimoLance}
            />
            <ChecklistItem 
              label="Verificar condições de pagamento" 
              checked={checklistItems.verCondicoesPagamento}
              onChange={(checked) => handleChecklistChange('verCondicoesPagamento', checked)}
            />
            <ChecklistItem 
              label="Verificar comissão do leiloeiro" 
              checked={checklistItems.verComissaoLeiloeiro}
              onChange={(checked) => handleChecklistChange('verComissaoLeiloeiro', checked)}
              tooltip={tooltips.verComissaoLeiloeiro}
            />
            <ChecklistItem 
              label="Verificar existência de ônus ou dívidas" 
              checked={checklistItems.verExistenciaOnus}
              onChange={(checked) => handleChecklistChange('verExistenciaOnus', checked)}
              tooltip={tooltips.verExistenciaOnus}
            />
            <ChecklistItem 
              label="Verificar prazo para desocupação" 
              checked={checklistItems.verPrazoDesocupacao}
              onChange={(checked) => handleChecklistChange('verPrazoDesocupacao', checked)}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="documentacao" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">2. Documentação do Imóvel</h3>
                <Badge variant={progressoDocumentacao === 100 ? 'default' : 'outline'} className={progressoDocumentacao === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoDocumentacao.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoDocumentacao} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <ChecklistItem 
              label="Verificar matrícula atualizada (certidão de inteiro teor)" 
              checked={checklistItems.verMatriculaAtualizada}
              onChange={(checked) => handleChecklistChange('verMatriculaAtualizada', checked)}
              tooltip={tooltips.verMatriculaAtualizada}
            />
            <ChecklistItem 
              label="Verificar Habite-se e CVCO (se aplicável)" 
              checked={checklistItems.verHabitese}
              onChange={(checked) => handleChecklistChange('verHabitese', checked)}
              tooltip={tooltips.verHabitese}
            />
            <ChecklistItem 
              label="Verificar certidões negativas de débitos municipais e de condomínio" 
              checked={checklistItems.verCertidoesNegativas}
              onChange={(checked) => handleChecklistChange('verCertidoesNegativas', checked)}
            />
            <ChecklistItem 
              label="Verificar débitos de condomínio pendentes" 
              checked={checklistItems.verDebitosCondominio}
              onChange={(checked) => handleChecklistChange('verDebitosCondominio', checked)}
            />
            <ChecklistItem 
              label="Verificar débitos de IPTU no site da prefeitura" 
              checked={checklistItems.verDebitosIPTU}
              onChange={(checked) => handleChecklistChange('verDebitosIPTU', checked)}
              tooltip={tooltips.verDebitosIPTU}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="leiloeiro" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">3. Verificação do Leiloeiro</h3>
                <Badge variant={progressoLeiloeiro === 100 ? 'default' : 'outline'} className={progressoLeiloeiro === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoLeiloeiro.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoLeiloeiro} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <ChecklistItem 
              label="Confirmar registro na Junta Comercial" 
              checked={checklistItems.verRegistroJuntaComercial}
              onChange={(checked) => handleChecklistChange('verRegistroJuntaComercial', checked)}
              tooltip={tooltips.verRegistroJuntaComercial}
            />
            <ChecklistItem 
              label="Validar site oficial do leiloeiro" 
              checked={checklistItems.verSiteOficial}
              onChange={(checked) => handleChecklistChange('verSiteOficial', checked)}
            />
            <ChecklistItem 
              label="Analisar reputação e histórico do leiloeiro" 
              checked={checklistItems.verReputacaoHistorico}
              onChange={(checked) => handleChecklistChange('verReputacaoHistorico', checked)}
            />
            <ChecklistItem 
              label="Verificar reclamações no Reclame Aqui" 
              checked={checklistItems.verReclameAqui}
              onChange={(checked) => handleChecklistChange('verReclameAqui', checked)}
              tooltip={tooltips.verReclameAqui}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="juridica" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">4. Análise Jurídica</h3>
                <Badge variant={progressoJuridica === 100 ? 'default' : 'outline'} className={progressoJuridica === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoJuridica.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoJuridica} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <ChecklistItem 
              label="Consultar processo judicial (se leilão judicial)" 
              checked={checklistItems.verProcessoJudicial}
              onChange={(checked) => handleChecklistChange('verProcessoJudicial', checked)}
            />
            <ChecklistItem 
              label="Verificar recursos ou embargos pendentes" 
              checked={checklistItems.verRecursosEmbargos}
              onChange={(checked) => handleChecklistChange('verRecursosEmbargos', checked)}
              tooltip={tooltips.verRecursosEmbargos}
            />
            <ChecklistItem 
              label="Consultar advogado especializado" 
              checked={checklistItems.verConsultaAdvogado}
              onChange={(checked) => handleChecklistChange('verConsultaAdvogado', checked)}
            />
            <ChecklistItem 
              label="Verificar guias de depósito judicial" 
              checked={checklistItems.verDepositoJudicial}
              onChange={(checked) => handleChecklistChange('verDepositoJudicial', checked)}
            />
            <ChecklistItem 
              label="Verificar custas processuais e emolumentos" 
              checked={checklistItems.verCustasProcessuais}
              onChange={(checked) => handleChecklistChange('verCustasProcessuais', checked)}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="custos" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">5. Custos Adicionais</h3>
                <Badge variant={progressoCustos === 100 ? 'default' : 'outline'} className={progressoCustos === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoCustos.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoCustos} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div>
                <ChecklistItem 
                  label="Verificar ITBI (varia conforme município)" 
                  checked={checklistItems.verITBI}
                  onChange={(checked) => handleChecklistChange('verITBI', checked)}
                  tooltip={tooltips.verITBI}
                />
                <ChecklistItem 
                  label="Verificar Laudêmio (em áreas da Marinha)" 
                  checked={checklistItems.verLaudemio}
                  onChange={(checked) => handleChecklistChange('verLaudemio', checked)}
                  tooltip={tooltips.verLaudemio}
                />
                <ChecklistItem 
                  label="Verificar taxas cartorárias e de registro" 
                  checked={checklistItems.verTaxasCartorarias}
                  onChange={(checked) => handleChecklistChange('verTaxasCartorarias', checked)}
                />
                <ChecklistItem 
                  label="Verificar honorários advocatícios e de despachante" 
                  checked={checklistItems.verHonorariosAdvocateDespachante}
                  onChange={(checked) => handleChecklistChange('verHonorariosAdvocateDespachante', checked)}
                />
              </div>
              <div>
                <ChecklistItem 
                  label="Verificar custos de desocupação (se necessário)" 
                  checked={checklistItems.verCustosDesocupacao}
                  onChange={(checked) => handleChecklistChange('verCustosDesocupacao', checked)}
                  tooltip={tooltips.verCustosDesocupacao}
                />
                <ChecklistItem 
                  label="Verificar Taxa de Marinha (se aplicável)" 
                  checked={checklistItems.verTaxaMarinha}
                  onChange={(checked) => handleChecklistChange('verTaxaMarinha', checked)}
                />
                <ChecklistItem 
                  label="Verificar emolumentos cartorários" 
                  checked={checklistItems.verEmolumentos}
                  onChange={(checked) => handleChecklistChange('verEmolumentos', checked)}
                />
                <ChecklistItem 
                  label="Verificar custos de registro e averbação" 
                  checked={checklistItems.verRegistroAverbacao}
                  onChange={(checked) => handleChecklistChange('verRegistroAverbacao', checked)}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="imissao" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">6. Imissão na Posse</h3>
                <Badge variant={progressoImissao === 100 ? 'default' : 'outline'} className={progressoImissao === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoImissao.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoImissao} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <ChecklistItem 
              label="Verificar custos para emissão do auto de arrematação" 
              checked={checklistItems.verAutoArrematacao}
              onChange={(checked) => handleChecklistChange('verAutoArrematacao', checked)}
            />
            <ChecklistItem 
              label="Verificar custas para imissão na posse" 
              checked={checklistItems.verCustasImissao}
              onChange={(checked) => handleChecklistChange('verCustasImissao', checked)}
            />
            <ChecklistItem 
              label="Verificar prazos processuais para imissão" 
              checked={checklistItems.verPrazosProcessuais}
              onChange={(checked) => handleChecklistChange('verPrazosProcessuais', checked)}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="revenda" className="border rounded-lg overflow-hidden shadow-sm border-ms-blue/10">
          <AccordionTrigger className="px-4 py-3 bg-ms-blue/5 hover:bg-ms-blue/10 hover:no-underline">
            <div className="flex flex-col items-start w-full">
              <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold text-ms-blue-dark">7. Planejamento para Revenda</h3>
                <Badge variant={progressoRevenda === 100 ? 'default' : 'outline'} className={progressoRevenda === 100 ? 'bg-ms-blue' : 'border-ms-blue text-ms-blue'}>
                  {progressoRevenda.toFixed(0)}%
                </Badge>
              </div>
              <Progress value={progressoRevenda} className="h-1.5 w-full mt-2 bg-ms-gray-light/30" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-3 pb-4 bg-card">
            <ChecklistItem 
              label="Estimar custos de reforma" 
              checked={checklistItems.verEstimativaReforma}
              onChange={(checked) => handleChecklistChange('verEstimativaReforma', checked)}
            />
            <ChecklistItem 
              label="Estimar tempo de venda após a posse" 
              checked={checklistItems.verTempoVenda}
              onChange={(checked) => handleChecklistChange('verTempoVenda', checked)}
            />
            <ChecklistItem 
              label="Pesquisar valor de mercado dos imóveis na região" 
              checked={checklistItems.verValorMercado}
              onChange={(checked) => handleChecklistChange('verValorMercado', checked)}
            />
            <ChecklistItem 
              label="Calcular custos de manutenção durante a revenda" 
              checked={checklistItems.verCustosManutencao}
              onChange={(checked) => handleChecklistChange('verCustosManutencao', checked)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Checklist;
