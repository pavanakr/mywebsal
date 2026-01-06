import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const featuredPost = {
  title: 'The Future of AI in Enterprise Software Development',
  excerpt: 'Exploring how artificial intelligence is transforming the way we build, deploy, and maintain enterprise applications in 2024 and beyond.',
  author: 'Jennifer Park',
  role: 'CTO',
  date: 'Dec 28, 2024',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
  category: 'AI & Technology',
  href: '/blog/future-of-ai-enterprise',
};

const posts = [
  {
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and implementing microservices that scale with your business needs.',
    author: 'Robert Chen',
    date: 'Dec 20, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'Architecture',
    href: '/blog/microservices-architecture',
  },
  {
    title: 'Cloud Migration Best Practices for 2025',
    excerpt: 'Essential strategies and pitfalls to avoid when moving your infrastructure to the cloud.',
    author: 'Amanda Foster',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    category: 'Cloud',
    href: '/blog/cloud-migration-2025',
  },
  {
    title: 'React vs Vue vs Angular: Choosing the Right Framework',
    excerpt: 'An in-depth comparison of the top frontend frameworks to help you make the right choice.',
    author: 'David Mitchell',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    category: 'Frontend',
    href: '/blog/react-vue-angular',
  },
  {
    title: 'Securing Your SaaS Application',
    excerpt: 'Critical security practices every SaaS developer should implement from day one.',
    author: 'Jennifer Park',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
    category: 'Security',
    href: '/blog/saas-security',
  },
  {
    title: 'The Rise of Low-Code Platforms',
    excerpt: 'Understanding when low-code solutions make sense and when custom development is the better choice.',
    author: 'Robert Chen',
    date: 'Nov 30, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    category: 'Trends',
    href: '/blog/low-code-platforms',
  },
  {
    title: 'DevOps Culture: More Than Just Tools',
    excerpt: 'Building a successful DevOps culture requires more than just implementing CI/CD pipelines.',
    author: 'Amanda Foster',
    date: 'Nov 25, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
    category: 'DevOps',
    href: '/blog/devops-culture',
  },
];

const Blog = () => {
  return (
    <Layout>
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
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Insights & Ideas from Our Team
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Stay updated with the latest trends, best practices, and insights in software development and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={featuredPost.href}
              className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 bg-background">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Latest Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={post.href}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
