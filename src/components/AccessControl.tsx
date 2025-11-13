
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { checkUserAccess } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Lock, ShieldAlert } from 'lucide-react';

interface AccessControlProps {
  children: React.ReactNode;
}

const AccessControl = ({ children }: AccessControlProps) => {
  const { isAuthenticated } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accessReason, setAccessReason] = useState<string>('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAccess = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }

      try {
        const { hasAccess: access, reason } = await checkUserAccess();
        setHasAccess(access);
        setAccessReason(reason);
      } catch (error) {
        console.error('Error checking access:', error);
        toast({
          variant: "destructive",
          title: "Erro de verificação",
          description: "Não foi possível verificar seu acesso. Tente novamente mais tarde.",
        });
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [isAuthenticated, toast]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ms-blue"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Card className="w-full shadow-lg">
        <CardHeader className="bg-ms-blue text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" /> Acesso Restrito
          </CardTitle>
          <CardDescription className="text-white/80">
            Faça login para acessar este recurso
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-600 mb-4">
            Esta funcionalidade está disponível apenas para usuários cadastrados.
            Para acessar, faça login com sua conta ou cadastre-se gratuitamente.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={() => navigate('/auth')}
            className="w-full sm:w-auto bg-ms-blue hover:bg-ms-blue-dark"
          >
            Fazer Login
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/auth')}
            className="w-full sm:w-auto"
          >
            Criar Conta
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!hasAccess) {
    return (
      <Card className="w-full shadow-lg">
        <CardHeader className="bg-orange-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5" /> Acesso Limitado
          </CardTitle>
          <CardDescription className="text-white/80">
            Entre para o grupo WhatsApp para ter acesso gratuito
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-600 mb-4">
            Para ter acesso gratuito a esta funcionalidade, entre para o nosso grupo de WhatsApp.
            Você também pode assinar nosso plano premium para acesso a todos os recursos.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={() => navigate('/?tab=whatsapp')}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
          >
            Entrar no Grupo WhatsApp
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return <>{children}</>;
};

export default AccessControl;
