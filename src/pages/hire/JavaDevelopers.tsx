import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Code, Server, Database, Shield, Cog, Users } from "lucide-react";

const JavaDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Java Developers"
        subtitle="Enterprise Java experts"
        description="Hire experienced Java developers who build robust, enterprise-grade applications. Spring Boot, microservices, and cloud-native expertise."
        icon={<Code className="w-12 h-12" />}
        features={[
          {
            icon: <Code className="w-6 h-6" />,
            title: "Java Expertise",
            description: "Deep knowledge of Java and the JVM ecosystem."
          },
          {
            icon: <Server className="w-6 h-6" />,
            title: "Spring Boot",
            description: "Build microservices with Spring ecosystem."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Database Skills",
            description: "JPA, Hibernate, and database optimization."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise",
            description: "Scalable, secure enterprise applications."
          },
          {
            icon: <Cog className="w-6 h-6" />,
            title: "Cloud Native",
            description: "AWS, Azure, and Kubernetes deployment."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Integration",
            description: "Work seamlessly with your existing team."
          }
        ]}
        technologies={["Java", "Spring Boot", "Hibernate", "Maven", "Gradle", "Kafka", "Docker", "Kubernetes"]}
        benefits={[
          "Build enterprise-grade systems",
          "Access battle-tested Java expertise",
          "Scalable microservices architecture",
          "Long-term maintainable code"
        ]}
      />
    </Layout>
  );
};

export default JavaDevelopers;
