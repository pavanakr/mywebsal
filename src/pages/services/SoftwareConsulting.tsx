import { Lightbulb } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const SoftwareConsulting = () => {
  return (
    <ServiceDetailPage
      icon={Lightbulb}
      color="from-amber-500 to-amber-600"
      title="Software Consulting"
      tagline="Strategic technology guidance to transform your business."
      description="Our software consulting services help you make informed technology decisions, optimize processes, and build a roadmap for digital transformation. From architecture reviews to full digital strategy."
      benefits={[
        "Technology roadmapping",
        "Architecture reviews",
        "Vendor evaluation",
        "Digital transformation",
        "Process optimization",
        "Risk assessment",
        "Cost optimization",
        "Team augmentation guidance",
      ]}
      process={[
        { number: "01", title: "Discovery", description: "Understand your business goals and challenges." },
        { number: "02", title: "Assessment", description: "Evaluate current technology landscape." },
        { number: "03", title: "Strategy", description: "Develop comprehensive technology roadmap." },
        { number: "04", title: "Recommendations", description: "Provide actionable recommendations." },
        { number: "05", title: "Implementation Support", description: "Guide implementation of solutions." },
        { number: "06", title: "Continuous Improvement", description: "Ongoing advisory and optimization." },
      ]}
      technologies={["Enterprise Architecture", "Cloud Strategy", "DevOps", "Microservices", "API Design", "Security", "Data Strategy", "AI/ML Strategy"]}
      caseStudies={[
        { title: "Digital Transformation", category: "Manufacturing", description: "Complete digital strategy for Fortune 500.", results: ["40% efficiency gain", "$10M savings"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/digital-transformation" },
        { title: "Cloud Migration Strategy", category: "Retail", description: "Multi-cloud strategy for retail chain.", results: ["50% cost reduction", "99.99% uptime"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/cloud-migration" },
        { title: "Tech Stack Modernization", category: "Finance", description: "Legacy modernization roadmap.", results: ["5x faster releases", "Zero downtime"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/modernization" },
      ]}
      useCases={["Digital transformation", "Cloud strategy", "Architecture review", "Technology selection", "Process optimization", "Security assessment"]}
    />
  );
};

export default SoftwareConsulting;
