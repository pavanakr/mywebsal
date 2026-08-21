import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, Building2, MessageSquare, Database, Users, CheckCircle2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "AI Chatbots That Work 24/7",
    subtitle: "Automate conversations, qualify leads, support customers and turn interactions into business opportunities.",
    cta: "Explore AI Solutions",
    link: "/services/ai-chatbot",
    badge: "AI-Powered Solutions",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    stats: [
      { label: "Happy Clients", value: "100+", icon: Users },
      { label: "Projects Delivered", value: "250+", icon: Database },
      { label: "Experience", value: "6+", icon: CheckCircle2 },
      { label: "Support", value: "24/7", icon: Headphones }
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920",
    alt: "Modern AI chatbot interface, friendly AI assistant, chat conversations, customer support and analytics",
    isH1: true
  },
  {
    id: 2,
    title: "Automate Your Business With AI",
    subtitle: "Connect leads, conversations, follow-ups and business workflows with intelligent AI automation.",
    cta: "Explore AI Automation",
    link: "/services/ai-automation",
    badge: "Intelligent Workflows",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    stats: [
      { label: "Efficiency Boost", value: "85%", icon: Zap },
      { label: "Cost Saved", value: "40%", icon: Database },
      { label: "Accuracy", value: "99%", icon: CheckCircle2 },
      { label: "Uptime", value: "99.9%", icon: Bot }
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920",
    alt: "AI automation workflow with connected nodes such as Lead Capture, AI Processing, Smart Response, Lead Qualification and CRM"
  },
  {
    id: 3,
    title: "Real Estate CRM Built for Growth",
    subtitle: "Manage properties, leads, agents, follow-ups and sales from one intelligent platform.",
    cta: "Explore Real Estate CRM",
    link: "/solutions/real-estate-crm",
    badge: "Property Tech",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    stats: [
      { label: "Property Managed", value: "10k+", icon: Building2 },
      { label: "Lead Conversion", value: "+45%", icon: Users },
      { label: "ROI Growth", value: "3x", icon: Zap },
      { label: "Global Reach", value: "50+", icon: Database }
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
    alt: "Premium real-estate CRM dashboard with properties, leads, sales pipeline, analytics and agent management"
  },
  {
    id: 4,
    title: "Turn WhatsApp Conversations Into Sales",
    subtitle: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.",
    cta: "Explore WhatsApp CRM",
    link: "/solutions/whatsapp-crm",
    badge: "Omnichannel Growth",
    gradient: "from-green-500 via-emerald-600 to-blue-600",
    stats: [
      { label: "Open Rate", value: "98%", icon: MessageSquare },
      { label: "Response Time", value: "<1m", icon: Bot },
      { label: "Sales Boost", value: "60%", icon: Zap },
      { label: "Meta Verified", value: "API", icon: CheckCircle2 }
    ],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1920",
    alt: "WhatsApp conversations connected to CRM, automated replies, lead management and analytics"
  },
  {
    id: 5,
    title: "One CRM. Your Entire Business.",
    subtitle: "Bring sales, marketing, customer support, automation and business operations together in one powerful platform.",
    cta: "Explore CRM Solutions",
    link: "/services/crm-solutions",
    badge: "Enterprise Ecosystem",
    gradient: "from-indigo-600 via-blue-700 to-slate-800",
    stats: [
      { label: "Scalability", value: "Unlimited", icon: Database },
      { label: "Integration", value: "100+", icon: Zap },
      { label: "Data Security", value: "ISO", icon: CheckCircle2 },
      { label: "Cloud Native", value: "SaaS", icon: Building2 }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    alt: "Modern SaaS CRM dashboard with sales pipeline, analytics, automation and customer management"
  }
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
      className="relative w-full h-[90vh] md:h-[95vh] lg:h-screen overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero slider showcasing our AI and CRM services"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Parallax-like overlay */}
          <div className="absolute inset-0 z-0">
            <motion.img
              key={`img-${currentSlide}`}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            {/* Multi-layered Gradients for Premium Feel */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-20 z-10 mix-blend-overlay`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            
            {/* Abstract Tech Patterns */}
            <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          {/* Slide Content */}
          <div className="container-custom relative z-20 h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg"
                >
                  <Bot className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>
                
                {slides[currentSlide].isH1 ? (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-tight mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {slides[currentSlide].title}
                  </h1>
                ) : (
                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-tight mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {slides[currentSlide].title}
                  </h2>
                )}

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <Link to={slides[currentSlide].link}>
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-7 text-lg group shadow-[0_0_20px_rgba(37,99,235,0.4)] rounded-xl"
                    >
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-7 text-lg backdrop-blur-sm rounded-xl"
                    >
                      Book a Free Consultation
                    </Button>
                  </Link>
                </motion.div>

                {/* Micro Stats/Features */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
                >
                  {slides[currentSlide].stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-blue-400">
                        <stat.icon className="w-4 h-4" />
                        <span className="text-lg font-bold text-white">{stat.value}</span>
                      </div>
                      <span className="text-xs text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Decorative Dashboard Panels for Desktop */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 10 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hidden lg:block relative"
              >
                <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 shadow-2xl overflow-hidden aspect-video group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <img 
                    src={slides[currentSlide].image} 
                    alt="Dashboard Preview" 
                    className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl w-48"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="h-2 w-20 bg-white/20 rounded-full" />
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                  </motion.div>
                </div>
                
                {/* Secondary Floating Panel */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 z-20 bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl w-64"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">AI Active</div>
                      <div className="text-[10px] text-blue-400 uppercase tracking-widest">System Processing</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["30%", "80%", "30%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                    <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                  </div>
                </motion.div>
                
                {/* Glow Effects */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 container-custom flex items-center justify-between">
        {/* Pagination Dots */}
        <div className="flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="group relative py-4"
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentSlide === idx ? 'true' : 'false'}
            >
              <div className={`h-1 transition-all duration-500 rounded-full shadow-lg ${
                currentSlide === idx 
                  ? 'w-12 bg-blue-500' 
                  : 'w-6 bg-white/20 group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center shadow-xl group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center shadow-xl group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}