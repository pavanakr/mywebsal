import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Code, Globe, Smartphone, Cloud, Cpu, Layers, ArrowRight, RefreshCw, Database, Users, Rocket } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

const services = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    description: 'Build intelligent systems that automate, predict, and optimize performance. From machine learning to generative AI, we deliver cutting-edge AI solutions.',
    features: ['AI Development', 'Machine Learning', 'Generative AI', 'LLM Development', 'AI Chatbots'],
    href: '/services/ai-automation',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Custom mobile apps that engage users and drive business growth. Native iOS, Android, and cross-platform solutions with stunning UX.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
    href: '/services/mobile-apps',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Database,
    title: 'Big Data & Analytics',
    description: 'Unlock insights and value from large-scale, complex data systems. Transform raw data into strategic business intelligence.',
    features: ['Data Analytics', 'Business Intelligence', 'Data Engineering', 'Predictive Analytics'],
    href: '/services/big-data',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Users,
    title: 'Staff Augmentation',
    description: 'Extend your team with skilled developers for faster delivery. Access top-tier talent without the overhead of full-time hiring.',
    features: ['Dedicated Teams', 'Remote Developers', 'IT Consulting', 'Project Support'],
    href: '/services/staff-augmentation',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Technologies',
    description: 'Transforming businesses with powerful, flexible, and secure cloud services. AWS, Azure, and DevOps excellence.',
    features: ['Cloud Migration', 'AWS Services', 'Azure Solutions', 'DevOps Services'],
    href: '/services/cloud-devops',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Modern software that is fast, secure, and scalable. Custom solutions tailored to your unique business requirements.',
    features: ['Custom Software', 'Web Development', 'SaaS Development', 'API Development'],
    href: '/services/custom-software',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    icon: RefreshCw,
    title: 'App Modernization',
    description: 'Upgrade legacy apps with modern features, design, and performance. Transform outdated systems into competitive advantages.',
    features: ['Legacy Modernization', 'Cloud Migration', 'Re-architecture', 'Performance Optimization'],
    href: '/services/application-modernization',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Rocket,
    title: 'On-Demand Solutions',
    description: 'Launch on-demand platforms for services, delivery, or booking needs. Uber-like solutions customized for your business model.',
    features: ['Delivery Apps', 'Booking Platforms', 'Service Marketplaces', 'Real-time Tracking'],
    href: '/services/on-demand',
    color: 'from-red-500 to-pink-600',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-primary-foreground/70">
              From custom software to AI-powered platforms, we deliver end-to-end solutions that drive digital transformation and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="group block bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300 overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-5 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
