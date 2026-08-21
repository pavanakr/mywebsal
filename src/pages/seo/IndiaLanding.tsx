import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Code2, BrainCircuit, ShieldCheck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';

export default function IndiaLanding() {
  const regions = [
    { name: 'Hyderabad', href: '/software-development-company-hyderabad', desc: 'Our primary technology hub and headquarters.' },
    { name: 'Kukatpally', href: '/software-development-company-kukatpally', desc: 'Serving the commercial district of Kukatpally.' },
    { name: 'KPHB', href: '/software-development-company-kphb', desc: 'Local IT services in the KPHB Housing Board region.' },
  ];

  return (
    <Layout>
      <SEO 
        title="Software Development Company in India | Softurecs AI Labs"
        description="Premier software development company in India. We provide AI-driven software solutions, custom CRM, and mobile apps to businesses across India and globally."
        keywords="software development company India, AI software India, custom software India, CRM development India, IT services India, offshore development India"
      />
      <LocalBusinessSchema city="Hyderabad" region="Telangana" country="India" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'India', url: 'https://softurecs.com/software-development-company-india/' }
      ]} />
      
      <PageHero
        title="Software Development Company in India"
        description="Delivering world-class software and AI solutions from the heart of India's technology landscape."
        badge="Digital India Excellence"
        variant="centered"
        icon={Globe}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'India' }
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                India's Trusted Partner for AI & Custom Software
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Softurecs AI Labs is a premier software development company in India, dedicated to helping businesses leverage the power of artificial intelligence and modern technology. From our headquarters in Hyderabad, we serve a diverse range of industries across the Indian subcontinent and international markets.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Bespoke Software Development for Enterprises',
                  'Leading AI & Machine Learning Research in India',
                  'Comprehensive CRM Solutions for Indian Markets',
                  'SaaS Development and Cloud Infrastructure',
                  'Dedicated Offshore Development Teams'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </div>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <div className="grid gap-6">
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft"
                >
                  <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{region.desc}</p>
                  <Link to={region.href} className="text-accent hover:underline inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Driving Digital India Forward</h2>
            <p className="text-muted-foreground">
              We align our technology strategies with the vision of Digital India, fostering innovation and creating high-impact software for a global audience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <Code2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground text-sm">Our engineers in India are trained in the latest stacks including AI/ML, Cloud-native apps, and Enterprise CRM.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <ShieldCheck className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Standards</h3>
              <p className="text-muted-foreground text-sm">We follow international quality benchmarks to ensure our software meets the highest security and performance standards.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <BrainCircuit className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Innovation</h3>
              <p className="text-muted-foreground text-sm">Leading the AI revolution in the Indian software landscape with conversational AI and intelligent automation.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
