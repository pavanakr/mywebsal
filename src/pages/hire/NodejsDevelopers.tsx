import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Server, Zap, Database, Shield, Code, Users } from "lucide-react";

const NodejsDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Node.js Developers"
        subtitle="Expert backend JavaScript developers"
        description="Hire skilled Node.js developers who build fast, scalable backend systems and APIs. Full-stack JavaScript expertise for modern applications."
        icon={<Server className="w-12 h-12" />}
        features={[
          {
            icon: <Server className="w-6 h-6" />,
            title: "Node.js Expertise",
            description: "Deep knowledge of Node.js and its ecosystem."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "High Performance",
            description: "Build fast, non-blocking I/O applications."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Database Skills",
            description: "MongoDB, PostgreSQL, and Redis expertise."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "API Development",
            description: "RESTful and GraphQL API development."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Full-Stack",
            description: "Backend plus React/Next.js capabilities."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Microservices",
            description: "Build scalable microservices architectures."
          }
        ]}
        technologies={["Node.js", "Express", "NestJS", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "Docker"]}
        benefits={[
          "Build scalable backend systems",
          "Access JavaScript full-stack experts",
          "Real-time applications with WebSocket",
          "Flexible engagement options"
        ]}
      />
    </Layout>
  );
};

export default NodejsDevelopers;
