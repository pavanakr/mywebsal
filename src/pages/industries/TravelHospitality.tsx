import { Plane, Hotel, Calendar, Globe, CreditCard, Users } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';
import heroTravelImage from '@/assets/hero-travel.png';

const TravelHospitality = () => {
  return (
    <IndustryDetailPage
      icon={Plane}
      color="from-sky-500 to-sky-600"
      name="Travel & Hospitality"
      tagline="Creating Seamless Travel Experiences"
      description="We build innovative technology solutions that transform how travelers discover, book, and experience their journeys while helping hospitality businesses optimize operations and maximize revenue."
      heroImage={heroTravelImage}
      stats={[
        { value: "40M+", label: "Bookings Processed" },
        { value: "35%", label: "Revenue Increase" },
        { value: "50+", label: "Travel Partners" },
        { value: "24/7", label: "Global Support" },
      ]}
      challenges={[
        {
          title: "Complex Booking Systems",
          description: "Managing multi-channel reservations across flights, hotels, and experiences.",
        },
        {
          title: "Dynamic Pricing",
          description: "Implementing real-time pricing strategies based on demand and competition.",
        },
        {
          title: "Customer Expectations",
          description: "Meeting demands for personalized, seamless, and instant service.",
        },
        {
          title: "Seasonal Fluctuations",
          description: "Managing capacity and resources during peak and off-peak periods.",
        },
        {
          title: "Global Operations",
          description: "Coordinating services across multiple time zones, currencies, and languages.",
        },
        {
          title: "Loyalty & Retention",
          description: "Building programs that drive repeat bookings and brand advocacy.",
        },
      ]}
      solutions={[
        {
          title: "Booking Platforms",
          description: "End-to-end booking systems with real-time inventory, multi-currency support, and seamless payments.",
          icon: Plane,
        },
        {
          title: "Property Management",
          description: "Comprehensive hotel management systems for reservations, housekeeping, and guest services.",
          icon: Hotel,
        },
        {
          title: "Revenue Management",
          description: "AI-powered pricing engines that optimize rates based on demand forecasting and market conditions.",
          icon: Calendar,
        },
        {
          title: "Travel Marketplaces",
          description: "Multi-vendor platforms connecting travelers with hotels, tours, and local experiences.",
          icon: Globe,
        },
      ]}
      capabilities={[
        "Booking Engine Development",
        "Channel Management Integration",
        "Revenue Optimization Systems",
        "Mobile Travel Apps",
        "Loyalty Program Platforms",
        "GDS & API Integrations",
        "Property Management Systems",
        "Dynamic Packaging Solutions",
      ]}
      caseStudies={[
        {
          title: "TravelEase Platform",
          description: "Built a comprehensive travel booking platform with AI-powered recommendations.",
          results: ["200% booking increase", "45% higher satisfaction"],
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
          href: "/portfolio/travelease",
        },
        {
          title: "HotelHub Management",
          description: "Developed an integrated property management system for a boutique hotel chain.",
          results: ["50% faster check-in", "25% increase in upsells"],
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
          href: "/portfolio/hotelhub",
        },
        {
          title: "ExploreLocal App",
          description: "Created a mobile app connecting tourists with local experiences and guides.",
          results: ["100K+ downloads", "4.8 star rating"],
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
          href: "/portfolio/explorelocal",
        },
      ]}
    />
  );
};

export default TravelHospitality;
