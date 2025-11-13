
import React, { useState } from 'react';
import { Calculator, FileCheck, Link as LinkIcon, BookOpen, ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AnimatedIcon = ({ children, isActive }: { children: React.ReactNode, isActive: boolean }) => (
  <motion.div
    className="relative"
    initial={{ scale: 1 }}
    animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function AnimatedSidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleSubMenu = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const menuItems = [
    {
      id: "calculadora",
      title: "Calculadora",
      icon: <Calculator className="h-5 w-5" />,
      subitems: []
    },
    {
      id: "checklist",
      title: "Checklist",
      icon: <FileCheck className="h-5 w-5" />,
      subitems: []
    },
    {
      id: "links",
      title: "Links Úteis",
      icon: <LinkIcon className="h-5 w-5" />,
      subitems: [
        { id: "sites-leilao", title: "Sites de Leilão" },
        { id: "sites-juridicos", title: "Sites Jurídicos" },
        { id: "maiores-plataformas", title: "Principais Plataformas" }
      ]
    },
    {
      id: "faq",
      title: "Dúvidas Frequentes",
      icon: <BookOpen className="h-5 w-5" />,
      subitems: []
    }
  ];

  // For mobile, use a drawer component
  const MobileSidebar = () => (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-ms-blue text-white p-2 rounded-r-md shadow-lg">
            <Calculator className="h-6 w-6" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-ms-blue-dark mb-4">Menu de Navegação</h3>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.id} className="space-y-1">
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-md ${
                      activeTab === item.id ? 'bg-ms-blue/10 text-ms-blue-dark' : 'hover:bg-ms-blue/5'
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (item.subitems.length > 0) {
                        toggleSubMenu(item.id);
                      }
                    }}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {item.subitems.length > 0 && (
                      <ChevronDown 
                        className={`ml-auto h-4 w-4 transition-transform ${openItem === item.id ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                  
                  {item.subitems.length > 0 && openItem === item.id && (
                    <div className="ml-8 space-y-1 border-l-2 border-ms-blue/20 pl-4">
                      {item.subitems.map((subitem) => (
                        <button
                          key={subitem.id}
                          className={`w-full text-left p-2 rounded-md text-sm ${
                            activeTab === subitem.id ? 'text-ms-blue font-medium' : 'text-gray-600'
                          }`}
                          onClick={() => setActiveTab(subitem.id)}
                        >
                          {subitem.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <MobileSidebar />
      
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <SidebarProvider defaultOpen={false}>
          <Sidebar variant="floating" className="border-r border-ms-blue/20 glass-effect">
            <SidebarHeader className="py-4 bg-ms-blue/10 backdrop-blur-md">
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-center text-ms-blue-dark">Menu</h3>
                </motion.div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id} className="sidebar-menu-item">
                    <SidebarMenuButton
                      isActive={activeTab === item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        if (item.subitems.length > 0) {
                          toggleSubMenu(item.id);
                        }
                      }}
                      className={`hover:bg-ms-blue/30 transition-all duration-200 microsoft-led ${activeTab === item.id ? 'bg-ms-blue/40 backdrop-blur-sm' : ''}`}
                    >
                      <AnimatedIcon isActive={activeTab === item.id}>
                        {item.icon}
                      </AnimatedIcon>
                      <span>{item.title}</span>
                      {item.subitems.length > 0 && (
                        <ChevronDown 
                          className={`ml-auto h-4 w-4 transition-transform duration-200 ${openItem === item.id ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </SidebarMenuButton>
                    {item.subitems.length > 0 && openItem === item.id && (
                      <SidebarMenuSub>
                        {item.subitems.map((subitem) => (
                          <SidebarMenuSubItem key={subitem.id} className="sidebar-menu-item">
                            <SidebarMenuSubButton
                              onClick={() => {
                                setActiveTab(subitem.id);
                              }}
                              isActive={activeTab === subitem.id}
                              className={`microsoft-led ${activeTab === subitem.id ? 'bg-ms-blue/40' : ''}`}
                            >
                              <span>{subitem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <div className="absolute right-2 top-2 md:hidden text-ms-blue-dark">
              <SidebarTrigger />
            </div>
          </Sidebar>
        </SidebarProvider>
      </div>
    </>
  );
}
