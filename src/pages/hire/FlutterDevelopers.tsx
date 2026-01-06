import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Layers, Smartphone, Zap, Code, Users, Shield } from "lucide-react";

const FlutterDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Flutter Developers"
        subtitle="Cross-platform mobile experts"
        description="Hire skilled Flutter developers who build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase."
        icon={<Layers className="w-12 h-12" />}
        features={[
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Flutter Expertise",
            description: "Deep knowledge of Flutter framework and Dart."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Cross-Platform",
            description: "Single codebase for iOS, Android, and web."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Development",
            description: "Hot reload for rapid iteration and testing."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Custom Widgets",
            description: "Beautiful custom UI components and animations."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Native Performance",
            description: "Compiled to native ARM code for speed."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Agile Delivery",
            description: "Sprint-based development with regular demos."
          }
        ]}
        technologies={["Flutter", "Dart", "Firebase", "GetX", "Bloc", "Riverpod", "REST APIs", "GraphQL"]}
        benefits={[
          "Build for multiple platforms faster",
          "Reduce development costs significantly",
          "Deliver consistent experiences everywhere",
          "Access Flutter specialists quickly"
        ]}
      />
    </Layout>
  );
};

export default FlutterDevelopers;
