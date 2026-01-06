import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Smartphone, Code, Shield, Zap, Users, Layers } from "lucide-react";

const IOSDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire iOS Developers"
        subtitle="Expert Swift & SwiftUI developers"
        description="Hire experienced iOS developers who build beautiful, high-performance apps for iPhone and iPad. Swift, SwiftUI, and Apple ecosystem expertise."
        icon={<Smartphone className="w-12 h-12" />}
        features={[
          {
            icon: <Code className="w-6 h-6" />,
            title: "Swift Expertise",
            description: "Modern iOS development with Swift and SwiftUI."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "SwiftUI & UIKit",
            description: "Build with latest Apple UI frameworks."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance",
            description: "Optimized apps with smooth 60fps animations."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Apple Guidelines",
            description: "Compliant with App Store requirements."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Ecosystem",
            description: "Integration with Watch, CarPlay, and more."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Direct Collaboration",
            description: "Work directly with your team and processes."
          }
        ]}
        technologies={["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "Core ML", "TestFlight"]}
        benefits={[
          "Access premium iOS development talent",
          "Ensure App Store approval",
          "Build for Apple's loyal user base",
          "Flexible engagement models"
        ]}
      />
    </Layout>
  );
};

export default IOSDevelopers;
