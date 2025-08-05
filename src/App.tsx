import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import Onboarding from "./pages/Onboarding";
import BlogDetail from "./pages/BlogDetail";
import Terms from "./pages/Terms";
import SocialInsuranceCalculation from "./pages/SocialInsuranceCalculation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help" element={<Help />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/social-insurance-calculation" element={<SocialInsuranceCalculation />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;