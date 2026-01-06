import { Building2, HardHat, Calendar, FileText, Users, BarChart } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const ConstructionManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={HardHat}
      color="from-amber-500 to-orange-600"
      parentIndustry="Real Estate & Construction"
      parentHref="/industries/real-estate-construction"
      name="Construction Management Systems"
      tagline="Build Smarter, Deliver Faster"
      description="End-to-end construction project management platforms that streamline planning, scheduling, budgeting, and site management. Our solutions improve collaboration and reduce project delays."
      stats={[
        { value: "$5B+", label: "Projects Managed" },
        { value: "25%", label: "Cost Reduction" },
        { value: "30%", label: "Time Saved" },
        { value: "500+", label: "Contractors" },
      ]}
      features={[
        {
          title: "Project Scheduling",
          description: "Gantt charts, milestones, and critical path analysis for planning.",
          icon: Calendar,
        },
        {
          title: "Budget Management",
          description: "Cost tracking, change orders, and financial forecasting.",
          icon: BarChart,
        },
        {
          title: "Document Control",
          description: "Centralized storage for blueprints, permits, and contracts.",
          icon: FileText,
        },
        {
          title: "Field Collaboration",
          description: "Mobile apps for site teams with photo logs and issue tracking.",
          icon: Users,
        },
      ]}
      benefits={[
        "Keep projects on time and within budget",
        "Improve coordination between stakeholders",
        "Reduce rework with better documentation",
        "Track progress with real-time dashboards",
        "Ensure compliance with safety standards",
        "Enable data-driven decision making",
      ]}
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "Procore API", "AutoCAD Integration", "Mobile SDK", "Redis"]}
      useCases={[
        { title: "Commercial Construction", description: "Office buildings and retail spaces." },
        { title: "Residential Developments", description: "Housing projects and communities." },
        { title: "Infrastructure Projects", description: "Roads, bridges, and utilities." },
        { title: "Renovation Management", description: "Remodeling and refurbishment tracking." },
        { title: "Multi-Site Coordination", description: "Managing multiple project locations." },
        { title: "Government Contracts", description: "Public sector construction compliance." },
      ]}
    />
  );
};

export default ConstructionManagement;