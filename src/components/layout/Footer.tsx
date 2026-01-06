import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const services = [
  { name: 'Custom Software Development', href: '/services/custom-software' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { name: 'AI & Automation', href: '/services/ai-automation' },
  { name: 'SaaS Development', href: '/services/saas' },
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Fintech', href: '/industries/fintech' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Logistics', href: '/industries/logistics' },
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
                <span className="text-primary font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold">Vertex Labs</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering businesses with cutting-edge software solutions. We transform ideas into powerful digital experiences that drive growth and innovation.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@vertexlabs.io" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                hello@vertexlabs.io
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>100 Innovation Drive, Suite 500<br />San Francisco, CA 94107</span>
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
            © {new Date().getFullYear()} Vertex Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
