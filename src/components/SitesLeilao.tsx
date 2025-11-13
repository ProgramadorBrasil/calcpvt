
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Gavel, Link, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LeiloeiroPlatformProps {
  nome: string;
  leiloeiro?: string;
  matricula?: string;
  site: string;
  atuacao: string;
  situacao: 'Atuante' | 'Destituído' | 'Exonerado' | 'Falecido';
  dataDestituicao?: string;
}

const LeiloeiroPlatform: React.FC<LeiloeiroPlatformProps> = ({ 
  nome, 
  leiloeiro, 
  matricula, 
  site, 
  atuacao,
  situacao
}) => {
  return (
    <Card className={`hover:shadow-md transition-shadow ${situacao !== 'Atuante' ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/20' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg flex items-center gap-2">
            {situacao !== 'Atuante' && <AlertCircle className="h-5 w-5 text-amber-600" />}
            {nome}
          </CardTitle>
          {matricula && <Badge variant="outline">JUCESP {matricula}</Badge>}
        </div>
        {leiloeiro && <CardDescription>Leiloeiro: {leiloeiro}</CardDescription>}
        <CardDescription className="mt-1">{atuacao}</CardDescription>
        {situacao !== 'Atuante' && (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 mt-2">
            {situacao}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <Button variant="outline" className="w-full" asChild>
          <a href={`https://${site}`} target="_blank" rel="noopener noreferrer">
            <Link className="h-4 w-4 mr-2" />
            {site}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const SitesLeilao = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ativos');
  
  const leiloeiros: LeiloeiroPlatformProps[] = [
    {
      nome: "Zukerman Leilões",
      leiloeiro: "Dora Plat (JUCESP 744) e Mauro Zukerman (JUCESP 328)",
      site: "portalzuk.com.br",
      atuacao: "Especializados em leilões judiciais e extrajudiciais de imóveis em todo o Brasil, com forte presença em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Mega Leilões",
      leiloeiro: "Fernando José Cerello Gonçalves Pereira (JUCESP 957)",
      site: "megaleiloes.com.br",
      atuacao: "Realiza leilões judiciais e extrajudiciais de imóveis, veículos e outros bens, com abrangência nacional e forte presença em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Freitas Leiloeiro",
      leiloeiro: "Sergio Villa Nova de Freitas (JUCESP 316)",
      site: "freitasleiloeiro.com.br",
      atuacao: "Leilões de veículos, imóveis e materiais diversos, com atuação destacada em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "E-Leiloeiro",
      leiloeiro: "Anderson Lopes de Paula",
      matricula: "1083",
      site: "e-leiloeiro.leilao.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis, veículos e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Gilson Leilões",
      leiloeiro: "Gilson Keniti Inumaru",
      matricula: "762",
      site: "gilsonleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Torres Leilões",
      leiloeiro: "Torres Leilões",
      site: "3torresleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Leilões Gold",
      leiloeiro: "Uilian Aparecido da Silva",
      matricula: "958", 
      site: "leiloesgold.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Leilão Brasil",
      leiloeiro: "Dagmar Conceição de Souza Flores",
      matricula: "901",
      site: "leilaobrasil.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Giordano Leilões",
      leiloeiro: "Giordano Bruno Coan Amador",
      matricula: "22/348-L",
      site: "giordanoleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Gustavo Moretto Leiloeiro",
      leiloeiro: "Gustavo Moretto Guimarães de Oliveira",
      matricula: "22/344-L",
      site: "gustavomorettoleiloeiro.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Rigolon Leilões",
      leiloeiro: "Rodrigo Aparecido Rigolon da Silva",
      matricula: "22/354-L",
      site: "rigolonleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Resale",
      leiloeiro: "Plataforma: Resale",
      site: "resale.com.br",
      atuacao: "Leilões de imóveis de instituições financeiras, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Sperança Leilões",
      leiloeiro: "Jaqueline Sperança",
      matricula: "21/328-L",
      site: "sperancaleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Kronberg Leilões",
      leiloeiro: "Helcio Kronberg",
      matricula: "653",
      site: "kronbergleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "VM Leilões",
      leiloeiro: "Jair Vicente Martins",
      matricula: "609",
      site: "vmleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Verrileilões",
      leiloeiro: "Helton Rogério Verri Ventrilho",
      matricula: "22/351-L",
      site: "verrileiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Topoleilões",
      leiloeiro: "Guilherme Eduardo Stutz Toporoski",
      matricula: "12/049-L",
      site: "topoleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "JMF Leilões",
      leiloeiro: "João Vitor Martins Ferreira",
      matricula: "21/331-L",
      site: "jmfleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Legis Leilões",
      leiloeiro: "Plataforma: Legis Leilões",
      site: "legisleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Viva Leilões",
      leiloeiro: "Fernando Sacco Neto",
      matricula: "1033",
      site: "vivaleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "HastaPública Leilões",
      leiloeiro: "Plataforma: HastaPública Leilões",
      site: "hastapublica.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Alfa Leilões",
      leiloeiro: "Davi Borges de Aquino",
      matricula: "1070",
      site: "alfaleiloes.com",
      atuacao: "Especialista em imóveis, oferecendo leilões com até 50% de desconto, com atuação em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Leonardo Schulmann Leilões",
      leiloeiro: "Leonardo Schulmann",
      site: "schulmannleiloes.com.br",
      atuacao: "Especializado em leilões judiciais de imóveis, com atuação em diversos estados, incluindo São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Sodré Santoro",
      leiloeiro: "Flavio Cunha Sodré Santoro", 
      matricula: "581",
      site: "sodresantoro.com.br",
      atuacao: "Especializada em leilões judiciais e extrajudiciais de imóveis e veículos em todo Brasil.",
      situacao: "Atuante"
    },
    {
      nome: "Sold Leilões",
      site: "sold.com.br",
      atuacao: "Grande volume de imóveis bancários e judiciais em todo o Brasil.",
      situacao: "Atuante"
    },
    {
      nome: "Biasi Leilões",
      leiloeiro: "Eduardo Consentino",
      matricula: "616",
      site: "biasileiloes.com.br",
      atuacao: "Forte presença no mercado de leilões judiciais, com foco em imóveis urbanos.",
      situacao: "Atuante"
    },
    {
      nome: "Leiloeiro Público Oficial",
      site: "leiloeiropublico.com.br",
      atuacao: "Portal que reúne vários leiloeiros oficiais em uma única plataforma.",
      situacao: "Atuante"
    },
    {
      nome: "GF Leilões",
      leiloeiro: "Brian Galvão Frota",
      matricula: "1278",
      site: "gfleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com abrangência nacional.",
      situacao: "Atuante"
    },
    {
      nome: "Daniel Hamoui Leilões",
      leiloeiro: "Daniel Hamoui",
      matricula: "1105",
      site: "dhleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais de imóveis e outros bens.",
      situacao: "Atuante"
    },
    {
      nome: "Nogari Leilões",
      leiloeiro: "Jorge Ferlin Dale Nogari dos Santos",
      matricula: "1166",
      site: "nogari.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com especialização em bens diversos.",
      situacao: "Atuante"
    },
    {
      nome: "DBM Leilões",
      leiloeiro: "Danillo Fabricio Ballini Miani",
      matricula: "1148",
      site: "dbmleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com forte presença online.",
      situacao: "Atuante"
    },
    {
      nome: "Sudeste Leilões",
      leiloeiro: "Eduardo Dix Fuchs",
      matricula: "1225",
      site: "sudesteleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com foco na região Sudeste.",
      situacao: "Atuante"
    },
    {
      nome: "Leilão Online",
      leiloeiro: "Eduardo Jordão Boyadjian",
      matricula: "464",
      site: "leilaoonline.net",
      atuacao: "Plataforma pioneira em leilões online com ampla experiência.",
      situacao: "Atuante"
    },
    {
      nome: "Clic Leilões",
      leiloeiro: "Eduardo Schmitz",
      matricula: "1297",
      site: "clicleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com interface digital moderna.",
      situacao: "Atuante"
    },
    {
      nome: "Amaral Leilões",
      leiloeiro: "Eder Amaral de Oliveira",
      matricula: "966",
      site: "amaralleiloes.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com foco em São Paulo.",
      situacao: "Atuante"
    },
    {
      nome: "Nordeste Leilões",
      leiloeiro: "Arthur Ferreira Nunes",
      matricula: "1435",
      site: "nordesteleiloes.com",
      atuacao: "Leilões judiciais e extrajudiciais com atuação no Nordeste e Sudeste.",
      situacao: "Atuante"
    },
    {
      nome: "Lance Total",
      leiloeiro: "Angelica Mieko Inoue Dantas",
      matricula: "747",
      site: "lancetotal.com.br",
      atuacao: "Leilões judiciais e extrajudiciais com plataforma de lances inovadora.",
      situacao: "Atuante"
    },
    // Leiloeiros inativos
    {
      nome: "Adriano Rocha Neves",
      leiloeiro: "JUCESP 696",
      site: "rocha.lel.br",
      atuacao: "Leiloeiro destituído em 05/09/2024.",
      dataDestituicao: "05/09/2024",
      situacao: "Destituído"
    },
    {
      nome: "Afonso Domingues Cravo",
      leiloeiro: "JUCESP 1187",
      site: "sem site registrado",
      atuacao: "Leiloeiro exonerado em 27/12/2022.",
      dataDestituicao: "27/12/2022",
      situacao: "Exonerado"
    },
    {
      nome: "Aedi de Andrade Verrone",
      leiloeiro: "JUCESP 840",
      site: "lanceleiloes.com",
      atuacao: "Leiloeiro falecido em 26/09/2023.",
      dataDestituicao: "26/09/2023",
      situacao: "Falecido"
    },
    {
      nome: "Iara Russo",
      leiloeiro: "JUCESP 554",
      site: "russoleiloes.com.br",
      atuacao: "Leiloeira destituída em 20/07/2021.",
      dataDestituicao: "20/07/2021",
      situacao: "Destituído"
    },
    {
      nome: "Iraildo de Sá Cavalcante",
      leiloeiro: "JUCESP 814",
      site: "leiloesbrasileiros.com.br",
      atuacao: "Leiloeiro destituído em 06/10/2020.",
      dataDestituicao: "06/10/2020",
      situacao: "Destituído"
    }
  ];

  const filteredLeiloeiros = searchQuery
    ? leiloeiros.filter(leiloeiro => 
        leiloeiro.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (leiloeiro.leiloeiro && leiloeiro.leiloeiro.toLowerCase().includes(searchQuery.toLowerCase())) ||
        leiloeiro.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
        leiloeiro.atuacao.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (leiloeiro.matricula && leiloeiro.matricula.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : leiloeiros;
  
  const ativosLeiloeiros = filteredLeiloeiros.filter(leiloeiro => leiloeiro.situacao === "Atuante");
  const inativosLeiloeiros = filteredLeiloeiros.filter(leiloeiro => leiloeiro.situacao !== "Atuante");

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Sites de Leilão</h2>
          <Badge variant="outline" className="text-xs">Atualizado em 17/05/2025</Badge>
        </div>
        
        <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 mb-4">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 dark:bg-amber-800 p-2 rounded-full">
                <Gavel className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 mb-1">Lista de Leiloeiros e Plataformas</h3>
                <p className="text-amber-700 dark:text-amber-400">
                  Todos os leiloeiros e plataformas listados foram verificados conforme situação na JUCESP em 17/05/2025.
                </p>
                <div className="mt-4">
                  <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-800/50">
                    <a href="/leiloeiros-ativos-05-2025.pdf" download className="flex items-center">
                      <Link className="h-4 w-4 mr-2" />
                      Baixar lista completa de leiloeiros (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar leiloeiro, matrícula ou plataforma..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="ativos" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="ativos">
              Leiloeiros Ativos ({ativosLeiloeiros.length})
            </TabsTrigger>
            <TabsTrigger value="inativos">
              Leiloeiros Inativos ({inativosLeiloeiros.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ativos">
            {ativosLeiloeiros.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Nenhum leiloeiro ativo encontrado para a busca "{searchQuery}"</p>
              </div>
            ) : (
              <ScrollArea className="h-[500px] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ativosLeiloeiros.map((leiloeiro) => (
                    <LeiloeiroPlatform
                      key={leiloeiro.nome}
                      nome={leiloeiro.nome}
                      leiloeiro={leiloeiro.leiloeiro}
                      matricula={leiloeiro.matricula}
                      site={leiloeiro.site}
                      atuacao={leiloeiro.atuacao}
                      situacao={leiloeiro.situacao}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
          
          <TabsContent value="inativos">
            {inativosLeiloeiros.length > 0 && (
              <Alert variant="destructive" className="mb-4 bg-amber-50 border-amber-200 text-amber-800">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Atenção!</AlertTitle>
                <AlertDescription>
                  Os leiloeiros listados abaixo não estão ativos ou foram exonerados/destituídos. Verifique a situação antes de participar de qualquer leilão.
                </AlertDescription>
              </Alert>
            )}
            
            {inativosLeiloeiros.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Nenhum leiloeiro inativo encontrado para a busca "{searchQuery}"</p>
              </div>
            ) : (
              <ScrollArea className="h-[500px] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {inativosLeiloeiros.map((leiloeiro) => (
                    <LeiloeiroPlatform
                      key={leiloeiro.nome}
                      nome={leiloeiro.nome}
                      leiloeiro={leiloeiro.leiloeiro}
                      matricula={leiloeiro.matricula}
                      site={leiloeiro.site}
                      atuacao={leiloeiro.atuacao}
                      situacao={leiloeiro.situacao}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SitesLeilao;
