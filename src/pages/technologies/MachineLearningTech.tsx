import { Brain } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const MachineLearningTech = () => {
  return (
    <ServiceDetailPage
      icon={Brain}
      color="from-indigo-500 to-indigo-600"
      title="Machine Learning"
      tagline="Data-driven intelligence for your business."
      description="Develop custom machine learning models that learn from your data to automate decisions, predict outcomes, and unlock new insights."
      benefits={["Custom ML models", "Predictive analytics", "Computer vision", "NLP solutions", "Recommendation systems", "Anomaly detection", "Time series forecasting", "AutoML"]}
      process={[
        { number: "01", title: "Problem Definition", description: "Define ML problem and success metrics." },
        { number: "02", title: "Data Preparation", description: "Collect, clean, and prepare data." },
        { number: "03", title: "Model Development", description: "Train and evaluate ML models." },
        { number: "04", title: "Optimization", description: "Tune hyperparameters and optimize." },
        { number: "05", title: "Deployment", description: "Deploy models to production." },
        { number: "06", title: "Monitoring", description: "Monitor and retrain models." },
      ]}
      technologies={["Python", "TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "AWS SageMaker", "MLflow", "Kubeflow", "Weights & Biases", "Vertex AI"]}
      caseStudies={[
        { title: "Demand Forecasting", category: "Retail", description: "ML-powered demand prediction.", results: ["25% better accuracy", "Reduced stockouts"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/forecasting" },
        { title: "Credit Scoring", category: "Finance", description: "ML-based credit risk assessment.", results: ["40% better prediction", "Faster decisions"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/credit" },
        { title: "Quality Control", category: "Manufacturing", description: "Visual inspection with ML.", results: ["99% accuracy", "10x faster"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/quality" },
      ]}
      useCases={["Predictive analytics", "Computer vision", "NLP applications", "Recommendation engines", "Fraud detection", "Demand forecasting"]}
    />
  );
};

export default MachineLearningTech;
