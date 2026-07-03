import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="bg-gradient-to-r from-primary via-navy to-primary text-primary-foreground relative z-[60]"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline text-primary-foreground/90">
              Share Your Project Idea & Receive App Development Quote Instantly!
            </span>
            <span className="sm:hidden text-primary-foreground/90">
              Get Your Free Quote Today!
            </span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-[11px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 h-auto rounded-full whitespace-nowrap"
              >
                <span className="sm:hidden">Free Quote</span>
                <span className="hidden sm:inline">Book a Free Consultation</span>
              </Button>
            </Link>
            
            <div className="hidden md:flex items-center gap-4 border-l border-primary-foreground/20 pl-4">
              <a 
                href="tel:+917396080902" 
                className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">+91 7396080902</span>
              </a>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-primary-foreground/10 rounded transition-colors ml-2"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4 text-primary-foreground/60 hover:text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
