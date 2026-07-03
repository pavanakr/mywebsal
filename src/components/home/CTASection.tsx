import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-accent to-cyan-light relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-40 h-40 border border-primary rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-60 h-60 border border-primary rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-primary/80 mb-8"
          >
            Let's discuss how we can help you build innovative software solutions that drive growth and create lasting impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 group">
                <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Start a Conversation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 group"
            >
              <Calendar className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
