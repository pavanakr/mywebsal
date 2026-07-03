// Premium Enterprise Navigation - Matching Octal Reference
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Code, Smartphone, Cloud, Cpu, Globe, Layers, Sun, Moon, RefreshCw,
  Building2, Server, Users, Handshake, Award, MessageSquare, Network, Briefcase,
  FolderCheck, UserCheck, Heart, Zap, Database, UserPlus, Rocket, Truck, GraduationCap,
  ShoppingCart, Landmark, Film, Plane, FileText, BookOpen, HelpCircle, Newspaper, Phone, ArrowRight,
  MessageCircle
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
    gradient: 'from-amber-400 via-orange-400 to-red-400',
    bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50'
  },
  { 
    name: 'Blogs', 
    href: '/insights/blogs', 
    icon: BookOpen,
    description: 'Insights, trends, and tips from our tech and business experts.',
    gradient: 'from-emerald-400 via-green-400 to-teal-400',
    bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50'
  },
  { 
    name: 'Contact Us', 
    href: '/contact', 
    icon: Phone,
    description: "Let's connect today and build your success story together.",
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50'
  },
  { 
    name: 'Our Portfolio', 
    href: '/insights/portfolio', 
    icon: Briefcase,
    description: 'Explore our diverse projects across industries and technologies.',
    gradient: 'from-purple-400 via-violet-400 to-indigo-400',
    bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50'
  },
  { 
    name: 'FAQs', 
    href: '/insights/faqs', 
    icon: HelpCircle,
    description: 'Quick answers to common questions about our services and process.',
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50'
  },
  { 
    name: 'Press Releases', 
    href: '/insights/press-releases', 
    icon: Newspaper,
    description: 'Stay updated with our latest news, updates, and achievements.',
    gradient: 'from-sky-400 via-blue-400 to-indigo-400',
    bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-blue-950/50'
  },
];

const insightsFigures = [
  { icon: FileText, value: '50+', label: 'Case Studies', description: 'Documented success stories across multiple industries.' },
  { icon: BookOpen, value: '200+', label: 'Blog Articles', description: 'Technical insights and industry thought leadership.' },
  { icon: Award, value: '15+', label: 'Industry Awards', description: 'Recognized for innovation and excellence globally.' },
  { icon: Globe, value: '25+', label: 'Countries Served', description: 'Delivering solutions to clients worldwide.' },
];

const aiJourneyMenuItems = [
  { 
    name: 'AI Development', 
    href: '/services/ai-development', 
    icon: Cpu,
    description: 'Build intelligent AI solutions that transform your business operations.',
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-400',
    bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50'
  },
  { 
    name: 'Machine Learning', 
    href: '/services/machine-learning', 
    icon: Zap,
    description: 'Custom ML models for predictive analytics and automation.',
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50'
  },
  { 
    name: 'Generative AI', 
    href: '/services/generative-ai', 
    icon: Layers,
    description: 'Leverage GPT, LLMs, and generative models for content and automation.',
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50'
  },
  { 
    name: 'AI Chatbots', 
    href: '/services/ai-chatbot', 
    icon: MessageSquare,
    description: 'Intelligent conversational AI for customer engagement.',
    gradient: 'from-emerald-400 via-green-400 to-lime-400',
    bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50'
  },
  { 
    name: 'Deep Learning', 
    href: '/services/deep-learning', 
    icon: Database,
    description: 'Neural networks for complex pattern recognition and analysis.',
    gradient: 'from-amber-400 via-orange-400 to-red-400',
    bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50'
  },
  { 
    name: 'LLM Development', 
    href: '/services/llm-development', 
    icon: Code,
    description: 'Custom large language model solutions for enterprise needs.',
    gradient: 'from-sky-400 via-blue-400 to-indigo-400',
    bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-blue-950/50'
  },
];

const aiJourneyFigures = [
  { icon: Cpu, value: '100+', label: 'AI Projects', description: 'Successfully delivered AI solutions across industries.' },
  { icon: Zap, value: '50+', label: 'ML Models', description: 'Custom machine learning models in production.' },
  { icon: Users, value: '30+', label: 'AI Experts', description: 'Dedicated AI/ML specialists on our team.' },
  { icon: Award, value: '95%', label: 'Success Rate', description: 'High accuracy in AI model deployments.' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);
  const [activeIndustryCategory, setActiveIndustryCategory] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
  }, [location]);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <>
      {/* Premium Announcement Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white fixed top-0 left-0 right-0 z-[60] shadow-lg"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 md:h-12">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              />
              <span className="hidden sm:inline text-sm font-semibold text-white tracking-wide">
                Share Your Project Idea & Receive App Development Quote Instantly!
              </span>
              <span className="sm:hidden text-xs font-semibold text-white">
                Get Your Free Quote Today!
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/contact">
                <Button 
                  size="sm" 
                  className="bg-white hover:bg-white/95 text-indigo-700 font-bold text-xs px-6 py-2.5 h-10 rounded-full shadow-xl shadow-black/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Book a Free Consultation
                </Button>
              </Link>
              
              <div className="hidden md:flex items-center gap-2 border-l border-white/30 pl-4">
                <a 
                  href="https://wa.me/917396080902" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="tel:+917396080902" 
                  className="p-2.5 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation Header */}
      <header
        className={`fixed top-14 md:top-12 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/98 dark:bg-card/98 backdrop-blur-2xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)] border-b border-gray-100/60 dark:border-border/40'
            : 'bg-white dark:bg-card shadow-sm border-b border-gray-100/40 dark:border-border/30'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px] md:h-[80px] lg:h-[92px]">
            {/* Logo with enhanced styling */}
            <Link to="/" className="flex items-center gap-4 group py-2 shrink-0">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 transition-all duration-300">
                  <span className="text-white font-extrabold text-2xl lg:text-3xl">S</span>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-extrabold text-gray-900 dark:text-foreground leading-tight tracking-tight whitespace-nowrap">
                  SOFTURECS AI LABS PVT LTD
                </span>
                <span className="text-[10px] lg:text-[11px] font-medium text-indigo-600/80 dark:text-accent/80 leading-none tracking-wide mt-1">
                  The solution of your thoughts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced spacing and typography */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-nowrap whitespace-nowrap ml-12 xl:ml-16">
            {/* Start AI Journey Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('ai-journey')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'ai-journey'}
                className={`px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-semibold transition-all duration-300 rounded-lg flex items-center gap-1 relative group whitespace-nowrap ${
                  location.pathname === '/services/ai-development' || location.pathname.includes('/services/ai') || location.pathname.includes('/services/machine-learning') || location.pathname.includes('/services/generative-ai') || location.pathname.includes('/services/deep-learning') || location.pathname.includes('/services/llm')
                    ? 'text-emerald-700 dark:text-accent bg-indigo-50 dark:bg-accent/10'
                    : 'text-gray-800 dark:text-foreground hover:text-indigo-600 dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-secondary/50'
                }`}
              >
                Start AI Journey
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'ai-journey' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-700 to-amber-500 dark:from-accent dark:to-amber-300 rounded-full transition-transform duration-300 origin-left ${
                  location.pathname === '/services/ai-development' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'ai-journey' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed pt-4 z-50"
                    style={{ 
                      top: 'calc(var(--header-top, 44px) + 92px)',
                      left: 0, right: 0, margin: '0 auto',
                      
                      width: 'min(1180px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)'
                    }}
                  >
                    <div className="bg-white dark:bg-card rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/80 dark:border-border/50 overflow-hidden grid grid-cols-12 w-full max-w-full">
                      {/* Left Side - Menu Items (8 columns) */}
                      <div className="col-span-8 p-8">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          {aiJourneyMenuItems.map((item, index) => {
                            const iconColors = [
                              { from: '#8b5cf6', to: '#d946ef' },
                              { from: '#3b82f6', to: '#14b8a6' },
                              { from: '#ec4899', to: '#f43f5e' },
                              { from: '#10b981', to: '#84cc16' },
                              { from: '#f59e0b', to: '#ef4444' },
                              { from: '#0ea5e9', to: '#6366f1' },
                            ];
                            const colors = iconColors[index] || iconColors[0];
                            
                            return (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.025 }}
                              >
                                <Link
                                  to={item.href}
                                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-secondary/80 transition-all duration-200 group border border-transparent hover:border-gray-100 dark:hover:border-border/30"
                                >
                                  <motion.div 
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all duration-200`}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <svg width="0" height="0" className="absolute">
                                      <defs>
                                        <linearGradient id={`ai-journey-icon-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor={colors.from} />
                                          <stop offset="100%" stopColor={colors.to} />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <item.icon 
                                      className="w-5 h-5" 
                                      style={{ stroke: `url(#ai-journey-icon-${index})` }}
                                    />
                                  </motion.div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-foreground block group-hover:text-emerald-700 dark:group-hover:text-accent transition-colors mb-1">{item.name}</span>
                                    <span className="text-xs text-gray-500 dark:text-muted-foreground leading-relaxed line-clamp-2">{item.description}</span>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Side - AI Figures at a Glance (4 columns) */}
                      <div className="col-span-4 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-700 p-8 flex flex-col">
                        <h3 className="text-lg font-bold text-amber-300 font-display mb-6">AI Excellence at a Glance</h3>
                        <div className="space-y-5 flex-1">
                          {aiJourneyFigures.map((figure, idx) => {
                            const figureColors = [
                              { from: '#fbbf24', to: '#f59e0b' },
                              { from: '#34d399', to: '#10b981' },
                              { from: '#60a5fa', to: '#3b82f6' },
                              { from: '#a78bfa', to: '#8b5cf6' },
                            ];
                            const fColors = figureColors[idx] || figureColors[0];
                            
                            return (
                              <motion.div 
                                key={figure.label} 
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.06 }}
                              >
                                <motion.div 
                                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <svg width="0" height="0" className="absolute">
                                    <defs>
                                      <linearGradient id={`ai-figure-icon-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={fColors.from} />
                                        <stop offset="100%" stopColor={fColors.to} />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <figure.icon 
                                    className="w-5 h-5" 
                                    style={{ stroke: `url(#ai-figure-icon-${idx})` }}
                                  />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm font-bold text-white block">{figure.value} {figure.label}</span>
                                  <span className="text-xs text-white/70 leading-relaxed">{figure.description}</span>
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

            {/* About Softurecs Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'about'}
                className={`px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-300 rounded-lg flex items-center gap-1 relative group whitespace-nowrap ${
                  location.pathname.startsWith('/about')
                    ? 'text-emerald-700 dark:text-accent bg-indigo-50 dark:bg-accent/10'
                    : 'text-gray-700 dark:text-foreground hover:text-indigo-600 dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-secondary/50'
                }`}
              >
                About Softurecs
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-700 to-amber-500 dark:from-accent dark:to-amber-300 rounded-full transition-transform duration-300 origin-left ${
                  location.pathname.startsWith('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed pt-4 z-50"
                      style={{ 
                        top: 'calc(var(--header-top, 44px) + 92px)',
                        left: 0, right: 0, margin: '0 auto',
                        
                        width: 'min(1180px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)'
                      }}
                    >
                      <div className="bg-white dark:bg-card rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/80 dark:border-border/50 overflow-hidden grid grid-cols-12 w-full max-w-full">
                        {/* Left Side - Menu Items (8 columns) */}
                        <div className="col-span-8 p-8">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {aboutMenuItems.map((item, index) => {
                              const iconColors = [
                                { from: '#3b82f6', to: '#14b8a6' },
                                { from: '#8b5cf6', to: '#d946ef' },
                                { from: '#10b981', to: '#84cc16' },
                                { from: '#f97316', to: '#eab308' },
                                { from: '#0ea5e9', to: '#6366f1' },
                                { from: '#f59e0b', to: '#ef4444' },
                                { from: '#ec4899', to: '#f43f5e' },
                                { from: '#14b8a6', to: '#0ea5e9' },
                              ];
                              const colors = iconColors[index] || iconColors[0];
                              
                              return (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.025 }}
                                >
                                  <Link
                                    to={item.href}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-secondary/80 transition-all duration-200 group border border-transparent hover:border-gray-100 dark:hover:border-border/30"
                                  >
                                    <motion.div 
                                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all duration-200`}
                                      whileHover={{ scale: 1.05 }}
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
                                    <div className="flex-1 min-w-0">
                                      <span className="text-sm font-semibold text-gray-900 dark:text-foreground block group-hover:text-emerald-700 dark:group-hover:text-accent transition-colors mb-1">{item.name}</span>
                                      <span className="text-xs text-gray-500 dark:text-muted-foreground leading-relaxed line-clamp-2">{item.description}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Side - Figures at a Glance (4 columns) */}
                        <div className="col-span-4 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 p-8 flex flex-col">
                          <h3 className="text-lg font-bold text-amber-300 font-display mb-6">Figures at a Glance</h3>
                          <div className="space-y-5 flex-1">
                            {figuresAtGlance.map((figure, idx) => {
                              const figureColors = [
                                { from: '#fbbf24', to: '#f59e0b' },
                                { from: '#34d399', to: '#10b981' },
                                { from: '#60a5fa', to: '#3b82f6' },
                                { from: '#a78bfa', to: '#8b5cf6' },
                              ];
                              const fColors = figureColors[idx] || figureColors[0];
                              
                              return (
                                <motion.div 
                                  key={figure.label} 
                                  className="flex items-start gap-4"
                                  initial={{ opacity: 0, x: 15 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.06 }}
                                >
                                  <motion.div 
                                    className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm"
                                    whileHover={{ scale: 1.1 }}
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
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-bold text-white block">{figure.value} {figure.label}</span>
                                    <span className="text-xs text-white/70 leading-relaxed">{figure.description}</span>
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
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
                className={`px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-300 rounded-lg flex items-center gap-1 relative group whitespace-nowrap ${
                  location.pathname.startsWith('/services')
                    ? 'text-emerald-700 dark:text-accent bg-indigo-50 dark:bg-accent/10'
                    : 'text-gray-700 dark:text-foreground hover:text-indigo-600 dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-secondary/50'
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-700 to-amber-500 dark:from-accent dark:to-amber-300 rounded-full transition-transform duration-300 origin-left ${
                  location.pathname.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed pt-4 z-50"
                      style={{ 
                        top: 'calc(var(--header-top, 44px) + 92px)',
                        left: 0, right: 0, margin: '0 auto',
                        
                        width: 'min(1180px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)'
                      }}
                    >
                      <div className="bg-white dark:bg-card rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/80 dark:border-border/50 overflow-hidden grid grid-cols-12 w-full max-w-full">
                        {/* Left Panel - Service Categories (8 columns) */}
                        <div className="col-span-8 p-8">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
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
                                  transition={{ delay: index * 0.02 }}
                                  onMouseEnter={() => setActiveServiceCategory(category.name)}
                                >
                                  <Link
                                    to={category.href}
                                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 group border ${
                                      isActive 
                                        ? 'bg-gray-50 dark:bg-secondary/80 border-emerald-200/60 dark:border-accent/25 shadow-sm' 
                                        : 'border-transparent hover:bg-gray-50 dark:hover:bg-secondary/50 hover:border-gray-100 dark:hover:border-border/30'
                                    }`}
                                  >
                                    <motion.div 
                                      className={`w-12 h-12 rounded-xl ${config.bg} flex items-center justify-center shrink-0 shadow-sm`}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <category.icon className={`w-5 h-5 ${config.iconColor}`} />
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                      <span className={`text-sm font-semibold block transition-colors mb-1 ${
                                        isActive ? 'text-emerald-700 dark:text-accent' : 'text-gray-900 dark:text-foreground group-hover:text-emerald-700 dark:group-hover:text-accent'
                                      }`}>{category.name}</span>
                                      <span className="text-xs text-gray-500 dark:text-muted-foreground line-clamp-2 leading-relaxed">{category.description}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Panel - Sub-services (4 columns) */}
                        <div className="col-span-4 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 p-8 relative overflow-hidden flex flex-col">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
                          
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeServiceCategory || 'default'}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.15 }}
                              className="relative z-10 flex-1"
                            >
                              <h3 className="text-lg font-bold text-amber-300 font-display mb-5">
                                {activeServiceCategory || 'Artificial Intelligence'}
                              </h3>
                              <div className="space-y-1">
                                {(serviceCategories.find(cat => cat.name === (activeServiceCategory || 'Artificial Intelligence'))?.subServices || serviceCategories[0].subServices).map((sub, idx) => (
                                  <motion.div
                                    key={sub.href + idx}
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03 }}
                                  >
                                    <Link
                                      to={sub.href}
                                      className="flex items-center gap-2 text-white/90 hover:text-amber-300 transition-all duration-200 group py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/10"
                                    >
                                      <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform duration-200" />
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
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'industries'}
                className={`px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-300 rounded-lg flex items-center gap-1 relative group whitespace-nowrap ${
                  location.pathname.startsWith('/industries')
                    ? 'text-emerald-700 dark:text-accent bg-indigo-50 dark:bg-accent/10'
                    : 'text-gray-700 dark:text-foreground hover:text-indigo-600 dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-secondary/50'
                }`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-700 to-amber-500 dark:from-accent dark:to-amber-300 rounded-full transition-transform duration-300 origin-left ${
                  location.pathname.startsWith('/industries') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed pt-4 z-50"
                      style={{ 
                        top: 'calc(var(--header-top, 44px) + 92px)',
                        left: 0, right: 0, margin: '0 auto',
                        
                        width: 'min(1180px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)'
                      }}
                    >
                      <div className="bg-white dark:bg-card rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/80 dark:border-border/50 overflow-hidden grid grid-cols-12 w-full max-w-full">
                        {/* Left Panel - Industry Categories (8 columns) */}
                        <div className="col-span-8 p-8">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {industryCategories.map((category, index) => {
                              const isActive = activeIndustryCategory === category.name || (!activeIndustryCategory && index === 0);
                              
                              return (
                                <motion.div
                                  key={category.href}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.02 }}
                                  onMouseEnter={() => setActiveIndustryCategory(category.name)}
                                >
                                  <Link
                                    to={category.href}
                                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 group border ${
                                      isActive 
                                        ? 'bg-gray-50 dark:bg-secondary/80 border-emerald-200/60 dark:border-accent/25 shadow-sm' 
                                        : 'border-transparent hover:bg-gray-50 dark:hover:bg-secondary/50 hover:border-gray-100 dark:hover:border-border/30'
                                    }`}
                                  >
                                    <motion.div 
                                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center shrink-0 shadow-sm`}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                      <span className={`text-sm font-semibold block transition-colors mb-1 ${
                                        isActive ? 'text-emerald-700 dark:text-accent' : 'text-gray-900 dark:text-foreground group-hover:text-emerald-700 dark:group-hover:text-accent'
                                      }`}>{category.name}</span>
                                      <span className="text-xs text-gray-500 dark:text-muted-foreground line-clamp-2 leading-relaxed">{category.description}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Panel - Sub-industries (4 columns) */}
                        <div className="col-span-4 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 p-8 relative overflow-hidden flex flex-col">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
                          
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeIndustryCategory || 'default'}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.15 }}
                              className="relative z-10 flex-1"
                            >
                              <h3 className="text-lg font-bold text-amber-300 font-display mb-5">
                                {activeIndustryCategory || 'Logistics & Transportation'}
                              </h3>
                              <div className="space-y-1">
                                {(industryCategories.find(cat => cat.name === (activeIndustryCategory || 'Logistics & Transportation'))?.subIndustries || industryCategories[0].subIndustries).map((sub, idx) => (
                                  <motion.div
                                    key={sub.href + idx}
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03 }}
                                  >
                                    <Link
                                      to={sub.href}
                                      className="flex items-center gap-2 text-white/90 hover:text-amber-300 transition-all duration-200 group py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/10"
                                    >
                                      <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform duration-200" />
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
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'insights'}
                className={`px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-300 rounded-lg flex items-center gap-1 relative group whitespace-nowrap ${
                  location.pathname.startsWith('/insights')
                    ? 'text-emerald-700 dark:text-accent bg-indigo-50 dark:bg-accent/10'
                    : 'text-gray-700 dark:text-foreground hover:text-indigo-600 dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-secondary/50'
                }`}
              >
                Softurecs Insights
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'insights' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-700 to-amber-500 dark:from-accent dark:to-amber-300 rounded-full transition-transform duration-300 origin-left ${
                  location.pathname.startsWith('/insights') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'insights' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed pt-4 z-50"
                      style={{ 
                        top: 'calc(var(--header-top, 44px) + 92px)',
                        left: 0, right: 0, margin: '0 auto',
                        
                        width: 'min(1180px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)'
                      }}
                    >
                      <div className="bg-white dark:bg-card rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/80 dark:border-border/50 overflow-hidden grid grid-cols-12 w-full max-w-full">
                        {/* Left Side - Menu Items (8 columns) */}
                        <div className="col-span-8 p-8">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {insightsMenuItems.map((item, index) => {
                              const iconColors = [
                                { from: '#f59e0b', to: '#ea580c' },
                                { from: '#10b981', to: '#14b8a6' },
                                { from: '#3b82f6', to: '#06b6d4' },
                                { from: '#8b5cf6', to: '#a855f7' },
                                { from: '#ec4899', to: '#f43f5e' },
                                { from: '#0ea5e9', to: '#3b82f6' },
                              ];
                              const colors = iconColors[index] || iconColors[0];
                              
                              return (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.025 }}
                                >
                                  <Link
                                    to={item.href}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-secondary/80 transition-all duration-200 group border border-transparent hover:border-gray-100 dark:hover:border-border/30"
                                  >
                                    <motion.div 
                                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all duration-200`}
                                      whileHover={{ scale: 1.05 }}
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
                                    <div className="flex-1 min-w-0">
                                      <span className="text-sm font-semibold text-gray-900 dark:text-foreground block group-hover:text-emerald-700 dark:group-hover:text-accent transition-colors mb-1">{item.name}</span>
                                      <span className="text-xs text-gray-500 dark:text-muted-foreground leading-relaxed line-clamp-2">{item.description}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Side - Insights Figures at a Glance (4 columns) */}
                        <div className="col-span-4 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 p-8 flex flex-col">
                          <h3 className="text-lg font-bold text-amber-300 font-display mb-6">Insights at a Glance</h3>
                          <div className="space-y-5 flex-1">
                            {insightsFigures.map((figure, idx) => {
                              const figureColors = [
                                { from: '#fbbf24', to: '#f59e0b' },
                                { from: '#34d399', to: '#10b981' },
                                { from: '#60a5fa', to: '#3b82f6' },
                                { from: '#a78bfa', to: '#8b5cf6' },
                              ];
                              const fColors = figureColors[idx] || figureColors[0];
                              
                              return (
                                <motion.div 
                                  key={figure.label} 
                                  className="flex items-start gap-4"
                                  initial={{ opacity: 0, x: 15 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.06 }}
                                >
                                  <motion.div 
                                    className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm"
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    <svg width="0" height="0" className="absolute">
                                      <defs>
                                        <linearGradient id={`insights-figure-icon-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor={fColors.from} />
                                          <stop offset="100%" stopColor={fColors.to} />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <figure.icon 
                                      className="w-5 h-5" 
                                      style={{ stroke: `url(#insights-figure-icon-${idx})` }}
                                    />
                                  </motion.div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-bold text-white block">{figure.value} {figure.label}</span>
                                    <span className="text-xs text-white/70 leading-relaxed">{figure.description}</span>
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
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl text-gray-600 dark:text-foreground hover:bg-gray-100 dark:hover:bg-secondary transition-all duration-200 hover:scale-105"
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
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold text-[15px] px-8 py-3.5 h-auto rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 group"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-secondary transition-all"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-card border-t border-gray-100 dark:border-border/50 overflow-y-auto max-h-[75vh] shadow-xl"
            >
              <div className="container-custom py-4 space-y-1">
                {/* AI Journey Section */}
                <div>
                  <button
                    onClick={() => toggleMobileSection('ai-journey')}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-foreground font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                  >
                    <span>Start AI Journey</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'ai-journey' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === 'ai-journey' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {aiJourneyMenuItems.map((item) => (
                          <Link 
                            key={item.href}
                            to={item.href} 
                            className="block px-4 py-2.5 text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* About Section */}
                <div>
                  <button
                    onClick={() => toggleMobileSection('about')}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-foreground font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                  >
                    <span>About Softurecs</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === 'about' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {aboutMenuItems.map((item) => (
                          <Link 
                            key={item.href}
                            to={item.href} 
                            className="block px-4 py-2.5 text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Section */}
                <div>
                  <button
                    onClick={() => toggleMobileSection('services')}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-foreground font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {serviceCategories.map((category) => (
                          <Link 
                            key={category.href}
                            to={category.href} 
                            className="block px-4 py-2.5 text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Section */}
                <div>
                  <button
                    onClick={() => toggleMobileSection('industries')}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-foreground font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                  >
                    <span>Industries</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'industries' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === 'industries' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {industryCategories.map((category) => (
                          <Link 
                            key={category.href}
                            to={category.href} 
                            className="block px-4 py-2.5 text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Insights Section */}
                <div>
                  <button
                    onClick={() => toggleMobileSection('insights')}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-foreground font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                  >
                    <span>Softurecs Insights</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'insights' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedSection === 'insights' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {insightsMenuItems.map((item) => (
                          <Link 
                            key={item.href}
                            to={item.href} 
                            className="block px-4 py-2.5 text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground rounded-lg hover:bg-gray-50 dark:hover:bg-secondary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <div className="pt-4 px-4">
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-full">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
