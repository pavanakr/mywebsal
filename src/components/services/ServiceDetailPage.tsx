import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { ServiceSidebar } from './ServiceSidebar';
import { PageEnhancements } from '@/components/layout/PageEnhancements';
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  href: string;
}

interface ServiceDetailProps {
  icon: LucideIcon;
  color: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: ProcessStep[];
  technologies: string[];
  caseStudies: CaseStudy[];
  useCases: string[];
  heroImage?: string;
  seoKeywords?: string;
  children?: React.ReactNode;
}

export function ServiceDetailPage({
  icon: Icon,
  color,
  title,
  tagline,
  description,
  benefits,
  process,
  technologies,
  caseStudies,
  useCases,
  heroImage,
  seoKeywords,
  children,
}: ServiceDetailProps) {
  const fullTitle = `${title} Services`;
  const defaultKeywords = `${title.toLowerCase()}, softurecs ai labs, software development, enterprise solutions, custom software, ${technologies.slice(0, 5).join(', ').toLowerCase()}`;
  
  return (
    <Layout>
      <SEO
        title={fullTitle}
        description={`SOFTURECS AI LABS: Specialized ${title.toLowerCase()} services. ${tagline}`}
        keywords={seoKeywords || defaultKeywords}
      />
      
      {/* Sticky Sidebar Navigation */}
      <ServiceSidebar />
      
      <PageHero
        title={title}
        description={tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: title }
        ]}
        icon={Icon}
        iconColor={color}
        badge="Professional Service"
        image={heroImage}
        imageAlt={`${title} service illustration`}
      />

      {/* Overview & Benefits */}
      <section id="overview" className="py-8 md:py-10 lg:py-12 bg-background scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our {title}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border/50 shadow-soft"
            >
              {/* Illustration placeholder */}
              <div
                role="img"
                aria-label={`${title} illustration`}
                className="relative mb-6 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-accent/15 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
              >
                <svg viewBox="0 0 200 100" className="w-40 h-24 opacity-80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="svg-grad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="50" r="22" fill="url(#svg-grad)" opacity="0.85" />
                  <rect x="80" y="28" width="90" height="14" rx="7" fill="url(#svg-grad)" opacity="0.7" />
                  <rect x="80" y="52" width="70" height="10" rx="5" fill="url(#svg-grad)" opacity="0.5" />
                  <rect x="80" y="70" width="50" height="8" rx="4" fill="url(#svg-grad)" opacity="0.4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Common Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-8 md:py-10 lg:py-12 bg-secondary/30 scroll-mt-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver Results
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures quality, transparency, and timely delivery.
            </p>
          </motion.div>

          {/* Process illustration strip */}
          <div
            role="img"
            aria-label="Delivery timeline illustration"
            className="mx-auto mb-8 max-w-3xl h-20 rounded-xl bg-gradient-to-r from-accent/10 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
          >
            <svg viewBox="0 0 320 40" className="w-72 h-10 opacity-80" aria-hidden="true">
              <defs>
                <linearGradient id="proc-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
              <line x1="10" y1="20" x2="310" y2="20" stroke="url(#proc-line)" strokeWidth="2" strokeDasharray="4 6" />
              {[10, 80, 150, 220, 290].map((x, i) => (
                <circle key={i} cx={x} cy="20" r="8" fill="url(#proc-line)" opacity={0.55 + i * 0.1} />
              ))}
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all"
              >
                <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-8 md:py-10 lg:py-12 bg-background scroll-mt-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Technologies We Use
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-5 py-3 bg-card rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-soft transition-all cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deliverables / What You Get */}
      <section id="deliverables" className="py-8 md:py-10 lg:py-12 bg-background scroll-mt-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deliverables & Outcomes
            </h2>
            <p className="text-muted-foreground">
              Every {title.toLowerCase()} engagement ships with clear artifacts, measurable KPIs, and long-term support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: 'Solution Blueprint', d: 'Architecture diagrams, tech-stack decisions, and delivery roadmap.' },
              { t: 'Production-Ready Build', d: 'Fully tested, documented codebase deployed to your cloud of choice.' },
              { t: 'Handover & Training', d: 'Runbooks, walkthroughs, and enablement sessions for your team.' },
              { t: 'Ongoing Support', d: 'SLA-backed monitoring, iteration cycles, and dedicated success manager.' },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/40 hover:shadow-soft transition-all"
              >
                <div
                  role="img"
                  aria-label={`${item.t} illustration`}
                  className="h-24 mb-4 rounded-lg bg-gradient-to-br from-accent/15 via-emerald-400/10 to-amber-300/10 border border-border/40 flex items-center justify-center"
                >
                  <svg viewBox="0 0 60 40" className="w-16 h-10 opacity-80" aria-hidden="true">
                    <defs>
                      <linearGradient id={`deliv-${i}`} x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--accent))" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y={10 + i * 2} width={12 + i * 2} height={24 - i * 2} rx="3" fill={`url(#deliv-${i})`} opacity="0.9" />
                    <rect x="22" y={6 + i} width="14" height={30 - i} rx="3" fill={`url(#deliv-${i})`} opacity="0.75" />
                    <rect x="42" y={14 - i} width="12" height={22 + i} rx="3" fill={`url(#deliv-${i})`} opacity="0.85" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.t}</h3>
                <p className="text-sm text-muted-foreground">{item.d}</p>
              </motion.div>
            ))}
          </div>

          {/* Engagement models strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="mt-10 grid md:grid-cols-3 gap-4"
          >
            {[
              { t: 'Fixed Scope', d: 'Defined deliverables and milestones — best for well-scoped builds.' },
              { t: 'Dedicated Team', d: 'Full-time squad embedded with your product & engineering teams.' },
              { t: 'Time & Material', d: 'Flexible sprints with transparent weekly reporting and burn-down.' },
            ].map((m) => (
              <div key={m.t} className="p-5 rounded-xl border border-border/50 bg-secondary/40">
                <div className="text-sm font-semibold text-accent mb-1">Engagement</div>
                <div className="text-lg font-bold text-foreground mb-1">{m.t}</div>
                <p className="text-sm text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-8 md:py-10 lg:py-12 bg-secondary/30 scroll-mt-24">
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
                Related Case Studies
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
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.results.slice(0, 2).map((result, i) => (
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

      {/* Additional SEO Content / FAQs */}
      {children}

      {/* Enhanced content: impact stats, differentiators, FAQ */}
      <PageEnhancements title={title} kind="service" highlights={useCases} />

      {/* CTA */}
      <section id="cta" className="py-12 md:py-14 bg-gradient-to-r from-accent to-cyan-light relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 border border-primary rounded-full" />
          <div className="absolute bottom-0 right-0 w-60 h-60 border border-primary rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Let's discuss how our {title.toLowerCase()} services can help transform your business.
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
