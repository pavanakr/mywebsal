import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { UtensilsCrossed, MapPin, Clock, CreditCard, Star, Truck } from "lucide-react";

const FoodDelivery = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Food Delivery Platforms"
        subtitle="On-demand food delivery solutions"
        description="Build feature-rich food delivery platforms that connect restaurants with hungry customers. From ordering to delivery tracking, we cover it all."
        icon={<UtensilsCrossed className="w-12 h-12" />}
        features={[
          {
            icon: <UtensilsCrossed className="w-6 h-6" />,
            title: "Restaurant Management",
            description: "Menu management, order processing, and inventory tracking."
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Real-Time Tracking",
            description: "Live order tracking with GPS integration."
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Smart Dispatch",
            description: "AI-powered delivery assignment and route optimization."
          },
          {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Multiple Payments",
            description: "Cards, wallets, cash on delivery, and loyalty points."
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Ratings & Reviews",
            description: "Customer feedback and restaurant ratings system."
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Driver App",
            description: "Dedicated app for delivery partners with earnings tracking."
          }
        ]}
        benefits={[
          "Launch quickly with proven architecture",
          "Scale to handle peak demand efficiently",
          "Optimize delivery routes and reduce costs",
          "Build customer loyalty with personalized experiences"
        ]}
        useCases={[
          "Multi-restaurant delivery platforms",
          "Single restaurant ordering apps",
          "Cloud kitchen management",
          "Corporate catering solutions"
        ]}
      />
    </Layout>
  );
};

export default FoodDelivery;
