import { Plane, Map, Camera, Star, Users, Compass } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const TravelExperience = () => {
  return (
    <SubIndustryDetailPage
      icon={Compass}
      color="from-teal-500 to-emerald-600"
      parentIndustry="Travel & Hospitality"
      parentHref="/industries/travel-hospitality"
      name="Travel Experience Apps"
      tagline="Discover, Explore, Experience"
      description="Travel companion apps that enhance the journey with personalized recommendations, local guides, itinerary management, and social features. Our solutions make every trip memorable."
      stats={[
        { value: "2M+", label: "Active Users" },
        { value: "10K+", label: "Destinations" },
        { value: "4.7★", label: "App Rating" },
        { value: "85%", label: "Return Users" },
      ]}
      features={[
        {
          title: "Destination Discovery",
          description: "AI-powered recommendations based on interests and past trips.",
          icon: Compass,
        },
        {
          title: "Local Experiences",
          description: "Curated tours, activities, and hidden gems from locals.",
          icon: Map,
        },
        {
          title: "Travel Journal",
          description: "Photo sharing, trip logs, and memory preservation.",
          icon: Camera,
        },
        {
          title: "Social Features",
          description: "Connect with travelers, share tips, and plan group trips.",
          icon: Users,
        },
      ]}
      benefits={[
        "Enhance traveler satisfaction with personalization",
        "Increase bookings through inspiration content",
        "Build community and user engagement",
        "Monetize through affiliate partnerships",
        "Collect valuable travel preference data",
        "Provide offline access for travelers",
      ]}
      technologies={["React Native", "Node.js", "PostgreSQL", "AWS", "TensorFlow", "MapBox", "Firebase", "CDN"]}
      useCases={[
        { title: "Travel Inspiration Apps", description: "Discover new destinations and experiences." },
        { title: "City Guide Apps", description: "Local exploration with offline maps." },
        { title: "Adventure Travel", description: "Hiking, diving, and outdoor activity platforms." },
        { title: "Cultural Tourism", description: "Heritage sites and cultural experiences." },
        { title: "Food & Wine Tours", description: "Culinary travel and tasting experiences." },
        { title: "Solo Traveler Communities", description: "Connect solo travelers for group trips." },
      ]}
    />
  );
};

export default TravelExperience;