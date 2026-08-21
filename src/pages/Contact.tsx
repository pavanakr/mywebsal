import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { LocalBusinessSchema } from '@/components/SchemaMarkup';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  };

  const commandPlaceholder = `'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''

IMPORTANT: The current homepage hero slider has been damaged and the UI is not acceptable.

I want you to COMPLETELY REBUILD ONLY THE HOMEPAGE HERO SLIDER from scratch.

Do NOT try to fix the current slider styling.
Do NOT preserve the current slider layout.
Do NOT use the current oversized typography layout.

Keep the existing:

top announcement bar

navbar

logo

navigation

Get in Touch button

existing website branding

all sections below the hero

ONLY replace the hero slider.

================================
DESIGN GOAL

Create a premium, modern, colorful SaaS + AI technology hero slider for:

SOFTURECS AI LABS PRIVATE LIMITED

The hero should look like a professional international software/AI company's website.

Think:

premium SaaS

AI technology

CRM platform

business automation

modern enterprise software

It must NOT look like:

a poster

a template

a gaming website

a generic stock-image website

a typography-only design

================================
HERO LAYOUT

Use a balanced 2-column layout.

LEFT SIDE:

small category badge

strong headline

short description

primary CTA

secondary CTA

optional small trust/stat row

RIGHT SIDE:

large professional visual

CRM dashboard / AI interface / automation workflow

floating UI cards

subtle decorative technology elements

Keep both sides visually balanced.

Do NOT allow the headline to occupy most of the screen.

Do NOT break the headline into one word per line.

Maximum headline width should be controlled.

Use normal professional line breaks.

Hero should have comfortable padding.

================================
SLIDE 1 — AI CHATBOTS

Badge:
AI-POWERED SOLUTIONS

Headline:
AI Chatbots That Work 24/7

Description:
Automate customer conversations, qualify leads and deliver intelligent support with AI-powered chatbots.

Primary CTA:
Explore AI Solutions

Secondary CTA:
Book a Free Consultation

Visual:
Create a premium AI chatbot interface showing:

AI assistant

customer conversation

lead qualification

response suggestions

analytics

CRM connection

Use blue + purple + cyan visual accents.

================================
SLIDE 2 — AI AUTOMATION

Badge:
AI AUTOMATION

Headline:
Automate Your Business With AI

Description:
Connect leads, conversations, follow-ups and business workflows with intelligent automation.

Primary CTA:
Explore AI Automation

Secondary CTA:
Book a Free Consultation

Visual should show an elegant automation workflow:

Lead Capture
↓
AI Processing
↓
Smart Response
↓
Lead Qualification
↓
CRM

Use blue, violet, purple and cyan accents.

================================
SLIDE 3 — REAL ESTATE CRM

Badge:
REAL ESTATE CRM

Headline:
Smarter CRM for Real Estate Growth

Description:
Manage properties, leads, agents, follow-ups and sales from one powerful CRM platform.

Primary CTA:
Explore Real Estate CRM

Secondary CTA:
Book a Free Consultation

Visual:
Premium real estate CRM dashboard showing:

property cards

leads

sales pipeline

agents

analytics

follow-up reminders

Use blue + teal + violet accents.

================================
SLIDE 4 — WHATSAPP + META API

Badge:
WHATSAPP + META API

Headline:
Turn Conversations Into Customers

Description:
Connect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.

Primary CTA:
Explore WhatsApp CRM

Secondary CTA:
Book a Free Consultation

Visual:
Show:
WhatsApp conversation
→ AI response
→ lead capture
→ CRM
→ sales follow-up

Use green/cyan/purple accents while maintaining the company brand.

================================
SLIDE 5 — ALL-IN-ONE CRM

Badge:
ALL-IN-ONE CRM

Headline:
One CRM. Your Entire Business.

Description:
Bring sales, customer management, automation and business operations together in one powerful platform.

Primary CTA:
Explore CRM Solutions

Secondary CTA:
Book a Free Consultation

Visual:
Modern CRM dashboard showing:

leads

sales pipeline

customers

analytics

automation

tasks

revenue

Use blue + purple + cyan gradients.

================================
VISUAL DESIGN

Use a premium gradient-based technology background.

Preferred palette:

Deep Navy
Electric Blue
Royal Blue
Violet
Purple
Cyan

Use gradients subtly.

Do NOT make the entire hero neon.

Do NOT use excessive glow.

Do NOT use huge empty spaces.

Do NOT use a single dark laptop photograph.

Do NOT use generic office stock photography.

Use UI/dashboard-style visuals that communicate our actual services.

Create depth using:

dashboard panels

floating cards

charts

workflow nodes

AI assistant cards

subtle abstract shapes

soft gradients

light glass effects

================================
TYPOGRAPHY

This is VERY IMPORTANT.

Do NOT use:

REAL
ESTATE
CRM
BUILT
FOR
...

Do NOT put one word per line.

Use a maximum of 2–3 lines for the main headline.

Example:

Smarter CRM
for Real Estate Growth

or:

AI Chatbots
That Work 24/7

Headline should be approximately:
48–64px desktop

and responsive down to:
32–40px mobile.

Do not use extremely oversized typography.

================================
SLIDER BEHAVIOR

Use a reliable existing slider library if the project already has one.

If not, implement a lightweight reliable slider.

Requirements:

5 slides

autoplay every 5 seconds

smooth transition

previous arrow

next arrow

pagination dots

keyboard navigation

touch/swipe support

pause on hover

pause when user interacts

mobile responsive

tablet responsive

desktop responsive

reduced-motion support

Do not allow slides to overlap each other.

Do not allow content from one slide to appear on another.

Do not allow horizontal scrolling.

Do not allow the hero to break the page layout.

================================
HEIGHT

Keep the hero visually compact and premium.

Desktop:
approximately 560–650px

Tablet:
approximately 520–600px

Mobile:
auto height based on content.

Do NOT create an extremely tall hero.

================================
RESPONSIVE DESIGN

Desktop:
2-column layout.

Tablet:
balanced 2-column layout where possible.

Mobile:
stack:

Badge
Headline
Description
CTA
Visual

The visual must remain visible.

Do NOT crop the important AI/CRM visual.

Do NOT create horizontal overflow.

================================
CTA

Primary CTA:
Use the existing website CTA/routing wherever possible.

Secondary CTA:
Book a Free Consultation

Do not create broken links.

Do not remove existing CTA functionality.

================================
SEO

Homepage must have ONLY ONE H1.

Use the first slide headline as the homepage H1.

Other slide headlines must use H2 or appropriate semantic elements.

Do not put important text inside images.

Add meaningful alt text to visual images.

Do not keyword stuff.

================================
PERFORMANCE

Use optimized images/assets.

First slide visual should load with priority.

Lazy-load other slide visuals when appropriate.

Avoid unnecessary libraries.

Avoid heavy animations.

Prevent layout shift.

================================
IMPORTANT — PRESERVE WEBSITE

DO NOT MODIFY:

announcement bar

navbar

logo

navigation

About section

Services section

Industries section

Insights section

footer

chatbot

floating buttons

other homepage sections

ONLY rebuild the hero slider.

Before coding, inspect the current hero implementation and remove the broken hero-specific layout/styles safely.

Make sure old hero CSS does not conflict with the new slider.

================================
FINAL QA

After rebuilding:

Test:

Desktop 1920px

Desktop 1440px

Laptop 1366px

Tablet

Mobile 390px

Mobile 375px

Verify:

no oversized text

no broken layout

no overlapping slides

no horizontal scrollbar

images display correctly

arrows work

dots work

autoplay works

swipe works

CTA links work

navbar remains unchanged

hero does not cover the navbar

hero does not affect sections below it

page remains responsive

The final result must look like a polished, premium AI + SaaS company website.

REBUILD THE HERO SLIDER FROM SCRATCH.''`;

  return (
    <Layout>
      <SEO 
        title="Contact SOFTURECS AI LABS PRIVATE LIMITED"
        description="Contact SOFTURECS AI LABS PRIVATE LIMITED for AI solutions & software development in Hyderabad, India. Free consultation, 24-hour response. Call +91 7396080902 or email info@softurecsailabs.com."
        keywords="contact Softurecs, software development inquiry, AI solutions contact, IT consulting Hyderabad, software company India, custom software development"
      />
      <LocalBusinessSchema city="Hyderabad" region="Telangana" />
      <PageHero
        title="Contact SOFTURECS AI LABS PRIVATE LIMITED – Software Development Experts in Hyderabad"
        description="Talk to Our Software Experts in India. Get a Free AI & Software Consultation. Start Your Digital Transformation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
        icon={Headphones}
        iconColor="from-cyan-500 to-blue-600"
        badge="Get In Touch"
        variant="centered"
        stats={[
          { value: '24hrs', label: 'Response Time' },
          { value: '700+', label: 'Projects Completed' },
          { value: '98%', label: 'Client Retention' }
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input
                        required
                        placeholder={commandPlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder={commandPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <Input
                        placeholder={commandPlaceholder}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder={commandPlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                    <select
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="saas">SaaS Development</option>
                      <option value="application-modernization">Application Modernization</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tell Us About Your Project *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder={commandPlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card p-6 rounded-2xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:info@softurecsailabs.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">info@softurecsailabs.com</div>
                    </div>
                  </a>
                  <a href="tel:+917396080902" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium text-foreground">+91 7396080902</div>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/917396080902?text=Hi, I'm interested in your services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-medium text-foreground">Chat with us</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Business Hours</div>
                      <div className="font-medium text-foreground">Mon - Sat: 9AM - 7PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-cyan-light/10 p-6 rounded-2xl border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Quick Response</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours. For urgent matters, call us directly or reach out via WhatsApp for instant support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-4 h-4" />
              Our Headquarters
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visit Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-lg text-slate-400">
              Experience innovation at our state-of-the-art facility in Hyderabad
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 blur-xl opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Hyderabad, India</h3>
                      <p className="text-cyan-400 font-medium">Corporate Headquarters</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        <span className="font-semibold text-white block mb-2">SOFTURECS AI LABS PRIVATE LIMITED</span>
                        5th Floor, Trinity Corporate Building, 501-A<br />
                        eSeva Lane, KPHB Phase 3, Kukatpally<br />
                        Hyderabad, Telangana – 500072
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.a 
                        href="tel:+917396080902"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-all group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <Phone className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">Call Us</div>
                          <div className="text-white font-medium">+91 7396080902</div>
                        </div>
                      </motion.a>
                      <motion.a 
                        href="mailto:info@softurecsailabs.com"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-all group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">Email Us</div>
                          <div className="text-white font-medium">info@softurecsailabs.com</div>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1475710526085!2d78.3908207!3d17.488251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918456f91605%3A0x8687265851416e78!2sTrinity%20Corporate%2C%20eSeva%20Ln%2C%20K%20P%20H%20B%20Phase%203%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1715456789012!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
