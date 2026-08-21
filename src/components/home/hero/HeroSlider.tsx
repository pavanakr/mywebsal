import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, MessageSquare, Database, Layout, PieChart, Users, Phone, Send, BarChart3, Workflow, Building2, TrendingUp, Cpu, Globe, Rocket, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    badge: "AI-POWERED SOLUTIONS",
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
    badge: "AI-POWERED SOLUTIONS",
    title: { main: "AI Chatbots &", highlight: "Smart Automation" },
    description: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
    primaryCta: "Explore AI Solutions",
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
    badge: "AI-POWERED SOLUTIONS",
    title: { main: "AI Chatbots &", highlight: "Smart Automation" },
    description: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
    primaryCta: "Explore AI Solutions",
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
    badge: "AI-POWERED SOLUTIONS",
    title: { main: "AI Chatbots &", highlight: "Smart Automation" },
    description: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
    primaryCta: "Explore AI Solutions",
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
    badge: "AI-POWERED SOLUTIONS",
    title: { main: "AI Chatbots &", highlight: "Smart Automation" },
    description: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
    primaryCta: "Explore AI Solutions",
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

const FloatingMetric = ({ label, value, trend, trendColor }: any) => (
  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100/50 flex flex-col min-w-[120px]">
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
      className={`absolute z-30 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 ${className}`}
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
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{status}</div>
        </div>
      </div>
    </motion.div>
  );
};

const VisualComposition = ({ slide }: { slide: typeof slides[0] }) => {
  return (
    <motion.div 
      className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glows */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${slide.colors.bgGlow} rounded-full blur-[100px] opacity-40 animate-pulse`} />
      
      {/* Main Dashboard Container */}
      <div className="relative z-10 w-full h-full bg-white rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden flex flex-col">
        {/* Dashboard Header */}
        <div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-2">AI Automation Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-200" />
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
              <Users className="w-3 h-3 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
          {/* Top Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <FloatingMetric label="Total Conversations" value="18,254" trend="+22.5%" trendColor="text-emerald-500" />
            <FloatingMetric label="Qualified Leads" value="1,250" trend="+18.6%" trendColor="text-emerald-500" />
            <FloatingMetric label="Automation Rate" value="86%" trend="+15.4%" trendColor="text-emerald-500" />
          </div>

          {/* Middle Section: Chart & Activity */}
          <div className="flex-1 grid grid-cols-5 gap-6 min-h-0">
            {/* Analytics Chart Placeholder */}
            <div className="col-span-3 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Conversation Analytics</span>
              </div>
              <div className="flex-1 w-full relative">
                {/* SVG Curve for Chart */}
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path 
                    d="M0 60 Q 25 50, 50 55 T 100 30 T 150 45 T 200 10" 
                    fill="none" 
                    stroke="url(#chartGradient)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Month labels */}
                <div className="flex justify-between mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => (
                    <span key={m} className="text-[8px] text-slate-400 font-medium">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Channels & Activity */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-3">Top Channels</span>
                <div className="space-y-2">
                  {[
                    { label: 'WhatsApp', val: '45%', color: 'bg-emerald-500' },
                    { label: 'Website', val: '30%', color: 'bg-blue-500' },
                    { label: 'Email', val: '15%', color: 'bg-purple-500' }
                  ].map(c => (
                    <div key={c.label} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${c.color}`} />
                      <span className="text-[9px] text-slate-600 font-medium flex-1">{c.label}</span>
                      <span className="text-[9px] text-slate-400 font-bold">{c.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Activities Bar */}
          <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center"><MessageSquare className="w-2.5 h-2.5 text-emerald-600" /></div>
                 <span className="text-[9px] font-bold text-slate-600">Lead Qualified</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center"><Send className="w-2.5 h-2.5 text-blue-600" /></div>
                 <span className="text-[9px] font-bold text-slate-600">Email Sent</span>
               </div>
            </div>
            <span className="text-[8px] text-slate-400 font-medium italic">Auto-sync active</span>
          </div>
        </div>
      </div>

      {/* Floating UI Cards */}
      <PremiumFloatingCard 
        icon={Bot} 
        title="AI Assistant" 
        status="Active" 
        color="blue" 
        className="-left-16 top-[20%]"
        delay={0.2}
      />

      <PremiumFloatingCard 
        icon={TrendingUp} 
        title="Analytics" 
        status="+12.5%" 
        color="purple" 
        className="-right-12 top-[45%]"
        delay={0.4}
      />

      <PremiumFloatingCard 
        icon={Zap} 
        title="Automation" 
        status="98%" 
        color="green" 
        className="-left-8 bottom-[15%]"
        delay={0.6}
      />

      <PremiumFloatingCard 
        icon={MessageSquare} 
        title="WhatsApp" 
        status="Live" 
        color="cyan" 
        className="right-[5%] -top-8"
        delay={0.8}
      />

      <PremiumFloatingCard 
        icon={Users} 
        title="Lead Qualified" 
        status="Added to CRM" 
        color="pink" 
        className="left-[10%] -bottom-6"
        delay={1}
      />

      {/* Enhanced Workflow Visual Card */}
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
            { label: 'Smart Response', icon: Send, color: 'text-cyan-500', bg: 'bg-cyan-50' },
            { label: 'Lead Qualified', icon: MessageSquare, color: 'text-pink-500', bg: 'bg-pink-50' },
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
          {/* Animated pulses on connections */}
          <div className="absolute left-[15px] top-4 w-[2px] h-[calc(100%-24px)] bg-slate-100 z-0" />
        </div>
      </motion.div>
      
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
      id="hero-slider"
      className="relative w-full overflow-hidden bg-[#040612] pt-24 pb-12 md:pt-32 md:pb-16 min-h-[750px] flex items-center"
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
            <div className={`absolute top-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full blur-[120px] opacity-40 mix-blend-screen bg-gradient-to-br ${slides[currentSlide].colors.bgGlow}`} />
            <div className={`absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full blur-[120px] opacity-30 mix-blend-screen bg-gradient-to-tr ${slides[currentSlide].colors.bgGlow}`} />
            
            {/* Multi-color accents (Blue, Purple, Magenta) */}
            <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-20 bg-blue-600/30 mix-blend-soft-light" />
            <div className="absolute bottom-[10%] right-[20%] w-[35%] h-[35%] rounded-full blur-[100px] opacity-20 bg-purple-600/30 mix-blend-soft-light" />
            <div className="absolute top-[40%] right-[30%] w-[20%] h-[20%] rounded-full blur-[80px] opacity-15 bg-magenta-500/20 mix-blend-screen" />
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
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md ${slides[currentSlide].colors.badge}`}>
                  {slides[currentSlide].badge}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight lg:leading-[1.15] max-w-2xl">
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
                    <Button size="lg" className={`bg-gradient-to-r ${slides[currentSlide].colors.gradient} hover:opacity-90 rounded-2xl h-14 px-10 font-bold shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]`}>
                      {slides[currentSlide].primaryCta} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 rounded-2xl h-14 px-10 font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
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
