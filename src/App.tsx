import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomSoftware from "./pages/services/CustomSoftware";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import CloudDevOps from "./pages/services/CloudDevOps";
import AIAutomation from "./pages/services/AIAutomation";
import SaaSDevelopment from "./pages/services/SaaSDevelopment";

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
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/saas" element={<SaaSDevelopment />} />
          <Route path="/industries/*" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
