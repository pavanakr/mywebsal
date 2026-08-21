import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Cloud, Cpu, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and drive operational excellence.',
    href: '/services/custom-software',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    href: '/services/web-development',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.',
    href: '/services/mobile-apps',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure solutions and DevOps practices that ensure scalability, reliability, and continuous delivery.',
    href: '/services/cloud-devops',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by AI and machine learning to transform your business processes.',
    href: '/services/ai-automation',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development from ideation to launch, built for scale and market success.',
    href: '/services/saas',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-background hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we offer end-to-end software development services that empower businesses to achieve digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link
                to={service.href}
                className="group relative block h-full p-8 bg-card rounded-2xl border border-border/60 hover:border-accent/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-semibold text-sm">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-accent transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
