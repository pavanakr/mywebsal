import { Layers, Bot, Zap, Search, LayoutGrid } from 'lucide-react';
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
    >
      <div className="container-custom py-12 border-t border-border/50">
        <h3 className="text-2xl font-bold mb-8 text-center">Enterprise Automation</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="/all-in-one-crm" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <LayoutGrid className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">All-in-One CRM</h4>
            <p className="text-sm text-muted-foreground">Consolidate sales and marketing across units.</p>
          </a>
          <a href="/services/custom-software" className="p-6 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all text-center">
            <Zap className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h4 className="font-bold mb-2">Custom Software</h4>
            <p className="text-sm text-muted-foreground">Bespoke enterprise applications tailored to your scale.</p>
          </a>
        </div>
      </div>
    </ServiceDetailPage>
  );
};

export default MultiCRM;
