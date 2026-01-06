import { Layers } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const SaaSDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={Layers}
      color="from-cyan-500 to-cyan-600"
      title="SaaS Development"
      tagline="End-to-end SaaS product development from ideation to launch, built for scale and market success."
      description="We help entrepreneurs and enterprises build successful SaaS products. From MVP to enterprise-scale platforms, we bring deep expertise in multi-tenant architecture, subscription billing, and the unique challenges of building software as a service."
      benefits={[
        "Multi-tenant architecture",
        "Subscription management",
        "Usage-based billing",
        "White-label solutions",
        "API-first design",
        "Self-service onboarding",
        "Analytics & reporting",
        "Enterprise-ready security",
      ]}
      process={[
        {
          number: "01",
          title: "Product Strategy",
          description: "Define your value proposition, target market, and competitive positioning.",
        },
        {
          number: "02",
          title: "MVP Planning",
          description: "Identify core features and create a roadmap for your minimum viable product.",
        },
        {
          number: "03",
          title: "Architecture Design",
          description: "Design scalable, multi-tenant architecture that grows with your business.",
        },
        {
          number: "04",
          title: "Rapid Development",
          description: "Build and iterate quickly using agile sprints and continuous feedback.",
        },
        {
          number: "05",
          title: "Launch & Growth",
          description: "Launch your product and implement growth features like referrals and analytics.",
        },
        {
          number: "06",
          title: "Scale & Optimize",
          description: "Scale infrastructure and optimize based on user behavior and metrics.",
        },
      ]}
      technologies={[
        "React", "Next.js", "Node.js", "Python",
        "PostgreSQL", "Redis", "Elasticsearch",
        "Stripe", "Chargebee", "Paddle",
        "Auth0", "Clerk", "WorkOS",
        "AWS", "Vercel", "Cloudflare",
        "Segment", "Mixpanel", "PostHog",
      ]}
      caseStudies={[
        {
          title: "HR Management Platform",
          category: "HR Tech",
          description: "Complete HRIS solution serving 500+ companies and 50,000+ employees.",
          results: ["$5M ARR", "500+ customers"],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          href: "/portfolio/hr-platform",
        },
        {
          title: "Project Management SaaS",
          category: "Productivity",
          description: "Collaborative project management tool with real-time features.",
          results: ["100K+ users", "99.9% uptime"],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
          href: "/portfolio/project-management",
        },
        {
          title: "Marketing Automation",
          category: "MarTech",
          description: "AI-powered marketing platform for email, SMS, and social campaigns.",
          results: ["200% ROI for users", "1B+ emails sent"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          href: "/portfolio/marketing-automation",
        },
      ]}
      useCases={[
        "B2B SaaS Products",
        "Marketplace Platforms",
        "Subscription-Based Services",
        "White-Label Solutions",
        "Vertical SaaS Applications",
        "Platform-as-a-Service (PaaS)",
      ]}
    />
  );
};

export default SaaSDevelopment;
