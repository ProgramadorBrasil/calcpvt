
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { supabase, updateWhatsAppGroupStatus } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const WhatsAppGroupInvite = () => {
  const [hasJoined, setHasJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  
  // WhatsApp group invite link - updated with the provided link
  const whatsAppGroupLink = "https://chat.whatsapp.com/FBr4wx5IKXe1vm0KTIeu2G";
  
  useEffect(() => {
    if (user) {
      checkUserJoinedStatus();
    }
  }, [user]);
  
  const checkUserJoinedStatus = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('whatsapp_group_joined')
        .eq('id', user.id)
        .single();
        
      if (error) throw error;
      
      if (data) {
        setHasJoined(data.whatsapp_group_joined);
      }
    } catch (error) {
      console.error("Error checking WhatsApp join status:", error);
    }
  };
  
  const handleJoinGroup = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Faça login primeiro",
        description: "Você precisa estar logado para entrar no grupo.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Open WhatsApp group link in a new tab
      window.open(whatsAppGroupLink, '_blank');
      
      // Update user profile to indicate they've joined
      const result = await updateWhatsAppGroupStatus(true);
      
      if (result.success) {
        setHasJoined(true);
        toast({
          title: "Convite enviado!",
          description: "Você foi direcionado para o grupo do WhatsApp e ganhou acesso ao período de teste.",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao entrar no grupo",
        description: error.message || "Não foi possível processar sua solicitação.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full shadow-lg border-green-500/20">
      <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold">Grupo no WhatsApp</CardTitle>
        <CardDescription className="text-white/80">
          Entre no grupo exclusivo para compradores de leilões
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-sm text-gray-600 mb-2">
          Compartilhe experiências, receba dicas exclusivas e conecte-se com outros investidores de leilões de imóveis.
        </p>
        <p className="text-sm font-medium text-green-600 mb-2">
          👉 Ao entrar no grupo, você ganha acesso gratuito ao período de teste da calculadora!
        </p>
        <p className="text-sm font-medium text-green-600 bg-green-50 p-2 rounded-md">
          🎁 <strong>BÔNUS:</strong> Você pode ser sorteado para uma mentoria gratuita de 30 minutos com nossos especialistas!
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleJoinGroup}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          disabled={isLoading || hasJoined}
        >
          {isLoading ? "Processando..." : hasJoined ? "Você já está no grupo" : "Entrar no grupo"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WhatsAppGroupInvite;
