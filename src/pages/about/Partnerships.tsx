import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Handshake, Users, Globe, Zap, ArrowRight, Building2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroPartnerships from '@/assets/hero-partnerships.png';

export default function Partnerships() {
  const partnerTypes = [
    {
      icon: Building2,
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers',
      partners: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Salesforce'],
    },
    {
      icon: Handshake,
      title: 'Business Partners',
      description: 'Collaborative relationships for expanded market reach',
      partners: ['Consulting Firms', 'System Integrators', 'Resellers'],
    },
    {
      icon: Lightbulb,
      title: 'Innovation Partners',
      description: 'Partnerships driving research and development',
      partners: ['Universities', 'Research Labs', 'Startups'],
    },
  ];

  const benefits = [
    { title: 'Expanded Capabilities', description: 'Access to specialized skills and resources' },
    { title: 'Global Reach', description: 'Extended market presence through partner networks' },
    { title: 'Innovation Access', description: 'Early access to cutting-edge technologies' },
    { title: 'Shared Success', description: 'Mutual growth through collaborative projects' },
  ];

  return (
    <Layout>
      <SEO 
        title="Our Partnerships"
        description="Discover SOFTURECS AI LABS PRIVATE LIMITED' strategic partnerships with AWS, Microsoft, Google Cloud, and leading technology providers. 50+ active partners across 15+ countries."
        keywords="technology partnerships, AWS partner, Microsoft partner, Google Cloud partner, software development partnerships"
      />
      
      <PageHero
        title="Our Partnerships"
        description="Collaborate with us to build impactful and scalable solutions. Our strategic partnerships enable comprehensive technology delivery."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Partnerships' }
        ]}
        icon={Handshake}
        iconColor="from-teal-500 to-cyan-600"
        badge="Collaboration"
        image={heroPartnerships}
        imageAlt="Strategic partnerships and collaboration"
        stats={[
          { value: '50+', label: 'Active Partners' },
          { value: '15+', label: 'Countries' },
          { value: '100+', label: 'Joint Projects' }
        ]}
      />

      {/* Partnership Philosophy */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Partnership Philosophy
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At SOFTURECS AI LABS PRIVATE LIMITED, we believe in the power of collaboration. Our partnerships 
                are built on mutual trust, shared values, and a commitment to delivering 
                exceptional value to our clients.
              </p>
              <p className="text-muted-foreground mb-6">
                We actively seek partnerships that complement our capabilities and enable us 
                to offer comprehensive solutions to complex business challenges.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                  ))}
                </div>
                <span className="text-muted-foreground">50+ Active Partners</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                <Globe className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">15+</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                <Handshake className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Partners</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                <Zap className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">100+</div>
                <p className="text-sm text-muted-foreground">Joint Projects</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                <Building2 className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">5</div>
                <p className="text-sm text-muted-foreground">Tier 1 Partners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Partner Ecosystem</h2>
            <p className="text-lg text-muted-foreground">
              A diverse network of partners enabling comprehensive solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.partners.map((partner) => (
                    <span key={partner} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground">
                      {partner}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground">
              What you gain when you partner with SOFTURECS AI LABS PRIVATE LIMITED.
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
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
              Become a Partner
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Partner with Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
