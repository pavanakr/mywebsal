import { Smartphone } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import heroMobileApps from '@/assets/hero-mobile-apps.png';

const MobileApps = () => {
  return (
    <ServiceDetailPage
      heroImage={heroMobileApps}
      icon={Smartphone}
      color="from-violet-500 to-violet-600"
      title="Mobile App Development Services for iOS & Android"
      tagline="Native & Cross-Platform App Development. Secure, Scalable & User-Focused Apps. End-to-End Mobile Solutions."
      description="We build mobile applications that users love and businesses rely on. Whether you need a native app for maximum performance or a cross-platform solution for faster time-to-market, our mobile team delivers exceptional results."
      benefits={[
        "Native & cross-platform",
        "Intuitive UX design",
        "Offline functionality",
        "Push notifications",
        "App Store optimization",
        "Analytics integration",
        "Secure data handling",
        "Regular updates & support",
      ]}
      process={[
        {
          number: "01",
          title: "Product Discovery",
          description: "Define your app's value proposition, target users, and key features.",
        },
        {
          number: "02",
          title: "Platform Strategy",
          description: "Choose the right approach: native iOS/Android or cross-platform development.",
        },
        {
          number: "03",
          title: "UI/UX Design",
          description: "Design intuitive, platform-specific interfaces that users love.",
        },
        {
          number: "04",
          title: "Development & Testing",
          description: "Build and rigorously test on real devices across OS versions.",
        },
        {
          number: "05",
          title: "App Store Submission",
          description: "Handle the submission process and optimize for discoverability.",
        },
        {
          number: "06",
          title: "Post-Launch Support",
          description: "Monitor performance, gather feedback, and deliver regular updates.",
        },
      ]}
      technologies={[
        "Swift", "SwiftUI", "Kotlin", "Jetpack Compose",
        "React Native", "Flutter", "Expo",
        "Firebase", "Realm", "SQLite", "Core Data",
        "Push Notifications", "In-App Purchases",
        "ARKit", "ARCore", "HealthKit", "Google Fit",
      ]}
      caseStudies={[
        {
          title: "FinVault Banking App",
          category: "Fintech",
          description: "Secure mobile banking solution with biometric authentication and instant transfers.",
          results: ["2M+ active users", "4.8 star rating"],
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
          href: "/portfolio/finvault",
        },
        {
          title: "Fitness Tracking App",
          category: "Health & Fitness",
          description: "Comprehensive fitness app with workout tracking, nutrition, and social features.",
          results: ["500K downloads", "85% retention"],
          image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
          href: "/portfolio/fitness-app",
        },
        {
          title: "Food Delivery Platform",
          category: "On-Demand",
          description: "Full-featured delivery app with real-time tracking and driver management.",
          results: ["50K daily orders", "15 min avg delivery"],
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
          href: "/portfolio/food-delivery",
        },
      ]}
      useCases={[
        "Consumer Mobile Apps",
        "Enterprise Mobile Solutions",
        "On-Demand Service Apps",
        "Social & Communication Apps",
        "Health & Fitness Apps",
        "E-commerce Mobile Apps",
      ]}
    />
  );
};

export default MobileApps;
