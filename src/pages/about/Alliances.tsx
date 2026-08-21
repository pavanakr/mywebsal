import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Globe, Network, Rocket, ArrowRight, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroAlliances from '@/assets/hero-alliances.png';

export default function Alliances() {
  const alliances = [
    {
      category: 'Cloud Providers',
      partners: [
        { name: 'Amazon Web Services', tier: 'Advanced Partner' },
        { name: 'Microsoft Azure', tier: 'Gold Partner' },
        { name: 'Google Cloud Platform', tier: 'Partner' },
      ],
    },
    {
      category: 'Technology Leaders',
      partners: [
        { name: 'Salesforce', tier: 'Implementation Partner' },
        { name: 'SAP', tier: 'Technology Partner' },
        { name: 'Oracle', tier: 'Solution Partner' },
      ],
    },
    {
      category: 'Innovation Ecosystem',
      partners: [
        { name: 'NVIDIA', tier: 'AI Partner' },
        { name: 'MongoDB', tier: 'Technology Partner' },
        { name: 'Snowflake', tier: 'Data Partner' },
      ],
    },
  ];

  const capabilities = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international markets through our alliance network spanning 15+ countries.',
    },
    {
      icon: Network,
      title: 'Enhanced Capabilities',
      description: 'Expanded technical capabilities through strategic technology partnerships.',
    },
    {
      icon: Rocket,
      title: 'Innovation Access',
      description: 'Early access to cutting-edge technologies and beta programs.',
    },
    {
      icon: Users,
      title: 'Talent Network',
      description: 'Collaborative talent pools and knowledge sharing across partners.',
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Strategic Alliances"
        description="Explore SOFTURECS AI LABS PRIVATE LIMITED' strategic alliances with AWS, Microsoft Azure, Google Cloud, Salesforce, and global technology leaders across 15+ countries."
        keywords="strategic alliances, AWS advanced partner, Microsoft Gold partner, technology alliances, global IT partnerships"
      />
      
      <PageHero
        title="Strategic Alliances"
        description="Strategic alliances that enhance our capabilities and global reach. Partnering with world-class technology leaders to deliver excellence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Strategic Alliances' }
        ]}
        icon={Network}
        iconColor="from-violet-500 to-purple-600"
        badge="Global Network"
        image={heroAlliances}
        imageAlt="Global strategic alliances network"
        stats={[
          { value: '20+', label: 'Strategic Alliances' },
          { value: '15+', label: 'Countries' },
          { value: '50+', label: 'Certifications' }
        ]}
      />

      {/* Alliance Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Powered by Strategic Partnerships
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our strategic alliances with global technology leaders enable us to deliver 
                comprehensive, cutting-edge solutions to our clients. These partnerships 
                provide access to advanced technologies, certified expertise, and proven 
                methodologies.
              </p>
              <p className="text-muted-foreground mb-6">
                Through our alliance network, we combine the best of multiple ecosystems 
                to create solutions that truly meet the complex needs of modern enterprises.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent">20+</div>
                  <p className="text-sm text-muted-foreground">Strategic Alliances</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <p className="text-sm text-muted-foreground">Countries Covered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {capabilities.map((cap, index) => (
                <div key={cap.title} className="p-6 bg-card rounded-xl shadow-soft">
                  <cap.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alliance Categories */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Alliance Network</h2>
            <p className="text-lg text-muted-foreground">
              Partnering with industry leaders to deliver exceptional value.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {alliances.map((alliance, index) => (
              <motion.div
                key={alliance.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Building className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-6">{alliance.category}</h3>
                <div className="space-y-4">
                  {alliance.partners.map((partner) => (
                    <div key={partner.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{partner.name}</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">{partner.tier}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 text-center"
          >
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Presence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Through our strategic alliances, we serve clients across North America, Europe, 
              Asia Pacific, and the Middle East with localized expertise and global standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['North America', 'Europe', 'Asia Pacific', 'Middle East', 'India'].map((region) => (
                <span key={region} className="px-4 py-2 bg-card rounded-lg shadow-soft font-medium text-foreground">
                  {region}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Leverage Our Alliance Network
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Benefit from our strategic partnerships for your next project.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
