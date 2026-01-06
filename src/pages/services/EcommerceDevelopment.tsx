import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { ShoppingCart, CreditCard, Package, TrendingUp, Users, Shield } from "lucide-react";

const EcommerceDevelopment = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="E-commerce Development"
        subtitle="Build powerful online stores that drive sales"
        description="Create scalable, secure e-commerce platforms that deliver exceptional shopping experiences. From custom stores to marketplace solutions, we build commerce that converts."
        icon={<ShoppingCart className="w-12 h-12" />}
        features={[
          {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Custom E-commerce",
            description: "Tailored online stores built for your unique business needs."
          },
          {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Payment Integration",
            description: "Secure payment gateways with multiple payment options."
          },
          {
            icon: <Package className="w-6 h-6" />,
            title: "Inventory Management",
            description: "Real-time inventory tracking and automated stock management."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Conversion Optimization",
            description: "UX optimized for maximum conversions and sales."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Multi-Vendor Marketplace",
            description: "Build marketplace platforms with vendor management."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security & Compliance",
            description: "PCI DSS compliant with advanced fraud protection."
          }
        ]}
        technologies={["Shopify", "WooCommerce", "Magento", "React", "Node.js", "Stripe", "PayPal", "Algolia"]}
        benefits={[
          "Launch your online store faster with proven platforms",
          "Increase sales with optimized checkout experiences",
          "Scale seamlessly as your business grows",
          "Secure transactions with enterprise-grade security"
        ]}
      />
    </Layout>
  );
};

export default EcommerceDevelopment;
