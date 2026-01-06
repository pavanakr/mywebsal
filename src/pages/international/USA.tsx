import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema, LocalBusinessSchema, AggregateRatingSchema, HreflangTags } from '@/components/SchemaMarkup';
import { PageHero } from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Users, Award, Clock, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';

const benefits = [
  { icon: Globe, title: 'US Timezone Support', description: 'Dedicated teams working EST/PST hours for real-time collaboration' },
  { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant development with US data residency options' },
  { icon: Zap, title: 'Rapid Delivery', description: 'Agile sprints with weekly demos and fast iteration cycles' },
  { icon: Users, title: 'Dedicated Teams', description: 'Full-time developers exclusively working on your project' },
];

const services = [
  { name: 'AI & Machine Learning', href: '/services/ai-automation', description: 'Custom AI solutions for US enterprises' },
  { name: 'Mobile App Development', href: '/services/mobile-apps', description: 'iOS & Android apps for American market' },
  { name: 'Web Development', href: '/services/web-development', description: 'Scalable web applications' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'AWS, Azure & GCP expertise' },
  { name: 'Custom Software', href: '/services/custom-software', description: 'Tailored business solutions' },
  { name: 'Staff Augmentation', href: '/services/staff-augmentation', description: 'Scale your team quickly' },
];

const stats = [
  { icon: Building2, value: '50+', label: 'US Clients' },
  { icon: Users, value: '100+', label: 'Dedicated Engineers' },
  { icon: Award, value: '200+', label: 'Projects Delivered' },
  { icon: Clock, value: '8+', label: 'Years Experience' },
];

const USA = () => {
  return (
    <Layout>
      <SEO
        title="Software Development Company USA | Softurecs AI Labs"
        description="Top software development company serving USA. Custom AI solutions, mobile apps, web development & digital transformation. Trusted by Fortune 500 companies."
        keywords="software development company USA, AI development USA, mobile app development USA, custom software USA, IT outsourcing India to USA"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'International', url: 'https://softurecs.com/international' },
        { name: 'USA', url: 'https://softurecs.com/international/usa' }
      ]} />
      <LocalBusinessSchema city="New York" region="USA" country="United States" />
      <AggregateRatingSchema />
      <HreflangTags currentPath="/international/usa" />

      <PageHero
        title="Software Development Company for USA Businesses"
        description="Partner with India's leading AI & software development company. Trusted by American startups and Fortune 500 enterprises for scalable, secure technology solutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'International', href: '/international' },
          { label: 'USA' }
        ]}
        stats={stats.map(s => ({ value: s.value, label: s.label }))}
      />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why US Companies Choose Softurecs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridge the gap between innovation and execution with our dedicated US-focused development teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/30 transition-all"
              >
                <benefit.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services for US Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack development capabilities tailored for the American market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block bg-card p-6 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all group h-full"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* US Focus Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner in USA
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Softurecs AI Labs has been serving American businesses since 2015. We understand the unique challenges 
                of the US market - from regulatory compliance to high scalability demands. Our teams work in US timezones, 
                ensuring seamless collaboration and rapid delivery.
              </p>
              <div className="space-y-3">
                {[
                  'HIPAA-compliant healthcare solutions',
                  'SOC 2 Type II certified processes',
                  'AWS & Azure certified architects',
                  'Agile development with daily standups',
                  'NDA-protected intellectual property',
                  'Transparent fixed-price or T&M models',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-border/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Start Your US Project</h3>
              <p className="text-muted-foreground mb-6">
                Get a free consultation and project estimate within 24 hours. No commitment required.
              </p>
              <div className="space-y-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  Or call us: +1 (555) 123-4567
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default USA;
