import { LayoutGrid, Zap, Bot, MessageSquare, Search } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const AllInOneCRM = () => {
  return (
    <ServiceDetailPage
      icon={LayoutGrid}
      color="from-orange-500 to-red-600"
      title="All-in-One CRM"
      tagline="The Complete Sales, Marketing & Automation Suite"
      description="Stop switching between tabs. Our All-in-One CRM combines sales automation, marketing outreach, and WhatsApp customer support in one unified platform."
      benefits={[
        'Unified sales & marketing',
        'WhatsApp automation',
        'Built-in AI chatbots',
        'Comprehensive reporting',
        'Lead scoring',
        'Customer lifecycle management'
      ]}
      process={[
        { number: '01', title: 'Mapping', description: 'Map your sales and marketing journey.' },
        { number: '02', title: 'Configuration', description: 'Set up unified pipeline.' },
        { number: '03', title: 'Automation', description: 'Build multi-channel workflows.' },
        { number: '04', title: 'Integration', description: 'Connect email, web, and WhatsApp.' },
        { number: '05', title: 'Training', description: 'Empower your team.' },
        { number: '06', title: 'Launch', description: 'Go live with full suite.' },
      ]}
      technologies={['React', 'Node.js', 'PostgreSQL', 'WhatsApp API', 'Stripe', 'Twilio', 'OpenAI', 'AWS']}
      caseStudies={[
        {
          title: 'GrowthSuite Hub',
          category: 'Growth',
          description: 'Integrated CRM suite for scaling sales teams.',
          results: ['2x faster closing', '40% better retention'],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
          href: '/portfolio/growthsuite',
        },
      ]}
      useCases={[
        'SME Business Sales',
        'Marketing Agency Ops',
        'E-commerce Sales Automation',
        'Customer Support Automation'
      ]}
    />
  );
};

export default AllInOneCRM;
