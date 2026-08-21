import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, MessageSquare, Database, Layout, ShieldCheck, PieChart, Users, Phone, Send, BarChart3, Workflow } from 'lucide-react';
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
    color: "cyan",
  },
  {
    id: 2,
    badge: "AI AUTOMATION",
    title: "Automate Your Business With AI",
    description: "Connect leads, conversations, follow-ups and business workflows with intelligent automation.",
    primaryCta: "Explore AI Automation",
    secondaryCta: "Book a Free Consultation",
    link: "/services/ai-automation",
    color: "violet",
  },
  {
    id: 3,
    badge: "REAL ESTATE CRM",
    title: "Smarter CRM for Real Estate Growth",
    description: "Manage properties, leads, agents, follow-ups and sales from one powerful CRM platform.",
    primaryCta: "Explore Real Estate CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/real-estate-crm",
    color: "teal",
  },
  {
    id: 4,
    badge: "WHATSAPP + META API",
    title: "Turn Conversations Into Customers",
    description: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.",
    primaryCta: "Explore WhatsApp CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/whatsapp-crm",
    color: "green",
  },
  {
    id: 5,
    badge: "ALL-IN-ONE CRM",
    title: "One CRM. Your Entire Business.",
    description: "Bring sales, customer management, automation and business operations together in one powerful platform.",
    primaryCta: "Explore CRM Solutions",
    secondaryCta: "Book a Free Consultation",
    link: "/services/crm-solutions",
    color: "blue",
  },
];

const VisualComponent = ({ type }: { type: number }) => {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  if (type === 1) { // AI Chatbots
    return (
      <motion.div variants={containerVariants} className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-white font-medium">AI Assistant</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-amber-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0" />
            <div className="bg-slate-800/80 rounded-2xl rounded-tl-none p-3 text-sm text-slate-300 max-w-[80%]">
              Hello! How can I help you today?
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <div className="bg-cyan-600 rounded-2xl rounded-tr-none p-3 text-sm text-white max-w-[80%]">
              I'm looking for a CRM solution.
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="bg-slate-800/80 rounded-2xl rounded-tl-none p-3 text-sm text-slate-300 max-w-[80%]">
              Great! We have specialized CRMs for Real Estate and Business Automation. What industry are you in?
            </div>
          </div>
        </div>
        <motion.div 
          className="absolute bottom-6 right-6 bg-slate-800 border border-white/10 rounded-xl p-4 shadow-xl w-48"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Lead Status</span>
          </div>
          <div className="text-white font-bold text-lg">Qualified</div>
          <div className="h-1.5 w-full bg-slate-700 rounded-full mt-2 overflow-hidden">
            <div className="h-full w-[85%] bg-cyan-500" />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (type === 2) { // Automation
    return (
      <motion.div variants={containerVariants} className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl p-8 shadow-2xl flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-6 w-full max-w-[280px] relative z-10">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-4 flex items-center gap-4 relative">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-bold">Inbound</div>
              <div className="text-white font-medium text-sm">Lead Capture</div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-px bg-slate-700" />
          </div>
          
          <div className="bg-slate-800 border border-white/10 rounded-xl p-4 flex items-center gap-4 relative">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
              <Workflow className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-bold">Processing</div>
              <div className="text-white font-medium text-sm">AI Engine</div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-px bg-slate-700" />
          </div>

          <div className="bg-slate-800 border border-white/10 rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-bold">Storage</div>
              <div className="text-white font-medium text-sm">CRM Update</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
          <div className="w-full h-full border-[20px] border-violet-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>
      </motion.div>
    );
  }

  if (type === 3) { // Real Estate CRM
    return (
      <motion.div variants={containerVariants} className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-white font-bold flex items-center gap-2">
            <Building2 className="w-5 h-5 text-teal-400" />
            Property Pipeline
          </h4>
          <div className="flex items-center gap-4">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Sales: <span className="text-teal-400">$2.4M</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Luxury Villa", price: "$850k", status: "Negotiation", img: "teal" },
            { name: "Downtown Office", price: "$1.2M", status: "Closing", img: "indigo" },
            { name: "Skyline Apt", price: "$420k", status: "Interested", img: "blue" },
            { name: "Garden Estate", price: "$680k", status: "Viewing", img: "purple" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-white/5 rounded-xl p-3">
              <div className={`w-full h-20 rounded-lg bg-${item.img}-500/20 mb-3 flex items-center justify-center`}>
                <Building2 className={`w-8 h-8 text-${item.img}-400/50`} />
              </div>
              <div className="text-white font-bold text-xs mb-1">{item.name}</div>
              <div className="flex justify-between items-center">
                <span className="text-teal-400 font-bold text-[10px]">{item.price}</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-slate-700 text-slate-300 font-medium">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (type === 4) { // WhatsApp + Meta API
    return (
      <motion.div variants={containerVariants} className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl p-6 shadow-2xl flex items-center justify-center">
        <div className="relative">
          <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-8 rounded-full animate-pulse">
            <div className="bg-[#25D366]/20 border border-[#25D366]/40 p-8 rounded-full">
              <Phone className="w-16 h-16 text-[#25D366]" />
            </div>
          </div>
          
          <motion.div 
            className="absolute -top-12 -right-12 bg-slate-800 border border-white/10 rounded-2xl p-4 shadow-2xl w-56"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">WhatsApp API</div>
                <div className="text-white text-xs font-medium">New Lead Received</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 italic">"I'd like to book a demo for next Monday..."</div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-8 -left-16 bg-slate-800 border border-white/10 rounded-2xl p-4 shadow-2xl w-48"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] text-slate-400 font-bold uppercase">Auto-Response</span>
            </div>
            <div className="text-white text-xs font-medium italic">Sent: "Meeting confirmed!"</div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (type === 5) { // All-in-One CRM
    return (
      <motion.div variants={containerVariants} className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Layout className="w-5 h-5 text-blue-400" />
            <span className="text-white font-bold">Master Dashboard</span>
          </div>
          <div className="flex gap-4">
             <div className="h-4 w-12 rounded bg-slate-800 animate-pulse" />
             <div className="h-4 w-12 rounded bg-slate-800 animate-pulse" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Leads", val: "1,284", color: "blue" },
            { label: "Revenue", val: "$48k", color: "violet" },
            { label: "Growth", val: "+12%", color: "cyan" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800/40 rounded-xl p-3 border border-white/5">
              <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">{stat.label}</div>
              <div className="text-white font-bold text-lg">{stat.val}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/40 rounded-xl p-4 border border-white/5 h-32 relative">
          <div className="flex items-end justify-between h-full gap-2">
            {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div 
                key={i} 
                className="w-full bg-blue-500/30 border-t-2 border-blue-400 rounded-t-sm" 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + (i * 0.1) }}
              />
            ))}
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] text-slate-400 font-bold uppercase">Performance Trend</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
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
      className="relative w-full overflow-hidden bg-[#0F1B3D] py-12 md:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Content Side (Left) */}
              <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
                >
                  <span className={`w-2 h-2 rounded-full bg-${slides[currentSlide].color}-500 animate-pulse`} />
                  {slides[currentSlide].badge}
                </motion.div>
                
                <div className="space-y-4">
                  {currentSlide === 0 ? (
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.15] max-w-2xl mx-auto lg:mx-0">
                      {slides[currentSlide].title}
                    </h1>
                  ) : (
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.15] max-w-2xl mx-auto lg:mx-0">
                      {slides[currentSlide].title}
                    </h2>
                  )}
                  
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {slides[currentSlide].description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link to={slides[currentSlide].link} className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-[#3b6fa0] hover:bg-[#3b6fa0]/90 text-white rounded-xl h-12 md:h-14 px-8 font-bold text-sm md:text-base group transition-all duration-300 shadow-lg shadow-blue-900/20">
                      {slides[currentSlide].primaryCta} 
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 rounded-xl h-12 md:h-14 px-8 font-bold text-sm md:text-base backdrop-blur-sm">
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-white/5">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F1B3D] bg-slate-800" />
                     ))}
                   </div>
                   <div className="text-[10px] md:text-xs text-slate-500 font-medium">
                     Trusted by <span className="text-white font-bold">500+ Companies</span> globally
                   </div>
                </div>
              </div>

              {/* Visual Side (Right) */}
              <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
                <VisualComponent type={slides[currentSlide].id} />
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
                  currentSlide === idx ? 'w-10 bg-[#3b6fa0]' : 'w-4 bg-white/10 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between pointer-events-none z-20">
            <button 
              onClick={prevSlide} 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md pointer-events-auto transition-all -translate-x-6 hover:translate-x-0"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md pointer-events-auto transition-all translate-x-6 hover:translate-x-0"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
