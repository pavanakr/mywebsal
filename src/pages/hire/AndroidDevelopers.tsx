import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Smartphone, Code, Shield, Zap, Users, Layers } from "lucide-react";

const AndroidDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Android Developers"
        subtitle="Expert Kotlin & Java Android developers"
        description="Hire skilled Android developers who build high-performance apps for the world's most popular mobile platform. Kotlin, Java, and Jetpack expertise."
        icon={<Smartphone className="w-12 h-12" />}
        features={[
          {
            icon: <Code className="w-6 h-6" />,
            title: "Kotlin Expertise",
            description: "Modern Android development with Kotlin and Coroutines."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Jetpack Compose",
            description: "Declarative UI development with Compose."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance",
            description: "Optimized apps for diverse Android devices."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security",
            description: "Secure coding practices and data protection."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Material Design",
            description: "Beautiful UIs following Google's guidelines."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Integration",
            description: "Seamless collaboration with your existing team."
          }
        ]}
        technologies={["Kotlin", "Java", "Jetpack Compose", "Room", "Retrofit", "Dagger Hilt", "Coroutines", "Firebase"]}
        benefits={[
          "Access top Android talent quickly",
          "Build apps for billions of users",
          "Ensure Play Store approval",
          "Scale development as needed"
        ]}
      />
    </Layout>
  );
};

export default AndroidDevelopers;
