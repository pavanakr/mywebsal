import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '15+', label: 'Countries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

const highlights = [
  { icon: Sparkles, label: 'AI-First Engineering' },
  { icon: ShieldCheck, label: 'Enterprise-Grade Security' },
  { icon: Zap, label: 'Ship in Weeks, Not Quarters' },
];

export function HeroSection() {
  return (
    <section className="relative flex items-center bg-gradient-to-br from-primary via-navy to-navy-light overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:min-h-[92vh] lg:pt-36 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-light/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary-foreground/5 rounded-full" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-accent/30 mb-5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs md:text-sm text-primary-foreground/85 font-medium tracking-wide">
                Trusted by Leading Enterprises
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-bold text-primary-foreground leading-[1.05] mb-5 tracking-tight"
            >
              AI-Driven Software{' '}
              <span className="bg-gradient-to-r from-accent via-cyan-light to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Built for Modern Enterprises
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg text-primary-foreground/70 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              SOFTURECS AI LABS engineers intelligent automation, custom software,
              and next-generation digital platforms — from strategy to launch.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-7 justify-center lg:justify-start"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-xs md:text-sm text-primary-foreground/70"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  {label}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-glow group"
                >
                  Talk to Experts
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground font-semibold px-8 backdrop-blur-sm"
                >
                  <Play className="mr-1 w-4 h-4" />
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-6 md:gap-8 mt-8 pt-8 border-t border-primary-foreground/10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-primary-foreground/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dashed border-accent/25"
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-4 glass-card rounded-2xl p-4 shadow-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div className="text-sm font-semibold text-foreground">AI Powered</div>
                <div className="text-xs text-muted-foreground">Smart Automation</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 left-10 glass-card rounded-2xl p-4 shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 right-2 glass-card rounded-2xl p-4 shadow-glow w-44"
              >
                <div className="w-full h-14 bg-gradient-to-r from-accent/25 to-cyan-light/25 rounded-lg mb-3" />
                <div className="flex gap-2">
                  <div className="h-2 w-12 bg-accent rounded-full" />
                  <div className="h-2 w-8 bg-muted rounded-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 22, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="absolute bottom-6 right-6 glass-card rounded-2xl p-4 shadow-glow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Live Dashboard</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {[18, 30, 12, 26, 20, 34, 16, 28].map((h, i) => (
                    <div
                      key={i}
                      className="w-4 bg-accent/30 rounded"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
