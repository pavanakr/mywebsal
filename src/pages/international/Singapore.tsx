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
  { icon: Globe, title: 'SGT Timezone Alignment', description: 'Teams working Singapore business hours' },
  { icon: Shield, title: 'PDPA Compliance', description: 'Data protection aligned with Singapore law' },
  { icon: Zap, title: 'Fintech Hub Expertise', description: 'MAS-compliant financial solutions' },
  { icon: Users, title: 'APAC Coverage', description: 'Regional expansion support from Singapore hub' },
];

const services = [
  { name: 'AI & Machine Learning', href: '/services/ai-automation', description: 'Smart Nation aligned solutions' },
  { name: 'Mobile App Development', href: '/services/mobile-apps', description: 'iOS & Android apps for APAC' },
  { name: 'Web Development', href: '/services/web-development', description: 'Scalable web applications' },
  { name: 'Fintech Solutions', href: '/technologies/fintech', description: 'MAS-compliant payment systems' },
  { name: 'Custom Software', href: '/services/custom-software', description: 'Enterprise solutions' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'AWS Singapore, Azure & GCP' },
];

const stats = [
  { icon: Building2, value: '20+', label: 'Singapore Clients' },
  { icon: Users, value: '60+', label: 'Dedicated Engineers' },
  { icon: Award, value: '80+', label: 'Projects Delivered' },
  { icon: Clock, value: '5+', label: 'Years in APAC' },
];

const Singapore = () => {
  return (
    <Layout>
      <SEO
        title="Software Development Company Singapore | Softurecs AI Labs"
        description="Leading software development company serving Singapore & APAC. AI solutions, fintech apps & Smart Nation initiatives. Trusted by enterprises across Asia."
        keywords="software development company Singapore, AI development Singapore, mobile app development Singapore, fintech software Singapore, IT outsourcing India to Singapore"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'International', url: 'https://softurecs.com/international' },
        { name: 'Singapore', url: 'https://softurecs.com/international/singapore' }
      ]} />
      <LocalBusinessSchema city="Singapore" region="Singapore" country="Singapore" />
      <AggregateRatingSchema />
      <HreflangTags currentPath="/international/singapore" />

      <PageHero
        title="Software Development Company for Singapore Businesses"
        description="Partner with India's leading AI & software development company. Smart Nation solutions, fintech apps & digital transformation for Singapore and APAC region."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'International', href: '/international' },
          { label: 'Singapore' }
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
              Why Singapore Companies Choose Softurecs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart Nation expertise and fintech specialization for Asia's tech hub
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
              Our Services for Singapore Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack development capabilities tailored for the APAC market
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

      {/* Singapore Focus Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner in Singapore
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Softurecs AI Labs supports Singapore's Smart Nation initiative with cutting-edge 
                AI and digital solutions. From Marina Bay's financial giants to emerging startups, 
                we deliver innovation that powers Singapore's position as Asia's technology hub.
              </p>
              <div className="space-y-3">
                {[
                  'Smart Nation aligned solutions',
                  'PDPA-compliant data handling',
                  'MAS-ready fintech development',
                  'Multi-language support (EN, ZH, MS)',
                  'APAC regional expansion support',
                  'Singapore-based project coordination',
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Start Your Singapore Project</h3>
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
                  Or call us: +65 6123 4567
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

export default Singapore;
