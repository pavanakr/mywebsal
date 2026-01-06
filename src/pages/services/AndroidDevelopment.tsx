import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Smartphone, Code, Shield, Zap, Users, Layers } from "lucide-react";

const AndroidDevelopment = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Android App Development"
        subtitle="Build powerful Android applications for billions of users"
        description="Develop feature-rich Android applications that run seamlessly across the diverse Android ecosystem. Our team uses Kotlin and Jetpack Compose to create modern, scalable apps."
        icon={<Smartphone className="w-12 h-12" />}
        features={[
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Native Android Development",
            description: "Kotlin-first development with Jetpack libraries for modern Android apps."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Material Design 3",
            description: "Beautiful, adaptive interfaces following Google's latest design guidelines."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security Best Practices",
            description: "Robust security implementation with encryption and secure data storage."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance Optimization",
            description: "Optimized for diverse hardware configurations and Android versions."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Play Store Optimization",
            description: "Strategic optimization for maximum visibility on Google Play Store."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Cross-Device Support",
            description: "Support for phones, tablets, wearables, and Android TV."
          }
        ]}
        technologies={["Kotlin", "Jetpack Compose", "Android Studio", "Room", "Firebase", "Retrofit", "Dagger Hilt", "Coroutines"]}
        benefits={[
          "Reach billions of Android users worldwide",
          "Flexible deployment and distribution options",
          "Cost-effective development with shorter time-to-market",
          "Integration with Google services and ecosystem"
        ]}
      />
    </Layout>
  );
};

export default AndroidDevelopment;
