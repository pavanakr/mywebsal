import { Link2 } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const Blockchain = () => {
  return (
    <ServiceDetailPage
      icon={Link2}
      color="from-orange-500 to-orange-600"
      title="Blockchain Development"
      tagline="Decentralized solutions for the future."
      description="Build secure, transparent blockchain solutions including smart contracts, DApps, NFT platforms, and enterprise blockchain networks."
      benefits={["Smart contracts", "Decentralized apps", "NFT platforms", "Supply chain tracking", "Digital identity", "Tokenization", "DeFi solutions", "Immutable records"]}
      process={[
        { number: "01", title: "Use Case Analysis", description: "Identify blockchain applicability." },
        { number: "02", title: "Platform Selection", description: "Choose the right blockchain platform." },
        { number: "03", title: "Architecture Design", description: "Design decentralized architecture." },
        { number: "04", title: "Smart Contract Dev", description: "Develop and audit smart contracts." },
        { number: "05", title: "Integration", description: "Integrate with existing systems." },
        { number: "06", title: "Deployment", description: "Deploy to mainnet with monitoring." },
      ]}
      technologies={["Ethereum", "Solidity", "Web3.js", "Hardhat", "Polygon", "Solana", "Hyperledger", "IPFS", "The Graph", "OpenZeppelin"]}
      caseStudies={[
        { title: "Supply Chain Platform", category: "Logistics", description: "Blockchain-based supply chain tracking.", results: ["100% traceability", "50% fraud reduction"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/supply-chain" },
        { title: "NFT Marketplace", category: "Art", description: "Digital art NFT marketplace.", results: ["$10M volume", "50K users"], image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop", href: "/portfolio/nft" },
        { title: "DeFi Protocol", category: "Finance", description: "Decentralized lending platform.", results: ["$100M TVL", "10K users"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/defi" },
      ]}
      useCases={["Supply chain tracking", "Digital identity", "Smart contracts", "NFT platforms", "DeFi applications", "Asset tokenization"]}
    />
  );
};

export default Blockchain;
