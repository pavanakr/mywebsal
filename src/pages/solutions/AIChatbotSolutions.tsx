import { Bot, MessageSquare, Zap, Shield, BarChart3, Clock, Users } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const AIChatbotSolutions = () => {
  return (
    <SubIndustryDetailPage
      icon={Bot}
      color="from-purple-500 to-purple-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="AI Chatbot"
      tagline="Intelligent AI Chatbots That Transform Customer Engagement"
      description="Build conversational AI solutions that provide 24/7 customer support, automate workflows, and enhance user experiences."
      stats={[{ value: "24/7", label: "Availability" }, { value: "80%", label: "Query Resolution" }, { value: "60%", label: "Cost Reduction" }, { value: "5s", label: "Response Time" }]}
      features={[
        { title: "Natural Language Processing", description: "Understand and respond to user queries naturally.", icon: MessageSquare },
        { title: "Multi-Channel Support", description: "Deploy across web, mobile, and messaging platforms.", icon: Users },
        { title: "Quick Integration", description: "Easy integration with existing systems and APIs.", icon: Zap },
        { title: "Secure Conversations", description: "Enterprise-grade security for sensitive data.", icon: Shield },
        { title: "Analytics Dashboard", description: "Track performance and conversation insights.", icon: BarChart3 },
        { title: "Always Available", description: "Round-the-clock automated customer support.", icon: Clock },
      ]}
      useCases={[
        { title: "Customer Support", description: "Automate FAQs and support tickets." },
        { title: "Lead Generation", description: "Qualify leads through conversations." },
        { title: "E-commerce Assistant", description: "Help customers find products." },
        { title: "Appointment Booking", description: "Schedule meetings automatically." },
      ]}
      technologies={["OpenAI", "Dialogflow", "Rasa", "LangChain", "Python", "Node.js", "React", "WebSocket"]}
      benefits={["Reduce support costs", "Improve response times", "Scale customer service", "Gather customer insights", "Increase satisfaction"]}
    />
  );
};

export default AIChatbotSolutions;
