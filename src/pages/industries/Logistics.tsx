import { Truck, MapPin, Package, BarChart, Clock, Globe } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const Logistics = () => {
  return (
    <IndustryDetailPage
      icon={Truck}
      color="from-orange-500 to-orange-600"
      name="Logistics"
      tagline="Smart Supply Chain Management"
      description="We build intelligent logistics and supply chain solutions that optimize operations, reduce costs, and provide real-time visibility across your entire distribution network."
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
          title: "Transportation Management",
          description: "End-to-end TMS with route optimization, carrier management, and freight audit.",
          icon: Truck,
        },
        {
          title: "Real-time Tracking",
          description: "GPS-enabled tracking with predictive ETAs and proactive exception management.",
          icon: MapPin,
        },
        {
          title: "Warehouse Management",
          description: "Smart WMS with inventory optimization, pick/pack automation, and labor management.",
          icon: Package,
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

export default Logistics;
