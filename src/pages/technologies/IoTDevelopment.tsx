import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Wifi, Cpu, BarChart, Shield, Smartphone, Zap } from "lucide-react";

const IoTDevelopment = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="IoT Development"
        subtitle="Connected devices, smarter solutions"
        description="Build end-to-end IoT solutions from device connectivity to cloud platforms and analytics. Enable smart operations and real-time monitoring."
        icon={<Wifi className="w-12 h-12" />}
        features={[
          {
            icon: <Cpu className="w-6 h-6" />,
            title: "Device Integration",
            description: "Connect sensors, devices, and industrial equipment."
          },
          {
            icon: <Wifi className="w-6 h-6" />,
            title: "IoT Platforms",
            description: "Build scalable IoT platforms for device management."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Real-Time Analytics",
            description: "Process and analyze device data in real-time."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "IoT Security",
            description: "Secure device communication and data protection."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Apps",
            description: "Control and monitor IoT devices from mobile apps."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Edge Computing",
            description: "Process data at the edge for faster response."
          }
        ]}
        technologies={["AWS IoT", "Azure IoT", "MQTT", "LoRaWAN", "Raspberry Pi", "Arduino", "Node-RED", "InfluxDB"]}
        benefits={[
          "Enable real-time monitoring and control",
          "Reduce downtime with predictive maintenance",
          "Optimize operations with data insights",
          "Create new connected product offerings"
        ]}
      />
    </Layout>
  );
};

export default IoTDevelopment;
