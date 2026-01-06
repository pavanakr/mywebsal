import { GraduationCap, Users, Calendar, FileText, Bell, Shield } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const StudentManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={Users}
      color="from-pink-500 to-purple-600"
      parentIndustry="Education"
      parentHref="/industries/education"
      name="Student Information Systems"
      tagline="Complete Student Lifecycle Management"
      description="Comprehensive student information systems that manage admissions, enrollment, academic records, attendance, and communications. Our SIS solutions streamline administrative workflows and improve student outcomes."
      stats={[
        { value: "1M+", label: "Students Managed" },
        { value: "500+", label: "Schools" },
        { value: "40%", label: "Admin Time Saved" },
        { value: "99.5%", label: "Data Accuracy" },
      ]}
      features={[
        {
          title: "Admissions Management",
          description: "Online applications, document verification, and enrollment workflows.",
          icon: FileText,
        },
        {
          title: "Academic Records",
          description: "Grade management, transcripts, and academic history tracking.",
          icon: GraduationCap,
        },
        {
          title: "Attendance Tracking",
          description: "Automated attendance with biometric and mobile check-in options.",
          icon: Calendar,
        },
        {
          title: "Parent Communication",
          description: "Automated notifications, progress reports, and parent portals.",
          icon: Bell,
        },
      ]}
      benefits={[
        "Centralize all student data in one secure platform",
        "Automate administrative tasks and reduce paperwork",
        "Improve communication between teachers and parents",
        "Generate compliance reports effortlessly",
        "Enable data-driven decision making",
        "Ensure data security and privacy compliance",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Elasticsearch", "OAuth 2.0", "Docker"]}
      useCases={[
        { title: "K-12 School Districts", description: "Manage thousands of students across multiple schools." },
        { title: "Universities & Colleges", description: "Higher education with course registration and transcripts." },
        { title: "Vocational Training Centers", description: "Track skills-based certifications and apprenticeships." },
        { title: "International Schools", description: "Multi-language support with global standards compliance." },
        { title: "Online Academies", description: "Virtual school management with digital credentials." },
        { title: "Education Departments", description: "Government-level education data aggregation." },
      ]}
    />
  );
};

export default StudentManagement;