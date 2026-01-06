import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Users, Target, Lightbulb, TrendingUp, Shield, Workflow } from "lucide-react";

const SoftwareConsulting = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Software Consulting"
        subtitle="Strategic technology guidance for digital transformation"
        description="Get expert guidance on technology strategy, architecture decisions, and digital transformation initiatives. Our consultants help you make informed decisions that drive business growth."
        icon={<Users className="w-12 h-12" />}
        features={[
          {
            icon: <Target className="w-6 h-6" />,
            title: "Technology Strategy",
            description: "Develop comprehensive technology roadmaps aligned with business goals."
          },
          {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Solution Architecture",
            description: "Design scalable, secure, and efficient software architectures."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Digital Transformation",
            description: "Guide your organization through successful digital transformation."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Risk Assessment",
            description: "Identify and mitigate technology risks before they impact business."
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Process Optimization",
            description: "Streamline workflows and improve operational efficiency."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Augmentation",
            description: "Strategic guidance on building and scaling development teams."
          }
        ]}
        technologies={["Agile", "Scrum", "Enterprise Architecture", "Cloud Strategy", "DevOps", "Microservices", "API Design", "Security"]}
        benefits={[
          "Make informed technology decisions with expert guidance",
          "Reduce project risks and avoid costly mistakes",
          "Accelerate digital transformation initiatives",
          "Optimize technology investments for maximum ROI"
        ]}
      />
    </Layout>
  );
};

export default SoftwareConsulting;
