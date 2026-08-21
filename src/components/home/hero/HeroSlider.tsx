import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, MessageSquare, Database, Layout, PieChart, Users, Phone, Send, BarChart3, Workflow, Building2, TrendingUp, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    badge: "AI-POWERED SOLUTIONS",
    title: { main: "AI Chatbots That Work", highlight: "24/7" },
    description: "Automate customer conversations, qualify leads and deliver intelligent support with AI-powered chatbots.",
    primaryCta: "Explore AI Solutions",
    secondaryCta: "Book a Free Consultation",
    link: "/services/ai-chatbot",
    colors: { badge: "bg-blue-500", gradient: "from-blue-600 via-violet-600 to-cyan-500", highlight: "from-cyan-400 to-blue-400" },
  },
  {
    id: 2,
    badge: "AI AUTOMATION",
    title: { main: "Automate Your Business", highlight: "With AI" },
    description: "Connect leads, conversations, follow-ups and business workflows with intelligent automation.",
    primaryCta: "Explore AI Automation",
    secondaryCta: "Book a Free Consultation",
    link: "/services/ai-automation",
    colors: { badge: "bg-violet-500", gradient: "from-violet-600 via-magenta-600 to-blue-600", highlight: "from-violet-400 to-magenta-400" },
  },
  {
    id: 3,
    badge: "REAL ESTATE CRM",
    title: { main: "Smarter CRM for", highlight: "Real Estate Growth" },
    description: "Manage properties, leads, agents, follow-ups and sales from one powerful CRM platform.",
    primaryCta: "Explore Real Estate CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/real-estate-crm",
    colors: { badge: "bg-teal-500", gradient: "from-blue-600 via-teal-600 to-violet-600", highlight: "from-teal-400 to-blue-400" },
  },
  {
    id: 4,
    badge: "WHATSAPP + META API",
    title: { main: "Turn Conversations", highlight: "Into Customers" },
    description: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.",
    primaryCta: "Explore WhatsApp CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/whatsapp-crm",
    colors: { badge: "bg-green-500", gradient: "from-green-600 via-cyan-600 to-blue-600", highlight: "from-green-400 to-cyan-400" },
  },
  {
    id: 5,
    badge: "ALL-IN-ONE CRM",
    title: { main: "One CRM.", highlight: "Your Entire Business." },
    description: "Bring sales, customer management, automation and business operations together in one powerful platform.",
    primaryCta: "Explore CRM Solutions",
    secondaryCta: "Book a Free Consultation",
    link: "/services/crm-solutions",
    colors: { badge: "bg-blue-500", gradient: "from-blue-600 via-purple-600 to-cyan-600", highlight: "from-blue-400 to-purple-400" },
  },
];

const FloatingCard = ({ icon: Icon, title, val, color, className }: any) => (
  <motion.div 
    className={`absolute bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-3 ${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <div className={`p-2 rounded-lg bg-${color}-500/20 text-${color}-400`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{title}</div>
      <div className="text-white font-bold">{val}</div>
    </div>
  </motion.div>
);

const VisualComposition = ({ type }: { type: number }) => {
  return (
    <motion.div 
      className="relative w-full max-w-lg aspect-square flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Main Dashboard Card */}
      <div className="relative z-10 w-[300px] h-[220px] bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-[10px] text-slate-400 font-bold uppercase">System Active</div>
        </div>
        <div className="h-full bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
           <Cpu className="w-12 h-12 text-slate-600" />
        </div>
      </div>

      {/* Floating Cards */}
      <FloatingCard icon={Bot} title="AI Assistant" val="Active" color="cyan" className="top-10 -left-10 w-48" />
      <FloatingCard icon={Workflow} title="Automation" val="98%" color="violet" className="bottom-10 -right-10 w-48" />
      <FloatingCard icon={TrendingUp} title="Analytics" val="+12.5%" color="blue" className="top-40 -right-20 w-40" />
      <FloatingCard icon={MessageSquare} title="WhatsApp" val="Live" color="green" className="-bottom-10 left-10 w-40" />
    </motion.div>
  );
};

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
      className="relative w-full overflow-hidden bg-[#050B1D] py-12 md:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-sm ${slides[currentSlide].colors.badge}`}
                >
                  {slides[currentSlide].badge}
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] max-w-2xl mx-auto lg:mx-0">
                  {slides[currentSlide].title.main}
                  <br />
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].colors.highlight}`}>
                    {slides[currentSlide].title.highlight}
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link to={slides[currentSlide].link} className="w-full sm:w-auto">
                    <Button size="lg" className={`w-full sm:w-auto bg-gradient-to-r ${slides[currentSlide].colors.gradient} hover:opacity-90 text-white rounded-xl h-14 px-8 font-bold text-base shadow-xl`}>
                      {slides[currentSlide].primaryCta} 
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 font-bold text-base backdrop-blur-sm">
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
                <VisualComposition type={slides[currentSlide].id} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Pagination */}
          <div className="absolute -bottom-10 lg:bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 flex gap-3 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentSlide === idx ? 'w-10 bg-white' : 'w-4 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
