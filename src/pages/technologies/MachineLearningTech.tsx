import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Brain, BarChart, Eye, MessageCircle, Cog, TrendingUp } from "lucide-react";

const MachineLearningTech = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Machine Learning"
        subtitle="Data-driven intelligence for your business"
        description="Develop custom machine learning models that learn from your data to automate decisions, predict outcomes, and unlock new insights."
        icon={<Brain className="w-12 h-12" />}
        features={[
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Predictive Models",
            description: "Forecast trends, demand, and customer behavior."
          },
          {
            icon: <Eye className="w-6 h-6" />,
            title: "Computer Vision",
            description: "Image classification, object detection, and OCR."
          },
          {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "NLP Solutions",
            description: "Text analysis, sentiment detection, and chatbots."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Recommendation Engines",
            description: "Personalized recommendations that boost engagement."
          },
          {
            icon: <Cog className="w-6 h-6" />,
            title: "MLOps",
            description: "End-to-end ML pipeline automation and monitoring."
          },
          {
            icon: <Brain className="w-6 h-6" />,
            title: "Model Training",
            description: "Custom model development and fine-tuning."
          }
        ]}
        technologies={["Python", "TensorFlow", "PyTorch", "scikit-learn", "MLflow", "Kubeflow", "AWS SageMaker", "Databricks"]}
        benefits={[
          "Automate complex decisions with ML",
          "Uncover patterns in large datasets",
          "Improve customer personalization",
          "Reduce costs with predictive maintenance"
        ]}
      />
    </Layout>
  );
};

export default MachineLearningTech;
