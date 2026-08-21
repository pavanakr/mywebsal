import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Code2, Database, Shield, Zap, LayoutPanelTop, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';

export default function HyderabadLanding() {
  const services = [
    { title: 'AI & Automation', icon: BrainCircuit, desc: 'Leading AI development in Hyderabad with focus on neural networks and business automation.' },
    { title: 'Custom Software', icon: Code2, desc: 'Enterprise-grade software solutions tailored for Hyderabad\'s diverse tech ecosystem.' },
    { title: 'CRM Solutions', icon: LayoutPanelTop, desc: 'Specialized CRM development including Real Estate and WhatsApp API integrations.' },
    { title: 'SaaS Development', icon: Zap, desc: 'Scalable cloud-native applications built for global markets from our Hyderabad hub.' },
  ];

  return (
    <Layout>
      <SEO 
        title="Software Development Company in Hyderabad | Softurecs AI Labs"
        description="Top-rated software development company in Hyderabad. Expert AI solutions, custom CRM, and SaaS development services in Telangana. Hire expert developers today."
        keywords="software company in Hyderabad, software development company Hyderabad, software solutions Hyderabad, CRM development Hyderabad, AI development Hyderabad"
      />
      <LocalBusinessSchema city="Hyderabad" region="Telangana" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'Hyderabad', url: 'https://softurecs.com/software-development-company-hyderabad/' }
      ]} />
      
      <PageHero
        title="Software Development Company in Hyderabad"
        description="Empowering Hyderabad's digital transformation with cutting-edge AI and enterprise software solutions."
        badge="Telangana Tech Hub"
        variant="centered"
        icon={MapPin}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Hyderabad' }
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
                Premier Software Development in the Heart of Hyderabad
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Softurecs AI Labs is a leading software company in Hyderabad, Telangana. We provide comprehensive digital solutions to startups and enterprises across the region, from HITEC City to Uppal. Our expertise in AI and custom software development helps Hyderabad businesses scale efficiently in the modern digital economy.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom Software Development Hyderabad',
                  'AI & Machine Learning Solutions',
                  'Enterprise CRM Development',
                  'Real Estate CRM Hyderabad Specialist',
                  'SaaS & Cloud Applications'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft"
                >
                  <s.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hyderabad's Trusted Tech Partner</h2>
            <p className="text-muted-foreground">
              From Kukatpally to Madhapur, we serve the entire Hyderabad metropolitan area with localized support and global standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
              <p className="text-muted-foreground">Deep understanding of the Telangana business landscape and local talent pool access.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4">AI Focus</h3>
              <p className="text-muted-foreground">Specialized AI chatbot and automation development for Hyderabad's growing service sector.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4">Internal Links</h3>
              <div className="space-y-2 mt-4">
                <Link to="/services/crm-development" className="block text-accent hover:underline">CRM Development</Link>
                <Link to="/services/ai-automation" className="block text-accent hover:underline">AI Solutions</Link>
                <Link to="/services/custom-software" className="block text-accent hover:underline">Software Development</Link>
                <Link to="/real-estate-crm" className="block text-accent hover:underline">Real Estate CRM</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
