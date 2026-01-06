import { CaseStudyDetailPage } from '@/components/portfolio/CaseStudyDetailPage';

const FinVault = () => {
  return (
    <CaseStudyDetailPage
      title="FinVault Banking App"
      client="FinVault Technologies"
      industry="Fintech"
      duration="10 months"
      teamSize="12 engineers"
      heroImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=600&fit=crop"
      overview="A secure mobile banking solution with biometric authentication, instant transfers, and advanced fraud detection serving over 2 million active users."
      challenge="FinVault needed to build a modern mobile banking app that could compete with established banks while providing superior security and user experience. The challenge was to create a platform that handles millions of transactions daily, implements robust fraud detection, and maintains compliance with PCI DSS and banking regulations across multiple countries."
      solution="We developed a native mobile banking app for iOS and Android with a robust backend infrastructure. The solution includes biometric authentication, real-time fraud detection using machine learning, instant P2P transfers, and a comprehensive suite of banking features. The architecture ensures 99.99% uptime and processes transactions in under 100ms."
      features={[
        "Biometric authentication",
        "Instant money transfers",
        "Real-time transaction alerts",
        "AI fraud detection",
        "Bill payments",
        "Card management",
        "Budget tracking",
        "Savings goals",
        "Multi-currency accounts",
        "Investment features",
        "Customer support chat",
        "ATM locator",
      ]}
      technologies={[
        "Swift", "Kotlin", "Node.js", "Go",
        "PostgreSQL", "Redis", "Kafka", "TensorFlow",
        "AWS", "Kubernetes", "Stripe",
      ]}
      metrics={[
        { value: "2M+", label: "Active Users" },
        { value: "99.99%", label: "Uptime" },
        { value: "$5B+", label: "Transactions" },
        { value: "4.8", label: "App Store Rating" },
      ]}
      testimonial={{
        quote: "Working with Vertex Labs was a game-changer for our fintech startup. They understood our complex requirements and built a secure, scalable solution that our customers love.",
        author: "Michael Torres",
        role: "CTO, FinVault",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      }}
      screenshots={[
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
      ]}
    />
  );
};

export default FinVault;
