import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { GraduationCap, Video, Users, Award, BarChart, BookOpen } from "lucide-react";

const ELearning = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="eLearning Platforms"
        subtitle="Transform education with digital learning solutions"
        description="Create engaging online learning experiences with our comprehensive eLearning platform development services. From course management to virtual classrooms."
        icon={<GraduationCap className="w-12 h-12" />}
        features={[
          {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Course Management",
            description: "Create, organize, and deliver courses with ease."
          },
          {
            icon: <Video className="w-6 h-6" />,
            title: "Live Classes",
            description: "Real-time video conferencing and interactive sessions."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Student Engagement",
            description: "Discussion forums, chat, and collaborative learning."
          },
          {
            icon: <Award className="w-6 h-6" />,
            title: "Certifications",
            description: "Issue and verify digital certificates and badges."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Progress Tracking",
            description: "Detailed analytics on student progress and performance."
          },
          {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Mobile Learning",
            description: "Learn anywhere with fully responsive mobile apps."
          }
        ]}
        benefits={[
          "Scale education without physical limitations",
          "Personalize learning paths for each student",
          "Reduce training costs for organizations",
          "Track and measure learning outcomes"
        ]}
        useCases={[
          "Corporate training platforms",
          "Online course marketplaces",
          "K-12 digital learning",
          "Professional certification programs"
        ]}
      />
    </Layout>
  );
};

export default ELearning;
