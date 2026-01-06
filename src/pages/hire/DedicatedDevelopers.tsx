import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Users, Code, Clock, Shield, TrendingUp, Headphones } from "lucide-react";

const DedicatedDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Dedicated Developers"
        subtitle="Scale your team with expert developers"
        description="Augment your team with skilled, dedicated developers who integrate seamlessly with your workflows. Full-time resources, complete control, zero overhead."
        icon={<Users className="w-12 h-12" />}
        features={[
          {
            icon: <Users className="w-6 h-6" />,
            title: "Vetted Talent",
            description: "Pre-screened developers with proven expertise."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Full-Stack Skills",
            description: "Frontend, backend, mobile, and DevOps expertise."
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Flexible Engagement",
            description: "Monthly contracts with easy scale up or down."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "IP Protection",
            description: "Signed NDAs and complete code ownership."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Direct Management",
            description: "Full control over tasks and priorities."
          },
          {
            icon: <Headphones className="w-6 h-6" />,
            title: "Timezone Overlap",
            description: "Flexible hours to match your working times."
          }
        ]}
        technologies={["React", "Node.js", "Python", "Java", "Flutter", "AWS", "DevOps", "AI/ML"]}
        benefits={[
          "Reduce hiring time and costs",
          "Access global talent pool",
          "Scale team quickly as needed",
          "No long-term commitments required"
        ]}
      />
    </Layout>
  );
};

export default DedicatedDevelopers;
