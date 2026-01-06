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
  { icon: Globe, title: 'GMT Timezone Alignment', description: 'Teams working UK business hours for seamless collaboration' },
  { icon: Shield, title: 'GDPR Compliance', description: 'Data protection and privacy-first development practices' },
  { icon: Zap, title: 'Fintech Expertise', description: 'FCA-compliant solutions for financial services' },
  { icon: Users, title: 'Dedicated UK Teams', description: 'Full-time developers exclusively for your project' },
];

const services = [
  { name: 'AI & Machine Learning', href: '/services/ai-automation', description: 'Enterprise AI for UK businesses' },
  { name: 'Mobile App Development', href: '/services/mobile-apps', description: 'iOS & Android apps for UK market' },
  { name: 'Web Development', href: '/services/web-development', description: 'Scalable web applications' },
  { name: 'Fintech Solutions', href: '/technologies/fintech', description: 'Open banking & payment systems' },
  { name: 'Custom Software', href: '/services/custom-software', description: 'Bespoke business solutions' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'AWS, Azure & GCP expertise' },
];

const stats = [
  { icon: Building2, value: '30+', label: 'UK Clients' },
  { icon: Users, value: '75+', label: 'Dedicated Engineers' },
  { icon: Award, value: '150+', label: 'Projects Delivered' },
  { icon: Clock, value: '8+', label: 'Years Experience' },
];

const UK = () => {
  return (
    <Layout>
      <SEO
        title="Software Development Company UK | Softurecs AI Labs"
        description="Leading software development company serving UK businesses. GDPR-compliant AI solutions, fintech apps & digital transformation. Trusted by London enterprises."
        keywords="software development company UK, AI development London, mobile app development UK, fintech software UK, IT outsourcing India to UK"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'International', url: 'https://softurecs.com/international' },
        { name: 'UK', url: 'https://softurecs.com/international/uk' }
      ]} />
      <LocalBusinessSchema city="London" region="UK" country="United Kingdom" />
      <AggregateRatingSchema />
      <HreflangTags currentPath="/international/uk" />

      <PageHero
        title="Software Development Company for UK Businesses"
        description="Partner with India's leading AI & software development company. GDPR-compliant solutions for British enterprises, from Canary Wharf to Shoreditch startups."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'International', href: '/international' },
          { label: 'UK' }
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
              Why UK Companies Choose Softurecs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GDPR-compliant development with deep fintech and enterprise expertise
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
              Our Services for UK Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack development capabilities tailored for the British market
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

      {/* UK Focus Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner in United Kingdom
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Softurecs AI Labs serves UK businesses with GDPR-compliant, enterprise-grade software solutions. 
                From London's financial district to tech startups across Britain, we deliver innovation with 
                regulatory compliance built-in from day one.
              </p>
              <div className="space-y-3">
                {[
                  'GDPR-compliant data handling',
                  'FCA-ready fintech solutions',
                  'Open Banking API expertise',
                  'UK-based project managers available',
                  'ISO 27001 certified processes',
                  'Strong Contracts Act compliant agreements',
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Start Your UK Project</h3>
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
                  Or call us: +44 20 1234 5678
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

export default UK;
