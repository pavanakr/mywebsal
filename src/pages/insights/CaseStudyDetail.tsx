import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { ArrowRight, ArrowLeft, CheckCircle, Target, Lightbulb, TrendingUp, Calendar, Building2, Users, Globe, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudiesData: Record<string, {
  title: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  location: string;
  heroImage: string;
  overview: string;
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    points: string[];
  };
  results: {
    metrics: { value: string; label: string }[];
    description: string;
  };
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}> = {
  'edulearn': {
    title: 'EduLearn LMS Platform',
    client: 'EduLearn Academy',
    industry: 'Education',
    duration: '8 months',
    teamSize: '12 members',
    location: 'United States',
    heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop',
    overview: 'EduLearn Academy needed a comprehensive learning management system to deliver online courses to students worldwide. The platform required interactive content delivery, progress tracking, virtual classrooms, and certification management.',
    challenge: {
      description: 'EduLearn faced several critical challenges with their existing educational infrastructure:',
      points: [
        'Legacy system could not handle growing student enrollments',
        'No support for interactive video content and live sessions',
        'Lack of real-time progress tracking and analytics',
        'Poor mobile experience leading to student drop-offs',
        'No integration with third-party payment systems',
        'Difficulty in managing multiple course formats',
      ],
    },
    solution: {
      description: 'We developed a modern, scalable LMS platform with comprehensive features:',
      points: [
        'Built scalable cloud architecture on AWS handling 100K+ concurrent users',
        'Implemented WebRTC-based virtual classroom with screen sharing',
        'Created adaptive learning paths with AI-powered recommendations',
        'Developed mobile-first responsive design with offline content access',
        'Integrated Stripe and PayPal for seamless course purchases',
        'Built comprehensive analytics dashboard for instructors',
      ],
    },
    results: {
      metrics: [
        { value: '100K+', label: 'Students Enrolled' },
        { value: '95%', label: 'Completion Rate' },
        { value: '500+', label: 'Courses Available' },
        { value: '4.8/5', label: 'User Rating' },
      ],
      description: 'The new LMS platform transformed EduLearn into a leading online education provider, with significant improvements in student engagement, course completion rates, and revenue.',
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Redis', 'Elasticsearch'],
    testimonial: {
      quote: "Softurecs delivered a platform that exceeded our expectations. The student engagement has increased dramatically, and our instructors love the analytics features.",
      author: 'Michael Chen',
      role: 'CEO, EduLearn Academy',
    },
  },
  'streammax': {
    title: 'StreamMax OTT Platform',
    client: 'StreamMax Media',
    industry: 'Media & Entertainment',
    duration: '10 months',
    teamSize: '15 members',
    location: 'United Kingdom',
    heroImage: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&h=600&fit=crop',
    overview: 'StreamMax Media wanted to launch a premium video streaming service to compete with major players. The platform needed to support millions of concurrent viewers with 4K streaming, personalized recommendations, and multi-device playback.',
    challenge: {
      description: 'StreamMax faced significant technical and business challenges:',
      points: [
        'Need for infrastructure supporting millions of concurrent streams',
        'Content delivery network optimization for global audience',
        'DRM implementation for content protection',
        'Personalization at scale with AI recommendations',
        'Multi-platform support (Web, iOS, Android, Smart TVs)',
        'Real-time analytics for content performance',
      ],
    },
    solution: {
      description: 'We architected and built a world-class streaming platform:',
      points: [
        'Implemented adaptive bitrate streaming with HLS/DASH protocols',
        'Built global CDN integration with edge caching',
        'Developed AI-powered recommendation engine using collaborative filtering',
        'Implemented Widevine and FairPlay DRM for content protection',
        'Created native apps for all major platforms using React Native',
        'Built real-time analytics with Apache Kafka and ClickHouse',
      ],
    },
    results: {
      metrics: [
        { value: '5M+', label: 'Active Subscribers' },
        { value: '4K', label: 'Streaming Quality' },
        { value: '99.9%', label: 'Platform Uptime' },
        { value: '45min', label: 'Avg. Session Duration' },
      ],
      description: 'StreamMax successfully launched as a premium OTT service, achieving rapid subscriber growth and becoming a recognized brand in the streaming industry.',
    },
    technologies: ['React', 'Node.js', 'AWS MediaConvert', 'CloudFront', 'Redis', 'Kafka', 'TensorFlow'],
    testimonial: {
      quote: "The platform Softurecs built for us is incredibly robust. We've had zero major outages even during peak viewing times.",
      author: 'Sarah Williams',
      role: 'CTO, StreamMax Media',
    },
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudiesData[slug] : null;

  if (!caseStudy) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <Link to="/insights/case-studies">
              <Button>View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${caseStudy.title} | Case Study | Softurecs AI Labs`}
        description={caseStudy.overview}
        keywords={`case study, ${caseStudy.industry.toLowerCase()}, software development, ${caseStudy.client}`}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                <li className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" className="text-white/60 hover:text-cyan-400 transition-colors" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <ChevronRight className="w-4 h-4 text-white/30" />
                <li className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/insights" className="text-white/60 hover:text-cyan-400 transition-colors" itemProp="item">
                    <span itemProp="name">Softurecs Insights</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <ChevronRight className="w-4 h-4 text-white/30" />
                <li className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/insights/case-studies" className="text-white/60 hover:text-cyan-400 transition-colors" itemProp="item">
                    <span itemProp="name">Case Studies</span>
                  </Link>
                  <meta itemProp="position" content="3" />
                </li>
                <ChevronRight className="w-4 h-4 text-white/30" />
                <li className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-white/90 font-medium" itemProp="name">{caseStudy.client}</span>
                  <meta itemProp="position" content="4" />
                </li>
              </ol>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                  {caseStudy.industry}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  {caseStudy.overview}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-sm">{caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-sm">{caseStudy.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Globe className="h-5 w-5 text-accent" />
                    <span className="text-sm">{caseStudy.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Info */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-cyan-light flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{caseStudy.client}</h3>
                <p className="text-muted-foreground">{caseStudy.industry}</p>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Similar Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Target className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {caseStudy.challenge.description}
              </p>
              <ul className="space-y-3">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">{index + 1}</span>
                    </span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {caseStudy.solution.description}
              </p>
              <ul className="space-y-3">
                {caseStudy.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-navy to-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold text-white">The Results</h2>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto">
              {caseStudy.results.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-white/80">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-foreground font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-muted/30">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="text-4xl text-accent mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div>
                <div className="font-bold text-foreground">{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary via-navy to-primary rounded-2xl p-8 md:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Build Your Success Story?
              </h2>
              <p className="text-white/80">
                Let's discuss how we can help transform your business.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/insights/case-studies">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Case Studies
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;
