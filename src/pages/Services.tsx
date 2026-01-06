import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Code, Globe, Smartphone, Cloud, Cpu, Layers, ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and drive operational excellence. From enterprise applications to specialized tools, we build software that fits your needs perfectly.',
    features: ['Enterprise Applications', 'Legacy Modernization', 'API Development', 'System Integration'],
    href: '/services/custom-software',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience. We create everything from marketing websites to complex web platforms.',
    features: ['Progressive Web Apps', 'E-commerce Platforms', 'CMS Solutions', 'Web Portals'],
    href: '/services/web-development',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android. We build apps that users love and businesses rely on.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Maintenance'],
    href: '/services/mobile-apps',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure solutions and DevOps practices that ensure scalability, reliability, and continuous delivery. We help you leverage the full power of cloud computing.',
    features: ['Cloud Migration', 'Infrastructure as Code', 'CI/CD Pipelines', '24/7 Monitoring'],
    href: '/services/cloud-devops',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by AI and machine learning to transform your business processes. From chatbots to predictive analytics, we make AI work for you.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
    href: '/services/ai-automation',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development from ideation to launch, built for scale and market success. We help you create products that customers love and pay for.',
    features: ['MVP Development', 'Multi-tenancy Architecture', 'Subscription Management', 'Analytics & Reporting'],
    href: '/services/saas',
    color: 'from-cyan-500 to-cyan-600',
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
