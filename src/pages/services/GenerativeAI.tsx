import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Sparkles } from 'lucide-react';

const GenerativeAI = () => {
  return (
    <ServiceDetailPage
      icon={Sparkles}
      color="from-amber-500 to-orange-600"
      title="Generative AI Development"
      tagline="Create with the Power of Generative AI"
      description="Harness cutting-edge generative AI technologies to create content, automate workflows, and build next-generation applications. From custom GPT solutions to image generation, we help you leverage AI for unprecedented creativity and efficiency."
      benefits={[
        'Custom GPT apps',
        'Content generation',
        'Image synthesis',
        'Code assistance',
        'RAG systems',
        'Private deployment',
      ]}
      process={[
        { number: '01', title: 'Use Case Discovery', description: 'Identify high-impact generative AI applications for your business.' },
        { number: '02', title: 'Data Preparation', description: 'Curate and prepare data for fine-tuning and RAG.' },
        { number: '03', title: 'Model Selection', description: 'Choose the right foundation models for your needs.' },
        { number: '04', title: 'Fine-tuning', description: 'Customize models on your domain-specific data.' },
        { number: '05', title: 'Integration', description: 'Build applications powered by generative AI.' },
        { number: '06', title: 'Safety & Governance', description: 'Implement guardrails and content moderation.' },
      ]}
      technologies={['OpenAI GPT-4', 'Claude', 'Llama', 'Stable Diffusion', 'DALL-E', 'Midjourney API', 'LangChain', 'Pinecone', 'Chroma', 'Weaviate', 'Azure OpenAI', 'Anthropic']}
      caseStudies={[
        {
          title: 'Enterprise Knowledge Assistant',
          category: 'Technology',
          description: 'RAG-powered assistant reducing support queries by 60%.',
          results: ['60% query reduction', '80% faster answers'],
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
          href: '/portfolio',
        },
      ]}
      useCases={[
        'Customer Support Automation',
        'Content Generation',
        'Document Analysis',
        'Code Generation',
        'Creative Design',
        'Knowledge Management',
      ]}
    />
  );
};

export default GenerativeAI;
