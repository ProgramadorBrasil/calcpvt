import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calculator, 
  FileCheck, 
  Link, 
  BookOpen, 
  Home, 
  Settings,
  User,
  Building,
  ChartBar,
  Info,
  Search,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type SiteMapItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  side?: 'left' | 'right';
  index: number;
}

const SiteMapItem: React.FC<SiteMapItemProps> = ({ icon, title, description, onClick, side = 'left', index }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: side === 'left' ? -50 : 50 
      }}
      animate={{ 
        opacity: 1, 
        x: 0 
      }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2
      }}
      whileHover={{ scale: 1.03 }}
      className="mb-4"
    >
      <Card 
        className="overflow-hidden backdrop-blur-md bg-white/90 border border-ms-blue/20 shadow-md cursor-pointer transition-all hover:shadow-lg"
        onClick={onClick}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-ms-blue/10 p-2 rounded-full">
              {icon}
            </div>
            <div>
              <h4 className="font-medium text-ms-blue-dark text-sm mb-1">{title}</h4>
              <p className="text-xs text-gray-600">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SiteMap = () => {
  const navigate = useNavigate();
  
  const leftItems = [
    {
      icon: <Calculator className="h-5 w-5 text-ms-blue" />,
      title: "Calculadora de Leilão",
      description: "Calcule custos e economias em leilões judiciais",
      onClick: () => navigate('/')
    },
    {
      icon: <FileCheck className="h-5 w-5 text-ms-blue" />,
      title: "Checklist de Compra",
      description: "Lista completa do que verificar antes da arrematação",
      onClick: () => navigate('/')
    },
    {
      icon: <Building className="h-5 w-5 text-ms-blue" />,
      title: "Tipos de Imóveis",
      description: "Guia de características de cada tipo de imóvel em leilão",
      onClick: () => navigate('/')
    },
    {
      icon: <Search className="h-5 w-5 text-ms-blue" />,
      title: "Busca Avançada",
      description: "Encontre oportunidades ideais para seu perfil",
      onClick: () => navigate('/')
    }
  ];
  
  const rightItems = [
    {
      icon: <Link className="h-5 w-5 text-ms-blue" />,
      title: "Links Úteis",
      description: "Sites e recursos para pesquisa de leilões",
      onClick: () => navigate('/')
    },
    {
      icon: <ChartBar className="h-5 w-5 text-ms-blue" />,
      title: "Estatísticas de Mercado",
      description: "Dados sobre oportunidades e descontos em leilões",
      onClick: () => navigate('/')
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-ms-blue" />,
      title: "Dúvidas Frequentes",
      description: "Respostas para as perguntas mais comuns",
      onClick: () => navigate('/')
    },
    {
      icon: <User className="h-5 w-5 text-ms-blue" />,
      title: "Área do Usuário",
      description: "Acesse seus dados e preferências",
      onClick: () => navigate('/')
    }
  ];
  
  return (
    <div className="hidden lg:block">
      {/* Left side map */}
      <div className="fixed left-6 top-1/3 w-64 space-y-4 z-20">
        {leftItems.map((item, index) => (
          <SiteMapItem 
            key={index}
            icon={item.icon} 
            title={item.title} 
            description={item.description} 
            onClick={item.onClick}
            side="left"
            index={index}
          />
        ))}
      </div>
      
      {/* Right side map */}
      <div className="fixed right-6 top-1/3 w-64 space-y-4 z-20">
        {rightItems.map((item, index) => (
          <SiteMapItem 
            key={index}
            icon={item.icon} 
            title={item.title} 
            description={item.description} 
            onClick={item.onClick}
            side="right"
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SiteMap;