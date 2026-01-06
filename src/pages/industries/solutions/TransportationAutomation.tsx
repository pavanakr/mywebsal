import { Truck, Cpu, Route, Settings, BarChart, Shield } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const TransportationAutomation = () => {
  return (
    <SubIndustryDetailPage
      icon={Cpu}
      color="from-blue-500 to-blue-600"
      parentIndustry="Logistics & Transportation"
      parentHref="/industries/logistics-transportation"
      name="Transportation Automation"
      tagline="Transportation Automation Solutions"
      description="Automate your transportation operations with AI-powered route optimization, predictive maintenance, and intelligent fleet management systems."
      stats={[
        { value: "30%", label: "Fuel Savings" },
        { value: "45%", label: "Less Manual Work" },
        { value: "25%", label: "Faster Deliveries" },
        { value: "20%", label: "Cost Reduction" },
      ]}
      features={[
        {
          title: "AI Route Optimization",
          description: "Machine learning algorithms that find the most efficient routes considering traffic, weather, and constraints.",
          icon: Route,
        },
        {
          title: "Predictive Maintenance",
          description: "IoT sensors and AI predict vehicle maintenance needs before breakdowns occur.",
          icon: Settings,
        },
        {
          title: "Automated Dispatch",
          description: "Smart dispatch systems that automatically assign loads to optimal vehicles and drivers.",
          icon: Truck,
        },
        {
          title: "Fleet Telematics",
          description: "Real-time vehicle diagnostics, driver behavior monitoring, and fuel consumption tracking.",
          icon: Cpu,
        },
        {
          title: "Performance Analytics",
          description: "Comprehensive dashboards showing fleet efficiency, driver performance, and cost metrics.",
          icon: BarChart,
        },
        {
          title: "Compliance Automation",
          description: "Automated ELD logging, HOS compliance, and regulatory reporting for fleet operations.",
          icon: Shield,
        },
      ]}
      useCases={[
        {
          title: "Long-Haul Trucking",
          description: "Optimize cross-country routes and manage driver hours of service compliance.",
        },
        {
          title: "Delivery Fleets",
          description: "Automate daily route planning for multi-stop delivery operations.",
        },
        {
          title: "Public Transit",
          description: "Schedule optimization and real-time passenger information systems.",
        },
        {
          title: "Construction Logistics",
          description: "Coordinate heavy equipment and material deliveries to job sites.",
        },
        {
          title: "Retail Distribution",
          description: "Warehouse-to-store replenishment with demand-driven scheduling.",
        },
        {
          title: "Cold Chain Logistics",
          description: "Temperature monitoring and compliance for perishable goods transport.",
        },
      ]}
      technologies={[
        "Python",
        "TensorFlow",
        "Apache Kafka",
        "PostgreSQL",
        "Kubernetes",
        "AWS IoT",
        "React",
        "Node.js",
        "Redis",
        "InfluxDB",
        "Grafana",
        "Docker",
      ]}
      benefits={[
        "Reduce fuel costs by 20-30% with optimized routes",
        "Minimize vehicle downtime with predictive maintenance",
        "Improve on-time delivery rates significantly",
        "Reduce manual planning effort by 45%",
        "Ensure regulatory compliance automatically",
        "Scale operations without proportional staffing",
        "Make data-driven decisions with real-time analytics",
        "Improve driver safety with behavior monitoring",
      ]}
    />
  );
};

export default TransportationAutomation;
