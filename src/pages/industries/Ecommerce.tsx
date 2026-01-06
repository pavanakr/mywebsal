import { ShoppingCart, Package, CreditCard, BarChart, Users, Truck } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const Ecommerce = () => {
  return (
    <IndustryDetailPage
      icon={ShoppingCart}
      color="from-violet-500 to-violet-600"
      name="E-commerce"
      tagline="Scalable Online Retail Solutions"
      description="We build high-performance e-commerce platforms that drive sales, enhance customer experiences, and scale with your business. From marketplaces to D2C brands, we deliver commerce solutions that convert."
      stats={[
        { value: "100M+", label: "Orders Processed" },
        { value: "25%", label: "Avg Conversion Lift" },
        { value: "99.9%", label: "Uptime" },
        { value: "5M+", label: "Products Listed" },
      ]}
      challenges={[
        {
          title: "Cart Abandonment",
          description: "High cart abandonment rates due to complex checkout processes and hidden costs.",
        },
        {
          title: "Peak Traffic Handling",
          description: "Scaling infrastructure to handle traffic spikes during sales events and holidays.",
        },
        {
          title: "Personalization at Scale",
          description: "Delivering personalized experiences across millions of products and customers.",
        },
        {
          title: "Omnichannel Integration",
          description: "Creating seamless experiences across web, mobile, social, and physical retail.",
        },
        {
          title: "Inventory Management",
          description: "Real-time inventory sync across multiple channels and warehouses.",
        },
        {
          title: "International Expansion",
          description: "Supporting multiple currencies, languages, and regional payment preferences.",
        },
      ]}
      solutions={[
        {
          title: "Custom E-commerce Platforms",
          description: "Tailored online stores with advanced product management, search, and checkout optimization.",
          icon: ShoppingCart,
        },
        {
          title: "Marketplace Development",
          description: "Multi-vendor marketplaces with seller management, commission tracking, and dispute resolution.",
          icon: Users,
        },
        {
          title: "Order Management Systems",
          description: "Unified order processing across channels with real-time inventory and fulfillment tracking.",
          icon: Package,
        },
        {
          title: "Commerce Analytics",
          description: "Customer behavior analytics, conversion optimization, and revenue intelligence dashboards.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "Headless Commerce",
        "Multi-vendor Marketplaces",
        "Payment Integration",
        "Inventory Management",
        "Search & Recommendations",
        "Mobile Commerce Apps",
        "Subscription Commerce",
        "Omnichannel Retail",
      ]}
      caseStudies={[
        {
          title: "ShopSphere Commerce",
          description: "Multi-vendor marketplace supporting millions of daily transactions.",
          results: ["5M+ products", "25% conversion boost"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          href: "/portfolio/shopsphere",
        },
        {
          title: "StyleBox Fashion",
          description: "Subscription fashion platform with AI-powered personalization.",
          results: ["500K subscribers", "40% retention increase"],
          image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
          href: "/portfolio/stylebox",
        },
        {
          title: "FreshMart Grocery",
          description: "Online grocery platform with same-day delivery logistics.",
          results: ["2hr delivery", "98% order accuracy"],
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
          href: "/portfolio/freshmart",
        },
      ]}
    />
  );
};

export default Ecommerce;
