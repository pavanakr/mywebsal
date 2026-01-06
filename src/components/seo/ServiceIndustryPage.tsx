import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema, ServiceSchema } from '@/components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Heart, Landmark, ShoppingCart, GraduationCap, Truck, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';

interface ServiceData {
  name: string;
  slug: string;
  description: string;
  href: string;
}

interface IndustryData {
  name: string;
  slug: string;
  icon: typeof Heart;
  description: string;
  href: string;
  challenges: string[];
  solutions: string[];
}

const servicesData: Record<string, ServiceData> = {
  'ai-solutions': {
    name: 'AI Solutions',
    slug: 'ai-solutions',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    href: '/services/ai-automation',
  },
  'software-development': {
    name: 'Software Development',
    slug: 'software-development',
    description: 'Custom software development tailored to your needs',
    href: '/services/custom-software',
  },
  'mobile-app-development': {
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile applications',
    href: '/services/mobile-apps',
  },
  'web-development': {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Modern, scalable web applications and platforms',
    href: '/services/web-development',
  },
  'cloud-solutions': {
    name: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Cloud migration, optimization, and DevOps services',
    href: '/services/cloud-devops',
  },
};

const industriesData: Record<string, IndustryData> = {
  'healthcare': {
    name: 'Healthcare',
    slug: 'healthcare',
    icon: Heart,
    description: 'Transform patient care with HIPAA-compliant digital health solutions',
    href: '/industries/healthcare',
    challenges: ['Patient data security', 'Regulatory compliance', 'Legacy system integration', 'Interoperability'],
    solutions: ['EHR systems', 'Telemedicine platforms', 'Patient engagement apps', 'Healthcare analytics'],
  },
  'fintech': {
    name: 'Fintech',
    slug: 'fintech',
    icon: Landmark,
    description: 'Secure, scalable financial technology solutions',
    href: '/industries/banking-finance',
    challenges: ['Security requirements', 'Regulatory compliance', 'Real-time processing', 'Fraud prevention'],
    solutions: ['Digital banking', 'Payment gateways', 'Fraud detection', 'Trading platforms'],
  },
  'ecommerce': {
    name: 'E-commerce',
    slug: 'ecommerce',
    icon: ShoppingCart,
    description: 'End-to-end e-commerce and retail solutions',
    href: '/industries/retail-ecommerce',
    challenges: ['Scalability', 'User experience', 'Inventory management', 'Payment integration'],
    solutions: ['Online stores', 'Marketplaces', 'Inventory systems', 'Customer analytics'],
  },
  'education': {
    name: 'Education',
    slug: 'education',
    icon: GraduationCap,
    description: 'Interactive e-learning and EdTech platforms',
    href: '/industries/education',
    challenges: ['Engagement', 'Accessibility', 'Assessment', 'Content delivery'],
    solutions: ['LMS platforms', 'Virtual classrooms', 'Student portals', 'Assessment tools'],
  },
  'logistics': {
    name: 'Logistics',
    slug: 'logistics',
    icon: Truck,
    description: 'Smart supply chain and logistics management',
    href: '/industries/logistics-transportation',
    challenges: ['Real-time tracking', 'Route optimization', 'Fleet management', 'Warehouse efficiency'],
    solutions: ['TMS systems', 'Fleet tracking', 'Warehouse management', 'Delivery apps'],
  },
  'real-estate': {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: Building2,
    description: 'Digital solutions for property management and sales',
    href: '/industries/real-estate-construction',
    challenges: ['Property visibility', 'Lead management', 'Virtual tours', 'Document handling'],
    solutions: ['Property portals', 'CRM systems', 'Virtual tour apps', 'Contract management'],
  },
};

export const ServiceIndustryPage = () => {
  const { service, industry } = useParams<{ service: string; industry: string }>();
  
  const serviceInfo = service ? servicesData[service] : null;
  const industryInfo = industry ? industriesData[industry] : null;

  if (!serviceInfo || !industryInfo) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
          <Link to="/services">
            <Button>View Our Services</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const pageTitle = `${serviceInfo.name} for ${industryInfo.name}`;
  const Icon = industryInfo.icon;

  return (
    <Layout>
      <SEO
        title={`${serviceInfo.name} for ${industryInfo.name}`}
        description={`Expert ${serviceInfo.name.toLowerCase()} services for the ${industryInfo.name.toLowerCase()} industry. HIPAA/PCI compliant solutions from Softurecs AI Labs.`}
        keywords={`${serviceInfo.name.toLowerCase()} ${industryInfo.name.toLowerCase()}, ${industryInfo.name.toLowerCase()} software, ${serviceInfo.slug}, ${industryInfo.slug} solutions`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'Services', url: 'https://softurecs.com/services' },
        { name: pageTitle, url: `https://softurecs.com/${service}-for-${industry}` }
      ]} />
      <ServiceSchema
        name={pageTitle}
        description={`${serviceInfo.description} tailored for the ${industryInfo.name} industry.`}
        url={`https://softurecs.com/${service}-for-${industry}`}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-medium">{industryInfo.name} Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {serviceInfo.name} for {industryInfo.name}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {serviceInfo.description} tailored specifically for {industryInfo.name.toLowerCase()} businesses. 
              Secure, compliant, and built for scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/insights/case-studies">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {industryInfo.name} Industry Challenges We Solve
              </h2>
              <p className="text-muted-foreground mb-6">
                {industryInfo.description}. Our team understands the unique challenges 
                facing {industryInfo.name.toLowerCase()} businesses and delivers solutions that address them.
              </p>
              <ul className="space-y-3">
                {industryInfo.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our {industryInfo.name} Solutions
              </h2>
              <div className="grid gap-4">
                {industryInfo.solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="bg-card p-4 rounded-xl border border-border/50 flex items-center gap-4"
                  >
                    <Cpu className="w-8 h-8 text-accent" />
                    <span className="font-medium text-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to={serviceInfo.href}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all group"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                Explore {serviceInfo.name}
              </h3>
              <p className="text-muted-foreground mb-4">{serviceInfo.description}</p>
              <span className="text-accent font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to={industryInfo.href}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all group"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {industryInfo.name} Industry Solutions
              </h3>
              <p className="text-muted-foreground mb-4">{industryInfo.description}</p>
              <span className="text-accent font-medium flex items-center gap-2">
                View Solutions <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceIndustryPage;
