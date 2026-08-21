import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { 
  Building2, 
  MessageSquare, 
  Zap, 
  Bot, 
  Cloud, 
  Code, 
  Settings, 
  Search, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react';

const resources = [
  {
    title: "CRM Solutions",
    description: "Deep dives into Real Estate CRM, WhatsApp Automation, and Meta API integrations.",
    icon: Building2,
    href: "/insights/blogs?category=CRM",
    gradient: "from-blue-500 to-cyan-500",
    links: [
      { label: "Real Estate CRM Guide", href: "/real-estate-crm" },
      { label: "WhatsApp CRM Integration", href: "/whatsapp-crm" },
      { label: "Meta API Implementation", href: "/meta-api-crm" }
    ]
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring AI Chatbots, Machine Learning, and Enterprise Automation.",
    icon: Bot,
    href: "/insights/blogs?category=AI",
    gradient: "from-emerald-500 to-teal-500",
    links: [
      { label: "AI Chatbot Development", href: "/services/ai-chatbot" },
      { label: "Conversational AI Trends", href: "/services/conversational-ai" }
    ]
  },
  {
    title: "SaaS & Cloud",
    description: "Building scalable SaaS platforms and modern cloud architectures.",
    icon: Cloud,
    href: "/insights/blogs?category=SaaS",
    gradient: "from-purple-500 to-violet-500",
    links: [
      { label: "SaaS Development", href: "/services/saas" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" }
    ]
  },
  {
    title: "Software Development",
    description: "Custom software engineering, API development, and tech stacks.",
    icon: Code,
    href: "/insights/blogs?category=Software Development",
    gradient: "from-orange-500 to-amber-500",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "API Development", href: "/services/api-development" }
    ]
  },
  {
    title: "Business Automation",
    description: "Optimizing workflows and operational efficiency with automation.",
    icon: Settings,
    href: "/insights/blogs?category=Business Automation",
    gradient: "from-pink-500 to-rose-500",
    links: [
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Process Optimization", href: "/services/custom-software" }
    ]
  }
];

const Resources = () => {
  return (
    <Layout>
      <SEO 
        title="Resources & Insights | SOFTURECS AI LABS PRIVATE LIMITED"
        description="Explore our knowledge base on CRM, AI, SaaS, and Software Development. Expert guides and resources from SOFTURECS AI LABS PRIVATE LIMITED."
        keywords="CRM resources, AI insights, software development guides, SaaS whitepapers, tech resources"
      />
      <PageHero
        title="Resources & Knowledge Hub"
        description="Expert insights and comprehensive guides to help you navigate the future of technology and business automation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Resources' }
        ]}
        icon={Lightbulb}
        iconColor="from-amber-500 to-orange-500"
        badge="Knowledge Center"
        variant="centered"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${resource.gradient}`} />
                <div className="p-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-6 text-white`}>
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {resource.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Related Guides</h4>
                    <ul className="space-y-2">
                      {resource.links.map((link) => (
                        <li key={link.label}>
                          <Link 
                            to={link.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group/link"
                          >
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <Link 
                      to={resource.href}
                      className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all"
                    >
                      Browse Articles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;