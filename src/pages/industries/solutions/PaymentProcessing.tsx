import { CreditCard, Shield, Globe, Zap, BarChart, RefreshCw } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const PaymentProcessing = () => {
  return (
    <SubIndustryDetailPage
      icon={CreditCard}
      color="from-emerald-500 to-teal-600"
      parentIndustry="Banking & Finance"
      parentHref="/industries/banking-finance"
      name="Payment Processing Systems"
      tagline="Secure Payment Infrastructure"
      description="We build enterprise payment processing systems that handle millions of transactions with sub-second latency. Our solutions support multiple payment methods, currencies, and comply with PCI-DSS standards for maximum security."
      stats={[
        { value: "$10B+", label: "Processed Annually" },
        { value: "99.999%", label: "Uptime" },
        { value: "<100ms", label: "Latency" },
        { value: "PCI-DSS", label: "Compliant" },
      ]}
      features={[
        {
          title: "Multi-Payment Support",
          description: "Cards, bank transfers, digital wallets, crypto, and BNPL options.",
          icon: CreditCard,
        },
        {
          title: "Real-time Processing",
          description: "Sub-100ms transaction processing with instant confirmation.",
          icon: Zap,
        },
        {
          title: "Global Payments",
          description: "Multi-currency support with automatic FX conversion and local methods.",
          icon: Globe,
        },
        {
          title: "Security & Compliance",
          description: "PCI-DSS Level 1, tokenization, and 3D Secure authentication.",
          icon: Shield,
        },
        {
          title: "Reconciliation",
          description: "Automated settlement, reconciliation, and financial reporting.",
          icon: BarChart,
        },
        {
          title: "Recurring Billing",
          description: "Subscription management with retry logic and dunning.",
          icon: RefreshCw,
        },
      ]}
      benefits={[
        "Increase payment acceptance rates by 15%",
        "Reduce fraud losses with AI detection",
        "Lower transaction costs with smart routing",
        "Expand globally with local payment methods",
        "Improve cash flow with faster settlements",
        "Eliminate compliance burden with built-in security",
        "Scale to millions of transactions seamlessly",
        "Gain insights with real-time analytics",
      ]}
      technologies={["Java", "Kafka", "PostgreSQL", "Redis", "AWS", "Kubernetes", "HSM", "ISO 8583"]}
      useCases={[
        { title: "E-commerce Platforms", description: "Online retail checkout and payment processing." },
        { title: "Fintech Apps", description: "Digital wallets and neobank payment rails." },
        { title: "Subscription Businesses", description: "Recurring billing for SaaS and memberships." },
        { title: "Marketplaces", description: "Split payments and vendor payouts." },
        { title: "B2B Payments", description: "Invoice payments and corporate cards." },
        { title: "Cross-border Commerce", description: "International payments and FX services." },
      ]}
    />
  );
};

export default PaymentProcessing;