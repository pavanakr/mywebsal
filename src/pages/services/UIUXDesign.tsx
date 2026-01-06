import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Palette, Users, Eye, Smartphone, MousePointer, Layers } from "lucide-react";

const UIUXDesign = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="UI/UX Design Services"
        subtitle="Create exceptional digital experiences that users love"
        description="Design intuitive, beautiful interfaces that drive engagement and conversions. Our design team combines creativity with user research to deliver experiences that delight."
        icon={<Palette className="w-12 h-12" />}
        features={[
          {
            icon: <Users className="w-6 h-6" />,
            title: "User Research",
            description: "Deep understanding of user needs through research and analysis."
          },
          {
            icon: <Eye className="w-6 h-6" />,
            title: "Visual Design",
            description: "Stunning visual designs that reflect your brand identity."
          },
          {
            icon: <MousePointer className="w-6 h-6" />,
            title: "Interaction Design",
            description: "Intuitive interactions and micro-animations that enhance UX."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Responsive Design",
            description: "Seamless experiences across all devices and screen sizes."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Design Systems",
            description: "Scalable design systems for consistent brand experiences."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Prototyping",
            description: "Interactive prototypes to validate designs before development."
          }
        ]}
        technologies={["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Zeplin", "Lottie", "Framer"]}
        benefits={[
          "Increase user engagement and conversion rates",
          "Reduce development costs with clear design specifications",
          "Build brand loyalty through memorable experiences",
          "Improve accessibility and reach wider audiences"
        ]}
      />
    </Layout>
  );
};

export default UIUXDesign;
