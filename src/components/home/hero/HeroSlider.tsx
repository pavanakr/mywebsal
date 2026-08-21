import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, MessageSquare, Database, Layout, PieChart, Users, Phone, Send, BarChart3, Workflow, Building2, TrendingUp, Cpu, Globe, Rocket } from 'lucide-react';
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
    colors: { 
      badge: "bg-blue-500", 
      gradient: "from-blue-600 via-violet-600 to-cyan-500", 
      highlight: "from-cyan-400 to-blue-400",
      bgGlow: "from-blue-900/40 via-violet-900/20 to-transparent"
    },
    visual: {
      title: "AI Core",
      stats: [
        { label: "Uptime", val: "99.9%" },
        { label: "Accuracy", val: "94%" }
      ],
      icon: Bot
    }
  },
  {
    id: 2,
    badge: "AI AUTOMATION",
    title: { main: "Automate Your Business", highlight: "With AI" },
    description: "Connect leads, conversations, follow-ups and business workflows with intelligent automation.",
    primaryCta: "Explore AI Automation",
    secondaryCta: "Book a Free Consultation",
    link: "/services/ai-automation",
    colors: { 
      badge: "bg-purple-500", 
      gradient: "from-purple-600 via-magenta-600 to-blue-600", 
      highlight: "from-purple-400 to-magenta-400",
      bgGlow: "from-purple-900/40 via-magenta-900/20 to-transparent"
    },
    visual: {
      title: "Flow Engine",
      stats: [
        { label: "Tasks", val: "12.5k" },
        { label: "Saved", val: "400h" }
      ],
      icon: Workflow
    }
  },
  {
    id: 3,
    badge: "REAL ESTATE CRM",
    title: { main: "Smarter CRM for", highlight: "Real Estate Growth" },
    description: "Manage properties, leads, agents, follow-ups and sales from one powerful CRM platform.",
    primaryCta: "Explore Real Estate CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/real-estate-crm",
    colors: { 
      badge: "bg-teal-500", 
      gradient: "from-teal-600 via-blue-600 to-violet-600", 
      highlight: "from-teal-400 to-blue-400",
      bgGlow: "from-teal-900/40 via-blue-900/20 to-transparent"
    },
    visual: {
      title: "RE Dashboard",
      stats: [
        { label: "Listings", val: "482" },
        { label: "Closures", val: "+18%" }
      ],
      icon: Building2
    }
  },
  {
    id: 4,
    badge: "WHATSAPP + META API",
    title: { main: "Turn Conversations", highlight: "Into Customers" },
    description: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.",
    primaryCta: "Explore WhatsApp CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/whatsapp-crm",
    colors: { 
      badge: "bg-green-500", 
      gradient: "from-green-600 via-teal-600 to-blue-600", 
      highlight: "from-green-400 to-teal-400",
      bgGlow: "from-green-900/40 via-teal-900/20 to-transparent"
    },
    visual: {
      title: "Meta Connect",
      stats: [
        { label: "Msgs", val: "50k+" },
        { label: "Leads", val: "1.2k" }
      ],
      icon: MessageSquare
    }
  },
  {
    id: 5,
    badge: "ALL-IN-ONE CRM",
    title: { main: "One CRM.", highlight: "Your Entire Business." },
    description: "Bring sales, customer management, automation and business operations together in one powerful platform.",
    primaryCta: "Explore CRM Solutions",
    secondaryCta: "Book a Free Consultation",
    link: "/services/crm-solutions",
    colors: { 
      badge: "bg-indigo-500", 
      gradient: "from-indigo-600 via-purple-600 to-blue-600", 
      highlight: "from-indigo-400 to-purple-400",
      bgGlow: "from-indigo-900/40 via-purple-900/20 to-transparent"
    },
    visual: {
      title: "Biz OS",
      stats: [
        { label: "Revenue", val: "+32%" },
        { label: "Retention", val: "98%" }
      ],
      icon: Database
    }
  },
];

const FloatingCard = ({ icon: Icon, title, val, color, className }: any) => (
  <motion.div 
    className={`absolute bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 ${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <div className={`p-2 rounded-lg bg-${color}-500/20 text-${color}-400`}>
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{title}</div>
      <div className="text-white font-bold text-xs">{val}</div>
    </div>
  </motion.div>
);

const VisualComposition = ({ slide }: { slide: typeof slides[0] }) => {
  const Icon = slide.visual.icon;
  return (
    <motion.div 
      className="relative w-full max-w-lg aspect-square flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-tr ${slide.colors.bgGlow} rounded-full blur-3xl animate-pulse`} />
      
      <div className="relative z-10 w-[340px] h-[240px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 overflow-hidden">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
           <div className="flex gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
           </div>
           <div className="text-[10px] text-slate-400 font-bold uppercase">{slide.visual.title} Active</div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {slide.visual.stats.map((stat, i) => (
            <div key={i} className="bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-end">
              <div className="text-[10px] text-slate-400 uppercase">{stat.label}</div>
              <div className="text-xl text-white font-bold">{stat.val}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
           <Icon className="w-32 h-32 text-white" />
        </div>
      </div>

      <FloatingCard icon={slide.visual.icon} title="Status" val="Production" color="blue" className="top-10 -left-5 w-44" />
      <FloatingCard icon={Rocket} title="Performance" val="Optimized" color="violet" className="bottom-10 -right-5 w-44" />
      <FloatingCard icon={TrendingUp} title="Impact" val="High" color="cyan" className="top-40 -right-10 w-40" />
    </motion.div>
  );
};

const TrustBar = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/10 mt-8 mb-6">
    {[
        { val: "500+", label: "Clients" },
        { val: "50+", label: "Industries" },
        { val: "70+", label: "Countries" },
        { val: "24/7", label: "Support" },
    ].map((item, i) => (
        <div key={i} className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">{item.val}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">{item.label}</div>
        </div>
    ))}
  </div>
);

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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
      className="relative w-full overflow-hidden bg-[#050816] pt-24 pb-12 md:pt-32 md:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${slides[currentSlide].colors.bgGlow}`} />
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10">
        <div className="min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid lg:grid-cols-2 gap-12 items-center w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 text-center lg:text-left">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm ${slides[currentSlide].colors.badge}`}>
                  {slides[currentSlide].badge}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                  {slides[currentSlide].title.main} <br />
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].colors.highlight}`}>
                    {slides[currentSlide].title.highlight}
                  </span>
                </h1>
                
                <p className="text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link to={slides[currentSlide].link}>
                    <Button size="lg" className={`bg-gradient-to-r ${slides[currentSlide].colors.gradient} hover:opacity-90 rounded-xl h-14 px-8 font-bold shadow-xl`}>
                      {slides[currentSlide].primaryCta} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 font-bold">
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  </Link>
                </div>

                <TrustBar />

                <div className="text-center lg:text-left text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    Trusted by Businesses Worldwide: CRM · AI · Automation · WhatsApp · Meta API · Software Dev
                </div>
              </div>

              <div className="flex items-center justify-center">
                <VisualComposition slide={slides[currentSlide]} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center lg:justify-start gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
