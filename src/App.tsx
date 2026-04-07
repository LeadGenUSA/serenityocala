import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import EMDRTherapy from "./pages/resources/EMDRTherapy";
import CBTTherapy from "./pages/resources/CBTTherapy";
import EFTTherapy from "./pages/resources/EFTTherapy";
import DifferentialGeneExpression from "./pages/resources/DifferentialGeneExpression";
import About from "./pages/About";
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
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/emdr-therapy" element={<EMDRTherapy />} />
          <Route path="/resources/cbt" element={<CBTTherapy />} />
          <Route path="/resources/eft" element={<EFTTherapy />} />
          <Route path="/resources/differential-gene-expression" element={<DifferentialGeneExpression />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
