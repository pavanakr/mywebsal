import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HealthPulse Platform',
    category: 'Healthcare',
    description: 'A comprehensive patient management system serving 500+ healthcare providers',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    href: '/portfolio/healthpulse',
  },
  {
    title: 'FinVault Banking App',
    category: 'Fintech',
    description: 'Secure mobile banking solution with 2M+ active users',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
    href: '/portfolio/finvault',
  },
  {
    title: 'LogiTrack Pro',
    category: 'Logistics',
    description: 'Real-time supply chain visibility platform for global operations',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    href: '/portfolio/logitrack',
  },
];

export function PortfolioPreview() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Case Studies
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={project.href}
                className="group block bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-accent/40 hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="flex items-center gap-2 text-primary-foreground font-medium">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 font-display text-xs font-semibold tracking-[0.3em] uppercase text-primary-foreground/70 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary-foreground/10">
                    0{index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="mt-4 h-px w-8 bg-accent/40 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
