
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Info, Link, Star, TrendingUp } from "lucide-react";

const MaioresPlataformas = () => {
  const plataformas = [
    {
      nome: "Zukerman Leilões",
      descricao: "Uma das maiores plataformas do Brasil, com presença nacional e foco em leilões judiciais.",
      site: "portalzuk.com.br",
      ranking: 1
    },
    {
      nome: "Sodré Santoro",
      descricao: "Especializada em leilões judiciais e extrajudiciais de imóveis e veículos.",
      site: "sodresantoro.com.br",
      ranking: 2
    },
    {
      nome: "Sold Leilões",
      descricao: "Grande volume de imóveis bancários e judiciais em todo o Brasil.",
      site: "sold.com.br",
      ranking: 3
    },
    {
      nome: "Biasi Leilões",
      descricao: "Forte presença no mercado de leilões judiciais, com foco em imóveis urbanos.",
      site: "biasileiloes.com.br",
      ranking: 4
    },
    {
      nome: "Leiloeiro Público Oficial",
      descricao: "Portal que reúne vários leiloeiros oficiais em uma única plataforma.",
      site: "leiloeiropublico.com.br",
      ranking: 5
    },
    {
      nome: "Mega Leilões",
      descricao: "Especializada em leilões judiciais e extrajudiciais com forte presença online.",
      site: "megaleiloes.com.br",
      ranking: 6
    }
  ];

  const dicas = [
    {
      tipo: "vantajosa",
      titulo: "Aproveite os imóveis em 2ª praça",
      texto: "Na 2ª praça, os lances podem começar com até 50% de desconto sobre o valor de avaliação"
    },
    {
      tipo: "preocupante",
      titulo: "Verifique ocupação do imóvel",
      texto: "Imóveis ocupados exigem processo de desocupação, que pode ser custoso e demorado"
    },
    {
      tipo: "info",
      titulo: "Leia o edital completo",
      texto: "O edital contém todas as informações importantes sobre o imóvel e as condições do leilão"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="cnn-headline">As Maiores Plataformas de Leilão</h2>
        <p className="text-muted-foreground mb-4">
          Conforme pesquisa da CNN Brasil, Exame e Folha de São Paulo, estas são as maiores plataformas de leilão de imóveis do Brasil
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plataformas.map((plataforma) => (
            <Card key={plataforma.nome} className="hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{plataforma.nome}</h3>
                  <Badge variant="outline" className="bg-[#1EAEDB]/10">#{plataforma.ranking}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{plataforma.descricao}</p>
                <div className="flex items-center text-sm text-blue-600">
                  <Link className="h-4 w-4 mr-1" />
                  <a href={`https://${plataforma.site}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {plataforma.site}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="cnn-subheadline">Dicas importantes para leilões</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dicas.map((dica, idx) => (
            <Alert key={idx} className={dica.tipo === "vantajosa" ? "banner-advantage" : dica.tipo === "preocupante" ? "banner-warning" : "banner-info"}>
              <div className="flex items-center mb-2">
                {dica.tipo === "vantajosa" && <TrendingUp className="h-5 w-5 text-green-600 mr-2" />}
                {dica.tipo === "preocupante" && <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />}
                {dica.tipo === "info" && <Info className="h-5 w-5 text-blue-600 mr-2" />}
                <span className="font-semibold">{dica.titulo}</span>
              </div>
              <AlertDescription>
                {dica.texto}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-6">
        <div className="bg-gray-50 p-6 rounded-lg border">
          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="text-lg font-semibold">Método para encontrar boas oportunidades</h3>
          </div>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Monitorar regularmente as principais plataformas listadas acima</li>
            <li>Focar em imóveis que estão em segunda praça (lance mínimo reduzido)</li>
            <li>Verificar a documentação completa e certidões do imóvel antes do leilão</li>
            <li>Consultar a matrícula do imóvel para verificar existência de ônus</li>
            <li>Realizar visita ao imóvel quando possível para avaliar condições</li>
            <li>Calcular todos os custos envolvidos, inclusive os de regularização</li>
            <li>Consultar um advogado especializado antes de dar o lance</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MaioresPlataformas;
