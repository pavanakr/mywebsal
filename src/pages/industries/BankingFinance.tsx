import { Landmark, Shield, CreditCard, BarChart, Smartphone, Lock } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const BankingFinance = () => {
  return (
    <IndustryDetailPage
      icon={Landmark}
      color="from-emerald-500 to-emerald-600"
      name="Banking & Finance"
      tagline="Secure Fintech Innovation"
      description="We build secure, compliant financial technology solutions that enable digital banking, payment processing, and investment management for financial institutions."
      stats={[
        { value: "$10B+", label: "Transactions Processed" },
        { value: "50+", label: "Financial Institutions" },
        { value: "99.99%", label: "System Uptime" },
        { value: "PCI-DSS", label: "Certified" },
      ]}
      challenges={[
        {
          title: "Security & Compliance",
          description: "Meeting stringent security requirements and regulatory compliance standards.",
        },
        {
          title: "Digital Transformation",
          description: "Modernizing legacy banking systems while ensuring business continuity.",
        },
        {
          title: "Customer Experience",
          description: "Delivering seamless digital banking experiences across all touchpoints.",
        },
        {
          title: "Fraud Prevention",
          description: "Detecting and preventing fraudulent transactions in real-time.",
        },
        {
          title: "Integration Complexity",
          description: "Integrating with core banking systems, payment networks, and third-party services.",
        },
        {
          title: "Data Privacy",
          description: "Protecting sensitive financial data while enabling analytics and personalization.",
        },
      ]}
      solutions={[
        {
          title: "Digital Banking Platforms",
          description: "Full-featured digital banking solutions with account management, transfers, and payments.",
          icon: Landmark,
        },
        {
          title: "Payment Processing",
          description: "Secure payment gateways, card processing, and real-time settlement systems.",
          icon: CreditCard,
        },
        {
          title: "Fraud Detection",
          description: "AI-powered fraud detection with real-time transaction monitoring and alerts.",
          icon: Shield,
        },
        {
          title: "Financial Analytics",
          description: "Risk analytics, customer insights, and regulatory reporting dashboards.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "Digital Banking",
        "Payment Processing",
        "Loan Management",
        "Fraud Detection",
        "KYC/AML Compliance",
        "Wealth Management",
        "Insurance Tech",
        "Blockchain Solutions",
      ]}
      caseStudies={[
        {
          title: "FinVault Digital",
          description: "Enterprise digital banking platform for a leading regional bank.",
          results: ["2M+ users", "99.99% uptime"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          href: "/portfolio/finvault",
        },
        {
          title: "PaySecure Gateway",
          description: "PCI-compliant payment gateway processing millions of transactions.",
          results: ["$5B+ processed", "0.01% fraud rate"],
          image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
          href: "/portfolio/paysecure",
        },
        {
          title: "WealthWise Pro",
          description: "Robo-advisory platform for automated investment management.",
          results: ["$500M AUM", "15K investors"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          href: "/portfolio/wealthwise",
        },
      ]}
    />
  );
};

export default BankingFinance;
