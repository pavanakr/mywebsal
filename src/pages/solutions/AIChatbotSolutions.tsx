import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { Bot, MessageCircle, Brain, Zap, Globe, BarChart } from "lucide-react";

const AIChatbotSolutions = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="AI Chatbot Solutions"
        subtitle="Intelligent conversational AI for business"
        description="Build powerful AI chatbots that automate customer support, lead generation, and engagement. Leverage NLP and LLMs for natural conversations."
        icon={<Bot className="w-12 h-12" />}
        features={[
          {
            icon: <Brain className="w-6 h-6" />,
            title: "LLM Integration",
            description: "Powered by GPT-4, Claude, and custom models."
          },
          {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Multi-Channel",
            description: "Deploy on web, mobile, WhatsApp, and social media."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Responses",
            description: "24/7 automated responses with human handoff."
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multilingual",
            description: "Support for 100+ languages with translation."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytics",
            description: "Conversation insights and performance metrics."
          },
          {
            icon: <Bot className="w-6 h-6" />,
            title: "Custom Training",
            description: "Train on your knowledge base and documents."
          }
        ]}
        benefits={[
          "Reduce support costs by up to 70%",
          "Provide instant 24/7 customer service",
          "Scale customer interactions effortlessly",
          "Capture and qualify leads automatically"
        ]}
        useCases={[
          "Customer support automation",
          "E-commerce shopping assistants",
          "Lead qualification bots",
          "Internal knowledge assistants"
        ]}
      />
    </Layout>
  );
};

export default AIChatbotSolutions;
