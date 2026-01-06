import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AwardsRecognition() {
  const awards = [
    {
      year: '2024',
      title: 'Best AI Solutions Provider',
      organization: 'Tech Excellence Awards',
      icon: Trophy,
    },
    {
      year: '2024',
      title: 'Top Software Development Company',
      organization: 'Clutch Global',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Innovation in Cloud Services',
      organization: 'Cloud Computing Awards',
      icon: Star,
    },
    {
      year: '2023',
      title: 'Best Workplace in Tech',
      organization: 'Great Place to Work',
      icon: Medal,
    },
    {
      year: '2022',
      title: 'Excellence in Digital Transformation',
      organization: 'Digital India Awards',
      icon: Trophy,
    },
    {
      year: '2022',
      title: 'Top Mobile App Developer',
      organization: 'App Development Awards',
      icon: Award,
    },
  ];

  const recognitions = [
    { title: 'Clutch Top 10', description: 'Ranked among top software companies globally' },
    { title: 'ISO 27001 Certified', description: 'Information security management certified' },
    { title: 'AWS Partner', description: 'Advanced tier consulting partner' },
    { title: 'Google Cloud Partner', description: 'Certified cloud solutions provider' },
    { title: 'Microsoft Partner', description: 'Gold competency partner' },
    { title: 'NASSCOM Member', description: 'Active industry association member' },
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
              Awards & Recognition
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Recognized globally for innovation, quality, and client-centric solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-accent/10 to-cyan-light/10 rounded-2xl"
            >
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">25+</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-accent/10 to-cyan-light/10 rounded-2xl"
            >
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">10+</div>
              <p className="text-muted-foreground">Certifications</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-accent/10 to-cyan-light/10 rounded-2xl"
            >
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">Top 10</div>
              <p className="text-muted-foreground">Global Rankings</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              A timeline of recognition for our commitment to excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <award.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-accent font-medium">{award.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Industry Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by industry leaders and certified by global standards.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
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
              Partner with an Award-Winning Team
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the quality that has earned us global recognition.
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
