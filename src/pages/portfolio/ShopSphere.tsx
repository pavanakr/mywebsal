import { CaseStudyDetailPage } from '@/components/portfolio/CaseStudyDetailPage';

const ShopSphere = () => {
  return (
    <CaseStudyDetailPage
      title="ShopSphere Commerce"
      client="ShopSphere Inc."
      industry="E-commerce"
      duration="14 months"
      teamSize="18 engineers"
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop"
      overview="A scalable multi-vendor marketplace platform supporting millions of daily transactions with 5M+ products from 100K+ vendors worldwide."
      challenge="ShopSphere needed to build a marketplace that could scale to handle millions of products, thousands of vendors, and peak traffic during sales events. The platform needed to provide excellent seller tools, seamless buyer experiences, and sophisticated fraud prevention while maintaining sub-second page loads."
      solution="We architected a headless commerce platform with microservices that can scale independently. The solution includes a powerful seller portal, AI-driven product recommendations, advanced search with filters, real-time inventory management, and a robust payment processing system supporting 30+ payment methods across 50+ countries."
      features={[
        "Multi-vendor marketplace",
        "Seller dashboard & analytics",
        "AI product recommendations",
        "Advanced search & filters",
        "Real-time inventory sync",
        "Multi-currency support",
        "Fraud prevention",
        "Reviews & ratings",
        "Order tracking",
        "Dispute resolution",
        "Mobile apps",
        "Flash sales engine",
      ]}
      technologies={[
        "Next.js", "Node.js", "GraphQL", "PostgreSQL",
        "Elasticsearch", "Redis", "Kafka",
        "Stripe", "AWS", "CloudFront", "Algolia",
      ]}
      metrics={[
        { value: "5M+", label: "Products Listed" },
        { value: "100K+", label: "Active Vendors" },
        { value: "25%", label: "Conversion Lift" },
        { value: "<100ms", label: "Page Load" },
      ]}
      testimonial={{
        quote: "Vertex Labs delivered a platform that not only met our scale requirements but exceeded our expectations for performance and reliability. Our marketplace is now one of the fastest-growing in the region.",
        author: "James Liu",
        role: "Founder & CEO, ShopSphere",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      }}
      screenshots={[
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      ]}
    />
  );
};

export default ShopSphere;
