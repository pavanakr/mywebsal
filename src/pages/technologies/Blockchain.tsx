import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Link2, Shield, Coins, FileText, Users, Database } from "lucide-react";

const Blockchain = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Blockchain Development"
        subtitle="Decentralized solutions for the future"
        description="Build secure, transparent blockchain solutions including smart contracts, DApps, NFT platforms, and enterprise blockchain networks."
        icon={<Link2 className="w-12 h-12" />}
        features={[
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Smart Contracts",
            description: "Secure, audited smart contracts on Ethereum, Solana, and more."
          },
          {
            icon: <Coins className="w-6 h-6" />,
            title: "Token Development",
            description: "Custom token creation, tokenomics, and launch support."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "DeFi Platforms",
            description: "Decentralized finance applications and protocols."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "NFT Marketplaces",
            description: "Custom NFT platforms for digital assets and collectibles."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Enterprise Blockchain",
            description: "Private blockchain networks for enterprise use cases."
          },
          {
            icon: <Link2 className="w-6 h-6" />,
            title: "Web3 Integration",
            description: "Connect traditional apps to blockchain networks."
          }
        ]}
        technologies={["Ethereum", "Solana", "Polygon", "Solidity", "Rust", "Web3.js", "Hardhat", "IPFS"]}
        benefits={[
          "Enable trustless transactions and transparency",
          "Reduce intermediaries and transaction costs",
          "Create new revenue streams with tokenization",
          "Future-proof your business with Web3"
        ]}
      />
    </Layout>
  );
};

export default Blockchain;
