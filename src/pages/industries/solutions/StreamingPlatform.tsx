import { Film, Play, Users, BarChart, Tv, Shield } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const StreamingPlatform = () => {
  return (
    <SubIndustryDetailPage
      icon={Tv}
      color="from-violet-500 to-purple-600"
      parentIndustry="Media & Entertainment"
      parentHref="/industries/media-entertainment"
      name="OTT Streaming Platforms"
      tagline="Premium Video Streaming Experience"
      description="We build Netflix-like OTT platforms with adaptive streaming, multi-device support, and advanced content recommendation engines. Our solutions handle millions of concurrent viewers while delivering 4K/HDR content seamlessly."
      stats={[
        { value: "10M+", label: "Subscribers" },
        { value: "4K HDR", label: "Quality" },
        { value: "99.99%", label: "Uptime" },
        { value: "50ms", label: "Latency" },
      ]}
      features={[
        {
          title: "Adaptive Streaming",
          description: "HLS/DASH streaming with automatic quality adjustment based on bandwidth.",
          icon: Play,
        },
        {
          title: "Content Recommendations",
          description: "AI-powered personalization engine for content discovery and engagement.",
          icon: BarChart,
        },
        {
          title: "Multi-Device Support",
          description: "Seamless experience across web, mobile, smart TVs, and gaming consoles.",
          icon: Tv,
        },
        {
          title: "DRM Protection",
          description: "Enterprise-grade content protection with Widevine, FairPlay, and PlayReady.",
          icon: Shield,
        },
      ]}
      benefits={[
        "Deliver buffer-free streaming to global audiences",
        "Increase engagement with personalized recommendations",
        "Protect premium content with multi-DRM security",
        "Scale infrastructure automatically during peak demand",
        "Monetize through subscriptions, ads, or hybrid models",
        "Gain insights with comprehensive viewer analytics",
      ]}
      technologies={["AWS MediaServices", "React", "Node.js", "Redis", "Elasticsearch", "CDN", "HLS/DASH", "Kubernetes"]}
      useCases={[
        { title: "Video-on-Demand", description: "Netflix-style VOD platforms with vast content libraries." },
        { title: "Live Sports Streaming", description: "Ultra-low latency streaming for sporting events." },
        { title: "Educational Content", description: "Video courses and lecture streaming for learning platforms." },
        { title: "Corporate Video Portals", description: "Internal video libraries for enterprise communications." },
        { title: "Religious Broadcasting", description: "Live and on-demand religious content worldwide." },
        { title: "Regional Content", description: "Local language streaming platforms." },
      ]}
    />
  );
};

export default StreamingPlatform;