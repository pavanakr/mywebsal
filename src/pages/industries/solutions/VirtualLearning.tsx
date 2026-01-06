import { GraduationCap, BookOpen, Video, Users, BarChart, Award } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const VirtualLearning = () => {
  return (
    <SubIndustryDetailPage
      icon={Video}
      color="from-pink-500 to-rose-600"
      parentIndustry="Education"
      parentHref="/industries/education"
      name="Virtual Learning Platforms"
      tagline="Immersive Digital Learning Experiences"
      description="We build interactive virtual learning environments that bring classrooms online. Our platforms enable real-time collaboration, video conferencing, screen sharing, and interactive whiteboards for engaging remote education."
      stats={[
        { value: "50K+", label: "Daily Classes" },
        { value: "99.9%", label: "Uptime" },
        { value: "4.8★", label: "User Rating" },
        { value: "100+", label: "Institutions" },
      ]}
      features={[
        {
          title: "Live Video Classes",
          description: "HD video conferencing with breakout rooms, hand-raising, and real-time polls.",
          icon: Video,
        },
        {
          title: "Interactive Whiteboard",
          description: "Collaborative digital whiteboard with annotation tools and screen sharing.",
          icon: BookOpen,
        },
        {
          title: "Student Engagement",
          description: "Gamification, quizzes, and participation tracking to boost engagement.",
          icon: Users,
        },
        {
          title: "Learning Analytics",
          description: "Comprehensive dashboards tracking attendance, participation, and progress.",
          icon: BarChart,
        },
      ]}
      benefits={[
        "Enable learning from anywhere with internet access",
        "Reduce infrastructure costs for educational institutions",
        "Increase student engagement through interactive tools",
        "Track learning outcomes with detailed analytics",
        "Scale to thousands of concurrent users seamlessly",
        "Record and archive sessions for future reference",
      ]}
      technologies={["WebRTC", "React", "Node.js", "AWS", "Redis", "PostgreSQL", "Socket.io", "Kubernetes"]}
      useCases={[
        { title: "K-12 Remote Learning", description: "Interactive online classes for primary and secondary students." },
        { title: "University Online Courses", description: "Higher education courses with virtual labs and collaboration." },
        { title: "Corporate Training", description: "Employee training sessions with progress tracking." },
        { title: "Professional Certification", description: "Accredited certification programs with proctored exams." },
        { title: "Language Learning", description: "Interactive language classes with native speakers." },
        { title: "Tutoring & Mentorship", description: "One-on-one tutoring sessions with scheduling." },
      ]}
    />
  );
};

export default VirtualLearning;