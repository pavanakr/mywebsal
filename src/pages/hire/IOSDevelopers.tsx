import { Smartphone } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const IOSDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Smartphone}
      color="from-gray-700 to-gray-800"
      title="Hire iOS Developers"
      tagline="Expert Swift developers who build premium iOS applications."
      description="Hire skilled iOS developers who create exceptional apps for iPhone, iPad, Apple Watch, and Apple TV. Our developers are experts in Swift, SwiftUI, and the Apple ecosystem."
      benefits={[
        "Swift & SwiftUI expertise",
        "Apple design guidelines",
        "App Store optimization",
        "Core Data mastery",
        "ARKit & CoreML experience",
        "Apple Pay integration",
        "HealthKit development",
        "Widget development",
      ]}
      process={[
        { number: "01", title: "Project Scoping", description: "Define your iOS app requirements and target devices." },
        { number: "02", title: "Developer Selection", description: "Choose from our pool of vetted iOS specialists." },
        { number: "03", title: "Team Integration", description: "Seamless onboarding with your development workflow." },
        { number: "04", title: "Sprint Development", description: "Agile development with TestFlight releases." },
        { number: "05", title: "Quality Testing", description: "Device testing across iPhone and iPad models." },
        { number: "06", title: "App Store Launch", description: "Complete App Store submission and approval support." },
      ]}
      technologies={["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "CoreML", "Combine", "XCTest", "App Clips"]}
      caseStudies={[
        { title: "FinVault iOS", category: "Fintech", description: "Premium banking app with Face ID authentication.", results: ["4.9 App Store rating", "Featured by Apple"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "HealthPulse iOS", category: "Healthcare", description: "HealthKit-integrated wellness tracking app.", results: ["Apple Watch support", "1M users"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "ShopSphere iOS", category: "E-commerce", description: "Native shopping experience with Apple Pay.", results: ["Top 10 in Shopping", "2M downloads"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
      ]}
      useCases={["iPhone & iPad apps", "Apple Watch apps", "tvOS applications", "iMessage extensions", "App Clips", "SharePlay features"]}
    />
  );
};

export default IOSDevelopers;
