import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Code, Smartphone, Cloud, Cpu, Globe, Layers, Sun, Moon, RefreshCw,
  Building2, Server, Users, Handshake, Award, MessageSquare, Network, Briefcase,
  FolderCheck, UserCheck, Heart, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const aboutMenuItems = [
  { 
    name: 'Company Profile', 
    href: '/about/company-profile', 
    icon: Building2,
    description: "Discover Softurecs' journey, expertise, and commitment to digital excellence."
  },
  { 
    name: 'Infrastructure', 
    href: '/about/infrastructure', 
    icon: Server,
    description: 'Explore our advanced development environment and robust technology setup.'
  },
  { 
    name: 'Careers @ Softurecs', 
    href: '/about/careers', 
    icon: Briefcase,
    description: 'Join our team to build future-ready digital solutions together.'
  },
  { 
    name: 'Partnership', 
    href: '/about/partnerships', 
    icon: Handshake,
    description: 'Collaborate with us to build impactful and scalable solutions.'
  },
  { 
    name: 'Leadership', 
    href: '/about/leadership', 
    icon: Users,
    description: 'Meet the visionary minds driving Softurecs\' growth and innovation.'
  },
  { 
    name: 'Awards & Recognition', 
    href: '/about/awards-recognition', 
    icon: Award,
    description: 'Recognized globally for innovation, quality, and client-centric solutions.'
  },
  { 
    name: 'Client Testimonials', 
    href: '/about/testimonials', 
    icon: MessageSquare,
    description: 'Hear what our satisfied clients say about working with us.'
  },
  { 
    name: 'Alliances', 
    href: '/about/alliances', 
    icon: Network,
    description: 'Strategic alliances that enhance our capabilities and global reach.'
  },
];

const services = [
  { name: 'Custom Software Development', href: '/services/custom-software', icon: Code },
  { name: 'Web Development', href: '/services/web-development', icon: Globe },
  { name: 'Mobile App Development', href: '/services/mobile-apps', icon: Smartphone },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
  { name: 'AI & Automation', href: '/services/ai-automation', icon: Cpu },
  { name: 'SaaS Development', href: '/services/saas', icon: Layers },
  { name: 'Application Modernization', href: '/services/application-modernization', icon: RefreshCw },
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
                          {aboutMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-secondary transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-cyan-light/20 flex items-center justify-center shrink-0 mt-0.5">
                                <item.icon className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <span className="text-sm font-semibold text-foreground block">{item.name}</span>
                                <span className="text-xs text-muted-foreground line-clamp-2">{item.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Figures at a Glance */}
                      <div className="w-[320px] bg-primary p-6">
                        <h3 className="text-lg font-bold text-amber-400 mb-6">Figures at a Glance</h3>
                        <div className="space-y-5">
                          {figuresAtGlance.map((figure) => (
                            <div key={figure.label} className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                                <figure.icon className="w-5 h-5 text-amber-400" />
                              </div>
                              <div>
                                <span className="text-base font-bold text-primary-foreground block">{figure.value} {figure.label}</span>
                                <span className="text-xs text-primary-foreground/70">{figure.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
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
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-card rounded-xl shadow-elevated border border-border/50 p-4 min-w-[320px]">
                      <div className="grid gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                              <service.icon className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-sm font-medium text-foreground">{service.name}</span>
                          </Link>
                        ))}
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
              {services.map((service) => (
                <Link 
                  key={service.href}
                  to={service.href} 
                  className="block px-8 py-2 text-foreground font-medium rounded-lg hover:bg-secondary"
                >
                  {service.name}
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
