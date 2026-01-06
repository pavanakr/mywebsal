import { Trophy, Users, BarChart3, Zap, Shield, Wallet, Calendar } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const FantasySports = () => {
  return (
    <SubIndustryDetailPage
      icon={Trophy}
      color="from-orange-500 to-orange-600"
      parentIndustry="Solutions"
      parentHref="/services"
      name="Fantasy Sports"
      tagline="Engaging Fantasy Sports Platforms for Sports Enthusiasts"
      description="Build exciting fantasy sports platforms with real-time scoring, contests, and social features."
      stats={[{ value: "10M+", label: "Users" }, { value: "$50M+", label: "Prize Pool" }, { value: "100K+", label: "Daily Contests" }, { value: "4.7", label: "Rating" }]}
      features={[
        { title: "Live Scoring", description: "Real-time points and leaderboards.", icon: Zap },
        { title: "Team Building", description: "Draft and manage fantasy teams.", icon: Users },
        { title: "Contests", description: "Daily and season-long competitions.", icon: Trophy },
        { title: "Analytics", description: "Player stats and predictions.", icon: BarChart3 },
        { title: "Secure Payments", description: "Deposits and withdrawals.", icon: Wallet },
        { title: "Match Scheduling", description: "Fixture and contest calendar.", icon: Calendar },
      ]}
      useCases={[
        { title: "Daily Fantasy", description: "Quick daily contests." },
        { title: "Season Long", description: "Full season leagues." },
        { title: "Cricket Fantasy", description: "IPL and cricket leagues." },
        { title: "Football Fantasy", description: "NFL and soccer fantasy." },
      ]}
      technologies={["React Native", "Node.js", "Redis", "PostgreSQL", "Socket.io", "AWS", "Stripe", "Sports APIs"]}
      benefits={["Real-time updates", "Scalable for millions", "Payment ready", "Multi-sport support", "Engaging UX"]}
    />
  );
};

export default FantasySports;
