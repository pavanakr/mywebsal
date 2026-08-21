import { Layers, Bot, Zap, Search } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const MultiCRM = () => {
  return (
    <ServiceDetailPage
      icon={Layers}
      color="from-purple-500 to-indigo-600"
      title="Multi CRM"
      tagline="Unified CRM for Multi-Business & Multi-Industry Operations"
      description="Manage multiple business units from one powerful dashboard. Our Multi CRM platform allows centralized control for diversified enterprises while maintaining data isolation."
      benefits={[
        'Centralized data dashboard',
        'Multi-tenant architecture',
        'Role-based access control',
        'Inter-business reporting',
        'Unified customer database',
        'Scalable infrastructure'
      ]}
      process={[
        { number: '01', title: 'Audit', description: 'Audit multi-business requirements.' },
        { number: '02', title: 'Architecture', description: 'Design multi-tenant data model.' },
        { number: '03', title: 'Implementation', description: 'Build unified platform.' },
        { number: '04', title: 'Migration', description: 'Consolidate legacy data.' },
        { number: '05', title: 'Testing', description: 'Rigorous multi-tenant testing.' },
        { number: '06', title: 'Rollout', description: 'Gradual multi-unit launch.' },
      ]}
      technologies={['React', 'Node.js', 'PostgreSQL', 'Multi-Tenancy', 'AWS', 'GraphQL', 'Docker', 'Kubernetes']}
      caseStudies={[
        {
          title: 'Diversified Enterprise Hub',
          category: 'Enterprise',
          description: 'Managing 5+ business units with unified CRM backend.',
          results: ['60% less admin', '100% data visibility'],
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884378?w=600&h=400&fit=crop',
          href: '/portfolio/enterprise-crm',
        },
      ]}
      useCases={[
        'Diversified Conglomerates',
        'Franchise Management',
        'Agency Holding Groups',
        'Shared Service Centers'
      ]}
    />
  );
};

export default MultiCRM;
