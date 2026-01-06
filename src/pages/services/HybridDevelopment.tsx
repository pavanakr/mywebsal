import { Layers } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const HybridDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={Layers}
      color="from-cyan-500 to-cyan-600"
      title="Hybrid App Development"
      tagline="Cross-platform apps that deliver native experiences from a single codebase."
      description="Build beautiful, high-performance apps for iOS, Android, and web using React Native and Flutter. Reduce development time and costs while maintaining native quality."
      benefits={[
        "Single codebase",
        "Native performance",
        "Faster time to market",
        "Cost-effective development",
        "Consistent UX across platforms",
        "Easy maintenance",
        "Hot reload development",
        "Large community support",
      ]}
      process={[
        { number: "01", title: "Platform Strategy", description: "Choose between React Native, Flutter, or other frameworks." },
        { number: "02", title: "UI/UX Design", description: "Design adaptive interfaces for both platforms." },
        { number: "03", title: "Development", description: "Shared codebase with platform-specific optimizations." },
        { number: "04", title: "Platform Testing", description: "Testing on both iOS and Android devices." },
        { number: "05", title: "Dual Store Launch", description: "Submit to both App Store and Play Store." },
        { number: "06", title: "Unified Support", description: "Single codebase maintenance and updates." },
      ]}
      technologies={["React Native", "Flutter", "Dart", "TypeScript", "Expo", "Firebase", "Redux", "MobX", "GraphQL", "Native Modules"]}
      caseStudies={[
        { title: "ShopSphere", category: "E-commerce", description: "Cross-platform shopping app.", results: ["60% dev cost savings", "4.7 rating"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
        { title: "HealthPulse", category: "Healthcare", description: "Patient engagement on iOS and Android.", results: ["500K downloads", "HIPAA compliant"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "LogiTrack", category: "Logistics", description: "Fleet management across platforms.", results: ["Real-time tracking", "30% efficiency gain"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/logitrack" },
      ]}
      useCases={["Consumer apps", "MVP development", "Enterprise apps", "E-commerce platforms", "Social apps", "On-demand services"]}
    />
  );
};

export default HybridDevelopment;
