import { Building2, MapPin, Camera, BarChart, Users, Key } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const RealEstate = () => {
  return (
    <IndustryDetailPage
      icon={Building2}
      color="from-blue-500 to-blue-600"
      name="Real Estate"
      tagline="PropTech Innovation Solutions"
      description="We build cutting-edge property technology solutions that transform how real estate is bought, sold, managed, and experienced. From virtual tours to property management platforms, we deliver PropTech that drives results."
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
          title: "Transaction Complexity",
          description: "Managing complex multi-party transactions with numerous documents and approvals.",
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
          title: "Property Management Systems",
          description: "Comprehensive PMS for tenant management, maintenance, and accounting.",
          icon: Key,
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
        "Lead Generation Tools",
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
          title: "RentFlow Manager",
          description: "Property management platform for landlords and property managers.",
          results: ["10K+ units", "60% less admin"],
          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
          href: "/portfolio/rentflow",
        },
        {
          title: "HomeMatch AI",
          description: "AI-powered property recommendation engine for buyers.",
          results: ["90% match accuracy", "50% faster search"],
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
          href: "/portfolio/homematch",
        },
      ]}
    />
  );
};

export default RealEstate;
