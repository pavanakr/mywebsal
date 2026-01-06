import { ShoppingCart } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const EcommerceDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={ShoppingCart}
      color="from-orange-500 to-orange-600"
      title="E-Commerce Development"
      tagline="Build online stores that convert visitors into loyal customers."
      description="We create powerful e-commerce experiences that drive sales. From custom platforms to Shopify solutions, we build stores that scale with your business."
      benefits={[
        "Custom e-commerce platforms",
        "Shopify development",
        "Payment integration",
        "Inventory management",
        "Multi-vendor marketplaces",
        "Mobile commerce",
        "SEO optimization",
        "Analytics integration",
      ]}
      process={[
        { number: "01", title: "Business Analysis", description: "Understand your products and target market." },
        { number: "02", title: "Platform Selection", description: "Choose the right e-commerce platform." },
        { number: "03", title: "Design & UX", description: "Design conversion-optimized shopping experience." },
        { number: "04", title: "Development", description: "Build and integrate all features." },
        { number: "05", title: "Testing", description: "Payment testing and performance optimization." },
        { number: "06", title: "Launch & Growth", description: "Launch and ongoing optimization." },
      ]}
      technologies={["Shopify", "WooCommerce", "Magento", "Next.js", "React", "Node.js", "Stripe", "PayPal", "Algolia", "Elasticsearch"]}
      caseStudies={[
        { title: "ShopSphere", category: "Fashion", description: "Multi-brand fashion marketplace.", results: ["$50M GMV", "2M customers"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
        { title: "Grocery Platform", category: "Food & Grocery", description: "Online grocery with same-day delivery.", results: ["100K orders/month", "45 min delivery"], image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop", href: "/portfolio/grocery-platform" },
        { title: "B2B Marketplace", category: "B2B", description: "Wholesale marketplace platform.", results: ["10K vendors", "$100M transactions"], image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", href: "/portfolio/b2b-marketplace" },
      ]}
      useCases={["B2C online stores", "B2B marketplaces", "Subscription commerce", "Mobile commerce", "Multi-vendor platforms", "Headless commerce"]}
    />
  );
};

export default EcommerceDevelopment;
