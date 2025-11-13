
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqQuestions = [
  { 
    question: "O que são leilões judiciais?", 
    answer: "São vendas públicas de bens determinadas pela justiça para quitar dívidas."
  },
  { 
    question: "Preciso de advogado para participar?", 
    answer: "Não é obrigatório, mas é recomendável para orientação jurídica."
  },
  { 
    question: "Quais documentos são necessários?", 
    answer: "CPF/CNPJ, RG e comprovante de endereço para cadastro nas plataformas."
  },
  { 
    question: "Como funciona o pagamento?", 
    answer: "Geralmente à vista ou parcelado conforme edital do leilão."
  },
  { 
    question: "Existem riscos ao comprar em leilão?", 
    answer: "Sim, como eventuais dívidas e ocupação do imóvel. Sempre verifique o edital."
  },
  { 
    question: "Posso visitar o imóvel antes?", 
    answer: "Dependendo do caso. Consulte o leiloeiro sobre a possibilidade."
  }
];

export default function RotatingFaqBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqQuestions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-ms-blue via-ms-blue-dark to-ms-blue text-white overflow-hidden">
      <div className="container mx-auto py-3 px-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="font-bold text-ms-blue-light/90 text-sm md:text-base">FAQ:</div>
            <div className="text-center flex-1 mx-4">
              <div className="font-semibold text-sm md:text-base">{faqQuestions[currentIndex].question}</div>
              <div className="text-xs md:text-sm text-white/90">{faqQuestions[currentIndex].answer}</div>
            </div>
            <div className="text-xs text-white/80 hidden md:block">{`${currentIndex + 1}/${faqQuestions.length}`}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
