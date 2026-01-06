import { Users } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const DedicatedDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Users}
      color="from-purple-500 to-purple-600"
      title="Hire Dedicated Developers"
      tagline="Scale your team with pre-vetted developers who integrate seamlessly with your workflow."
      description="Augment your team with skilled, dedicated developers who work exclusively on your projects. Full-time resources, complete control, zero overhead."
      benefits={[
        "Full-time dedicated resources",
        "Direct team management",
        "100% project focus",
        "Flexible engagement terms",
        "Quick onboarding",
        "NDA protected",
        "No hidden costs",
        "Easy scaling options",
      ]}
      process={[
        { number: "01", title: "Requirement Gathering", description: "Understand your tech stack, project scope, and team culture." },
        { number: "02", title: "Talent Matching", description: "Hand-pick developers matching your specific requirements." },
        { number: "03", title: "Interview Process", description: "You interview and select the developers you want." },
        { number: "04", title: "Onboarding", description: "Smooth integration with your tools and processes." },
        { number: "05", title: "Collaboration", description: "Daily standups and regular sync-ups with your team." },
        { number: "06", title: "Performance Review", description: "Regular feedback loops and performance optimization." },
      ]}
      technologies={["React", "Node.js", "Python", "Java", "Flutter", "React Native", "AWS", "Azure", "DevOps", "AI/ML"]}
      caseStudies={[
        { title: "Enterprise SaaS Platform", category: "Technology", description: "5-developer team building next-gen SaaS product.", results: ["3x faster delivery", "40% cost savings"], image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
        { title: "Healthcare Platform", category: "Healthcare", description: "Dedicated team for HIPAA-compliant application.", results: ["100% compliance", "6-month delivery"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
        { title: "Fintech Application", category: "Finance", description: "Full-stack team for financial services platform.", results: ["$10M processed", "99.99% uptime"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
      ]}
      useCases={["Long-term product development", "Team augmentation", "Project rescue", "Legacy modernization", "Startup MVP development", "Enterprise applications"]}
    />
  );
};

export default DedicatedDevelopers;
