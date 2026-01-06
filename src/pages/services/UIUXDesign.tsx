import { Palette } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import heroUiuxDesign from '@/assets/hero-uiux-design.png';

const UIUXDesign = () => {
  return (
    <ServiceDetailPage
      heroImage={heroUiuxDesign}
      icon={Palette}
      color="from-pink-500 to-pink-600"
      title="UI/UX Design"
      tagline="User-centered design that delights users and drives conversions."
      description="We create intuitive, beautiful interfaces that users love. From research to prototyping to final designs, our design process ensures exceptional user experiences."
      benefits={[
        "User research & personas",
        "Information architecture",
        "Wireframing & prototyping",
        "Visual design",
        "Design systems",
        "Usability testing",
        "Accessibility compliance",
        "Conversion optimization",
      ]}
      process={[
        { number: "01", title: "Research", description: "User research, competitive analysis, and stakeholder interviews." },
        { number: "02", title: "Strategy", description: "Define UX strategy and information architecture." },
        { number: "03", title: "Wireframes", description: "Create low-fidelity wireframes and user flows." },
        { number: "04", title: "Prototyping", description: "Interactive prototypes for user testing." },
        { number: "05", title: "Visual Design", description: "High-fidelity designs and design systems." },
        { number: "06", title: "Handoff", description: "Developer handoff with specifications." },
      ]}
      technologies={["Figma", "Sketch", "Adobe XD", "Principle", "Framer", "InVision", "Maze", "Hotjar", "Storybook", "Zeroheight"]}
      caseStudies={[
        { title: "FinVault Redesign", category: "Fintech", description: "Complete UX overhaul for banking app.", results: ["45% conversion increase", "4.9 rating"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/finvault" },
        { title: "ShopSphere UX", category: "E-commerce", description: "E-commerce experience optimization.", results: ["35% cart increase", "20% lower bounce"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/shopsphere" },
        { title: "HealthPulse Design", category: "Healthcare", description: "Patient-friendly healthcare interface.", results: ["90% task completion", "Accessibility AA"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop", href: "/portfolio/healthpulse" },
      ]}
      useCases={["Mobile app design", "Web application design", "Design systems", "Redesign projects", "User research", "Usability audits"]}
    />
  );
};

export default UIUXDesign;
