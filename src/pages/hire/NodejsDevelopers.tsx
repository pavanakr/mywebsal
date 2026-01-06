import { Server } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const NodejsDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Server}
      color="from-green-600 to-green-700"
      title="Hire Node.js Developers"
      tagline="Full-stack JavaScript developers for high-performance backends."
      description="Hire skilled Node.js developers who build fast, scalable server-side applications. Our developers are experts in Express, NestJS, and real-time application development."
      benefits={[
        "Full-stack JavaScript",
        "Real-time applications",
        "RESTful & GraphQL APIs",
        "Microservices architecture",
        "Serverless development",
        "High-performance systems",
        "WebSocket expertise",
        "Cloud-native skills",
      ]}
      process={[
        { number: "01", title: "Requirements Gathering", description: "Analyze your backend and API requirements." },
        { number: "02", title: "Architecture Planning", description: "Design scalable Node.js architecture." },
        { number: "03", title: "Developer Allocation", description: "Assign Node.js experts to your project." },
        { number: "04", title: "Sprint Development", description: "Agile development with regular releases." },
        { number: "05", title: "Testing & Security", description: "Comprehensive testing and security audits." },
        { number: "06", title: "Deployment & Scaling", description: "Cloud deployment and auto-scaling setup." },
      ]}
      technologies={["Node.js", "Express", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Socket.io", "AWS Lambda"]}
      caseStudies={[
        { title: "Real-time Chat Platform", category: "Communication", description: "WebSocket-based messaging for 1M+ users.", results: ["10K concurrent users", "Sub-100ms latency"], image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop", href: "/portfolio/chat-platform" },
        { title: "FinVault API", category: "Fintech", description: "High-throughput financial transaction APIs.", results: ["5M API calls/day", "99.99% uptime"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "ShopSphere Backend", category: "E-commerce", description: "GraphQL API powering e-commerce platform.", results: ["Sub-50ms response", "Scales automatically"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
      ]}
      useCases={["API development", "Real-time applications", "Microservices", "Serverless functions", "IoT backends", "Streaming platforms"]}
    />
  );
};

export default NodejsDevelopers;
