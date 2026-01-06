import { Cloud } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const CloudComputing = () => {
  return (
    <ServiceDetailPage
      icon={Cloud}
      color="from-sky-500 to-sky-600"
      title="Cloud Computing"
      tagline="Scalable, secure cloud solutions on AWS, Azure, and Google Cloud."
      description="Migrate, modernize, and optimize your infrastructure with cloud computing solutions. We help you leverage the full power of cloud platforms for agility and cost efficiency."
      benefits={[
        "Cloud migration",
        "Multi-cloud strategy",
        "Serverless architecture",
        "Cost optimization",
        "Security & compliance",
        "Auto-scaling",
        "Disaster recovery",
        "24/7 monitoring",
      ]}
      process={[
        { number: "01", title: "Assessment", description: "Evaluate current infrastructure and cloud readiness." },
        { number: "02", title: "Strategy", description: "Define cloud strategy and migration plan." },
        { number: "03", title: "Architecture", description: "Design cloud-native architecture." },
        { number: "04", title: "Migration", description: "Execute migration with minimal downtime." },
        { number: "05", title: "Optimization", description: "Optimize performance and costs." },
        { number: "06", title: "Operations", description: "Ongoing management and support." },
      ]}
      technologies={["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CloudFormation", "Lambda", "ECS", "Cloud Run"]}
      caseStudies={[
        { title: "Enterprise Migration", category: "Manufacturing", description: "Full data center migration to AWS.", results: ["40% cost reduction", "99.99% uptime"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/cloud-migration" },
        { title: "Serverless Platform", category: "Media", description: "Serverless video processing platform.", results: ["Pay-per-use", "Infinite scale"], image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop", href: "/portfolio/serverless" },
        { title: "Multi-Cloud Setup", category: "Finance", description: "Multi-cloud for regulatory compliance.", results: ["Full compliance", "High availability"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/multi-cloud" },
      ]}
      useCases={["Cloud migration", "Serverless applications", "Container orchestration", "Multi-cloud deployment", "Disaster recovery", "Dev/test environments"]}
    />
  );
};

export default CloudComputing;
