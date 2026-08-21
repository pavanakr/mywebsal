import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, MessageSquare, Database, Layout, PieChart, Users, Phone, Send, BarChart3, Workflow, Building2, TrendingUp, Cpu, Globe, Rocket, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    badge: "AI CHATBOTS",
    title: { main: "AI Chatbots &", highlight: "Smart Automation" },
    description: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
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
      type: 'chatbot',
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
    title: { main: "Intelligent AI", highlight: "Workflow Automation" },
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
      type: 'automation',
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
      type: 'real-estate',
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
    badge: "WHATSAPP + META API CRM",
    title: { main: "Turn Conversations", highlight: "Into Customers" },
    description: "Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.",
    primaryCta: "Explore WhatsApp CRM",
    secondaryCta: "Book a Free Consultation",
    link: "/solutions/whatsapp-crm",
    colors: { 
      badge: "bg-green-500", 
      gradient: "from-green-600 via-cyan-600 via-blue-600 to-purple-600", 
      highlight: "from-green-400 to-cyan-400",
      bgGlow: "from-green-900/40 via-cyan-900/20 to-transparent"
    },
    visual: {
      type: 'whatsapp',
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
      gradient: "from-blue-600 via-violet-600 to-cyan-500", 
      highlight: "from-blue-400 to-violet-400",
      bgGlow: "from-blue-900/40 via-violet-900/20 to-transparent"
    },
    visual: {
      type: 'complete-crm',
      title: "Biz OS",
      stats: [
        { label: "Revenue", val: "+32%" },
        { label: "Retention", val: "98%" }
      ],
      icon: Database
    }
  },
];

const FloatingMetric = ({ label, value, trend, trendColor }: any) => (
  <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col min-w-[130px] hover:scale-105 transition-transform duration-300">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{label}</span>
    <div className="flex items-end justify-between mt-1">
      <span className="text-lg font-bold text-slate-900 leading-none">{value}</span>
      <span className={`text-[10px] font-bold ${trendColor} flex items-center`}>
        {trend}
      </span>
    </div>
  </div>
);

const PremiumFloatingCard = ({ icon: Icon, title, status, color, className, delay = 0 }: any) => {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-indigo-600 shadow-blue-500/20 text-blue-600 bg-blue-50',
    cyan: 'from-cyan-400 to-blue-500 shadow-cyan-500/20 text-cyan-600 bg-cyan-50',
    purple: 'from-purple-500 to-violet-600 shadow-purple-500/20 text-purple-600 bg-purple-50',
    green: 'from-emerald-400 to-teal-600 shadow-emerald-500/20 text-emerald-600 bg-emerald-50',
    pink: 'from-pink-500 to-rose-600 shadow-pink-500/20 text-pink-600 bg-pink-50',
  };

  const selectedColor = colorMap[color] || colorMap.blue;
  const colorParts = selectedColor.split(' ');

  return (
    <motion.div
      className={`absolute z-30 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-slate-200/50 ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -8, 0],
      }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.2 }
      }}
    >
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${colorParts[0]} ${colorParts[1]} flex items-center justify-center shadow-lg ${colorParts[2]}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-[10px] font-bold text-slate-900 leading-none mb-1">{title}</div>
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${colorParts[3]}`} />
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{status}</div>
        </div>
      </div>
    </motion.div>
  );
};

const VisualComposition = ({ slide }: { slide: typeof slides[0] }) => {
  return (
    <motion.div 
      className="relative w-full max-w-2xl aspect-[16/10] flex items-center justify-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glows */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${slide.colors.bgGlow} rounded-full blur-[100px] opacity-20 animate-pulse-slow`} />
      
      {/* Main Dashboard Container */}
      <div className="relative z-10 w-full h-full bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-100 overflow-hidden flex flex-col">
        {/* Dashboard Header */}
        <div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">
              {slide.visual.type === 'chatbot' ? 'AI Chatbot Logic' : 
               slide.visual.type === 'automation' ? 'Automation Workflow' :
               slide.visual.type === 'real-estate' ? 'Property CRM' :
               slide.visual.type === 'whatsapp' ? 'WhatsApp CRM' : 'Business OS'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-200" />
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
              <slide.visual.icon className="w-3 h-3 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
          {/* Top Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <FloatingMetric label={slide.visual.type === 'real-estate' ? 'Listings' : 'Total Conv.'} value={slide.visual.stats[0].val} trend="+22.5%" trendColor="text-emerald-500" />
            <FloatingMetric label={slide.visual.type === 'real-estate' ? 'Leads' : 'Qualified'} value={slide.visual.stats[1].val} trend="+18.6%" trendColor="text-emerald-500" />
            <FloatingMetric label="Performance" value="High" trend="+15.4%" trendColor="text-emerald-500" />
          </div>

          {/* Visualization area dependent on type */}
          <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-center relative overflow-hidden group/viz">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover/viz:opacity-100 transition-opacity duration-700" />
             {slide.visual.type === 'chatbot' && <Bot className="w-24 h-24 text-blue-300 opacity-50 group-hover/viz:scale-110 group-hover/viz:text-blue-400 transition-all duration-700" />}
             {slide.visual.type === 'automation' && <Workflow className="w-24 h-24 text-purple-300 opacity-50 group-hover/viz:scale-110 group-hover/viz:text-purple-400 transition-all duration-700" />}
             {slide.visual.type === 'real-estate' && <Building2 className="w-24 h-24 text-teal-300 opacity-50 group-hover/viz:scale-110 group-hover/viz:text-teal-400 transition-all duration-700" />}
             {slide.visual.type === 'whatsapp' && <MessageSquare className="w-24 h-24 text-green-300 opacity-50 group-hover/viz:scale-110 group-hover/viz:text-green-400 transition-all duration-700" />}
             {slide.visual.type === 'complete-crm' && <Database className="w-24 h-24 text-indigo-300 opacity-50 group-hover/viz:scale-110 group-hover/viz:text-indigo-400 transition-all duration-700" />}
             <motion.div 
               className="absolute bottom-4 right-4"
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             >
               <Sparkles className="w-5 h-5 text-indigo-200" />
             </motion.div>
          </div>

        </div>
      </div>

      {/* Conditional Floating UI Cards */}
      {slide.visual.type === 'chatbot' && (
        <>
          <PremiumFloatingCard icon={Bot} title="AI Assistant" status="Active" color="blue" className="-left-16 top-[20%]" delay={0.2} />
          <PremiumFloatingCard icon={MessageSquare} title="WhatsApp" status="Live" color="cyan" className="right-[5%] -top-8" delay={0.4} />
        </>
      )}

      {slide.visual.type === 'automation' && (
        <>
          <PremiumFloatingCard icon={Zap} title="Automation" status="98%" color="green" className="-left-8 bottom-[15%]" delay={0.2} />
          <PremiumFloatingCard icon={TrendingUp} title="Efficiency" status="+45%" color="purple" className="-right-12 top-[45%]" delay={0.4} />
        </>
      )}

      {slide.visual.type === 'real-estate' && (
        <>
          <PremiumFloatingCard icon={Building2} title="Properties" status="482 Active" color="blue" className="-left-16 top-[20%]" delay={0.2} />
          <PremiumFloatingCard icon={Users} title="New Lead" status="Real Estate" color="pink" className="left-[10%] -bottom-6" delay={0.4} />
        </>
      )}

      {slide.visual.type === 'whatsapp' && (
        <>
          <PremiumFloatingCard icon={MessageSquare} title="WhatsApp API" status="Connected" color="green" className="right-[5%] -top-8" delay={0.2} />
          <PremiumFloatingCard icon={Bot} title="AI Agent" status="Responding" color="cyan" className="-left-16 top-[20%]" delay={0.4} />
        </>
      )}

      {slide.visual.type === 'complete-crm' && (
        <>
          <PremiumFloatingCard icon={Database} title="Cloud DB" status="Synced" color="blue" className="-left-8 bottom-[15%]" delay={0.2} />
          <PremiumFloatingCard icon={TrendingUp} title="Analytics" status="+12.5%" color="purple" className="-right-12 top-[45%]" delay={0.4} />
        </>
      )}

      {/* Conditional Enhanced Workflow Visual Card for Automation/WhatsApp slides */}
      {(slide.visual.type === 'automation' || slide.visual.type === 'whatsapp') && (
        <motion.div 
          className="absolute -right-12 top-[10%] z-20 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 p-4 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap className="w-3 h-3 text-emerald-500" />
            AI Automation Flow
          </div>
          <div className="space-y-4 relative">
            {[
              { label: 'New Lead', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
              { label: 'AI Processing', icon: Bot, color: 'text-purple-500', bg: 'bg-purple-50' },
              { label: 'Added to CRM', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50' }
            ].map((step, i, arr) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`w-8 h-8 rounded-lg ${step.bg} flex items-center justify-center shadow-sm border border-slate-100`}>
                    <step.icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-700">{step.label}</div>
                  {i < arr.length - 1 && (
                    <motion.div 
                      className={`absolute left-4 top-8 w-[1px] h-4 bg-gradient-to-b from-slate-200 to-transparent z-0`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="absolute left-[15px] top-4 w-[2px] h-[calc(100%-24px)] bg-slate-100 z-0" />
          </div>
        </motion.div>
      )}
      
      {/* Small Floating Icons */}
      <div className="absolute bottom-[5%] left-[25%] z-20 w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg text-white">
        <Phone className="w-4 h-4" />
      </div>
      <div className="absolute top-[5%] left-[20%] z-20 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg text-white">
        <Mail className="w-3 h-3" />
      </div>
    </motion.div>
  );
};

const TrustBar = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-white/5 mt-12 mb-8">
    {[
        { val: "500+", label: "Clients Globally" },
        { val: "50+", label: "Industry Verticals" },
        { val: "70+", label: "Countries Served" },
        { val: "24/7", label: "Expert Support" },
    ].map((item, i) => (
        <div key={i} className="text-center group">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{item.val}</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">{item.label}</div>
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
      id="hero-slider"
      className="relative w-full overflow-hidden bg-[#040612] pt-28 pb-12 md:pt-36 md:pb-16 min-h-[700px] md:min-h-[750px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Visual Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Navy Base with subtle patterns */}
        <div className="absolute inset-0 bg-[#040612]" />
        
        {/* Technology Grid Mask */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Primary Soft Glows matching slide colors */}
            <div className={`absolute top-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full blur-[120px] opacity-20 mix-blend-screen bg-gradient-to-br ${slides[currentSlide].colors.bgGlow}`} />
            <div className={`absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full blur-[120px] opacity-15 mix-blend-screen bg-gradient-to-tr ${slides[currentSlide].colors.bgGlow}`} />
            
            {/* Multi-color accents (Blue, Purple, Magenta) */}
            <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-10 bg-blue-600/15 mix-blend-soft-light" />
            <div className="absolute bottom-[10%] right-[20%] w-[35%] h-[35%] rounded-full blur-[100px] opacity-10 bg-purple-600/15 mix-blend-soft-light" />
            <div className="absolute top-[40%] right-[30%] w-[20%] h-[20%] rounded-full blur-[80px] opacity-8 bg-magenta-500/10 mix-blend-screen" />
          </motion.div>
        </AnimatePresence>

        {/* Floating abstract lighting particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />
      </div>

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
                <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-white text-[11px] font-bold tracking-[0.25em] uppercase backdrop-blur-md shadow-xl ${slides[currentSlide].colors.badge}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {slides[currentSlide].badge}
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight lg:leading-[1.15] max-w-2xl">
                  {slides[currentSlide].title.main}
                  <span className={`block mt-2 bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].colors.highlight}`}>
                    {slides[currentSlide].title.highlight}
                  </span>
                </h1>
                
                <p className="text-slate-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-90">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                  <Link to={slides[currentSlide].link}>
                    <Button size="lg" className={`bg-gradient-to-r ${slides[currentSlide].colors.gradient} hover:opacity-90 rounded-xl h-14 px-8 font-bold shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] border-none group`}>
                      {slides[currentSlide].primaryCta} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl">
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

        <div className="flex justify-center lg:justify-start gap-4 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group relative p-2"
            >
              <div className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-10 bg-white' : 'w-3 bg-white/30 group-hover:bg-white/50'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
