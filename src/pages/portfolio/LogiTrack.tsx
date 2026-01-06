import { CaseStudyDetailPage } from '@/components/portfolio/CaseStudyDetailPage';

const LogiTrack = () => {
  return (
    <CaseStudyDetailPage
      title="LogiTrack Pro"
      client="LogiTrack Global"
      industry="Logistics"
      duration="8 months"
      teamSize="10 engineers"
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop"
      overview="Real-time supply chain visibility platform enabling global operations tracking, route optimization, and predictive analytics for logistics companies."
      challenge="LogiTrack Global was managing a complex network of shipments across 50+ countries with limited visibility and manual tracking processes. They needed a platform that could provide real-time visibility, optimize routes dynamically, predict delays before they happen, and integrate with multiple carriers and IoT devices."
      solution="We built a comprehensive supply chain visibility platform with real-time GPS tracking, machine learning-powered ETAs, and automated exception management. The system integrates with 100+ carriers, processes data from thousands of IoT sensors, and provides actionable insights through an intuitive dashboard."
      features={[
        "Real-time GPS tracking",
        "Predictive ETA calculations",
        "Route optimization",
        "Exception management",
        "Multi-carrier integration",
        "IoT sensor monitoring",
        "Temperature tracking",
        "Proof of delivery",
        "Analytics dashboard",
        "Customer notifications",
        "API for partners",
        "Mobile driver app",
      ]}
      technologies={[
        "React", "Python", "PostgreSQL", "TimescaleDB",
        "Apache Kafka", "Redis", "TensorFlow",
        "AWS", "Docker", "Kubernetes", "MapBox",
      ]}
      metrics={[
        { value: "30%", label: "Cost Reduction" },
        { value: "15K", label: "Daily Shipments" },
        { value: "50+", label: "Countries" },
        { value: "98%", label: "ETA Accuracy" },
      ]}
      testimonial={{
        quote: "The platform Vertex Labs built has transformed our operations. We now have complete visibility across our supply chain and can proactively manage exceptions before they impact our customers.",
        author: "Emily Watson",
        role: "Director of Technology, LogiTrack",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      }}
      screenshots={[
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop",
      ]}
    />
  );
};

export default LogiTrack;
