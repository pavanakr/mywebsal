import { ShoppingBasket, Clock, MapPin, CreditCard, Package, BarChart3, Bell } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const Grocery = () => {
  return (
    <SubIndustryDetailPage
      icon={ShoppingBasket}
      color="from-green-500 to-green-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="Grocery Delivery"
      tagline="Modern Grocery Delivery Apps for Quick Commerce"
      description="Build grocery delivery platforms with inventory management, quick delivery, and seamless shopping experience."
      stats={[{ value: "500K+", label: "Orders/Month" }, { value: "10min", label: "Quick Delivery" }, { value: "50K+", label: "Products" }, { value: "4.7", label: "Rating" }]}
      features={[
        { title: "Product Catalog", description: "Browse groceries by category.", icon: ShoppingBasket },
        { title: "Quick Delivery", description: "10-minute delivery option.", icon: Clock },
        { title: "Live Tracking", description: "Track your order in real-time.", icon: MapPin },
        { title: "Easy Checkout", description: "Multiple payment methods.", icon: CreditCard },
        { title: "Inventory Management", description: "Real-time stock updates.", icon: Package },
        { title: "Analytics", description: "Sales and inventory insights.", icon: BarChart3 },
      ]}
      useCases={[
        { title: "Quick Commerce", description: "10-minute grocery delivery." },
        { title: "Supermarket Online", description: "Traditional grocery shopping." },
        { title: "Specialty Stores", description: "Organic, gourmet products." },
        { title: "B2B Grocery", description: "Restaurant and business supply." },
      ]}
      technologies={["React Native", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Stripe", "Google Maps", "Firebase"]}
      benefits={["Fast delivery", "Inventory sync", "Route optimization", "Customer loyalty", "Scalable"]}
    />
  );
};

export default Grocery;
