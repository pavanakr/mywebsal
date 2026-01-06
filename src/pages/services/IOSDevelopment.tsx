import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Smartphone, Code, Shield, Zap, Users, Layers } from "lucide-react";

const IOSDevelopment = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="iOS App Development"
        subtitle="Build stunning, high-performance iOS applications"
        description="Create native iOS applications that deliver exceptional user experiences on iPhone and iPad. Our expert developers leverage Swift and SwiftUI to build apps that stand out on the App Store."
        icon={<Smartphone className="w-12 h-12" />}
        features={[
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Native iOS Development",
            description: "Pure Swift and SwiftUI development for optimal performance and seamless iOS integration."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "App Store Optimization",
            description: "Strategic ASO to maximize visibility and downloads on the Apple App Store."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security & Privacy",
            description: "Implementation of Apple's security best practices and privacy guidelines."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance Optimization",
            description: "Optimized code for smooth animations, fast load times, and efficient battery usage."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Human Interface Guidelines",
            description: "Designs that follow Apple's HIG for intuitive, familiar user experiences."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Apple Ecosystem Integration",
            description: "Seamless integration with Apple Watch, CarPlay, and other Apple services."
          }
        ]}
        technologies={["Swift", "SwiftUI", "Xcode", "Core Data", "CloudKit", "ARKit", "Core ML", "TestFlight"]}
        benefits={[
          "Premium user experience with native iOS performance",
          "Access to Apple's vast ecosystem and loyal customer base",
          "Higher app store visibility and revenue potential",
          "Enterprise-grade security and data protection"
        ]}
      />
    </Layout>
  );
};

export default IOSDevelopment;
