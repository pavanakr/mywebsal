import { ShoppingCart, Package, BarChart, CreditCard, Users, Truck } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';
import heroRetailImage from '@/assets/hero-retail.png';

const RetailEcommerce = () => {
  return (
    <IndustryDetailPage
      icon={ShoppingCart}
      color="from-purple-500 to-purple-600"
      name="Retail & E-commerce"
      tagline="Digital Commerce Excellence"
      description="We build powerful e-commerce solutions that boost online sales, enhance customer experience, and streamline retail operations across all channels."
      heroImage={heroRetailImage}
      stats={[
        { value: "$500M+", label: "Transaction Volume" },
        { value: "40%", label: "Conversion Increase" },
        { value: "10M+", label: "Products Listed" },
        { value: "99.9%", label: "Platform Uptime" },
      ]}
      challenges={[
        {
          title: "Omnichannel Experience",
          description: "Providing seamless shopping experience across web, mobile, and physical stores.",
        },
        {
          title: "Inventory Management",
          description: "Real-time inventory tracking across multiple warehouses and sales channels.",
        },
        {
          title: "Cart Abandonment",
          description: "Reducing cart abandonment rates and recovering lost sales effectively.",
        },
        {
          title: "Personalization",
          description: "Delivering personalized product recommendations and shopping experiences.",
        },
        {
          title: "Payment Integration",
          description: "Supporting multiple payment methods with secure, frictionless checkout.",
        },
        {
          title: "Scalability",
          description: "Handling traffic spikes during sales events without performance degradation.",
        },
      ]}
      solutions={[
        {
          title: "Custom E-commerce Platforms",
          description: "Build scalable, feature-rich online stores with custom shopping experiences.",
          icon: ShoppingCart,
        },
        {
          title: "Inventory Management",
          description: "Real-time inventory tracking, automated reordering, and multi-warehouse management.",
          icon: Package,
        },
        {
          title: "Payment Solutions",
          description: "Secure payment gateway integration with multiple payment methods and currencies.",
          icon: CreditCard,
        },
        {
          title: "Analytics & Insights",
          description: "Advanced analytics for customer behavior, sales trends, and revenue optimization.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "Custom E-commerce Development",
        "Marketplace Development",
        "Mobile Commerce Apps",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management",
        "Customer Analytics",
        "Loyalty Programs",
      ]}
      caseStudies={[
        {
          title: "ShopSphere",
          description: "Multi-vendor marketplace platform with 10M+ products.",
          results: ["$500M+ GMV", "40% conversion boost"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          href: "/portfolio/shopsphere",
        },
        {
          title: "RetailHub POS",
          description: "Omnichannel POS system for unified retail operations.",
          results: ["500+ stores", "30% faster checkout"],
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
          href: "/portfolio/retailhub",
        },
        {
          title: "CartRecovery AI",
          description: "AI-powered cart abandonment recovery system.",
          results: ["25% recovery rate", "$50M recovered"],
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
          href: "/portfolio/cartrecovery",
        },
      ]}
    />
  );
};

export default RetailEcommerce;
