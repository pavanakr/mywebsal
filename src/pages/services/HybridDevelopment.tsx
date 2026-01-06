import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Layers, Code, Zap, DollarSign, RefreshCw, Smartphone } from "lucide-react";

const HybridDevelopment = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hybrid App Development"
        subtitle="One codebase, multiple platforms, maximum reach"
        description="Build cross-platform mobile applications with React Native and Flutter that deliver native-like experiences on both iOS and Android from a single codebase."
        icon={<Layers className="w-12 h-12" />}
        features={[
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Cross-Platform Development",
            description: "Single codebase for iOS and Android with native performance."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "React Native & Flutter",
            description: "Expert development using industry-leading cross-platform frameworks."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Native Performance",
            description: "Near-native performance with smooth animations and responsive UI."
          },
          {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Cost Efficiency",
            description: "Reduce development costs by up to 50% with shared codebase."
          },
          {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Faster Updates",
            description: "Push updates simultaneously to both platforms with ease."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Native Features",
            description: "Full access to device features like camera, GPS, and biometrics."
          }
        ]}
        technologies={["React Native", "Flutter", "Dart", "TypeScript", "Expo", "Firebase", "Redux", "GetX"]}
        benefits={[
          "50% reduction in development time and costs",
          "Consistent experience across iOS and Android",
          "Single team for both platforms",
          "Faster time-to-market with simultaneous launches"
        ]}
      />
    </Layout>
  );
};

export default HybridDevelopment;
