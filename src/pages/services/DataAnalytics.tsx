import { BarChart3 } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const DataAnalytics = () => {
  return (
    <ServiceDetailPage
      icon={BarChart3}
      color="from-blue-500 to-blue-600"
      title="Data Analytics"
      tagline="Turn your data into actionable insights that drive business decisions."
      description="We help you harness the power of your data through advanced analytics, visualization, and machine learning. Make data-driven decisions with confidence."
      benefits={[
        "Data visualization",
        "Business intelligence",
        "Predictive analytics",
        "Real-time dashboards",
        "Custom reporting",
        "Data warehousing",
        "ETL pipelines",
        "ML-powered insights",
      ]}
      process={[
        { number: "01", title: "Data Assessment", description: "Evaluate data sources and quality." },
        { number: "02", title: "Architecture Design", description: "Design data pipeline and warehouse." },
        { number: "03", title: "Data Integration", description: "Build ETL processes and integrations." },
        { number: "04", title: "Analytics Development", description: "Create dashboards and reports." },
        { number: "05", title: "ML Models", description: "Develop predictive models if needed." },
        { number: "06", title: "Deployment", description: "Deploy and train your team." },
      ]}
      technologies={["Python", "SQL", "Tableau", "Power BI", "Apache Spark", "Snowflake", "dbt", "Airflow", "TensorFlow", "Databricks"]}
      caseStudies={[
        { title: "Retail Analytics", category: "Retail", description: "Customer behavior analytics platform.", results: ["25% revenue increase", "Real-time insights"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/retail-analytics" },
        { title: "Financial Reporting", category: "Finance", description: "Automated financial dashboards.", results: ["80% time savings", "Zero errors"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/financial-reporting" },
        { title: "Supply Chain Analytics", category: "Logistics", description: "Predictive supply chain optimization.", results: ["30% cost reduction", "95% accuracy"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", href: "/portfolio/supply-chain" },
      ]}
      useCases={["Business intelligence", "Customer analytics", "Financial reporting", "Supply chain optimization", "Predictive maintenance", "Fraud detection"]}
    />
  );
};

export default DataAnalytics;
