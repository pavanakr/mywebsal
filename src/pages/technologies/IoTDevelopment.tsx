import { Wifi } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const IoTDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={Wifi}
      color="from-teal-500 to-teal-600"
      title="IoT Development"
      tagline="Connected devices, smarter solutions."
      description="Build end-to-end IoT solutions from device connectivity to cloud platforms and analytics. Enable smart operations and real-time monitoring."
      benefits={["Device connectivity", "Real-time monitoring", "Predictive maintenance", "Remote control", "Data analytics", "Edge computing", "Secure protocols", "Scalable platform"]}
      process={[
        { number: "01", title: "Requirements", description: "Define IoT use cases and requirements." },
        { number: "02", title: "Architecture", description: "Design IoT platform architecture." },
        { number: "03", title: "Device Integration", description: "Connect and configure devices." },
        { number: "04", title: "Platform Development", description: "Build IoT management platform." },
        { number: "05", title: "Analytics", description: "Implement data analytics and alerts." },
        { number: "06", title: "Deployment", description: "Deploy and scale IoT solution." },
      ]}
      technologies={["AWS IoT", "Azure IoT", "MQTT", "LoRaWAN", "Zigbee", "Node-RED", "InfluxDB", "Grafana", "Raspberry Pi", "Arduino"]}
      caseStudies={[
        { title: "Smart Factory", category: "Manufacturing", description: "IoT-enabled factory monitoring.", results: ["30% downtime reduction", "Real-time visibility"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/smart-factory" },
        { title: "Fleet Tracking", category: "Logistics", description: "GPS and sensor-based fleet management.", results: ["20% fuel savings", "100% visibility"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/fleet" },
        { title: "Smart Building", category: "Real Estate", description: "Building automation and monitoring.", results: ["40% energy savings", "Predictive maintenance"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", href: "/portfolio/smart-building" },
      ]}
      useCases={["Smart manufacturing", "Fleet management", "Smart buildings", "Healthcare monitoring", "Agriculture IoT", "Retail analytics"]}
    />
  );
};

export default IoTDevelopment;
