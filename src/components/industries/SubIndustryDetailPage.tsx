import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
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
      
      <PageHero
        title={tagline}
        description={description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: parentIndustry, href: parentHref },
          { label: name }
        ]}
        icon={Icon}
        iconColor={color}
        badge={`${parentIndustry} Solution`}
        stats={stats}
      />


      {/* Key Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
                <a href="mailto:info@softurecsailabs.com" className="flex items-center gap-2 hover:text-primary/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">info@softurecsailabs.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
