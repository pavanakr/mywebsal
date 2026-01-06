import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { Building, Search, MapPin, Camera, DollarSign, Users } from "lucide-react";

const RealEstateSolutions = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Real Estate Solutions"
        subtitle="Digital platforms for modern property businesses"
        description="Build comprehensive real estate platforms that streamline property listings, virtual tours, transactions, and property management for the digital age."
        icon={<Building className="w-12 h-12" />}
        features={[
          {
            icon: <Search className="w-6 h-6" />,
            title: "Property Search",
            description: "Advanced search with filters, maps, and saved searches."
          },
          {
            icon: <Camera className="w-6 h-6" />,
            title: "Virtual Tours",
            description: "360° virtual tours and 3D property walkthroughs."
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location Intelligence",
            description: "Neighborhood insights, amenities, and commute analysis."
          },
          {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Transaction Management",
            description: "Digital contracts, e-signatures, and payment processing."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Agent Management",
            description: "CRM tools for agents to manage leads and clients."
          },
          {
            icon: <Building className="w-6 h-6" />,
            title: "Property Management",
            description: "Tenant portals, maintenance requests, and rent collection."
          }
        ]}
        benefits={[
          "Increase property visibility and leads",
          "Reduce time-to-sale with virtual showings",
          "Streamline paperwork with digital transactions",
          "Improve tenant satisfaction with self-service portals"
        ]}
        useCases={[
          "Property listing portals",
          "Real estate marketplaces",
          "Property management systems",
          "Commercial real estate platforms"
        ]}
      />
    </Layout>
  );
};

export default RealEstateSolutions;
