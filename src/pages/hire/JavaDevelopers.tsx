import { Code } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const JavaDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Code}
      color="from-red-500 to-red-600"
      title="Hire Java Developers"
      tagline="Enterprise-grade Java developers for scalable backend systems."
      description="Hire experienced Java developers who build robust, scalable enterprise applications. Our developers are experts in Spring Boot, microservices, and cloud-native development."
      benefits={[
        "Spring Boot expertise",
        "Microservices architecture",
        "Enterprise integration patterns",
        "High-performance systems",
        "Cloud-native development",
        "Legacy modernization",
        "Security best practices",
        "Scalable solutions",
      ]}
      process={[
        { number: "01", title: "Technical Assessment", description: "Evaluate your Java project requirements and architecture." },
        { number: "02", title: "Developer Matching", description: "Match you with Java experts in your domain." },
        { number: "03", title: "Knowledge Transfer", description: "Quick ramp-up on your codebase and systems." },
        { number: "04", title: "Agile Development", description: "Sprint-based development with code reviews." },
        { number: "05", title: "Quality Assurance", description: "Comprehensive testing and performance tuning." },
        { number: "06", title: "DevOps Integration", description: "CI/CD pipeline setup and deployment automation." },
      ]}
      technologies={["Java 17+", "Spring Boot", "Spring Cloud", "Hibernate", "JPA", "Apache Kafka", "Redis", "PostgreSQL", "MongoDB", "Kubernetes"]}
      caseStudies={[
        { title: "FinVault Backend", category: "Fintech", description: "High-throughput transaction processing system.", results: ["10M transactions/day", "99.99% uptime"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "Enterprise ERP", category: "Manufacturing", description: "Custom ERP system for Fortune 500 manufacturer.", results: ["60% faster operations", "$5M savings"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/erp-system" },
        { title: "LogiTrack Platform", category: "Logistics", description: "Microservices-based logistics management platform.", results: ["Real-time tracking", "Scales to 100K shipments"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/logitrack" },
      ]}
      useCases={["Enterprise applications", "Microservices development", "API development", "Legacy modernization", "Cloud migration", "Big data processing"]}
    />
  );
};

export default JavaDevelopers;
