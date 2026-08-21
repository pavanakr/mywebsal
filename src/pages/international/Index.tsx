import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema, AggregateRatingSchema, HreflangTags } from '@/components/SchemaMarkup';
import { PageHero } from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Building2, Users, Award } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

const regions = [
  {
    name: 'United States',
    code: 'USA',
    href: '/international/usa',
    description: 'Serving Fortune 500 companies and Silicon Valley startups with enterprise-grade solutions.',
    clients: '50+',
    highlight: 'SOC 2 Compliant',
  },
  {
    name: 'United Kingdom',
    code: 'UK',
    href: '/international/uk',
    description: 'GDPR-compliant development for London fintech and British enterprises.',
    clients: '30+',
    highlight: 'GDPR Ready',
  },
  {
    name: 'United Arab Emirates',
    code: 'UAE',
    href: '/international/uae',
    description: 'Smart city solutions and Arabic-first applications for Dubai and the Emirates.',
    clients: '25+',
    highlight: 'Arabic Support',
  },
  {
    name: 'Singapore',
    code: 'SG',
    href: '/international/singapore',
    description: 'Smart Nation aligned solutions for Asia-Pacific\'s technology hub.',
    clients: '20+',
    highlight: 'APAC Hub',
  },
];

const stats = [
  { value: '15+', label: 'Countries Served' },
  { value: '125+', label: 'International Clients' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '8+', label: 'Years Global Experience' },
];

const International = () => {
  return (
    <Layout>
      <SEO
        title="Global Software Development Services | SOFTURECS AI LABS PRIVATE LIMITED"
        description="SOFTURECS AI LABS PRIVATE LIMITED serves clients across USA, UK, UAE, Singapore & 15+ countries. Enterprise software, AI solutions & digital transformation with local compliance."
        keywords="global software development, international IT services, offshore development India, software outsourcing, AI development worldwide"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'International', url: 'https://softurecs.com/international' }
      ]} />
      <AggregateRatingSchema />
      <HreflangTags currentPath="/international" />

      <PageHero
        title="Global Software Development Services"
        description="From Hyderabad to the world — SOFTURECS AI LABS PRIVATE LIMITED serves enterprises across 15+ countries with localized, compliant, and cutting-edge technology solutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'International' }
        ]}
        stats={stats}
      />

      {/* Regions Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Global Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated teams serving major markets with timezone-aligned support and local compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={region.href}
                  className="block bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all group h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-8 h-8 text-accent" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {region.name}
                        </h3>
                        <span className="text-sm text-muted-foreground">{region.code}</span>
                      </div>
                    </div>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                      {region.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      <strong>{region.clients}</strong> Active Clients
                    </span>
                    <div className="flex items-center text-accent text-sm font-medium">
                      Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Global Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Softurecs for Global Projects?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We combine India's world-class engineering talent with deep understanding of 
                international markets. Our teams work in your timezone, speak your language, 
                and comply with your regulations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Globe, title: '24/7 Global Support', desc: 'Round-the-clock coverage across timezones' },
                  { icon: Building2, title: 'Local Compliance', desc: 'GDPR, HIPAA, SOC 2, PDPA ready' },
                  { icon: Users, title: 'Dedicated Teams', desc: 'Full-time engineers for your project' },
                  { icon: Award, title: 'Proven Track Record', desc: '500+ projects delivered globally' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Coverage Across India</h3>
              <p className="text-muted-foreground mb-6">
                Beyond international markets, we serve businesses across India's major tech hubs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { city: 'Hyderabad', href: '/software-development-company-in-hyderabad' },
                  { city: 'KPHB', href: '/software-development-company-in-kphb' },
                  { city: 'Hitech City', href: '/software-development-company-in-hitech-city' },
                  { city: 'Bengaluru', href: '/software-development-company-in-bengaluru' },
                  { city: 'Mumbai', href: '/software-development-company-in-mumbai' },
                  { city: 'Delhi', href: '/software-development-company-in-delhi' },
                ].map((item) => (
                  <Link
                    key={item.city}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    → {item.city}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default International;
