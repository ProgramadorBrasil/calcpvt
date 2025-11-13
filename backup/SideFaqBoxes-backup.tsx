import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: "O que é um leilão judicial?",
    answer: "Um leilão judicial é uma venda pública de bens determinada por um juiz no âmbito de um processo judicial."
  },
  {
    id: 2,
    question: "Como participar de um leilão?",
    answer: "Cadastre-se no site do leiloeiro, analise o edital, faça a vistoria e dê seu lance dentro do prazo."
  },
  {
    id: 3,
    question: "Quais documentos são necessários?",
    answer: "Geralmente RG, CPF, comprovante de residência e, para empresas, contrato social e procuração."
  },
  {
    id: 4,
    question: "Quais são os riscos?",
    answer: "Ocupação irregular, débitos pendentes, problemas na documentação ou recursos judiciais."
  },
  {
    id: 5,
    question: "Como funciona o pagamento?",
    answer: "Geralmente à vista ou parcelado, conforme regras do edital, mais comissão do leiloeiro."
  }
];

const SideFaqBoxes = () => {
  return (
    <div className="hidden lg:block">
      {/* Left FAQ boxes */}
      <div className="fixed left-6 top-1/3 w-64 space-y-4 z-20">
        {faqItems.slice(0, 2).map((item, index) => (
          <FaqBox key={item.id} item={item} index={index} side="left" />
        ))}
      </div>
      
      {/* Right FAQ boxes */}
      <div className="fixed right-6 top-1/3 w-64 space-y-4 z-20">
        {faqItems.slice(2, 5).map((item, index) => (
          <FaqBox key={item.id} item={item} index={index} side="right" />
        ))}
      </div>
    </div>
  );
};

const FaqBox = ({ item, index, side }: { 
  item: { id: number, question: string, answer: string }, 
  index: number, 
  side: 'left' | 'right' 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
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
    >
      <Card 
        className="overflow-hidden backdrop-blur-md bg-white/40 border border-ms-blue/20 shadow-lg cursor-pointer transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-ms-blue shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-ms-blue-dark text-sm mb-1">{item.question}</h4>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0
                }}
                className="overflow-hidden text-xs text-gray-600"
              >
                {item.answer}
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SideFaqBoxes;