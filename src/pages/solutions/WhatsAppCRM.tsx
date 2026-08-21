import { Bot, MessageSquare, Zap, Search, Building2 } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const WhatsAppCRM = () => {
  return (
    <ServiceDetailPage
      icon={MessageSquare}
      color="from-green-500 to-green-600"
      title="WhatsApp CRM"
      tagline="Customer Management Right in WhatsApp"
      description="Turn WhatsApp into your primary CRM. Manage leads, close deals, and support customers directly from your team's WhatsApp inbox with automated tracking."
      benefits={[
        'WhatsApp-first sales',
        'Automated lead capture',
        'Conversation tracking',
        'Team inbox management',
        'WhatsApp chat automation',
        'Pipeline management'
      ]}
      process={[
        { number: '01', title: 'Integration', description: 'Link WhatsApp to CRM.' },
        { number: '02', title: 'Automation', description: 'Build response flows.' },
        { number: '03', title: 'Pipeline', description: 'Set up sales stages.' },
        { number: '04', title: 'Integration', description: 'Connect existing tools.' },
        { number: '05', title: 'Deployment', description: 'Team onboarding.' },
        { number: '06', title: 'Monitoring', description: 'Improve conversation quality.' },
      ]}
      technologies={['WhatsApp API', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS', 'Webhooks']}
      caseStudies={[
        {
          title: 'Direct Sales Chat',
          category: 'Sales',
          description: 'Closing leads directly through WhatsApp CRM conversations.',
          results: ['50% faster response', '30% more sales'],
          image: 'https://images.unsplash.com/photo-1588618491688-6619ee15e5b3?w=600&h=400&fit=crop',
          href: '/portfolio/direct-sales',
        },
      ]}
      useCases={[
        'Real Estate Lead Management',
        'Online Retail Sales',
        'Service Industry Booking',
        'Customer Support Ticketing'
      ]}
    >
      <div className="container-custom py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-8 text-center">Related CRM Solutions</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="/all-in-one-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Zap className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">All-in-One CRM</h4>
            <p className="text-sm text-muted-foreground">The complete sales, marketing, and automation suite.</p>
          </a>
          <a href="/real-estate-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Building2 className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">Real Estate CRM</h4>
            <p className="text-sm text-muted-foreground">Specialized property and lead management tools.</p>
          </a>
        </div>
      </div>
    </ServiceDetailPage>
  );
};

export default WhatsAppCRM;
