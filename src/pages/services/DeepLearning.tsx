import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Layers } from 'lucide-react';

const DeepLearning = () => {
  return (
    <ServiceDetailPage
      icon={Layers}
      color="from-blue-500 to-indigo-600"
      title="Deep Learning Solutions"
      tagline="Advanced Neural Networks for Complex Problems"
      description="Leverage the power of deep neural networks for advanced pattern recognition, computer vision, speech processing, and autonomous systems. We build production-ready deep learning solutions that solve your toughest challenges."
      benefits={[
        'Computer vision',
        'Speech processing',
        'NLP models',
        'Edge deployment',
        'Model optimization',
        'Real-time inference',
      ]}
      process={[
        { number: '01', title: 'Problem Analysis', description: 'Analyze the problem and determine if deep learning is the right fit.' },
        { number: '02', title: 'Architecture Design', description: 'Design neural network architecture (CNN, RNN, Transformer).' },
        { number: '03', title: 'Data Pipeline', description: 'Build data pipelines for training and validation.' },
        { number: '04', title: 'Model Training', description: 'Train models with GPU/TPU acceleration.' },
        { number: '05', title: 'Optimization', description: 'Optimize for inference speed and model size.' },
        { number: '06', title: 'Production Deployment', description: 'Deploy to cloud, edge, or embedded devices.' },
      ]}
      technologies={['PyTorch', 'TensorFlow', 'CUDA', 'cuDNN', 'NVIDIA Triton', 'TensorRT', 'ONNX', 'OpenCV', 'Hugging Face', 'JAX', 'TPU', 'Ray']}
      caseStudies={[
        {
          title: 'Visual Quality Inspection',
          category: 'Manufacturing',
          description: 'Deep learning system detecting defects with 99% accuracy.',
          results: ['99% accuracy', '10x faster inspection'],
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
          href: '/portfolio',
        },
      ]}
      useCases={[
        'Object Detection',
        'Face Recognition',
        'Medical Imaging',
        'Voice Recognition',
        'Video Analysis',
        'Autonomous Systems',
      ]}
    />
  );
};

export default DeepLearning;
