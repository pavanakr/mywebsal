import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  'Microsoft', 'Google', 'AWS', 'IBM', 'Oracle', 'Salesforce',
  'Adobe', 'SAP', 'NVIDIA', 'OpenAI', 'Meta', 'Cisco',
];

export function TrustedBrands() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  return (
    <section
      ref={ref}
      className="py-12 md:py-14 bg-card border-y border-border/50 overflow-hidden"
    >
      <div className="container-custom">
        <motion.div style={{ opacity, y }} className="text-center mb-8">
          <p className="text-muted-foreground text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
            Trusted by Industry Leaders Worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            className="flex gap-14 md:gap-20 items-center w-max"
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.08, color: 'hsl(var(--accent))' }}
                className="flex-shrink-0 font-display text-xl md:text-2xl font-bold text-muted-foreground/50 tracking-tight cursor-pointer transition-colors"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
