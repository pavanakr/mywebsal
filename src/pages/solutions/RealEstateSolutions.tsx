import { Building2, Search, Map, Camera, Calendar, Users, BarChart3 } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const RealEstateSolutions = () => {
  return (
    <SubIndustryDetailPage
      icon={Building2}
      color="from-blue-500 to-blue-600"
      parentIndustry="Real Estate"
      parentHref="/industries/real-estate"
      name="Real Estate Solutions"
      tagline="Modern Real Estate Technology for Property Management"
      description="Build comprehensive real estate platforms with property listings, virtual tours, and management tools."
      stats={[{ value: "100K+", label: "Listings" }, { value: "50K+", label: "Users" }, { value: "10K+", label: "Transactions" }, { value: "4.8", label: "Rating" }]}
      features={[
        { title: "Property Listings", description: "Comprehensive property database.", icon: Building2 },
        { title: "Advanced Search", description: "Filter by location, price, type.", icon: Search },
        { title: "Map Integration", description: "Interactive property maps.", icon: Map },
        { title: "Virtual Tours", description: "360° property walkthroughs.", icon: Camera },
        { title: "Scheduling", description: "Book property viewings.", icon: Calendar },
        { title: "Agent Portal", description: "Agent and broker management.", icon: Users },
      ]}
      useCases={[
        { title: "Property Portals", description: "Buy, sell, rent listings." },
        { title: "Property Management", description: "Landlord and tenant tools." },
        { title: "Real Estate CRM", description: "Agent relationship management." },
        { title: "Virtual Tours", description: "3D property experiences." },
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "Elasticsearch", "Google Maps", "Matterport", "AWS", "Stripe"]}
      benefits={["SEO optimized", "Mobile responsive", "Lead generation", "Analytics", "Scalable"]}
    />
  );
};

export default RealEstateSolutions;
