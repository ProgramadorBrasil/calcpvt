
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import AuctionVerifierPage from "./pages/AuctionVerifierPage";
import Curso from "./pages/Curso";
import LessonViewer from "./pages/LessonViewer";
import FAQ from "./pages/FAQ";
import Checklist from "./pages/Checklist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/verificador-leiloes" element={<AuctionVerifierPage />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/curso/modulo/:moduleId/aula/:lessonId" element={<LessonViewer />} />
            <Route path="/curso/faq" element={<FAQ />} />
            <Route path="/curso/checklist" element={<Checklist />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
