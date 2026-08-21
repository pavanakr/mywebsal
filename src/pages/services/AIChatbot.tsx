import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIChatbot = () => {
  return (
    <ServiceDetailPage
      icon={Bot}
      color="from-green-500 to-emerald-600"
      title="AI Chatbot Development"
      tagline="Intelligent Conversational AI Solutions"
      description={<>Build sophisticated AI chatbots and virtual assistants that understand natural language, provide instant support, and deliver personalized experiences across all channels. Our bots integrate seamlessly with <Link to='/services/ai-automation' className='text-accent hover:underline'>AI Automation</Link> workflows and <Link to='/all-in-one-crm' className='text-accent hover:underline'>CRM</Link> platforms. From simple FAQ bots to complex transactional assistants.</>}
      benefits={[
        '24/7 availability',
        'Multi-channel support',
        'Multilingual bots',
        'Seamless handoff',
        'Lead qualification',
        '70% cost reduction',
      ]}
      process={[
        { number: '01', title: 'Conversation Design', description: 'Design conversation flows and user intents.' },
        { number: '02', title: 'NLU Training', description: 'Train natural language understanding models.' },
        { number: '03', title: 'Bot Development', description: 'Build the chatbot with integrations and logic.' },
        { number: '04', title: 'Channel Integration', description: 'Deploy to website, WhatsApp, Slack, and more.' },
        { number: '05', title: 'Testing & Refinement', description: 'Test conversations and refine responses.' },
        { number: '06', title: 'Analytics & Improvement', description: 'Monitor performance and continuously improve.' },
      ]}
      technologies={['OpenAI', 'Dialogflow', 'Amazon Lex', 'Rasa', 'Botpress', 'Microsoft Bot Framework', 'Twilio', 'WhatsApp API', 'Messenger API', 'Slack API', 'WebSocket', 'LangChain']}
      caseStudies={[
        {
          title: 'E-commerce Support Bot',
          category: 'Retail',
          description: 'AI chatbot handling 80% of customer queries without human intervention.',
          results: ['80% automation', '24/7 support'],
          image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
          href: '/portfolio/shopsphere',
        },
      ]}
      useCases={[
        'Customer Support',
        'Lead Generation',
        'Appointment Booking',
        'Order Tracking',
        'FAQ Automation',
        'Employee Helpdesk',
      ]}
    />
  );
};

export default AIChatbot;
