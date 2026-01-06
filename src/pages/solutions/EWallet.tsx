import { Wallet, CreditCard, Shield, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const EWallet = () => {
  return (
    <SubIndustryDetailPage
      icon={Wallet}
      color="from-green-500 to-green-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="E-Wallet"
      tagline="Secure Digital Wallet Solutions for Modern Payments"
      description="Build secure, compliant e-wallet applications with payments, transfers, and financial management features."
      stats={[{ value: "$10B+", label: "Transactions" }, { value: "5M+", label: "Users" }, { value: "99.99%", label: "Uptime" }, { value: "PCI DSS", label: "Compliant" }]}
      features={[
        { title: "Digital Payments", description: "Send and receive money instantly.", icon: CreditCard },
        { title: "Bank-Grade Security", description: "Encryption and fraud protection.", icon: Shield },
        { title: "Instant Transfers", description: "Real-time money transfers.", icon: Zap },
        { title: "Multi-Currency", description: "Support multiple currencies.", icon: Globe },
        { title: "User Management", description: "KYC and account management.", icon: Users },
        { title: "Transaction Analytics", description: "Spending insights and reports.", icon: BarChart3 },
      ]}
      useCases={[
        { title: "Mobile Payments", description: "Pay with your phone." },
        { title: "P2P Transfers", description: "Send money to friends." },
        { title: "Bill Payments", description: "Pay utilities and bills." },
        { title: "Merchant Payments", description: "Accept payments in-store." },
      ]}
      technologies={["React Native", "Node.js", "PostgreSQL", "Redis", "Stripe", "Plaid", "AWS", "Blockchain"]}
      benefits={["PCI DSS compliant", "Real-time processing", "Fraud detection", "Scalable architecture", "White-label ready"]}
    />
  );
};

export default EWallet;
