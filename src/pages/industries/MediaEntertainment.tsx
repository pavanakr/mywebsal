import { Film, Play, Users, BarChart, Tv, Music } from 'lucide-react';
import { IndustryDetailPage } from '@/components/industries/IndustryDetailPage';

const MediaEntertainment = () => {
  return (
    <IndustryDetailPage
      icon={Film}
      color="from-violet-500 to-violet-600"
      name="Media & Entertainment"
      tagline="Digital Content Excellence"
      description="We build engaging media platforms for content streaming, sharing, and monetization that captivate audiences and drive revenue growth."
      stats={[
        { value: "100M+", label: "Monthly Streams" },
        { value: "50+", label: "Media Clients" },
        { value: "4K/HDR", label: "Quality Support" },
        { value: "99.9%", label: "Stream Uptime" },
      ]}
      challenges={[
        {
          title: "Content Delivery",
          description: "Delivering high-quality video content globally with minimal buffering.",
        },
        {
          title: "User Engagement",
          description: "Keeping users engaged with personalized content recommendations.",
        },
        {
          title: "Monetization",
          description: "Implementing effective monetization strategies beyond subscriptions.",
        },
        {
          title: "Rights Management",
          description: "Managing complex content rights and licensing across regions.",
        },
        {
          title: "Multi-platform Support",
          description: "Delivering consistent experience across web, mobile, and smart TVs.",
        },
        {
          title: "Piracy Protection",
          description: "Protecting premium content from unauthorized distribution.",
        },
      ]}
      solutions={[
        {
          title: "Video Streaming Platforms",
          description: "Scalable OTT platforms with adaptive streaming and multi-device support.",
          icon: Tv,
        },
        {
          title: "Content Management",
          description: "Comprehensive CMS for media assets, metadata, and publishing workflows.",
          icon: Film,
        },
        {
          title: "Music Streaming",
          description: "Audio streaming platforms with playlist management and social features.",
          icon: Music,
        },
        {
          title: "Analytics & Insights",
          description: "Viewer analytics, content performance metrics, and revenue tracking.",
          icon: BarChart,
        },
      ]}
      capabilities={[
        "OTT Platform Development",
        "Video Streaming",
        "Audio Streaming",
        "Content Management",
        "DRM Integration",
        "Live Streaming",
        "Social Features",
        "Ad Tech Integration",
      ]}
      caseStudies={[
        {
          title: "StreamVision OTT",
          description: "Premium video streaming platform with 10M+ subscribers.",
          results: ["10M+ subscribers", "4K streaming"],
          image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
          href: "/portfolio/streamvision",
        },
        {
          title: "PodcastHub",
          description: "Podcast platform with discovery and monetization features.",
          results: ["1M+ podcasts", "50M downloads/mo"],
          image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop",
          href: "/portfolio/podcasthub",
        },
        {
          title: "LiveEvents Pro",
          description: "Live streaming platform for concerts and sporting events.",
          results: ["500K concurrent", "Ultra-low latency"],
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
          href: "/portfolio/liveevents",
        },
      ]}
    />
  );
};

export default MediaEntertainment;
