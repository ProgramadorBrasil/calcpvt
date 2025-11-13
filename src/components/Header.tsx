
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, FileCheck, Link, BookOpen } from "lucide-react";

const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  return (
    <header className="w-full financial-gradient text-white">
      <div className="container px-4 py-6 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Calculadora de Leilão de Imóveis</h1>
        <p className="text-sm md:text-base opacity-90 mb-6">
          Estime custos, verifique requisitos e encontre as melhores oportunidades de investimento
        </p>

        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4 bg-white/20 text-white">
            <TabsTrigger value="calculadora" className="data-[state=active]:bg-white/10">
              <Calculator className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Calculadora</span>
            </TabsTrigger>
            <TabsTrigger value="checklist" className="data-[state=active]:bg-white/10">
              <FileCheck className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Checklist</span>
            </TabsTrigger>
            <TabsTrigger value="links" className="data-[state=active]:bg-white/10">
              <Link className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Links Úteis</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-white/10">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Dúvidas</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default Header;
