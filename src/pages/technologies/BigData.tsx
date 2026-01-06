import { Database } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const BigData = () => {
  return (
    <ServiceDetailPage
      icon={Database}
      color="from-blue-500 to-blue-600"
      title="Big Data Analytics"
      tagline="Turn massive data into actionable insights."
      description="Build big data platforms that collect, process, and analyze large volumes of data in real-time. Make smarter decisions with data at scale."
      benefits={["Data lake architecture", "Real-time processing", "Data warehousing", "ETL pipelines", "Data governance", "Scalable infrastructure", "Cost optimization", "Data quality"]}
      process={[
        { number: "01", title: "Data Assessment", description: "Evaluate data sources and volumes." },
        { number: "02", title: "Architecture Design", description: "Design scalable data architecture." },
        { number: "03", title: "Pipeline Development", description: "Build data ingestion pipelines." },
        { number: "04", title: "Processing Setup", description: "Configure batch and stream processing." },
        { number: "05", title: "Analytics Layer", description: "Build analytics and reporting." },
        { number: "06", title: "Optimization", description: "Optimize performance and costs." },
      ]}
      technologies={["Apache Spark", "Hadoop", "Kafka", "Snowflake", "Databricks", "BigQuery", "Redshift", "Airflow", "dbt", "Flink"]}
      caseStudies={[
        { title: "Data Lake Platform", category: "Retail", description: "Unified data platform for retail analytics.", results: ["10TB daily", "Real-time insights"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/data-lake" },
        { title: "IoT Analytics", category: "Manufacturing", description: "Real-time IoT data processing.", results: ["1M events/sec", "Predictive alerts"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/iot-analytics" },
        { title: "Customer 360", category: "Finance", description: "Unified customer data platform.", results: ["50+ sources", "Real-time sync"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", href: "/portfolio/customer-360" },
      ]}
      useCases={["Data lakes", "Real-time analytics", "Data warehousing", "IoT data processing", "Log analytics", "Customer analytics"]}
    />
  );
};

export default BigData;
