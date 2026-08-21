import { MessageSquare, Cpu, Zap, Search, Bot } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const MetaAPICRM = () => {
  return (
    <ServiceDetailPage
      icon={MessageSquare}
      color="from-green-600 to-emerald-700"
      title="Meta API CRM"
      tagline="Official Meta API & WhatsApp CRM Integration"
      description="Leverage the power of the official Meta Business API. We build high-volume, reliable WhatsApp CRM solutions that scale with your business communications."
      benefits={[
        'Official Meta compliance',
        'High-volume messaging',
        'Team-based WhatsApp inbox',
        'Interactive message templates',
        'Webhook automation',
        'Advanced Meta analytics'
      ]}
      process={[
        { number: '01', title: 'Verification', description: 'Meta Business Manager verification.' },
        { number: '02', title: 'Setup', description: 'WhatsApp Business API onboarding.' },
        { number: '03', title: 'Pipeline', description: 'Create Meta-integrated CRM.' },
        { number: '04', title: 'Automations', description: 'Set up message flows.' },
        { number: '05', title: 'Testing', description: 'API health check.' },
        { number: '06', title: 'Live', description: 'Scale messaging.' },
      ]}
      technologies={['WhatsApp API', 'Meta API', 'Node.js', 'Redis', 'PostgreSQL', 'AWS', 'Webhooks']}
      caseStudies={[
        {
          title: 'Global Chat Enterprise',
          category: 'Messaging',
          description: 'Massive WhatsApp communication system via Meta API.',
          results: ['1M+ messages/mo', '99.9% uptime'],
          image: 'https://images.unsplash.com/photo-1596526132831-286a635848c2?w=600&h=400&fit=crop',
          href: '/portfolio/chat-enterprise',
        },
      ]}
      useCases={[
        'Global Support Operations',
        'Mass Communication/Broadcast',
        'E-commerce Order Alerts',
        'Customer Interaction Center'
      ]}
    >
      <div className="container-custom py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-8 text-center">Related Messaging Solutions</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="/whatsapp-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">WhatsApp CRM</h4>
            <p className="text-sm text-muted-foreground">Customer management right inside WhatsApp conversations.</p>
          </a>
          <a href="/services/ai-chatbot" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Bot className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">AI Chatbot</h4>
            <p className="text-sm text-muted-foreground">Intelligent virtual assistants for global scale support.</p>
          </a>
        </div>
      </div>
    </ServiceDetailPage>
  );
};

export default MetaAPICRM;
