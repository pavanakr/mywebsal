import { Cpu } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import heroAiAutomation from '@/assets/hero-ai-automation.png';

const AIAutomation = () => {
  return (
    <ServiceDetailPage
      heroImage={heroAiAutomation}
      icon={Cpu}
      color="from-pink-500 to-pink-600"
      title="Artificial Intelligence Development Services for Smart Businesses"
      tagline="AI-Powered Automation & Intelligence. Machine Learning & Deep Learning Solutions. Generative AI & LLM Development."
      description="Harness the power of artificial intelligence to automate complex tasks, gain actionable insights, and create intelligent experiences. From chatbots to predictive analytics, we help you leverage AI for competitive advantage."
      benefits={[
        "Process automation",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "Recommendation engines",
        "Fraud detection",
        "Intelligent chatbots",
        "Custom ML models",
      ]}
      process={[
        {
          number: "01",
          title: "Use Case Discovery",
          description: "Identify high-impact AI opportunities within your organization.",
        },
        {
          number: "02",
          title: "Data Assessment",
          description: "Evaluate data quality, availability, and requirements for AI solutions.",
        },
        {
          number: "03",
          title: "Model Development",
          description: "Build and train custom machine learning models for your use case.",
        },
        {
          number: "04",
          title: "Integration & Testing",
          description: "Integrate AI models into your workflows and validate performance.",
        },
        {
          number: "05",
          title: "Deployment & Scaling",
          description: "Deploy models to production with monitoring and auto-scaling.",
        },
        {
          number: "06",
          title: "Continuous Learning",
          description: "Implement feedback loops for continuous model improvement.",
        },
      ]}
      technologies={[
        "TensorFlow", "PyTorch", "scikit-learn", "Keras",
        "OpenAI GPT", "Anthropic Claude", "Hugging Face",
        "LangChain", "LlamaIndex", "Pinecone", "Weaviate",
        "Python", "Jupyter", "MLflow", "Kubeflow",
        "AWS SageMaker", "Azure ML", "Vertex AI",
      ]}
      caseStudies={[
        {
          title: "AI Customer Service Bot",
          category: "E-commerce",
          description: "Intelligent chatbot handling 80% of customer inquiries automatically.",
          results: ["80% automation rate", "24/7 availability"],
          image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
          href: "/portfolio/ai-chatbot",
        },
        {
          title: "Predictive Maintenance",
          category: "Manufacturing",
          description: "ML-powered system predicting equipment failures before they occur.",
          results: ["35% less downtime", "$2M annual savings"],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
          href: "/portfolio/predictive-maintenance",
        },
        {
          title: "Document Intelligence",
          category: "Legal",
          description: "AI system for automated contract analysis and data extraction.",
          results: ["90% faster processing", "99% accuracy"],
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
          href: "/portfolio/document-ai",
        },
      ]}
      useCases={[
        "Conversational AI & Chatbots",
        "Predictive Analytics",
        "Document Processing & OCR",
        "Recommendation Systems",
        "Fraud Detection & Prevention",
        "Process Automation (RPA)",
      ]}
    />
  );
};

export default AIAutomation;
