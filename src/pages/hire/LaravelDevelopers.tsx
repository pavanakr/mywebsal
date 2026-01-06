import { Code } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const LaravelDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Code}
      color="from-red-400 to-red-500"
      title="Hire Laravel Developers"
      tagline="Expert PHP Laravel developers for robust web applications."
      description="Hire skilled Laravel developers who build elegant, maintainable web applications. Our Laravel experts deliver quality code using modern PHP practices and the Laravel ecosystem."
      benefits={[
        "Laravel ecosystem mastery",
        "Eloquent ORM expertise",
        "RESTful API development",
        "Queue & job processing",
        "Laravel Livewire skills",
        "Test-driven development",
        "Security best practices",
        "Performance optimization",
      ]}
      process={[
        { number: "01", title: "Project Analysis", description: "Understand your web application requirements and goals." },
        { number: "02", title: "Developer Selection", description: "Match Laravel experts with your project needs." },
        { number: "03", title: "Environment Setup", description: "Configure development environment and CI/CD." },
        { number: "04", title: "Agile Development", description: "Feature development in iterative sprints." },
        { number: "05", title: "Testing & QA", description: "PHPUnit testing and quality assurance." },
        { number: "06", title: "Deployment", description: "Production deployment and ongoing support." },
      ]}
      technologies={["Laravel 10+", "PHP 8", "MySQL", "Redis", "Livewire", "Inertia.js", "Vue.js", "Tailwind CSS", "PHPUnit", "Laravel Forge"]}
      caseStudies={[
        { title: "ShopSphere Backend", category: "E-commerce", description: "Scalable e-commerce backend with Laravel.", results: ["1M+ products", "High availability"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
        { title: "CRM Platform", category: "SaaS", description: "Multi-tenant CRM built on Laravel.", results: ["10K businesses", "99.9% uptime"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", href: "/portfolio/crm-platform" },
        { title: "Content Platform", category: "Media", description: "Publishing platform with Laravel backend.", results: ["5M monthly views", "Fast content delivery"], image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop", href: "/portfolio/content-platform" },
      ]}
      useCases={["Web applications", "E-commerce backends", "SaaS platforms", "CMS development", "API backends", "Admin panels"]}
    />
  );
};

export default LaravelDevelopers;
