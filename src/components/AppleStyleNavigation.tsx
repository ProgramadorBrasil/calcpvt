
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Calculator, FileCheck, Link as LinkIcon, BookOpen, Home, Calendar, BarChart4, Building, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppleStyleNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AppleStyleNavigation({ activeTab, setActiveTab }: AppleStyleNavigationProps) {
  const menuItems = [
    {
      id: "calculadora",
      title: "Calculadora",
      icon: <Calculator className="h-5 w-5" />,
      description: "Estime custos e retornos financeiros",
      subitems: []
    },
    {
      id: "checklist",
      title: "Checklist",
      icon: <FileCheck className="h-5 w-5" />,
      description: "Verifique os requisitos necessários",
      subitems: []
    },
    {
      id: "links",
      title: "Links Úteis",
      icon: <LinkIcon className="h-5 w-5" />,
      description: "Encontre recursos importantes",
      subitems: [
        { 
          id: "sites-leilao", 
          title: "Sites de Leilão",
          icon: <Building className="h-4 w-4" />,
        },
        { 
          id: "sites-juridicos", 
          title: "Sites Jurídicos",
          icon: <BarChart4 className="h-4 w-4" />,
        },
        { 
          id: "maiores-plataformas", 
          title: "Principais Plataformas",
          icon: <Calendar className="h-4 w-4" />,
        }
      ]
    },
    {
      id: "faq",
      title: "Dúvidas",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Respostas para perguntas frequentes",
      subitems: []
    }
  ];

  const handleItemClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="w-full py-2 backdrop-blur-md bg-white/80 border-b border-ms-blue/10 sticky top-0 z-20">
      <div className="container mx-auto">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                {item.subitems.length > 0 ? (
                  <>
                    <NavigationMenuTrigger 
                      onClick={() => handleItemClick(item.id)}
                      className={cn(
                        "text-ms-blue hover:text-ms-blue-dark transition-colors",
                        activeTab === item.id ? "font-medium" : ""
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subitems.map((subitem) => (
                          <li key={subitem.id} className="row-span-1">
                            <NavigationMenuLink asChild>
                              <a
                                onClick={() => handleItemClick(subitem.id)}
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-ms-blue/5 to-ms-blue/10 p-6 no-underline outline-none focus:shadow-md hover:from-ms-blue/10 hover:to-ms-blue/20"
                              >
                                <div className="mb-2 mt-4 text-sm font-medium text-ms-blue flex items-center gap-2">
                                  {subitem.icon}
                                  {subitem.title}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <NavigationMenuLink asChild>
                        <a
                          onClick={() => handleItemClick(item.id)}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-ms-blue/10 hover:text-ms-blue-dark focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            activeTab === item.id ? "bg-ms-blue/10 text-ms-blue-dark" : "text-ms-blue"
                          )}
                        >
                          <motion.div
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.icon}
                            {item.title}
                          </motion.div>
                        </a>
                      </NavigationMenuLink>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 frosted-glass">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-ms-blue-dark">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-ms-blue opacity-80">{item.icon}</div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
