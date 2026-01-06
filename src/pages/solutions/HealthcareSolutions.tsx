import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { Heart, Video, FileText, Shield, Calendar, Stethoscope } from "lucide-react";

const HealthcareSolutions = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Healthcare Solutions"
        subtitle="Digital health platforms for modern care delivery"
        description="Build HIPAA-compliant healthcare solutions that improve patient outcomes, streamline operations, and enable remote care delivery."
        icon={<Heart className="w-12 h-12" />}
        features={[
          {
            icon: <Video className="w-6 h-6" />,
            title: "Telemedicine",
            description: "Secure video consultations and remote patient monitoring."
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "EHR/EMR Systems",
            description: "Digital health records with interoperability support."
          },
          {
            icon: <Calendar className="w-6 h-6" />,
            title: "Appointment Scheduling",
            description: "Online booking, reminders, and waitlist management."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "HIPAA Compliance",
            description: "Built-in security and compliance for healthcare data."
          },
          {
            icon: <Stethoscope className="w-6 h-6" />,
            title: "Clinical Workflows",
            description: "Streamlined workflows for clinical staff efficiency."
          },
          {
            icon: <Heart className="w-6 h-6" />,
            title: "Patient Engagement",
            description: "Patient portals, health tracking, and care plans."
          }
        ]}
        benefits={[
          "Improve access to care with telehealth",
          "Reduce administrative burden on staff",
          "Enhance patient engagement and outcomes",
          "Ensure compliance with healthcare regulations"
        ]}
        useCases={[
          "Telehealth platforms",
          "Hospital management systems",
          "Patient engagement apps",
          "Mental health platforms"
        ]}
      />
    </Layout>
  );
};

export default HealthcareSolutions;
