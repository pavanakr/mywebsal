import { GraduationCap, Video, BookOpen, Users, Award, BarChart3, Clock } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const ELearning = () => {
  return (
    <SubIndustryDetailPage
      icon={GraduationCap}
      color="from-blue-500 to-blue-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="E-Learning"
      tagline="Comprehensive E-Learning Platforms for Modern Education"
      description="Build powerful learning management systems with video courses, assessments, certifications, and analytics."
      stats={[{ value: "1M+", label: "Students" }, { value: "10K+", label: "Courses" }, { value: "95%", label: "Completion Rate" }, { value: "4.9", label: "Rating" }]}
      features={[
        { title: "Video Courses", description: "Stream and manage video content.", icon: Video },
        { title: "Course Library", description: "Organize courses and curricula.", icon: BookOpen },
        { title: "Student Management", description: "Track progress and enrollments.", icon: Users },
        { title: "Certifications", description: "Issue digital certificates.", icon: Award },
        { title: "Analytics", description: "Learning analytics and reports.", icon: BarChart3 },
        { title: "Self-Paced Learning", description: "Learn anytime, anywhere.", icon: Clock },
      ]}
      useCases={[
        { title: "Corporate Training", description: "Employee skill development." },
        { title: "Online Schools", description: "Virtual classrooms and courses." },
        { title: "Course Marketplaces", description: "Sell courses online." },
        { title: "Certification Programs", description: "Professional certifications." },
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "Mux", "WebRTC", "Stripe", "Redis"]}
      benefits={["Scalable infrastructure", "Engaging content delivery", "Progress tracking", "Payment integration", "Mobile-friendly"]}
    />
  );
};

export default ELearning;
