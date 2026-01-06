import { Heart, FileText, Shield, Users, Clock, Database } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const ElectronicHealthRecords = () => {
  return (
    <SubIndustryDetailPage
      icon={FileText}
      color="from-red-500 to-rose-600"
      parentIndustry="Healthcare"
      parentHref="/industries/healthcare"
      name="Electronic Health Records"
      tagline="Secure EHR/EMR System Development"
      description="We develop HIPAA-compliant electronic health record systems that streamline clinical workflows, improve patient care, and enable data-driven healthcare decisions. Our EHR solutions integrate seamlessly with existing healthcare infrastructure."
      stats={[
        { value: "10M+", label: "Patient Records" },
        { value: "99.99%", label: "Uptime SLA" },
        { value: "HIPAA", label: "Compliant" },
        { value: "500+", label: "Clinics Served" },
      ]}
      features={[
        {
          title: "Patient Charts",
          description: "Comprehensive patient records with medical history, diagnoses, and treatment plans.",
          icon: FileText,
        },
        {
          title: "Clinical Documentation",
          description: "Voice-to-text notes, templates, and smart documentation tools for providers.",
          icon: Database,
        },
        {
          title: "Interoperability",
          description: "HL7 FHIR integration for seamless data exchange with labs, pharmacies, and payers.",
          icon: Users,
        },
        {
          title: "Security & Compliance",
          description: "End-to-end encryption, audit trails, and HIPAA/HITECH compliance built-in.",
          icon: Shield,
        },
        {
          title: "Scheduling Integration",
          description: "Appointment scheduling with automated reminders and calendar sync.",
          icon: Clock,
        },
        {
          title: "E-Prescribing",
          description: "Electronic prescription management with drug interaction alerts.",
          icon: Heart,
        },
      ]}
      benefits={[
        "Reduce documentation time by 40%",
        "Eliminate paper records and storage costs",
        "Improve care coordination across providers",
        "Reduce medication errors with alerts",
        "Enable data-driven clinical decisions",
        "Meet regulatory compliance requirements",
        "Improve patient safety outcomes",
        "Access records from anywhere securely",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS HIPAA", "HL7 FHIR", "OAuth 2.0", "AES-256", "Docker"]}
      useCases={[
        { title: "Primary Care Clinics", description: "Family medicine and internal medicine practices." },
        { title: "Specialty Practices", description: "Cardiology, orthopedics, and specialty clinics." },
        { title: "Hospital Systems", description: "Enterprise-wide EHR for multi-facility health systems." },
        { title: "Urgent Care Centers", description: "Fast-paced documentation for walk-in clinics." },
        { title: "Mental Health Practices", description: "Behavioral health documentation and treatment plans." },
        { title: "Long-term Care", description: "Nursing homes and rehabilitation facilities." },
      ]}
    />
  );
};

export default ElectronicHealthRecords;