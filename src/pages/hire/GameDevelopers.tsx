import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Gamepad2, Code, Layers, Zap, Users, Globe } from "lucide-react";

const GameDevelopers = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Hire Game Developers"
        subtitle="Expert game development talent"
        description="Hire skilled game developers who create engaging games for mobile, PC, and console platforms. Unity, Unreal, and web game expertise."
        icon={<Gamepad2 className="w-12 h-12" />}
        features={[
          {
            icon: <Gamepad2 className="w-6 h-6" />,
            title: "Game Engines",
            description: "Unity and Unreal Engine specialists."
          },
          {
            icon: <Layers className="w-6 h-6" />,
            title: "2D & 3D Games",
            description: "From casual games to immersive 3D experiences."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Game Mechanics",
            description: "Engaging gameplay and physics systems."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance",
            description: "Optimized for smooth gameplay across devices."
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multiplayer",
            description: "Real-time multiplayer and backend systems."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Platform Experts",
            description: "Mobile, PC, console, and web games."
          }
        ]}
        technologies={["Unity", "Unreal Engine", "C#", "C++", "Photon", "PlayFab", "Blender", "WebGL"]}
        benefits={[
          "Bring your game vision to life",
          "Access specialized game dev talent",
          "Build for multiple platforms",
          "Scale your game team quickly"
        ]}
      />
    </Layout>
  );
};

export default GameDevelopers;
