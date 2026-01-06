import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Brain } from 'lucide-react';

const MachineLearning = () => {
  return (
    <ServiceDetailPage
      icon={Brain}
      color="from-pink-500 to-rose-600"
      title="Machine Learning & Deep Learning"
      tagline="Intelligent Systems That Learn and Evolve"
      description="Build sophisticated ML and deep learning models that automate complex tasks, recognize patterns, and deliver predictive insights at scale. From neural networks to recommendation systems, we create AI that drives real business value."
      benefits={[
        'Custom neural networks',
        'Computer vision',
        'Predictive models',
        'Transfer learning',
        'Model optimization',
        'Production deployment',
      ]}
      process={[
        { number: '01', title: 'Problem Definition', description: 'Define the ML problem and success metrics.' },
        { number: '02', title: 'Data Engineering', description: 'Prepare and engineer features for model training.' },
        { number: '03', title: 'Model Selection', description: 'Choose the right algorithms and architectures.' },
        { number: '04', title: 'Training & Tuning', description: 'Train models with hyperparameter optimization.' },
        { number: '05', title: 'Validation', description: 'Rigorous testing and validation for production readiness.' },
        { number: '06', title: 'Deployment & Monitoring', description: 'Deploy to production with continuous monitoring.' },
      ]}
      technologies={['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'CUDA', 'OpenCV', 'Hugging Face', 'Weights & Biases', 'Neptune.ai', 'AWS SageMaker', 'Google Vertex AI']}
      caseStudies={[
        {
          title: 'Predictive Maintenance System',
          category: 'Manufacturing',
          description: 'ML models predicting equipment failures with 95% accuracy.',
          results: ['95% accuracy', '30% downtime reduction'],
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
          href: '/portfolio',
        },
      ]}
      useCases={[
        'Image Classification',
        'Object Detection',
        'Time Series Forecasting',
        'Recommendation Engines',
        'Sentiment Analysis',
        'Anomaly Detection',
      ]}
    />
  );
};

export default MachineLearning;
