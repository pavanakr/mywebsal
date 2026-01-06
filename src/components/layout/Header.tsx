import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code, Smartphone, Cloud, Cpu, Globe, Layers, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const services = [
  { name: 'Custom Software Development', href: '/services/custom-software', icon: Code },
  { name: 'Web Development', href: '/services/web-development', icon: Globe },
  { name: 'Mobile App Development', href: '/services/mobile-apps', icon: Smartphone },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
  { name: 'AI & Automation', href: '/services/ai-automation', icon: Cpu },
  { name: 'SaaS Development', href: '/services/saas', icon: Layers },
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Fintech', href: '/industries/fintech' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Logistics', href: '/industries/logistics' },
  { name: 'Education', href: '/industries/education' },
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
              <span className="text-primary font-bold text-xl">V</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Vertex Labs
            </span>
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

            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              About Us
            </Link>

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
              to="/careers"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              Careers
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
            className="lg:hidden bg-card border-t border-border/50"
          >
            <div className="container-custom py-4 space-y-2">
              <Link to="/" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Home
              </Link>
              <Link to="/about" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                About Us
              </Link>
              <Link to="/services" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Services
              </Link>
              <Link to="/industries" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Industries
              </Link>
              <Link to="/portfolio" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Portfolio
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Blog
              </Link>
              <Link to="/careers" className="block px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary">
                Careers
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
