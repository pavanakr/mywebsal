import { Heart, Video, FileText, Shield, Calendar, Users, BarChart3 } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const HealthcareSolutions = () => {
  return (
    <SubIndustryDetailPage
      icon={Heart}
      color="from-red-500 to-red-600"
      parentIndustry="Healthcare"
      parentHref="/industries/healthcare"
      name="Healthcare Solutions"
      tagline="HIPAA-Compliant Healthcare Technology Solutions"
      description="Build secure, compliant healthcare applications including telemedicine, EHR systems, and patient engagement platforms."
      stats={[{ value: "HIPAA", label: "Compliant" }, { value: "1M+", label: "Patients" }, { value: "99.99%", label: "Uptime" }, { value: "50+", label: "Integrations" }]}
      features={[
        { title: "Telemedicine", description: "Video consultations with doctors.", icon: Video },
        { title: "EHR Integration", description: "Electronic health records.", icon: FileText },
        { title: "HIPAA Security", description: "Compliant data handling.", icon: Shield },
        { title: "Appointment Booking", description: "Online scheduling system.", icon: Calendar },
        { title: "Patient Portal", description: "Patient self-service portal.", icon: Users },
        { title: "Analytics", description: "Healthcare analytics dashboard.", icon: BarChart3 },
      ]}
      useCases={[
        { title: "Telemedicine", description: "Virtual doctor visits." },
        { title: "Patient Portals", description: "Self-service health management." },
        { title: "EHR Systems", description: "Electronic health records." },
        { title: "Remote Monitoring", description: "IoT health monitoring." },
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "HL7 FHIR", "WebRTC", "Twilio", "Docker"]}
      benefits={["HIPAA compliant", "Secure by design", "Interoperable", "Scalable", "Patient-centric"]}
    />
  );
};

export default HealthcareSolutions;
