import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { MessageSquareText } from 'lucide-react';

const LLMDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={MessageSquareText}
      color="from-fuchsia-500 to-pink-600"
      title="LLM Development"
      tagline="Custom Large Language Model Solutions"
      description="Build, fine-tune, and deploy custom large language models tailored to your domain. We help you create private, accurate, and contextually relevant AI-powered applications while maintaining data security and reducing costs."
      benefits={[
        'Custom fine-tuning',
        'Private deployment',
        'RAG architecture',
        'Reduced hallucinations',
        'Cost optimization',
        'Domain expertise',
      ]}
      process={[
        { number: '01', title: 'Use Case Definition', description: 'Define LLM applications and success criteria.' },
        { number: '02', title: 'Model Selection', description: 'Choose base models (GPT, Claude, Llama, etc.).' },
        { number: '03', title: 'Data Preparation', description: 'Prepare training data and knowledge bases.' },
        { number: '04', title: 'Fine-tuning', description: 'Fine-tune models on your domain data.' },
        { number: '05', title: 'RAG Implementation', description: 'Build retrieval-augmented generation pipelines.' },
        { number: '06', title: 'Deployment & Scaling', description: 'Deploy with monitoring and auto-scaling.' },
      ]}
      technologies={['OpenAI', 'Anthropic Claude', 'Llama 2', 'Mistral', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'vLLM', 'Ollama', 'Azure OpenAI', 'AWS Bedrock']}
      caseStudies={[
        {
          title: 'Legal Document AI',
          category: 'Legal Tech',
          description: 'Custom LLM for contract analysis and legal research.',
          results: ['90% accuracy', '70% time savings'],
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
          href: '/portfolio',
        },
      ]}
      useCases={[
        'Knowledge Assistants',
        'Document Analysis',
        'Code Generation',
        'Customer Support',
        'Content Creation',
        'Research Tools',
      ]}
    />
  );
};

export default LLMDevelopment;
