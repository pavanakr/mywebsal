import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, Building2, MessageSquare, Database, CheckCircle2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    badge: "AI-POWERED SOLUTIONS",
    title: "AI Chatbots That Work 24/7",
    description: "Automate customer conversations, qualify leads and deliver intelligent support with AI-powered chatbots.",
    primaryCta: "Explore AI Solutions",
    secondaryCta: "Book a Free Consultation",
    link: "/services/ai-chatbot",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    badge: "AI AUTOMATION",
    title: "Automate Your Business With AI",
    description: "Connect leads, conversations, follow-ups and business workflows with intelligent automation.",
    primaryCta: "Explore AI Automation",
    secondaryCta: "Book a Free Consultation",
    link: "/services/ai-automation",
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    id: 3,
    badge: "REAL ESTATE CRM",
    title: "Smarter CRM for Real Estate Growth",
    description: "Manage properties, leads, agents, follow-ups and sales from one powerful CRM platform.",
    primaryCta: "Explore Real Estate CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/real-estate-crm",
    gradient: "from-blue-600 to-teal-600",
  },
  {
    id: 4,
    badge: "WHATSAPP + META API",
    title: "Turn Conversations Into Customers",
    description: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.",
    primaryCta: "Explore WhatsApp CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/whatsapp-crm",
    gradient: "from-green-600 to-cyan-600",
  },
  {
    id: 5,
    badge: "ALL-IN-ONE CRM",
    title: "One CRM. Your Entire Business.",
    description: "Bring sales, customer management, automation and business operations together in one powerful platform.",
    primaryCta: "Explore CRM Solutions",
    secondaryCta: "Book a Free Consultation",
    link: "/services/crm-solutions",
    gradient: "from-blue-600 to-purple-600",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0F1B3D] pt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom relative z-10 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A0F1E] border border-white/10 shadow-2xl min-h-[560px] flex items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Content Side */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                  {slides[currentSlide].badge}
                </motion.div>
                
                {currentSlide === 0 ? (
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                ) : (
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                )}
                
                <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to={slides[currentSlide].link}>
                    <Button size="lg" className="bg-[#3b6fa0] hover:bg-[#3b6fa0]/90 text-white rounded-xl h-14 px-8 font-bold">
                      {slides[currentSlide].primaryCta} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 font-bold">
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm p-6">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl animate-pulse" />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-white/50 text-center gap-4">
                        <Bot className="w-24 h-24" />
                        <span className="font-semibold">{slides[currentSlide].badge} Interface</span>
                    </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentSlide === idx ? 'w-8 bg-[#3b6fa0]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-8 right-8 flex gap-4">
            <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10"><ChevronLeft className="w-6 h-6" /></button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10"><ChevronRight className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
