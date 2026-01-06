import { Landmark, Shield, CreditCard, BarChart, Lock, Zap } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const Fintech = () => {
  return (
    <IndustryDetailPage
      icon={Landmark}
      color="from-emerald-500 to-emerald-600"
      name="Fintech"
      tagline="Secure Financial Technology Solutions"
      description="We build secure, compliant financial platforms that transform how businesses and consumers manage money. From digital banking to payment processing, we deliver fintech solutions that scale."
      stats={[
        { value: "$5B+", label: "Transactions Processed" },
        { value: "99.99%", label: "Uptime SLA" },
        { value: "PCI DSS", label: "Certified" },
        { value: "2M+", label: "Active Users" },
      ]}
      challenges={[
        {
          title: "Security & Fraud Prevention",
          description: "Financial systems are prime targets for cybercriminals, requiring robust security measures.",
        },
        {
          title: "Regulatory Compliance",
          description: "Navigating complex regulations like PCI DSS, PSD2, SOX, and regional banking laws.",
        },
        {
          title: "Real-time Processing",
          description: "Modern users expect instant transactions, requiring high-performance infrastructure.",
        },
        {
          title: "Legacy System Integration",
          description: "Connecting modern fintech solutions with established banking infrastructure.",
        },
        {
          title: "User Trust & Adoption",
          description: "Building confidence in digital financial services while ensuring great UX.",
        },
        {
          title: "Global Scale",
          description: "Supporting multiple currencies, languages, and regional payment methods.",
        },
      ]}
      solutions={[
        {
          title: "Digital Banking Platforms",
          description: "Full-featured mobile and web banking solutions with account management, transfers, and payments.",
          icon: CreditCard,
        },
        {
          title: "Payment Processing",
          description: "Secure payment gateways, merchant services, and multi-currency transaction processing.",
          icon: Zap,
        },
        {
          title: "Fraud Detection & Prevention",
          description: "AI-powered fraud detection systems with real-time transaction monitoring and risk scoring.",
          icon: Shield,
        },
        {
          title: "Financial Analytics",
          description: "Advanced analytics for risk assessment, customer insights, and regulatory reporting.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "PCI DSS Compliance",
        "Digital Banking",
        "Payment Gateway Integration",
        "Blockchain & Cryptocurrency",
        "KYC/AML Solutions",
        "Fraud Detection",
        "Trading Platforms",
        "Regulatory Reporting",
      ]}
      caseStudies={[
        {
          title: "FinVault Banking App",
          description: "Secure mobile banking solution with biometric auth and instant transfers.",
          results: ["2M+ active users", "4.8 star rating"],
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
          href: "/portfolio/finvault",
        },
        {
          title: "PayStream Gateway",
          description: "Multi-currency payment processing platform for global merchants.",
          results: ["$5B+ processed", "150+ countries"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          href: "/portfolio/paystream",
        },
        {
          title: "FraudGuard AI",
          description: "Real-time fraud detection system using machine learning.",
          results: ["99.7% detection rate", "$50M fraud prevented"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          href: "/portfolio/fraudguard",
        },
      ]}
    />
  );
};

export default Fintech;
