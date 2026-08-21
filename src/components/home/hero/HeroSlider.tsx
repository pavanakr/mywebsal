import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, Building2, MessageSquare, Database, Users, CheckCircle2, Headphones, Layout, Smartphone, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "AI Chatbots & Smart Automation",
    subtitle: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
    cta: "Explore AI Solutions",
    link: "/services/ai-chatbot",
    badge: "AI-POWERED SOLUTIONS",
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    stats: [
      { label: "Happy Clients", value: "100+", icon: Users },
      { label: "Projects Delivered", value: "250+", icon: Database },
      { label: "Experience", value: "6+", icon: CheckCircle2 },
      { label: "Support", value: "24/7", icon: Headphones }
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920",
    alt: "AI Chatbot Interface"
  },
  {
    id: 2,
    title: "Real Estate CRM Built for Growth",
    subtitle: "Manage properties, leads, agents, follow-ups and sales from one intelligent platform.",
    cta: "Explore Real Estate CRM",
    link: "/solutions/real-estate-crm",
    badge: "PROPERTY TECH",
    gradient: "from-indigo-600 via-blue-700 to-slate-800",
    stats: [
      { label: "Property Managed", value: "10k+", icon: Building2 },
      { label: "Lead Conversion", value: "+45%", icon: Users },
      { label: "ROI Growth", value: "3x", icon: Zap },
      { label: "Global Reach", value: "50+", icon: Database }
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
    alt: "Real Estate CRM Dashboard"
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
      className="relative w-full bg-[#0A0F1E] pt-24 md:pt-32 pb-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Neural Mesh / Abstract Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Hero Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] border border-white/5 shadow-2xl min-h-[600px] flex items-center">
          
          {/* Transitioning Background Gradients */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} mix-blend-overlay`}
            />
          </AnimatePresence>

          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 w-full">
            
            {/* Content Side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Bot className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">{slides[currentSlide].badge}</span>
                </div>
                
                <h1 className="text-4xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                  {currentSlide === 0 ? (
                    <>AI Chatbots & <br /><span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Smart Automation</span></>
                  ) : (
                    slides[currentSlide].title
                  )}
                </h1>
                
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to={slides[currentSlide].link}>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl h-14 px-8 text-lg font-bold shadow-lg shadow-blue-500/20 group">
                      {slides[currentSlide].cta} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 text-lg backdrop-blur-sm transition-all">
                      Book a Free Consultation
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                  {slides[currentSlide].stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-white font-bold text-2xl">
                        <stat.icon className="w-4 h-4 text-blue-400" />
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual Side (Mockups) */}
            <div className="relative h-[450px] lg:h-[550px] hidden md:flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: -10 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Floating AI Robot (Simulated for design) */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20"
                  >
                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/5">
                      <Bot className="w-32 h-32 md:w-48 md:h-48 text-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                    </div>
                  </motion.div>

                  {/* UI Panels / Dashboards (Simulated) */}
                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 z-30 bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl w-64 md:w-72"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-white uppercase tracking-widest">AI Active</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                      <div className="h-10 w-full bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                        <div className="h-1.5 w-20 bg-blue-400/50 rounded-full" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 left-0 z-30 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl w-64"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="h-2 w-24 bg-white/20 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>Automation Rate</span>
                        <span>86%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[86%]" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-0 right-0 px-8 md:px-16 flex items-center justify-between z-40">
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentSlide === idx ? 'w-10 bg-blue-500' : 'w-4 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Below Slider Service Cards - 100% Match Reference Design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {[
                { title: "Real Estate CRM", icon: Building2, color: "text-blue-600", bg: "bg-blue-50/50", href: "/solutions/real-estate-crm", desc: "Manage properties, leads, agents and sales effortlessly." },
                { title: "All-in-One CRM", icon: Database, color: "text-green-600", bg: "bg-green-50/50", href: "/services/crm-solutions", desc: "One platform for sales, marketing, support and automation." },
                { title: "WhatsApp CRM", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50/50", href: "/solutions/whatsapp-crm", desc: "Manage WhatsApp conversations, automate replies and leads." },
                { title: "AI Chatbots", icon: Bot, color: "text-orange-600", bg: "bg-orange-50/50", href: "/services/ai-chatbot", desc: "Intelligent chatbots for 24/7 support, lead gen and engagement." },
                { title: "AI Automations", icon: Zap, color: "text-blue-500", bg: "bg-sky-50/50", href: "/services/ai-automation", desc: "Automate workflows, save time and boost productivity." },
                { title: "Custom Software", icon: Code, color: "text-pink-600", bg: "bg-pink-50/50", href: "/services/custom-software", desc: "Tailored web, mobile & SaaS solutions built for your needs." },
            ].map((card, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                >
                  <Link 
                    to={card.href}
                    className="group h-full bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all flex flex-col items-start"
                  >
                    <div className={`w-12 h-12 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{card.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-grow">
                      {card.desc}
                    </p>
                    <span className={`${card.color} text-[10px] font-bold flex items-center uppercase tracking-widest group-hover:gap-2 transition-all`}>
                      Explore <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
