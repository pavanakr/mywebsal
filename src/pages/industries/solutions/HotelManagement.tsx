import { Plane, Building2, Users, Calendar, CreditCard, Star } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const HotelManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={Building2}
      color="from-indigo-500 to-purple-600"
      parentIndustry="Travel & Hospitality"
      parentHref="/industries/travel-hospitality"
      name="Hotel Management Platforms"
      tagline="Complete Hospitality Operations"
      description="Comprehensive property management systems for hotels and resorts. Our solutions handle reservations, front desk, housekeeping, revenue management, and guest experience in one unified platform."
      stats={[
        { value: "1000+", label: "Properties" },
        { value: "20%", label: "Revenue Increase" },
        { value: "50%", label: "Faster Check-in" },
        { value: "4.9★", label: "Guest Satisfaction" },
      ]}
      features={[
        {
          title: "Reservation Management",
          description: "Channel manager with real-time inventory sync across OTAs.",
          icon: Calendar,
        },
        {
          title: "Front Desk Operations",
          description: "Check-in/out, room assignments, and guest preferences.",
          icon: Users,
        },
        {
          title: "Revenue Management",
          description: "Dynamic pricing, forecasting, and yield optimization.",
          icon: CreditCard,
        },
        {
          title: "Guest Experience",
          description: "Mobile check-in, keyless entry, and personalized services.",
          icon: Star,
        },
      ]}
      benefits={[
        "Maximize occupancy with smart pricing",
        "Reduce overbookings with real-time sync",
        "Delight guests with personalized service",
        "Streamline operations across departments",
        "Gain insights from comprehensive reporting",
        "Integrate with existing systems easily",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Booking.com API", "IoT Integration", "Redis"]}
      useCases={[
        { title: "Boutique Hotels", description: "Personalized guest experience management." },
        { title: "Hotel Chains", description: "Multi-property centralized operations." },
        { title: "Resorts & Spas", description: "Full-service resort management." },
        { title: "Vacation Rentals", description: "Short-term rental property management." },
        { title: "Hostels", description: "Budget accommodation with dormitory management." },
        { title: "Serviced Apartments", description: "Extended stay property operations." },
      ]}
    />
  );
};

export default HotelManagement;