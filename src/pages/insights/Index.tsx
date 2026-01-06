import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { FileText, Briefcase, BookOpen, HelpCircle, Newspaper, ArrowRight, TrendingUp, Users, Award, Lightbulb } from 'lucide-react';
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
      <SEO
        title="Softurecs Insights"
        description="Technology trends, case studies & expert insights from Softurecs AI Labs. Explore our knowledge base on AI, software development & digital transformation."
        keywords="technology insights, software trends, AI articles, case studies, tech expertise"
      />
      <PageHero
        title="Softurecs Insights – Technology Trends, Case Studies & Expertise"
        description="Industry Insights & Tech Articles. Real-World Case Studies. Expert Opinions & Updates."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Softurecs Insights' }
        ]}
        icon={Lightbulb}
        iconColor="from-amber-500 to-orange-500"
        badge="Softurecs Insights"
        variant="centered"
        stats={[
          { value: '1500+', label: 'Projects Delivered' },
          { value: '700+', label: 'Happy Clients' },
          { value: '50+', label: 'Industry Awards' }
        ]}
      />


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
