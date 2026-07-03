import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Vertex Labs transformed our vision into a world-class platform. Their technical expertise and commitment to quality exceeded all expectations. The team delivered on time and the results speak for themselves.",
    author: 'Sarah Chen',
    role: 'CEO, HealthPulse',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: "Working with Vertex Labs was a game-changer for our fintech startup. They understood our complex requirements and built a secure, scalable solution that our customers love.",
    author: 'Michael Torres',
    role: 'CTO, FinVault',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    quote: "The team at Vertex Labs brings a perfect blend of innovation and reliability. They didn't just build software; they became a strategic partner in our digital transformation journey.",
    author: 'Emily Watson',
    role: 'Director of Technology, LogiTrack',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-navy to-navy-light overflow-hidden relative">
      {/* Architectural background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary-foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-foreground)/0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight">
              Trusted by leaders who ship
            </h2>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <Quote className="w-16 h-16 text-accent/30 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].author}
                    className="w-16 h-16 rounded-full border-2 border-accent mb-4"
                  />
                  <div className="text-lg font-semibold text-primary-foreground">
                    {testimonials[current].author}
                  </div>
                  <div className="text-primary-foreground/60">{testimonials[current].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === current ? 'bg-accent' : 'bg-primary-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
