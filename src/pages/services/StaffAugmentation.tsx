import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Users } from 'lucide-react';

const StaffAugmentation = () => {
  return (
    <ServiceDetailPage
      icon={Users}
      color="from-teal-500 to-emerald-600"
      title="Staff Augmentation"
      tagline="Scale Your Team with Top-Tier Tech Talent"
      description="Extend your development capabilities with our vetted, experienced engineers who integrate seamlessly with your existing team and processes. Access specialized skills on-demand without the overhead of full-time hiring."
      benefits={[
        'Rapid team scaling',
        'Vetted talent pool',
        'Flexible engagement',
        'No long-term contracts',
        'Timezone alignment',
        'Seamless integration',
      ]}
      process={[
        { number: '01', title: 'Requirements Analysis', description: 'Understand your technical needs, project scope, and team dynamics.' },
        { number: '02', title: 'Talent Matching', description: 'Match skilled developers with your specific technology stack and requirements.' },
        { number: '03', title: 'Technical Assessment', description: 'Rigorous technical evaluation to ensure quality and expertise.' },
        { number: '04', title: 'Team Integration', description: 'Smooth onboarding and integration with your existing workflows.' },
        { number: '05', title: 'Project Execution', description: 'Dedicated developers work as extensions of your team.' },
        { number: '06', title: 'Continuous Support', description: 'Ongoing management, feedback, and support throughout the engagement.' },
      ]}
      technologies={['React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'DevOps', 'Mobile Development', 'AI/ML', '.NET', 'Angular', 'Vue.js']}
      caseStudies={[
        {
          title: 'Enterprise Team Extension',
          category: 'Technology',
          description: 'Provided 15 developers to accelerate product development for a SaaS company.',
          results: ['50% cost savings', '3x faster delivery'],
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
          href: '/portfolio',
        },
      ]}
      useCases={[
        'Product Development Teams',
        'Short-term Project Support',
        'Specialized Skill Gaps',
        'Sprint Acceleration',
        'Legacy System Maintenance',
        'QA and Testing Teams',
      ]}
    />
  );
};

export default StaffAugmentation;
