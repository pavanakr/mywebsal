import { RefreshCw } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const ApplicationModernization = () => {
  return (
    <ServiceDetailPage
      icon={RefreshCw}
      color="from-purple-500 to-purple-600"
      title="Application Modernization"
      tagline="Transform legacy systems into modern, scalable, and efficient applications that drive business growth."
      description="Our application modernization services help you breathe new life into aging systems, reducing technical debt while improving performance, security, and user experience. We migrate, refactor, and re-architect applications to meet today's demands."
      benefits={[
        "Reduced operational costs",
        "Improved performance & scalability",
        "Enhanced security posture",
        "Better user experience",
        "Cloud-native capabilities",
        "Easier maintenance",
        "API-first architecture",
        "Future-proof technology stack",
      ]}
      process={[
        {
          number: "01",
          title: "Assessment & Discovery",
          description: "Comprehensive analysis of existing systems, dependencies, and modernization opportunities.",
        },
        {
          number: "02",
          title: "Strategy Development",
          description: "Create a phased modernization roadmap aligned with business priorities and risk tolerance.",
        },
        {
          number: "03",
          title: "Architecture Design",
          description: "Design target architecture with modern patterns, technologies, and cloud-native principles.",
        },
        {
          number: "04",
          title: "Incremental Migration",
          description: "Execute modernization in phases, ensuring business continuity throughout the transition.",
        },
        {
          number: "05",
          title: "Testing & Validation",
          description: "Rigorous testing to ensure functional parity and improved performance metrics.",
        },
        {
          number: "06",
          title: "Optimization & Handoff",
          description: "Continuous monitoring, optimization, and knowledge transfer to internal teams.",
        },
      ]}
      technologies={[
        "Kubernetes", "Docker", "AWS", "Azure", "Google Cloud", "Terraform",
        "React", "Node.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis",
        "Kafka", "Microservices", "Serverless", "CI/CD", "Istio", "Kong",
      ]}
      caseStudies={[
        {
          title: "Enterprise ERP Modernization",
          category: "Manufacturing",
          description: "Transformed a 15-year-old monolithic ERP into a cloud-native microservices architecture.",
          results: ["60% cost reduction", "10x faster deployments"],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
          href: "/portfolio/erp-modernization",
        },
        {
          title: "Banking Core System Upgrade",
          category: "Fintech",
          description: "Re-platformed legacy banking system to cloud with zero downtime migration.",
          results: ["99.99% uptime", "10x transaction speed"],
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
          href: "/portfolio/finvault",
        },
        {
          title: "Healthcare Platform Migration",
          category: "Healthcare",
          description: "Migrated on-premise healthcare platform to AWS with HIPAA compliance.",
          results: ["50% infra savings", "Auto-scaling enabled"],
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
          href: "/portfolio/healthpulse",
        },
      ]}
      useCases={[
        "Monolith to Microservices",
        "Cloud Migration & Optimization",
        "Legacy Database Modernization",
        "API Gateway Implementation",
        "Containerization & Orchestration",
        "DevOps Transformation",
      ]}
    />
  );
};

export default ApplicationModernization;
