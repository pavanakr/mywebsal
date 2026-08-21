import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, Zap, Building2, MessageSquare, Database, Users, CheckCircle2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder import for the design reference (internal use)
import heroAsset from "./assets/hero-reference.png.asset.json";

const slides = [
  {
    id: 1,
    title: "AI Chatbots & Smart Automation",
    subtitle: "Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.",
    cta: "Explore AI Solutions",
    link: "/services/ai-chatbot",
    badge: "AI-POWERED SOLUTIONS",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    stats: [
      { label: "Happy Clients", value: "100+", icon: Users },
      { label: "Projects Delivered", value: "250+", icon: Database },
      { label: "Experience", value: "6+", icon: CheckCircle2 },
      { label: "Support", value: "24/7", icon: Headphones }
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920",
    alt: "AI Chatbot Interface"
  }
];

export function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0F1E] pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Main Hero Container */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#0F172A] to-[#1E1B4B] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Side */}
            <div className="space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="text-xs font-bold text-white tracking-widest">AI-POWERED SOLUTIONS</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tighter">
                AI Chatbots & <br />
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Smart Automation</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl">
                Automate conversations, qualify leads, provide 24/7 support and streamline your business operations with intelligent AI.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white rounded-xl h-14 px-8 text-lg font-bold">
                  Explore AI Solutions <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 text-lg">
                  Book a Free Consultation
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {slides[0].stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 text-white font-bold text-2xl">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side (Mockups) */}
            <div className="relative h-[500px]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent blur-3xl" />
               {/* Dashboard Mockup - Simulated using CSS grids/layers for now */}
               <div className="absolute inset-0 flex items-center justify-center">
                 {/* Robot placeholder */}
                 <div className="w-64 h-64 bg-white/5 rounded-full flex items-center justify-center animate-bounce">
                    <Bot className="w-32 h-32 text-blue-400" />
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Below Slider Cards */}
        <div className="grid md:grid-cols-6 gap-4 mt-8">
            {[
                { title: "Real Estate CRM", icon: Building2 },
                { title: "All-in-One CRM", icon: Database },
                { title: "WhatsApp CRM", icon: MessageSquare },
                { title: "AI Chatbots", icon: Bot },
                { title: "AI Automations", icon: Zap },
                { title: "Custom Software", icon: Users },
            ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                    <card.icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                    <Link to="#" className="text-blue-600 text-sm font-semibold flex items-center group">
                        Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
