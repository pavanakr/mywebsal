import { Bot, MessageSquare, Zap, Search } from 'lucide-react';
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
    />
  );
};

export default WhatsAppCRM;
