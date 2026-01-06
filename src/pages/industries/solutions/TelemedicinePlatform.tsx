import { Video, Heart, Calendar, FileText, Shield, Smartphone } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const TelemedicinePlatform = () => {
  return (
    <SubIndustryDetailPage
      icon={Video}
      color="from-red-500 to-red-600"
      parentIndustry="Healthcare"
      parentHref="/industries/healthcare"
      name="Telemedicine Platform"
      tagline="Telemedicine Platform Development"
      description="Build HIPAA-compliant telemedicine platforms that enable virtual consultations, remote patient monitoring, and seamless healthcare delivery."
      stats={[
        { value: "500K+", label: "Virtual Visits" },
        { value: "100+", label: "Healthcare Clients" },
        { value: "99.9%", label: "Uptime" },
        { value: "HIPAA", label: "Compliant" },
      ]}
      features={[
        {
          title: "HD Video Consultations",
          description: "Crystal-clear video calls with screen sharing, virtual waiting rooms, and recording capabilities.",
          icon: Video,
        },
        {
          title: "Remote Patient Monitoring",
          description: "Integration with wearables and IoT devices for continuous health data collection.",
          icon: Heart,
        },
        {
          title: "Appointment Scheduling",
          description: "Smart scheduling with provider availability, automated reminders, and calendar sync.",
          icon: Calendar,
        },
        {
          title: "E-Prescriptions",
          description: "Digital prescription management with pharmacy integration and medication tracking.",
          icon: FileText,
        },
        {
          title: "HIPAA Compliance",
          description: "End-to-end encryption, audit logs, and security measures for complete regulatory compliance.",
          icon: Shield,
        },
        {
          title: "Mobile Apps",
          description: "Native iOS and Android apps for patients and providers with offline capabilities.",
          icon: Smartphone,
        },
      ]}
      useCases={[
        {
          title: "Primary Care",
          description: "Virtual visits for routine checkups, follow-ups, and minor health concerns.",
        },
        {
          title: "Mental Health",
          description: "Therapy sessions, psychiatric consultations, and behavioral health support.",
        },
        {
          title: "Chronic Disease Management",
          description: "Ongoing monitoring and management of diabetes, hypertension, and other conditions.",
        },
        {
          title: "Specialty Consultations",
          description: "Remote access to specialists for second opinions and expert care.",
        },
        {
          title: "Urgent Care",
          description: "24/7 access to healthcare for non-emergency urgent care needs.",
        },
        {
          title: "Post-Surgical Follow-up",
          description: "Remote monitoring and check-ins after surgical procedures.",
        },
      ]}
      technologies={[
        "React",
        "React Native",
        "Node.js",
        "WebRTC",
        "PostgreSQL",
        "AWS HIPAA",
        "Twilio",
        "HL7 FHIR",
        "Stripe",
        "Redis",
        "Docker",
        "Kubernetes",
      ]}
      benefits={[
        "Expand healthcare access to underserved areas",
        "Reduce no-show rates with convenient virtual visits",
        "Lower overhead costs for healthcare providers",
        "Improve patient engagement and satisfaction",
        "Enable 24/7 healthcare availability",
        "Integrate seamlessly with existing EHR systems",
        "Ensure complete HIPAA compliance",
        "Scale rapidly with cloud infrastructure",
      ]}
    />
  );
};

export default TelemedicinePlatform;
