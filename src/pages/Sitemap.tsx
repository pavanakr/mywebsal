import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, Smartphone, Globe, Cloud, Brain, Database, Users, Building2, 
  ShoppingCart, Truck, Heart, GraduationCap, Plane, Film, Home,
  Wallet, Utensils, Gamepad2, MessageSquare, Link2, Cpu, BarChart3,
  Briefcase, FileText, Award, Handshake, Mail, Shield, Scale, BookOpen
} from 'lucide-react';

const sitemapData = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Building2 },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'Industries', href: '/industries', icon: Briefcase },
    { name: 'Portfolio', href: '/portfolio', icon: Award },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ],
  about: [
    { name: 'Company Profile', href: '/about/company-profile' },
    { name: 'Infrastructure', href: '/about/infrastructure' },
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'Awards & Recognition', href: '/about/awards-recognition' },
    { name: 'Careers at Softurecs', href: '/about/careers' },
    { name: 'Partnerships', href: '/about/partnerships' },
    { name: 'Testimonials', href: '/about/testimonials' },
    { name: 'Alliances', href: '/about/alliances' },
  ],
  services: [
    { name: 'Custom Software Development', href: '/services/custom-software' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-apps' },
    { name: 'iOS Development', href: '/services/ios-development' },
    { name: 'Android Development', href: '/services/android-development' },
    { name: 'Hybrid Development', href: '/services/hybrid-development' },
    { name: 'Software Consulting', href: '/services/software-consulting' },
    { name: 'UI/UX Design', href: '/services/ui-ux' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'E-commerce Development', href: '/services/ecommerce' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { name: 'AI Automation', href: '/services/ai-automation' },
    { name: 'SaaS Development', href: '/services/saas' },
    { name: 'Application Modernization', href: '/services/application-modernization' },
    { name: 'Big Data Analytics', href: '/services/big-data' },
    { name: 'Staff Augmentation', href: '/services/staff-augmentation' },
    { name: 'On-Demand Solutions', href: '/services/on-demand' },
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'AIOps', href: '/services/aiops' },
    { name: 'Machine Learning', href: '/services/machine-learning' },
    { name: 'Generative AI', href: '/services/generative-ai' },
    { name: 'AI Chatbot', href: '/services/ai-chatbot' },
    { name: 'Deep Learning', href: '/services/deep-learning' },
    { name: 'LLM Development', href: '/services/llm-development' },
  ],
  solutions: [
    { name: 'E-Wallet', href: '/solutions/ewallet', icon: Wallet },
    { name: 'E-Learning', href: '/solutions/elearning', icon: GraduationCap },
    { name: 'Real Estate', href: '/solutions/real-estate', icon: Building2 },
    { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
    { name: 'Food Delivery', href: '/solutions/food-delivery', icon: Utensils },
    { name: 'Dating', href: '/solutions/dating', icon: Heart },
    { name: 'Grocery', href: '/solutions/grocery', icon: ShoppingCart },
    { name: 'Fantasy Sports', href: '/solutions/fantasy-sports', icon: Gamepad2 },
    { name: 'AI Chatbot Solutions', href: '/solutions/ai-chatbot', icon: MessageSquare },
  ],
  technologies: [
    { name: 'Blockchain', href: '/technologies/blockchain', icon: Link2 },
    { name: 'Artificial Intelligence', href: '/technologies/artificial-intelligence', icon: Brain },
    { name: 'Fintech Solutions', href: '/technologies/fintech', icon: Wallet },
    { name: 'Cloud Computing', href: '/technologies/cloud', icon: Cloud },
    { name: 'IoT Development', href: '/technologies/iot', icon: Cpu },
    { name: 'Machine Learning', href: '/technologies/machine-learning', icon: Brain },
    { name: 'Big Data', href: '/technologies/big-data', icon: Database },
    { name: 'Salesforce', href: '/technologies/salesforce', icon: BarChart3 },
  ],
  industries: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Travel & Hospitality', href: '/industries/travel-hospitality' },
    { name: 'Logistics & Transportation', href: '/industries/logistics-transportation' },
    { name: 'Real Estate & Construction', href: '/industries/real-estate-construction' },
    { name: 'Retail & E-commerce', href: '/industries/retail-ecommerce' },
    { name: 'Banking & Finance', href: '/industries/banking-finance' },
    { name: 'Media & Entertainment', href: '/industries/media-entertainment' },
  ],
  hire: [
    { name: 'Dedicated Developers', href: '/hire/dedicated-developers' },
    { name: 'Mobile Developers', href: '/hire/mobile-developers' },
    { name: 'Android Developers', href: '/hire/android-developers' },
    { name: 'iOS Developers', href: '/hire/ios-developers' },
    { name: 'Laravel Developers', href: '/hire/laravel-developers' },
    { name: 'Flutter Developers', href: '/hire/flutter-developers' },
    { name: 'Node.js Developers', href: '/hire/nodejs-developers' },
    { name: 'Java Developers', href: '/hire/java-developers' },
    { name: 'Game Developers', href: '/hire/game-developers' },
  ],
  insights: [
    { name: 'Insights Hub', href: '/insights' },
    { name: 'Case Studies', href: '/insights/case-studies' },
    { name: 'Portfolio', href: '/insights/portfolio' },
    { name: 'Blogs', href: '/insights/blogs' },
    { name: 'FAQs', href: '/insights/faqs' },
    { name: 'Press Releases', href: '/insights/press-releases' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
    { name: 'Refund Policy', href: '/refund-policy', icon: Scale },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface SitemapItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const SitemapSection = ({ title, items, columns = 2 }: { title: string; items: SitemapItem[]; columns?: number }) => (
  <motion.div variants={itemVariants} className="bg-card rounded-2xl border border-border/50 p-6 hover:shadow-soft transition-shadow">
    <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-border/50">{title}</h3>
    <ul className={`grid gap-2 ${columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            to={item.href}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors py-1.5 group"
          >
            {item.icon && <item.icon className="w-4 h-4 text-accent/70 group-hover:text-accent" />}
            <span className="text-sm">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Sitemap = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Navigation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore all pages and sections of our website. Find services, solutions, technologies, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8"
          >
            {/* Main Pages */}
            <SitemapSection title="Main Pages" items={sitemapData.main} columns={2} />

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              <SitemapSection title="About Us" items={sitemapData.about} columns={1} />
              <SitemapSection title="Hire Developers" items={sitemapData.hire} columns={1} />
            </div>

            {/* Services - Full Width */}
            <SitemapSection title="Services" items={sitemapData.services} columns={3} />

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              <SitemapSection title="Solutions" items={sitemapData.solutions} columns={1} />
              <SitemapSection title="Technologies" items={sitemapData.technologies} columns={1} />
            </div>

            {/* Industries */}
            <SitemapSection title="Industries" items={sitemapData.industries} columns={3} />

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              <SitemapSection title="Insights" items={sitemapData.insights} columns={1} />
              <SitemapSection title="Legal" items={sitemapData.legal} columns={1} />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
