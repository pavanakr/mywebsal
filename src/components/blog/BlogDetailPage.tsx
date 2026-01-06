import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Calendar, Clock, User, ArrowLeft, Linkedin, Twitter, Facebook, Link2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { NewsletterSignup } from '@/components/blog/NewsletterSignup';

interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

interface RelatedPost {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
}

interface BlogDetailPageProps {
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  relatedPosts: RelatedPost[];
}

export function BlogDetailPage({
  title,
  excerpt,
  content,
  author,
  date,
  readTime,
  category,
  image,
  tags,
  relatedPosts,
}: BlogDetailPageProps) {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({ title: 'Link copied!', description: 'The article link has been copied to your clipboard.' });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const seoKeywords = `${category.toLowerCase()}, ${tags.join(', ').toLowerCase()}, tech blog, software development, enterprise insights`;

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        keywords={seoKeywords}
        image={image}
        type="article"
        article={{
          publishedTime: date,
          author: author.name,
        }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              {category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {title}
            </h1>

            <p className="text-xl text-primary-foreground/70 mb-8">{excerpt}</p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full border-2 border-accent"
                />
                <div>
                  <div className="font-medium text-primary-foreground">{author.name}</div>
                  <div className="text-sm text-primary-foreground/60">{author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={image}
              alt={title}
              className="w-full aspect-video object-cover rounded-2xl shadow-elevated"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Sidebar - Share & TOC */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="sticky top-28 space-y-6">
                  <div className="bg-card p-4 rounded-xl border border-border/50">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Share Article</h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Link2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-xl border border-border/50">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>

              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-9"
              >
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent"
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Author Box */}
                <div className="mt-12 p-6 bg-card rounded-2xl border border-border/50">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        Written by {author.name}
                      </h4>
                      <p className="text-sm text-accent mb-3">{author.role}</p>
                      <p className="text-muted-foreground">{author.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Related Articles</h2>
            <p className="text-lg text-muted-foreground">
              Continue reading with these related posts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
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
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="font-semibold">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>
    </Layout>
  );
}
