import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, Clock, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyDetailProps {
  title: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  metrics: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  screenshots: string[];
}

export function CaseStudyDetailPage({
  title,
  client,
  industry,
  duration,
  teamSize,
  heroImage,
  overview,
  challenge,
  solution,
  features,
  technologies,
  metrics,
  testimonial,
  screenshots,
}: CaseStudyDetailProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                  {industry}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  {title}
                </h1>
                <p className="text-xl text-primary-foreground/70 mb-8">
                  {overview}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-xs text-primary-foreground/60">Client</div>
                      <div className="font-medium text-primary-foreground">{client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-xs text-primary-foreground/60">Duration</div>
                      <div className="font-medium text-primary-foreground">{duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-xs text-primary-foreground/60">Team Size</div>
                      <div className="font-medium text-primary-foreground">{teamSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-xs text-primary-foreground/60">Industry</div>
                      <div className="font-medium text-primary-foreground">{industry}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt={title}
                  className="rounded-2xl shadow-elevated w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-card border-b border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                The Challenge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Problem Statement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Solution
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                How We Solved It
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
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
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We Built
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
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
              Visual Preview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Project Screenshots
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border/50 shadow-soft"
              >
                <img
                  src={screenshot}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Technologies Used
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-5 py-3 bg-card rounded-xl border border-border/50"
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="section-padding bg-gradient-to-br from-primary via-navy to-navy-light">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <blockquote className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-2 border-accent mb-4"
                />
                <div className="text-lg font-semibold text-primary-foreground">
                  {testimonial.author}
                </div>
                <div className="text-primary-foreground/60">{testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-cyan-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Want Similar Results?
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Let's discuss how we can help transform your business with a custom solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
