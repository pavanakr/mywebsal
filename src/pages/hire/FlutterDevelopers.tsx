import { Layers } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const FlutterDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Layers}
      color="from-cyan-500 to-cyan-600"
      title="Hire Flutter Developers"
      tagline="Cross-platform experts who build beautiful, natively compiled apps from a single codebase."
      description="Hire skilled Flutter developers who create stunning apps for iOS, Android, web, and desktop. Our Flutter experts deliver pixel-perfect UIs with native performance."
      benefits={[
        "Single codebase for all platforms",
        "Native performance",
        "Beautiful custom UIs",
        "Hot reload development",
        "Faster time to market",
        "Cost-effective solution",
        "Widget-rich ecosystem",
        "Easy maintenance",
      ]}
      process={[
        { number: "01", title: "Project Analysis", description: "Understand your multi-platform requirements and goals." },
        { number: "02", title: "Developer Matching", description: "Select Flutter experts with relevant domain experience." },
        { number: "03", title: "Team Formation", description: "Build the right-sized team for your project." },
        { number: "04", title: "Development Sprints", description: "Agile development with regular demonstrations." },
        { number: "05", title: "Cross-Platform Testing", description: "Thorough testing on all target platforms." },
        { number: "06", title: "Store Submission", description: "Help with App Store and Play Store publishing." },
      ]}
      technologies={["Flutter", "Dart", "Firebase", "GetX", "Bloc", "Riverpod", "Provider", "REST APIs", "GraphQL", "SQLite"]}
      caseStudies={[
        { title: "ShopSphere Mobile", category: "E-commerce", description: "Cross-platform shopping app with 1M+ users.", results: ["4.7 rating", "60% dev cost savings"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
        { title: "HealthPulse App", category: "Healthcare", description: "Patient engagement app on iOS and Android.", results: ["500K downloads", "HIPAA compliant"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "LogiTrack Suite", category: "Logistics", description: "Fleet management across mobile and web.", results: ["Real-time tracking", "30% efficiency gain"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/logitrack" },
      ]}
      useCases={["Consumer mobile apps", "Enterprise applications", "MVP development", "E-commerce platforms", "Social networking apps", "On-demand services"]}
    />
  );
};

export default FlutterDevelopers;
