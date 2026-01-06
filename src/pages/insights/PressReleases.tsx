import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { ArrowRight, Calendar, ExternalLink, Download, Filter, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const years = ["All", "2026", "2025", "2024"];

const pressReleases = [
  {
    id: 1,
    title: "Softurecs Achieves ISO 27001 Certification for Information Security",
    date: "January 3, 2026",
    year: "2026",
    excerpt: "Softurecs AI Labs has achieved ISO 27001 certification, demonstrating our commitment to the highest standards of information security management.",
    category: "Company News",
  },
  {
    id: 2,
    title: "Softurecs Launches Advanced AI Development Center in Hyderabad",
    date: "December 15, 2025",
    year: "2025",
    excerpt: "Our new AI Development Center will focus on cutting-edge research in generative AI, machine learning, and enterprise automation solutions.",
    category: "Expansion",
  },
  {
    id: 3,
    title: "Softurecs Named Top 10 Emerging Technology Company by CIO Review",
    date: "November 28, 2025",
    year: "2025",
    excerpt: "We are honored to be recognized among the top 10 emerging technology companies for our innovative AI-driven software solutions.",
    category: "Awards",
  },
  {
    id: 4,
    title: "Softurecs Partners with Leading Healthcare Provider for Digital Transformation",
    date: "October 20, 2025",
    year: "2025",
    excerpt: "Strategic partnership to develop next-generation telemedicine and patient engagement platforms serving millions of patients.",
    category: "Partnership",
  },
  {
    id: 5,
    title: "Softurecs Crosses $100M in Cumulative Client Value Delivered",
    date: "September 10, 2025",
    year: "2025",
    excerpt: "A significant milestone reflecting our commitment to delivering measurable business value through technology solutions.",
    category: "Milestone",
  },
  {
    id: 6,
    title: "Softurecs Expands Team to 250+ Technology Experts",
    date: "August 5, 2025",
    year: "2025",
    excerpt: "Growing our team of skilled engineers, designers, and consultants to meet increasing demand for digital transformation services.",
    category: "Growth",
  },
  {
    id: 7,
    title: "Softurecs Launches Proprietary AI-Powered Development Framework",
    date: "July 15, 2025",
    year: "2025",
    excerpt: "Our new framework accelerates application development by 40% while maintaining enterprise-grade quality and security.",
    category: "Innovation",
  },
  {
    id: 8,
    title: "Softurecs Wins Best Digital Banking Solution Award at Fintech Summit",
    date: "June 20, 2025",
    year: "2025",
    excerpt: "Our FinVault digital banking platform recognized for innovation in AI-powered fraud detection and user experience.",
    category: "Awards",
  },
  {
    id: 9,
    title: "Softurecs Opens New Development Center to Serve Global Clients",
    date: "December 10, 2024",
    year: "2024",
    excerpt: "Expanding our global footprint with a new development center equipped with state-of-the-art infrastructure.",
    category: "Expansion",
  },
  {
    id: 10,
    title: "Softurecs Completes 1000th Successful Project Delivery",
    date: "October 25, 2024",
    year: "2024",
    excerpt: "A milestone achievement reflecting our consistent track record of successful project deliveries across industries.",
    category: "Milestone",
  },
];

const PressReleases = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredReleases = pressReleases.filter((release) => {
    return selectedYear === "All" || release.year === selectedYear;
  });

  return (
    <Layout>
      <SEO
        title="Press Releases | Softurecs AI Labs"
        description="Stay updated with the latest news, announcements, and achievements from Softurecs AI Labs."
        keywords="press releases, company news, software development news, tech announcements"
      />
      <PageHero
        title="Press Releases"
        description="Stay updated with our latest news, updates, and achievements."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Softurecs Insights', href: '/insights' },
          { label: 'Press Releases' }
        ]}
        icon={Newspaper}
        iconColor="from-pink-500 to-rose-500"
        badge="Press Releases"
        variant="centered"
      />

      {/* Filter */}
      <section className="py-6 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by year:</span>
            </div>
            <div className="flex gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedYear === year
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent/10"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Timeline */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-8">
              {filteredReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 mt-6 z-10 hidden md:block" />

                  {/* Date */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm md:justify-end">
                      <Calendar className="h-4 w-4" />
                      {release.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 ml-6 md:ml-0">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                        {release.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {release.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {filteredReleases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No press releases found for the selected year.</p>
            </div>
          )}
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary via-navy to-primary rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Media Inquiries
                </h2>
                <p className="text-white/80 mb-6">
                  For press inquiries, interview requests, or media resources, please contact our communications team.
                </p>
                <div className="space-y-2 text-white/90">
                  <p><strong>Email:</strong> media@softurecs.com</p>
                  <p><strong>Phone:</strong> +91 7396080902</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Contact Media Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PressReleases;
