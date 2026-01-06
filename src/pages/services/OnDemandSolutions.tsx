import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import { Rocket } from 'lucide-react';

const OnDemandSolutions = () => {
  return (
    <ServiceDetailPage
      icon={Rocket}
      color="from-orange-500 to-red-600"
      title="On-Demand Solutions"
      tagline="Build Your On-Demand Service Platform"
      description="Launch feature-rich on-demand platforms for delivery, booking, and services with real-time tracking, seamless payments, and scalable architecture. We build Uber-like applications customized for your business model."
      benefits={[
        'Real-time GPS tracking',
        'Multi-sided platforms',
        'Seamless payments',
        'Push notifications',
        'Admin dashboards',
        'White-label ready',
      ]}
      process={[
        { number: '01', title: 'Business Analysis', description: 'Understand your on-demand business model and user requirements.' },
        { number: '02', title: 'Platform Design', description: 'Design user experiences for customers, providers, and administrators.' },
        { number: '03', title: 'MVP Development', description: 'Build a minimum viable product to validate the market.' },
        { number: '04', title: 'Feature Enhancement', description: 'Add advanced features like live tracking, analytics, and integrations.' },
        { number: '05', title: 'Launch & Scale', description: 'Deploy to production and scale infrastructure for growth.' },
        { number: '06', title: 'Iterate & Improve', description: 'Continuous updates based on user feedback and market needs.' },
      ]}
      technologies={['React Native', 'Flutter', 'Node.js', 'Firebase', 'Google Maps API', 'Stripe', 'Twilio', 'Socket.io', 'Redis', 'MongoDB', 'AWS', 'GraphQL']}
      caseStudies={[
        {
          title: 'LogiTrack Delivery Platform',
          category: 'Logistics',
          description: 'Built a comprehensive delivery management platform with real-time tracking.',
          results: ['35% efficiency gain', '99.9% uptime'],
          image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
          href: '/portfolio/logitrack',
        },
      ]}
      useCases={[
        'Food Delivery Apps',
        'Ride-Sharing Platforms',
        'Home Services Booking',
        'Healthcare On-Demand',
        'Courier & Logistics',
        'Service Marketplaces',
      ]}
    />
  );
};

export default OnDemandSolutions;
