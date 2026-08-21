import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Rocket, Users, Coffee, GraduationCap, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CareersAtSofturecs() {
  const benefits = [
    { icon: Heart, title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family' },
    { icon: Coffee, title: 'Flexible Work', description: 'Work from home options and flexible hours' },
    { icon: GraduationCap, title: 'Learning Budget', description: 'Annual learning allowance for courses and certifications' },
    { icon: Rocket, title: 'Career Growth', description: 'Clear growth paths and promotion opportunities' },
    { icon: Users, title: 'Team Events', description: 'Regular team outings and company events' },
    { icon: Clock, title: 'Paid Time Off', description: 'Generous vacation days and holidays' },
  ];

  const openPositions = [
    { title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Hyderabad', type: 'Full-time' },
    { title: 'AI/ML Engineer', department: 'AI Labs', location: 'Hyderabad / Remote', type: 'Full-time' },
    { title: 'DevOps Engineer', department: 'Infrastructure', location: 'Hyderabad', type: 'Full-time' },
    { title: 'Product Manager', department: 'Product', location: 'Hyderabad', type: 'Full-time' },
    { title: 'UX Designer', department: 'Design', location: 'Remote', type: 'Full-time' },
    { title: 'Technical Lead - React', department: 'Engineering', location: 'Hyderabad', type: 'Full-time' },
  ];

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
              Careers @ Softurecs
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Join our team to build future-ready digital solutions together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Build Your Future With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At SOFTURECS AI LABS PRIVATE LIMITED, we believe that our people are our greatest asset. 
                We foster a culture of innovation, learning, and collaboration where every 
                team member can thrive and grow.
              </p>
              <p className="text-muted-foreground mb-6">
                Join a team of 250+ talented professionals working on cutting-edge technologies 
                and solving complex problems for clients across the globe.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent">250+</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.8/5</div>
                  <p className="text-sm text-muted-foreground">Glassdoor Rating</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-cyan-light/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">Innovation First</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">Collaborative Spirit</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">Work-Life Balance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">Continuous Learning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits & Perks</h2>
            <p className="text-lg text-muted-foreground">
              We take care of our team so they can focus on doing great work.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity at SOFTURECS AI LABS PRIVATE LIMITED.
            </p>
          </motion.div>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="shrink-0">
                  Apply Now
                </Button>
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
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Your Resume <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
