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
import Industries from "./pages/Industries";
import Healthcare from "./pages/industries/Healthcare";
import Fintech from "./pages/industries/Fintech";
import Ecommerce from "./pages/industries/Ecommerce";
import Logistics from "./pages/industries/Logistics";
import RealEstate from "./pages/industries/RealEstate";
import Education from "./pages/industries/Education";
import TravelHospitality from "./pages/industries/TravelHospitality";
import LogisticsTransportation from "./pages/industries/LogisticsTransportation";
import RealEstateConstruction from "./pages/industries/RealEstateConstruction";
import RetailEcommerce from "./pages/industries/RetailEcommerce";
import BankingFinance from "./pages/industries/BankingFinance";
import MediaEntertainment from "./pages/industries/MediaEntertainment";
// Sub-industry solution pages
import OnDemandLogistics from "./pages/industries/solutions/OnDemandLogistics";
import TransportationAutomation from "./pages/industries/solutions/TransportationAutomation";
import ShippingManagement from "./pages/industries/solutions/ShippingManagement";
import TelemedicinePlatform from "./pages/industries/solutions/TelemedicinePlatform";
import DigitalBanking from "./pages/industries/solutions/DigitalBanking";
import EcommercePlatform from "./pages/industries/solutions/EcommercePlatform";
import VirtualLearning from "./pages/industries/solutions/VirtualLearning";
import StudentManagement from "./pages/industries/solutions/StudentManagement";
import StreamingPlatform from "./pages/industries/solutions/StreamingPlatform";
import ContentManagement from "./pages/industries/solutions/ContentManagement";
import LiveStreaming from "./pages/industries/solutions/LiveStreaming";
import PropertyManagement from "./pages/industries/solutions/PropertyManagement";
import ConstructionManagement from "./pages/industries/solutions/ConstructionManagement";
import TravelBooking from "./pages/industries/solutions/TravelBooking";
import HotelManagement from "./pages/industries/solutions/HotelManagement";
import TravelExperience from "./pages/industries/solutions/TravelExperience";
import LMSPlatform from "./pages/industries/solutions/LMSPlatform";
import ElectronicHealthRecords from "./pages/industries/solutions/ElectronicHealthRecords";
import PatientEngagement from "./pages/industries/solutions/PatientEngagement";
import PaymentProcessing from "./pages/industries/solutions/PaymentProcessing";
import FraudDetection from "./pages/industries/solutions/FraudDetection";
import VirtualTour from "./pages/industries/solutions/VirtualTour";
import MarketplaceDevelopment from "./pages/industries/solutions/MarketplaceDevelopment";
import InventoryManagement from "./pages/industries/solutions/InventoryManagement";
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
// Insights pages
import Insights from "./pages/insights/Index";
import InsightsCaseStudies from "./pages/insights/CaseStudies";
import InsightsPortfolio from "./pages/insights/InsightsPortfolio";
import InsightsBlogs from "./pages/insights/Blogs";
import InsightsFAQs from "./pages/insights/FAQs";
import InsightsPressReleases from "./pages/insights/PressReleases";
import CaseStudyDetail from "./pages/insights/CaseStudyDetail";

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
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/fintech" element={<Fintech />} />
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
            <Route path="/industries/logistics-transportation" element={<LogisticsTransportation />} />
            <Route path="/industries/real-estate-construction" element={<RealEstateConstruction />} />
            <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
            <Route path="/industries/banking-finance" element={<BankingFinance />} />
            <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
            {/* Sub-industry solutions */}
            <Route path="/industries/solutions/on-demand-logistics" element={<OnDemandLogistics />} />
            <Route path="/industries/solutions/transportation-automation" element={<TransportationAutomation />} />
            <Route path="/industries/solutions/shipping-management" element={<ShippingManagement />} />
            <Route path="/industries/solutions/telemedicine-platform" element={<TelemedicinePlatform />} />
            <Route path="/industries/solutions/digital-banking" element={<DigitalBanking />} />
            <Route path="/industries/solutions/ecommerce-platform" element={<EcommercePlatform />} />
            <Route path="/industries/solutions/virtual-learning" element={<VirtualLearning />} />
            <Route path="/industries/solutions/student-management" element={<StudentManagement />} />
            <Route path="/industries/solutions/streaming-platform" element={<StreamingPlatform />} />
            <Route path="/industries/solutions/content-management" element={<ContentManagement />} />
            <Route path="/industries/solutions/live-streaming" element={<LiveStreaming />} />
            <Route path="/industries/solutions/property-management" element={<PropertyManagement />} />
            <Route path="/industries/solutions/construction-management" element={<ConstructionManagement />} />
            <Route path="/industries/solutions/travel-booking" element={<TravelBooking />} />
            <Route path="/industries/solutions/hotel-management" element={<HotelManagement />} />
            <Route path="/industries/solutions/travel-experience" element={<TravelExperience />} />
            <Route path="/industries/solutions/lms-platform" element={<LMSPlatform />} />
            <Route path="/industries/solutions/electronic-health-records" element={<ElectronicHealthRecords />} />
            <Route path="/industries/solutions/patient-engagement" element={<PatientEngagement />} />
            <Route path="/industries/solutions/payment-processing" element={<PaymentProcessing />} />
            <Route path="/industries/solutions/fraud-detection" element={<FraudDetection />} />
            <Route path="/industries/solutions/virtual-tour" element={<VirtualTour />} />
            <Route path="/industries/solutions/marketplace-development" element={<MarketplaceDevelopment />} />
            <Route path="/industries/solutions/inventory-management" element={<InventoryManagement />} />
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
            {/* Insights */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/case-studies" element={<InsightsCaseStudies />} />
            <Route path="/insights/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/insights/portfolio" element={<InsightsPortfolio />} />
            <Route path="/insights/blogs" element={<InsightsBlogs />} />
            <Route path="/insights/faqs" element={<InsightsFAQs />} />
            <Route path="/insights/press-releases" element={<InsightsPressReleases />} />
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
