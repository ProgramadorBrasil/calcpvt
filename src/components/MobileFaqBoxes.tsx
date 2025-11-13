
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

const MobileFaqBoxes = () => {
  return (
    <div className="w-full mt-8 mb-20">
      <h3 className="text-center text-xl font-semibold text-ms-blue mb-4">Perguntas Frequentes</h3>
      
      <Card className="bg-white/80 backdrop-blur-sm shadow-md">
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="flex items-center text-ms-blue">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileFaqBoxes;
