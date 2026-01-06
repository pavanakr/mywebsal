import { Globe } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import heroWebDevelopment from '@/assets/hero-web-development.png';

const WebDevelopment = () => {
  return (
    <ServiceDetailPage
      heroImage={heroWebDevelopment}
      icon={Globe}
      color="from-emerald-500 to-emerald-600"
      title="Custom Web Development Services for Scalable Digital Platforms"
      tagline="Enterprise Web Applications. Secure & High-Performance Websites. Modern Tech Stack & UI/UX Design."
      description="We create stunning web experiences that engage users and drive conversions. From marketing websites to complex web applications, our team delivers pixel-perfect designs backed by robust, scalable architecture."
      benefits={[
        "Responsive design",
        "Lightning-fast performance",
        "SEO optimized",
        "Accessibility compliant",
        "Cross-browser compatible",
        "Progressive Web Apps",
        "Real-time features",
        "CMS integration",
      ]}
      process={[
        {
          number: "01",
          title: "Strategy & Planning",
          description: "Define goals, target audience, and key performance indicators for your web presence.",
        },
        {
          number: "02",
          title: "UX Research & Wireframing",
          description: "User research and wireframe creation to optimize user journeys and conversions.",
        },
        {
          number: "03",
          title: "Visual Design",
          description: "Craft beautiful, on-brand designs that captivate and engage your audience.",
        },
        {
          number: "04",
          title: "Frontend Development",
          description: "Build responsive, performant interfaces using modern frameworks and best practices.",
        },
        {
          number: "05",
          title: "Backend & Integration",
          description: "Develop robust APIs and integrate with third-party services and databases.",
        },
        {
          number: "06",
          title: "Launch & Optimize",
          description: "Deploy, monitor performance, and continuously optimize based on analytics.",
        },
      ]}
      technologies={[
        "React", "Next.js", "Vue.js", "Nuxt.js", "Angular",
        "TypeScript", "Tailwind CSS", "Node.js", "Express",
        "GraphQL", "REST APIs", "PostgreSQL", "MongoDB",
        "Contentful", "Strapi", "Sanity", "Vercel", "Netlify",
      ]}
      caseStudies={[
        {
          title: "E-commerce Platform Redesign",
          category: "E-commerce",
          description: "Complete redesign of a major retailer's online store with 2M+ monthly visitors.",
          results: ["45% conversion increase", "60% faster load time"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          href: "/portfolio/ecommerce-redesign",
        },
        {
          title: "Corporate Website",
          category: "Enterprise",
          description: "Global corporate website with multi-language support and advanced CMS.",
          results: ["300% traffic increase", "50+ languages"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          href: "/portfolio/corporate-website",
        },
        {
          title: "Learning Management System",
          category: "Education",
          description: "Interactive LMS platform serving 100,000+ students worldwide.",
          results: ["95% completion rate", "Real-time collaboration"],
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
          href: "/portfolio/lms-platform",
        },
      ]}
      useCases={[
        "Corporate & Marketing Websites",
        "E-commerce Platforms",
        "Web Applications & Portals",
        "Content Management Systems",
        "Progressive Web Apps (PWA)",
        "Customer Self-Service Portals",
      ]}
    />
  );
};

export default WebDevelopment;
