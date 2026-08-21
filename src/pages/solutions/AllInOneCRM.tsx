import { LayoutGrid, Zap, Bot, MessageSquare, Search, Layers } from 'lucide-react';
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
    >
      <div className="container-custom py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-8 text-center">Related Solutions</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="/multi-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Layers className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">Multi CRM</h4>
            <p className="text-sm text-muted-foreground">Unified management for multi-business operations.</p>
          </a>
          <a href="/whatsapp-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">WhatsApp CRM</h4>
            <p className="text-sm text-muted-foreground">Sell and support directly via WhatsApp.</p>
          </a>
        </div>
      </div>
    </ServiceDetailPage>
  );
};

export default AllInOneCRM;
