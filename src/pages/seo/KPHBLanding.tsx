import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Laptop, Cpu, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export default function KPHBLanding() {
  return (
    <Layout>
      <SEO 
        title="Software Development Company in KPHB, Hyderabad | Softurecs AI Labs"
        description="Looking for a software company in KPHB? Softurecs AI Labs provides expert AI development, CRM software, and IT services in KPHB Housing Board Colony, Hyderabad."
        keywords="software company KPHB, software development KPHB, IT company KPHB, CRM development KPHB, AI development KPHB, SaaS development KPHB"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'KPHB', url: 'https://softurecs.com/software-development-company-kphb/' }
      ]} />
      
      <PageHero
        title="Software Development Company in KPHB"
        description="Local IT excellence meeting global standards in KPHB, Hyderabad."
        badge="KPHB Tech Hub"
        variant="centered"
        icon={MapPin}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Innovative Software Solutions in KPHB Colony</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Softurecs AI Labs brings world-class software development capabilities to the doorstep of businesses in KPHB (Kukatpally Housing Board). As a local IT company in KPHB, we understand the unique requirements of growing enterprises in this vibrant commercial area.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">CRM Development KPHB</h3>
                  <p className="text-sm text-muted-foreground">Custom CRM systems designed for local businesses and agencies in the KPHB region.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">AI Solutions KPHB</h3>
                  <p className="text-sm text-muted-foreground">Deploying smart automation and AI chatbots for KPHB-based enterprises.</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 mb-12">
              <h3 className="text-xl font-bold mb-4">Why Choose Softurecs in KPHB?</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Localized Technical Support',
                  'Expert IT Consulting',
                  'Custom SaaS Development',
                  'Mobile App Excellence',
                  'Proximity to Business Hubs',
                  'Verified Local Presence'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/custom-software" className="text-accent hover:underline font-medium">Software Development</Link>
              <span className="hidden sm:inline text-border">|</span>
              <Link to="/services/crm-development" className="text-accent hover:underline font-medium">CRM Solutions</Link>
              <span className="hidden sm:inline text-border">|</span>
              <Link to="/services/ai-automation" className="text-accent hover:underline font-medium">AI & Automation</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
