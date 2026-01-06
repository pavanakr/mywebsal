import Layout from "@/components/layout/Layout";
import SubIndustryDetailPage from "@/components/industries/SubIndustryDetailPage";
import { Trophy, Users, BarChart, Wallet, Shield, Zap } from "lucide-react";

const FantasySports = () => {
  return (
    <Layout>
      <SubIndustryDetailPage
        title="Fantasy Sports Platforms"
        subtitle="Engaging fantasy gaming experiences"
        description="Build exciting fantasy sports platforms with real-time scoring, multiple sports support, and secure payment systems for contests and prizes."
        icon={<Trophy className="w-12 h-12" />}
        features={[
          {
            icon: <Trophy className="w-6 h-6" />,
            title: "Contest Management",
            description: "Create and manage various contest types and leagues."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Building",
            description: "Intuitive team selection with player stats and analysis."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Live Scoring",
            description: "Real-time score updates and leaderboards."
          },
          {
            icon: <Wallet className="w-6 h-6" />,
            title: "Wallet System",
            description: "Secure deposits, withdrawals, and prize distribution."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Fair Play",
            description: "Anti-fraud measures and fair play verification."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Multi-Sport",
            description: "Support for cricket, football, basketball, and more."
          }
        ]}
        benefits={[
          "Engage sports fans with interactive gaming",
          "Generate revenue through entry fees",
          "Build community with social features",
          "Ensure compliance with gaming regulations"
        ]}
        useCases={[
          "Daily fantasy sports",
          "Season-long leagues",
          "Free-to-play contests",
          "Prediction gaming"
        ]}
      />
    </Layout>
  );
};

export default FantasySports;
