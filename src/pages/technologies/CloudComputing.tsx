import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Cloud, Server, Shield, Zap, BarChart, RefreshCw } from "lucide-react";

const CloudComputing = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Cloud Computing"
        subtitle="Scalable, secure cloud solutions"
        description="Migrate, modernize, and optimize your infrastructure with cloud computing solutions on AWS, Azure, and Google Cloud Platform."
        icon={<Cloud className="w-12 h-12" />}
        features={[
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Migration",
            description: "Seamless migration from on-premise to cloud."
          },
          {
            icon: <Server className="w-6 h-6" />,
            title: "Cloud Architecture",
            description: "Design scalable, resilient cloud architectures."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Cloud Security",
            description: "Implement security best practices and compliance."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Serverless",
            description: "Build serverless applications that scale automatically."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Cost Optimization",
            description: "Reduce cloud costs with right-sizing and optimization."
          },
          {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "DevOps & CI/CD",
            description: "Automate deployments with cloud-native DevOps."
          }
        ]}
        technologies={["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CloudFormation", "Lambda"]}
        benefits={[
          "Scale infrastructure on demand",
          "Reduce operational costs",
          "Improve reliability and uptime",
          "Accelerate time to market"
        ]}
      />
    </Layout>
  );
};

export default CloudComputing;
