import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Real Estate CRM for Smarter Sales",
    subtitle: "Manage leads, properties, agents, follow-ups and customer conversations from one powerful CRM platform.",
    cta: "Explore Real Estate CRM",
    link: "/solutions/real-estate-crm",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
    alt: "Premium modern real-estate technology scene showing property listings and CRM analytics",
    isH1: true
  },
  {
    id: 2,
    title: "One CRM. Your Entire Business.",
    subtitle: "Bring sales, leads, customer communication, automation and business operations together in one platform.",
    cta: "Explore CRM Solutions",
    link: "/services/crm-solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    alt: "Modern SaaS CRM dashboard with analytics and sales pipeline"
  },
  {
    id: 3,
    title: "Turn WhatsApp Conversations Into Sales",
    subtitle: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation efficiently.",
    cta: "Explore WhatsApp CRM",
    link: "/solutions/whatsapp-crm",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1920",
    alt: "WhatsApp business automation concept combined with CRM messaging"
  },
  {
    id: 4,
    title: "AI That Works For Your Business",
    subtitle: "Automate customer support, lead qualification, conversations and repetitive business processes with AI.",
    cta: "Explore AI Solutions",
    link: "/services/ai-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920",
    alt: "Futuristic professional AI chatbot interface and automation workflows"
  },
  {
    id: 5,
    title: "Build Powerful Digital Products",
    subtitle: "Custom software, SaaS platforms, web applications and mobile solutions built around your business requirements.",
    cta: "Start Your Project",
    link: "/services/custom-software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920",
    alt: "Premium software development workspace showing web and mobile applications"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative w-full h-[85vh] md:h-[90vh] lg:h-[92vh] overflow-hidden bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero slider showcasing our services"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Slide Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            {/* Overlay Gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent md:from-primary/95 md:via-primary/60 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="container-custom relative z-10 h-full flex flex-col justify-center items-start">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                  Softurecs AI Labs
                </span>
              </div>
              
              {slides[currentSlide].isH1 ? (
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-primary-foreground leading-[1.1] mb-6 drop-shadow-sm">
                  {slides[currentSlide].title}
                </h1>
              ) : (
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-primary-foreground leading-[1.1] mb-6 drop-shadow-sm">
                  {slides[currentSlide].title}
                </h2>
              )}

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed font-light">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={slides[currentSlide].link}>
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg group shadow-xl"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
                  >
                    Contact Experts
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 container-custom flex items-center justify-between">
        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSlide === idx ? 'w-8 bg-accent' : 'w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentSlide === idx ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none z-10 overflow-hidden hidden lg:block">
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
