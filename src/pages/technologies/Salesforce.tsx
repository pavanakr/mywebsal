import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Cloud, Users, BarChart, Cog, Zap, Shield } from "lucide-react";

const Salesforce = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Salesforce Solutions"
        subtitle="Maximize your Salesforce investment"
        description="Expert Salesforce development, customization, and integration services. Transform your CRM into a powerful engine for sales, service, and marketing."
        icon={<Cloud className="w-12 h-12" />}
        features={[
          {
            icon: <Cog className="w-6 h-6" />,
            title: "Custom Development",
            description: "Custom apps and components on the Salesforce platform."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Sales Cloud",
            description: "Optimize sales processes and pipeline management."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Service Cloud",
            description: "Deliver exceptional customer service experiences."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytics",
            description: "Powerful reporting and Einstein Analytics."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Integration",
            description: "Connect Salesforce with your business systems."
          },
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "AppExchange",
            description: "Build and publish apps on AppExchange marketplace."
          }
        ]}
        technologies={["Apex", "Lightning", "Visualforce", "SOQL", "REST API", "MuleSoft", "Heroku", "Tableau"]}
        benefits={[
          "Increase sales productivity and close rates",
          "Improve customer satisfaction scores",
          "Automate workflows and reduce manual work",
          "Get 360° view of customers"
        ]}
      />
    </Layout>
  );
};

export default Salesforce;
