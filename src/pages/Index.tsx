
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calculator from '@/components/Calculator';
import Checklist from '@/components/Checklist';
import LinksUteis from '@/components/LinksUteis';
import Faq from '@/components/Faq';
import AnimatedSidebar from '@/components/AnimatedSidebar';
import RotatingFaqBanner from '@/components/RotatingFaqBanner';
import AuctionComparisonTable from '@/components/AuctionComparisonTable';
import FaqCarousel from '@/components/FaqCarousel';
import AppleStyleNavigation from '@/components/AppleStyleNavigation';
import AnimatedTutorial from '@/components/AnimatedTutorial';
import MobileFaqBoxes from '@/components/MobileFaqBoxes';
import MobileNavigation from '@/components/MobileNavigation';
import WhatsAppGroupInvite from '@/components/WhatsAppGroupInvite';
import MentorshipWaitlist from '@/components/MentorshipWaitlist';
import UserProfileMenu from '@/components/UserProfileMenu';
import SiteMap from '@/components/SiteMap';
import SideFaqBoxes from '@/components/SideFaqBoxes';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calculator as CalculatorIcon, FileCheck, Link, BookOpen } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';

// Add Microsoft design-inspired global CSS
import '../index.css';

const Index = () => {
  const [activeTab, setActiveTab] = useState('calculadora');
  const [showTutorial, setShowTutorial] = useState(false);
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Helper function to render the active component
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'calculadora':
        return <Calculator />;
      case 'checklist':
        return <Checklist />;
      case 'links':
      case 'sites-leilao':
      case 'sites-juridicos':
      case 'maiores-plataformas':
        return <LinksUteis />;
      case 'faq':
        return <Faq />;
      default:
        return <Calculator />;
    }
  };

  // Get breadcrumb items based on active tab
  const getBreadcrumbItems = () => {
    const baseItems = [
      { label: 'Início', onClick: () => setActiveTab('calculadora') }
    ];
    
    switch (activeTab) {
      case 'calculadora':
        return [...baseItems, { label: 'Calculadora de Leilão', isActive: true }];
      case 'checklist':
        return [...baseItems, { label: 'Checklist de Compra', isActive: true }];
      case 'links':
      case 'sites-leilao':
      case 'sites-juridicos':
      case 'maiores-plataformas':
        return [...baseItems, { label: 'Links Úteis', isActive: true }];
      case 'faq':
        return [...baseItems, { label: 'Dúvidas Frequentes', isActive: true }];
      default:
        return baseItems;
    }
  };

  // Quick navigation buttons for prominent sections
  const QuickNavButton = ({ icon: Icon, label, tab, isPrimary = false }: { icon: any, label: string, tab: string, isPrimary?: boolean }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={isPrimary ? "flex-2" : "flex-1"}
    >
      <Button 
        variant={isPrimary ? "default" : "outline"}
        className={`w-full py-6 flex flex-col items-center gap-2 ${
          isPrimary 
            ? "bg-ms-blue text-white shadow-lg" 
            : activeTab === tab ? 'bg-ms-blue/10 border-ms-blue/30' : 'hover:bg-ms-blue/10'
        } ${isPrimary && "border-2 border-ms-blue"}`}
        onClick={() => setActiveTab(tab)}
      >
        <Icon className={`h-9 w-9 ${isPrimary ? "text-white" : "text-ms-blue"}`} />
        <span className={`${isPrimary ? "text-white font-bold" : "text-ms-blue font-medium"} text-lg`}>{label}</span>
      </Button>
    </motion.div>
  );

  // On first load, ensure calculator tab is active
  useEffect(() => {
    setActiveTab('calculadora');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-ms-gray-light/20 relative pb-20">
      {/* Microsoft style banner at the top */}
      <div className="microsoft-gradient text-white">
        <RotatingFaqBanner />
      </div>

      {/* User profile menu (top right) */}
      {!isMobile && isAuthenticated && (
        <div className="fixed top-4 right-4 z-50">
          <UserProfileMenu />
        </div>
      )}

      {/* Login button (top right) when not authenticated */}
      {!isMobile && !isAuthenticated && (
        <div className="fixed top-4 right-4 z-50">
          <Button 
            onClick={() => navigate('/auth')} 
            className="bg-ms-blue hover:bg-ms-blue-dark"
          >
            Entrar / Cadastrar
          </Button>
        </div>
      )}

      {/* Floating Sidebar - only show on desktop */}
      {!isMobile && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30">
          <AnimatedSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}

      {/* Site Map with thematic icons - horizontal top navigation */}
      <SiteMap activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* FAQ boxes - horizontal bottom navigation */}
      <SideFaqBoxes />

      {/* Apple-style horizontal navigation - only show on desktop */}
      {!isMobile && (
        <AppleStyleNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      
      {/* Mobile bottom navigation */}
      {isMobile && (
        <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      
      {/* Main Content */}
      <div className="container mx-auto p-4 relative">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={getBreadcrumbItems()} />
        
        {/* Quick Navigation Buttons (visible on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-6"
        >
          <div className="w-full text-center mb-2">
            <h3 className="text-xl font-bold text-ms-blue">Navegação Rápida</h3>
          </div>
          <div className="flex w-full gap-2">
            <QuickNavButton icon={CalculatorIcon} label="Calculadora" tab="calculadora" isPrimary={true} />
            <QuickNavButton icon={FileCheck} label="Checklist" tab="checklist" />
            <QuickNavButton icon={Link} label="Links" tab="links" />
            <QuickNavButton icon={BookOpen} label="Dúvidas" tab="faq" />
          </div>
        </motion.div>
        
        {/* Display FAQ carousel at the top of the calculator page */}
        {activeTab === 'calculadora' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-ms-blue/5 p-4 rounded-lg border border-ms-blue/20 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-ms-blue text-center mb-4">Calculadora de Leilão de Imóveis</h2>
              <p className="text-center text-ms-blue-dark mb-2">
                Use nossa calculadora para estimar os custos e valores totais em leilões judiciais de imóveis.
                Escolha entre primeira e segunda praça para obter resultados precisos.
              </p>
            </div>
            <FaqCarousel />
            <div className="mt-8">
              <AuctionComparisonTable />
            </div>
          </motion.div>
        )}
        
        {/* Mentorship and WhatsApp Group sections */}
        {activeTab === 'calculadora' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <MentorshipWaitlist />
            <WhatsAppGroupInvite />
          </div>
        )}
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`mt-4 ${activeTab === 'calculadora' ? 'bg-white/50 p-8 rounded-xl shadow-xl border border-ms-blue/20' : ''}`}
        >
          {renderActiveComponent()}
        </motion.div>

        {/* Mobile FAQ boxes at the bottom */}
        {isMobile && <MobileFaqBoxes />}

        {/* Interactive tutorial button */}
        <motion.div 
          className="fixed bottom-20 right-4 z-30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => setShowTutorial(true)}
            className="bg-ms-blue text-white shadow-lg hover:bg-ms-blue-dark rounded-full h-16 w-16 flex items-center justify-center"
          >
            <BookOpen className="h-9 w-9" />
          </Button>
        </motion.div>
        
        {/* Animated Tutorial Modal */}
        {showTutorial && <AnimatedTutorial onClose={() => setShowTutorial(false)} />}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
