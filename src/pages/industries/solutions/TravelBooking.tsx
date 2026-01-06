import { Plane, Calendar, MapPin, CreditCard, Globe, Star } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const TravelBooking = () => {
  return (
    <SubIndustryDetailPage
      icon={Plane}
      color="from-sky-500 to-blue-600"
      parentIndustry="Travel & Hospitality"
      parentHref="/industries/travel-hospitality"
      name="Booking & Reservation Systems"
      tagline="Seamless Travel Booking Experience"
      description="Expedia-like travel booking platforms that aggregate flights, hotels, and activities. Our solutions feature real-time inventory, dynamic pricing, and personalized recommendations for travelers."
      stats={[
        { value: "5M+", label: "Bookings/Year" },
        { value: "1000+", label: "Partners" },
        { value: "98%", label: "Confirmation Rate" },
        { value: "4.8★", label: "User Rating" },
      ]}
      features={[
        {
          title: "Multi-Supplier Integration",
          description: "Aggregate flights, hotels, and car rentals from multiple GDS systems.",
          icon: Globe,
        },
        {
          title: "Smart Search",
          description: "Flexible date search, price alerts, and personalized recommendations.",
          icon: MapPin,
        },
        {
          title: "Dynamic Pricing",
          description: "Real-time pricing optimization based on demand and availability.",
          icon: CreditCard,
        },
        {
          title: "Trip Planning",
          description: "Itinerary builder, trip sharing, and calendar integration.",
          icon: Calendar,
        },
      ]}
      benefits={[
        "Offer comprehensive travel options in one platform",
        "Maximize revenue with dynamic pricing",
        "Reduce booking abandonment with seamless UX",
        "Build loyalty with personalized experiences",
        "Automate confirmations and reminders",
        "Handle peak traffic during holidays",
      ]}
      technologies={["React", "Node.js", "Amadeus GDS", "Sabre", "PostgreSQL", "Redis", "Elasticsearch", "AWS"]}
      useCases={[
        { title: "Online Travel Agencies", description: "Full-service OTA platforms like Expedia." },
        { title: "Corporate Travel", description: "Business travel management and booking." },
        { title: "Tour Operators", description: "Package tour creation and distribution." },
        { title: "Airline Direct Booking", description: "Carrier-owned booking platforms." },
        { title: "Hotel Chain Reservations", description: "Multi-property booking systems." },
        { title: "Activity Marketplaces", description: "Tours, experiences, and attractions." },
      ]}
    />
  );
};

export default TravelBooking;