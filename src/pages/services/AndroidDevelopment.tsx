import { Smartphone } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const AndroidDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={Smartphone}
      color="from-green-500 to-green-600"
      title="Android App Development"
      tagline="Native Android applications for billions of users worldwide."
      description="We build high-performance Android apps using Kotlin and Jetpack Compose, delivering exceptional experiences across the diverse Android ecosystem."
      benefits={[
        "Modern Kotlin development",
        "Jetpack Compose UI",
        "Material Design 3",
        "Google Play optimization",
        "Wide device support",
        "Background processing",
        "Wear OS integration",
        "Android Auto support",
      ]}
      process={[
        { number: "01", title: "Requirements", description: "Define features and target Android versions." },
        { number: "02", title: "UI/UX Design", description: "Material Design-compliant interfaces." },
        { number: "03", title: "Development", description: "Kotlin-first development approach." },
        { number: "04", title: "Testing", description: "Testing across device configurations." },
        { number: "05", title: "Play Store Launch", description: "Optimized store listing and launch." },
        { number: "06", title: "Maintenance", description: "Updates and feature enhancements." },
      ]}
      technologies={["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Dagger Hilt", "Coroutines", "Flow", "WorkManager", "Firebase", "Material 3"]}
      caseStudies={[
        { title: "HealthPulse Android", category: "Healthcare", description: "Health tracking with Google Fit integration.", results: ["1M+ downloads", "4.8 rating"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "FinVault Android", category: "Fintech", description: "Secure banking with biometric auth.", results: ["500K users", "99.9% uptime"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "LogiTrack Driver", category: "Logistics", description: "Real-time delivery tracking app.", results: ["50K drivers", "30% efficiency gain"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/logitrack" },
      ]}
      useCases={["Consumer apps", "Enterprise apps", "E-commerce", "Healthcare apps", "Fintech apps", "IoT companion apps"]}
    />
  );
};

export default AndroidDevelopment;
