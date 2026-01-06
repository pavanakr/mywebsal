import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Cpu } from 'lucide-react';

const AIDevelopment = () => {
  return (
    <ServiceDetailPage
      icon={Cpu}
      color="from-violet-500 to-purple-600"
      title="AI Development Company"
      tagline="End-to-End Artificial Intelligence Solutions"
      description="Partner with Softurecs for comprehensive AI development services that transform your business with intelligent automation, predictive analytics, and cognitive computing. From strategy to deployment, we deliver production-ready AI solutions."
      benefits={[
        'Custom AI solutions',
        'MLOps implementation',
        'AI integration',
        'Edge AI deployment',
        'Continuous learning',
        'Scalable architecture',
      ]}
      process={[
        { number: '01', title: 'AI Strategy', description: 'Define AI roadmap aligned with your business objectives.' },
        { number: '02', title: 'Data Preparation', description: 'Collect, clean, and prepare data for model training.' },
        { number: '03', title: 'Model Development', description: 'Build and train custom AI/ML models for your use case.' },
        { number: '04', title: 'Integration', description: 'Integrate AI capabilities into your existing systems.' },
        { number: '05', title: 'Deployment', description: 'Deploy models to production with monitoring and versioning.' },
        { number: '06', title: 'Optimization', description: 'Continuous model improvement and performance tuning.' },
      ]}
      technologies={['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS SageMaker', 'Azure ML', 'Kubernetes', 'Docker', 'MLflow', 'Kubeflow', 'ONNX', 'FastAPI']}
      caseStudies={[
        {
          title: 'HealthPulse AI Diagnostics',
          category: 'Healthcare',
          description: 'AI-powered diagnostic assistant achieving 94% accuracy in early detection.',
          results: ['94% accuracy', '40% faster diagnosis'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
          href: '/portfolio/healthpulse',
        },
      ]}
      useCases={[
        'Predictive Analytics',
        'Computer Vision',
        'Natural Language Processing',
        'Recommendation Systems',
        'Fraud Detection',
        'Process Automation',
      ]}
    />
  );
};

export default AIDevelopment;
