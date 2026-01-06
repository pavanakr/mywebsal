import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { Heart, Shield, MessageCircle, MapPin, Sparkles, Users } from "lucide-react";

const Dating = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Dating App Solutions"
        subtitle="Build meaningful connection platforms"
        description="Create engaging dating and social networking applications with advanced matching algorithms, secure messaging, and modern engagement features."
        icon={<Heart className="w-12 h-12" />}
        features={[
          {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Smart Matching",
            description: "AI-powered matching based on preferences and behavior."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Safety Features",
            description: "Profile verification, reporting, and moderation tools."
          },
          {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Secure Chat",
            description: "End-to-end encrypted messaging with media sharing."
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location-Based",
            description: "Discover matches nearby with geolocation features."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Social Features",
            description: "Events, groups, and community engagement."
          },
          {
            icon: <Heart className="w-6 h-6" />,
            title: "Premium Features",
            description: "Subscription tiers with exclusive matching features."
          }
        ]}
        benefits={[
          "Engage users with gamified experiences",
          "Build trust with verified profiles",
          "Monetize with premium subscriptions",
          "Ensure user safety with moderation"
        ]}
        useCases={[
          "General dating apps",
          "Niche community platforms",
          "Professional networking",
          "Friendship and social apps"
        ]}
      />
    </Layout>
  );
};

export default Dating;
