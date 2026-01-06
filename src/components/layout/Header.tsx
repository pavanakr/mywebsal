// Services & Industries Mega Menu - Updated 2026
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Code, Smartphone, Cloud, Cpu, Globe, Layers, Sun, Moon, RefreshCw,
  Building2, Server, Users, Handshake, Award, MessageSquare, Network, Briefcase,
  FolderCheck, UserCheck, Heart, Zap, Database, UserPlus, Rocket, Truck, GraduationCap,
  ShoppingCart, Landmark, Film, Plane, FileText, BookOpen, HelpCircle, Newspaper, Phone
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
    bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-blue-950/50'
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

const industryCategories = [
  { 
    name: 'Logistics & Transportation', 
    href: '/industries/logistics-transportation', 
    icon: Truck,
    description: 'Optimize fleet, delivery, and supply chain with smart tech solutions.',
    bgGradient: 'from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
    subIndustries: [
      { name: 'On-demand logistic app development', href: '/industries/solutions/on-demand-logistics' },
      { name: 'Transportation automation solutions', href: '/industries/solutions/transportation-automation' },
      { name: 'Shipping management app development', href: '/industries/solutions/shipping-management' },
    ]
  },
  { 
    name: 'Real Estate & Construction', 
    href: '/industries/real-estate-construction', 
    icon: Building2,
    description: 'Digitizing property management, sales, and project tracking with precision.',
    bgGradient: 'from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    subIndustries: [
      { name: 'Property listing platforms', href: '/industries/solutions/property-management' },
      { name: 'Construction management systems', href: '/industries/solutions/construction-management' },
      { name: 'Virtual tour technology', href: '/industries/solutions/virtual-tour' },
    ]
  },
  { 
    name: 'Education', 
    href: '/industries/education', 
    icon: GraduationCap,
    description: 'Interactive platforms for e-learning, administration, and student engagement.',
    bgGradient: 'from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
    subIndustries: [
      { name: 'Learning management systems', href: '/industries/solutions/lms-platform' },
      { name: 'Virtual classroom platforms', href: '/industries/solutions/virtual-learning' },
      { name: 'Student information systems', href: '/industries/solutions/student-management' },
    ]
  },
  { 
    name: 'Retail & E-commerce', 
    href: '/industries/retail-ecommerce', 
    icon: ShoppingCart,
    description: 'Custom ecommerce and retail solutions to boost online sales efficiently.',
    bgGradient: 'from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    subIndustries: [
      { name: 'Custom e-commerce platforms', href: '/industries/solutions/ecommerce-platform' },
      { name: 'Marketplace development', href: '/industries/solutions/marketplace-development' },
      { name: 'Inventory management systems', href: '/industries/solutions/inventory-management' },
    ]
  },
  { 
    name: 'Healthcare', 
    href: '/industries/healthcare', 
    icon: Heart,
    description: 'Secure, compliant solutions to streamline healthcare workflows and engagement.',
    bgGradient: 'from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40',
    iconColor: 'text-red-600 dark:text-red-400',
    subIndustries: [
      { name: 'Telemedicine platforms', href: '/industries/solutions/telemedicine-platform' },
      { name: 'Electronic health records', href: '/industries/solutions/electronic-health-records' },
      { name: 'Patient engagement apps', href: '/industries/solutions/patient-engagement' },
    ]
  },
  { 
    name: 'Banking & Finance', 
    href: '/industries/banking-finance', 
    icon: Landmark,
    description: 'Powerful fintech solutions for secure transactions and smart decision-making.',
    bgGradient: 'from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    subIndustries: [
      { name: 'Digital banking platforms', href: '/industries/solutions/digital-banking' },
      { name: 'Payment processing systems', href: '/industries/solutions/payment-processing' },
      { name: 'Fraud detection solutions', href: '/industries/solutions/fraud-detection' },
    ]
  },
  { 
    name: 'Media & Entertainment', 
    href: '/industries/media-entertainment', 
    icon: Film,
    description: 'Engaging, scalable platforms for content streaming, sharing, and monetization.',
    bgGradient: 'from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    subIndustries: [
      { name: 'OTT streaming platforms', href: '/industries/solutions/streaming-platform' },
      { name: 'Content management systems', href: '/industries/solutions/content-management' },
      { name: 'Live streaming solutions', href: '/industries/solutions/live-streaming' },
    ]
  },
  { 
    name: 'Travel & Hospitality', 
    href: '/industries/travel-hospitality', 
    icon: Plane,
    description: 'Enhance bookings, guest experience, and operations with digital platforms.',
    bgGradient: 'from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40',
    iconColor: 'text-sky-600 dark:text-sky-400',
    subIndustries: [
      { name: 'Booking & reservation systems', href: '/industries/solutions/travel-booking' },
      { name: 'Hotel management platforms', href: '/industries/solutions/hotel-management' },
      { name: 'Travel experience apps', href: '/industries/solutions/travel-experience' },
    ]
  },
];

const figuresAtGlance = [
  { icon: FolderCheck, value: '1500+', label: 'Projects Completed', description: 'Successfully delivered over 1500 projects across global industries.' },
  { icon: UserCheck, value: '250+', label: 'Expert Members', description: 'Team of 250+ seasoned experts driving digital innovation forward.' },
  { icon: Heart, value: '700+', label: 'Happy Clients', description: 'Trusted by 700+ clients for reliable, scalable digital solutions.' },
  { icon: Zap, value: '100+', label: 'Ongoing Projects', description: 'Managing 100+ active projects with precision and proven expertise.' },
];

const insightsMenuItems = [
  { 
    name: 'Case Studies', 
    href: '/insights/case-studies', 
    icon: FileText,
    description: 'Real-world success stories showcasing our solutions and client impact.',
    bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50'
  },
  { 
    name: 'Blogs', 
    href: '/insights/blogs', 
    icon: BookOpen,
    description: 'Insights, trends, and tips from our tech and business experts.',
    bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50'
  },
  { 
    name: 'Contact Us', 
    href: '/contact', 
    icon: Phone,
    description: "Let's connect today and build your success story together.",
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50'
  },
  { 
    name: 'Our Portfolio', 
    href: '/insights/portfolio', 
    icon: Briefcase,
    description: 'Explore our diverse projects across industries and technologies.',
    bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50'
  },
  { 
    name: 'FAQs', 
    href: '/insights/faqs', 
    icon: HelpCircle,
    description: 'Quick answers to common questions about our services and process.',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50'
  },
  { 
    name: 'Press Releases', 
    href: '/insights/press-releases', 
    icon: Newspaper,
    description: 'Stay updated with our latest news, updates, and achievements.',
    bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-blue-950/50'
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);
  const [activeIndustryCategory, setActiveIndustryCategory] = useState<string | null>(null);
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
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary via-navy to-primary text-primary-foreground fixed top-0 left-0 right-0 z-[60]">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="hidden sm:inline text-primary-foreground/90">
                Share Your Project Idea & Receive App Development Quote Instantly!
              </span>
              <span className="sm:hidden text-primary-foreground/90 text-xs">
                Get Your Free Quote!
              </span>
            </div>
            <Link to="/contact">
              <Button 
                size="sm" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs px-4 py-1 h-auto rounded-full"
              >
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
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
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden flex" style={{ width: '980px' }}>
                      {/* Left Panel - Service Categories (2 columns) */}
                      <div className="flex-1 p-5">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {serviceCategories.map((category, index) => {
                            const iconConfigs = [
                              { bg: 'bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40', iconColor: 'text-violet-600 dark:text-violet-400' },
                              { bg: 'bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40', iconColor: 'text-pink-600 dark:text-pink-400' },
                              { bg: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40', iconColor: 'text-blue-600 dark:text-blue-400' },
                              { bg: 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40', iconColor: 'text-emerald-600 dark:text-emerald-400' },
                              { bg: 'bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40', iconColor: 'text-sky-600 dark:text-sky-400' },
                              { bg: 'bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40', iconColor: 'text-indigo-600 dark:text-indigo-400' },
                              { bg: 'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40', iconColor: 'text-amber-600 dark:text-amber-400' },
                              { bg: 'bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/40 dark:to-pink-900/40', iconColor: 'text-red-600 dark:text-red-400' },
                            ];
                            const config = iconConfigs[index] || iconConfigs[0];
                            const isActive = activeServiceCategory === category.name || (!activeServiceCategory && index === 0);
                            
                            return (
                              <motion.div
                                key={category.href}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.025, duration: 0.2 }}
                                onMouseEnter={() => setActiveServiceCategory(category.name)}
                              >
                                <Link
                                  to={category.href}
                                  className={`flex items-start gap-3.5 px-3.5 py-3.5 rounded-xl transition-all duration-200 group border-2 ${
                                    isActive 
                                      ? 'bg-secondary/80 border-accent/20 shadow-sm' 
                                      : 'border-transparent hover:bg-secondary/50 hover:border-border/30'
                                  }`}
                                >
                                  <motion.div 
                                    className={`w-12 h-12 rounded-xl ${config.bg} flex items-center justify-center shrink-0 shadow-sm transition-all duration-300`}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                  >
                                    <category.icon className={`w-6 h-6 ${config.iconColor}`} />
                                  </motion.div>
                                  <div className="pt-0.5 flex-1 min-w-0">
                                    <span className={`text-sm font-semibold block transition-colors duration-200 ${
                                      isActive ? 'text-accent' : 'text-foreground group-hover:text-accent'
                                    }`}>{category.name}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-0.5">{category.description}</span>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Panel - Sub-services */}
                      <div className="w-[300px] bg-gradient-to-br from-primary via-navy to-navy-light p-6 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-light/10 rounded-full blur-2xl" />
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeServiceCategory || 'default'}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative z-10"
                          >
                            <h3 className="text-lg font-bold text-amber-400 mb-5">
                              {activeServiceCategory || 'Artificial Intelligence'}
                            </h3>
                            <div className="space-y-1">
                              {(serviceCategories.find(cat => cat.name === (activeServiceCategory || 'Artificial Intelligence'))?.subServices || serviceCategories[0].subServices).map((sub, idx) => (
                                <motion.div
                                  key={sub.href + idx}
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.04, duration: 0.15 }}
                                >
                                  <Link
                                    to={sub.href}
                                    className="flex items-center gap-1.5 text-primary-foreground/90 hover:text-amber-400 transition-all duration-200 group py-2 px-2 -mx-2 rounded-lg hover:bg-white/5"
                                  >
                                    <span className="flex items-center text-amber-400">
                                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                                      <ChevronRight className="w-4 h-4 -ml-2.5 group-hover:translate-x-0.5 transition-transform duration-200 delay-75" />
                                    </span>
                                    <span className="text-sm font-medium">{sub.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => { setActiveDropdown(null); setActiveIndustryCategory(null); }}
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
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden flex" style={{ width: '980px' }}>
                      {/* Left Panel - Industry Categories (2 columns) */}
                      <div className="flex-1 p-5">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {industryCategories.map((category, index) => {
                            const isActive = activeIndustryCategory === category.name || (!activeIndustryCategory && index === 0);
                            
                            return (
                              <motion.div
                                key={category.href}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.025, duration: 0.2 }}
                                onMouseEnter={() => setActiveIndustryCategory(category.name)}
                              >
                                <Link
                                  to={category.href}
                                  className={`flex items-start gap-3.5 px-3.5 py-3.5 rounded-xl transition-all duration-200 group border-2 ${
                                    isActive 
                                      ? 'bg-secondary/80 border-accent/20 shadow-sm' 
                                      : 'border-transparent hover:bg-secondary/50 hover:border-border/30'
                                  }`}
                                >
                                  <motion.div 
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center shrink-0 shadow-sm transition-all duration-300`}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                  >
                                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                                  </motion.div>
                                  <div className="pt-0.5 flex-1 min-w-0">
                                    <span className={`text-sm font-semibold block transition-colors duration-200 ${
                                      isActive ? 'text-accent' : 'text-foreground group-hover:text-accent'
                                    }`}>{category.name}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-0.5">{category.description}</span>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Panel - Sub-industries */}
                      <div className="w-[300px] bg-gradient-to-br from-primary via-navy to-navy-light p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-light/10 rounded-full blur-2xl" />
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndustryCategory || 'default'}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative z-10"
                          >
                            <h3 className="text-lg font-bold text-amber-400 mb-5">
                              {activeIndustryCategory || 'Logistics & Transportation'}
                            </h3>
                            <div className="space-y-1">
                              {(industryCategories.find(cat => cat.name === (activeIndustryCategory || 'Logistics & Transportation'))?.subIndustries || industryCategories[0].subIndustries).map((sub, idx) => (
                                <motion.div
                                  key={sub.href + idx}
                                  initial={{ opacity: 0, x: 8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.04, duration: 0.15 }}
                                >
                                  <Link
                                    to={sub.href}
                                    className="flex items-center gap-1.5 text-primary-foreground/90 hover:text-amber-400 transition-all duration-200 group py-2 px-2 -mx-2 rounded-lg hover:bg-white/5"
                                  >
                                    <span className="flex items-center text-amber-400">
                                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                                      <ChevronRight className="w-4 h-4 -ml-2.5 group-hover:translate-x-0.5 transition-transform duration-200 delay-75" />
                                    </span>
                                    <span className="text-sm font-medium">{sub.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Softurecs Insights Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('insights')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 flex items-center gap-1 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                Softurecs Insights
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 pt-2"
                  >
                    <div className="bg-card rounded-xl shadow-elevated border border-border/50 overflow-hidden flex" style={{ width: '850px' }}>
                      {/* Left Side - Menu Items (2 columns) */}
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                          {insightsMenuItems.map((item, index) => {
                            const iconColors = [
                              { from: '#f59e0b', to: '#ea580c' },  // amber to orange
                              { from: '#10b981', to: '#14b8a6' },  // emerald to teal
                              { from: '#3b82f6', to: '#06b6d4' },  // blue to cyan
                              { from: '#8b5cf6', to: '#a855f7' },  // violet to purple
                              { from: '#ec4899', to: '#f43f5e' },  // pink to rose
                              { from: '#0ea5e9', to: '#3b82f6' },  // sky to blue
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
                                        <linearGradient id={`insights-icon-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor={colors.from} />
                                          <stop offset="100%" stopColor={colors.to} />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <item.icon 
                                      className="w-5 h-5" 
                                      style={{ stroke: `url(#insights-icon-${index})` }}
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

                      {/* Right Side - Highlight Panel */}
                      <div className="w-[320px] bg-gradient-to-br from-primary via-navy to-navy-light p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-light/10 rounded-full blur-2xl" />
                        
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-amber-400 mb-4">
                            Digital Solutions That Fit Every Business
                          </h3>
                          
                          <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
                            <img 
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop" 
                              alt="Softurecs Team" 
                              className="w-full h-32 object-cover"
                            />
                          </div>
                          
                          <p className="text-sm text-primary-foreground/80 mb-4">
                            We work with brands of all sizes—adapting to your needs, goals, and growth:
                          </p>
                          
                          <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-1.5 text-primary-foreground text-sm">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                              Startups
                            </span>
                            <span className="flex items-center gap-1.5 text-primary-foreground text-sm">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                              SMEs
                            </span>
                            <span className="flex items-center gap-1.5 text-primary-foreground text-sm">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                              Enterprises
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons & Theme Toggle */}
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
              <Button variant="outline" className={`font-semibold px-5 ${
                isScrolled 
                  ? 'border-border text-foreground hover:bg-secondary' 
                  : 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'
              }`}>
                Get in Touch
              </Button>
            </Link>
            <Link to="/services/ai-development">
              <Button className="bg-gradient-to-r from-accent to-cyan-light hover:from-accent/90 hover:to-cyan-light/90 text-primary font-semibold px-6 shadow-lg shadow-accent/25">
                <Cpu className="w-4 h-4 mr-2" />
                Start AI Journey
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
              {industryCategories.map((industry) => (
                <Link 
                  key={industry.href}
                  to={industry.href} 
                  className="block px-8 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
                >
                  {industry.name}
                </Link>
              ))}

              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-muted-foreground">Softurecs Insights</span>
              </div>
              {insightsMenuItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className="block px-8 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
                >
                  {item.name}
                </Link>
              ))}

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
    </>
  );
}
