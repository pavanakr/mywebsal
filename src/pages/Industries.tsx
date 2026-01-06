import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { 
  Truck, Building2, GraduationCap, ShoppingCart, Heart, Landmark, 
  Film, Plane, ArrowRight, CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: Truck,
    name: 'Logistics & Transportation',
    description: 'Optimize fleet, delivery, and supply chain with smart tech solutions.',
    href: '/industries/logistics-transportation',
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: Building2,
    name: 'Real Estate & Construction',
    description: 'Digitizing property management, sales, and project tracking with precision.',
    href: '/industries/real-estate-construction',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Interactive platforms for e-learning, administration, and student engagement.',
    href: '/industries/education',
    gradient: 'from-pink-500 to-pink-600',
    bgGradient: 'from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Custom ecommerce and retail solutions to boost online sales efficiently.',
    href: '/industries/retail-ecommerce',
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Secure, compliant solutions to streamline healthcare workflows and engagement.',
    href: '/industries/healthcare',
    gradient: 'from-red-500 to-red-600',
    bgGradient: 'from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40',
    iconColor: 'text-red-600 dark:text-red-400',
  },
  {
    icon: Landmark,
    name: 'Banking & Finance',
    description: 'Powerful fintech solutions for secure transactions and smart decision-making.',
    href: '/industries/banking-finance',
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Film,
    name: 'Media & Entertainment',
    description: 'Engaging, scalable platforms for content streaming, sharing, and monetization.',
    href: '/industries/media-entertainment',
    gradient: 'from-violet-500 to-violet-600',
    bgGradient: 'from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    description: 'Enhance bookings, guest experience, and operations with digital platforms.',
    href: '/industries/travel-hospitality',
    gradient: 'from-sky-500 to-sky-600',
    bgGradient: 'from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-light/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Tailored Solutions for Every Industry
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8 max-w-3xl mx-auto">
              We bring deep domain expertise to deliver industry-specific digital transformation 
              solutions that address unique challenges and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={industry.href}
                  className="group block bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300 h-full"
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.bgGradient} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <industry.icon className={`w-7 h-7 ${industry.iconColor}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Why Softurecs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industry-First Approach to Digital Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't believe in one-size-fits-all. Our solutions are designed with deep 
                understanding of your industry's unique challenges, regulations, and opportunities.
              </p>
              <div className="space-y-4">
                {[
                  'Deep domain expertise across verticals',
                  'Regulatory compliance knowledge',
                  'Industry-specific best practices',
                  'Proven track record with enterprise clients',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '8+', label: 'Industries Served' },
                { value: '700+', label: 'Enterprise Clients' },
                { value: '1500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Retention' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border/50 text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Let's discuss how our industry expertise can accelerate your digital transformation journey.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
