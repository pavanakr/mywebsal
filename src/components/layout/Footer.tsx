import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const services = [
  { name: 'Custom Software Development', href: '/services/custom-software' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { name: 'AI & Automation', href: '/services/ai-automation' },
  { name: 'SaaS Development', href: '/services/saas' },
  { name: 'Application Modernization', href: '/services/application-modernization' },
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

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-cyan-light flex items-center justify-center">
                <span className="text-primary font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">SOFTURECS</span>
                <span className="text-[10px] font-medium leading-none text-primary-foreground/70">AI LABS</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              SOFTURECS AI LABS PRIVATE LIMITED - Empowering businesses with cutting-edge AI-driven software solutions. We transform ideas into powerful digital experiences that drive growth and innovation.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@softurecs.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                info@softurecs.com
              </a>
              <a href="tel:+917396080902" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                +91 7396080902
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>5th Floor, Trinity Corporate Building, 501-A,<br />eSeva Lane, KPHB Phase 3, Kukatpally,<br />Hyderabad, Telangana – 500072</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} SOFTURECS AI LABS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/softurecs" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/softurecs" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/softurecs" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/softurecs" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
