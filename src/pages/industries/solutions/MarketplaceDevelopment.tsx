import { ShoppingCart, Store, Users, CreditCard, BarChart, Globe } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const MarketplaceDevelopment = () => {
  return (
    <SubIndustryDetailPage
      icon={Store}
      color="from-purple-500 to-violet-600"
      parentIndustry="Retail & E-commerce"
      parentHref="/industries/retail-ecommerce"
      name="Marketplace Development"
      tagline="Multi-Vendor Commerce Platforms"
      description="We build Amazon and Etsy-style marketplace platforms that connect buyers with multiple sellers. Our solutions handle vendor onboarding, commission management, split payments, and complex logistics orchestration."
      stats={[
        { value: "$2B+", label: "GMV Processed" },
        { value: "50K+", label: "Active Sellers" },
        { value: "10M+", label: "Products Listed" },
        { value: "99.9%", label: "Uptime" },
      ]}
      features={[
        {
          title: "Vendor Management",
          description: "Self-service seller onboarding, verification, and store management.",
          icon: Store,
        },
        {
          title: "Split Payments",
          description: "Automated commission splits, vendor payouts, and escrow handling.",
          icon: CreditCard,
        },
        {
          title: "Product Catalog",
          description: "Multi-vendor catalog with variants, bulk upload, and inventory sync.",
          icon: ShoppingCart,
        },
        {
          title: "Buyer Experience",
          description: "Unified cart, checkout, and order tracking across vendors.",
          icon: Users,
        },
        {
          title: "Analytics Dashboard",
          description: "GMV tracking, seller performance, and marketplace health metrics.",
          icon: BarChart,
        },
        {
          title: "Global Commerce",
          description: "Multi-currency, multi-language, and international shipping support.",
          icon: Globe,
        },
      ]}
      benefits={[
        "Scale product selection without inventory risk",
        "Generate revenue through commissions and fees",
        "Build network effects with more sellers and buyers",
        "Reduce operational complexity with automation",
        "Enable niche market specialization",
        "Compete with established marketplaces",
        "Leverage seller acquisition for growth",
        "Create sustainable platform economics",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "Stripe Connect", "Elasticsearch", "Redis", "AWS", "Kubernetes"]}
      useCases={[
        { title: "General Marketplaces", description: "Amazon-style multi-category platforms." },
        { title: "Niche Marketplaces", description: "Specialized vertical platforms (crafts, vintage, etc.)." },
        { title: "B2B Marketplaces", description: "Wholesale and industrial supply platforms." },
        { title: "Service Marketplaces", description: "Freelancer and service provider platforms." },
        { title: "Local Marketplaces", description: "Community and hyperlocal commerce." },
        { title: "Rental Marketplaces", description: "Peer-to-peer rental and sharing platforms." },
      ]}
    />
  );
};

export default MarketplaceDevelopment;