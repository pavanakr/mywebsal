import { Smartphone } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const IOSDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={Smartphone}
      color="from-gray-700 to-gray-800"
      title="iOS App Development"
      tagline="Premium native iOS applications that deliver exceptional user experiences."
      description="We build stunning iOS apps using Swift and SwiftUI, leveraging the full power of Apple's ecosystem. From iPhones to Apple Watch, we create seamless experiences across all Apple devices."
      benefits={[
        "Native Swift development",
        "SwiftUI expertise",
        "Apple design guidelines",
        "App Store optimization",
        "HealthKit integration",
        "ARKit experiences",
        "CoreML & AI features",
        "Apple Pay support",
      ]}
      process={[
        { number: "01", title: "Discovery", description: "Define app requirements and target audience." },
        { number: "02", title: "UI/UX Design", description: "Design interfaces following Apple HIG." },
        { number: "03", title: "Development", description: "Native Swift development with best practices." },
        { number: "04", title: "Testing", description: "Device testing on multiple iOS versions." },
        { number: "05", title: "App Store Submission", description: "Complete submission and approval process." },
        { number: "06", title: "Post-Launch Support", description: "Updates, maintenance, and feature additions." },
      ]}
      technologies={["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "CoreML", "HealthKit", "Combine", "App Clips"]}
      caseStudies={[
        { title: "FinVault iOS", category: "Fintech", description: "Premium banking app with biometric security.", results: ["4.9 rating", "Featured by Apple"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "HealthPulse", category: "Healthcare", description: "HealthKit-integrated wellness tracking.", results: ["1M downloads", "HIPAA compliant"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "ShopSphere", category: "E-commerce", description: "Native shopping with Apple Pay.", results: ["Top 10 Shopping", "2M downloads"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
      ]}
      useCases={["iPhone & iPad apps", "Apple Watch apps", "tvOS apps", "iMessage extensions", "Widgets", "CarPlay apps"]}
    />
  );
};

export default IOSDevelopment;
