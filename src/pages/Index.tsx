import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustedBrands } from '@/components/home/TrustedBrands';
import { ServicesSection } from '@/components/home/ServicesSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TechStackSection } from '@/components/home/TechStackSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBrands />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <TechStackSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
