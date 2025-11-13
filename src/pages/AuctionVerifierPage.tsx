
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuctionVerifier from '@/components/AuctionVerifier';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import MobileNavigation from '@/components/MobileNavigation';
import { useIsMobile } from '@/hooks/use-mobile';

const AuctionVerifierPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-ms-gray-light/20 pb-20">
      <div className="bg-ms-blue text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-ms-blue-dark mr-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-xl font-bold">Verificador de Leilões</h1>
        </div>
      </div>
      
      <div className="container mx-auto p-4 max-w-3xl">
        <div className="mb-6 mt-6">
          <p className="text-lg text-center text-gray-700 mb-8">
            Use nossa ferramenta para verificar a autenticidade de leiloeiros e garantir sua segurança em leilões de imóveis.
          </p>
          
          <AuctionVerifier />
          
          <div className="mt-8 bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-700 mb-2">Dicas de segurança:</h3>
            <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
              <li>Sempre verifique se o leiloeiro está registrado na JUCESP ou órgão competente</li>
              <li>Desconfie de preços muito abaixo do mercado</li>
              <li>Consulte a matrícula do imóvel antes de dar lances</li>
              <li>Verifique se existem dívidas ou restrições sobre o imóvel</li>
              <li>Nunca realize pagamentos diretamente na conta de pessoas físicas</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobile && (
        <MobileNavigation activeTab="" setActiveTab={(tab) => navigate(tab === 'verificador' ? '/verificador-leiloes' : '/')} />
      )}
    </div>
  );
};

export default AuctionVerifierPage;
