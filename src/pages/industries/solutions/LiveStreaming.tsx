import { Film, Radio, Users, MessageSquare, BarChart, Zap } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const LiveStreaming = () => {
  return (
    <SubIndustryDetailPage
      icon={Radio}
      color="from-red-500 to-orange-600"
      parentIndustry="Media & Entertainment"
      parentHref="/industries/media-entertainment"
      name="Live Streaming Solutions"
      tagline="Real-Time Broadcasting at Scale"
      description="Ultra-low latency live streaming platforms for concerts, sports, gaming, and corporate events. Our solutions support millions of concurrent viewers with sub-second latency and interactive features."
      stats={[
        { value: "500K+", label: "Concurrent Viewers" },
        { value: "<1s", label: "Latency" },
        { value: "4K", label: "Resolution" },
        { value: "99.9%", label: "Reliability" },
      ]}
      features={[
        {
          title: "Ultra-Low Latency",
          description: "Sub-second glass-to-glass latency for real-time interaction.",
          icon: Zap,
        },
        {
          title: "Live Chat & Reactions",
          description: "Real-time chat, emoji reactions, and audience polls.",
          icon: MessageSquare,
        },
        {
          title: "Multi-Camera Support",
          description: "Switch between multiple camera angles and picture-in-picture.",
          icon: Film,
        },
        {
          title: "Live Analytics",
          description: "Real-time viewer metrics, engagement tracking, and heatmaps.",
          icon: BarChart,
        },
      ]}
      benefits={[
        "Engage audiences with real-time interaction",
        "Scale to millions of viewers automatically",
        "Monetize through tickets, donations, or sponsorships",
        "Integrate with social media platforms",
        "Record and archive streams for VOD",
        "Provide multi-language audio tracks",
      ]}
      technologies={["WebRTC", "HLS/DASH", "AWS IVS", "React", "Node.js", "Redis", "Kubernetes", "CDN"]}
      useCases={[
        { title: "Live Concerts & Festivals", description: "Stream music events to global audiences." },
        { title: "Sports Events & Esports", description: "Live coverage of games and tournaments." },
        { title: "Corporate Town Halls", description: "Internal broadcasts with Q&A features." },
        { title: "Product Launches", description: "Live product reveals with audience engagement." },
        { title: "Religious Services", description: "Stream worship services to congregations." },
        { title: "Gaming Streams", description: "Interactive gaming broadcasts with chat." },
      ]}
    />
  );
};

export default LiveStreaming;