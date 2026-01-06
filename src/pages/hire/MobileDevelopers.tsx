import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Smartphone, Code, Zap, Shield, Users, Layers } from "lucide-react";

const MobileDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Mobile App Developers"
        subtitle="Expert mobile developers for iOS & Android"
        description="Hire skilled mobile app developers with expertise in native iOS, Android, and cross-platform development. Build world-class mobile experiences."
        icon={<Smartphone className="w-12 h-12" />}
        features={[
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Native Development",
            description: "iOS and Android specialists with deep platform knowledge."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Cross-Platform",
            description: "React Native and Flutter experts for hybrid apps."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "UI/UX Expertise",
            description: "Design-focused developers for beautiful apps."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance",
            description: "Optimized apps with smooth animations and fast load."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "App Store Expertise",
            description: "Experience with App Store and Play Store publishing."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Agile Teams",
            description: "Sprint-based delivery with regular updates."
          }
        ]}
        technologies={["Swift", "Kotlin", "React Native", "Flutter", "SwiftUI", "Jetpack Compose", "Firebase", "App Store Connect"]}
        benefits={[
          "Launch mobile apps faster",
          "Access specialized mobile expertise",
          "Ensure quality with experienced developers",
          "Scale your mobile team on demand"
        ]}
      />
    </Layout>
  );
};

export default MobileDevelopers;
