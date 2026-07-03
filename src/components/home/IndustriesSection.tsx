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
    <section className="section-padding bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              Industry Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight leading-[1.1]">
              Domain-fluent teams for <span className="text-accent">every sector</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We combine deep vertical understanding with modern engineering to ship regulated, high-stakes systems — from HIPAA-grade healthcare to real-time fintech and global logistics.
            </p>
            <Link
              to="/industries"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-soft"
            >
              Explore Industries
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={industry.href}
                  className="relative block p-5 bg-card rounded-xl border border-border/60 hover:border-accent/50 hover:shadow-elevated transition-all group overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-primary-foreground text-accent transition-colors">
                      <industry.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1 text-sm tracking-tight">{industry.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{industry.description}</p>
                    <div className="mt-3 h-px w-6 bg-accent/40 group-hover:w-full transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
