import { GraduationCap, BookOpen, Video, BarChart, Users, Award } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const Education = () => {
  return (
    <IndustryDetailPage
      icon={GraduationCap}
      color="from-pink-500 to-pink-600"
      name="Education"
      tagline="EdTech Platforms for Learning"
      description="We build engaging educational technology that transforms how students learn, teachers teach, and institutions operate. From K-12 to corporate training, we deliver EdTech solutions that drive outcomes."
      stats={[
        { value: "1M+", label: "Active Learners" },
        { value: "95%", label: "Completion Rate" },
        { value: "500+", label: "Institutions" },
        { value: "50K+", label: "Courses Created" },
      ]}
      challenges={[
        {
          title: "Student Engagement",
          description: "Keeping learners motivated and engaged in digital learning environments.",
        },
        {
          title: "Personalized Learning",
          description: "Adapting content and pace to individual student needs and learning styles.",
        },
        {
          title: "Assessment & Analytics",
          description: "Measuring learning outcomes and providing actionable insights to educators.",
        },
        {
          title: "Accessibility",
          description: "Ensuring educational content is accessible to all learners regardless of ability.",
        },
        {
          title: "Content Management",
          description: "Creating, organizing, and delivering educational content at scale.",
        },
        {
          title: "Remote Collaboration",
          description: "Enabling effective collaboration between students and teachers online.",
        },
      ]}
      solutions={[
        {
          title: "Learning Management Systems",
          description: "Comprehensive LMS platforms with course creation, delivery, and tracking.",
          icon: BookOpen,
        },
        {
          title: "Virtual Classrooms",
          description: "Interactive live learning environments with video, chat, and collaboration tools.",
          icon: Video,
        },
        {
          title: "Assessment Platforms",
          description: "Automated testing, proctoring, and competency tracking systems.",
          icon: Award,
        },
        {
          title: "Learning Analytics",
          description: "Student performance analytics, predictive insights, and intervention tools.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "Learning Management Systems",
        "Virtual Classrooms",
        "Adaptive Learning",
        "Assessment & Proctoring",
        "Student Information Systems",
        "Mobile Learning Apps",
        "Corporate Training",
        "SCORM/xAPI Compliance",
      ]}
      caseStudies={[
        {
          title: "LearnHub LMS",
          description: "Enterprise learning platform serving 100K+ students globally.",
          results: ["95% completion rate", "100K+ learners"],
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
          href: "/portfolio/learnhub",
        },
        {
          title: "ClassConnect Live",
          description: "Virtual classroom platform with real-time collaboration features.",
          results: ["50K+ classes/month", "4.9 rating"],
          image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=600&h=400&fit=crop",
          href: "/portfolio/classconnect",
        },
        {
          title: "SkillPath Corporate",
          description: "Corporate training platform with skills tracking and certification.",
          results: ["200+ enterprises", "30% skill improvement"],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          href: "/portfolio/skillpath",
        },
      ]}
    />
  );
};

export default Education;
