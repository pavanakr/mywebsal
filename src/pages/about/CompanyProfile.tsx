import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CompanyProfile() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Softurecs AI Labs
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover our journey, expertise, and commitment to digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Transforming Ideas into Digital Reality
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SOFTURECS AI LABS PRIVATE LIMITED is a leading enterprise software development company 
                headquartered in Hyderabad, India. We specialize in delivering cutting-edge AI-powered 
                solutions, custom software, and digital transformation services to businesses worldwide.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded with a vision to democratize technology, we combine deep technical expertise 
                with innovative thinking to help organizations achieve their digital ambitions.
              </p>
              <p className="text-muted-foreground">
                Our team of 250+ expert engineers, designers, and consultants work collaboratively 
                to deliver solutions that drive real business value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-cyan-light/10 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-accent mb-2">1500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-accent mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Expert Team</div>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-accent mb-2">700+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in AI-driven software solutions, empowering businesses 
                to thrive in the digital age through innovative technology and exceptional service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-light/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver world-class software solutions that transform businesses, create value, 
                and drive sustainable growth through cutting-edge technology and customer-centric approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Softurecs AI Labs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
              { icon: Shield, title: 'Integrity', description: 'Maintaining transparency and ethical practices' },
              { icon: Heart, title: 'Excellence', description: 'Delivering quality in every project' },
              { icon: Users, title: 'Collaboration', description: 'Working together for shared success' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center"
            >
              <div className="w-32 h-32 rounded-full bg-primary-foreground/20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl font-bold text-primary-foreground">PN</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Pavan Kumar Naramala
              </h3>
              <p className="text-primary-foreground/80">Founder & CEO</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Visionary Leadership</h2>
              <p className="text-muted-foreground mb-6">
                Under the leadership of Pavan Kumar Naramala, Softurecs AI Labs has grown from a small 
                startup to a leading enterprise software company serving clients across the globe.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 15 years of experience in the technology industry, Pavan brings a unique 
                blend of technical expertise and business acumen that drives the company's success.
              </p>
              <p className="text-muted-foreground">
                His vision of leveraging AI to transform businesses has positioned Softurecs as a 
                pioneer in the digital transformation space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
