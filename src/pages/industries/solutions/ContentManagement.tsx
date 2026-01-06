import { Film, FileText, Upload, Search, Tags, Clock } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const ContentManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={FileText}
      color="from-purple-500 to-indigo-600"
      parentIndustry="Media & Entertainment"
      parentHref="/industries/media-entertainment"
      name="Media Content Management"
      tagline="Organize, Manage & Distribute Content"
      description="Enterprise media asset management systems that organize, tag, and distribute content across channels. Our CMS solutions handle petabytes of media with advanced metadata management and automated workflows."
      stats={[
        { value: "100PB+", label: "Assets Managed" },
        { value: "1M+", label: "Daily Uploads" },
        { value: "50%", label: "Workflow Efficiency" },
        { value: "24/7", label: "Processing" },
      ]}
      features={[
        {
          title: "Asset Ingestion",
          description: "Bulk upload with automatic transcoding and format conversion.",
          icon: Upload,
        },
        {
          title: "AI-Powered Tagging",
          description: "Automatic metadata extraction, face detection, and scene recognition.",
          icon: Tags,
        },
        {
          title: "Advanced Search",
          description: "Full-text and visual search across millions of media assets.",
          icon: Search,
        },
        {
          title: "Workflow Automation",
          description: "Automated review, approval, and publishing workflows.",
          icon: Clock,
        },
      ]}
      benefits={[
        "Find any asset in seconds with intelligent search",
        "Automate repetitive tasks and reduce manual effort",
        "Ensure brand consistency across all channels",
        "Track asset usage and licensing compliance",
        "Integrate with existing production tools",
        "Scale storage and processing on demand",
      ]}
      technologies={["React", "Node.js", "Elasticsearch", "AWS S3", "FFmpeg", "TensorFlow", "PostgreSQL", "Redis"]}
      useCases={[
        { title: "Broadcasting Networks", description: "Manage broadcast-ready content and playlists." },
        { title: "Streaming Services", description: "Content library management for VOD platforms." },
        { title: "News Organizations", description: "Fast-paced newsroom asset management." },
        { title: "Sports Leagues", description: "Event footage and highlight management." },
        { title: "Production Studios", description: "Pre and post-production asset workflows." },
        { title: "Marketing Agencies", description: "Brand asset management and distribution." },
      ]}
    />
  );
};

export default ContentManagement;