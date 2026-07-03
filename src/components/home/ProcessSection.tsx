import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket, Shield, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Discovery & Planning',
    description: 'We dive deep into understanding your business goals, challenges, and requirements to create a strategic roadmap.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our designers craft intuitive interfaces and experiences that align with your brand and user expectations.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Agile Development',
    description: 'Our engineers build robust solutions using modern technologies and agile methodologies for rapid delivery.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your software is secure, performant, and delivers a flawless user experience.',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Deployment & Launch',
    description: 'We handle seamless deployment and provide comprehensive training to ensure a successful launch.',
  },
  {
    icon: RefreshCw,
    number: '06',
    title: 'Support & Evolution',
    description: 'Ongoing maintenance and iterative improvements keep your software ahead of the curve.',
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-background overflow-hidden relative">
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35] bg-[linear-gradient(hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            A proven methodology for durable software
          </h2>
          <p className="text-lg text-muted-foreground">
            Six disciplined phases that combine strategic depth, engineering rigor, and transparent execution — from first workshop to long-horizon evolution.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div className="relative p-7 bg-card rounded-2xl border border-border/60 hover:border-accent/50 transition-all duration-300 hover:shadow-elevated overflow-hidden">
                  {/* Accent gradient wash on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Step index — architectural */}
                  <div className="absolute top-5 right-6 font-display text-5xl font-bold text-accent/[0.08] group-hover:text-accent/20 transition-colors">
                    {step.number}
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-primary-foreground text-accent transition-colors duration-300">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{step.description}</p>

                    {/* Bottom hairline */}
                    <div className="mt-6 h-px w-8 bg-accent/40 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
