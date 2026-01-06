import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Search, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = [
  "All",
  "Technology",
  "AI & ML",
  "Cloud",
  "Development",
  "Business",
];

const blogs = [
  {
    id: "future-of-ai-enterprise",
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Explore how artificial intelligence is reshaping enterprise software development and what it means for businesses.",
    category: "AI & ML",
    author: "Pavan Kumar",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    href: "/blog/future-of-ai-enterprise",
  },
  {
    id: "microservices-architecture",
    title: "Building Scalable Microservices Architecture",
    excerpt: "Learn best practices for designing and implementing microservices that scale with your business needs.",
    category: "Development",
    author: "Tech Team",
    date: "Jan 3, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    href: "/blog/microservices-architecture",
  },
  {
    id: "cloud-migration-2025",
    title: "Cloud Migration Strategies for 2025 and Beyond",
    excerpt: "A comprehensive guide to planning and executing successful cloud migration for your organization.",
    category: "Cloud",
    author: "Cloud Team",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    href: "/blog/cloud-migration-2025",
  },
  {
    id: "saas-security",
    title: "Security Best Practices for SaaS Applications",
    excerpt: "Essential security measures every SaaS application should implement to protect user data.",
    category: "Technology",
    author: "Security Team",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    href: "/blog/saas-security",
  },
  {
    id: "devops-culture",
    title: "Building a DevOps Culture That Delivers Results",
    excerpt: "How to foster a DevOps mindset in your organization for faster, more reliable software delivery.",
    category: "Development",
    author: "DevOps Team",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
    href: "/blog/devops-culture",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation: A Roadmap for Success",
    excerpt: "Strategic insights for organizations embarking on their digital transformation journey.",
    category: "Business",
    author: "Strategy Team",
    date: "Dec 10, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    href: "/insights/blogs",
  },
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs[0];

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
            <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-accent">Blogs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Blogs on AI, Software & Digital Transformation
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Latest Tech Trends & Innovations. Expert Insights from Our Team. Practical Guides & Best Practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <Link to={featuredBlog.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-accent font-medium text-sm mb-2">{featuredBlog.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {featuredBlog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {featuredBlog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {featuredBlog.readTime}
                    </span>
                  </div>
                  <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-y border-border">
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
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(1).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={blog.href}>
                  <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary via-navy to-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get the latest insights, trends, and tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
