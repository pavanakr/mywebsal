import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Users, Clock, Shield, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/home/CTASection';

interface TechData {
  name: string;
  fullName: string;
  description: string;
  skills: string[];
  useCases: string[];
  experience: string;
  rate: string;
}

const techData: Record<string, TechData> = {
  'react': {
    name: 'React',
    fullName: 'React.js',
    description: 'Build modern, high-performance web applications with our expert React developers. From SPAs to complex enterprise dashboards, our team delivers scalable solutions.',
    skills: ['React 18+', 'Redux/Zustand', 'Next.js', 'TypeScript', 'Testing (Jest/RTL)', 'Performance Optimization'],
    useCases: ['Enterprise Dashboards', 'E-commerce Platforms', 'SaaS Applications', 'Progressive Web Apps'],
    experience: '5+ years average',
    rate: 'Starting $40/hr',
  },
  'nodejs': {
    name: 'Node.js',
    fullName: 'Node.js',
    description: 'Scale your backend with our Node.js experts. We build fast, secure APIs and microservices that handle millions of requests with ease.',
    skills: ['Express.js', 'NestJS', 'GraphQL', 'PostgreSQL/MongoDB', 'Redis', 'AWS/Azure'],
    useCases: ['REST APIs', 'Real-time Applications', 'Microservices', 'Serverless Functions'],
    experience: '5+ years average',
    rate: 'Starting $45/hr',
  },
  'python': {
    name: 'Python',
    fullName: 'Python',
    description: 'From AI/ML to web backends, our Python developers bring versatility and expertise to every project. Django, FastAPI, and data science specialists.',
    skills: ['Django/FastAPI', 'Machine Learning', 'Data Science', 'TensorFlow/PyTorch', 'Pandas/NumPy', 'API Development'],
    useCases: ['AI/ML Applications', 'Data Analytics', 'Web Applications', 'Automation Scripts'],
    experience: '6+ years average',
    rate: 'Starting $50/hr',
  },
  'java': {
    name: 'Java',
    fullName: 'Java',
    description: 'Enterprise-grade Java development for mission-critical applications. Spring Boot, microservices, and high-performance backend systems.',
    skills: ['Spring Boot', 'Microservices', 'Hibernate', 'Kafka', 'Kubernetes', 'Enterprise Patterns'],
    useCases: ['Enterprise Systems', 'Banking Applications', 'High-Volume APIs', 'Legacy Modernization'],
    experience: '7+ years average',
    rate: 'Starting $45/hr',
  },
  'flutter': {
    name: 'Flutter',
    fullName: 'Flutter',
    description: 'Beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Our Flutter developers deliver pixel-perfect UIs.',
    skills: ['Flutter 3+', 'Dart', 'State Management', 'Firebase', 'Native Integrations', 'App Store Optimization'],
    useCases: ['Cross-platform Apps', 'MVP Development', 'E-commerce Apps', 'Social Apps'],
    experience: '4+ years average',
    rate: 'Starting $40/hr',
  },
  'ai-ml': {
    name: 'AI/ML',
    fullName: 'AI & Machine Learning',
    description: 'Transform your business with AI. Our ML engineers build intelligent systems that automate, predict, and optimize across industries.',
    skills: ['TensorFlow/PyTorch', 'NLP/LLMs', 'Computer Vision', 'MLOps', 'Deep Learning', 'Data Engineering'],
    useCases: ['Predictive Analytics', 'Chatbots/NLP', 'Recommendation Systems', 'Fraud Detection'],
    experience: '5+ years average',
    rate: 'Starting $60/hr',
  },
  'angular': {
    name: 'Angular',
    fullName: 'Angular',
    description: 'Enterprise-ready Angular applications with robust architecture. Our developers excel in building complex, maintainable frontend systems.',
    skills: ['Angular 15+', 'RxJS', 'NgRx', 'TypeScript', 'Angular Material', 'Testing'],
    useCases: ['Enterprise Apps', 'Admin Dashboards', 'CRM Systems', 'Data-heavy Applications'],
    experience: '5+ years average',
    rate: 'Starting $42/hr',
  },
  'devops': {
    name: 'DevOps',
    fullName: 'DevOps Engineers',
    description: 'Streamline your deployment pipeline with our DevOps experts. CI/CD, infrastructure as code, and cloud optimization specialists.',
    skills: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Monitoring', 'Security'],
    useCases: ['Cloud Migration', 'Infrastructure Automation', 'Performance Optimization', 'Security Hardening'],
    experience: '6+ years average',
    rate: 'Starting $55/hr',
  },
};

const benefits = [
  { icon: Users, title: 'Vetted Talent', description: 'Pre-screened developers with proven track records' },
  { icon: Clock, title: 'Fast Onboarding', description: 'Start within 48 hours of selection' },
  { icon: Shield, title: 'IP Protection', description: 'NDA and full IP rights transfer' },
  { icon: Award, title: 'Quality Assured', description: 'Code reviews and best practices enforced' },
  { icon: Zap, title: 'Flexible Scaling', description: 'Scale team up or down as needed' },
  { icon: Code, title: 'Full-Stack Ready', description: 'Complement with designers and PMs' },
];

export const HireDeveloperPage = () => {
  const { technology } = useParams<{ technology: string }>();
  const techInfo = technology ? techData[technology] : null;

  if (!techInfo) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Technology Not Found</h1>
          <Link to="/services/staff-augmentation">
            <Button>View All Hiring Options</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`Hire Expert ${techInfo.fullName} Developers`}
        description={`Hire pre-vetted ${techInfo.fullName} developers from SOFTURECS AI LABS PRIVATE LIMITED. Scale your team with top ${techInfo.name} talent for your software projects.`}
        keywords={`hire ${techInfo.name.toLowerCase()} developers, remote ${techInfo.name.toLowerCase()} development team, ${techInfo.name.toLowerCase()} experts for hire, staff augmentation ${techInfo.name.toLowerCase()}`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://softurecs.com/' },
        { name: 'Hire Developers', url: 'https://softurecs.com/hire' },
        { name: `Hire ${techInfo.fullName} Developers`, url: `https://softurecs.com/hire-${technology}-developers` }
      ]} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              Staff Augmentation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Hire {techInfo.fullName} Developers
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
              {techInfo.description}
            </p>
            <div className="flex flex-wrap gap-4 text-primary-foreground/70 mb-8">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" /> {techInfo.experience}
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" /> {techInfo.rate}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Hire Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+917396080902">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Schedule Call
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Use Cases */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {techInfo.fullName} Skills & Expertise
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {techInfo.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We Build
              </h2>
              <div className="space-y-4">
                {techInfo.useCases.map((useCase, i) => (
                  <div
                    key={i}
                    className="bg-card p-4 rounded-xl border border-border/50 flex items-center gap-4"
                  >
                    <Code className="w-8 h-8 text-accent" />
                    <span className="font-medium text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Hire from SOFTURECS AI LABS PRIVATE LIMITED
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border/50"
              >
                <benefit.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Technologies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Also Hire Experts In
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(techData)
              .filter(([key]) => key !== technology)
              .slice(0, 5)
              .map(([key, tech]) => (
                <Link
                  key={key}
                  to={`/hire-${key}-developers`}
                  className="px-4 py-2 bg-secondary rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {tech.fullName}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default HireDeveloperPage;
