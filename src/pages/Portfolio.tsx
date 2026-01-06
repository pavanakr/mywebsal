import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { ExternalLink, ArrowRight, FolderOpen } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import heroPortfolioImage from '@/assets/hero-portfolio.png';

const categories = ['All', 'Healthcare', 'Fintech', 'E-commerce', 'Logistics', 'Real Estate'];

const projects = [
  {
    title: 'HealthPulse Platform',
    category: 'Healthcare',
    description: 'A comprehensive patient management system serving 500+ healthcare providers with HIPAA-compliant features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    results: ['40% reduction in admin time', '500+ providers onboarded', '2M+ patients managed'],
    href: '/portfolio/healthpulse',
  },
  {
    title: 'FinVault Banking App',
    category: 'Fintech',
    description: 'Secure mobile banking solution with advanced fraud detection and seamless payment processing.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
    results: ['2M+ active users', '99.99% uptime', '$5B+ transactions'],
    href: '/portfolio/finvault',
  },
  {
    title: 'LogiTrack Pro',
    category: 'Logistics',
    description: 'Real-time supply chain visibility platform enabling global operations tracking and optimization.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    results: ['30% cost reduction', '15K+ shipments daily', 'Real-time tracking'],
    href: '/portfolio/logitrack',
  },
  {
    title: 'ShopSphere Commerce',
    category: 'E-commerce',
    description: 'Scalable multi-vendor marketplace platform supporting millions of daily transactions.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    results: ['5M+ products listed', '100K+ vendors', '25% conversion boost'],
    href: '/portfolio/shopsphere',
  },
  {
    title: 'PropView360',
    category: 'Real Estate',
    description: 'Virtual property tour platform with AI-powered recommendations and seamless booking.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    results: ['50K+ virtual tours', '35% faster sales', 'AI matching'],
    href: '/portfolio/propview',
  },
  {
    title: 'MedConnect Telehealth',
    category: 'Healthcare',
    description: 'End-to-end telehealth solution connecting patients with healthcare providers worldwide.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    results: ['1M+ consultations', '50+ countries', '4.8 star rating'],
    href: '/portfolio/medconnect',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Portfolio & Case Studies"
        description="Explore our portfolio of innovative digital solutions. 1500+ successful projects across healthcare, fintech, e-commerce, and logistics with measurable results."
        keywords="case studies, portfolio, software projects, digital transformation, success stories, client projects, enterprise solutions"
      />
      <PageHero
        title="Transforming Ideas Into Digital Success Stories"
        description="Explore our portfolio of innovative solutions that have helped businesses achieve their digital transformation goals and drive real business results."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Portfolio' }
        ]}
        icon={FolderOpen}
        iconColor="from-emerald-500 to-cyan-600"
        badge="Case Studies"
        image={heroPortfolioImage}
        imageAlt="Portfolio case studies illustration"
        stats={[
          { value: '1500+', label: 'Projects' },
          { value: '99%', label: 'Success Rate' },
          { value: '$2B+', label: 'Client Revenue' }
        ]}
      />

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border/50 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Link
                  to={project.href}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="flex items-center gap-2 text-primary-foreground font-medium">
                        View Case Study
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.results.slice(0, 2).map((result, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                          {result}
                        </span>
                      ))}
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

export default Portfolio;
