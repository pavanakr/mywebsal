import { Building2, Camera, Eye, Smartphone, Globe, Users } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const VirtualTour = () => {
  return (
    <SubIndustryDetailPage
      icon={Camera}
      color="from-cyan-500 to-blue-600"
      parentIndustry="Real Estate & Construction"
      parentHref="/industries/real-estate-construction"
      name="Virtual Tour Technology"
      tagline="Immersive Property Experiences"
      description="We build cutting-edge virtual tour platforms that let buyers explore properties from anywhere. Our solutions feature 360° photography, 3D walkthroughs, augmented reality staging, and interactive floor plans."
      stats={[
        { value: "500K+", label: "Virtual Tours" },
        { value: "40%", label: "More Inquiries" },
        { value: "60%", label: "Time Saved" },
        { value: "4.9★", label: "User Rating" },
      ]}
      features={[
        {
          title: "360° Virtual Tours",
          description: "High-resolution panoramic tours with hotspots and navigation.",
          icon: Camera,
        },
        {
          title: "3D Walkthroughs",
          description: "Matterport-style dollhouse views and guided property tours.",
          icon: Eye,
        },
        {
          title: "AR Staging",
          description: "Augmented reality furniture placement and interior visualization.",
          icon: Smartphone,
        },
        {
          title: "Interactive Floor Plans",
          description: "Clickable floor plans with room measurements and dimensions.",
          icon: Building2,
        },
        {
          title: "Web & Mobile Access",
          description: "Browser-based tours with VR headset support and mobile apps.",
          icon: Globe,
        },
        {
          title: "Live Virtual Showings",
          description: "Agent-led virtual tours with video chat and screen sharing.",
          icon: Users,
        },
      ]}
      benefits={[
        "Increase property inquiries by 40%",
        "Reduce unnecessary in-person viewings",
        "Attract international and remote buyers",
        "Showcase properties 24/7 worldwide",
        "Stand out from competition with innovation",
        "Reduce time-on-market for listings",
        "Enable pre-construction sales visualization",
        "Improve buyer confidence before viewing",
      ]}
      technologies={["React", "Three.js", "WebGL", "Matterport SDK", "ARKit", "ARCore", "Node.js", "AWS"]}
      useCases={[
        { title: "Residential Listings", description: "Single-family homes and condos for sale." },
        { title: "Luxury Properties", description: "High-end estates with premium tour experiences." },
        { title: "Commercial Real Estate", description: "Office spaces and retail property tours." },
        { title: "New Developments", description: "Pre-construction visualization and sales." },
        { title: "Rental Properties", description: "Apartment tours for remote applicants." },
        { title: "Vacation Rentals", description: "Airbnb and holiday property showcases." },
      ]}
    />
  );
};

export default VirtualTour;