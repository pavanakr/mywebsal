import { motion } from 'framer-motion';

const brands = [
  'Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'Salesforce', 'Adobe', 'SAP'
];

export function TrustedBrands() {
  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
