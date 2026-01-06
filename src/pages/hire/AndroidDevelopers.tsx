import { Smartphone } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const AndroidDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Smartphone}
      color="from-green-500 to-green-600"
      title="Hire Android Developers"
      tagline="Expert Kotlin & Java Android developers ready to build high-performance mobile apps."
      description="Hire skilled Android developers who build exceptional apps for the world's most popular mobile platform. Our developers have deep expertise in Kotlin, Java, and Jetpack components."
      benefits={[
        "Kotlin & Java expertise",
        "Jetpack Compose specialists",
        "Material Design mastery",
        "Performance optimization",
        "Google Play publishing",
        "Flexible engagement models",
        "Timezone overlap options",
        "Quick team scaling",
      ]}
      process={[
        { number: "01", title: "Requirements Analysis", description: "Share your project needs and we match you with the right developers." },
        { number: "02", title: "Developer Selection", description: "Review profiles and conduct interviews with pre-vetted candidates." },
        { number: "03", title: "Team Onboarding", description: "Quick onboarding with your tools, processes, and codebase." },
        { number: "04", title: "Sprint Planning", description: "Integrate developers into your agile workflow seamlessly." },
        { number: "05", title: "Regular Updates", description: "Daily standups and weekly progress reports." },
        { number: "06", title: "Scale & Support", description: "Scale team up or down based on project needs." },
      ]}
      technologies={["Kotlin", "Java", "Jetpack Compose", "Room", "Retrofit", "Dagger Hilt", "Coroutines", "Flow", "Firebase", "Material Design 3"]}
      caseStudies={[
        { title: "HealthPulse Mobile", category: "Healthcare", description: "HIPAA-compliant health tracking Android app.", results: ["1M+ downloads", "4.8 rating"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "FinVault Android", category: "Fintech", description: "Secure banking app with biometric auth.", results: ["500K users", "99.9% uptime"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "LogiTrack Driver App", category: "Logistics", description: "Real-time delivery tracking for drivers.", results: ["50K drivers", "30% efficiency boost"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/logitrack" },
      ]}
      useCases={["Consumer mobile apps", "Enterprise Android solutions", "E-commerce apps", "Healthcare applications", "Fintech & banking apps", "IoT companion apps"]}
    />
  );
};

export default AndroidDevelopers;
