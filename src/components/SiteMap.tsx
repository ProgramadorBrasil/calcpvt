
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

const SiteMapItemHorizontal = ({ icon, title, description, onClick, index }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  index: number;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: -20 
      }}
      animate={{ 
        opacity: 1, 
        y: 0 
      }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex items-center justify-center w-12 h-12 rounded-full bg-ms-blue/20 cursor-pointer transition-all hover:bg-ms-blue/30 hover:scale-110"
        onClick={onClick}
      >
        {icon}
      </div>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-background/95 backdrop-blur-md border border-ms-blue/20 rounded-lg shadow-xl z-30"
        >
          <h4 className="font-medium text-ms-blue-dark text-sm mb-2">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const SiteMap = ({ activeTab, setActiveTab }: { activeTab?: string, setActiveTab?: (tab: string) => void }) => {
  const navigate = useNavigate();
  
  const allItems = [
    {
      icon: <Calculator className="h-5 w-5 text-ms-blue" />,
      title: "Calculadora de Leilão",
      description: "Calcule custos e economias em leilões judiciais",
      onClick: () => navigate('/')
    },
    {
      icon: <FileCheck className="h-5 w-5 text-ms-blue" />,
      title: "Verificador de Leilões",
      description: "Verifique a autenticidade de leiloeiros e sites",
      onClick: () => navigate('/verificador-leiloes')
    },
    {
      icon: <Building className="h-5 w-5 text-ms-blue" />,
      title: "Checklist de Compra",
      description: "Lista completa do que verificar antes da arrematação",
      onClick: () => setActiveTab('checklist')
    },
    {
      icon: <Search className="h-5 w-5 text-ms-blue" />,
      title: "Links Úteis",
      description: "Sites e recursos para pesquisa de leilões",
      onClick: () => setActiveTab('links')
    },
    {
      icon: <ChartBar className="h-5 w-5 text-ms-blue" />,
      title: "Estatísticas de Mercado",
      description: "Dados sobre oportunidades e descontos em leilões",
      onClick: () => setActiveTab('faq')
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-ms-blue" />,
      title: "Dúvidas Frequentes",
      description: "Respostas para as perguntas mais comuns",
      onClick: () => setActiveTab('faq')
    },
    {
      icon: <User className="h-5 w-5 text-ms-blue" />,
      title: "Área do Usuário",
      description: "Acesse seus dados e preferências",
      onClick: () => navigate('/auth')
    },
    {
      icon: <Building className="h-5 w-5 text-ms-blue" />,
      title: "Tipos de Imóveis",
      description: "Guia de características de cada tipo de imóvel em leilão",
      onClick: () => setActiveTab('calculadora')
    }
  ];
  
  return (
    <div className="hidden lg:block">
      {/* Horizontal sitemap line */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[85%] h-16 z-20">
        <div className="h-full bg-background/15 backdrop-blur-md border border-ms-blue/20 rounded-full shadow-lg flex items-center justify-center px-6 space-x-6">
          {allItems.map((item, index) => (
            <SiteMapItemHorizontal 
              key={index}
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
              onClick={item.onClick}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
