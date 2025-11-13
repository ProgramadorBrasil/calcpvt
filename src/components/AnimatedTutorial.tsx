
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Home, 
  Calculator, 
  FileCheck, 
  Link, 
  HelpCircle,
  Award,
  AlertTriangle,
  DollarSign,
  CheckSquare
} from 'lucide-react';

interface AnimatedTutorialProps {
  onClose: () => void;
}

const tutorialSteps = [
  {
    title: "Bem-vindo ao Guia de Leilões!",
    description: "Este tutorial irá ajudá-lo a entender como usar nossa plataforma para participar de leilões de forma segura e lucrativa.",
    icon: Home,
    animation: "bounceIn"
  },
  {
    title: "Calculadora de Custos",
    description: "Use nossa calculadora para estimar todos os custos envolvidos, incluindo lance, comissão, impostos e possíveis reformas.",
    icon: Calculator,
    animation: "slideFromRight"
  },
  {
    title: "Checklist de Verificação",
    description: "Siga nosso checklist detalhado para garantir que você verificou todos os aspectos importantes do imóvel e do processo.",
    icon: FileCheck,
    animation: "fadeInUp"
  },
  {
    title: "Links Úteis",
    description: "Encontre sites confiáveis de leilões, informações jurídicas e as principais plataformas do mercado brasileiro.",
    icon: Link,
    animation: "rotateIn"
  },
  {
    title: "Cuidados Importantes",
    description: "Esteja atento a dívidas pendentes, processos judiciais em andamento e problemas de documentação.",
    icon: AlertTriangle,
    animation: "pulse"
  },
  {
    title: "Oportunidades de Lucro",
    description: "Imóveis em leilão podem oferecer descontos de 30% a 50% em relação ao valor de mercado quando bem pesquisados.",
    icon: DollarSign,
    animation: "zoomIn"
  },
  {
    title: "Perguntas Frequentes",
    description: "Consulte nossa seção de dúvidas frequentes para esclarecer pontos importantes sobre o processo de leilão.",
    icon: HelpCircle,
    animation: "slideFromBottom"
  },
  {
    title: "Pronto para Começar!",
    description: "Agora você está equipado com conhecimento para participar de leilões com segurança. Boa sorte em suas aquisições!",
    icon: Award,
    animation: "tada"
  }
];

const AnimatedTutorial: React.FC<AnimatedTutorialProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = tutorialSteps.length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getAnimation = (animation: string) => {
    switch(animation) {
      case 'bounceIn':
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: [0.8, 1.1, 1], opacity: 1 },
          transition: { duration: 0.7 }
        };
      case 'slideFromRight':
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          transition: { duration: 0.5 }
        };
      case 'fadeInUp':
        return {
          initial: { y: 30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.5 }
        };
      case 'rotateIn':
        return {
          initial: { rotate: 180, scale: 0.7, opacity: 0 },
          animate: { rotate: 0, scale: 1, opacity: 1 },
          transition: { duration: 0.7 }
        };
      case 'pulse':
        return {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: [0.9, 1.05, 1], opacity: 1 },
          transition: { duration: 0.7, times: [0, 0.7, 1] }
        };
      case 'zoomIn':
        return {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.5 }
        };
      case 'slideFromBottom':
        return {
          initial: { y: 50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.5 }
        };
      case 'tada':
        return {
          initial: { scale: 0.9, opacity: 0 },
          animate: { 
            scale: [0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1], 
            rotate: [0, -3, 3, -3, 3, -3, 0],
            opacity: 1 
          },
          transition: { duration: 1.2 }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 }
        };
    }
  };

  const currentTutorial = tutorialSteps[currentStep];
  const Icon = currentTutorial.icon;
  const animation = getAnimation(currentTutorial.animation);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-gradient-to-br from-white to-ms-gray-light/30">
        <div className="relative h-full py-6 px-8">
          {/* Close button */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 z-10 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
          
          {/* Tutorial content */}
          <div className="flex flex-col items-center justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  {...animation}
                >
                  <div className="p-4 rounded-full bg-ms-blue/10 text-ms-blue">
                    <Icon className="h-12 w-12" />
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-xl font-semibold mb-4 text-ms-blue-dark"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {currentTutorial.title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {currentTutorial.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 my-4">
              {tutorialSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full ${index === currentStep ? 'w-6 bg-ms-blue' : 'w-2 bg-ms-blue/30'}`}
                  initial={false}
                  animate={index === currentStep ? { width: 24 } : { width: 8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setCurrentStep(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between w-full mt-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>
              
              <Button
                onClick={nextStep}
                className="flex items-center gap-1 bg-ms-blue hover:bg-ms-blue-dark"
              >
                {currentStep < totalSteps - 1 ? 'Próximo' : 'Finalizar'}
                {currentStep < totalSteps - 1 ? <ChevronRight className="h-4 w-4" /> : <CheckSquare className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimatedTutorial;
