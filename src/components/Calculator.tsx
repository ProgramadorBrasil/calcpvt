import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import CurrencyInput from './CurrencyInput';
import PercentageInput from './PercentageInput';
import { useToast } from './ui/use-toast';
import { motion } from 'framer-motion';

const Calculator = () => {
  // Valores principais
  const [valorLance, setValorLance] = useState<string>('50000000'); // 500.000,00 em centavos
  const [objetivoAquisicao, setObjetivoAquisicao] = useState<'uso-proprio' | 'revenda'>('uso-proprio');
  const [comissaoLeiloeiro, setComissaoLeiloeiro] = useState<number>(5);
  const [itbi, setItbi] = useState<number>(3);
  const [laudemio, setLaudemio] = useState<boolean>(false);
  const [taxaMarinha, setTaxaMarinha] = useState<boolean>(false);
  
  // Custos adicionais
  const [debitosCondominio, setDebitosCondominio] = useState<string>('0');
  const [valorMensalCondominio, setValorMensalCondominio] = useState<string>('80000'); // 800,00
  const [tempoImissao, setTempoImissao] = useState<number>(6);
  
  // Custos de transferência
  const [taxasCartorarias, setTaxasCartorarias] = useState<string>('300000'); // 3.000,00
  const [honorariosAdvogado, setHonorariosAdvogado] = useState<string>('500000'); // 5.000,00
  const [despesasDespachante, setDespesasDespachante] = useState<string>('150000'); // 1.500,00
  
  // Custos judiciais
  const [custasJudiciais, setCustasJudiciais] = useState<string>('120000'); // 1.200,00
  const [custoAutoArrematacao, setCustoAutoArrematacao] = useState<string>('80000'); // 800,00
  const [custosEntrega, setCustosEntrega] = useState<string>('50000'); // 500,00
  const [custosExtraJudiciais, setCustosExtraJudiciais] = useState<string>('150000'); // 1.500,00
  const [custosImissaoPosse, setCustosImissaoPosse] = useState<string>('0');
  
  // Taxas de registro
  const [taxaEmolumentos, setTaxaEmolumentos] = useState<string>('150000'); // 1.500,00
  const [taxaRegistro, setTaxaRegistro] = useState<string>('200000'); // 2.000,00
  const [taxaAverbacao, setTaxaAverbacao] = useState<string>('100000'); // 1.000,00
  const [custosTransferencia, setCustosTransferencia] = useState<string>('250000'); // 2.500,00
  
  const [resultado, setResultado] = useState<{ [key: string]: number | string | boolean } | null>(null);
  const { toast } = useToast();

  const calcularLeilao = () => {
    try {
      const valor = parseFloat(valorLance) / 100;
      
      if (isNaN(valor) || valor <= 0) {
        throw new Error('Valor do lance é obrigatório');
      }

      // Cálculos
      const comissaoValor = valor * (comissaoLeiloeiro / 100);
      const itbiValor = valor * (itbi / 100);
      const condominioTotal = (parseFloat(valorMensalCondominio) / 100) * tempoImissao;
      const debitosCondominioValor = parseFloat(debitosCondominio) / 100;
      
      // Custos fixos
      const taxasCartoriasValor = parseFloat(taxasCartorarias) / 100;
      const honorariosAdvogadoValor = parseFloat(honorariosAdvogado) / 100;
      const despesasDespachanteValor = parseFloat(despesasDespachante) / 100;
      const custasJudiciaisValor = parseFloat(custasJudiciais) / 100;
      const custoAutoArrematacaoValor = parseFloat(custoAutoArrematacao) / 100;
      const custosEntregaValor = parseFloat(custosEntrega) / 100;
      const custosExtraJudiciaisValor = parseFloat(custosExtraJudiciais) / 100;
      const custosImissaoPosseValor = parseFloat(custosImissaoPosse) / 100;
      const taxaEmolumentosValor = parseFloat(taxaEmolumentos) / 100;
      const taxaRegistroValor = parseFloat(taxaRegistro) / 100;
      const taxaAverbacaoValor = parseFloat(taxaAverbacao) / 100;
      const custosTransferenciaValor = parseFloat(custosTransferencia) / 100;
      
      const total = valor + comissaoValor + itbiValor + condominioTotal + debitosCondominioValor +
                   taxasCartoriasValor + honorariosAdvogadoValor + despesasDespachanteValor +
                   custasJudiciaisValor + custoAutoArrematacaoValor + custosEntregaValor +
                   custosExtraJudiciaisValor + custosImissaoPosseValor + taxaEmolumentosValor +
                   taxaRegistroValor + taxaAverbacaoValor + custosTransferenciaValor;

      setResultado({
        valorLance: valor,
        objetivoAquisicao,
        comissaoLeiloeiro: comissaoValor,
        itbi: itbiValor,
        condominioTotal,
        debitosCondominio: debitosCondominioValor,
        taxasCartorarias: taxasCartoriasValor,
        honorariosAdvogado: honorariosAdvogadoValor,
        despesasDespachante: despesasDespachanteValor,
        custasJudiciais: custasJudiciaisValor,
        custoAutoArrematacao: custoAutoArrematacaoValor,
        custosEntrega: custosEntregaValor,
        custosExtraJudiciais: custosExtraJudiciaisValor,
        custosImissaoPosse: custosImissaoPosseValor,
        taxaEmolumentos: taxaEmolumentosValor,
        taxaRegistro: taxaRegistroValor,
        taxaAverbacao: taxaAverbacaoValor,
        custosTransferencia: custosTransferenciaValor,
        total,
        laudemio,
        taxaMarinha
      });

      toast({
        title: "Cálculo realizado com sucesso",
        description: "Todos os custos do leilão foram calculados.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao calcular",
        description: error.message || "Verifique os valores informados.",
      });
    }
  };

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-6xl mx-auto"
    >
      <Card className="border-2 border-ms-blue shadow-lg bg-gradient-to-br from-white to-ms-blue/5">
        <CardHeader className="bg-ms-blue text-white rounded-t-lg">
          <CardTitle className="text-center text-2xl font-bold">
            Calculadora Completa de Leilão de Imóveis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6 md:p-8">
          
          {/* Valores Principais */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ms-blue border-b-2 border-ms-blue/20 pb-2">Valores Principais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CurrencyInput
                id="valorLance"
                label="Valor do Lance *"
                value={valorLance}
                onChange={setValorLance}
                description="Valor do seu lance no leilão"
                required
              />
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Objetivo da Aquisição</Label>
                <Select value={objetivoAquisicao} onValueChange={(value) => setObjetivoAquisicao(value as 'uso-proprio' | 'revenda')}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uso-proprio">Uso Próprio</SelectItem>
                    <SelectItem value="revenda">Revenda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <PercentageInput
                id="comissaoLeiloeiro"
                label="Comissão do Leiloeiro"
                value={comissaoLeiloeiro}
                onChange={setComissaoLeiloeiro}
                description="Geralmente entre 3% a 5% do valor do lance"
              />
              
              <PercentageInput
                id="itbi"
                label="ITBI (Percentual)"
                value={itbi}
                onChange={setItbi}
                description="Imposto de Transmissão de Bens Imóveis (varia por município)"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="laudemio" 
                  checked={laudemio} 
                  onCheckedChange={(checked) => setLaudemio(checked === true)} 
                />
                <Label htmlFor="laudemio">Imóvel sujeito a Laudêmio</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="taxaMarinha" 
                  checked={taxaMarinha} 
                  onCheckedChange={(checked) => setTaxaMarinha(checked === true)} 
                />
                <Label htmlFor="taxaMarinha">Imóvel sujeito a Taxa de Marinha</Label>
              </div>
            </div>
          </div>

          {/* Custos Adicionais */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ms-blue border-b-2 border-ms-blue/20 pb-2">Custos Adicionais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CurrencyInput
                id="debitosCondominio"
                label="Débitos de Condomínio"
                value={debitosCondominio}
                onChange={setDebitosCondominio}
                description="Débitos condominiais pendentes (se houver)"
              />
              
              <CurrencyInput
                id="valorMensalCondominio"
                label="Valor Mensal do Condomínio"
                value={valorMensalCondominio}
                onChange={setValorMensalCondominio}
                description="Valor mensal do condomínio"
              />
              
              <div className="space-y-2">
                <Label htmlFor="tempoImissao" className="text-sm font-medium">Tempo Estimado até Imissão na Posse (meses)</Label>
                <Input
                  id="tempoImissao"
                  type="number"
                  value={tempoImissao}
                  onChange={(e) => setTempoImissao(parseInt(e.target.value) || 0)}
                  min={1}
                  max={60}
                />
                <p className="text-xs text-muted-foreground">Tempo estimado desde a arrematação até a imissão na posse</p>
              </div>
            </div>
          </div>

          {/* Custos de Transferência */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ms-blue border-b-2 border-ms-blue/20 pb-2">Custos de Transferência</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CurrencyInput
                id="taxasCartorarias"
                label="Taxas Cartorárias"
                value={taxasCartorarias}
                onChange={setTaxasCartorarias}
                description="Taxas de registro em cartório"
              />
              
              <CurrencyInput
                id="honorariosAdvogado"
                label="Honorários de Advogado"
                value={honorariosAdvogado}
                onChange={setHonorariosAdvogado}
                description="Análise de documentação e acompanhamento jurídico"
              />
              
              <CurrencyInput
                id="despesasDespachante"
                label="Despesas com Despachante"
                value={despesasDespachante}
                onChange={setDespesasDespachante}
                description="Serviços de despachante para trâmites"
              />
              
              <CurrencyInput
                id="custosTransferencia"
                label="Custos de Transferência"
                value={custosTransferencia}
                onChange={setCustosTransferencia}
                description="Registros e averbações"
              />
            </div>
          </div>

          {/* Custos Judiciais */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ms-blue border-b-2 border-ms-blue/20 pb-2">Custos Judiciais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CurrencyInput
                id="custasJudiciais"
                label="Custas Judiciais"
                value={custasJudiciais}
                onChange={setCustasJudiciais}
                description="Taxas e custas do processo judicial"
              />
              
              <CurrencyInput
                id="custoAutoArrematacao"
                label="Custo de Auto de Arrematação"
                value={custoAutoArrematacao}
                onChange={setCustoAutoArrematacao}
                description="Custos para emissão do auto de arrematação"
              />
              
              <CurrencyInput
                id="custosEntrega"
                label="Custos de Entrega"
                value={custosEntrega}
                onChange={setCustosEntrega}
                description="Custos associados à entrega do imóvel"
              />
              
              <CurrencyInput
                id="custosExtraJudiciais"
                label="Custos Extra-Judiciais"
                value={custosExtraJudiciais}
                onChange={setCustosExtraJudiciais}
                description="Custos adicionais de procedimentos extra-judiciais"
              />
              
              <CurrencyInput
                id="custosImissaoPosse"
                label="Custos de Imissão na Posse"
                value={custosImissaoPosse}
                onChange={setCustosImissaoPosse}
                description="Custos para remoção de ocupantes (se necessário)"
              />
            </div>
          </div>

          {/* Taxas de Registro e Averbação */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ms-blue border-b-2 border-ms-blue/20 pb-2">Taxas de Registro e Averbação</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CurrencyInput
                id="taxaEmolumentos"
                label="Taxa de Emolumentos"
                value={taxaEmolumentos}
                onChange={setTaxaEmolumentos}
                description="Taxas pagas ao cartório"
              />
              
              <CurrencyInput
                id="taxaRegistro"
                label="Taxa de Registro"
                value={taxaRegistro}
                onChange={setTaxaRegistro}
                description="Custos para registro da carta de arrematação"
              />
              
              <CurrencyInput
                id="taxaAverbacao"
                label="Taxa de Averbação"
                value={taxaAverbacao}
                onChange={setTaxaAverbacao}
                description="Custos para averbação em matrícula"
              />
            </div>
          </div>
          
          <Button 
            onClick={calcularLeilao} 
            className="w-full bg-ms-blue hover:bg-ms-blue-dark text-lg py-6 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          >
            Calcular Custos Completos
          </Button>
        </CardContent>
      </Card>

      {resultado && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-2 border-green-500 shadow-lg">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="text-center text-2xl font-bold">
                Resumo dos Custos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Valor do Lance:</span>
                  <span className="font-bold">{formatCurrency(resultado.valorLance as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Comissão do Leiloeiro ({comissaoLeiloeiro}%):</span>
                  <span>{formatCurrency(resultado.comissaoLeiloeiro as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">ITBI ({itbi}%):</span>
                  <span>{formatCurrency(resultado.itbi as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Condomínio ({tempoImissao} meses):</span>
                  <span>{formatCurrency(resultado.condominioTotal as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Custos Judiciais:</span>
                  <span>{formatCurrency(resultado.custasJudiciais as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Auto de Arrematação:</span>
                  <span>{formatCurrency(resultado.custoAutoArrematacao as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Custos de Entrega:</span>
                  <span>{formatCurrency(resultado.custosEntrega as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Custos Extra-Judiciais:</span>
                  <span>{formatCurrency(resultado.custosExtraJudiciais as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Taxa de Emolumentos:</span>
                  <span>{formatCurrency(resultado.taxaEmolumentos as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Taxa de Registro:</span>
                  <span>{formatCurrency(resultado.taxaRegistro as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Taxa de Averbação:</span>
                  <span>{formatCurrency(resultado.taxaAverbacao as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Custos de Transferência:</span>
                  <span>{formatCurrency(resultado.custosTransferencia as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Taxas Cartorárias:</span>
                  <span>{formatCurrency(resultado.taxasCartorarias as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Honorários de Advogado:</span>
                  <span>{formatCurrency(resultado.honorariosAdvogado as number)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Despesas com Despachante:</span>
                  <span>{formatCurrency(resultado.despesasDespachante as number)}</span>
                </div>
                
                {(resultado.debitosCondominio as number) > 0 && (
                  <div className="flex justify-between">
                    <span className="font-medium">Débitos de Condomínio:</span>
                    <span>{formatCurrency(resultado.debitosCondominio as number)}</span>
                  </div>
                )}
                
                {(resultado.custosImissaoPosse as number) > 0 && (
                  <div className="flex justify-between">
                    <span className="font-medium">Custos de Imissão na Posse:</span>
                    <span>{formatCurrency(resultado.custosImissaoPosse as number)}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t-2 border-green-500 pt-4 mt-6">
                <div className="flex justify-between text-xl">
                  <span className="font-bold text-green-600">Custo Total:</span>
                  <span className="font-bold text-green-600 text-2xl">{formatCurrency(resultado.total as number)}</span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-ms-blue">
                  <strong>Objetivo:</strong> {resultado.objetivoAquisicao === 'uso-proprio' ? 'Uso Próprio' : 'Revenda'}
                  {laudemio && <span className="ml-4 text-red-600">• Sujeito a Laudêmio</span>}
                  {taxaMarinha && <span className="ml-4 text-red-600">• Sujeito a Taxa de Marinha</span>}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Calculator;