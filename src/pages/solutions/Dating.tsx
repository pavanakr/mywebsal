import { Heart, Users, Shield, MessageSquare, MapPin, Sparkles, Bell } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const Dating = () => {
  return (
    <SubIndustryDetailPage
      icon={Heart}
      color="from-pink-500 to-pink-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="Dating App"
      tagline="Modern Dating Apps That Connect People Meaningfully"
      description="Build engaging dating platforms with smart matching, secure messaging, and features that foster genuine connections."
      stats={[{ value: "5M+", label: "Matches Made" }, { value: "85%", label: "User Retention" }, { value: "4.8", label: "App Rating" }, { value: "50K+", label: "Daily Users" }]}
      features={[
        { title: "Smart Matching", description: "AI-powered compatibility algorithms.", icon: Sparkles },
        { title: "User Profiles", description: "Rich profiles with photos and interests.", icon: Users },
        { title: "Safety First", description: "Verification and reporting systems.", icon: Shield },
        { title: "In-App Messaging", description: "Secure real-time chat features.", icon: MessageSquare },
        { title: "Location-Based", description: "Find matches nearby.", icon: MapPin },
        { title: "Push Notifications", description: "Engage users with timely alerts.", icon: Bell },
      ]}
      useCases={[
        { title: "Casual Dating", description: "Swipe-based matching apps." },
        { title: "Serious Relationships", description: "Compatibility-focused platforms." },
        { title: "Niche Dating", description: "Community-specific dating apps." },
        { title: "Social Discovery", description: "Friend-finding applications." },
      ]}
      technologies={["React Native", "Flutter", "Node.js", "MongoDB", "Firebase", "Socket.io", "AWS", "ML/AI"]}
      benefits={["Scalable architecture", "Engaging UX", "Secure messaging", "Monetization ready", "Analytics built-in"]}
    />
  );
};

export default Dating;
