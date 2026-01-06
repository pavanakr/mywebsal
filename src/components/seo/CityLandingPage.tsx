import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, Building2, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';

interface CityData {
  name: string;
  country: string;
  region: string;
  phone: string;
  timezone: string;
  description: string;
  localBenefits: string[];
}

const cityData: Record<string, CityData> = {
  // India Cities
  'hyderabad': {
    name: 'Hyderabad',
    country: 'India',
    region: 'Telangana',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'As a leading AI software development company headquartered in Hyderabad, Softurecs AI Labs delivers cutting-edge digital solutions to businesses across Telangana and beyond. Our team of 50+ expert engineers specializes in AI, machine learning, cloud computing, and custom software development. Located in the heart of India\'s tech hub, we combine local expertise with global delivery standards.',
    localBenefits: ['Headquarters with dedicated support', 'Same timezone collaboration', 'On-site meetings available', 'Local talent pool access'],
  },
  'bengaluru': {
    name: 'Bengaluru',
    country: 'India',
    region: 'Karnataka',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'Softurecs AI Labs serves Bengaluru\'s thriving startup ecosystem and enterprise clients with innovative AI-powered software solutions. Our expertise in mobile app development, cloud services, and digital transformation helps businesses in Karnataka compete globally. Partner with us for scalable, secure, and future-ready technology solutions.',
    localBenefits: ['Startup ecosystem expertise', 'Enterprise-grade solutions', 'Agile development teams', 'Quick turnaround times'],
  },
  'chennai': {
    name: 'Chennai',
    country: 'India',
    region: 'Tamil Nadu',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'Serving Chennai\'s manufacturing and IT sectors, Softurecs AI Labs provides tailored software solutions that drive operational efficiency. From AI automation to custom ERP systems, we help Tamil Nadu businesses modernize their technology infrastructure and achieve digital excellence.',
    localBenefits: ['Manufacturing industry expertise', 'Legacy modernization', 'Cost-effective solutions', 'Bilingual support'],
  },
  'pune': {
    name: 'Pune',
    country: 'India',
    region: 'Maharashtra',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'Softurecs AI Labs partners with Pune\'s automotive and IT companies to deliver innovative software solutions. Our AI and machine learning expertise helps businesses in Maharashtra automate processes, gain insights, and accelerate growth through technology.',
    localBenefits: ['Automotive industry focus', 'R&D collaboration', 'Quality engineering', 'Skilled talent access'],
  },
  'mumbai': {
    name: 'Mumbai',
    country: 'India',
    region: 'Maharashtra',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'As India\'s financial capital, Mumbai demands enterprise-grade software solutions. Softurecs AI Labs delivers secure fintech applications, banking software, and digital transformation services to BFSI clients and enterprises across Maharashtra.',
    localBenefits: ['BFSI domain expertise', 'Compliance-ready solutions', 'High-security standards', 'Enterprise scalability'],
  },
  'delhi': {
    name: 'Delhi',
    country: 'India',
    region: 'NCR',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'Softurecs AI Labs serves Delhi NCR with comprehensive software development services. From government projects to private enterprises, we deliver AI-powered solutions that meet the diverse technology needs of India\'s capital region.',
    localBenefits: ['Government project experience', 'Multi-sector expertise', 'Large team capacity', 'NCR coverage'],
  },
  'noida': {
    name: 'Noida',
    country: 'India',
    region: 'Uttar Pradesh',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'Located in the IT hub of Uttar Pradesh, Softurecs AI Labs provides Noida businesses with cutting-edge software solutions. Our expertise in AI, mobile development, and cloud services helps companies in Noida\'s tech corridor achieve digital transformation.',
    localBenefits: ['Tech corridor presence', 'Startup support', 'Rapid prototyping', 'Competitive pricing'],
  },
  'gurugram': {
    name: 'Gurugram',
    country: 'India',
    region: 'Haryana',
    phone: '+91 7396080902',
    timezone: 'IST',
    description: 'Serving Gurugram\'s corporate hub, Softurecs AI Labs delivers enterprise software solutions to Fortune 500 companies and ambitious startups alike. Our AI and automation expertise helps businesses in Haryana optimize operations and drive growth.',
    localBenefits: ['Corporate hub expertise', 'MNC experience', 'Enterprise solutions', 'Professional services'],
  },
  // International Cities
  'new-york': {
    name: 'New York',
    country: 'USA',
    region: 'NY',
    phone: '+1 (555) 123-4567',
    timezone: 'EST',
    description: 'Softurecs AI Labs serves New York\'s dynamic business landscape with innovative AI and software solutions. From Wall Street fintech to Brooklyn startups, we deliver scalable, secure applications that meet the demanding standards of America\'s largest market.',
    localBenefits: ['US timezone support', 'Fintech expertise', 'Enterprise compliance', 'Dedicated US team'],
  },
  'san-francisco': {
    name: 'San Francisco',
    country: 'USA',
    region: 'CA',
    phone: '+1 (555) 123-4567',
    timezone: 'PST',
    description: 'In the heart of Silicon Valley, Softurecs AI Labs partners with San Francisco\'s tech innovators to build next-generation software. Our AI, machine learning, and cloud expertise aligns with the Bay Area\'s culture of innovation and disruption.',
    localBenefits: ['Silicon Valley standards', 'Startup mentality', 'Latest technologies', 'Venture-backed projects'],
  },
  'london': {
    name: 'London',
    country: 'UK',
    region: 'England',
    phone: '+44 20 1234 5678',
    timezone: 'GMT',
    description: 'Softurecs AI Labs serves London\'s diverse business community with GDPR-compliant software solutions. From Canary Wharf financial services to Shoreditch startups, we deliver AI-powered applications that meet European standards and drive business growth.',
    localBenefits: ['GDPR compliance', 'UK timezone support', 'Financial services focus', 'European expansion'],
  },
  'dubai': {
    name: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    phone: '+971 4 123 4567',
    timezone: 'GST',
    description: 'Softurecs AI Labs partners with Dubai\'s ambitious enterprises to deliver world-class software solutions. Our expertise in AI, mobile apps, and digital transformation supports the UAE\'s vision for a smart, technology-driven future.',
    localBenefits: ['Middle East presence', 'Arabic support', 'Government projects', 'Smart city expertise'],
  },
  'singapore': {
    name: 'Singapore',
    country: 'Singapore',
    region: 'APAC',
    phone: '+65 6123 4567',
    timezone: 'SGT',
    description: 'Serving Singapore\'s position as Asia\'s tech hub, Softurecs AI Labs delivers enterprise software solutions that meet the highest standards. Our AI and cloud expertise helps businesses in Singapore and APAC achieve digital excellence.',
    localBenefits: ['APAC hub', 'Multi-currency support', 'Regional expertise', 'Fintech specialization'],
  },
};

const services = [
  { name: 'AI & Machine Learning', href: '/services/ai-automation' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { name: 'Custom Software', href: '/services/custom-software' },
];

export const CityLandingPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityInfo = city ? cityData[city] : null;

  if (!cityInfo) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find information for this location.</p>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const formattedCity = cityInfo.name.replace(/-/g, ' ');

  return (
    <Layout>
      <SEO
        title={`Software Development Company in ${formattedCity}`}
        description={`Leading AI & software development company in ${formattedCity}. Custom apps, cloud solutions & digital transformation. Contact Softurecs AI Labs today.`}
        keywords={`software development ${formattedCity}, AI company ${formattedCity}, mobile app development ${formattedCity}, IT services ${cityInfo.region}`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'Locations', url: 'https://softurecs.com/locations' },
        { name: formattedCity, url: `https://softurecs.com/software-development-company-in-${city}` }
      ]} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-accent mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{cityInfo.region}, {cityInfo.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              AI Software Development Company in {formattedCity}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your business with cutting-edge AI solutions, custom software, and digital transformation services from Softurecs AI Labs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${cityInfo.phone}`}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 w-5 h-5" /> {cityInfo.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: '200+', label: 'Projects Delivered' },
              { icon: Users, value: '50+', label: 'Expert Engineers' },
              { icon: Award, value: '15+', label: 'Countries Served' },
              { icon: Clock, value: '24hrs', label: 'Response Time' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner in {formattedCity}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {cityInfo.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {cityInfo.localBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border/50"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a href={`tel:${cityInfo.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>{cityInfo.phone}</span>
                </a>
                <a href="mailto:info@softurecs.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>info@softurecs.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>{cityInfo.timezone} Business Hours</span>
                </div>
              </div>
              <Link to="/contact" className="block mt-6">
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Schedule a Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services in {formattedCity}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for {formattedCity} businesses
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block bg-card p-6 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all group"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-accent text-sm font-medium">
                    Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Link */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">See Our Work</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore case studies from clients across industries who trusted Softurecs AI Labs for their digital transformation.
          </p>
          <Link to="/insights/case-studies">
            <Button variant="outline" size="lg">
              View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CityLandingPage;
