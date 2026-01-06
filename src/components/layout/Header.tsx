import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Code, Smartphone, Cloud, Cpu, Globe, Layers, Sun, Moon, RefreshCw,
  Building2, Server, Users, Handshake, Award, MessageSquare, Network, Briefcase,
  FolderCheck, UserCheck, Heart, Zap, Database, UserPlus, Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const aboutMenuItems = [
  { 
    name: 'Company Profile', 
    href: '/about/company-profile', 
    icon: Building2,
    description: "Discover Softurecs' journey, expertise, and commitment to digital excellence.",
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50'
  },
  { 
    name: 'Infrastructure', 
    href: '/about/infrastructure', 
    icon: Server,
    description: 'Explore our advanced development environment and robust technology setup.',
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-400',
    bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50'
  },
  { 
    name: 'Careers @ Softurecs', 
    href: '/about/careers', 
    icon: Briefcase,
    description: 'Join our team to build future-ready digital solutions together.',
    gradient: 'from-emerald-400 via-green-400 to-lime-400',
    bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50'
  },
  { 
    name: 'Partnership', 
    href: '/about/partnerships', 
    icon: Handshake,
    description: 'Collaborate with us to build impactful and scalable solutions.',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50'
  },
  { 
    name: 'Leadership', 
    href: '/about/leadership', 
    icon: Users,
    description: "Meet the visionary minds driving Softurecs' growth and innovation.",
    gradient: 'from-sky-400 via-blue-400 to-indigo-400',
    bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-indigo-950/50'
  },
  { 
    name: 'Awards & Recognition', 
    href: '/about/awards-recognition', 
    icon: Award,
    description: 'Recognized globally for innovation, quality, and client-centric solutions.',
    gradient: 'from-amber-400 via-yellow-400 to-orange-400',
    bgGradient: 'from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50'
  },
  { 
    name: 'Client Testimonials', 
    href: '/about/testimonials', 
    icon: MessageSquare,
    description: 'Hear what our satisfied clients say about working with us.',
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50'
  },
  { 
    name: 'Alliances', 
    href: '/about/alliances', 
    icon: Network,
    description: 'Strategic alliances that enhance our capabilities and global reach.',
    gradient: 'from-teal-400 via-cyan-400 to-sky-400',
    bgGradient: 'from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50'
  },
];

const serviceCategories = [
  { 
    name: 'Artificial Intelligence', 
    href: '/services/ai-automation', 
    icon: Cpu,
    description: 'Build intelligent systems that automate, predict, and optimize performance.',
    gradient: 'from-violet-400 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50',
    subServices: [
      { name: 'AI Development Company', href: '/services/ai-development' },
      { name: 'AIOps Solutions', href: '/services/aiops' },
      { name: 'Machine Learning & Deep Learning', href: '/services/machine-learning' },
      { name: 'Generative AI Development', href: '/services/generative-ai' },
      { name: 'AI Chatbot Development', href: '/services/ai-chatbot' },
      { name: 'Deep Learning', href: '/services/deep-learning' },
      { name: 'LLM Development', href: '/services/llm-development' },
    ]
  },
  { 
    name: 'Mobile App Development', 
    href: '/services/mobile-apps', 
    icon: Smartphone,
    description: 'Custom mobile apps that engage users and drive business growth.',
    gradient: 'from-pink-400 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50',
    subServices: [
      { name: 'iOS App Development', href: '/services/mobile-apps' },
      { name: 'Android App Development', href: '/services/mobile-apps' },
      { name: 'Cross-Platform Apps', href: '/services/mobile-apps' },
      { name: 'React Native Development', href: '/services/mobile-apps' },
      { name: 'Flutter Development', href: '/services/mobile-apps' },
    ]
  },
  { 
    name: 'Big Data Services', 
    href: '/services/big-data', 
    icon: Database,
    description: 'Unlock insights and value from large-scale, complex data systems.',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50',
    subServices: [
      { name: 'Data Analytics', href: '/services/big-data' },
      { name: 'Data Warehousing', href: '/services/big-data' },
      { name: 'Business Intelligence', href: '/services/big-data' },
      { name: 'Data Engineering', href: '/services/big-data' },
    ]
  },
  { 
    name: 'Staff Augmentation', 
    href: '/services/staff-augmentation', 
    icon: UserPlus,
    description: 'Extend your team with skilled developers for faster delivery.',
    gradient: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50',
    subServices: [
      { name: 'Dedicated Development Teams', href: '/services/staff-augmentation' },
      { name: 'Remote Developers', href: '/services/staff-augmentation' },
      { name: 'IT Consulting', href: '/services/staff-augmentation' },
    ]
  },
  { 
    name: 'Cloud Technologies', 
    href: '/services/cloud-devops', 
    icon: Cloud,
    description: 'Transforming businesses with powerful, flexible, and secure cloud services.',
    gradient: 'from-sky-400 to-blue-500',
    bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-blue-950/50',
    subServices: [
      { name: 'Cloud Migration', href: '/services/cloud-devops' },
      { name: 'AWS Services', href: '/services/cloud-devops' },
      { name: 'Azure Solutions', href: '/services/cloud-devops' },
      { name: 'DevOps Services', href: '/services/cloud-devops' },
    ]
  },
  { 
    name: 'Software Development', 
    href: '/services/custom-software', 
    icon: Code,
    description: 'Modern software are fast, secure, and scalable.',
    gradient: 'from-indigo-400 to-violet-500',
    bgGradient: 'from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/50',
    subServices: [
      { name: 'Custom Software', href: '/services/custom-software' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'SaaS Development', href: '/services/saas' },
      { name: 'API Development', href: '/services/custom-software' },
    ]
  },
  { 
    name: 'App Modernization', 
    href: '/services/application-modernization', 
    icon: RefreshCw,
    description: 'Upgrade legacy apps with modern features, design, and performance.',
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50',
    subServices: [
      { name: 'Legacy Modernization', href: '/services/application-modernization' },
      { name: 'Cloud Migration', href: '/services/application-modernization' },
      { name: 'Re-architecture', href: '/services/application-modernization' },
    ]
  },
  { 
    name: 'On-Demand Solution', 
    href: '/services/on-demand', 
    icon: Rocket,
    description: 'Launch on-demand platforms for services, delivery, or booking needs.',
    gradient: 'from-red-400 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50',
    subServices: [
      { name: 'Delivery Apps', href: '/services/on-demand' },
      { name: 'Booking Platforms', href: '/services/on-demand' },
      { name: 'Service Marketplaces', href: '/services/on-demand' },
    ]
  },
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Fintech', href: '/industries/fintech' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Logistics', href: '/industries/logistics' },
  { name: 'Education', href: '/industries/education' },
  { name: 'Travel & Hospitality', href: '/industries/travel-hospitality' },
];

const figuresAtGlance = [
  { icon: FolderCheck, value: '1500+', label: 'Projects Completed', description: 'Successfully delivered over 1500 projects across global industries.' },
  { icon: UserCheck, value: '250+', label: 'Expert Members', description: 'Team of 250+ seasoned experts driving digital innovation forward.' },
  { icon: Heart, value: '700+', label: 'Happy Clients', description: 'Trusted by 700+ clients for reliable, scalable digital solutions.' },
  { icon: Zap, value: '100+', label: 'Ongoing Projects', description: 'Managing 100+ active projects with precision and proven expertise.' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-xl shadow-soft border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-cyan-light flex items-center justify-center">
              <span className="text-primary font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                SOFTURECS
              </span>
              <span className={`text-[10px] font-medium leading-none ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                AI LABS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              Home
            </Link>

            {/* About Softurecs Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 flex items-center gap-1 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                About Softurecs
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  >
                    <div className="bg-card rounded-xl shadow-elevated border border-border/50 overflow-hidden flex" style={{ width: '900px' }}>
                      {/* Left Side - Menu Items (2 columns) */}
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          {aboutMenuItems.map((item, index) => {
                            const iconColors = [
                              { from: '#3b82f6', to: '#14b8a6' },  // blue to teal
                              { from: '#8b5cf6', to: '#d946ef' },  // violet to fuchsia
                              { from: '#10b981', to: '#84cc16' },  // emerald to lime
                              { from: '#f97316', to: '#eab308' },  // orange to yellow
                              { from: '#0ea5e9', to: '#6366f1' },  // sky to indigo
                              { from: '#f59e0b', to: '#ef4444' },  // amber to red
                              { from: '#ec4899', to: '#f43f5e' },  // pink to rose
                              { from: '#14b8a6', to: '#0ea5e9' },  // teal to sky
                            ];
                            const colors = iconColors[index] || iconColors[0];
                            
                            return (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                              >
                                <Link
                                  to={item.href}
                                  className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-secondary/80 transition-all duration-300 group"
                                >
                                  <motion.div 
                                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  >
                                    <svg width="0" height="0" className="absolute">
                                      <defs>
                                        <linearGradient id={`menu-icon-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor={colors.from} />
                                          <stop offset="100%" stopColor={colors.to} />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <item.icon 
                                      className="w-5 h-5" 
                                      style={{ stroke: `url(#menu-icon-${index})` }}
                                    />
                                  </motion.div>
                                  <div className="pt-0.5">
                                    <span className="text-sm font-semibold text-foreground block group-hover:text-accent transition-colors duration-200">{item.name}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</span>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Side - Figures at a Glance */}
                      <div className="w-[320px] bg-gradient-to-br from-primary via-primary to-primary/95 p-6">
                        <h3 className="text-lg font-bold text-amber-400 mb-6">Figures at a Glance</h3>
                        <div className="space-y-5">
                          {figuresAtGlance.map((figure, idx) => {
                            const figureColors = [
                              { from: '#fbbf24', to: '#f59e0b' },  // yellow to amber
                              { from: '#34d399', to: '#10b981' },  // green
                              { from: '#60a5fa', to: '#3b82f6' },  // blue
                              { from: '#a78bfa', to: '#8b5cf6' },  // purple
                            ];
                            const fColors = figureColors[idx] || figureColors[0];
                            
                            return (
                              <motion.div 
                                key={figure.label} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <motion.div 
                                  className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0 backdrop-blur-sm"
                                  whileHover={{ scale: 1.1, rotate: -5 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  <svg width="0" height="0" className="absolute">
                                    <defs>
                                      <linearGradient id={`figure-icon-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={fColors.from} />
                                        <stop offset="100%" stopColor={fColors.to} />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <figure.icon 
                                    className="w-5 h-5" 
                                    style={{ stroke: `url(#figure-icon-${idx})` }}
                                  />
                                </motion.div>
                                <div>
                                  <span className="text-base font-bold text-primary-foreground block">{figure.value} {figure.label}</span>
                                  <span className="text-xs text-primary-foreground/70 leading-relaxed">{figure.description}</span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => { setActiveDropdown(null); setActiveServiceCategory(null); }}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 flex items-center gap-1 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  >
                    <div className="bg-card rounded-xl shadow-elevated border border-border/50 overflow-hidden flex" style={{ width: '950px' }}>
                      {/* Left Panel - Service Categories (2 columns) */}
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                          {serviceCategories.map((category, index) => {
                            const iconColors = [
                              { from: '#8b5cf6', to: '#a855f7' },
                              { from: '#ec4899', to: '#f43f5e' },
                              { from: '#3b82f6', to: '#06b6d4' },
                              { from: '#10b981', to: '#14b8a6' },
                              { from: '#0ea5e9', to: '#3b82f6' },
                              { from: '#6366f1', to: '#8b5cf6' },
                              { from: '#f59e0b', to: '#f97316' },
                              { from: '#ef4444', to: '#ec4899' },
                            ];
                            const colors = iconColors[index] || iconColors[0];
                            
                            return (
                              <motion.div
                                key={category.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03 }}
                                onMouseEnter={() => setActiveServiceCategory(category.name)}
                              >
                                <Link
                                  to={category.href}
                                  className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-300 group ${
                                    activeServiceCategory === category.name ? 'bg-secondary/80' : 'hover:bg-secondary/50'
                                  }`}
                                >
                                  <motion.div 
                                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  >
                                    <svg width="0" height="0" className="absolute">
                                      <defs>
                                        <linearGradient id={`service-icon-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor={colors.from} />
                                          <stop offset="100%" stopColor={colors.to} />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <category.icon 
                                      className="w-5 h-5" 
                                      style={{ stroke: `url(#service-icon-${index})` }}
                                    />
                                  </motion.div>
                                  <div className="pt-0.5 flex-1">
                                    <span className="text-sm font-semibold text-foreground block group-hover:text-accent transition-colors duration-200">{category.name}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{category.description}</span>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Panel - Sub-services */}
                      <div className="w-[280px] bg-gradient-to-br from-primary via-primary to-primary/95 p-6">
                        <AnimatePresence mode="wait">
                          {activeServiceCategory && (
                            <motion.div
                              key={activeServiceCategory}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.2 }}
                            >
                              <h3 className="text-lg font-bold text-amber-400 mb-5">{activeServiceCategory}</h3>
                              <div className="space-y-2">
                                {serviceCategories
                                  .find(cat => cat.name === activeServiceCategory)
                                  ?.subServices.map((sub, idx) => (
                                    <motion.div
                                      key={sub.href + idx}
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.05 }}
                                    >
                                      <Link
                                        to={sub.href}
                                        className="flex items-center gap-2 text-primary-foreground hover:text-amber-400 transition-colors group py-1.5"
                                      >
                                        <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                                        <ChevronRight className="w-4 h-4 text-amber-400 -ml-3 group-hover:translate-x-1 transition-transform" />
                                        <span className="text-sm font-medium">{sub.name}</span>
                                      </Link>
                                    </motion.div>
                                  ))}
                              </div>
                            </motion.div>
                          )}
                          {!activeServiceCategory && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <h3 className="text-lg font-bold text-amber-400 mb-5">Artificial Intelligence</h3>
                              <div className="space-y-2">
                                {serviceCategories[0].subServices.map((sub, idx) => (
                                  <motion.div
                                    key={sub.href + idx}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <Link
                                      to={sub.href}
                                      className="flex items-center gap-2 text-primary-foreground hover:text-amber-400 transition-colors group py-1.5"
                                    >
                                      <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                                      <ChevronRight className="w-4 h-4 text-amber-400 -ml-3 group-hover:translate-x-1 transition-transform" />
                                      <span className="text-sm font-medium">{sub.name}</span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 flex items-center gap-1 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-card rounded-xl shadow-elevated border border-border/50 p-3 min-w-[200px]">
                      <div className="grid gap-1">
                        {industries.map((industry) => (
                          <Link
                            key={industry.href}
                            to={industry.href}
                            className="px-3 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-secondary transition-colors"
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-secondary' 
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </button>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border/50 overflow-y-auto max-h-[80vh]"
          >
            <div className="container-custom py-4 space-y-2">
              <Link to="/" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Home
              </Link>
              
              {/* About Section */}
              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-muted-foreground">About Softurecs</span>
              </div>
              {aboutMenuItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className="block px-8 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-muted-foreground">Services</span>
              </div>
              {serviceCategories.map((category) => (
                <Link 
                  key={category.href}
                  to={category.href} 
                  className="block px-8 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
                >
                  {category.name}
                </Link>
              ))}

              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-muted-foreground">Industries</span>
              </div>
              {industries.map((industry) => (
                <Link 
                  key={industry.href}
                  to={industry.href} 
                  className="block px-8 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
                >
                  {industry.name}
                </Link>
              ))}

              <Link to="/portfolio" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Portfolio
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Blog
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 w-full px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Link to="/contact">
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
