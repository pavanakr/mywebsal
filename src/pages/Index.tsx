import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { OrganizationSchema, LocalBusinessSchema, AggregateRatingSchema, HreflangTags } from '@/components/SchemaMarkup';
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
      <SEO
        title="AI-Driven Software Solutions"
        description="Softurecs AI Labs - Enterprise AI & software development company in Hyderabad. Custom apps, cloud solutions & digital transformation for global businesses."
        keywords="AI software company, software development India, custom software development, digital transformation, mobile app development"
      />
      <OrganizationSchema />
      <LocalBusinessSchema city="Hyderabad" region="Telangana" country="India" />
      <AggregateRatingSchema />
      <HreflangTags currentPath="/" />
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
