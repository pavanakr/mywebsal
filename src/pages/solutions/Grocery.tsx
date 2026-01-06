import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { ShoppingBasket, MapPin, Clock, RefreshCw, CreditCard, Truck } from "lucide-react";

const Grocery = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Grocery Delivery Systems"
        subtitle="On-demand grocery and essentials delivery"
        description="Build comprehensive grocery delivery platforms that connect supermarkets with customers. Enable quick commerce with real-time inventory and fast delivery."
        icon={<ShoppingBasket className="w-12 h-12" />}
        features={[
          {
            icon: <ShoppingBasket className="w-6 h-6" />,
            title: "Product Catalog",
            description: "Organized categories with search and filters."
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Multi-Store Support",
            description: "Connect multiple stores with location-based listings."
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Quick Commerce",
            description: "Express delivery within 10-30 minutes."
          },
          {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Subscription Orders",
            description: "Recurring orders for regular groceries."
          },
          {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Flexible Payments",
            description: "Multiple payment options including BNPL."
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Delivery Management",
            description: "Route optimization and delivery slot booking."
          }
        ]}
        benefits={[
          "Enable instant grocery delivery",
          "Reduce operational costs with automation",
          "Build customer loyalty with subscriptions",
          "Scale across multiple locations"
        ]}
        useCases={[
          "Supermarket delivery apps",
          "Dark store operations",
          "Hyperlocal delivery",
          "B2B grocery supply"
        ]}
      />
    </Layout>
  );
};

export default Grocery;
