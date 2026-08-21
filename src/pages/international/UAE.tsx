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
  { icon: Globe, title: 'GST Timezone Support', description: 'Teams aligned with UAE business hours' },
  { icon: Shield, title: 'Government Projects', description: 'Smart city and e-government experience' },
  { icon: Zap, title: 'Arabic Support', description: 'RTL interfaces and Arabic localization' },
  { icon: Users, title: 'Dedicated Teams', description: 'Full-time developers for your project' },
];

const services = [
  { name: 'AI & Machine Learning', href: '/services/ai-automation', description: 'Smart solutions for UAE Vision 2031' },
  { name: 'Mobile App Development', href: '/services/mobile-apps', description: 'iOS & Android apps for MENA' },
  { name: 'Web Development', href: '/services/web-development', description: 'Scalable web applications' },
  { name: 'Fintech Solutions', href: '/technologies/fintech', description: 'Islamic banking & payment systems' },
  { name: 'Custom Software', href: '/services/custom-software', description: 'Enterprise solutions' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'AWS ME, Azure & cloud expertise' },
];

const stats = [
  { icon: Building2, value: '25+', label: 'UAE Clients' },
  { icon: Users, value: '50+', label: 'Dedicated Engineers' },
  { icon: Award, value: '100+', label: 'Projects Delivered' },
  { icon: Clock, value: '6+', label: 'Years in MENA' },
];

const UAE = () => {
  return (
    <Layout>
      <SEO
        title="Software Development Company UAE | SOFTURECS AI LABS PRIVATE LIMITED"
        description="Top software development company serving UAE & Dubai. AI solutions, mobile apps, fintech & smart city applications. Trusted by government and enterprises."
        keywords="software development company UAE, AI development Dubai, mobile app development UAE, fintech software Dubai, IT outsourcing India to UAE"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'International', url: 'https://softurecs.com/international' },
        { name: 'UAE', url: 'https://softurecs.com/international/uae' }
      ]} />
      <LocalBusinessSchema city="Dubai" region="UAE" country="United Arab Emirates" />
      <AggregateRatingSchema />
      <HreflangTags currentPath="/international/uae" />

      <PageHero
        title="Software Development Company for UAE Businesses"
        description="Partner with India's leading AI & software development company. Smart city solutions, fintech apps & digital transformation for Dubai and the Emirates."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'International', href: '/international' },
          { label: 'UAE' }
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
              Why UAE Companies Choose Softurecs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart city expertise and Arabic-first development for the Emirates
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
              Our Services for UAE Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack development capabilities tailored for the Middle East market
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

      {/* UAE Focus Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner in UAE
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SOFTURECS AI LABS PRIVATE LIMITED supports UAE Vision 2031 with cutting-edge smart city solutions and 
                digital transformation services. From Dubai's ambitious tech initiatives to Abu Dhabi's 
                government projects, we deliver innovation that powers the Emirates' digital future.
              </p>
              <div className="space-y-3">
                {[
                  'Smart city & IoT solutions',
                  'Arabic RTL interface development',
                  'Islamic fintech compliance',
                  'Government project experience',
                  'UAE data residency options',
                  'Multi-currency payment integration',
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Start Your UAE Project</h3>
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
                  Or call us: +971 4 123 4567
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

export default UAE;
