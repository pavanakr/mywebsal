import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FileText, Briefcase, BookOpen, HelpCircle, Newspaper, ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insightCategories = [
  {
    title: "Case Studies",
    description: "Real-world success stories showcasing our solutions and client impact.",
    icon: FileText,
    href: "/insights/case-studies",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Our Portfolio",
    description: "Explore our diverse projects across industries and technologies.",
    icon: Briefcase,
    href: "/insights/portfolio",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Blogs",
    description: "Insights, trends, and tips from our tech and business experts.",
    icon: BookOpen,
    href: "/insights/blogs",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "FAQs",
    description: "Quick answers to common questions about our services and process.",
    icon: HelpCircle,
    href: "/insights/faqs",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Press Releases",
    description: "Stay updated with our latest news, updates, and achievements.",
    icon: Newspaper,
    href: "/insights/press-releases",
    gradient: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { value: "1500+", label: "Projects Delivered", icon: TrendingUp },
  { value: "700+", label: "Happy Clients", icon: Users },
  { value: "50+", label: "Industry Awards", icon: Award },
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-navy to-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Softurecs Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Softurecs Insights – Technology Trends, Case Studies & Expertise
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Industry Insights & Tech Articles. Real-World Case Studies. Expert Opinions & Updates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/insights/case-studies">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  View Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Insights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive into our knowledge base to learn about our work, expertise, and industry trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={category.href}>
                  <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-navy to-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how our expertise can help you achieve your digital goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
