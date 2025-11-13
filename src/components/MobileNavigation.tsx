
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileCheck, Link as LinkIcon, BookOpen, LogIn, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileNavigation = ({ activeTab, setActiveTab }: MobileNavigationProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isOnVerifierPage = location.pathname === '/verificador-leiloes';
  
  const menuItems = [
    {
      id: "calculadora",
      title: "Calculadora",
      icon: <Calculator className="h-8 w-8" />, // Larger icon for calculator
      primary: true
    },
    {
      id: "checklist",
      title: "Checklist",
      icon: <FileCheck className="h-7 w-7" />, 
      primary: false
    },
    {
      id: "verificador",
      title: "Verificador",
      icon: <ShieldCheck className="h-7 w-7" />,
      primary: false
    },
    {
      id: "links",
      title: "Links",
      icon: <LinkIcon className="h-7 w-7" />, 
      primary: false
    },
    {
      id: "faq",
      title: "Dúvidas",
      icon: <BookOpen className="h-7 w-7" />, 
      primary: false
    },
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === 'verificador') {
      navigate('/verificador-leiloes');
    } else {
      setActiveTab(tabId);
      if (isOnVerifierPage) {
        navigate('/');
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-6 h-18">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`flex flex-col items-center justify-center p-1 ${
              (activeTab === item.id && !isOnVerifierPage) || (item.id === 'verificador' && isOnVerifierPage)
                ? item.primary 
                  ? "text-white bg-ms-blue" 
                  : "text-ms-blue"
                : "text-gray-500"
            }`}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center"
            >
              {item.icon}
              <span className={`text-xs mt-1 ${item.primary && activeTab === item.id && !isOnVerifierPage ? "font-bold" : ""}`}>
                {item.title}
              </span>
              {((activeTab === item.id && !isOnVerifierPage) || (item.id === 'verificador' && isOnVerifierPage)) && !item.primary && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 w-12 h-1 bg-ms-blue rounded-t-md"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          </button>
        ))}
        
        {/* Login button */}
        <button
          onClick={() => window.location.href = isAuthenticated ? '#profile' : '/auth'}
          className="flex flex-col items-center justify-center p-1 text-gray-500"
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <LogIn className="h-7 w-7" />
            <span className="text-xs mt-1">{isAuthenticated ? "Perfil" : "Entrar"}</span>
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
