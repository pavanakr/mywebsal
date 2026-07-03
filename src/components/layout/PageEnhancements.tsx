import { motion } from 'framer-motion';
import {
  TrendingUp, Users, Clock, Award, Rocket, ShieldCheck, Sparkles,
  HeartHandshake, Globe2, Layers, HelpCircle, Plus, Minus,
} from 'lucide-react';
import { useState } from 'react';

interface PageEnhancementsProps {
  /** Title of the service or industry — used to compose contextual copy. */
  title: string;
  /** Domain label: "service" | "industry" — used in copy. */
  kind?: 'service' | 'industry';
  /** Optional short list to power "What You Get" cards (falls back to defaults). */
  highlights?: string[];
}

const impactStats = [
  { icon: TrendingUp, value: '3.2x', label: 'Average ROI Delivered', color: 'text-emerald-600 dark:text-accent' },
  { icon: Clock, value: '45%', label: 'Faster Time to Market', color: 'text-amber-500 dark:text-amber-300' },
  { icon: Users, value: '250+', label: 'Certified Engineers', color: 'text-emerald-600 dark:text-accent' },
  { icon: Award, value: '15+', label: 'Industry Awards', color: 'text-amber-500 dark:text-amber-300' },
];

const differentiators = [
  {
    icon: Rocket,
    title: 'Ship in Weeks',
    desc: 'Agile squads and reusable accelerators cut delivery cycles by up to 45%.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc: 'SOC 2, ISO 27001 aligned processes and secure-by-design architectures.',
  },
  {
    icon: Sparkles,
    title: 'AI-First Engineering',
    desc: 'Every solution is augmented with intelligent automation and analytics.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Partnership',
    desc: 'A named delivery lead and transparent weekly reporting from day one.',
  },
  {
    icon: Globe2,
    title: 'Global Delivery',
    desc: 'Clients across 15+ countries with follow-the-sun engineering models.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Expertise',
    desc: 'From strategy and UX to cloud, DevOps, and post-launch optimisation.',
  },
];

export function PageEnhancements({ title, kind = 'service', highlights }: PageEnhancementsProps) {
  const label = kind === 'service' ? 'service' : 'industry solutions';
  const faqs = [
    {
      q: `How long does a typical ${title} engagement take?`,
      a: `Most ${title} engagements move from discovery to production in 8–16 weeks. We break work into two-week sprints so you see working software early and can steer scope based on real feedback.`,
    },
    {
      q: `What does the engagement model look like?`,
      a: `You get a dedicated squad — product manager, tech lead, engineers, QA, and designers — plus a named delivery partner. We integrate into your tooling (Jira, Slack, GitHub) and share transparent weekly reporting.`,
    },
    {
      q: `How do you ensure quality and security?`,
      a: `Every project ships through code review, automated testing, CI/CD, and security scanning. Our processes are aligned to SOC 2 and ISO 27001, and we can sign NDAs and DPAs before kickoff.`,
    },
    {
      q: `Can you work with our existing team or vendors?`,
      a: `Yes. We regularly plug into in-house squads, augment specific capabilities, or take end-to-end ownership. Onboarding usually takes under a week.`,
    },
    {
      q: `What happens after launch?`,
      a: `We offer 24/7 support, SLA-backed maintenance, and continuous improvement retainers. Around 80% of our clients partner with us for post-launch evolution.`,
    },
  ];

  return (
    <>
      {/* Impact Stats */}
      <section className="py-14 md:py-16 bg-gradient-to-br from-primary via-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-5 md:p-6 text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-xl bg-accent/15 flex items-center justify-center mb-3">
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Softurecs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A partner engineered for outcomes, not deliverables
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Our {title} {label} combine deep domain expertise, AI-first engineering,
              and enterprise-grade delivery to help you launch with confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border/60 bg-card p-6 hover:border-accent/40 hover:shadow-elevated transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent to-cyan-light opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-cyan-light/20 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>

          {highlights && highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5 }}
              className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {highlights.slice(0, 6).map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/60 border border-border/40"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" /> FAQs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Answers to common {title} questions
            </h2>
            <p className="text-muted-foreground">
              Everything teams typically ask before starting a project with us.
            </p>
          </motion.div>

          <FAQList items={faqs} />
        </div>
      </section>
    </>
  );
}

function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-2xl bg-card border border-border/60 overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 hover:bg-secondary/40 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-foreground text-base md:text-lg">
                {item.q}
              </span>
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="px-5 md:px-6 pb-5 text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
