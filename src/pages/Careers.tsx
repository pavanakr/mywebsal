import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, DollarSign, ArrowRight, Users, Heart, Zap, Globe, Coffee, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCareersImage from '@/assets/hero-careers.png';

const perks = [
  { icon: DollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision' },
  { icon: Zap, title: 'Flexible Work', description: 'Remote-first with flexible hours' },
  { icon: Globe, title: 'Global Team', description: 'Work with talent from 20+ countries' },
  { icon: Coffee, title: 'Team Events', description: 'Regular team building and social events' },
  { icon: BookOpen, title: 'Learning Budget', description: '$2,000 annual learning allowance' },
];

const jobs = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$150k - $200k',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130k - $170k',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote (Worldwide)',
    type: 'Full-time',
    salary: '$140k - $180k',
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$160k - $220k',
  },
  {
    title: 'Technical Project Manager',
    department: 'Operations',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£80k - £100k',
  },
  {
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (Worldwide)',
    type: 'Full-time',
    salary: '$120k - $160k',
  },
];

const Careers = () => {
  return (
    <Layout>
      <SEO
        title="Careers at SOFTURECS AI LABS PRIVATE LIMITED"
        description="Join SOFTURECS AI LABS PRIVATE LIMITED! Explore tech careers in AI, software development & cloud. Remote-first culture, competitive pay, global team of 200+ innovators."
        keywords="tech careers, software jobs India, remote developer jobs, AI engineer jobs, Hyderabad IT jobs"
      />
      <PageHero
        title="Careers at SOFTURECS AI LABS PRIVATE LIMITED – Build the Future with Us"
        description="Work with Cutting-Edge Technologies. Culture of Innovation & Growth. Explore Career Opportunities."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Careers' }
        ]}
        icon={Briefcase}
        iconColor="from-indigo-500 to-purple-600"
        badge="We're Hiring"
        image={heroCareersImage}
        imageAlt="Team collaboration and career growth at Softurecs"
        stats={[
          { value: '200+', label: 'Team Members' },
          { value: '20+', label: 'Countries' },
          { value: '50+', label: 'Open Roles' }
        ]}
      />

      {/* Culture Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Culture of Innovation & Growth
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Vertex Labs, we believe that great work comes from empowered teams. We foster an environment where creativity thrives, learning never stops, and every voice matters.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our remote-first culture means you can do your best work from anywhere, while our collaborative tools and regular team events keep us connected and engaged.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a seasoned professional or just starting your career, you'll find opportunities to grow, lead, and make a real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-soft"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                alt="Office environment"
                className="rounded-2xl shadow-soft mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-muted-foreground">
              We take care of our team so they can focus on doing their best work
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <perk.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Next Role
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our current openings and join a team that's shaping the future of technology
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card p-6 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="bg-secondary px-2 py-1 rounded">{job.department}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for exceptional talent.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Send Open Application
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
