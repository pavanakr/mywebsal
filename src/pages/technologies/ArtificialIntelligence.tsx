import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Brain, Eye, MessageCircle, BarChart, Zap, Cog } from "lucide-react";

const ArtificialIntelligence = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Artificial Intelligence"
        subtitle="Intelligent solutions that transform business"
        description="Harness the power of AI to automate processes, gain insights, and create intelligent applications that drive competitive advantage."
        icon={<Brain className="w-12 h-12" />}
        features={[
          {
            icon: <Brain className="w-6 h-6" />,
            title: "Machine Learning",
            description: "Custom ML models for prediction and classification."
          },
          {
            icon: <Eye className="w-6 h-6" />,
            title: "Computer Vision",
            description: "Image recognition, object detection, and video analysis."
          },
          {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Natural Language",
            description: "NLP for text analysis, chatbots, and sentiment."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Predictive Analytics",
            description: "Forecast trends and behaviors with AI models."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Process Automation",
            description: "Intelligent automation with RPA and AI."
          },
          {
            icon: <Cog className="w-6 h-6" />,
            title: "AI Integration",
            description: "Embed AI capabilities into existing systems."
          }
        ]}
        technologies={["TensorFlow", "PyTorch", "OpenAI", "Anthropic", "Hugging Face", "scikit-learn", "NVIDIA", "AWS SageMaker"]}
        benefits={[
          "Automate repetitive tasks and reduce costs",
          "Make data-driven decisions with AI insights",
          "Enhance customer experiences with personalization",
          "Stay competitive with cutting-edge technology"
        ]}
      />
    </Layout>
  );
};

export default ArtificialIntelligence;
