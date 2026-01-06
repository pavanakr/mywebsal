import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Service pages
import CustomSoftware from "./pages/services/CustomSoftware";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import CloudDevOps from "./pages/services/CloudDevOps";
import AIAutomation from "./pages/services/AIAutomation";
import SaaSDevelopment from "./pages/services/SaaSDevelopment";
// Industry pages
import Healthcare from "./pages/industries/Healthcare";
import Fintech from "./pages/industries/Fintech";
import Ecommerce from "./pages/industries/Ecommerce";
import Logistics from "./pages/industries/Logistics";
import RealEstate from "./pages/industries/RealEstate";
import Education from "./pages/industries/Education";
// Case study pages
import HealthPulse from "./pages/portfolio/HealthPulse";
import FinVault from "./pages/portfolio/FinVault";
import LogiTrack from "./pages/portfolio/LogiTrack";
import ShopSphere from "./pages/portfolio/ShopSphere";
// Blog pages
import FutureOfAI from "./pages/blog/FutureOfAI";
import MicroservicesArchitecture from "./pages/blog/MicroservicesArchitecture";
import CloudMigration from "./pages/blog/CloudMigration";
import SaasSecurity from "./pages/blog/SaasSecurity";
import DevOpsCulture from "./pages/blog/DevOpsCulture";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/fintech" element={<Fintech />} />
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/healthpulse" element={<HealthPulse />} />
            <Route path="/portfolio/finvault" element={<FinVault />} />
            <Route path="/portfolio/logitrack" element={<LogiTrack />} />
            <Route path="/portfolio/shopsphere" element={<ShopSphere />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/future-of-ai-enterprise" element={<FutureOfAI />} />
            <Route path="/blog/microservices-architecture" element={<MicroservicesArchitecture />} />
            <Route path="/blog/cloud-migration-2025" element={<CloudMigration />} />
            <Route path="/blog/saas-security" element={<SaasSecurity />} />
            <Route path="/blog/devops-culture" element={<DevOpsCulture />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
