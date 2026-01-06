import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { DollarSign, CreditCard, Shield, TrendingUp, Wallet, Building } from "lucide-react";

const FintechSolutions = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="FinTech Solutions"
        subtitle="Next-generation financial technology"
        description="Build innovative fintech solutions including payment systems, lending platforms, investment apps, and banking solutions with security at the core."
        icon={<DollarSign className="w-12 h-12" />}
        features={[
          {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Payment Solutions",
            description: "Custom payment gateways and processing systems."
          },
          {
            icon: <Wallet className="w-6 h-6" />,
            title: "Digital Banking",
            description: "Neobank platforms and mobile banking apps."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Platforms",
            description: "Trading apps, robo-advisors, and wealth management."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Compliance & Security",
            description: "PCI DSS, SOC 2, and regulatory compliance."
          },
          {
            icon: <Building className="w-6 h-6" />,
            title: "Lending Platforms",
            description: "P2P lending, BNPL, and credit scoring systems."
          },
          {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Insurance Tech",
            description: "Digital insurance platforms and claims processing."
          }
        ]}
        technologies={["Stripe", "Plaid", "Open Banking", "KYC/AML", "PCI DSS", "AWS", "PostgreSQL", "Redis"]}
        benefits={[
          "Launch financial products faster",
          "Ensure regulatory compliance",
          "Reduce operational costs with automation",
          "Deliver exceptional user experiences"
        ]}
      />
    </Layout>
  );
};

export default FintechSolutions;
