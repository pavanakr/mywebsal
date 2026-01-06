import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Server, Shield, Code, Cloud, Lock, Zap, Monitor, Database, ArrowRight, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Infrastructure() {
  const infrastructureItems = [
    {
      icon: Server,
      title: 'High-Performance Servers',
      description: 'Enterprise-grade server infrastructure ensuring 99.9% uptime for all deployments.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Multi-layer security protocols with ISO 27001 certified data centers.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Multi-cloud setup with AWS, Azure, and GCP for scalable solutions.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'End-to-end encryption and GDPR compliant data handling practices.'
    },
    {
      icon: Zap,
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipelines for faster and reliable releases.'
    },
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Real-time monitoring and alerting systems for proactive issue resolution.'
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Monitoring' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
  ];

  return (
    <Layout>
      <SEO 
        title="Our Infrastructure"
        description="Explore Softurecs AI Labs' enterprise-grade infrastructure - AWS, Azure, GCP cloud setup, ISO 27001 certified, 99.9% uptime, 24/7 monitoring."
        keywords="cloud infrastructure, AWS, Azure, Google Cloud, ISO 27001, enterprise security, DevOps"
      />
      
      <PageHero
        title="Our Infrastructure"
        description="Explore our advanced development environment and robust technology setup, designed for performance, security, and scalability."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Infrastructure' }
        ]}
        icon={HardDrive}
        iconColor="from-cyan-500 to-blue-600"
        badge="Technology Setup"
        variant="centered"
        stats={[
          { value: '99.9%', label: 'Uptime' },
          { value: 'ISO 27001', label: 'Certified' },
          { value: '24/7', label: 'Monitoring' }
        ]}
      />

      {/* Infrastructure Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for performance, security, and scalability at every level.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Environment */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Modern Development Environment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our development teams work with the latest tools and technologies to ensure 
                efficient collaboration and high-quality code delivery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <span className="font-medium text-foreground">Modern IDEs & Tools</span>
                    <p className="text-muted-foreground text-sm">VS Code, IntelliJ, WebStorm with AI-powered extensions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <span className="font-medium text-foreground">Version Control</span>
                    <p className="text-muted-foreground text-sm">Git-based workflows with protected branches and code reviews</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <span className="font-medium text-foreground">Security Scanning</span>
                    <p className="text-muted-foreground text-sm">Automated vulnerability scanning in CI/CD pipeline</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Security & Compliance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We maintain the highest standards of security and compliance to protect your data.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['ISO 27001', 'GDPR', 'SOC 2', 'HIPAA'].map((cert) => (
                  <div key={cert} className="px-6 py-3 bg-card rounded-xl shadow-soft">
                    <span className="font-semibold text-foreground">{cert}</span>
                    <p className="text-xs text-muted-foreground">Compliant</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Ready to Leverage Our Infrastructure?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Build your next project on our robust and secure platform.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
