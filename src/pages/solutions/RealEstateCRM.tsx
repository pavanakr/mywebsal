import { Building2, Home, Users, BarChart3, MessageSquare, Zap, Search, Bot } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const RealEstateCRM = () => {
  return (
    <ServiceDetailPage
      icon={Building2}
      color="from-sky-500 to-blue-600"
      title="Real Estate CRM"
      tagline="Enterprise-Grade Property & Lead Management CRM"
      description="Streamline your real estate business with our specialized CRM. Designed for brokers, developers, and agents in India to manage properties, leads, and sales pipelines with <a href='/whatsapp-crm' class='text-accent hover:underline'>WhatsApp CRM</a> & <a href='/meta-api-crm' class='text-accent hover:underline'>Meta API CRM</a> automation. Boost your sales efficiency with our <a href='/services/ai-chatbot' class='text-accent hover:underline'>AI Chatbot</a> integration."
      benefits={[
        'Automated lead tracking',
        'Real estate sales pipeline',
        'Agent performance tracking',
        'WhatsApp CRM integration',
        'Property listing management',
        'Client follow-up automation'
      ]}
      process={[
        { number: '01', title: 'Consultation', description: 'Analyze your real estate workflow.' },
        { number: '02', title: 'CRM Design', description: 'Configure lead stages and property fields.' },
        { number: '03', title: 'Automation Setup', description: 'Implement WhatsApp & AI workflows.' },
        { number: '04', title: 'Platform Deployment', description: 'Launch your secure, scalable CRM.' },
        { number: '05', title: 'Training', description: 'Agent onboarding and training.' },
        { number: '06', title: 'Optimization', description: 'Continuous performance tuning.' },
      ]}
      technologies={['React', 'Node.js', 'PostgreSQL', 'WhatsApp API', 'Meta API', 'AWS', 'Redis', 'Python']}
      caseStudies={[
        {
          title: 'PropView360',
          category: 'Real Estate',
          description: 'CRM implementation resulting in faster lead conversion for a large developer.',
          results: ['35% faster sales', '50K+ properties managed'],
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
          href: '/portfolio/propview',
        },
      ]}
      useCases={[
        'Real Estate Lead Management',
        'Broker/Agent Collaboration',
        'WhatsApp Lead Capture',
        'Property Inventory Tracking',
        'Sales Performance Reporting'
      ]}
    >
      <div className="container-custom py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-8 text-center">Related CRM Solutions</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <a href="/whatsapp-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">WhatsApp CRM</h4>
            <p className="text-sm text-muted-foreground">Automate lead capture and communication via WhatsApp.</p>
          </a>
          <a href="/meta-api-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Zap className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">Meta API CRM</h4>
            <p className="text-sm text-muted-foreground">Official WhatsApp Cloud API for high-volume real estate alerts.</p>
          </a>
          <a href="/all-in-one-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Zap className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">All-in-One CRM</h4>
            <p className="text-sm text-muted-foreground">Unified platform for sales, marketing, and support.</p>
          </a>
          <a href="/services/ai-chatbot" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Bot className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">AI Chatbot</h4>
            <p className="text-sm text-muted-foreground">24/7 AI assistants to qualify property inquiries instantly.</p>
          </a>
        </div>
      </div>
      
      <div className="container-custom py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-8 text-center">Real Estate CRM FAQ</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-2xl border border-border/50">
            <h4 className="font-bold mb-2">Is the CRM mobile-friendly?</h4>
            <p className="text-muted-foreground">Yes, our Real Estate CRM is fully responsive and accessible via mobile devices, ensuring agents can manage leads on the go.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-border/50">
            <h4 className="font-bold mb-2">Can I integrate my existing property listings?</h4>
            <p className="text-muted-foreground">Absolutely. We provide MLS/IDX integration and custom data migration services to bring all your existing properties into the new CRM.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-border/50">
            <h4 className="font-bold mb-2">How does the WhatsApp integration work?</h4>
            <p className="text-muted-foreground">The CRM connects to the WhatsApp Business API, allowing you to send automated alerts, property details, and follow-up messages directly to clients.</p>
          </div>
        </div>
      </div>
    </ServiceDetailPage>
  );
};

export default RealEstateCRM;
