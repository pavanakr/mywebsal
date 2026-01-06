import { ShoppingCart, Package, CreditCard, BarChart, Users, Truck } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const EcommercePlatform = () => {
  return (
    <SubIndustryDetailPage
      icon={ShoppingCart}
      color="from-purple-500 to-purple-600"
      parentIndustry="Retail & E-commerce"
      parentHref="/industries/retail-ecommerce"
      name="E-commerce Platform"
      tagline="Custom E-commerce Platform Development"
      description="Build high-performance e-commerce platforms with advanced product management, seamless checkout, and powerful marketing tools."
      stats={[
        { value: "$500M+", label: "GMV Processed" },
        { value: "10M+", label: "Products Listed" },
        { value: "40%", label: "Conversion Boost" },
        { value: "99.9%", label: "Uptime" },
      ]}
      features={[
        {
          title: "Product Catalog",
          description: "Advanced product management with variants, categories, and rich media support.",
          icon: Package,
        },
        {
          title: "Checkout Optimization",
          description: "One-click checkout, multiple payment gateways, and cart abandonment recovery.",
          icon: CreditCard,
        },
        {
          title: "Inventory Management",
          description: "Real-time stock tracking across warehouses with automated reorder alerts.",
          icon: ShoppingCart,
        },
        {
          title: "Order Fulfillment",
          description: "Multi-carrier shipping integration with real-time tracking and returns management.",
          icon: Truck,
        },
        {
          title: "Customer Management",
          description: "CRM integration with customer segments, loyalty programs, and personalization.",
          icon: Users,
        },
        {
          title: "Analytics & Reporting",
          description: "Sales analytics, customer insights, and marketing performance dashboards.",
          icon: BarChart,
        },
      ]}
      useCases={[
        {
          title: "D2C Brands",
          description: "Direct-to-consumer e-commerce with brand storytelling and subscription options.",
        },
        {
          title: "Multi-vendor Marketplaces",
          description: "Build platforms like Amazon or Etsy with vendor management.",
        },
        {
          title: "B2B E-commerce",
          description: "Wholesale platforms with tiered pricing and bulk ordering.",
        },
        {
          title: "Omnichannel Retail",
          description: "Unified commerce across online, mobile, and physical stores.",
        },
        {
          title: "Subscription Commerce",
          description: "Recurring subscription boxes and membership-based shopping.",
        },
        {
          title: "Social Commerce",
          description: "Shopping experiences integrated with social media platforms.",
        },
      ]}
      technologies={[
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "Stripe",
        "AWS",
        "Shopify API",
        "Algolia",
        "Contentful",
        "Klaviyo",
      ]}
      benefits={[
        "Launch faster with pre-built e-commerce modules",
        "Scale to millions of products and transactions",
        "Increase conversions with optimized checkout",
        "Reduce cart abandonment with smart recovery",
        "Personalize shopping with AI recommendations",
        "Integrate with existing ERP and fulfillment",
        "Support global expansion with multi-currency",
        "Improve SEO with performance optimization",
      ]}
    />
  );
};

export default EcommercePlatform;
