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
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proven Development Methodology
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach that ensures quality, transparency, and timely delivery at every stage of your project.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-soft">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-colors">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
