import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroTestimonials from '@/assets/hero-testimonials.png';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechVentures Inc.',
      content: 'SOFTURECS AI LABS PRIVATE LIMITED transformed our legacy systems into a modern, scalable platform. Their expertise in cloud architecture and AI integration exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'HealthFirst Solutions',
      content: 'Working with Softurecs was a game-changer for our healthcare platform. They delivered a HIPAA-compliant solution that improved patient outcomes significantly.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      company: 'FinanceFlow',
      content: 'The team at Softurecs delivered our fintech app ahead of schedule with exceptional quality. Their agile approach and communication were outstanding.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Product Director',
      company: 'RetailMax',
      content: 'Our e-commerce platform saw a 150% increase in performance after Softurecs optimized our infrastructure. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'COO',
      company: 'LogiPro Systems',
      content: 'Softurecs built a comprehensive logistics management system that reduced our operational costs by 40%. Excellent technical skills and professionalism.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'EdTech Innovations',
      content: 'The learning management system Softurecs developed has helped us scale to 100,000+ students. Their understanding of educational technology is impressive.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Client Testimonials"
        description="Read what our satisfied clients say about SOFTURECS AI LABS PRIVATE LIMITED. Discover success stories from 700+ happy clients across healthcare, fintech, e-commerce, and more."
        keywords="client testimonials, customer reviews, software development reviews, Softurecs reviews, client success stories"
      />
      
      <PageHero
        title="Client Testimonials"
        description="Hear what our satisfied clients say about working with us. Real stories from real partners who have experienced transformative digital solutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Testimonials' }
        ]}
        icon={MessageSquareQuote}
        iconColor="from-amber-500 to-orange-600"
        badge="Client Success"
        image={heroTestimonials}
        imageAlt="Client testimonials and reviews"
        stats={[
          { value: '700+', label: 'Happy Clients' },
          { value: '4.9/5', label: 'Average Rating' },
          { value: '98%', label: 'Satisfaction' }
        ]}
      />

      {/* Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">700+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <p className="text-muted-foreground">Repeat Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 text-accent mx-auto mb-8" />
            <p className="text-2xl md:text-3xl text-foreground mb-8 italic">
              "SOFTURECS AI LABS PRIVATE LIMITED is not just a vendor, they're a true technology partner. 
              Their commitment to our success is evident in every interaction."
            </p>
            <div>
              <p className="text-xl font-semibold text-foreground">Robert Martinez</p>
              <p className="text-muted-foreground">Chief Digital Officer, Global Enterprises Ltd.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's create your success story together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
