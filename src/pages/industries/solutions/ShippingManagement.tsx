import { Ship, Package, Globe, FileText, BarChart, Anchor } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const ShippingManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={Ship}
      color="from-cyan-500 to-cyan-600"
      parentIndustry="Logistics & Transportation"
      parentHref="/industries/logistics-transportation"
      name="Shipping Management"
      tagline="Shipping & Fleet Management Systems"
      description="Comprehensive shipping management solutions for maritime logistics, multi-carrier coordination, and end-to-end supply chain visibility."
      stats={[
        { value: "1M+", label: "Shipments Managed" },
        { value: "200+", label: "Carrier Integrations" },
        { value: "40%", label: "Faster Processing" },
        { value: "99.5%", label: "Accuracy Rate" },
      ]}
      features={[
        {
          title: "Multi-Carrier Management",
          description: "Integrate with hundreds of carriers, compare rates, and book shipments from a single platform.",
          icon: Globe,
        },
        {
          title: "Container Tracking",
          description: "Real-time tracking of containers across ocean, air, and ground transportation modes.",
          icon: Package,
        },
        {
          title: "Documentation Management",
          description: "Automated generation of bills of lading, customs documents, and compliance paperwork.",
          icon: FileText,
        },
        {
          title: "Port Management",
          description: "Coordinate terminal operations, berth scheduling, and cargo handling efficiently.",
          icon: Anchor,
        },
        {
          title: "Freight Analytics",
          description: "Analyze shipping costs, transit times, and carrier performance across your supply chain.",
          icon: BarChart,
        },
        {
          title: "Vessel Tracking",
          description: "Monitor fleet positions, ETA predictions, and voyage management for maritime operations.",
          icon: Ship,
        },
      ]}
      useCases={[
        {
          title: "Freight Forwarding",
          description: "End-to-end management of international freight movements across modes.",
        },
        {
          title: "Ocean Shipping Lines",
          description: "Vessel scheduling, container inventory, and port coordination.",
        },
        {
          title: "3PL Providers",
          description: "Multi-client logistics management with white-label capabilities.",
        },
        {
          title: "Import/Export Companies",
          description: "Customs compliance, duty calculation, and trade documentation.",
        },
        {
          title: "E-commerce Fulfillment",
          description: "Multi-carrier shipping for high-volume order fulfillment.",
        },
        {
          title: "Manufacturing Supply Chain",
          description: "Inbound materials tracking and supplier coordination.",
        },
      ]}
      technologies={[
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Elasticsearch",
        "Apache Kafka",
        "AWS",
        "Docker",
        "Kubernetes",
        "MongoDB",
        "Redis",
        "GraphQL",
      ]}
      benefits={[
        "Consolidate shipping operations in one platform",
        "Reduce shipping costs with rate comparison",
        "Improve visibility across the supply chain",
        "Automate documentation and compliance",
        "Speed up customs clearance processes",
        "Optimize carrier selection based on performance",
        "Scale operations across global markets",
        "Integrate seamlessly with existing ERP systems",
      ]}
    />
  );
};

export default ShippingManagement;
