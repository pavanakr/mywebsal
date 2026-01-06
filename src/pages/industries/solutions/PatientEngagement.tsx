import { Heart, Smartphone, Bell, MessageSquare, Calendar, Star } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const PatientEngagement = () => {
  return (
    <SubIndustryDetailPage
      icon={Smartphone}
      color="from-rose-500 to-pink-600"
      parentIndustry="Healthcare"
      parentHref="/industries/healthcare"
      name="Patient Engagement Apps"
      tagline="Connected Healthcare Experience"
      description="We build patient engagement platforms that improve health outcomes through better communication, self-service tools, and personalized care journeys. Our solutions empower patients while reducing administrative burden on providers."
      stats={[
        { value: "2M+", label: "Active Patients" },
        { value: "45%", label: "No-Show Reduction" },
        { value: "4.8★", label: "App Rating" },
        { value: "30%", label: "Cost Savings" },
      ]}
      features={[
        {
          title: "Patient Portal",
          description: "Secure access to health records, test results, and care summaries.",
          icon: Heart,
        },
        {
          title: "Appointment Scheduling",
          description: "Self-service booking with provider availability and automated reminders.",
          icon: Calendar,
        },
        {
          title: "Secure Messaging",
          description: "HIPAA-compliant communication between patients and care teams.",
          icon: MessageSquare,
        },
        {
          title: "Push Notifications",
          description: "Medication reminders, appointment alerts, and health tips.",
          icon: Bell,
        },
        {
          title: "Health Tracking",
          description: "Symptom logging, vitals tracking, and wearable device integration.",
          icon: Smartphone,
        },
        {
          title: "Feedback & Surveys",
          description: "Patient satisfaction surveys and Net Promoter Score tracking.",
          icon: Star,
        },
      ]}
      benefits={[
        "Reduce no-show rates by up to 45%",
        "Improve patient satisfaction scores",
        "Decrease call center volume by 30%",
        "Enable proactive care management",
        "Increase treatment adherence",
        "Build stronger patient relationships",
        "Generate valuable patient feedback",
        "Support chronic disease management",
      ]}
      technologies={["React Native", "Node.js", "PostgreSQL", "AWS", "Twilio", "Firebase", "HealthKit", "FHIR"]}
      useCases={[
        { title: "Primary Care", description: "Wellness visits, preventive care, and routine follow-ups." },
        { title: "Chronic Disease", description: "Diabetes, hypertension, and ongoing condition management." },
        { title: "Post-Surgical Care", description: "Recovery monitoring and complication prevention." },
        { title: "Mental Health", description: "Therapy appointments and mood tracking." },
        { title: "Pediatric Care", description: "Parent engagement for children's healthcare." },
        { title: "Senior Care", description: "Elderly patient support with caregiver access." },
      ]}
    />
  );
};

export default PatientEngagement;