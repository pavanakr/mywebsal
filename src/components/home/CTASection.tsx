import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-cyan-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-0 right-0 w-60 h-60 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Let's discuss how we can help you build innovative software solutions that drive growth and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                <MessageCircle className="mr-2 w-5 h-5" />
                Start a Conversation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
