import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { 
  Truck, Building2, GraduationCap, ShoppingCart, Heart, Landmark, 
  Film, Plane, ArrowRight, CheckCircle, Search, Filter, Grid3X3, List, Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroIndustriesImage from '@/assets/hero-industries.png';

const industries = [
  {
    icon: Truck,
    name: 'Logistics & Transportation',
    description: 'Optimize fleet, delivery, and supply chain with smart tech solutions.',
    href: '/industries/logistics-transportation',
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
    category: 'Supply Chain',
    solutions: [
      { name: 'On-demand logistics', href: '/industries/solutions/on-demand-logistics' },
      { name: 'Transportation automation', href: '/industries/solutions/transportation-automation' },
      { name: 'Shipping management', href: '/industries/solutions/shipping-management' },
    ],
  },
  {
    icon: Building2,
    name: 'Real Estate & Construction',
    description: 'Digitizing property management, sales, and project tracking with precision.',
    href: '/industries/real-estate-construction',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    category: 'Property',
    solutions: [
      { name: 'Property listings', href: '/industries/solutions/property-management' },
      { name: 'Construction management', href: '/industries/solutions/construction-management' },
      { name: 'Virtual tours', href: '/industries/solutions/virtual-tour' },
    ],
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Interactive platforms for e-learning, administration, and student engagement.',
    href: '/industries/education',
    gradient: 'from-pink-500 to-pink-600',
    bgGradient: 'from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
    category: 'EdTech',
    solutions: [
      { name: 'LMS platforms', href: '/industries/solutions/lms-platform' },
      { name: 'Virtual classrooms', href: '/industries/solutions/virtual-learning' },
      { name: 'Student management', href: '/industries/solutions/student-management' },
    ],
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Custom ecommerce and retail solutions to boost online sales efficiently.',
    href: '/industries/retail-ecommerce',
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    category: 'Commerce',
    solutions: [
      { name: 'E-commerce platforms', href: '/industries/solutions/ecommerce-platform' },
      { name: 'Marketplaces', href: '/industries/solutions/marketplace-development' },
      { name: 'Inventory systems', href: '/industries/retail-ecommerce' },
    ],
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Secure, compliant solutions to streamline healthcare workflows and engagement.',
    href: '/industries/healthcare',
    gradient: 'from-red-500 to-red-600',
    bgGradient: 'from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40',
    iconColor: 'text-red-600 dark:text-red-400',
    category: 'HealthTech',
    solutions: [
      { name: 'Telemedicine', href: '/industries/solutions/telemedicine-platform' },
      { name: 'EHR systems', href: '/industries/solutions/electronic-health-records' },
      { name: 'Patient engagement', href: '/industries/solutions/patient-engagement' },
    ],
  },
  {
    icon: Landmark,
    name: 'Banking & Finance',
    description: 'Powerful fintech solutions for secure transactions and smart decision-making.',
    href: '/industries/banking-finance',
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    category: 'FinTech',
    solutions: [
      { name: 'Digital banking', href: '/industries/solutions/digital-banking' },
      { name: 'Payment processing', href: '/industries/solutions/payment-processing' },
      { name: 'Fraud detection', href: '/industries/solutions/fraud-detection' },
    ],
  },
  {
    icon: Film,
    name: 'Media & Entertainment',
    description: 'Engaging, scalable platforms for content streaming, sharing, and monetization.',
    href: '/industries/media-entertainment',
    gradient: 'from-violet-500 to-violet-600',
    bgGradient: 'from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    category: 'Media',
    solutions: [
      { name: 'OTT platforms', href: '/industries/solutions/streaming-platform' },
      { name: 'Content management', href: '/industries/solutions/content-management' },
      { name: 'Live streaming', href: '/industries/solutions/live-streaming' },
    ],
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    description: 'Enhance bookings, guest experience, and operations with digital platforms.',
    href: '/industries/travel-hospitality',
    gradient: 'from-sky-500 to-sky-600',
    bgGradient: 'from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40',
    iconColor: 'text-sky-600 dark:text-sky-400',
    category: 'Travel',
    solutions: [
      { name: 'Booking systems', href: '/industries/solutions/travel-booking' },
      { name: 'Hotel management', href: '/industries/solutions/hotel-management' },
      { name: 'Travel apps', href: '/industries/solutions/travel-experience' },
    ],
  },
];

const categories = ['All', 'Supply Chain', 'Property', 'EdTech', 'Commerce', 'HealthTech', 'FinTech', 'Media', 'Travel'];

const Industries = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredIndustries = useMemo(() => {
    return industries.filter(industry => {
      const matchesSearch = industry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        industry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        industry.solutions.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || industry.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout>
      <SEO
        title="Industry Solutions"
        description="Tailored digital transformation solutions for healthcare, finance, retail, education, logistics, and more. Deep domain expertise across 8+ industries."
        keywords="industry solutions, healthcare technology, fintech solutions, retail ecommerce, education technology, logistics software, enterprise solutions"
      />
      <PageHero
        title="Tailored Solutions for Every Industry"
        description="We bring deep domain expertise to deliver industry-specific digital transformation solutions that address unique challenges and drive measurable results across verticals."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' }
        ]}
        icon={Layers}
        iconColor="from-indigo-500 to-purple-600"
        badge="Industries We Serve"
        image={heroIndustriesImage}
        imageAlt="Industry solutions illustration"
        stats={[
          { value: '8+', label: 'Industries' },
          { value: '700+', label: 'Clients' },
          { value: '1500+', label: 'Projects' }
        ]}
      />

      {/* Filter & Search Section */}
      <section className="py-8 bg-card border-b border-border/50 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search industries or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground shadow-sm'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-card shadow-sm' : 'hover:bg-card/50'}`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-card shadow-sm' : 'hover:bg-card/50'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid/List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {filteredIndustries.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">No industries found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredIndustries.map((industry, index) => (
                  <motion.div
                    key={industry.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
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
                      <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded mb-2 inline-block">
                        {industry.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {industry.solutions.slice(0, 2).map((solution) => (
                          <Link 
                            key={solution.href} 
                            to={solution.href}
                            className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded hover:bg-accent/20 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                        Explore Solutions
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredIndustries.map((industry, index) => (
                  <motion.div
                    key={industry.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      to={industry.href}
                      className="group flex items-center gap-6 bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300"
                    >
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.bgGradient} flex items-center justify-center shrink-0`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                            {industry.name}
                          </h3>
                          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                            {industry.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {industry.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {industry.solutions.map((solution) => (
                            <Link 
                              key={solution.href} 
                              to={solution.href}
                              className="text-xs bg-accent/10 text-accent px-2 py-1 rounded hover:bg-accent/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {solution.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
