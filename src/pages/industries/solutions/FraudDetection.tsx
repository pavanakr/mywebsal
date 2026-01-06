import { Shield, Brain, AlertTriangle, BarChart, Eye, Zap } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const FraudDetection = () => {
  return (
    <SubIndustryDetailPage
      icon={Shield}
      color="from-teal-500 to-emerald-600"
      parentIndustry="Banking & Finance"
      parentHref="/industries/banking-finance"
      name="Fraud Detection Solutions"
      tagline="AI-Powered Fraud Prevention"
      description="We develop intelligent fraud detection systems that protect financial institutions and their customers. Our solutions use machine learning and behavioral analytics to detect anomalies in real-time while minimizing false positives."
      stats={[
        { value: "99.7%", label: "Detection Rate" },
        { value: "<50ms", label: "Decision Time" },
        { value: "$500M+", label: "Fraud Prevented" },
        { value: "0.1%", label: "False Positive Rate" },
      ]}
      features={[
        {
          title: "Real-time Detection",
          description: "Analyze transactions in milliseconds to block fraud before it occurs.",
          icon: Zap,
        },
        {
          title: "Machine Learning Models",
          description: "Self-learning algorithms that adapt to new fraud patterns continuously.",
          icon: Brain,
        },
        {
          title: "Behavioral Analytics",
          description: "User behavior profiling to detect account takeover and anomalies.",
          icon: Eye,
        },
        {
          title: "Risk Scoring",
          description: "Real-time risk assessment with configurable thresholds and rules.",
          icon: BarChart,
        },
        {
          title: "Alert Management",
          description: "Case management for investigation with automated triage.",
          icon: AlertTriangle,
        },
        {
          title: "Network Analysis",
          description: "Graph-based detection of fraud rings and money laundering.",
          icon: Shield,
        },
      ]}
      benefits={[
        "Reduce fraud losses by up to 70%",
        "Lower false positive rates dramatically",
        "Improve customer experience with less friction",
        "Meet regulatory compliance requirements",
        "Detect emerging fraud patterns automatically",
        "Reduce manual review workload",
        "Protect brand reputation",
        "Scale detection with transaction volume",
      ]}
      technologies={["Python", "TensorFlow", "Apache Spark", "Kafka", "Neo4j", "Redis", "AWS SageMaker", "Kubernetes"]}
      useCases={[
        { title: "Card Fraud", description: "Credit and debit card transaction monitoring." },
        { title: "Account Takeover", description: "Detecting unauthorized account access." },
        { title: "Payment Fraud", description: "Wire transfers and ACH fraud prevention." },
        { title: "Application Fraud", description: "New account and loan application screening." },
        { title: "Money Laundering", description: "AML transaction monitoring and SAR filing." },
        { title: "Identity Theft", description: "Synthetic identity and identity fraud detection." },
      ]}
    />
  );
};

export default FraudDetection;