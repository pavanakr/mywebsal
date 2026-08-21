import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { OrganizationSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { Target, Eye, Award, Users, Building, Globe, CheckCircle, User } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Engineers' },
  { value: '15+', label: 'Countries Served' },
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly explore emerging technologies to deliver cutting-edge AI-driven solutions that give our clients a competitive edge.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We build lasting relationships by understanding your goals and becoming an extension of your team.',
  },
  {
    icon: Award,
    title: 'Excellence in Delivery',
    description: 'We maintain the highest standards of quality, ensuring every project exceeds expectations.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'With clients across 15+ countries, we bring diverse expertise and round-the-clock development capabilities.',
  },
];

const team = [
  {
    name: 'Pavan Kumar Naramala',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
    isFounder: true,
  },
  {
    name: 'Software Engineering Team',
    role: 'AI & Full-Stack Experts',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop',
  },
];

const whyUs = [
  'ISO 27001 & SOC 2 Compliant',
  'Agile & DevOps Excellence',
  'Dedicated Project Managers',
  '24/7 Support & Maintenance',
  'Transparent Communication',
  'Proven Track Record',
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Softurecs AI Labs | Leading AI & Software Company India"
        description="SOFTURECS AI LABS PRIVATE LIMITED: Leading AI software development company in Hyderabad, India. Discover our mission to deliver enterprise AI & custom software."
        keywords="about softurecs ai labs, AI software company India, Hyderabad IT innovations, tech company mission, Pavan Kumar Naramala, custom software development"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'About', url: 'https://softurecs.com/about' }
      ]} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              About SOFTURECS AI LABS PRIVATE LIMITED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Leading Software Development Company in Hyderabad – AI Specialists
            </h1>
            <p className="text-xl text-primary-foreground/70">
              SOFTURECS AI LABS PRIVATE LIMITED is at the forefront of AI-driven software innovation, helping businesses worldwide transform their ideas into powerful digital realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are & What We Do
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SOFTURECS AI LABS PRIVATE LIMITED was founded with a simple yet powerful vision: to bridge the gap between business challenges and AI-driven technological solutions. What started as a passionate team in Hyderabad has grown into a trusted technology partner for enterprises worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, we partner with Fortune 500 companies and ambitious startups alike, delivering solutions that drive real business outcomes. Our expertise spans across industries, from healthcare and fintech to e-commerce and logistics.
              </p>
              <p className="text-lg text-muted-foreground">
                Headquartered in Hyderabad's tech hub, we bring cutting-edge AI and automation capabilities combined with the agility and personalized attention that sets us apart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="SOFTURECS AI LABS Team"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-soft border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Hyderabad</div>
                    <div className="text-sm text-muted-foreground">Tech Hub HQ</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">Meet Our Founder</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pavan Kumar Naramala
              </h2>
              <p className="text-lg text-accent font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground mb-6">
                With a vision to revolutionize how businesses leverage AI and technology, Pavan Kumar Naramala founded SOFTURECS AI LABS to bridge the gap between cutting-edge innovation and practical business solutions.
              </p>
              <p className="text-muted-foreground">
                Under his leadership, the company has grown to serve clients across 15+ countries, delivering transformative AI-powered solutions that drive measurable business outcomes. His commitment to excellence and innovation continues to shape the company's mission of empowering businesses through intelligent technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
                  alt="Pavan Kumar Naramala - Founder & CEO"
                  className="rounded-2xl shadow-elevated w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold shadow-lg">
                  Founder & CEO
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world's most trusted AI technology partner, enabling businesses of all sizes to harness the power of artificial intelligence and digital innovation for unprecedented growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver exceptional AI-powered software solutions that solve real business problems, drive operational efficiency, and create meaningful value for our clients and their customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Vision, Mission & Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose Softurecs AI Labs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical excellence with business acumen to deliver AI-powered solutions that don't just work—they drive measurable results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Leadership Team
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {member.isFounder && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Founder
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
