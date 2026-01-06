import { Code } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import heroCustomSoftware from '@/assets/hero-custom-software.png';

const CustomSoftware = () => {
  return (
    <ServiceDetailPage
      heroImage={heroCustomSoftware}
      icon={Code}
      color="from-blue-500 to-blue-600"
      title="Custom Software Development"
      tagline="Tailored solutions designed to solve your unique business challenges and drive operational excellence."
      description="Our custom software development services deliver bespoke solutions that perfectly align with your business processes, goals, and growth trajectory. We build scalable, maintainable software that becomes a competitive advantage for your organization."
      benefits={[
        "100% tailored to your needs",
        "Scalable architecture",
        "Seamless integrations",
        "Full ownership of code",
        "Ongoing support & maintenance",
        "Agile development process",
        "Security-first approach",
        "Performance optimized",
      ]}
      process={[
        {
          number: "01",
          title: "Discovery & Analysis",
          description: "Deep dive into your business requirements, workflows, and objectives to create a comprehensive project roadmap.",
        },
        {
          number: "02",
          title: "Solution Architecture",
          description: "Design a scalable, secure architecture that supports your current needs and future growth.",
        },
        {
          number: "03",
          title: "UI/UX Design",
          description: "Create intuitive interfaces that enhance user productivity and adoption rates.",
        },
        {
          number: "04",
          title: "Agile Development",
          description: "Build your solution in iterative sprints with regular demos and feedback loops.",
        },
        {
          number: "05",
          title: "Quality Assurance",
          description: "Rigorous testing including unit, integration, performance, and security testing.",
        },
        {
          number: "06",
          title: "Deployment & Support",
          description: "Seamless deployment with comprehensive training and ongoing maintenance.",
        },
      ]}
      technologies={[
        "Java", "Python", ".NET", "Node.js", "Go", "Rust",
        "React", "Angular", "Vue.js", "PostgreSQL", "MongoDB",
        "Redis", "Elasticsearch", "Kafka", "RabbitMQ",
        "AWS", "Azure", "GCP", "Docker", "Kubernetes",
      ]}
      caseStudies={[
        {
          title: "Enterprise Resource Planner",
          category: "Manufacturing",
          description: "Custom ERP system streamlining operations for a $500M manufacturing company.",
          results: ["60% faster reporting", "30% cost reduction"],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
          href: "/portfolio/erp-system",
        },
        {
          title: "Insurance Claims Platform",
          category: "Insurance",
          description: "Automated claims processing system handling 10,000+ claims daily.",
          results: ["75% faster processing", "95% accuracy"],
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          href: "/portfolio/insurance-claims",
        },
        {
          title: "Supply Chain Management",
          category: "Logistics",
          description: "End-to-end supply chain visibility platform for global operations.",
          results: ["40% inventory reduction", "Real-time tracking"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
          href: "/portfolio/supply-chain",
        },
      ]}
      useCases={[
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Workflow Automation Systems",
        "Legacy System Modernization",
        "Data Analytics Platforms",
        "Integration Middleware",
      ]}
    />
  );
};

export default CustomSoftware;
