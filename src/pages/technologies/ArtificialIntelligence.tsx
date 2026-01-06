import { Brain } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const ArtificialIntelligence = () => {
  return (
    <ServiceDetailPage
      icon={Brain}
      color="from-purple-500 to-purple-600"
      title="Artificial Intelligence"
      tagline="Intelligent solutions that transform business."
      description="Harness the power of AI to automate processes, gain insights, and create intelligent applications that drive competitive advantage."
      benefits={["Process automation", "Predictive analytics", "Natural language processing", "Computer vision", "Recommendation systems", "Intelligent search", "Fraud detection", "Customer insights"]}
      process={[
        { number: "01", title: "Discovery", description: "Identify AI opportunities in your business." },
        { number: "02", title: "Data Assessment", description: "Evaluate data readiness and quality." },
        { number: "03", title: "Model Development", description: "Build and train AI models." },
        { number: "04", title: "Integration", description: "Integrate AI into your workflows." },
        { number: "05", title: "Testing", description: "Validate model performance." },
        { number: "06", title: "Deployment", description: "Deploy and monitor in production." },
      ]}
      technologies={["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "Python", "AWS SageMaker", "Azure ML", "Vertex AI", "MLflow"]}
      caseStudies={[
        { title: "Customer Service AI", category: "Retail", description: "AI chatbot handling 80% of queries.", results: ["80% automation", "60% cost reduction"], image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop", href: "/portfolio/ai-chatbot" },
        { title: "Predictive Analytics", category: "Finance", description: "Risk prediction for loan approvals.", results: ["40% better accuracy", "50% faster"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/predictive" },
        { title: "Computer Vision", category: "Manufacturing", description: "Quality inspection automation.", results: ["99% accuracy", "10x faster"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/vision" },
      ]}
      useCases={["Chatbots & virtual assistants", "Predictive maintenance", "Fraud detection", "Recommendation engines", "Document processing", "Image recognition"]}
    />
  );
};

export default ArtificialIntelligence;
