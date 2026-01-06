import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { Wallet, Shield, Smartphone, CreditCard, TrendingUp, Globe } from "lucide-react";

const EWallet = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Digital Wallet Solutions"
        subtitle="Secure, feature-rich e-wallet platforms"
        description="Build comprehensive digital wallet solutions that enable seamless payments, money transfers, and financial management for your users."
        icon={<Wallet className="w-12 h-12" />}
        features={[
          {
            icon: <Wallet className="w-6 h-6" />,
            title: "Multi-Currency Wallets",
            description: "Support for multiple currencies and cryptocurrencies."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Advanced Security",
            description: "Biometric authentication and encryption for secure transactions."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile-First Design",
            description: "Intuitive mobile apps for iOS and Android platforms."
          },
          {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Payment Integration",
            description: "Integration with banks, cards, and payment networks."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Financial Insights",
            description: "Spending analytics and budget management features."
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Cross-Border Transfers",
            description: "International money transfers with competitive rates."
          }
        ]}
        benefits={[
          "Enable instant, secure digital payments",
          "Reduce transaction costs for users and merchants",
          "Increase customer engagement with loyalty features",
          "Meet regulatory compliance requirements"
        ]}
        useCases={[
          "Peer-to-peer money transfers",
          "Bill payments and utilities",
          "Online and in-store purchases",
          "Savings and investment features"
        ]}
      />
    </Layout>
  );
};

export default EWallet;
