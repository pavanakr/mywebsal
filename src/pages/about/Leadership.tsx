import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowRight, Quote, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Leadership() {
  const leaders = [
    {
      name: 'Pavan Kumar Naramala',
      role: 'Founder & CEO',
      initials: 'PN',
      bio: 'Visionary leader with 15+ years of experience in enterprise software development and AI solutions.',
    },
    {
      name: 'Srikanth Reddy',
      role: 'Chief Technology Officer',
      initials: 'SR',
      bio: 'Technical architect with deep expertise in cloud infrastructure and scalable systems.',
    },
    {
      name: 'Priya Sharma',
      role: 'VP of Engineering',
      initials: 'PS',
      bio: 'Engineering leader passionate about building high-performing teams and quality software.',
    },
    {
      name: 'Rahul Verma',
      role: 'Head of AI & Innovation',
      initials: 'RV',
      bio: 'AI researcher and practitioner driving innovation in machine learning applications.',
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Leadership Team | SOFTURECS AI LABS PRIVATE LIMITED"
        description="Meet Pavan Kumar Naramala, Founder & CEO of SOFTURECS AI LABS PRIVATE LIMITED. Visionary leaders with 50+ years combined experience driving AI innovation."
        keywords="Softurecs leadership, Pavan Kumar Naramala, software company CEO, IT leadership team Hyderabad"
      />
      
      <PageHero
        title="Leadership Team Driving Innovation at SOFTURECS AI LABS PRIVATE LIMITED"
        description="Founder & CEO – Pavan Kumar Naramala. Visionary Leadership & Engineering Excellence. Building a Future-Ready Technology Company."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Leadership' }
        ]}
        icon={UsersRound}
        iconColor="from-purple-500 to-indigo-600"
        badge="Executive Team"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
        imageAlt="Leadership team collaboration"
        stats={[
          { value: '50+', label: 'Years Combined Experience' },
          { value: '4', label: 'Core Leaders' }
        ]}
      />

      {/* Founder Spotlight */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-center">
                <div className="w-40 h-40 rounded-full bg-primary-foreground/20 mx-auto mb-8 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-foreground">PN</span>
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                  Pavan Kumar Naramala
                </h3>
                <p className="text-xl text-primary-foreground/80 mb-6">Founder & CEO</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a href="#" className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors">
                    <Twitter className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-12 h-12 text-accent mb-6" />
              <p className="text-2xl text-foreground font-medium mb-6 italic">
                "Our mission is to democratize AI and make cutting-edge technology accessible 
                to businesses of all sizes. Every project we undertake is a step towards that vision."
              </p>
              <p className="text-muted-foreground mb-6">
                With over 15 years of experience in the technology industry, Pavan founded 
                SOFTURECS AI LABS PRIVATE LIMITED with a vision to bridge the gap between complex technology 
                and practical business solutions.
              </p>
              <p className="text-muted-foreground">
                Under his leadership, the company has grown to serve 700+ clients globally, 
                delivering over 1500 successful projects across diverse industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              Our leadership principles guide every decision we make.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'People First', description: 'We invest in our people, knowing that great teams build great products.' },
              { title: 'Innovation Driven', description: 'We encourage experimentation and embrace new technologies.' },
              { title: 'Client Success', description: 'Our success is measured by the success of our clients.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Executive Team</h2>
            <p className="text-lg text-muted-foreground">
              The experienced leaders steering our company forward.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft text-center group hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-bold text-primary-foreground">{leader.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{leader.name}</h3>
                <p className="text-sm text-accent mb-3">{leader.role}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
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
              Join Our Leadership Journey
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with a team that's committed to your success.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Connect with Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
