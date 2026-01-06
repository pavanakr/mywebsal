import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Database, BarChart, Zap, Search, Shield, TrendingUp } from "lucide-react";

const BigData = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Big Data Analytics"
        subtitle="Turn massive data into actionable insights"
        description="Build big data platforms that collect, process, and analyze large volumes of data in real-time. Make smarter decisions with data at scale."
        icon={<Database className="w-12 h-12" />}
        features={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Data Lakes",
            description: "Centralized repositories for structured and unstructured data."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Stream Processing",
            description: "Real-time data processing with Apache Kafka and Spark."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Data Warehouses",
            description: "Optimized storage for analytics and reporting."
          },
          {
            icon: <Search className="w-6 h-6" />,
            title: "Data Discovery",
            description: "Self-service analytics and data exploration tools."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Data Governance",
            description: "Data quality, security, and compliance management."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Business Intelligence",
            description: "Dashboards and reports for data-driven decisions."
          }
        ]}
        technologies={["Apache Spark", "Hadoop", "Kafka", "Snowflake", "Databricks", "Apache Flink", "Elasticsearch", "Tableau"]}
        benefits={[
          "Process petabytes of data efficiently",
          "Get real-time insights from streaming data",
          "Reduce storage and processing costs",
          "Enable self-service analytics for teams"
        ]}
      />
    </Layout>
  );
};

export default BigData;
