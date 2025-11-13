import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, CheckCircle2, XCircle, ExternalLink, AlertCircle, UserCheck } from 'lucide-react';
import { verifyAuctioneerSite, verifyAuctioneerByName } from '@/utils/auctioneers';

const AuctionVerifier = () => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean;
    auctioneerName?: string;
    auctioneerInfo?: {
      name: string;
      registrationNumber: string;
      status: 'active' | 'inactive';
      website?: string;
    };
    reason?: string;
  } | null>(null);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('website');

  const handleVerifyWebsite = async () => {
    if (!url) {
      toast({
        variant: "destructive",
        title: "URL não fornecida",
        description: "Por favor, insira o URL do site do leiloeiro para verificação.",
      });
      return;
    }

    try {
      setIsVerifying(true);
      const result = await verifyAuctioneerSite(url);
      setVerificationResult(result);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro na verificação",
        description: error.message || "Não foi possível verificar o site do leiloeiro.",
      });
      setVerificationResult(null);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerifyName = () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Nome ou matrícula não fornecidos",
        description: "Por favor, insira o nome do leiloeiro ou número de matrícula para verificação.",
      });
      return;
    }

    try {
      setIsVerifying(true);
      const result = verifyAuctioneerByName(name);
      setVerificationResult(result);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro na verificação",
        description: error.message || "Não foi possível verificar o leiloeiro.",
      });
      setVerificationResult(null);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <Card className="w-full shadow-lg border-ms-blue/20">
      <CardHeader className="bg-gradient-to-r from-ms-blue to-ms-blue-dark text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold">Verificador de Leilões</CardTitle>
        <CardDescription className="text-white/80">
          Verifique se o leiloeiro é legítimo e está ativo
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <p className="text-sm text-gray-600">
            Insira o URL do site do leiloeiro ou o nome/matrícula do leiloeiro para verificar se está registrado e ativo em nossa base de dados.
            Esta ferramenta ajuda a evitar fraudes e garantir que você está participando de um leilão legítimo.
          </p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="website">Verificar por Website</TabsTrigger>
              <TabsTrigger value="name">Verificar por Nome/Matrícula</TabsTrigger>
            </TabsList>
            
            <TabsContent value="website" className="mt-4">
              <div className="flex space-x-2">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.leiloeiro.com.br"
                  className="flex-1"
                />
                <Button 
                  onClick={handleVerifyWebsite}
                  disabled={isVerifying || !url}
                  className="bg-ms-blue hover:bg-ms-blue-dark"
                >
                  {isVerifying ? "Verificando..." : <Search className="mr-2 h-4 w-4" />}
                  {!isVerifying && "Verificar"}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="name" className="mt-4">
              <div className="flex space-x-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome do leiloeiro ou número de matrícula"
                  className="flex-1"
                />
                <Button 
                  onClick={handleVerifyName}
                  disabled={isVerifying || !name}
                  className="bg-ms-blue hover:bg-ms-blue-dark"
                >
                  {isVerifying ? "Verificando..." : <UserCheck className="mr-2 h-4 w-4" />}
                  {!isVerifying && "Verificar"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          {verificationResult && (
            <Alert
              className={`mt-4 ${
                verificationResult.isValid 
                  ? "border-green-500 bg-green-50" 
                  : "border-red-500 bg-red-50"
              }`}
            >
              {verificationResult.isValid ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-700 font-bold">
                    Leiloeiro verificado
                  </AlertTitle>
                  <AlertDescription className="text-green-700">
                    {verificationResult.auctioneerName || (verificationResult.auctioneerInfo && `${verificationResult.auctioneerInfo.name} (${verificationResult.auctioneerInfo.registrationNumber})`)} está registrado e ativo em nossa base de dados.
                    {verificationResult.auctioneerInfo?.website && (
                      <div className="mt-2">
                        <span className="font-semibold">Website oficial: </span>
                        <a 
                          href={`https://${verificationResult.auctioneerInfo.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          {verificationResult.auctioneerInfo.website}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    )}
                    <p className="mt-2">Você pode participar deste leilão com segurança.</p>
                  </AlertDescription>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-700 font-bold">
                    Leiloeiro não verificado
                  </AlertTitle>
                  <AlertDescription className="text-red-700">
                    {verificationResult.reason || "Este leiloeiro não foi encontrado em nossa base de dados ou está inativo."}
                    {verificationResult.auctioneerInfo?.status === 'inactive' && (
                      <div className="mt-2">
                        <span className="font-semibold">Motivo: </span>
                        {verificationResult.reason}
                      </div>
                    )}
                    <p className="mt-2 font-semibold">Recomendamos cautela antes de participar deste leilão.</p>
                  </AlertDescription>
                </>
              )}
            </Alert>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>Dados atualizados em: 17/05/2025</span>
        </div>
        <Button 
          variant="link" 
          size="sm"
          className="p-0 h-auto text-ms-blue"
          onClick={() => window.open("/leiloeiros-ativos-05-2025.pdf", "_blank")}
        >
          <ExternalLink className="h-3 w-3 mr-1" />
          <span>Ver lista completa de leiloeiros ativos</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuctionVerifier;
