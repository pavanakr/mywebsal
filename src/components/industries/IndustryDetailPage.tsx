import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowRight, CheckCircle, ExternalLink, AlertTriangle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { PageEnhancements } from '@/components/layout/PageEnhancements';

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  image: string;
  href: string;
}

interface IndustryDetailProps {
  icon: LucideIcon;
  color: string;
  name: string;
  tagline: string;
  description: string;
  challenges: Challenge[];
  solutions: Solution[];
  capabilities: string[];
  caseStudies: CaseStudy[];
  stats: { value: string; label: string }[];
  heroImage?: string;
  seoKeywords?: string;
}

export function IndustryDetailPage({
  icon: Icon,
  color,
  name,
  tagline,
  description,
  challenges,
  solutions,
  capabilities,
  caseStudies,
  stats,
  heroImage,
  seoKeywords,
}: IndustryDetailProps) {
  const defaultKeywords = `${name.toLowerCase()} technology, ${name.toLowerCase()} software, digital transformation, enterprise solutions, ${capabilities.slice(0, 4).join(', ').toLowerCase()}`;
  
  return (
    <Layout>
      <SEO
        title={`${name} Industry Solutions`}
        description={description}
        keywords={seoKeywords || defaultKeywords}
      />
      
      <PageHero
        title={tagline}
        description={description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: name }
        ]}
        icon={Icon}
        iconColor={color}
        badge={`${name} Industry`}
        image={heroImage}
        imageAlt={`${name} industry illustration`}
        stats={stats}
      />


      {/* Challenges */}
      <section className="py-8 md:py-10 lg:py-12 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Industry Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Challenges We Solve in {name}
            </h2>
          </motion.div>

          {/* Illustration placeholder */}
          <div
            role="img"
            aria-label={`${name} industry visual`}
            className="mx-auto mb-12 max-w-4xl h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/15 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
          >
            <svg viewBox="0 0 400 120" className="w-64 h-32 opacity-80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="ind-grad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
              <rect x="20" y="70" width="40" height="40" rx="6" fill="url(#ind-grad)" opacity="0.9"/>
              <rect x="80" y="45" width="40" height="65" rx="6" fill="url(#ind-grad)" opacity="0.75"/>
              <rect x="140" y="25" width="40" height="85" rx="6" fill="url(#ind-grad)" opacity="0.9"/>
              <rect x="200" y="55" width="40" height="55" rx="6" fill="url(#ind-grad)" opacity="0.7"/>
              <rect x="260" y="35" width="40" height="75" rx="6" fill="url(#ind-grad)" opacity="0.85"/>
              <rect x="320" y="60" width="40" height="50" rx="6" fill="url(#ind-grad)" opacity="0.7"/>
              <path d="M40 40 L100 25 L160 15 L220 30 L280 20 L340 35" stroke="url(#ind-grad)" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, rotateX: 45, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-destructive/30 transition-colors"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 md:py-10 lg:py-12 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We Help {name} Companies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <solution.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-8 md:py-10 lg:py-12 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our {name} Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We bring deep domain knowledge and technical expertise to every {name.toLowerCase()} project, ensuring solutions that meet industry standards and regulations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent/20 to-cyan-light/10 p-8 rounded-2xl border border-accent/20"
            >
              <Lightbulb className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Deep {name.toLowerCase()} industry expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Regulatory compliance knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Proven track record with {name.toLowerCase()} clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">Dedicated industry specialists</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance, Integrations & Impact */}
      <section className="py-8 md:py-10 lg:py-12 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance, Integrations & Impact for {name}
            </h2>
            <p className="text-muted-foreground">
              Built to plug into the tools, standards, and regulations that shape modern {name.toLowerCase()} operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-2xl border border-border/50"
            >
              <div
                role="img"
                aria-label="Compliance illustration"
                className="h-24 mb-4 rounded-lg bg-gradient-to-br from-accent/15 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
              >
                <svg viewBox="0 0 60 40" className="w-16 h-10 opacity-80" aria-hidden="true">
                  <defs>
                    <linearGradient id="ind-comp" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                  <path d="M30 5 L50 12 L50 24 C50 32 40 36 30 38 C20 36 10 32 10 24 L10 12 Z" fill="url(#ind-comp)" opacity="0.85" />
                  <path d="M22 22 L28 28 L38 16" stroke="hsl(var(--background))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Compliance & Standards</h3>
              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI-DSS', 'WCAG 2.2'].map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-foreground border border-border/50">{c}</span>
                ))}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-card p-6 rounded-2xl border border-border/50"
            >
              <div
                role="img"
                aria-label="Integrations illustration"
                className="h-24 mb-4 rounded-lg bg-gradient-to-br from-accent/15 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
              >
                <svg viewBox="0 0 80 40" className="w-20 h-10 opacity-80" aria-hidden="true">
                  <defs>
                    <linearGradient id="ind-int" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="20" r="8" fill="url(#ind-int)" opacity="0.9" />
                  <circle cx="40" cy="20" r="10" fill="url(#ind-int)" opacity="0.75" />
                  <circle cx="68" cy="20" r="8" fill="url(#ind-int)" opacity="0.85" />
                  <line x1="20" y1="20" x2="30" y2="20" stroke="url(#ind-int)" strokeWidth="2" />
                  <line x1="50" y1="20" x2="60" y2="20" stroke="url(#ind-int)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {['REST / GraphQL', 'Salesforce', 'SAP', 'Stripe', 'Twilio', 'Snowflake', 'AWS', 'Azure'].map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-foreground border border-border/50">{c}</span>
                ))}
              </div>
            </motion.div>

            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="bg-card p-6 rounded-2xl border border-border/50"
            >
              <div
                role="img"
                aria-label="Impact metrics illustration"
                className="h-24 mb-4 rounded-lg bg-gradient-to-br from-accent/15 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
              >
                <svg viewBox="0 0 80 40" className="w-20 h-10 opacity-80" aria-hidden="true">
                  <defs>
                    <linearGradient id="ind-kpi" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                  <polyline points="4,32 18,24 30,28 44,14 58,20 76,6" fill="none" stroke="url(#ind-kpi)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="76" cy="6" r="3" fill="url(#ind-kpi)" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Typical Impact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-foreground"><span className="w-2 h-2 rounded-full bg-accent" /> 30–60% faster time-to-market</li>
                <li className="flex items-center gap-2 text-foreground"><span className="w-2 h-2 rounded-full bg-accent" /> 40% lower operating cost</li>
                <li className="flex items-center gap-2 text-foreground"><span className="w-2 h-2 rounded-full bg-accent" /> 2–3× user engagement lift</li>
                <li className="flex items-center gap-2 text-foreground"><span className="w-2 h-2 rounded-full bg-accent" /> 99.9% uptime SLA</li>
              </ul>
            </motion.div>
          </div>

          {/* Trusted logos strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="mt-10 p-6 rounded-2xl border border-border/40 bg-card/60"
          >
            <div className="text-center text-sm font-medium text-muted-foreground mb-4">
              Trusted by teams building the future of {name.toLowerCase()}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded-md bg-gradient-to-r from-accent/15 to-primary/10 border border-border/40 flex items-center justify-center">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wider">CLIENT {i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 md:py-10 lg:py-12 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {name} Case Studies
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={study.href}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="flex items-center gap-2 text-primary-foreground font-medium">
                        View Case Study
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((result, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced content: impact stats, differentiators, FAQ */}
      <PageEnhancements title={name} kind="industry" highlights={capabilities} />

      {/* CTA */}
      <section className="py-12 md:py-14 bg-gradient-to-r from-accent to-cyan-light relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your {name} Business?
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Let's discuss how our {name.toLowerCase()} expertise can help you achieve your digital transformation goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
