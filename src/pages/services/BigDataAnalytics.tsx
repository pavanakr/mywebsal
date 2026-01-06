import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Database } from 'lucide-react';

const BigDataAnalytics = () => {
  return (
    <ServiceDetailPage
      icon={Database}
      color="from-indigo-500 to-purple-600"
      title="Big Data & Analytics"
      tagline="Transform Data into Strategic Business Intelligence"
      description="Unlock the power of your data with advanced analytics, machine learning models, and real-time insights that drive smarter business decisions. Our big data solutions help organizations process, analyze, and visualize massive datasets to uncover actionable insights."
      benefits={[
        'Real-time data processing',
        'Predictive analytics',
        'Interactive dashboards',
        'Scalable data lakes',
        'ETL automation',
        'Cost optimization',
      ]}
      process={[
        { number: '01', title: 'Data Assessment', description: 'Evaluate your current data landscape and identify opportunities for improvement.' },
        { number: '02', title: 'Architecture Design', description: 'Design scalable data architecture tailored to your business needs.' },
        { number: '03', title: 'Data Pipeline Development', description: 'Build automated ETL pipelines for seamless data integration.' },
        { number: '04', title: 'Analytics Implementation', description: 'Deploy advanced analytics and ML models for insights generation.' },
        { number: '05', title: 'Visualization & Reporting', description: 'Create interactive dashboards for data-driven decision making.' },
        { number: '06', title: 'Optimization & Support', description: 'Continuous optimization and support for peak performance.' },
      ]}
      technologies={['Apache Spark', 'Hadoop', 'Kafka', 'Snowflake', 'Databricks', 'Power BI', 'Tableau', 'Python', 'TensorFlow', 'AWS Redshift', 'Azure Synapse', 'Elasticsearch']}
      caseStudies={[
        {
          title: 'FinVault Analytics Platform',
          category: 'Financial Services',
          description: 'Built a real-time analytics platform processing 10M+ transactions daily.',
          results: ['60% faster insights', '40% cost reduction'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          href: '/portfolio/finvault',
        },
      ]}
      useCases={[
        'Business Intelligence Dashboards',
        'Customer Behavior Analytics',
        'Predictive Maintenance',
        'Fraud Detection Systems',
        'Supply Chain Optimization',
        'Marketing Analytics',
      ]}
    />
  );
};

export default BigDataAnalytics;
