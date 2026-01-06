import { Building2, Home, Users, DollarSign, FileText, Bell } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const PropertyManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={Home}
      color="from-blue-500 to-cyan-600"
      parentIndustry="Real Estate & Construction"
      parentHref="/industries/real-estate-construction"
      name="Property Listing Platforms"
      tagline="Digital Real Estate Marketplace"
      description="Zillow-like property listing platforms that connect buyers, sellers, and agents. Our solutions feature advanced search, virtual tours, mortgage calculators, and lead management systems."
      stats={[
        { value: "1M+", label: "Listings" },
        { value: "500K", label: "Monthly Users" },
        { value: "30%", label: "Faster Sales" },
        { value: "95%", label: "Lead Accuracy" },
      ]}
      features={[
        {
          title: "Advanced Property Search",
          description: "Map-based search with filters for location, price, amenities, and more.",
          icon: Home,
        },
        {
          title: "Virtual Property Tours",
          description: "360° virtual tours and 3D walkthroughs for remote viewing.",
          icon: Building2,
        },
        {
          title: "Lead Management",
          description: "CRM integration for agents with automated follow-ups and scoring.",
          icon: Users,
        },
        {
          title: "Financial Tools",
          description: "Mortgage calculators, affordability analysis, and pre-qualification.",
          icon: DollarSign,
        },
      ]}
      benefits={[
        "Reach more buyers with digital listings",
        "Reduce time-to-sale with better matching",
        "Qualify leads before showings",
        "Provide immersive virtual experiences",
        "Automate listing syndication across portals",
        "Track performance with detailed analytics",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "Elasticsearch", "MapBox", "AWS", "Redis", "Twilio"]}
      useCases={[
        { title: "Residential Real Estate", description: "Home buying and selling portals." },
        { title: "Commercial Property", description: "Office, retail, and industrial listings." },
        { title: "Rental Marketplaces", description: "Apartment and rental home platforms." },
        { title: "Luxury Properties", description: "High-end real estate with premium features." },
        { title: "International Property", description: "Cross-border property search platforms." },
        { title: "New Developments", description: "Pre-construction and new build marketing." },
      ]}
    />
  );
};

export default PropertyManagement;