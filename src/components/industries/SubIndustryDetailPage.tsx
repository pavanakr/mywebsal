import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { ArrowRight, CheckCircle, Lightbulb, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface UseCase {
  title: string;
  description: string;
}

interface SubIndustryDetailProps {
  icon: LucideIcon;
  color: string;
  parentIndustry: string;
  parentHref: string;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  useCases: UseCase[];
  technologies: string[];
  benefits: string[];
  stats: { value: string; label: string }[];
}

export function SubIndustryDetailPage({
  icon: Icon,
  color,
  parentIndustry,
  parentHref,
  name,
  tagline,
  description,
  features,
  useCases,
  technologies,
  benefits,
  stats,
}: SubIndustryDetailProps) {
  const seoKeywords = `${name.toLowerCase()}, ${parentIndustry.toLowerCase()} solutions, ${technologies.slice(0, 4).join(', ').toLowerCase()}, enterprise software, digital transformation`;

  return (
    <Layout>
      <SEO
        title={`${name} - ${parentIndustry} Solutions`}
        description={description}
        keywords={seoKeywords}
      />
      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-600/10 to-transparent rounded-full" />
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-20 w-24 h-24 border border-indigo-400/20 rounded-2xl rotate-12"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-20 w-16 h-16 border border-cyan-400/20 rounded-full"
          />
        </div>
        
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-8"
          >
            <Link to="/industries" className="hover:text-cyan-400 transition-colors">Industries</Link>
            <span>/</span>
            <Link to={parentHref} className="hover:text-cyan-400 transition-colors">{parentIndustry}</Link>
            <span>/</span>
            <span className="text-white/80">{name}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Icon Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/30`}
            >
              <Icon className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* Solution Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">{parentIndustry} Solution</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {tagline}
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold px-8 h-14 text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+917396080902">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold px-8 h-14 text-lg backdrop-blur-sm">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border/50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center group"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-accent mb-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We Build for {name}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
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
                    <feature.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Industry Applications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Technology Stack
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Business Benefits
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Choose Our Solution
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-cyan-light relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Build Your {name} Solution?
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Get in touch with our experts to discuss your project requirements and get a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-6 text-primary">
                <a href="tel:+917396080902" className="flex items-center gap-2 hover:text-primary/80 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 7396080902</span>
                </a>
                <a href="mailto:info@softurecs.com" className="flex items-center gap-2 hover:text-primary/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">info@softurecs.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
