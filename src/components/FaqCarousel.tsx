
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Comparison FAQ items for 1st and 2nd auctions
const faqItems = [
  {
    question: "O que é 1ª praça em leilões judiciais?",
    answer: "É a primeira fase do leilão judicial onde o lance mínimo deve ser igual ou superior ao valor da avaliação do imóvel.",
    category: "leilão"
  },
  {
    question: "O que é 2ª praça em leilões judiciais?",
    answer: "É a segunda fase do leilão, realizada quando não há arrematantes na 1ª praça. Nessa etapa, o imóvel pode ser arrematado por valores inferiores à avaliação, geralmente a partir de 50% a 60% do valor avaliado.",
    category: "leilão"
  },
  {
    question: "Quais as principais diferenças entre 1ª e 2ª praça?",
    answer: "A principal diferença está no valor mínimo aceito: na 1ª praça é o valor integral da avaliação, enquanto na 2ª praça pode ser um valor reduzido. A 2ª praça só ocorre se não houver arrematantes na primeira.",
    category: "leilão"
  },
  {
    question: "Quando vale a pena esperar pela 2ª praça?",
    answer: "Vale a pena esperar pela 2ª praça quando você busca um desconto significativo. Porém, há maior concorrência de investidores nessa fase justamente pelo preço mais atrativo.",
    category: "investimento"
  },
  {
    question: "Quais riscos existem na 1ª praça?",
    answer: "Os principais riscos incluem pagar o valor integral da avaliação e possibilidade de remição da dívida pelo executado até a assinatura do auto de arrematação.",
    category: "riscos"
  },
  {
    question: "Quais riscos existem na 2ª praça?",
    answer: "Os riscos incluem maior concorrência, possibilidade de ações anulatórias e necessidade de pesquisa mais aprofundada, já que o desconto pode refletir problemas ocultos no imóvel.",
    category: "riscos"
  },
  {
    question: "É possível financiar imóveis em 1ª ou 2ª praça?",
    answer: "Sim, é possível financiar em ambos os casos, mas o processo é mais complexo que uma compra tradicional. Na 2ª praça, o banco pode exigir avaliação própria devido ao valor reduzido.",
    category: "financiamento"
  },
  {
    question: "Qual o prazo entre 1ª e 2ª praça?",
    answer: "Geralmente há um intervalo de 5 a 20 dias entre a 1ª e a 2ª praça, conforme definido no edital do leilão.",
    category: "prazos"
  }
];

const FaqCarousel = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap() + 1);
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Card className="microsoft-card overflow-visible shadow-lg border border-ms-blue/20">
      <CardContent className="p-0">
        <div className="px-4 py-3 bg-gradient-to-r from-ms-blue to-ms-blue-light text-white">
          <h3 className="text-lg font-semibold">Dúvidas Frequentes</h3>
          <p className="text-sm opacity-90">Deslize para conhecer as principais dúvidas</p>
        </div>
        
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4">
            {faqItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4">
                <div className="p-1">
                  <Card className="border border-ms-blue/20 microsoft-led overflow-hidden h-full">
                    <div 
                      className="p-4 cursor-pointer flex justify-between items-start"
                      onClick={() => toggleItem(index)}
                    >
                      <h4 className="font-medium text-ms-blue">{item.question}</h4>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        {openItem === index ? (
                          <ChevronUp className="h-4 w-4 text-ms-blue" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-ms-blue" />
                        )}
                      </Button>
                    </div>
                    
                    {openItem === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-sm text-gray-700">{item.answer}</p>
                        <div className="mt-3 flex justify-end">
                          <Badge variant="outline" className="bg-ms-blue/10 text-ms-blue">
                            {item.category}
                          </Badge>
                        </div>
                      </motion.div>
                    )}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 py-2">
            <CarouselPrevious className="static transform-none mx-1" />
            <span className="text-sm text-ms-blue">{current} / {faqItems.length}</span>
            <CarouselNext className="static transform-none mx-1" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default FaqCarousel;
