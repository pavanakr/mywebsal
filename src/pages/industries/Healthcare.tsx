import { Heart, Shield, Users, BarChart, Stethoscope, FileText } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';
import heroHealthcareImage from '@/assets/hero-healthcare.png';

const Healthcare = () => {
  return (
    <IndustryDetailPage
      icon={Heart}
      color="from-red-500 to-red-600"
      name="Healthcare"
      tagline="Digital Solutions for Modern Healthcare"
      description="We build HIPAA-compliant software solutions that improve patient outcomes, streamline clinical workflows, and enable healthcare organizations to deliver better care at lower costs."
      heroImage={heroHealthcareImage}
      stats={[
        { value: "50+", label: "Healthcare Projects" },
        { value: "2M+", label: "Patients Served" },
        { value: "100%", label: "HIPAA Compliant" },
        { value: "500+", label: "Providers Onboarded" },
      ]}
      challenges={[
        {
          title: "Data Security & Compliance",
          description: "Healthcare data is highly sensitive, requiring strict adherence to HIPAA, HITECH, and other regulatory standards.",
        },
        {
          title: "System Interoperability",
          description: "Legacy systems and disparate data formats make it difficult to share information across care providers.",
        },
        {
          title: "Patient Engagement",
          description: "Keeping patients engaged and informed while managing their care journey effectively.",
        },
        {
          title: "Administrative Burden",
          description: "Healthcare professionals spend too much time on paperwork instead of patient care.",
        },
        {
          title: "Data-Driven Decisions",
          description: "Transforming vast amounts of health data into actionable clinical insights.",
        },
        {
          title: "Remote Care Delivery",
          description: "Enabling quality care delivery beyond traditional clinical settings.",
        },
      ]}
      solutions={[
        {
          title: "Electronic Health Records (EHR)",
          description: "Custom EHR systems with intuitive interfaces, seamless integrations, and full regulatory compliance.",
          icon: FileText,
        },
        {
          title: "Telehealth Platforms",
          description: "HIPAA-compliant video consultations, remote monitoring, and virtual care management tools.",
          icon: Stethoscope,
        },
        {
          title: "Patient Portals",
          description: "Secure self-service portals for appointment scheduling, medical records, and communication.",
          icon: Users,
        },
        {
          title: "Healthcare Analytics",
          description: "Advanced analytics platforms for population health, clinical outcomes, and operational efficiency.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "HIPAA & HITECH Compliance",
        "HL7 FHIR Integration",
        "EHR/EMR Development",
        "Telemedicine Solutions",
        "Medical Device Integration",
        "Clinical Decision Support",
        "Population Health Management",
        "Revenue Cycle Management",
      ]}
      caseStudies={[
        {
          title: "HealthPulse Platform",
          description: "Comprehensive patient management system serving 500+ healthcare providers.",
          results: ["40% admin reduction", "500+ providers"],
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
          href: "/portfolio/healthpulse",
        },
        {
          title: "MedConnect Telehealth",
          description: "End-to-end telehealth platform connecting patients with providers globally.",
          results: ["1M+ consultations", "50+ countries"],
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
          href: "/portfolio/medconnect",
        },
        {
          title: "CareTrack Analytics",
          description: "Population health analytics platform for healthcare networks.",
          results: ["30% better outcomes", "Real-time insights"],
          image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
          href: "/portfolio/caretrack",
        },
      ]}
    />
  );
};

export default Healthcare;
