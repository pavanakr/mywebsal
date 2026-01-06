import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Landmark, ShoppingCart, Plane, Building2, Truck, GraduationCap, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'HIPAA-compliant solutions for modern healthcare',
    href: '/industries/healthcare',
  },
  {
    icon: Landmark,
    name: 'Fintech',
    description: 'Secure financial technology platforms',
    href: '/industries/fintech',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description: 'Scalable online retail solutions',
    href: '/industries/ecommerce',
  },
  {
    icon: Plane,
    name: 'Travel',
    description: 'Next-gen travel & hospitality tech',
    href: '/industries/travel',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'PropTech innovation solutions',
    href: '/industries/real-estate',
  },
  {
    icon: Truck,
    name: 'Logistics',
    description: 'Smart supply chain management',
    href: '/industries/logistics',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'EdTech platforms for learning',
    href: '/industries/education',
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With deep domain expertise across diverse sectors, we deliver solutions that address industry-specific challenges and unlock new opportunities for growth.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={industry.href}
                  className="block p-4 bg-card rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-soft transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <industry.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{industry.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{industry.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
