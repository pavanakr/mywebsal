import { GraduationCap, BookOpen, Award, BarChart, Users, Shield } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const LMSPlatform = () => {
  return (
    <SubIndustryDetailPage
      icon={BookOpen}
      color="from-pink-500 to-purple-600"
      parentIndustry="Education"
      parentHref="/industries/education"
      name="Learning Management Systems"
      tagline="Enterprise LMS Platform Development"
      description="We build comprehensive learning management systems that power corporate training, academic institutions, and online education. Our LMS solutions feature course authoring, progress tracking, certifications, and SCORM/xAPI compliance."
      stats={[
        { value: "1M+", label: "Active Learners" },
        { value: "50K+", label: "Courses Hosted" },
        { value: "95%", label: "Completion Rate" },
        { value: "500+", label: "Organizations" },
      ]}
      features={[
        {
          title: "Course Authoring Tools",
          description: "Drag-and-drop course builder with multimedia support, quizzes, and interactive content.",
          icon: BookOpen,
        },
        {
          title: "Progress Tracking",
          description: "Real-time dashboards showing learner progress, time spent, and completion status.",
          icon: BarChart,
        },
        {
          title: "Certifications & Badges",
          description: "Automated certificate generation with digital badges and credential verification.",
          icon: Award,
        },
        {
          title: "User Management",
          description: "Role-based access, group management, and single sign-on integration.",
          icon: Users,
        },
        {
          title: "Compliance & Standards",
          description: "SCORM, xAPI (Tin Can), and AICC compliant for content interoperability.",
          icon: Shield,
        },
        {
          title: "Gamification",
          description: "Points, leaderboards, and achievements to boost learner engagement.",
          icon: GraduationCap,
        },
      ]}
      benefits={[
        "Reduce training costs by up to 60% with online delivery",
        "Scale learning programs to unlimited users",
        "Track ROI with comprehensive analytics",
        "Ensure compliance with automated tracking",
        "Deliver consistent training across locations",
        "Integrate with existing HR and enterprise systems",
        "Support mobile learning on any device",
        "Enable social learning with discussion forums",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Elasticsearch", "SCORM Cloud", "WebRTC"]}
      useCases={[
        { title: "Corporate Training", description: "Employee onboarding, compliance, and skill development programs." },
        { title: "Higher Education", description: "University course management and online degree programs." },
        { title: "K-12 Education", description: "School district-wide digital learning platforms." },
        { title: "Professional Development", description: "Continuing education and certification programs." },
        { title: "Partner Training", description: "Extended enterprise learning for vendors and partners." },
        { title: "Customer Education", description: "Product training and customer success academies." },
      ]}
    />
  );
};

export default LMSPlatform;