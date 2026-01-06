import { Truck, MapPin, Clock, Smartphone, Package, BarChart } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const OnDemandLogistics = () => {
  return (
    <SubIndustryDetailPage
      icon={Truck}
      color="from-orange-500 to-orange-600"
      parentIndustry="Logistics & Transportation"
      parentHref="/industries/logistics-transportation"
      name="On-Demand Logistics App"
      tagline="On-Demand Logistics App Development"
      description="Build powerful on-demand logistics applications that connect shippers with carriers, enable real-time tracking, and streamline last-mile delivery operations."
      stats={[
        { value: "50+", label: "Apps Delivered" },
        { value: "5M+", label: "Deliveries Tracked" },
        { value: "35%", label: "Cost Reduction" },
        { value: "99.9%", label: "Uptime" },
      ]}
      features={[
        {
          title: "Real-time GPS Tracking",
          description: "Track shipments in real-time with live map views, ETAs, and automated notifications for customers.",
          icon: MapPin,
        },
        {
          title: "Instant Dispatch System",
          description: "Smart dispatch algorithms that match orders with nearest available drivers for faster delivery.",
          icon: Clock,
        },
        {
          title: "Multi-platform Apps",
          description: "Native iOS and Android apps for customers, drivers, and admin with seamless synchronization.",
          icon: Smartphone,
        },
        {
          title: "Order Management",
          description: "Complete order lifecycle management from booking to delivery with proof of delivery capture.",
          icon: Package,
        },
        {
          title: "Analytics Dashboard",
          description: "Comprehensive analytics on delivery performance, driver efficiency, and customer satisfaction.",
          icon: BarChart,
        },
        {
          title: "Fleet Management",
          description: "Manage your entire fleet with vehicle tracking, maintenance scheduling, and driver assignments.",
          icon: Truck,
        },
      ]}
      useCases={[
        {
          title: "Food & Grocery Delivery",
          description: "Build apps like Uber Eats or Instacart for quick commerce delivery.",
        },
        {
          title: "Parcel & Courier Services",
          description: "On-demand parcel pickup and delivery for e-commerce businesses.",
        },
        {
          title: "B2B Logistics",
          description: "Enterprise logistics solutions for warehouse-to-warehouse transfers.",
        },
        {
          title: "Last-Mile Delivery",
          description: "Optimize the final leg of delivery with crowdsourced driver networks.",
        },
        {
          title: "Moving & Relocation",
          description: "On-demand moving services with load estimation and pricing.",
        },
        {
          title: "Medical & Pharmacy",
          description: "Temperature-controlled delivery for pharmaceuticals and lab samples.",
        },
      ]}
      technologies={[
        "React Native",
        "Flutter",
        "Node.js",
        "PostgreSQL",
        "Google Maps API",
        "Firebase",
        "AWS",
        "Socket.io",
        "Redis",
        "Stripe",
        "Twilio",
        "SendGrid",
      ]}
      benefits={[
        "Reduce delivery times by up to 40%",
        "Lower operational costs with route optimization",
        "Increase customer satisfaction with real-time tracking",
        "Scale quickly with cloud-native architecture",
        "Improve driver productivity with smart dispatching",
        "Gain insights with comprehensive analytics",
        "Ensure security with encrypted communications",
        "Support multiple payment methods",
      ]}
    />
  );
};

export default OnDemandLogistics;
