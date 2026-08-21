import { Building2, Home, Users, BarChart3, MessageSquare, Zap, Search } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const RealEstateCRM = () => {
  return (
    <ServiceDetailPage
      icon={Building2}
      color="from-sky-500 to-blue-600"
      title="Real Estate CRM"
      tagline="Enterprise-Grade Property & Lead Management CRM"
      description="Streamline your real estate business with our specialized CRM. Designed for brokers, developers, and agents in India to manage properties, leads, and sales pipelines with WhatsApp & AI automation."
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
    />
  );
};

export default RealEstateCRM;
