
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
      {/* Horizontal FAQ line */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] h-16 z-20">
        <div className="h-full bg-background/15 backdrop-blur-md border border-ms-blue/20 rounded-full shadow-lg flex items-center justify-center px-6 space-x-8">
          {faqItems.map((item, index) => (
            <FaqBoxHorizontal key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqBoxHorizontal = ({ item, index }: { 
  item: { id: number, question: string, answer: string }, 
  index: number
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20 
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
    >
      <div 
        className="flex items-center justify-center w-12 h-12 rounded-full bg-ms-blue/20 cursor-pointer transition-all hover:bg-ms-blue/30 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HelpCircle className="h-6 w-6 text-ms-blue" />
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-72 p-4 bg-background/95 backdrop-blur-md border border-ms-blue/20 rounded-lg shadow-xl z-30"
        >
          <h4 className="font-medium text-ms-blue-dark text-sm mb-2">{item.question}</h4>
          <p className="text-xs text-muted-foreground">{item.answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SideFaqBoxes;
