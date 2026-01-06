import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { BarChart3, TrendingUp, Database, Brain, PieChart, LineChart } from "lucide-react";

const DataAnalytics = () => {
  return (
    <Layout>
      <ServiceDetailPage
        title="Data Analytics Services"
        subtitle="Transform data into actionable business insights"
        description="Unlock the power of your data with advanced analytics solutions. We help you collect, analyze, and visualize data to make smarter business decisions and drive growth."
        icon={<BarChart3 className="w-12 h-12" />}
        features={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Data Engineering",
            description: "Build robust data pipelines and warehouses for reliable analytics."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Predictive Analytics",
            description: "Forecast trends and behaviors with machine learning models."
          },
          {
            icon: <PieChart className="w-6 h-6" />,
            title: "Business Intelligence",
            description: "Custom dashboards and reports for real-time insights."
          },
          {
            icon: <Brain className="w-6 h-6" />,
            title: "AI-Powered Insights",
            description: "Leverage AI to uncover hidden patterns and opportunities."
          },
          {
            icon: <LineChart className="w-6 h-6" />,
            title: "Real-Time Analytics",
            description: "Stream processing for instant insights and alerts."
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Data Visualization",
            description: "Interactive visualizations that tell compelling data stories."
          }
        ]}
        technologies={["Python", "Apache Spark", "Tableau", "Power BI", "Snowflake", "BigQuery", "Apache Kafka", "TensorFlow"]}
        benefits={[
          "Make data-driven decisions with confidence",
          "Identify growth opportunities and optimize operations",
          "Reduce costs through predictive maintenance",
          "Gain competitive advantage with real-time insights"
        ]}
      />
    </Layout>
  );
};

export default DataAnalytics;
