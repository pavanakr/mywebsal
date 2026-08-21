import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { ChevronDown, Search, ArrowRight, HelpCircle, Code, Cloud, Shield, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = [
  { id: "all", name: "All FAQs", icon: HelpCircle },
  { id: "services", name: "Services", icon: Code },
  { id: "process", name: "Process", icon: Zap },
  { id: "technology", name: "Technology", icon: Cloud },
  { id: "security", name: "Security", icon: Shield },
  { id: "engagement", name: "Engagement", icon: Users },
];

const faqs = [
  {
    id: 1,
    category: "services",
    question: "What services does Softurecs offer?",
    answer: "Softurecs offers a comprehensive range of digital solutions including custom software development, mobile app development, web development, AI/ML solutions, cloud services, SaaS development, application modernization, and staff augmentation. We serve various industries including healthcare, fintech, e-commerce, logistics, and education.",
  },
  {
    id: 2,
    category: "services",
    question: "Do you develop both web and mobile applications?",
    answer: "Yes, we develop both web and mobile applications. For mobile, we work with native iOS and Android development as well as cross-platform solutions using React Native and Flutter. For web, we specialize in React, Next.js, and modern JavaScript frameworks.",
  },
  {
    id: 3,
    category: "process",
    question: "How does the development process work?",
    answer: "Our development process follows an agile methodology: 1) Discovery & Planning - understanding requirements, 2) Design - UI/UX and architecture design, 3) Development - iterative sprints with regular demos, 4) Testing - comprehensive QA and UAT, 5) Deployment - staged rollout, 6) Support - ongoing maintenance and updates.",
  },
  {
    id: 4,
    category: "process",
    question: "How long does it take to build a custom application?",
    answer: "Project timelines vary based on complexity. A simple MVP typically takes 2-3 months, medium complexity projects take 4-6 months, and enterprise-grade solutions may take 6-12+ months. We provide detailed timelines after requirement analysis.",
  },
  {
    id: 5,
    category: "technology",
    question: "What technologies do you work with?",
    answer: "We work with modern tech stacks including React, Next.js, Node.js, Python, TypeScript for frontend/backend; PostgreSQL, MongoDB, Redis for databases; AWS, Azure, GCP for cloud; TensorFlow, PyTorch for AI/ML; and Docker, Kubernetes for DevOps.",
  },
  {
    id: 6,
    category: "technology",
    question: "Can you integrate with existing systems?",
    answer: "Absolutely. We specialize in system integrations including legacy system modernization, API integrations, third-party service integrations, ERP/CRM integrations, payment gateway integrations, and real-time data synchronization.",
  },
  {
    id: 7,
    category: "security",
    question: "How do you ensure application security?",
    answer: "Security is built into every phase: secure coding practices, regular security audits, penetration testing, data encryption at rest and in transit, role-based access control, compliance with GDPR/HIPAA/SOC2 as required, and continuous security monitoring.",
  },
  {
    id: 8,
    category: "security",
    question: "Do you sign NDAs and ensure data confidentiality?",
    answer: "Yes, we sign NDAs before project discussions begin. All team members are bound by confidentiality agreements. We implement strict data handling policies and can comply with specific security requirements of your industry.",
  },
  {
    id: 9,
    category: "engagement",
    question: "What are your engagement models?",
    answer: "We offer flexible engagement models: 1) Fixed Price - for well-defined projects, 2) Time & Material - for evolving requirements, 3) Dedicated Team - for long-term projects, 4) Staff Augmentation - to extend your team. Each model is tailored to project needs.",
  },
  {
    id: 10,
    category: "engagement",
    question: "How do you handle communication and project updates?",
    answer: "We maintain transparent communication through: daily standups, weekly sprint reviews, dedicated project managers, real-time chat (Slack/Teams), project management tools (Jira/Asana), regular video calls, and detailed progress reports.",
  },
  {
    id: 11,
    category: "engagement",
    question: "Do you provide post-launch support?",
    answer: "Yes, we provide comprehensive post-launch support including bug fixes, performance optimization, feature enhancements, security updates, 24/7 monitoring (optional), and SLA-based support tiers for enterprise clients.",
  },
  {
    id: 12,
    category: "services",
    question: "Can you help with AI and machine learning projects?",
    answer: "Yes, AI/ML is one of our core competencies. We offer custom AI development, machine learning model training, natural language processing, computer vision, predictive analytics, AI chatbots, and generative AI solutions.",
  },
];

const FAQs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Frequently Asked Questions | SOFTURECS AI LABS PRIVATE LIMITED"
        description="Get answers to common questions about our software development services, process, engagement models, and technology stack."
        keywords="FAQ, software development questions, technology services FAQ, engagement models"
      />
      <PageHero
        title="Frequently Asked Questions"
        description="Quick answers to common questions about our services and process."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Softurecs Insights', href: '/insights' },
          { label: 'FAQs' }
        ]}
        icon={HelpCircle}
        iconColor="from-orange-500 to-amber-500"
        badge="FAQs"
        variant="centered"
      />

      {/* Search & Categories */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col gap-6">
            <div className="relative max-w-xl mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent/10"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === faq.id ? "auto" : 0,
                      opacity: openFaq === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No FAQs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary via-navy to-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Can't find what you're looking for? Get in touch with our team.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
