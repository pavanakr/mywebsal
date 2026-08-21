import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Server, Smartphone, Monitor, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';

export default function KukatpallyLanding() {
  return (
    <Layout>
      <SEO 
        title="Software Development Company in Kukatpally, Hyderabad | Softurecs AI Labs"
        description="Leading software development company in Kukatpally. Specializing in AI, CRM development, and custom software for Kukatpally businesses. Expert IT services Hyderabad."
        keywords="software company Kukatpally, software development Kukatpally, IT company Kukatpally, CRM development Kukatpally, AI development Kukatpally, SaaS development Kukatpally"
      />
      <LocalBusinessSchema city="Kukatpally" region="Telangana" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'Kukatpally', url: 'https://softurecs.com/software-development-company-kukatpally/' }
      ]} />
      
      <PageHero
        title="Software Development Company in Kukatpally"
        description="Driving innovation and digital growth for Kukatpally's business community."
        badge="Kukatpally Technology Hub"
        variant="centered"
        icon={MapPin}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Kukatpally' }
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-accent/5 flex items-center justify-center p-12 border border-accent/10"
            >
              <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                {[Server, Smartphone, Monitor, ShieldCheck].map((Icon, i) => (
                  <div key={i} className="bg-card p-6 rounded-2xl border border-border/50 shadow-soft flex items-center justify-center">
                    <Icon className="w-12 h-12 text-accent" />
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Empowering Kukatpally Businesses with Modern Software</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Located strategically to serve one of Hyderabad's most active commercial districts, Softurecs AI Labs provides premier software development services in Kukatpally. We cater to the technological needs of industries ranging from retail to high-end consulting.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <h3 className="font-bold text-foreground mb-1">Custom Software Kukatpally</h3>
                  <p className="text-sm text-muted-foreground">Tailored solutions that address the specific operational challenges of Kukatpally enterprises.</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <h3 className="font-bold text-foreground mb-1">CRM & AI Excellence</h3>
                  <p className="text-sm text-muted-foreground">Leverage advanced CRM and AI automation to stay ahead of the competition in Hyderabad.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/services/custom-software" className="text-accent hover:underline font-medium">Software Development</Link>
                <span className="text-border">|</span>
                <Link to="/services/crm-development" className="text-accent hover:underline font-medium">CRM Solutions</Link>
                <span className="text-border">|</span>
                <Link to="/services/ai-automation" className="text-accent hover:underline font-medium">AI & Automation</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
