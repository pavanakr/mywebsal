import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  'Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'Salesforce', 'Adobe', 'SAP'
];

export function TrustedBrands() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section ref={ref} className="py-16 bg-card border-y border-border/50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Trusted by Industry Leaders Worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 items-center"
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: 'hsl(var(--accent))' }}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/40 transition-colors cursor-pointer"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
