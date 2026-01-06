import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Activity } from 'lucide-react';

const AIOps = () => {
  return (
    <ServiceDetailPage
      icon={Activity}
      color="from-cyan-500 to-blue-600"
      title="AIOps Solutions"
      tagline="AI-Powered IT Operations Intelligence"
      description="Transform your IT operations with AIOps platforms that provide predictive insights, automated remediation, and intelligent monitoring across your entire infrastructure. Reduce noise, accelerate resolution, and prevent incidents proactively."
      benefits={[
        'Anomaly detection',
        'Auto remediation',
        'Predictive insights',
        'Event correlation',
        'Unified monitoring',
        '90% noise reduction',
      ]}
      process={[
        { number: '01', title: 'Infrastructure Assessment', description: 'Analyze your current monitoring and operations landscape.' },
        { number: '02', title: 'Data Integration', description: 'Integrate data from all monitoring tools and systems.' },
        { number: '03', title: 'ML Model Training', description: 'Train models on your operational data for accurate predictions.' },
        { number: '04', title: 'Platform Setup', description: 'Deploy AIOps platform with dashboards and alerting.' },
        { number: '05', title: 'Automation Rules', description: 'Configure automated remediation workflows.' },
        { number: '06', title: 'Continuous Learning', description: 'Ongoing model improvement with new operational data.' },
      ]}
      technologies={['Dynatrace', 'Datadog', 'Splunk', 'ServiceNow', 'PagerDuty', 'Prometheus', 'Grafana', 'Elastic Stack', 'New Relic', 'AWS CloudWatch', 'Azure Monitor', 'Custom ML']}
      caseStudies={[
        {
          title: 'Enterprise AIOps Platform',
          category: 'Technology',
          description: 'Implemented AIOps reducing MTTR by 60% for a Fortune 500 company.',
          results: ['60% faster resolution', '90% fewer alerts'],
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
          href: '/portfolio',
        },
      ]}
      useCases={[
        'IT Infrastructure Monitoring',
        'Cloud Operations',
        'DevOps Automation',
        'Incident Management',
        'Capacity Planning',
        'Performance Optimization',
      ]}
    />
  );
};

export default AIOps;
