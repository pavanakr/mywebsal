import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  { icon: Sparkles, label: 'AI-First Engineering' },
  { icon: ShieldCheck, label: 'Enterprise-Grade Security' },
  { icon: Zap, label: 'Ship in Weeks, Not Quarters' },
];

const proofStats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '15+', label: 'Countries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

export function HeroSection() {
  return (
    <section className="relative flex items-center bg-primary overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24 lg:min-h-[92vh] lg:pt-36">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-navy-light/30 blur-[120px]" />
        <div className="absolute -bottom-[5%] -left-[5%] w-[420px] h-[420px] rounded-full bg-accent/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-7 text-center lg:text-left"
          >
            <div className="inline-flex mx-auto lg:mx-0 items-center gap-3 bg-navy-light/30 border border-accent/30 px-4 py-2 rounded-full w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/85">
                Leading the AI Revolution
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-primary-foreground leading-[1.05] tracking-tight">
              Architecting the{' '}
              <span className="text-accent">Intelligence</span> of Tomorrow
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              SOFTURECS AI Labs engineers high-performance custom software and
              enterprise-grade AI ecosystems that turn complex data into
              decisive competitive advantage.
            </p>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-xs md:text-sm text-primary-foreground/70"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-accent hover:text-primary-foreground font-bold px-8 shadow-2xl shadow-primary/50 group"
                >
                  Start Transformation
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-accent/40 bg-transparent text-primary-foreground hover:bg-navy-light/40 hover:text-primary-foreground font-semibold px-8"
                >
                  <Play className="mr-1 w-4 h-4" />
                  View Enterprise Portfolio
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 md:gap-8 mt-6 border-t border-navy-light pt-8 justify-center lg:justify-start">
              {proofStats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 md:gap-8">
                  <div className="flex flex-col">
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                      {s.value}
                    </span>
                    <span className="text-[10px] md:text-xs text-accent uppercase tracking-wider font-bold mt-1">
                      {s.label}
                    </span>
                  </div>
                  {i < proofStats.length - 1 && (
                    <div className="w-px h-10 bg-navy-light" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-5 relative justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Glass tilted backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light/40 to-transparent backdrop-blur-3xl rounded-3xl border border-primary-foreground/10 rotate-3 z-0" />

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-4/5 h-4/5">
                  {/* Neural mesh panel */}
                  <div className="absolute inset-0 rounded-2xl border border-accent/30 overflow-hidden bg-primary/80">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background:
                          'linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px), linear-gradient(hsl(var(--accent)) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Glowing orb */}
                    <motion.div
                      animate={{ opacity: [0.35, 0.6, 0.35] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent rounded-full blur-[60px]"
                    />

                    <div className="absolute top-6 left-6 right-6 flex flex-col gap-3">
                      <div className="h-3 w-1/2 bg-navy-light rounded" />
                      <div className="h-2 w-full bg-navy-light/50 rounded" />
                      <div className="h-2 w-3/4 bg-navy-light/50 rounded" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="p-4 rounded-xl bg-primary border border-accent/50 shadow-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-primary-foreground rotate-45" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="h-2 w-16 bg-primary-foreground/40 rounded" />
                            <div className="h-2 w-24 bg-primary-foreground/20 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating accent — top right */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -right-4 p-4 rounded-xl bg-primary-foreground text-primary shadow-2xl z-20"
                  >
                    <Sparkles className="h-6 w-6" />
                  </motion.div>

                  {/* Floating accent — bottom left */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute -bottom-8 -left-8 p-4 rounded-xl bg-navy-light border border-accent text-primary-foreground shadow-2xl z-20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] uppercase font-bold tracking-tight">
                        Model: Stable_v4.0
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
