import { Gamepad2 } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const GameDevelopers = () => {
  return (
    <ServiceDetailPage
      icon={Gamepad2}
      color="from-rose-500 to-rose-600"
      title="Hire Game Developers"
      tagline="Expert game developers who bring your gaming vision to life."
      description="Hire skilled game developers with expertise in Unity, Unreal Engine, and mobile game development. From casual games to immersive 3D experiences, our developers deliver engaging gameplay."
      benefits={[
        "Unity & Unreal expertise",
        "2D & 3D game development",
        "Cross-platform deployment",
        "Multiplayer systems",
        "In-app purchase integration",
        "Performance optimization",
        "VR/AR development",
        "Live ops support",
      ]}
      process={[
        { number: "01", title: "Game Design Review", description: "Understand your game concept, mechanics, and target audience." },
        { number: "02", title: "Technical Planning", description: "Choose the right engine and architecture for your game." },
        { number: "03", title: "Team Formation", description: "Assemble developers, artists, and designers as needed." },
        { number: "04", title: "Prototype Development", description: "Build playable prototypes for early testing." },
        { number: "05", title: "Full Production", description: "Complete game development with regular milestones." },
        { number: "06", title: "Launch & Live Ops", description: "Store submission and ongoing live operations support." },
      ]}
      technologies={["Unity", "Unreal Engine", "C#", "C++", "Godot", "Cocos2d", "PlayFab", "Photon", "Firebase", "Steam SDK"]}
      caseStudies={[
        { title: "Puzzle Quest Mobile", category: "Mobile Gaming", description: "Casual puzzle game with 5M+ downloads.", results: ["5M downloads", "$2M revenue"], image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b06?w=600&h=400&fit=crop", href: "/portfolio/puzzle-quest" },
        { title: "Racing Champions", category: "Racing", description: "Multiplayer racing game for mobile platforms.", results: ["1M players", "4.5 rating"], image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop", href: "/portfolio/racing-champions" },
        { title: "VR Adventure", category: "VR Gaming", description: "Immersive VR adventure game for Quest.", results: ["Featured by Meta", "50K sales"], image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop", href: "/portfolio/vr-adventure" },
      ]}
      useCases={["Mobile games", "PC/Console games", "VR/AR experiences", "Metaverse development", "Gamification solutions", "Serious games for training"]}
    />
  );
};

export default GameDevelopers;
