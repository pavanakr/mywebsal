import { UtensilsCrossed, MapPin, Clock, CreditCard, Users, BarChart3, Bell } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const FoodDelivery = () => {
  return (
    <SubIndustryDetailPage
      icon={UtensilsCrossed}
      color="from-red-500 to-red-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="Food Delivery"
      tagline="Complete Food Delivery Platforms That Delight Customers"
      description="Build food delivery apps with real-time tracking, restaurant management, and seamless ordering experience."
      stats={[{ value: "1M+", label: "Orders" }, { value: "10K+", label: "Restaurants" }, { value: "30min", label: "Avg Delivery" }, { value: "4.8", label: "Rating" }]}
      features={[
        { title: "Restaurant Listings", description: "Browse menus and restaurants.", icon: UtensilsCrossed },
        { title: "Live Tracking", description: "Real-time order tracking.", icon: MapPin },
        { title: "Fast Delivery", description: "Optimized delivery routes.", icon: Clock },
        { title: "Easy Payments", description: "Multiple payment options.", icon: CreditCard },
        { title: "Driver App", description: "Delivery partner management.", icon: Users },
        { title: "Analytics", description: "Order and revenue insights.", icon: BarChart3 },
      ]}
      useCases={[
        { title: "Restaurant Delivery", description: "Multi-restaurant platform." },
        { title: "Cloud Kitchens", description: "Virtual restaurant delivery." },
        { title: "Grocery Delivery", description: "Quick commerce solution." },
        { title: "Corporate Catering", description: "B2B food ordering." },
      ]}
      technologies={["React Native", "Node.js", "PostgreSQL", "Redis", "Google Maps", "Stripe", "Firebase", "Socket.io"]}
      benefits={["Real-time tracking", "Multi-vendor support", "Route optimization", "Payment integration", "Scalable"]}
    />
  );
};

export default FoodDelivery;
