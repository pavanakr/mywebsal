import { DollarSign } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const FintechSolutions = () => {
  return (
    <ServiceDetailPage
      icon={DollarSign}
      color="from-green-500 to-green-600"
      title="FinTech Solutions"
      tagline="Next-generation financial technology."
      description="Build innovative fintech solutions including payment systems, lending platforms, investment apps, and banking solutions with security at the core."
      benefits={["PCI DSS compliance", "Real-time payments", "Fraud detection", "KYC/AML integration", "Open banking APIs", "Digital wallets", "Lending platforms", "Investment tools"]}
      process={[
        { number: "01", title: "Compliance Review", description: "Assess regulatory requirements." },
        { number: "02", title: "Security Architecture", description: "Design secure infrastructure." },
        { number: "03", title: "Core Development", description: "Build financial core systems." },
        { number: "04", title: "Integration", description: "Integrate banking and payment APIs." },
        { number: "05", title: "Security Audit", description: "Penetration testing and audits." },
        { number: "06", title: "Compliance Certification", description: "Achieve required certifications." },
      ]}
      technologies={["Plaid", "Stripe", "Dwolla", "Marqeta", "Alloy", "Socure", "Python", "Java", "PostgreSQL", "Redis"]}
      caseStudies={[
        { title: "FinVault", category: "Digital Banking", description: "Full-featured digital banking platform.", results: ["PCI compliant", "$10M processed"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "Lending Platform", category: "Lending", description: "P2P lending marketplace.", results: ["$50M funded", "5K borrowers"], image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop", href: "/portfolio/lending" },
        { title: "Payment Gateway", category: "Payments", description: "Multi-currency payment processing.", results: ["99.99% uptime", "100+ currencies"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/payments" },
      ]}
      useCases={["Digital banking", "Payment processing", "Lending platforms", "Investment apps", "Insurance tech", "Wealth management"]}
    />
  );
};

export default FintechSolutions;
