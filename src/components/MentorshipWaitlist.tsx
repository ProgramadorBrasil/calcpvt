
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { addToMentorshipWaitlist } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const MentorshipWaitlist = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use the helper function from the client
      const result = await addToMentorshipWaitlist(email, phone);
      
      if (result.success) {
        toast({
          title: "Inscrição realizada!",
          description: result.message || "Você será notificado quando as mentorias estiverem disponíveis.",
        });
        
        // Clear form on success
        setEmail('');
        setPhone('');
      } else {
        toast({
          variant: "destructive",
          title: "Erro na inscrição",
          description: result.message || "Não foi possível completar sua inscrição.",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro na inscrição",
        description: error.message || "Não foi possível completar sua inscrição.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full shadow-lg border-ms-blue/20">
      <CardHeader className="bg-gradient-to-r from-ms-blue to-ms-blue-dark text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold">Programa de Mentoria</CardTitle>
        <CardDescription className="text-white/80">
          Inscreva-se para ser notificado sobre o lançamento
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="waitlist-email">Email</Label>
            <Input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="waitlist-phone">WhatsApp</Label>
            <Input
              id="waitlist-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit}
          className="w-full bg-ms-blue hover:bg-ms-blue-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Inscrevendo..." : "Quero ser notificado"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MentorshipWaitlist;
