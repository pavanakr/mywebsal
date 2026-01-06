import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowRight, Search, Grid3X3, List, ExternalLink, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "E-commerce",
  "Healthcare",
  "Fintech",
  "AI/ML",
];

const projects = [
  {
    id: "healthpulse",
    title: "HealthPulse",
    category: "Healthcare",
    description: "Comprehensive telemedicine platform with video consultations and EHR integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL"],
    href: "/portfolio/healthpulse",
  },
  {
    id: "finvault",
    title: "FinVault",
    category: "Fintech",
    description: "Digital banking platform with AI-powered fraud detection and real-time transactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    href: "/portfolio/finvault",
  },
  {
    id: "shopsphere",
    title: "ShopSphere",
    category: "E-commerce",
    description: "Multi-vendor marketplace with 10M+ products and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "GraphQL", "Elasticsearch", "Redis"],
    href: "/portfolio/shopsphere",
  },
  {
    id: "logitrack",
    title: "LogiTrack",
    category: "Web Apps",
    description: "Intelligent fleet management with real-time tracking and route optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps"],
    href: "/portfolio/logitrack",
  },
  {
    id: "edulearn",
    title: "EduLearn LMS",
    category: "Web Apps",
    description: "Learning management system with interactive courses and virtual classrooms.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    technologies: ["React", "Django", "PostgreSQL", "WebRTC"],
    href: "/insights/portfolio",
  },
  {
    id: "aiassist",
    title: "AI Assist",
    category: "AI/ML",
    description: "Enterprise AI chatbot with natural language processing and automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI"],
    href: "/insights/portfolio",
  },
  {
    id: "fitnesshub",
    title: "FitnessHub",
    category: "Mobile Apps",
    description: "Fitness tracking app with workout plans, nutrition tracking, and social features.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "Firebase", "HealthKit"],
    href: "/insights/portfolio",
  },
  {
    id: "propview",
    title: "PropView",
    category: "Web Apps",
    description: "Real estate platform with virtual tours, property management, and analytics.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["React", "Three.js", "Node.js", "PostgreSQL"],
    href: "/insights/portfolio",
  },
];

const InsightsPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Our Portfolio | Softurecs AI Labs"
        description="Explore our diverse portfolio of web apps, mobile apps, e-commerce, healthcare, fintech, and AI/ML projects."
        keywords="software portfolio, web applications, mobile apps, e-commerce, healthcare software, fintech solutions"
      />
      <PageHero
        title="Our Portfolio"
        description="Explore our diverse projects across industries and technologies."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Softurecs Insights', href: '/insights' },
          { label: 'Portfolio' }
        ]}
        icon={Briefcase}
        iconColor="from-purple-500 to-violet-500"
        badge="Our Portfolio"
        variant="centered"
      />

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-[120px] z-30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-1 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-card shadow" : ""}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-card shadow" : ""}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={project.href}>
                    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                          <ExternalLink className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-accent font-medium">{project.category}</span>
                        <h3 className="text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={project.href}>
                    <div className="group bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex gap-6">
                      <div className="w-48 h-32 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-xs text-accent font-medium">{project.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary via-navy to-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Let's turn your vision into reality with our expertise.
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

export default InsightsPortfolio;
