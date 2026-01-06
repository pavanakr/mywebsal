import { Truck, MapPin, Package, BarChart, Clock, Cpu } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';
import heroLogisticsImage from '@/assets/hero-logistics.png';

const LogisticsTransportation = () => {
  return (
    <IndustryDetailPage
      icon={Truck}
      color="from-orange-500 to-orange-600"
      name="Logistics & Transportation"
      tagline="Logistics & Transportation Software for Smart Supply Chains"
      description="Fleet & Delivery Management Systems. On-Demand Logistics Platforms. Real-Time Tracking & Automation."
      heroImage={heroLogisticsImage}
      stats={[
        { value: "10M+", label: "Shipments Tracked" },
        { value: "30%", label: "Cost Reduction" },
        { value: "50+", label: "Countries Covered" },
        { value: "99.5%", label: "On-time Delivery" },
      ]}
      challenges={[
        {
          title: "Supply Chain Visibility",
          description: "Lack of real-time visibility into shipment status, inventory levels, and potential disruptions.",
        },
        {
          title: "Route Optimization",
          description: "Finding the most efficient routes while balancing cost, time, and capacity constraints.",
        },
        {
          title: "Last-Mile Delivery",
          description: "Managing the complexity and cost of final delivery to end customers.",
        },
        {
          title: "Demand Forecasting",
          description: "Accurately predicting demand to optimize inventory and reduce stockouts or excess.",
        },
        {
          title: "Multi-carrier Management",
          description: "Coordinating across multiple carriers, modes, and service levels efficiently.",
        },
        {
          title: "Compliance & Documentation",
          description: "Managing complex documentation requirements for international shipments.",
        },
      ]}
      solutions={[
        {
          title: "On-Demand Logistics Apps",
          description: "Build custom logistics apps for real-time tracking, driver management, and instant dispatch.",
          icon: Truck,
        },
        {
          title: "Transportation Automation",
          description: "Automate fleet operations, route planning, and delivery scheduling with AI-powered systems.",
          icon: Cpu,
        },
        {
          title: "Shipping & Fleet Management",
          description: "Comprehensive fleet management with GPS tracking, maintenance scheduling, and fuel optimization.",
          icon: MapPin,
        },
        {
          title: "Supply Chain Analytics",
          description: "Advanced analytics for demand forecasting, performance monitoring, and cost optimization.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "Transportation Management",
        "Warehouse Management",
        "Fleet Tracking & Telematics",
        "Route Optimization",
        "Demand Forecasting",
        "Carrier Integration",
        "IoT & Sensor Integration",
        "Customs & Compliance",
      ]}
      caseStudies={[
        {
          title: "LogiTrack Pro",
          description: "Real-time supply chain visibility platform for global operations.",
          results: ["30% cost reduction", "15K shipments/day"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
          href: "/portfolio/logitrack",
        },
        {
          title: "FleetMaster GPS",
          description: "Fleet management system with real-time tracking and driver analytics.",
          results: ["20% fuel savings", "5K+ vehicles"],
          image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
          href: "/portfolio/fleetmaster",
        },
        {
          title: "WarehouseIQ",
          description: "Smart warehouse management with automated inventory optimization.",
          results: ["40% faster picking", "99.9% accuracy"],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
          href: "/portfolio/warehouseiq",
        },
      ]}
    />
  );
};

export default LogisticsTransportation;
