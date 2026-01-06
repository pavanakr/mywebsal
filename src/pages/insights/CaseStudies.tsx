import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowRight, Filter, Search, Building2, Heart, ShoppingCart, Truck, GraduationCap, Film, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const industries = [
  "All",
  "Healthcare",
  "Fintech",
  "E-commerce",
  "Logistics",
  "Education",
  "Media",
];

const caseStudies = [
  {
    id: "healthpulse",
    title: "HealthPulse Telemedicine Platform",
    client: "HealthPulse Inc.",
    industry: "Healthcare",
    description: "Built a comprehensive telemedicine platform connecting patients with healthcare providers through video consultations, appointment scheduling, and EHR integration.",
    results: ["500K+ patients served", "40% reduction in wait times", "99.9% uptime"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    icon: Heart,
    href: "/portfolio/healthpulse",
  },
  {
    id: "finvault",
    title: "FinVault Digital Banking Solution",
    client: "FinVault Technologies",
    industry: "Fintech",
    description: "Developed a secure digital banking platform with AI-powered fraud detection, real-time transactions, and comprehensive financial management tools.",
    results: ["$2B+ transactions processed", "99.99% fraud prevention", "1M+ active users"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    icon: Building2,
    href: "/portfolio/finvault",
  },
  {
    id: "shopsphere",
    title: "ShopSphere Multi-Vendor Marketplace",
    client: "ShopSphere Global",
    industry: "E-commerce",
    description: "Created a scalable multi-vendor marketplace with 10M+ products, advanced search, personalized recommendations, and seamless checkout.",
    results: ["$500M+ GMV", "40% conversion increase", "10M+ products listed"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    icon: ShoppingCart,
    href: "/portfolio/shopsphere",
  },
  {
    id: "logitrack",
    title: "LogiTrack Fleet Management System",
    client: "LogiTrack Solutions",
    industry: "Logistics",
    description: "Implemented an intelligent fleet management and logistics optimization platform with real-time tracking, route optimization, and predictive maintenance.",
    results: ["30% fuel savings", "50K+ deliveries/day", "Real-time visibility"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    icon: Truck,
    href: "/portfolio/logitrack",
  },
  {
    id: "edulearn",
    title: "EduLearn LMS Platform",
    client: "EduLearn Academy",
    industry: "Education",
    description: "Built a comprehensive learning management system with interactive courses, progress tracking, virtual classrooms, and certification management.",
    results: ["100K+ students enrolled", "95% completion rate", "500+ courses"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    icon: GraduationCap,
    href: "/insights/case-studies/edulearn",
  },
  {
    id: "streammax",
    title: "StreamMax OTT Platform",
    client: "StreamMax Media",
    industry: "Media",
    description: "Developed a high-performance video streaming platform with adaptive bitrate streaming, content recommendation engine, and multi-device support.",
    results: ["5M+ subscribers", "4K streaming support", "99.9% availability"],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
    icon: Film,
    href: "/insights/case-studies/streammax",
  },
];

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudies = caseStudies.filter((study) => {
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Case Studies | Softurecs AI Labs"
        description="Real success stories from healthcare, fintech, e-commerce & logistics. See how Softurecs AI Labs delivers measurable results for global clients."
        keywords="software case studies, client success stories, healthcare software, fintech solutions, e-commerce platform"
      />
      <PageHero
        title="Case Studies Showcasing Our Software Development Success"
        description="Real Business Challenges & Solutions. Measurable Results & Impact. Client Success Stories."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Softurecs Insights', href: '/insights' },
          { label: 'Case Studies' }
        ]}
        icon={FileText}
        iconColor="from-amber-500 to-orange-500"
        badge="Case Studies"
        variant="centered"
      />

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-[120px] z-30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedIndustry === industry
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent/10"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={study.href}>
                  <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <study.icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">{study.client}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.results.slice(0, 2).map((result, i) => (
                          <span key={i} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {result}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                        Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary via-navy to-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Let's discuss how we can create a success story for your business.
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

export default CaseStudies;
