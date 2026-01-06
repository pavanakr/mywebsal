import { Building2, MapPin, Camera, BarChart, Key, HardHat } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const RealEstateConstruction = () => {
  return (
    <IndustryDetailPage
      icon={Building2}
      color="from-blue-500 to-blue-600"
      name="Real Estate & Construction"
      tagline="PropTech & Construction Innovation"
      description="We build cutting-edge property technology and construction management solutions that transform how real estate is bought, sold, managed, and how projects are executed."
      stats={[
        { value: "50K+", label: "Properties Listed" },
        { value: "35%", label: "Faster Sales" },
        { value: "$2B+", label: "Transaction Value" },
        { value: "1M+", label: "Virtual Tours" },
      ]}
      challenges={[
        {
          title: "Property Discovery",
          description: "Helping buyers find the right properties among millions of listings efficiently.",
        },
        {
          title: "Virtual Viewing Experience",
          description: "Enabling remote property viewing that captures the true feel of a space.",
        },
        {
          title: "Project Management",
          description: "Tracking construction progress, managing contractors, and staying on budget.",
        },
        {
          title: "Property Management",
          description: "Streamlining operations for landlords managing multiple properties and tenants.",
        },
        {
          title: "Market Intelligence",
          description: "Providing accurate valuations and market insights for informed decisions.",
        },
        {
          title: "Lead Generation",
          description: "Converting website visitors into qualified leads for agents and developers.",
        },
      ]}
      solutions={[
        {
          title: "Property Listing Platforms",
          description: "Feature-rich listing platforms with advanced search, maps, and lead management.",
          icon: Building2,
        },
        {
          title: "Virtual Tour Technology",
          description: "3D virtual tours, AR visualization, and interactive floor plans for remote viewing.",
          icon: Camera,
        },
        {
          title: "Construction Management",
          description: "Project tracking, contractor coordination, and real-time progress monitoring.",
          icon: HardHat,
        },
        {
          title: "Real Estate Analytics",
          description: "Market analytics, automated valuations, and investment analysis tools.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "MLS/IDX Integration",
        "Virtual Tour Development",
        "Property Management",
        "CRM for Real Estate",
        "Automated Valuations",
        "Transaction Management",
        "Construction Tracking",
        "Investment Analytics",
      ]}
      caseStudies={[
        {
          title: "PropView360",
          description: "Virtual property tour platform with AI-powered recommendations.",
          results: ["50K+ tours", "35% faster sales"],
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
          href: "/portfolio/propview",
        },
        {
          title: "BuildTrack Pro",
          description: "Construction project management with real-time progress tracking.",
          results: ["200+ projects", "25% faster delivery"],
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
          href: "/portfolio/buildtrack",
        },
        {
          title: "RentFlow Manager",
          description: "Property management platform for landlords and property managers.",
          results: ["10K+ units", "60% less admin"],
          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
          href: "/portfolio/rentflow",
        },
      ]}
    />
  );
};

export default RealEstateConstruction;
