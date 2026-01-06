import { Smartphone } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const MobileDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Smartphone}
      color="from-indigo-500 to-indigo-600"
      title="Hire Mobile App Developers"
      tagline="Expert mobile developers for iOS, Android, and cross-platform applications."
      description="Hire skilled mobile app developers with expertise in native iOS, Android, and cross-platform development. Build world-class mobile experiences that users love."
      benefits={[
        "Native & cross-platform experts",
        "UI/UX focused development",
        "Performance optimization",
        "App Store expertise",
        "Offline-first architecture",
        "Push notification systems",
        "Analytics integration",
        "Ongoing maintenance",
      ]}
      process={[
        { number: "01", title: "Requirements Review", description: "Analyze your mobile app vision and technical needs." },
        { number: "02", title: "Platform Strategy", description: "Recommend native, hybrid, or cross-platform approach." },
        { number: "03", title: "Team Assembly", description: "Match developers with relevant industry experience." },
        { number: "04", title: "Agile Sprints", description: "Iterative development with regular app demos." },
        { number: "05", title: "Quality Assurance", description: "Device testing and performance optimization." },
        { number: "06", title: "Launch Support", description: "App store submission and post-launch support." },
      ]}
      technologies={["Swift", "Kotlin", "React Native", "Flutter", "SwiftUI", "Jetpack Compose", "Firebase", "Core Data", "Room", "GraphQL"]}
      caseStudies={[
        { title: "FinVault Mobile", category: "Fintech", description: "Secure mobile banking with biometric authentication.", results: ["500K users", "4.8 rating"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "HealthPulse", category: "Healthcare", description: "Patient health tracking and telemedicine app.", results: ["1M downloads", "HIPAA compliant"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "ShopSphere", category: "E-commerce", description: "Feature-rich shopping experience on mobile.", results: ["2M+ orders", "40% conversion boost"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
      ]}
      useCases={["Consumer apps", "Enterprise mobile solutions", "E-commerce apps", "Healthcare apps", "Fintech applications", "Social media platforms"]}
    />
  );
};

export default MobileDevelopers;
