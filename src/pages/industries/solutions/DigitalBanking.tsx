import { Landmark, CreditCard, Shield, Smartphone, BarChart, Fingerprint } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const DigitalBanking = () => {
  return (
    <SubIndustryDetailPage
      icon={Landmark}
      color="from-emerald-500 to-emerald-600"
      parentIndustry="Banking & Finance"
      parentHref="/industries/banking-finance"
      name="Digital Banking Platform"
      tagline="Digital Banking Platform Development"
      description="Build secure, scalable digital banking solutions that deliver modern banking experiences with account management, payments, and financial services."
      stats={[
        { value: "$10B+", label: "Transactions Processed" },
        { value: "2M+", label: "Active Users" },
        { value: "99.99%", label: "Uptime" },
        { value: "PCI-DSS", label: "Compliant" },
      ]}
      features={[
        {
          title: "Account Management",
          description: "Full-featured account opening, management, and real-time balance tracking.",
          icon: Landmark,
        },
        {
          title: "Payment Processing",
          description: "Instant transfers, bill payments, and multi-currency transaction support.",
          icon: CreditCard,
        },
        {
          title: "Fraud Detection",
          description: "AI-powered transaction monitoring and real-time fraud prevention systems.",
          icon: Shield,
        },
        {
          title: "Mobile Banking Apps",
          description: "Native iOS and Android apps with biometric authentication and offline support.",
          icon: Smartphone,
        },
        {
          title: "Financial Analytics",
          description: "Personal finance management tools with spending insights and budgeting.",
          icon: BarChart,
        },
        {
          title: "Biometric Security",
          description: "Face ID, fingerprint, and voice authentication for secure access.",
          icon: Fingerprint,
        },
      ]}
      useCases={[
        {
          title: "Neobanks",
          description: "Build full-featured digital-only banks from the ground up.",
        },
        {
          title: "Credit Unions",
          description: "Modernize member services with digital banking capabilities.",
        },
        {
          title: "Regional Banks",
          description: "Digital transformation for traditional banking institutions.",
        },
        {
          title: "Embedded Finance",
          description: "Banking-as-a-Service for non-financial companies.",
        },
        {
          title: "Investment Platforms",
          description: "Robo-advisors and self-directed investment accounts.",
        },
        {
          title: "Lending Platforms",
          description: "Digital loan origination and servicing systems.",
        },
      ]}
      technologies={[
        "Java",
        "Spring Boot",
        "React",
        "React Native",
        "PostgreSQL",
        "Redis",
        "Apache Kafka",
        "Kubernetes",
        "AWS",
        "Plaid",
        "Stripe",
        "OAuth 2.0",
      ]}
      benefits={[
        "Launch digital banking products faster",
        "Reduce operational costs significantly",
        "Improve customer acquisition and retention",
        "Ensure regulatory compliance (PCI-DSS, SOC2)",
        "Scale securely with cloud infrastructure",
        "Integrate with core banking systems",
        "Provide 24/7 banking services",
        "Personalize customer experiences with AI",
      ]}
    />
  );
};

export default DigitalBanking;
