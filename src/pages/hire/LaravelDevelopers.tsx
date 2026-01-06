import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Code, Database, Shield, Zap, Users, Cog } from "lucide-react";

const LaravelDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Laravel Developers"
        subtitle="Expert PHP Laravel developers"
        description="Hire skilled Laravel developers who build robust, scalable web applications. From APIs to full-stack solutions, our Laravel experts deliver quality code."
        icon={<Code className="w-12 h-12" />}
        features={[
          {
            icon: <Code className="w-6 h-6" />,
            title: "Laravel Expertise",
            description: "Deep knowledge of Laravel ecosystem and best practices."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Database Design",
            description: "Eloquent ORM and database optimization."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "API Development",
            description: "RESTful and GraphQL API development."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security",
            description: "Secure applications with Laravel's built-in features."
          },
          {
            icon: <Cog className="w-6 h-6" />,
            title: "Queue & Jobs",
            description: "Background processing and task scheduling."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Integration",
            description: "Collaborative development with your team."
          }
        ]}
        technologies={["Laravel", "PHP", "MySQL", "Redis", "Vue.js", "Livewire", "Inertia.js", "PHPUnit"]}
        benefits={[
          "Build web apps faster with Laravel",
          "Access PHP experts with modern skills",
          "Scalable and maintainable codebases",
          "Flexible hiring options"
        ]}
      />
    </Layout>
  );
};

export default LaravelDevelopers;
