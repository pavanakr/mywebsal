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
import ApplicationModernization from "./pages/services/ApplicationModernization";
import BigDataAnalytics from "./pages/services/BigDataAnalytics";
import StaffAugmentation from "./pages/services/StaffAugmentation";
import OnDemandSolutions from "./pages/services/OnDemandSolutions";
import AIDevelopment from "./pages/services/AIDevelopment";
import AIOps from "./pages/services/AIOps";
import MachineLearning from "./pages/services/MachineLearning";
import GenerativeAI from "./pages/services/GenerativeAI";
import AIChatbot from "./pages/services/AIChatbot";
import DeepLearning from "./pages/services/DeepLearning";
import LLMDevelopment from "./pages/services/LLMDevelopment";
// Industry pages
import Healthcare from "./pages/industries/Healthcare";
import Fintech from "./pages/industries/Fintech";
import Ecommerce from "./pages/industries/Ecommerce";
import Logistics from "./pages/industries/Logistics";
import RealEstate from "./pages/industries/RealEstate";
import Education from "./pages/industries/Education";
import TravelHospitality from "./pages/industries/TravelHospitality";
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
// About sub-pages
import CompanyProfile from "./pages/about/CompanyProfile";
import Infrastructure from "./pages/about/Infrastructure";
import Leadership from "./pages/about/Leadership";
import AwardsRecognition from "./pages/about/AwardsRecognition";
import CareersAtSofturecs from "./pages/about/CareersAtSofturecs";
import Partnerships from "./pages/about/Partnerships";
import Testimonials from "./pages/about/Testimonials";
import Alliances from "./pages/about/Alliances";

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
            {/* About sub-pages */}
            <Route path="/about/company-profile" element={<CompanyProfile />} />
            <Route path="/about/infrastructure" element={<Infrastructure />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/awards-recognition" element={<AwardsRecognition />} />
            <Route path="/about/careers" element={<CareersAtSofturecs />} />
            <Route path="/about/partnerships" element={<Partnerships />} />
            <Route path="/about/testimonials" element={<Testimonials />} />
            <Route path="/about/alliances" element={<Alliances />} />
            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/cloud-devops" element={<CloudDevOps />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/saas" element={<SaaSDevelopment />} />
            <Route path="/services/application-modernization" element={<ApplicationModernization />} />
            <Route path="/services/big-data" element={<BigDataAnalytics />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/services/on-demand" element={<OnDemandSolutions />} />
            <Route path="/services/ai-development" element={<AIDevelopment />} />
            <Route path="/services/aiops" element={<AIOps />} />
            <Route path="/services/machine-learning" element={<MachineLearning />} />
            <Route path="/services/generative-ai" element={<GenerativeAI />} />
            <Route path="/services/ai-chatbot" element={<AIChatbot />} />
            <Route path="/services/deep-learning" element={<DeepLearning />} />
            <Route path="/services/llm-development" element={<LLMDevelopment />} />
            {/* Industries */}
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/fintech" element={<Fintech />} />
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
            {/* Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/healthpulse" element={<HealthPulse />} />
            <Route path="/portfolio/finvault" element={<FinVault />} />
            <Route path="/portfolio/logitrack" element={<LogiTrack />} />
            <Route path="/portfolio/shopsphere" element={<ShopSphere />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/future-of-ai-enterprise" element={<FutureOfAI />} />
            <Route path="/blog/microservices-architecture" element={<MicroservicesArchitecture />} />
            <Route path="/blog/cloud-migration-2025" element={<CloudMigration />} />
            <Route path="/blog/saas-security" element={<SaasSecurity />} />
            <Route path="/blog/devops-culture" element={<DevOpsCulture />} />
            {/* Other */}
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
