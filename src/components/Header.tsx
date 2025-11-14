
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calculator, FileCheck, Link, BookOpen, GraduationCap } from "lucide-react";

const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full financial-gradient text-white">
      <div className="container px-4 py-6 mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl md:text-3xl font-bold">Calculadora de Leilão de Imóveis</h1>
          <Button
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            onClick={() => navigate('/curso')}
          >
            <GraduationCap className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Curso TJPE</span>
            <span className="md:hidden">Curso</span>
          </Button>
        </div>
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
